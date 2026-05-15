// 페이지 렌더러: 페이로드를 받아 화면에 표지 + 문제 페이지들을 만든다.
// 각 페이지는 가로 A4 비율의 .page 컨테이너로, 왼쪽 .problem-pane / 오른쪽 .solve-pane으로 구성.
// 필기 캔버스는 .solve-pane 안에 만들어지고 InkLayer가 부착된다.

const Pages = (function () {
  const KOR_LETTERS = ['ㄱ', 'ㄴ', 'ㄷ', 'ㄹ', 'ㅁ', 'ㅂ'];

  // 안전한 HTML 이스케이프
  function esc(s) {
    if (s == null) return '';
    return String(s)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  // KaTeX로 인라인 수식 렌더링
  // 텍스트 내 $...$ 패턴을 KaTeX HTML로 치환. KaTeX 미로드 시 원본 반환.
  function renderInlineMath(text) {
    if (text == null) return '';
    const raw = String(text);
    if (!window.katex) return esc(raw).replace(/\n/g, '<br>');

    // $...$ 패턴 추출 후 KaTeX로 변환, 사이 텍스트는 escape
    let result = '';
    let last = 0;
    const re = /\$([^$]+)\$/g;
    let m;
    while ((m = re.exec(raw)) !== null) {
      result += esc(raw.slice(last, m.index)).replace(/\n/g, '<br>');
      try {
        result += window.katex.renderToString(m[1], { throwOnError: false, displayMode: false });
      } catch (e) {
        result += esc(m[0]);
      }
      last = re.lastIndex;
    }
    result += esc(raw.slice(last)).replace(/\n/g, '<br>');
    return result;
  }

  // ───── 표지 ─────
  function buildCoverPage(payload) {
    const m = payload.meta;
    const wrongCount = payload.wrongProblems.length;
    const accuracy = m.totalProblems > 0
      ? Math.round((m.firstTryCorrect / m.totalProblems) * 100)
      : 0;

    const page = document.createElement('div');
    page.className = 'page';
    page.dataset.pageType = 'cover';

    page.innerHTML = `
      <div class="cover-page">
        <h1>${esc(m.unitTitle)}</h1>
        <div class="subtitle">오답 노트 — 다시 풀기</div>
        <div class="student-info">
          <div><strong>학생</strong> · ${esc(m.studentName)}</div>
          <div><strong>날짜</strong> · ${esc(formatDate(m.completedAt))}</div>
        </div>
        <div class="stats">
          전체 문제 <span class="num">${m.totalProblems}개</span><br>
          첫 시도 정답 <span class="num">${m.firstTryCorrect}개</span> · 정답률 <span class="num">${accuracy}%</span><br>
          다시 풀어야 할 문제 <span class="num">${wrongCount}개</span>
        </div>
        <div class="guide">
          좌우 화살표(◀ ▶) 또는 키보드 ←→ 키로 페이지를 이동합니다.<br>
          각 문제의 오른쪽 빈 공간에 펜으로 풀이를 직접 적으세요.<br>
          모두 풀이가 끝나면 상단의 📥 PDF 다운로드 버튼을 누르세요.
        </div>
      </div>
    `;
    return page;
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('ko-KR', { year: 'numeric', month: 'long', day: 'numeric' });
    } catch (_) { return iso; }
  }

  // ───── 문제 페이지 ─────
  function buildProblemPage(problem, payload, index) {
    const page = document.createElement('div');
    page.className = 'page';
    page.dataset.pageType = 'problem';
    page.dataset.problemId = problem.id;

    const isSpecial = /^S\d/.test(problem.id);

    page.innerHTML = `
      <div class="page-grid">
        <div class="problem-pane">
          <div class="problem-header">
            <span class="problem-id">${esc(problem.id)}</span>
            <span class="problem-title">${esc(problem.title.replace(/^문제\s+\S+\s*—\s*/, '').replace(/^특별 문제\s+\S+\s*—\s*/, '') || problem.title)}</span>
            ${isSpecial ? '<span class="problem-tag">특별 문제</span>' : ''}
          </div>
          <div class="problem-body">${renderInlineMath(problem.text)}</div>
          ${problem.figure ? `
            <div class="problem-figure">
              <img src="${esc(payload.meta.figureBase + problem.figure)}" alt="${esc(problem.id)} 도형" onerror="this.style.display='none'">
            </div>
          ` : ''}
          ${renderChoicesOrAnswers(problem)}
          ${renderMyAnswerAndCorrect(problem)}
          ${problem.hint ? `
            <div class="reveal-row">
              <button class="reveal-btn hint-btn" data-target="hint">💡 힌트 보기</button>
              <div class="reveal-content hidden" data-reveal="hint">${renderInlineMath(problem.hint)}</div>
            </div>
          ` : ''}
        </div>
        <div class="solve-pane">
          <div class="solve-grid"></div>
          <div class="solve-label">풀이 영역 · 어디든 펜으로 자유롭게</div>
        </div>
      </div>
      <canvas class="ink-canvas"></canvas>
    `;

    // 토글 버튼 이벤트
    page.querySelectorAll('.reveal-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const target = btn.dataset.target;
        const content = page.querySelector(`[data-reveal="${target}"]`);
        if (!content) return;
        const willShow = content.classList.contains('hidden');
        content.classList.toggle('hidden');
        if (target === 'correct') {
          btn.textContent = willShow ? '🙈 정답 가리기' : '🔍 정답 보기';
        } else if (target === 'hint') {
          btn.textContent = willShow ? '🙈 힌트 가리기' : '💡 힌트 보기';
        }
      });
    });

    return page;
  }

  // 문제 유형별: 보기·선택지 표시 (myAnswer/correct는 별도 영역에)
  function renderChoicesOrAnswers(p) {
    switch (p.type) {
      case 'ox':
        return `<div class="problem-choices">
          <div class="choice-row"><span class="marker">O</span> 맞다</div>
          <div class="choice-row"><span class="marker">X</span> 틀리다</div>
        </div>`;

      case 'choice':
      case 'choice-multi':
        return `<div class="problem-choices">
          ${p.choices.map((c, i) => `
            <div class="choice-row">
              <span class="marker">${i + 1}.</span> ${renderInlineMath(c)}
            </div>`).join('')}
        </div>`;

      case 'match':
        // 보기 (ㄱ~) + 항목 (1~) 둘 다 보여야 학생이 무엇을 매칭해야 했는지 명확
        return `<div class="problem-choices">
          <div style="font-size: 12px; color: var(--brown); margin-top: 4px;"><strong>보기</strong></div>
          ${p.choices.map((c) => `
            <div class="choice-row">${renderInlineMath(c)}</div>
          `).join('')}
        </div>`;

      case 'shortAnswer':
      case 'shortAnswer-pair':
        // 단답형은 별도 보기 없음
        if (p.askFormat) {
          return `<div class="problem-choices">
            <div class="choice-row" style="background: #fff8eb;">${renderInlineMath(p.askFormat)}</div>
          </div>`;
        }
        return '';

      default:
        return '';
    }
  }

  // "내가 적은 답 / 정답"을 표시
  function renderMyAnswerAndCorrect(p) {
    let myAnswerHtml = '';
    let correctHtml = '';

    switch (p.type) {
      case 'ox':
        myAnswerHtml = esc(p.myAnswer);
        correctHtml = esc(p.correctAnswer);
        break;

      case 'choice': {
        const mIdx = p.myChoice;
        const cIdx = p.correctChoice;
        myAnswerHtml = mIdx >= 0
          ? `${mIdx + 1}번 · ${renderInlineMath(p.choices[mIdx] || '')}`
          : '미응답';
        correctHtml = `${cIdx + 1}번 · ${renderInlineMath(p.choices[cIdx] || '')}`;
        break;
      }

      case 'choice-multi':
        myAnswerHtml = (p.myChoices.length === 0)
          ? '미응답'
          : p.myChoices.map(i => `${i + 1}`).join(', ') + '번';
        correctHtml = p.correctChoices.map(i => `${i + 1}`).join(', ') + '번';
        break;

      case 'shortAnswer':
        myAnswerHtml = esc(p.myAnswer || '미응답');
        correctHtml = renderInlineMath(p.correctAnswer);
        break;

      case 'shortAnswer-pair':
        myAnswerHtml = p.fields.map((f, i) => {
          const v = p.myFields[i] || '?';
          return `${renderInlineMath(f.label)} = ${esc(v)}${esc(f.unit || '')}`;
        }).join(', ');
        correctHtml = p.fields.map((f) => {
          return `${renderInlineMath(f.label)} = ${esc(f.correct)}${esc(f.unit || '')}`;
        }).join(', ');
        break;

      case 'match':
        myAnswerHtml = p.items.map((it, i) => {
          const ci = p.myMatches[i];
          const letter = (ci != null && ci >= 0) ? KOR_LETTERS[ci] : '?';
          return `${esc(it)}→${letter}`;
        }).join(', ');
        correctHtml = p.items.map((it, i) => {
          const ci = p.correctMatches[i];
          return `${esc(it)}→${KOR_LETTERS[ci] || '?'}`;
        }).join(', ');
        break;
    }

    return `
      <div class="problem-meta">
        <div class="row"><span class="label">내가 적은 답</span> <span class="my-answer">${myAnswerHtml}</span></div>
        <div class="reveal-row">
          <button class="reveal-btn" data-target="correct">🔍 정답 보기</button>
          <div class="reveal-content hidden" data-reveal="correct">
            <span class="label">정답</span> <span class="correct">${correctHtml}</span>
          </div>
        </div>
      </div>
    `;
  }

  // ───── 페이지 크기 계산 ─────
  // 가로 A4 비율(297:210)을 유지하면서 현재 stage에 들어가는 최대 크기
  function fitPageToStage(pageEl, stageEl) {
    const stageRect = stageEl.getBoundingClientRect();
    const padding = 36;  // stage 안쪽 여백
    const maxW = stageRect.width - padding;
    const maxH = stageRect.height - padding;
    const ratio = 297 / 210;
    let w, h;
    if (maxW / ratio <= maxH) {
      w = maxW;
      h = maxW / ratio;
    } else {
      h = maxH;
      w = maxH * ratio;
    }
    pageEl.style.width = w + 'px';
    pageEl.style.height = h + 'px';
    pageEl.style.left = ((stageRect.width - w) / 2) + 'px';
    pageEl.style.top = ((stageRect.height - h) / 2) + 'px';
  }

  return { buildCoverPage, buildProblemPage, fitPageToStage };
})();

window.Pages = Pages;
