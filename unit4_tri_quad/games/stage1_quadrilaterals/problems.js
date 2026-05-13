// ===== 12개 문제 데이터 (4단원 사각형) =====
// 출처: 교과서 405·406 소단원 "바로 확인하기"
// 도형 이미지: problems/{slotId}.png  (PDF에서 추출, 게임에 자동 표시)
// 텍스트는 KaTeX로 렌더링 (수식·기호 수식체 적용)
// 힌트는 선생님이 hints 배열에 채워넣을 예정 (현재 비어있음 → 기본 힌트 사용)
//
// 데이터 구조:
// {
//   type: 'ox' | 'choice' | 'choice-multi' | 'shortAnswer',
//   text: '문제 본문 (LaTeX 가능, $...$ 또는 $$...$$)',
//   figure: 'M01.png' | null,
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
    type: 'match',
    text: '다음 그림은 모두 평행사변형이다. 각각이 평행사변형이 되는 이유를 보기에서 선택하시오. (단, 점 $O$는 두 대각선의 교점이다.)',
    figure: 'M02.png',
    items: ['(1)', '(2)', '(3)', '(4)'],
    // choices 순서를 의도적으로 섞어 정답이 [0,1,2,3] 같은 순서대로가 아니게 함
    choices: [
      '두 대각선이 서로 이등분한다',                  // ㄱ → (4)
      '두 쌍의 대변의 길이가 같다',                    // ㄴ → (1)
      '한 쌍의 대변이 평행하고 그 길이가 같다',        // ㄷ → (3)
      '두 쌍의 대각의 크기가 같다',                    // ㄹ → (2)
    ],
    // (1) → ㄴ(1), (2) → ㄹ(3), (3) → ㄷ(2), (4) → ㄱ(0)
    correctMatches: [1, 3, 2, 0],
    hints: [],
  },

  M03: {
    type: 'shortAnswer-pair',
    text: '오른쪽 $\\square ABCD$에서 $\\angle x, \\angle y$의 크기를 각각 구하시오.',
    figure: 'M03.png',
    // 평행사변형 인접각 합 180° → ∠x=60°, ∠y=120°
    fields: [
      { label: '$\\angle x$', unit: '°', accepted: ['60', '60도'] },
      { label: '$\\angle y$', unit: '°', accepted: ['120', '120도'] },
    ],
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
    type: 'choice',
    text: '빙글빙글 돌아가는 놀이기구가 항상 수평을 유지하는 것은 ○○의 성질을 이용한 것이다. ○○에 들어갈 알맞은 단어는?',
    figure: 'S01.png',
    choices: ['평행사변형', '직사각형', '정사각형', '마름모'],
    correctChoice: 0,
    hints: ['AD는 수평으로 고정된 BC와 항상 ○○하기 때문에 기울어지지 않는다.'],
  },

  M05: {
    type: 'shortAnswer-pair',
    text: '오른쪽 $\\square ABCD$가 평행사변형이 되도록 하는 $x, y$의 값을 각각 구하시오. (단, 점 $O$는 두 대각선의 교점이다.)',
    figure: 'M05.png',
    // AD∥BC 엇각 → x=35 / AD=BC → 8=2y → y=4
    fields: [
      { label: '$x$', unit: '', accepted: ['35'] },
      { label: '$y$', unit: '', accepted: ['4'] },
    ],
    hints: [],
  },

  M06: {
    type: 'choice-multi',
    text: '$\\overline{AB}=\\overline{DC}$인 $\\square ABCD$가 평행사변형이 되기 위해 필요한 조건을 보기 중에서 모두 찾으시오.\n\n보기: ㄱ. $\\overline{AB} \\parallel \\overline{DC}$  ㄴ. $\\overline{AD} \\parallel \\overline{BC}$  ㄷ. $\\overline{AD}=\\overline{BC}$',
    figure: null,
    choices: ['ㄱ. AB∥DC', 'ㄴ. AD∥BC', 'ㄷ. AD=BC'],
    // AB=DC가 이미 주어짐. 평행사변형 조건:
    // ㄱ. AB∥DC 추가 → 한 쌍 대변 평행+길이 같음 = 평행사변형 ✓
    // ㄴ. AD∥BC 추가 → AB=DC + AD∥BC: 평행사변형 보장 X
    //                  (반례: 등변사다리꼴 — 평행한 변이 아닌 두 변의 길이만 같음)
    // ㄷ. AD=BC 추가 → 두 쌍 대변 길이 같음 = 평행사변형 ✓
    correctChoices: [0, 2],
    hints: [],
  },

  // ===== 406: 여러 가지 사각형의 성질 =====

  M07: {
    type: 'shortAnswer-pair',
    text: '오른쪽 정사각형 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{BD}=14$ cm일 때, $x, y$의 값을 각각 구하시오.',
    figure: 'M07.png',
    // 정사각형: 대각선 길이 같고 수직이등분 → x=7, y=90
    fields: [
      { label: '$x$', unit: 'cm', accepted: ['7', '7cm'] },
      { label: '$y$', unit: '°', accepted: ['90', '90도'] },
    ],
    hints: [],
  },

  S02: {
    type: 'shortAnswer',
    text: '원 모양의 풀밭 둘레의 네 지점을 꼭짓점으로 하는 정사각형 모양의 목장을 만들려고 한다. 풀밭의 넓이가 $100\\pi \\text{ m}^2$일 때, 목장의 넓이를 구하시오.',
    figure: 'S02.png',
    // 원 넓이 100π → 반지름 r=10
    // 원에 내접하는 정사각형 → 대각선 = 2r = 20
    // 정사각형 넓이 = 대각선² / 2 = 400/2 = 200
    askFormat: '목장의 넓이: ___ $\\text{m}^2$',
    acceptedAnswers: ['200', '200m²', '200 m²', '200제곱미터'],
    hints: [],
  },

  M08: {
    type: 'shortAnswer-pair',
    text: '오른쪽 직사각형 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{BD}=8$ cm, $\\angle OAB=50°$일 때, $x, y$의 값을 각각 구하시오.',
    figure: 'M08.png',
    // 직사각형: 대각선 길이 같고 서로 다른 것 이등분 → x=4, y=40
    fields: [
      { label: '$x$', unit: 'cm', accepted: ['4', '4cm'] },
      { label: '$y$', unit: '°', accepted: ['40', '40도'] },
    ],
    hints: [],
  },

  M09: {
    type: 'shortAnswer',
    text: '오른쪽 마름모 $ABCD$에서 두 대각선의 교점이 $O$이고 $\\overline{AO}=3$ cm, $\\overline{BD}=12$ cm일 때, $\\triangle AOB$의 넓이를 구하시오.',
    figure: 'M09.png',
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
