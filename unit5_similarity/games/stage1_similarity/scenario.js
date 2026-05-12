// ===== 시나리오 데이터 (Stage 1 — 닮음의 신전) =====
// step types:
//   { type: 'scene', name, bg, clearChars }
//   { type: 'dialog', speaker, expression, position?, text, prop? }
//   { type: 'choice', prompt, options: [{ label, effect, reactKey }] }
//   { type: 'reaction', reactions: { A: {...}, B: {...}, C: {...} } }
//   { type: 'enter', role, expression, position }    // 수동 등장(자동 시스템 우회)
//   { type: 'problem', id, kind, topic, difficulty, format, onCorrect, onWrong,
//     image?: 'M01.png',                       // 문제 이미지 파일 (problems/ 폴더, 없으면 placeholder)
//     responseType?: 'choice' | 'shortAnswer', // 응답 형식. 비우면 format 문자열로 자동 추론
//     choices?: ['①', '②', '③', '④'],        // 객관식 보기 (텍스트 또는 이미지 파일명)
//     correctChoice?: 2,                       // 객관식 정답 인덱스 (0부터)
//     acceptedAnswers?: ['3:5', '0.6'],        // 단답형 허용 답안 배열
//   }
//   { type: 'ending' }                                // 엔딩 분기 판정 트리거

const STEPS = [
  // ============================================================
  // Scene 1 — 항구의 아침 (도입)
  // ============================================================
  { type: 'scene', name: 'Scene 1 — 항구의 아침', bg: 'harbor', clearChars: true },
  { type: 'dialog', speaker: 'narrator', text: '드디어 도착했다. 피타고라스 학당이 있다는 케팔로니아 섬. 배에서 내리자마자 온 몸에 소금 냄새가 달라붙는다.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile', position: 'left',
    text: '어이, 너 혹시 오늘 입학하는 견습생이야? 얼굴에 "나 길 잃음"이라고 쓰여 있거든.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised', position: 'right',
    text: '아, 네! 저 시밀러라고 해요. 탈레스 선생님이시죠?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '맞아. 공식 직함은 "준 방문 학자"지만, 그냥 탈레스 아저씨라고 불러도 돼. 자, 학당까지 같이 가자고.' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking', prop: 'lighthouse',
    text: '참, 걸어가는 동안 하나만 물어볼게. 지금 저기 보이는 등대탑 있지? 탑 그림자 길이를 알면 탑 높이를 구할 수 있어. 어떻게 하면 될 것 같아?' },
  { type: 'choice',
    prompt: '탈레스의 질문에 답하기',
    options: [
      { label: 'A. 내 그림자 길이와 비교하면 되지 않을까요?', effect: { wisdom: 2 }, reactKey: 'A' },
      { label: 'B. 줄자로 탑에 올라가서 직접 재면 돼요.', effect: { math: -1 }, reactKey: 'B' },
      { label: 'C. …모르겠어요. 그냥 어림잡아요?', effect: {}, reactKey: 'C' },
    ]
  },
  { type: 'reaction', reactions: {
    A: { speaker: 'thales', expression: 'smile', prop: 'shadow_similarity',
         text: '정확해! 그게 바로 "닮음"의 핵심이야. 내 키:내 그림자 = 탑:탑 그림자. 비가 같으면 닮음이거든. 나도 이집트에서 피라미드 높이를 딱 그렇게 쟀지.' },
    B: { speaker: 'thales', expression: 'thinking',
         text: '하하, 현실적이네. 그런데 탑이 100미터면? 닮음을 쓰면 발 하나 안 움직여도 돼.' },
    C: { speaker: 'thales', expression: 'neutral',
         text: '괜찮아, 오늘 배우면 되지. "닮음"이라는 개념이 그 답이야.' },
  } },

  // ============================================================
  // Scene 2 — 피타고라스 학당 첫 수업 (닮음 정의 + M01)
  // ============================================================
  { type: 'scene', name: 'Scene 2 — 학당 첫 수업', bg: 'classroom', clearChars: true },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral', position: 'center',
    text: '모두 앉아라. 오늘 첫 수업의 주제는 "닮음"이다. 합동은 알겠지? 완전히 같은 도형. 닮음은 그 확장이다 — 크기는 달라도 모양은 같은 것.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'thinking', prop: 'correspondence_notation',
    text: '기호로는 ∽를 쓴다. "ΔABC∽ΔDEF"라고 쓰면 삼각형 ABC와 DEF가 닮음이라는 뜻이지. 여기서 중요한 건 — 꼭짓점 순서가 대응 관계를 나타낸다.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', position: 'left',
    text: '(낮은 목소리로) 이런 거 당연히 알지 않나? 나는 다섯 살 때 이미 이거 알았는데.' },
  { type: 'dialog', speaker: 'companion', expression: 'neutral', position: 'right',
    text: '(작게) 괜찮아. 지금부터 집중하면 돼.' },

  { type: 'problem',
    id: 'M01', kind: '메인 (수학)', topic: '닮음의 정의 / 기호 표기 (∽)', difficulty: '하',
    format: '객관식 4지선다',
    // === 데모 응답 데이터 (선생님이 실제 문제로 교체) ===
    image: 'M01.png',  // problems/M01.png — 없으면 자동으로 안내 표시
    responseType: 'choice',
    choices: ['① 합동', '② 닮음', '③ 평행', '④ 대칭'],
    correctChoice: 1,  // ② 닮음 (0-based index)
    onCorrect: { stats: { math: 3 }, dialog: { speaker: 'pythagoras', expression: 'smile',
      text: '옳다. 닮음은 확대·축소해도 모양이 보존된다는 것. 합동은 닮음의 특별한 경우 — 닮음비가 1:1인 것이지.' } },
    onWrong: { stats: { math: 1 }, dialog: { speaker: 'pythagoras', expression: 'neutral',
      text: '틀렸다고 좌절할 필요 없다. 합동은 "같음", 닮음은 "비가 같음"이다. 다시 새기거라.' } },
  },

  // ============================================================
  // Scene 3 — 황금 비례판 실종 사건 (M02)
  // ============================================================
  { type: 'scene', name: 'Scene 3 — 사라진 비례판', bg: 'classroom', clearChars: true },
  { type: 'dialog', speaker: 'npc', prop: 'proportion_plate',
    text: '선생님! 큰일 났습니다! 황금 비례판이 창고에서 없어졌어요!' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'surprised', position: 'center',
    text: '무엇?!' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking', position: 'left',
    text: '황금 비례판… 신전 설계에 쓰이는 그 유물 말이오? 도시 전체가 필요로 하는 것인데.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '좋다. 이것이 오늘의 실전 시험이 될 것이다. 견습생들, 들어라. 닮음 원리를 이용해 단서를 추적한다. 탈레스, 방법을 설명해주게.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile', prop: 'academy_map',
    text: '알겠소. 먼저 창고 바닥에 남겨진 발자국과 오래된 학당 지도를 비교해야 해. 지도는 축척 1:200이거든. 지도에서 발자국 흔적까지의 거리를 재면, 실제 거리를 닮음비로 구할 수 있지.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'right',
    text: '잠깐, 지도에서 대응하는 꼭짓점이나 방향을 정확히 써야 하지 않나요? 표기 순서가 중요하다고 하셨잖아요.' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '맞아. 대응 꼭짓점 순서가 틀리면 엉뚱한 방향을 찾아가게 돼.' },

  { type: 'problem',
    id: 'M02', kind: '메인 (수학)', topic: '대응 꼭짓점·변·각 표기 순서', difficulty: '중',
    format: '단답형 / 객관식',
    onCorrect: { stats: { math: 3, insight: 1, clues: 1 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '역시! 단서 카드를 하나 획득했다. 이 단서를 들고 현장으로 가보자고.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'thales', expression: 'neutral',
        text: '괜찮아. 대응 순서는 헷갈리기 쉬워. 지금 한 번 더 새겨두자.' } },
  },

  // ============================================================
  // Scene 4 — 탈레스의 역사 강의 (S01)
  // ============================================================
  { type: 'scene', name: 'Scene 4 — 복도 이동', bg: 'corridor', clearChars: true },
  { type: 'dialog', speaker: 'thales', expression: 'smile', position: 'left', prop: 'pyramid_thales',
    text: '이동하는 동안 심심할 테니 이야기 하나 해줄게. 내가 이집트에서 피라미드 높이를 쟀을 때 말이야 — 직접 올라가지 않고도 쟀거든. 어떻게 했을 것 같아?' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', position: 'right',
    text: '그림자 길이로요? 내 키:내 그림자 = 피라미드:피라미드 그림자.' },
  { type: 'dialog', speaker: 'thales', expression: 'surprised',
    text: '오, 바로 맞히네. 그게 바로 닮음비야. 내 키와 그림자의 비가 피라미드와 그림자의 비와 같다는 것.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center',
    text: '그럼 그림자가 생기지 않는 날이나 각도가 특이한 날이면 못 쓰겠네요.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '하하, 맞아. 그래서 나는 그림자와 키가 똑같이 길어지는 딱 한 순간을 기다렸지. 그러면 닮음비가 1:1이 되니까 계산이 아주 쉬워지거든!' },

  { type: 'problem',
    id: 'S01', kind: '사이드 (역사·상식)', topic: '탈레스의 피라미드 측정 일화', difficulty: '하',
    format: 'OX 퀴즈',
    onCorrect: { stats: { wisdom: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '잘 알고 있구나. 고대 수학은 이렇게 실생활에 직결돼 있었다고.' } },
    onWrong: { stats: { wisdom: 1 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '괜찮아. 옛날 이야기라 헷갈릴 수 있지. 다음에 또 들으면 돼.' } },
  },

  // ============================================================
  // Scene 5 — 창고 현장 조사 (M03 + M04)
  // ============================================================
  { type: 'scene', name: 'Scene 5 — 창고 현장', bg: 'warehouse', clearChars: true },
  { type: 'dialog', speaker: 'companion', expression: 'thinking', position: 'right',
    text: '여기 바닥에 두 개의 발자국 문양이 있어. 하나는 크고 하나는 작아. 닮음인지 아닌지 확인해보자.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', position: 'left',
    text: '대응변의 비가 일정하고 대응각이 같으면 닮음이지. 당연한 거잖아.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center', prop: 'footprints_pair',
    text: '일단 비를 구해봐야 알겠는데. 작은 발자국의 길이가 15cm, 큰 발자국이 25cm라고 하면…' },

  { type: 'problem',
    id: 'M03', kind: '메인 (수학)', topic: '닮음비 계산', difficulty: '중',
    format: '단답형 (수치 입력)',
    // === 데모 응답 데이터 (단답형 시연용 — 15:25 = 3:5) ===
    image: 'M03.png',
    responseType: 'shortAnswer',
    acceptedAnswers: ['3:5', '3 : 5'],
    onCorrect: { stats: { math: 3, clues: 1 },
      dialog: { speaker: 'companion', expression: 'smile',
        text: '잘했어! 단서 카드가 하나 더 늘었어.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '비를 가장 간단한 자연수의 비로 나타내야 해. 다시 한 번 천천히.' } },
  },

  { type: 'dialog', speaker: 'thales', expression: 'smile', position: 'left',
    text: '닮음이라는 게 확인됐지? 그럼 이번엔 넓이로 가보자. 큰 발자국 면적이 작은 것의 몇 배인지 알 수 있어?' },
  { type: 'dialog', speaker: 'rival', expression: 'thinking', position: 'right', prop: 'area_volume_ratio',
    text: '닮음비가 m:n이면 넓이 비는 m²:n²이고, 부피 비는 m³:n³이잖아…' },

  { type: 'problem',
    id: 'M04', kind: '메인 (수학)', topic: '평면도형 닮음 성질 (대응변·대응각)', difficulty: '중',
    format: '객관식 4지선다',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '뭐야… 너 잘 하잖아. (작게)' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '대응변의 비는 일정하고, 대응각은 모두 같다는 게 핵심이야.' } },
  },

  { type: 'dialog', speaker: 'companion', expression: 'thinking', position: 'right',
    text: '발자국 두 개가 닮음이라면… 같은 사람의 신발이라는 뜻이잖아. 그런데 왜 크기가 다르지?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised', position: 'center',
    text: '혹시 지도와 현실처럼, 같은 물건의 축소판이랑 원본이 둘 다 있었던 건 아닐까요?' },
  { type: 'dialog', speaker: 'thales', expression: 'surprised', position: 'left',
    text: '오, 그거 흥미로운 추리인걸!' },

  // ============================================================
  // Scene 6 — 잠깐의 휴식 + 시사 퀴즈 (S02)
  // ============================================================
  { type: 'scene', name: 'Scene 6 — 정원에서 휴식', bg: 'garden', clearChars: true },
  { type: 'dialog', speaker: 'thales', expression: 'smile', position: 'left',
    text: '잠깐 쉬면서 머리를 식히자. 수학만 하면 뇌가 굳는다고!' },
  { type: 'dialog', speaker: 'companion', expression: 'smile', position: 'right',
    text: '선생님, 또 재밌는 거 물어보실 거죠?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '맞아. 오늘의 세상 이야기 하나 해볼게.' },

  { type: 'problem',
    id: 'S02', kind: '사이드 (시사·경제·상식)', topic: '비율·비례 관련 실생활 상식', difficulty: '하',
    format: 'OX 또는 객관식',
    onCorrect: { stats: { wisdom: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '훌륭해! 닮음은 사실 우리 주변 어디에나 있다고.' } },
    onWrong: { stats: { wisdom: 1 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '비율이라는 건 알고 보면 별거 없어. 다음에 또 보면 알게 될 거야.' } },
  },

  // ============================================================
  // Scene 7 — 도서관의 단서 (M05 + M06)
  // ============================================================
  { type: 'scene', name: 'Scene 7 — 학당 도서관', bg: 'library', clearChars: true },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', position: 'left',
    text: '도서관에 비례판 관련 기록이 있을 거야. 찾아봐야지.' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking', position: 'right', prop: 'scroll_pattern',
    text: '여기 기록에 비례판이 "정삼각형과 원을 닮음으로 연결한 문양"으로 제작됐다고 나와 있어.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center',
    text: '정삼각형과 원은 항상 닮음이잖아. 그럼 비례판의 모양이 특정되는 건가?' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', prop: 'always_similar_shapes',
    text: '항상 닮음인 도형들 외우고 있어? 나는 다 외웠는데.' },

  { type: 'problem',
    id: 'M05', kind: '메인 (수학)', topic: '항상 닮음인 도형 판별', difficulty: '중',
    format: '객관식 (다답형)',
    onCorrect: { stats: { math: 3, clues: 1 },
      dialog: { speaker: 'companion', expression: 'smile',
        text: '맞아! 두 이등변삼각형은 항상 닮음이 아니라는 게 함정이지.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'pythagoras', expression: 'neutral',
        text: '주의하거라. "두 이등변삼각형은 항상 닮음"이라는 것은 거짓이다. 정삼각형과 혼동하지 말 것.' } },
  },

  { type: 'dialog', speaker: 'companion', expression: 'thinking', position: 'right',
    text: '또 다른 기록에는 원본 비례판과 모형 비례판의 닮음비가 2:5라고 나와 있어. 모형은 창고에 있었는데…' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center',
    text: '그럼 원본의 넓이는 모형의 몇 배지?' },

  { type: 'problem',
    id: 'M06', kind: '메인 (수학)', topic: '넓이의 비·부피의 비 (닮음비 m:n)', difficulty: '상',
    format: '단답형 (수치 입력)',
    onCorrect: { stats: { math: 4, insight: 2 },
      dialog: { speaker: 'pythagoras', expression: 'smile',
        text: '(조교 전달) 잘 했다. 닮음비의 제곱과 세제곱 — 그것이 차원의 본질이다.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '닮음비가 m:n이면 넓이 비는 m²:n², 부피 비는 m³:n³. 다시 시도해보자.' } },
  },

  // ============================================================
  // Scene 8 — 라이벌과의 추리 대결 (M07)
  // ============================================================
  { type: 'scene', name: 'Scene 8 — 토론 광장', bg: 'yard', clearChars: true },
  { type: 'dialog', speaker: 'rival', expression: 'thinking', position: 'left', prop: 'two_triangles_compare',
    text: '나는 창고 근처에서 두 삼각형 모양의 흔적을 발견했어. 둘 다 비례판 문양 조각이야. 이 둘이 닮음인지 확인하면 범인이 같은 사람인지 알 수 있어.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'right',
    text: '삼각형 닮음 조건으로 확인하는 거지? SSS, SAS, AA 중 어떤 걸 쓰면 될까?' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', prop: 'similarity_conditions',
    text: '세 변의 비가 모두 같으면 SSS. 두 변의 비와 그 끼인각이 같으면 SAS. 두 각이 같으면 AA.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral', position: 'center',
    text: '잘 설명했다, 다이달로스. 그럼 실제로 판단해보아라.' },

  { type: 'problem',
    id: 'M07', kind: '메인 (수학)', topic: 'SSS·SAS·AA 닮음 조건 판별', difficulty: '중',
    format: '객관식 4지선다',
    onCorrect: { stats: { math: 3, clues: 1 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '…나도 맞혔어. 이번엔 무승부다.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'pythagoras', expression: 'neutral',
        text: '세 조건을 다시 정리해두거라. 어떤 정보가 주어졌느냐에 따라 적용할 조건이 다르다.' } },
  },

  { type: 'dialog', speaker: 'companion', expression: 'smile', position: 'right',
    text: '둘 다 맞혔으니까 같이 다음 단서로 가면 되잖아.' },

  // ============================================================
  // Scene 9 — 학당 마당의 수선 (M08 + S03)
  // ============================================================
  { type: 'scene', name: 'Scene 9 — 마당의 수선', bg: 'yard', clearChars: true },
  { type: 'dialog', speaker: 'thales', expression: 'thinking', position: 'left', prop: 'right_triangle_perpendicular',
    text: '여기 마당에 정체불명의 선 두 개가 그어져 있어. 삼각형 모양을 이루는데, 빗변에서 직각으로 내린 수선처럼 보여.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center',
    text: '빗변에서 꼭짓점에 내린 수선이요? 그러면 세 삼각형이 생기는데… 혹시 다 닮음인가요?' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking',
    text: '스스로 찾아봐. AA 닮음을 쓰면 증명할 수 있어.' },

  { type: 'problem',
    id: 'M08', kind: '메인 (수학)', topic: 'SSS·SAS·AA 닮음 조건 적용', difficulty: '상',
    format: '객관식 (단계 선택형)',
    onCorrect: { stats: { math: 4, insight: 2 },
      dialog: { speaker: 'pythagoras', expression: 'neutral',
        text: '가능성이 보이는 제자로다. 닮음 조건의 적용 — 그것이 기하의 핵심이지.' } },
    onWrong: { stats: { math: 1 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '두 각이 같으면 나머지 한 각도 자동으로 같아져. AA 닮음을 떠올려봐.' } },
  },

  { type: 'problem',
    id: 'S03', kind: '사이드 (상식)', topic: '현실 속 닮음 활용 (건축·지도·사진)', difficulty: '하',
    format: '객관식',
    onCorrect: { stats: { insight: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '맞아! 닮음은 우리가 사는 세상의 거의 모든 곳에 있다고.' } },
    onWrong: { stats: { insight: 1 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '주변을 잘 보면 닮음 천지야. 다음 번엔 더 잘 보일 거야.' } },
  },

  // ============================================================
  // Scene 10 — 최후의 추론 (M09 + 클라이맥스)
  // ============================================================
  { type: 'scene', name: 'Scene 10 — 지하 보관고', bg: 'basement', clearChars: true },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking', position: 'center', prop: 'clue_cards',
    text: '단서 카드를 다 모았어. 지도의 닮음비, 발자국의 닮음비, 도형 조각들의 닮음 조건… 이걸 전부 연결하면—' },
  { type: 'dialog', speaker: 'companion', expression: 'smile', position: 'right',
    text: '비례판이 숨겨진 장소가 나와!' },
  { type: 'dialog', speaker: 'rival', expression: 'surprised', position: 'left',
    text: '잠깐, 진짜로?! 나도 같은 결론이 나왔어. 지하 보관고 동쪽 세 번째 칸.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '두 사람 모두 정확해. 가보자!' },

  { type: 'problem',
    id: 'M09', kind: '메인 (수학)', topic: '직각삼각형 수선과 AA 닮음', difficulty: '상',
    format: '객관식 / 빈칸 채우기',
    onCorrect: { stats: { math: 5, clues: 1 },
      dialog: { speaker: 'pythagoras', expression: 'smile',
        text: '이 학당의 정식 제자로 인정한다. 닮음의 문이 너에게 열렸구나.' } },
    onWrong: { stats: { math: 2 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '직각삼각형에서 빗변에 내린 수선은 세 닮은 삼각형을 만들어. 천천히 다시 봐.' } },
  },

  { type: 'dialog', speaker: 'pythagoras', expression: 'smile', position: 'center', prop: 'proportion_plate',
    text: '있구나. 시밀러, 다이달로스. 닮음 하나로 실종 유물을 찾아냈다. 수학이란 이런 것이다 — 보이지 않는 것을 보이게 하는 언어.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'smile', position: 'right',
    text: '선생님… 닮음이 이렇게 강력한 도구인 줄 몰랐어요.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral', position: 'left',
    text: '(작게) …나도 생각보다 재밌었다. 절대 말 못 하지만.' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '(웃으며) 다 들렸어, 다이달로스.' },

  // ============================================================
  // 엔딩 분기 판정
  // ============================================================
  { type: 'ending' },
];
