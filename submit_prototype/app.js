// 다시풀이 화면 메인
// 1) 페이로드 수신 (sessionStorage > DEMO_PAYLOAD)
// 2) 검증
// 3) 표지 + 문제 페이지들 생성 (Pages 모듈)
// 4) 각 문제 페이지에 InkLayer 부착
// 5) 좌우 네비게이션·툴바·키보드 단축키
// 6) PDF 다운로드 (html2canvas + jsPDF, 가로 A4)

(function () {
  const COLORS = ['#1a1a1a', '#c0392b', '#2563eb', '#15803d', '#d97706'];
  const SIZES = [
    { px: 1.5 }, { px: 2.5 }, { px: 4 }, { px: 7 },
  ];

  const state = {
    payload: null,
    pages: [],       // [{ el, inkLayer?, type: 'cover'|'problem' }]
    currentIdx: 0,
  };

  function $(id) { return document.getElementById(id); }

  function setLoading(visible, text) {
    const el = $('loading');
    if (text) $('loading-text').textContent = text;
    el.classList.toggle('gone', !visible);
  }

  // ───── 페이로드 로드 ─────
  function loadPayload() {
    const raw = sessionStorage.getItem('reviewPayload');
    if (raw) {
      try {
        return JSON.parse(raw);
      } catch (e) {
        console.warn('sessionStorage payload 파싱 실패, 데모로 폴백', e);
      }
    }
    if (typeof DEMO_PAYLOAD !== 'undefined') return DEMO_PAYLOAD;
    return null;
  }

  // ───── 툴바 구성 ─────
  function buildToolbar() {
    const colorGroup = $('color-group');
    COLORS.forEach((c, i) => {
      const btn = document.createElement('button');
      btn.className = 'color-swatch' + (i === 0 ? ' active' : '');
      btn.style.background = c;
      btn.dataset.color = c;
      btn.addEventListener('click', () => {
        document.querySelectorAll('.color-swatch').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyToAllInk(l => l.setColor(c));
        setTool('pen');
      });
      colorGroup.appendChild(btn);
    });

    const sizeGroup = $('size-group');
    SIZES.forEach((s, i) => {
      const btn = document.createElement('button');
      btn.className = 'size-btn' + (i === 1 ? ' active' : '');
      btn.title = `굵기 ${s.px}`;
      const dot = document.createElement('span');
      dot.className = 'size-dot';
      const d = Math.max(3, Math.min(18, s.px * 2));
      dot.style.width = d + 'px';
      dot.style.height = d + 'px';
      btn.appendChild(dot);
      btn.addEventListener('click', () => {
        document.querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        applyToAllInk(l => l.setSize(s.px));
      });
      sizeGroup.appendChild(btn);
    });

    $('tool-pen').addEventListener('click', () => setTool('pen'));
    $('tool-eraser').addEventListener('click', () => setTool('eraser'));

    $('prev-btn').addEventListener('click', () => goTo(state.currentIdx - 1));
    $('next-btn').addEventListener('click', () => goTo(state.currentIdx + 1));

    $('undo').addEventListener('click', () => {
      const cur = state.pages[state.currentIdx];
      if (cur && cur.inkLayer) cur.inkLayer.undo();
    });
    $('redo').addEventListener('click', () => {
      const cur = state.pages[state.currentIdx];
      if (cur && cur.inkLayer) cur.inkLayer.redo();
    });
    $('clear-page').addEventListener('click', () => {
      const cur = state.pages[state.currentIdx];
      if (cur && cur.inkLayer && cur.inkLayer.hasInk()) {
        if (confirm('이 페이지의 필기를 모두 지울까요?')) cur.inkLayer.clearPage();
      }
    });
    $('download').addEventListener('click', onDownload);

    // 키보드 단축키
    document.addEventListener('keydown', (e) => {
      // 입력 필드 안에서는 비활성 (현재는 없지만 안전망)
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
      if (e.key === 'ArrowLeft') { goTo(state.currentIdx - 1); e.preventDefault(); }
      else if (e.key === 'ArrowRight') { goTo(state.currentIdx + 1); e.preventDefault(); }
      else if (e.key === 'z' || e.key === 'Z') {
        const cur = state.pages[state.currentIdx];
        if (!cur || !cur.inkLayer) return;
        if (e.shiftKey) cur.inkLayer.redo();
        else cur.inkLayer.undo();
        e.preventDefault();
      } else if (e.key === 'p' || e.key === 'P') { setTool('pen'); }
      else if (e.key === 'e' || e.key === 'E') { setTool('eraser'); }
    });
  }

  function setTool(tool) {
    $('tool-pen').classList.toggle('active', tool === 'pen');
    $('tool-eraser').classList.toggle('active', tool === 'eraser');
    applyToAllInk(l => l.setTool(tool));
  }

  function applyToAllInk(fn) {
    state.pages.forEach(p => { if (p.inkLayer) fn(p.inkLayer); });
  }

  // ───── 페이지 구성 ─────
  function buildPages() {
    const stage = $('stage');
    stage.innerHTML = '';
    state.pages = [];

    // 표지
    const coverEl = Pages.buildCoverPage(state.payload);
    stage.appendChild(coverEl);
    state.pages.push({ el: coverEl, type: 'cover', inkLayer: null });

    // 문제 페이지들
    state.payload.wrongProblems.forEach((p, i) => {
      const pageEl = Pages.buildProblemPage(p, state.payload, i);
      stage.appendChild(pageEl);
      state.pages.push({ el: pageEl, type: 'problem', inkLayer: null, problem: p });
    });

    // 크기 적용 + 필기 캔버스 부착
    fitAllPages();
    attachInkLayers();

    // 화살표 키로 입력 막힘 없게 stage에 포커스
    stage.tabIndex = 0;
    stage.focus();
  }

  function fitAllPages() {
    const stage = $('stage');
    state.pages.forEach(p => Pages.fitPageToStage(p.el, stage));
    // active 페이지는 즉시 캔버스 크기 갱신 + redraw
    // 다른 페이지(display:none)는 getBoundingClientRect가 0이라 의미 없음 — active 될 때 갱신됨
    const cur = state.pages[state.currentIdx];
    if (cur && cur.inkLayer) syncCanvas(cur);
  }

  // 페이지의 캔버스를 화면 크기에 맞추고 strokes를 다시 그림
  // active 상태일 때만 의미 있음 (display:none 페이지는 rect가 0)
  function syncCanvas(pageEntry) {
    const canvas = pageEntry.el.querySelector('.ink-canvas');
    if (!canvas) return;
    const r = canvas.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) return;  // 아직 안 보이는 페이지
    const dpr = window.devicePixelRatio || 1;
    const w = Math.round(r.width * dpr);
    const h = Math.round(r.height * dpr);
    if (canvas.width !== w || canvas.height !== h) {
      canvas.width = w;
      canvas.height = h;
    }
    if (pageEntry.inkLayer) pageEntry.inkLayer.redraw();
  }

  function attachInkLayers() {
    state.pages.forEach((p) => {
      if (p.type !== 'problem') return;
      const canvas = p.el.querySelector('.ink-canvas');
      // 처음에는 크기를 잡지 않고 InkLayer만 부착. 페이지가 active 될 때 syncCanvas로 잡음.
      p.inkLayer = new InkLayer(canvas, {
        color: COLORS[0],
        size: SIZES[1].px,
        onChange: updateStatus,
      });
    });
  }

  // ───── 네비게이션 ─────
  function goTo(idx) {
    if (idx < 0 || idx >= state.pages.length) return;
    state.pages.forEach((p, i) => {
      p.el.classList.toggle('active', i === idx);
    });
    state.currentIdx = idx;
    updateNavUI();
    // active 전환 후 다음 프레임에 캔버스 크기 동기화 (이제 display가 block이라 rect가 정상)
    const cur = state.pages[idx];
    if (cur && cur.inkLayer) {
      requestAnimationFrame(() => syncCanvas(cur));
    }
  }

  function updateNavUI() {
    $('page-indicator').textContent = `${state.currentIdx + 1} / ${state.pages.length}`;
    $('prev-btn').disabled = state.currentIdx === 0;
    $('next-btn').disabled = state.currentIdx === state.pages.length - 1;
    updateStatus();
  }

  function updateStatus() {
    const cur = state.pages[state.currentIdx];
    if (!cur || cur.type === 'cover') {
      $('status-text').textContent = '표지 — ▶ 또는 → 키로 시작';
      return;
    }
    const totalStrokes = state.pages.reduce((acc, p) => acc + (p.inkLayer ? p.inkLayer.strokes.length : 0), 0);
    const inkedPages = state.pages.filter(p => p.inkLayer && p.inkLayer.hasInk()).length;
    $('status-text').textContent = `${cur.problem.id} · 필기 ${cur.inkLayer.strokes.length}획 (총 ${totalStrokes}획 · ${inkedPages}장)`;
  }

  // ───── PDF 다운로드 ─────
  async function onDownload() {
    setLoading(true, 'PDF 합성 준비 중...');
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });
      const PAGE_W_MM = 297;
      const PAGE_H_MM = 210;

      // 모든 페이지를 일시적으로 화면에 활성화시키며 캡처
      // 활성 상태가 아닌 페이지는 display:none이라 html2canvas가 못 캡처함
      const originalActive = state.currentIdx;

      for (let i = 0; i < state.pages.length; i++) {
        setLoading(true, `페이지 캡처 ${i + 1} / ${state.pages.length}`);
        goTo(i);
        // 레이아웃 안정화 대기
        await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

        const pageEl = state.pages[i].el;
        // html2canvas: 화면 픽셀을 그대로 캡처. scale 2로 선명하게.
        const canvas = await html2canvas(pageEl, {
          backgroundColor: '#fffaf0',
          scale: 2,
          useCORS: true,
          logging: false,
        });

        const dataUrl = canvas.toDataURL('image/jpeg', 0.88);
        if (i > 0) doc.addPage('a4', 'landscape');
        doc.addImage(dataUrl, 'JPEG', 0, 0, PAGE_W_MM, PAGE_H_MM);
      }

      goTo(originalActive);
      setLoading(true, '파일 저장 중...');

      const m = state.payload.meta;
      const ymd = (m.completedAt ? new Date(m.completedAt) : new Date())
        .toISOString().slice(0, 10).replace(/-/g, '');
      const safeName = (m.studentName || 'student').replace(/[\\\/:*?"<>|]/g, '_');
      const safeUnit = (m.unitId || 'unit').replace(/[\\\/:*?"<>|]/g, '_');
      doc.save(`오답노트_${safeUnit}_${safeName}_${ymd}.pdf`);
    } catch (e) {
      console.error(e);
      alert('PDF 다운로드 실패: ' + e.message);
    } finally {
      setLoading(false);
    }
  }

  // ───── 에러 표시 ─────
  function showError(errors) {
    setLoading(false);
    const stage = $('stage');
    stage.innerHTML = `
      <div style="background:#fff;padding:32px;border-radius:12px;max-width:600px;color:#3a2818">
        <h2 style="margin:0 0 12px;color:#c0392b">⚠️ 페이로드 오류</h2>
        <p>다시풀이 화면을 시작할 수 없습니다. 다음 항목을 확인하세요:</p>
        <ul style="margin:8px 0 0 20px;line-height:1.7">
          ${errors.map(e => `<li>${e}</li>`).join('')}
        </ul>
      </div>
    `;
  }

  // ───── 초기화 ─────
  function init() {
    setLoading(true, '오답 데이터 로드 중...');
    const payload = loadPayload();
    if (!payload) {
      showError(['페이로드를 찾을 수 없습니다. (sessionStorage.reviewPayload 또는 DEMO_PAYLOAD)']);
      return;
    }

    const { valid, errors } = validatePayload(payload);
    if (!valid) {
      console.error('Payload validation errors:', errors);
      showError(errors);
      return;
    }
    state.payload = payload;

    buildToolbar();
    setLoading(true, '페이지 구성 중...');
    buildPages();

    // 첫 페이지(표지) 활성화
    goTo(0);

    // 리사이즈 대응
    let resizeRaf = null;
    window.addEventListener('resize', () => {
      if (resizeRaf) cancelAnimationFrame(resizeRaf);
      resizeRaf = requestAnimationFrame(() => {
        fitAllPages();
      });
    });

    setLoading(false);
  }

  window.addEventListener('DOMContentLoaded', () => {
    // KaTeX가 defer 로딩이므로 DOMContentLoaded 이후 약간 대기
    if (window.katex) init();
    else {
      const tick = () => window.katex ? init() : setTimeout(tick, 30);
      tick();
    }
  });
})();
