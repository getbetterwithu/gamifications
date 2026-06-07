// ===== 자기닮음 인터랙션 컴포넌트 (A4 반닮음 / 황금비) =====
// problems.js의 type:'self-similar' 문제에서 사용.
// 슬라이더로 직사각형 비율 조절 → 닮은꼴 되는 순간 발견 → 비례식 빈칸 → 명명.
// 계산(√, 이차방정식) 안 함: "이 비를 ○○라 부른다"로 마무리 (중2 교육과정 준수).
//
// 사용법: SelfSimilar.render(container, pdata, onSolved)
//   pdata: { variant:'a4'|'golden', targetRatio, ratioName, proportion:{left:[],right:[]} }
//   onSolved(): 정답(닮음 발견 + 비례식 완성) 시 호출 → 엔진이 onCorrect 처리

const SelfSimilar = (() => {
  const TOL = 0.025;          // 목표 비율 허용 오차
  const SHORT = 150;          // 짧은 변 고정 px (긴 변 = SHORT * r)

  function render(container, pdata, onSolved) {
    const variant = pdata.variant;      // 'a4' | 'golden'
    const target = pdata.targetRatio;   // √2≈1.414 / φ≈1.618
    const isGolden = variant === 'golden';

    container.innerHTML = `
      <div class="ss-wrap">
        <div class="ss-stage">
          <svg class="ss-svg" viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg"></svg>
        </div>
        <div class="ss-ctrl">
          <label class="ss-label">가로 : 세로 비율 = <b><span class="ss-ratio">1.00</span></b></label>
          <input class="ss-slider" type="range" min="1.05" max="2.10" step="0.001" value="1.30">
          <div class="ss-status ss-wait">${isGolden
            ? '정사각형을 떼어낸 나머지가 원래와 닮은꼴이 되는 순간을 찾으세요.'
            : '반으로 접은 종이가 원래와 닮은꼴이 되는 순간을 찾으세요.'}</div>
        </div>
        <div class="ss-prop" style="display:none">
          <div class="ss-prop-title">✅ 닮음 발견! 이제 비례식을 완성하세요.</div>
          <div class="ss-prop-eq"></div>
          <button class="ss-check" disabled>비례식 확인</button>
        </div>
        <div class="ss-done" style="display:none"></div>
      </div>`;

    const svg = container.querySelector('.ss-svg');
    const slider = container.querySelector('.ss-slider');
    const ratioEl = container.querySelector('.ss-ratio');
    const status = container.querySelector('.ss-status');
    const propBox = container.querySelector('.ss-prop');
    let found = false;

    // 콘텐츠 높이가 바뀐 뒤 문제 박스를 다시 화면에 맞춤(overflow:hidden 잘림 방지)
    // 비례식/정답 박스가 그려지며 높이가 단계적으로 안정화되므로 여러 시점에 재측정
    function requestFit() {
      if (typeof game === 'undefined' || typeof game._fitProblemToScreen !== 'function') return;
      const fit = () => game._fitProblemToScreen();
      requestAnimationFrame(fit);
      setTimeout(fit, 60);
      setTimeout(fit, 200);
    }

    function ratioOfRemainder(r) {
      // 닮은꼴 비교용: 잘라낸 나머지의 (긴/짧은) 비
      if (isGolden) {
        // 가로 L=SHORT*r, 세로 SHORT. 정사각형(SHORT×SHORT) 떼면 남은 직사각형 = SHORT × (L-SHORT)
        const Lg = r, rem = r - 1;        // 정규화(짧은변=1): 긴변 r, 남은 긴변=1, 짧은변=r-1
        return rem > 0 ? 1 / rem : 99;    // 남은 직사각형의 긴/짧은
      } else {
        // 반으로 접기: 긴변 r 반 = r/2. 남은 직사각형 = 1 × (r/2) → 긴/짧은 = 1/(r/2)=2/r (r<√2일 때 1이 길어짐)
        return r / 2 >= 1 ? (r / 2) : (1 / (r / 2));
      }
    }

    function draw(r) {
      const L = Math.round(SHORT * r);
      const ox = 40, oy = 60, H = SHORT;
      let inner = '';
      if (isGolden) {
        // 정사각형(왼쪽 H×H) + 남은 직사각형(오른쪽)
        inner = `
          <rect x="${ox}" y="${oy}" width="${H}" height="${H}" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2"/>
          <rect x="${ox+H}" y="${oy}" width="${Math.max(L-H,0)}" height="${H}" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2"/>
          <text x="${ox+H/2}" y="${oy+H/2+5}" text-anchor="middle" style="font-size:13px;fill:#4d5a28;">정사각형</text>
          <text x="${ox+H+Math.max(L-H,0)/2}" y="${oy+H/2+5}" text-anchor="middle" style="font-size:12px;fill:#8a3f1a;">남은<tspan x="${ox+H+Math.max(L-H,0)/2}" dy="15">직사각형</tspan></text>`;
      } else {
        // 전체 직사각형 + 반 접는 선(가로 절반)
        inner = `
          <rect x="${ox}" y="${oy}" width="${L}" height="${H}" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2"/>
          <line x1="${ox+L/2}" y1="${oy}" x2="${ox+L/2}" y2="${oy+H}" stroke="#b5642f" stroke-width="2" stroke-dasharray="6,4"/>
          <text x="${ox+L/4}" y="${oy+H/2+5}" text-anchor="middle" style="font-size:12px;fill:#8a3f1a;">접으면</text>
          <text x="${ox+L*3/4}" y="${oy+H/2+5}" text-anchor="middle" style="font-size:12px;fill:#8a3f1a;">이 크기</text>`;
      }
      const close = Math.abs(r - target) < TOL;
      svg.innerHTML = `
        ${inner}
        <text x="${ox+L/2}" y="${oy-12}" text-anchor="middle" style="font-size:13px;fill:#3a2f22;">긴 변 ${L} · 짧은 변 ${H}</text>
        ${close ? `<rect x="${ox-4}" y="${oy-4}" width="${L+8}" height="${H+8}" fill="none" stroke="#c9a227" stroke-width="3" rx="4"/>` : ''}`;
    }

    function update() {
      const r = parseFloat(slider.value);
      ratioEl.textContent = r.toFixed(3);
      draw(r);
      if (!found && Math.abs(r - target) < TOL) {
        found = true;
        status.textContent = '🎯 닮은꼴이 되었어요! 이 순간의 비율이에요.';
        status.className = 'ss-status ss-ok';
        showProportion();
      }
    }

    function showProportion() {
      propBox.style.display = 'block';
      // 비례식이 펼쳐지며 문제 박스 높이가 늘어남 → 다시 화면에 맞춤(버튼 잘림 방지)
      requestFit();
      const { left, right } = pdata.proportion;
      // 비례식: left[0] : left[1] = right[0] : [빈칸 = right[1]]
      const eq = propBox.querySelector('.ss-prop-eq');
      eq.innerHTML = `
        <span class="ss-term">${left[0]}</span> : <span class="ss-term">${left[1]}</span>
        &nbsp;=&nbsp;
        <span class="ss-term">${right[0]}</span> :
        <select class="ss-blank">
          <option value="">?</option>
          <option value="ok">${right[1]}</option>
          <option value="x1">${left[0]}</option>
          <option value="x2">${left[1]}</option>
        </select>`;
      const blank = eq.querySelector('.ss-blank');
      const checkBtn = propBox.querySelector('.ss-check');
      blank.addEventListener('change', () => { checkBtn.disabled = !blank.value; });
      checkBtn.addEventListener('click', () => {
        if (blank.value === 'ok') {
          propBox.style.display = 'none';
          const done = container.querySelector('.ss-done');
          done.style.display = 'block';
          done.innerHTML = `🏆 정답! 이 특별한 비 <b>${pdata.ratioName}</b> 를 찾아냈어요.`;
          requestFit();
          if (typeof onSolved === 'function') onSolved();
        } else {
          checkBtn.textContent = '다시 — 닮음이면 대응변의 비가 같아요';
          setTimeout(() => { checkBtn.textContent = '비례식 확인'; }, 1800);
        }
      });
    }

    slider.addEventListener('input', update);
    update();
  }

  return { render };
})();
