// ===== 10개 문제 데이터 (5단원 닮음) =====
// 출처: 6종 교과서 분석 후 선별 (textbook_crops/ 원본 참조) + 황금비·A4 신규 제작
// 스토리: 신전 건축 자재 조달 + 황금 비례판
// 도형: SVG로 직접 작도 (figureSvg 키, props.js 또는 인라인). 교과서 PNG는 저작권상 미사용.
// 텍스트는 KaTeX로 렌더링. 힌트는 선생님이 hints 배열에 채워넣을 예정 (비면 기본 힌트).
//
// 데이터 구조 (4단원 호환 + 신규 타입):
// {
//   type: 'ox' | 'choice' | 'choice-multi' | 'match' | 'shortAnswer' | 'shortAnswer-pair'
//         | 'self-similar' (신규: A4·황금비 슬라이더 인터랙션),
//   text, figure(legacy png)|figureKey(svg), askFormat, choices, correctChoice,
//   correctChoices, correctAnswer, acceptedAnswers, fields[], items[], correctMatches[],
//   quest: 어느 출제자/자재 퀘스트인지 (스토리 배치용 메타),
//   difficulty: '하'|'중'|'상'|'최상',
//   hints: [],
// }

const PROBLEMS = {

  // ===== 1. 도입 워밍업 — 양피지 반닮음 (신규 인터랙션) =====
  A4: {
    type: 'self-similar',
    variant: 'a4',                 // 반으로 잘라도 닮은 직사각형 (약 1:1.41 비)
    text: '직사각형 양피지를 반으로 잘랐더니, 잘린 양피지가 원래 양피지와 똑같은 비율(닮은 도형)이 되었다. 슬라이더를 움직여 이 비율을 찾고, 닮음을 이용해 비례식을 완성하시오.',
    figureKey: 'a4_fold',
    // 슬라이더로 가로:세로 조절 → "반으로 자른 것이 원래와 닮음"이 되는 순간 탐색
    // 비례식: (긴 변):(짧은 변) = (짧은 변):(긴 변 ÷ 2)
    proportion: { left: ['긴 변', '짧은 변'], right: ['짧은 변', '긴 변 ÷ 2'] },
    targetRatio: 1.414,            // 약 1.41 (정확한 값은 3학년 √ 과정 — 여기선 명명만)
    ratioName: '약 1 : 1.41 의 비',
    editorNote: '✏️ 이 비의 정확한 값은 3학년 때 근호(√)로 배워요. 지금은 “약 1:1.41”로만 기억해도 충분해요.',
    quest: '도입',
    difficulty: '하',
    hints: ['반으로 자른 작은 직사각형이 원래 직사각형과 닮은꼴이 되는 순간을 찾아요.',
            '닮음이면 대응변의 비가 같아요. (긴 변):(짧은 변) = (짧은 변):(긴 변의 절반)'],
  },

  // ===== 2~4. 소폴로스(상인) — 자재 정보 3종 =====

  // 2. 사암벽돌 — 축척 (벽돌 모형의 치수 정보)
  BRICK: {
    type: 'shortAnswer-pair',
    text: '소폴로스가 사암벽돌 신전 모형을 보여준다. "실제 신전을 $\\dfrac{1}{18}$로 줄인 모형이지. 모형의 길이는 $30$ m, 높이는 $0.4$ m라네. 실제 신전의 길이와 높이를 맞히면 벽돌 치수를 알려주지."',
    figureKey: 'tunnel_scale',
    fields: [
      { label: '실제 길이', unit: 'm', accepted: ['540', '540m'] },
      { label: '실제 높이', unit: 'm', accepted: ['7.2', '7.2m'] },
    ],
    quest: '소폴로스/사암벽돌',
    difficulty: '하',
    hints: ['축척이 1:18이면 실제는 모형의 18배예요.', '모형에서 잰 길이와 높이에 각각 18배를 적용하면 실제 치수가 나와요.'],
  },

  // 3. 유리 — 닮음비→넓이비 (유리 1장 넓이)
  GLASS: {
    type: 'shortAnswer',
    text: '신전 창에 들어갈 유리 두 장은 서로 닮은꼴이다. $\\triangle ABC \\backsim \\triangle DEF$이고, 작은 유리 $\\triangle ABC$의 넓이가 $32 \\text{ cm}^2$이다. 큰 유리 $\\triangle DEF$의 넓이를 구하시오. (대응변 $\\overline{AB}=8$ cm, $\\overline{DE}=10$ cm)',
    figureKey: 'two_triangles_area',
    askFormat: '$\\triangle DEF$의 넓이: ___ $\\text{cm}^2$',
    acceptedAnswers: ['50', '50cm²', '50 cm²', '50제곱센티미터'],
    quest: '소폴로스/유리',
    difficulty: '중',
    hints: ['두 유리는 닮은꼴이에요. 대응변 8과 10으로 닮음비부터 구해봐요.', '넓이비는 닮음비를 두 번 곱한 값(제곱)이에요. 작은 넓이 32에 그 넓이비를 적용하면 큰 넓이가 나와요.'],
  },

  // 4. 점토 — 닮음비→부피비 (점토 혼합량)
  CLAY: {
    type: 'shortAnswer',
    text: '점토를 반죽할 항아리 두 개는 서로 닮은 원기둥이다. 닮음비(반지름)가 $3:4$이고, 작은 항아리의 부피가 $54\\pi \\text{ cm}^3$이다. 큰 항아리의 부피를 구하시오.',
    figureKey: 'two_cylinders_volume',
    askFormat: '큰 항아리의 부피: ___ $\\pi \\text{ cm}^3$ (계수만)',
    acceptedAnswers: ['128', '128π', '128πcm³', '128 π'],
    quest: '소폴로스/점토',
    difficulty: '중',
    hints: ['두 항아리는 닮은 원기둥이에요. 닮음비(반지름) 3:4에서 시작해요.', '부피비는 닮음비를 세 번 곱한 값(세제곱)이에요. 작은 부피 54π에 그 부피비를 적용하면 큰 부피가 나와요.'],
  },

  // ===== 5. 피타고라스 — 대장간 열쇠 (삼각형 닮음 조건 매칭) =====
  KEY: {
    type: 'match',
    text: '피타고라스가 대장간 열쇠를 쥐고 묻는다. "여섯 개의 삼각형 중 서로 닮은 것끼리 짝을 짓고, 그 닮음 조건(SSS·SAS·AA)을 답하라. 맞히면 열쇠를 주마."',
    figureKey: 'six_triangles',
    // (1) 두변6,4+끼인각75  (2) 세변5,3,4  (3) 40,35  (4) 105,40  (5) 세변6,8,10  (6) 두변9,6+끼인각75
    items: ['(1)과 닮은 것', '(2)와 닮은 것', '(3)과 닮은 것'],
    choices: ['(4) — AA 닮음', '(5) — SSS 닮음', '(6) — SAS 닮음'],
    // (1)≈(6) SAS, (2)≈(5) SSS, (3)≈(4) AA
    correctMatches: [2, 1, 0],
    quest: '피타고라스/대장간 열쇠',
    difficulty: '중',
    hints: ['두 변의 비가 같고 끼인각이 같으면 SAS, 세 변의 비가 같으면 SSS, 두 각이 같으면 AA예요.',
            '(1)은 6,4와 75°, (6)은 9,6과 75° → 6:9=4:6, 끼인각 같음.'],
  },

  // ===== 6~7. 다이달로스 — 설계 도구(자·컴퍼스) =====

  // 6. 공통각 AA (작도로 닮은 삼각형, CD 길이)
  TOOL1: {
    type: 'shortAnswer',
    text: '다이달로스가 설계도를 가리킨다. "이 도면, $\\angle C = \\angle ABD$다. $\\overline{AB}=6$ cm, $\\overline{AD}=4$ cm일 때 $\\overline{CD}$의 길이를 구해. 못 풀면 자도 컴퍼스도 없어."',
    figureKey: 'common_angle_AA',
    askFormat: '$\\overline{CD}$의 길이: ___ cm',
    // △ABC∽△ADB (∠A 공통, ∠C=∠ABD) → AC:AB = AB:AD → AC:6=6:4 → AC=9 → CD=9-4=5
    acceptedAnswers: ['5', '5cm', '5 cm'],
    quest: '다이달로스/설계도구',
    difficulty: '상',
    hints: ['△ABC와 △ADB가 닮음이에요 (∠A 공통, ∠C=∠ABD).',
            '$\\overline{AC}:\\overline{AB}=\\overline{AB}:\\overline{AD}$ → AC:6=6:4 → AC=9. CD=AC−AD.'],
  },

  // 7. 맞꼭지각 SAS (X자형, DE 길이)
  TOOL2: {
    type: 'shortAnswer',
    text: '"하나 더. 두 막대가 점 C에서 X자로 교차한다. $\\overline{AC}=9$, $\\overline{BC}=12$, $\\overline{DC}=6$, $\\overline{EC}=8$, $\\overline{AB}=15$일 때 $\\overline{DE}$의 길이는?"',
    figureKey: 'vertical_angle_SAS',
    askFormat: '$\\overline{DE}$의 길이: ___ cm',
    // △ABC∽△DEC (맞꼭지각, AC:DC=BC:EC=9:6=12:8=3:2) → AB:DE=3:2 → 15:DE=3:2 → DE=10
    acceptedAnswers: ['10', '10cm', '10 cm'],
    quest: '다이달로스/설계도구',
    difficulty: '상',
    hints: ['맞꼭지각 ∠ACB=∠DCE. 두 변의 비를 확인해요. 9:6=12:8=3:2',
            '△ABC∽△DEC (SAS) → 15:DE=3:2 → DE=10'],
  },

  // ===== 8. 이리스 — 현장 실측 (직각삼각형 빗변 수선) =====
  MEASURE: {
    type: 'shortAnswer',
    text: '이리스가 기둥 그림자를 살핀다. "$\\angle A=90°$인 직각삼각형 $ABC$에서 점 $A$에서 빗변 $BC$에 내린 수선의 발이 $D$예요. $\\overline{AC}=12$ cm, $\\overline{BC}=16$ cm일 때 $\\overline{CD}=x$를 구하면, 기둥 높이를 알 수 있어요."',
    figureKey: 'right_triangle_perp',
    askFormat: '$x$의 값: ___ cm',
    // △ABC∽△DAC (AA) → AC:DC = BC:AC → 12:x = 16:12 → AC²=CB·CD → 144=16x → x=9
    acceptedAnswers: ['9', '9cm', '9 cm'],
    quest: '이리스/현장실측',
    difficulty: '상',
    hints: ['△ABC와 △DAC가 닮음이에요 (∠C 공통, 직각).',
            '$\\overline{AC}^2=\\overline{CB}\\cdot\\overline{CD}$ → 12²=16·x → x=9'],
  },

  // ===== 9. 탈레스 — 그림자로 높이 측정 (피라미드, 최종 직전) =====
  SHADOW: {
    type: 'shortAnswer',
    text: '탈레스가 옛 일화를 꺼낸다. "막대와 그림자로 피라미드 높이를 잰 적이 있지. 길이 $1$ m 막대의 그림자가 $1.5$ m이고, 피라미드 밑면 중심에서 그림자 끝까지가 $220.5$ m였다. 피라미드의 높이는?"',
    figureKey: 'pyramid_shadow',
    askFormat: '피라미드의 높이: ___ m',
    // 막대:그림자 = 1:1.5. 피라미드높이:220.5 = 1:1.5 → 높이=220.5÷1.5=147
    acceptedAnswers: ['147', '147m', '147 m'],
    quest: '탈레스/황금비례판 직전',
    difficulty: '상',
    hints: ['막대와 그림자가 만드는 삼각형, 피라미드와 그림자가 만드는 삼각형이 닮음이에요.',
            '높이:220.5 = 1:1.5 → 높이 = 220.5 ÷ 1.5 = 147'],
  },

  // ===== 10. 탈레스 — 황금비 (최종 관문, 신규 인터랙션) =====
  GOLDEN: {
    type: 'self-similar',
    variant: 'golden',             // 정사각형을 떼어내면 닮은 직사각형 (황금비)
    text: '탈레스가 황금 비례판을 내민다. "성스러운 회당은 가장 아름다운 비, 황금비로 지어야 한다. 이 직사각형에서 정사각형을 떼어내면, 남은 부분이 원래와 닮은꼴이 되지. 그 순간의 비를 찾고 비례식을 세워라. 그것이 황금비다."',
    figureKey: 'golden_rectangle',
    // 슬라이더로 가로:세로 조절 → "정사각형 떼어낸 나머지가 원래와 닮음"이 되는 순간
    // 비례식: (전체=a+b):(긴 변 a) = (긴 변 a):(짧은 변 b)
    proportion: { left: ['전체 (a+b)', '긴 변 a'], right: ['긴 변 a', '짧은 변 b'] },
    targetRatio: 1.618,            // φ (계산은 안 함, 명명만)
    ratioName: '황금비 (약 1 : 1.6)',
    quest: '탈레스/황금비례판',
    difficulty: '최상',
    hints: ['정사각형을 떼어낸 작은 직사각형이 원래 직사각형과 닮은꼴이 되는 순간을 찾아요.',
            '닮음이면 대응변의 비가 같아요. (전체):(긴 변) = (긴 변):(짧은 변)',
            '이 특별한 비를 황금비라고 불러요. 약 1:1.6 이에요.'],
  },

};
