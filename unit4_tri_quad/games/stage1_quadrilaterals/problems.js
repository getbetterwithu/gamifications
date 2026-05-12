// ===== 12개 문제 데이터 (4단원 사각형) =====
// 출처: 교과서 405·406 소단원 "바로 확인하기"
// 도형 이미지: problems/{slotId}_figure.png  (PDF에서 추출, 게임에 자동 표시)
// 텍스트는 KaTeX로 렌더링 (수식·기호 수식체 적용)
// 힌트는 선생님이 hints 배열에 채워넣을 예정 (현재 비어있음 → 기본 힌트 사용)
//
// 데이터 구조:
// {
//   type: 'ox' | 'choice' | 'choice-multi' | 'shortAnswer',
//   text: '문제 본문 (LaTeX 가능, $...$ 또는 $$...$$)',
//   figure: 'M01_figure.png' | null,
//   askFormat: '답 입력 안내 (단답형용, LaTeX 가능)',
//   choices: ['보기 1', '보기 2', ...],          // choice·choice-multi
//   correctChoice: 1,                            // choice
//   correctChoices: [0, 2, 3],                   // choice-multi (인덱스 배열)
//   correctAnswer: 'O' | 'X',                    // ox
//   acceptedAnswers: ['65,115', '65도,115도'],   // shortAnswer
//   hints: [],
// }

const PROBLEMS = {
  // ===== 405: 평행사변형이 되는 조건 =====

  M01: {
    type: 'ox',
    text: '평행사변형의 두 쌍의 대변의 길이는 각각 같다.',
    figure: null,
    correctAnswer: 'O',
    hints: [],
  },

  M02: {
    type: 'choice-multi',
    text: '다음 그림에서 $\\square ABCD$가 평행사변형인 것을 모두 고르시오. (단, 점 $O$는 두 대각선의 교점이다.)',
    figure: 'M02_figure.png',
    choices: ['(1)', '(2)', '(3)', '(4)'],
    // (1) 두 쌍의 대변 길이 같음 (9cm, 7cm) — 평행사변형 ✓
    // (2) 한 쌍의 대각만 같음 (50°, 130°, 50°) — 평행사변형 X (대각 50°≠130°)
    // (3) 한 쌍의 대변 평행+같음 (4cm, 화살표) — 평행사변형 ✓
    // (4) 두 대각선 서로 이등분 (3cm, 2cm, 4cm, 3cm) — 평행사변형 X (대응 길이가 다름)
    correctChoices: [0, 2],
    hints: [],
  },

  M03: {
    type: 'shortAnswer',
    text: '오른쪽 $\\square ABCD$에서 $\\angle x, \\angle y$의 크기를 각각 구하시오.',
    figure: 'M03_figure.png',
    // 평행사변형: ∠A=120°, ∠B=x, ∠C=y. 대각: ∠A=∠C=120°, ∠B=∠D=60°
    // 그런데 그림에서 x는 ∠B 위치, y는 ∠C 위치
    // 평행사변형 인접각 합 180° → ∠B=180-120=60, ∠C=120
    askFormat: '$\\angle x = $ ___ °, $\\angle y = $ ___ °',
    acceptedAnswers: ['60,120', '60°,120°', '60도,120도', '60 120', '60,120도'],
    hints: [],
  },

  M04: {
    type: 'ox',
    text: '두 대각선의 길이가 같은 사각형은 평행사변형이다.',
    figure: null,
    correctAnswer: 'X',  // 함정: 두 대각선 길이 같음 = 직사각형·등변사다리꼴 등도 가능
    hints: [],
  },

  S01: {
    type: 'ox',
    text: '빙글빙글 돌아가는 놀이기구가 항상 수평을 유지하는 것은 평행사변형의 성질을 이용한 것이다.',
    figure: 'S01_figure.png',
    correctAnswer: 'O',
    hints: [],
  },

  M05: {
    type: 'shortAnswer',
    text: '오른쪽 $\\square ABCD$가 평행사변형이 되도록 하는 $x, y$의 값을 각각 구하시오. (단, 점 $O$는 두 대각선의 교점이다.)',
    figure: 'M05_figure.png',
    // 평행사변형: 두 대각선이 서로 다른 것을 이등분 → AO=OC, BO=OD
    // 그림 정보: AD=8cm, ∠OAD=x°, ∠OCB=35°, BC=2y cm
    // AD∥BC이므로 ∠OAD=∠OCB (엇각) → x=35
    // AD=BC → 8=2y → y=4
    askFormat: '$x = $ ___, $y = $ ___',
    acceptedAnswers: ['35,4', '35 4', '35,4cm'],
    hints: [],
  },

  M06: {
    type: 'choice-multi',
    text: '$\\overline{AB}=\\overline{DC}$인 $\\square ABCD$가 평행사변형이 되기 위해 필요한 조건을 보기 중에서 모두 찾으시오.\n\n보기: ㄱ. $\\overline{AB} \\parallel \\overline{DC}$  ㄴ. $\\overline{AD} \\parallel \\overline{BC}$  ㄷ. $\\overline{AD}=\\overline{BC}$',
    figure: null,
    choices: ['ㄱ. AB∥DC', 'ㄴ. AD∥BC', 'ㄷ. AD=BC'],
    // AB=DC가 이미 주어짐. 평행사변형 조건:
    // ㄱ. AB∥DC 추가 → 한 쌍 평행+같음 = 평행사변형 ✓
    // ㄴ. AD∥BC 추가 → 두 쌍 평행 = 평행사변형 ✓
    // ㄷ. AD=BC 추가 → 두 쌍 대변 같음 = 평행사변형 ✓
    correctChoices: [0, 1, 2],
    hints: [],
  },

  // ===== 406: 여러 가지 사각형의 성질 =====

  M07: {
    type: 'shortAnswer',
    text: '오른쪽 정사각형 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{BD}=14$ cm일 때, $x, y$의 값을 각각 구하시오.',
    figure: 'M07_figure.png',
    // 정사각형: 두 대각선 길이 같고 수직이등분
    // BD=14 → OD=7, AC=14, OC=7 → x=7 (OC 또는 OD)
    // 두 대각선 수직이등분 → 교점 각 90° → y=90
    askFormat: '$x = $ ___ cm, $y = $ ___ °',
    acceptedAnswers: ['7,90', '7 90', '7cm,90도'],
    hints: [],
  },

  S02: {
    type: 'shortAnswer',
    text: '원 모양의 풀밭 둘레의 네 지점을 꼭짓점으로 하는 정사각형 모양의 목장을 만들려고 한다. 풀밭의 넓이가 $100\\pi \\text{ m}^2$일 때, 목장의 넓이를 구하시오.',
    figure: 'S02_figure.png',
    // 원 넓이 100π → 반지름 r=10
    // 원에 내접하는 정사각형 → 대각선 = 2r = 20
    // 정사각형 넓이 = 대각선² / 2 = 400/2 = 200
    askFormat: '목장의 넓이: ___ $\\text{m}^2$',
    acceptedAnswers: ['200', '200m²', '200 m²', '200제곱미터'],
    hints: [],
  },

  M08: {
    type: 'shortAnswer',
    text: '오른쪽 직사각형 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{BD}=8$ cm, $\\angle OAB=50°$일 때, $x, y$의 값을 각각 구하시오.',
    figure: 'M08_figure.png',
    // 직사각형: 두 대각선 길이 같고 서로 다른 것 이등분
    // BD=8 → AC=8, OA=OB=4 → x=4 (OD나 OC 길이)
    // △OAB 이등변(OA=OB) → ∠OAB=∠OBA=50° → ∠AOB=80°
    // ∠y는 ∠OCB. △OBC 이등변(OB=OC) → ∠OBC=∠OCB
    // ∠ABC=90°, ∠OBA=50° → ∠OBC=40° → y=40
    askFormat: '$x = $ ___ cm, $y = $ ___ °',
    acceptedAnswers: ['4,40', '4 40', '4cm,40도'],
    hints: [],
  },

  M09: {
    type: 'shortAnswer',
    text: '오른쪽 마름모 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{AO}=3$ cm, $\\overline{BD}=12$ cm일 때, $\\triangle AOB$의 넓이를 구하시오.',
    figure: 'M09_figure.png',
    // 마름모: 두 대각선이 수직이등분
    // AO=3, BD=12 → BO=6
    // △AOB: 직각삼각형 (AO⊥BO), 밑변·높이 = 3·6
    // 넓이 = (3 × 6) / 2 = 9
    askFormat: '$\\triangle AOB$의 넓이: ___ $\\text{cm}^2$',
    acceptedAnswers: ['9', '9cm²', '9 cm²', '9제곱센티미터'],
    hints: [],
  },

  M10: {
    type: 'shortAnswer',
    text: '다음 조건을 모두 만족시키는 사각형의 이름을 말하시오.\n\n(가) 평행사변형이다.\n(나) 이웃하는 두 변의 길이가 같다.\n(다) 두 대각선의 길이가 같다.',
    figure: null,
    // (가) 평행사변형
    // (나) 이웃 두 변 길이 같음 → 마름모 (네 변 다 같음)
    // (다) 두 대각선 길이 같음 → 직사각형
    // → 마름모 + 직사각형 = 정사각형
    askFormat: '사각형 이름: ___',
    acceptedAnswers: ['정사각형'],
    hints: [],
  },
};
