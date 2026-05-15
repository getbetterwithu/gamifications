// 페이지별 필기 캔버스 매니저
// 한 페이지 = (PDF 렌더링 캔버스) + (필기 캔버스) 두 레이어.
// 필기 캔버스는 Pointer Events로 입력받아 라인 세그먼트를 그린다.
//
// 데이터 모델:
//   strokes: Stroke[]
//   Stroke = { tool: 'pen'|'eraser', color, size, points: [{x,y,pressure}] }
// 필기는 페이지별로 strokes 배열을 보관하고, 캔버스를 다시 그릴 때마다 strokes를 순서대로 렌더한다.
// 이렇게 하면 언두/리두/페이지별 클리어가 모두 단순해진다.
//
// 좌표계는 PDF 페이지의 픽셀 좌표(=PDF.js 렌더 해상도)를 그대로 사용한다.
// 화면에서는 CSS로 width/height만 줄여서 보여주므로, getBoundingClientRect로 좌표 변환.

class InkLayer {
  constructor(canvas, opts = {}) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.strokes = [];          // 확정된 strokes
    this.redoStack = [];        // 언두된 strokes (리두용)
    this.current = null;        // 그리는 중인 stroke
    this.tool = 'pen';
    this.color = opts.color || '#1a1a1a';
    this.size = opts.size || 2.5;
    this.eraserSize = 24;       // 지우개는 좀 큼
    this.onChange = opts.onChange || (() => {});
    this._bindEvents();
  }

  _bindEvents() {
    // Pointer Events로 통합: 마우스/터치/스타일러스 모두 한 코드로
    this.canvas.addEventListener('pointerdown', this._onDown.bind(this));
    this.canvas.addEventListener('pointermove', this._onMove.bind(this));
    this.canvas.addEventListener('pointerup', this._onUp.bind(this));
    this.canvas.addEventListener('pointercancel', this._onUp.bind(this));
    this.canvas.addEventListener('pointerleave', this._onUp.bind(this));

    // 손바닥/멀티터치로 인한 스크롤·줌 차단 (필기 영역 내부에서만)
    this.canvas.addEventListener('touchstart', (e) => { if (e.touches.length === 1) e.preventDefault(); }, { passive: false });
    this.canvas.addEventListener('touchmove', (e) => { if (e.touches.length === 1) e.preventDefault(); }, { passive: false });
  }

  _toLocal(e) {
    const r = this.canvas.getBoundingClientRect();
    // 캔버스 크기가 아직 잡히지 않았으면 (페이지가 비활성 상태였다가 갓 보임) 1:1로
    const scaleX = r.width > 0 ? this.canvas.width / r.width : 1;
    const scaleY = r.height > 0 ? this.canvas.height / r.height : 1;
    return {
      x: (e.clientX - r.left) * scaleX,
      y: (e.clientY - r.top) * scaleY,
      pressure: (e.pressure && e.pressure > 0) ? e.pressure : 0.5,
    };
  }

  _onDown(e) {
    // 마우스는 좌클릭만, 터치/펜은 모두
    if (e.pointerType === 'mouse' && e.button !== 0) return;
    this.canvas.setPointerCapture(e.pointerId);
    const p = this._toLocal(e);
    this.current = {
      tool: this.tool,
      color: this.color,
      size: this.tool === 'eraser' ? this.eraserSize : this.size,
      points: [p],
    };
    this.redoStack = [];  // 새 stroke 시작하면 리두 스택 비움
    this._drawSegment(this.current, 0);
  }

  _onMove(e) {
    if (!this.current) return;
    const p = this._toLocal(e);
    // pointermove는 coalesced events를 묶어 줄 수 있음 (부드러운 선)
    const events = (e.getCoalescedEvents && e.getCoalescedEvents()) || [e];
    for (const evt of events) {
      const pt = this._toLocal(evt);
      this.current.points.push(pt);
      this._drawSegment(this.current, this.current.points.length - 1);
    }
  }

  _onUp(e) {
    if (!this.current) return;
    if (this.current.points.length > 0) {
      this.strokes.push(this.current);
      this.onChange();
    }
    this.current = null;
    try { this.canvas.releasePointerCapture(e.pointerId); } catch (_) {}
  }

  // 마지막 두 점 사이 세그먼트만 그려서 부드럽게 보이게
  _drawSegment(stroke, fromIdx) {
    const ctx = this.ctx;
    ctx.save();
    if (stroke.tool === 'eraser') {
      ctx.globalCompositeOperation = 'destination-out';
      ctx.strokeStyle = 'rgba(0,0,0,1)';
    } else {
      ctx.globalCompositeOperation = 'source-over';
      ctx.strokeStyle = stroke.color;
    }
    ctx.lineWidth = stroke.size;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    const pts = stroke.points;
    if (pts.length === 1) {
      // 점 찍기 (탭)
      ctx.beginPath();
      ctx.arc(pts[0].x, pts[0].y, stroke.size / 2, 0, Math.PI * 2);
      ctx.fillStyle = stroke.tool === 'eraser' ? '#000' : stroke.color;
      ctx.fill();
    } else {
      const a = pts[Math.max(0, fromIdx - 1)];
      const b = pts[fromIdx];
      ctx.beginPath();
      ctx.moveTo(a.x, a.y);
      ctx.lineTo(b.x, b.y);
      ctx.stroke();
    }
    ctx.restore();
  }

  // 캔버스 전체를 strokes로부터 다시 그림 (언두/리두/리사이즈 후 호출)
  redraw() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    for (const s of this.strokes) {
      for (let i = 0; i < s.points.length; i++) {
        this._drawSegment(s, i);
      }
    }
  }

  setTool(tool) { this.tool = tool; }
  setColor(color) { this.color = color; }
  setSize(size) { this.size = size; }

  undo() {
    if (this.strokes.length === 0) return false;
    this.redoStack.push(this.strokes.pop());
    this.redraw();
    this.onChange();
    return true;
  }
  redo() {
    if (this.redoStack.length === 0) return false;
    this.strokes.push(this.redoStack.pop());
    this.redraw();
    this.onChange();
    return true;
  }
  clearPage() {
    if (this.strokes.length === 0) return false;
    this.redoStack = this.strokes.slice();
    this.strokes = [];
    this.redraw();
    this.onChange();
    return true;
  }

  hasInk() { return this.strokes.length > 0; }
}

window.InkLayer = InkLayer;
