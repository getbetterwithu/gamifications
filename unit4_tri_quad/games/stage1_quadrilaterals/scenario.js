// ===== 시나리오 데이터 (4단원 Stage 1 — 폴리곤과 설계도의 비밀) =====
// 출처: unit4_tri_quad/docs/polygon_scenario_ch4.md (Scene 1~12 + 엔딩 ABC)
// 문제 데이터는 problems.js의 PROBLEMS 객체에서 자동으로 가져옴 (id만 일치하면 됨).
//
// step types:
//   { type: 'scene', name, bg, clearChars }
//   { type: 'dialog', speaker, expression, position?, text, prop? }
//   { type: 'choice', prompt, options: [{ label, effect, reactKey }] }
//   { type: 'reaction', reactions: { A: {...}, B: {...}, C: {...} } }
//   { type: 'enter', role, expression, position }
//   { type: 'problem', id, kind, topic, difficulty, onCorrect, onWrong }
//   { type: 'ending' }
//
// 배경 매핑 (backgrounds.js 키와 일치):
//   Scene 1     → entrance     (학당 정문)
//   Scene 2~7   → yard         (설계도 안뜰)
//   Scene 8     → garden       (나무 그늘, 5단원 재활용)
//   Scene 9~11  → yard
//   Scene 12    → yard_sunset  (안뜰 노을)
//   엔딩 A      → award_hall   (시상 공간)
//   엔딩 B      → corridor     (학당 복도, 5단원 재활용)
//   엔딩 C      → yard_sunset  (저녁 빈 안뜰)

const STEPS = [
  // ============================================================
  // Scene 1 — 첫발을 디디다
  // ============================================================
  { type: 'scene', name: 'Scene 1 — 첫발을 디디다', bg: 'entrance', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '에게해의 바람이 분다. 케팔로니아 섬, 피타고라스 학당 정문 앞 — 이른 아침. 돌기둥이 늘어선 웅장한 입구.' },

  { type: 'dialog', speaker: 'thales', expression: 'smile', position: 'left',
    text: '어이, 거기! 멍하니 서 있는 게 오늘 입학하는 신입이지? 얼른 들어와, 문이 물진 않으니까.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised', position: 'right',
    text: '아, 네! 저는 폴리곤이라고 합니다. 오늘부터 이 학당에서 수학을 배우러…' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '알아, 알아. 나는 탈레스. 여기서 제일 친절한 선생이지. 피타고라스 선생님은 제일 무서운 선생이고.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '무섭다고요…?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '농담이야, 반만. 자, 들어와. 오늘 학당이 좀 시끄러울 거거든.' },
  { type: 'dialog', speaker: 'narrator',
    text: '폴리곤이 학당 안으로 들어선다. 안뜰 곳곳에 학생들이 웅성거리고 있다.' },

  // ============================================================
  // Scene 2 — 설계도 분쟁
  // ============================================================
  { type: 'scene', name: 'Scene 2 — 설계도 분쟁', bg: 'yard_dispute', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '학당 안뜰 중앙. 큰 석판 위에 설계도가 펼쳐져 있다. 건축가들과 학당 관계자들이 언성을 높이고 있다.' },

  { type: 'enter', role: 'thales', expression: 'thinking', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'center' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking',
    text: '저게 새 신전 설계도야. 학당 동쪽에 증축할 건물인데 — 저기 봐, 기둥 사이 구획들. 저게 어떤 사각형인지 분류가 안 돼서 건축 허가가 안 나고 있거든.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '사각형 분류 때문에요? 그게 왜 문제가…' },
  { type: 'dialog', speaker: 'npc', expression: 'neutral',
    text: '(건축가) 평행사변형이면 충분하오! 대변이 평행하면 그만이지, 굳이 직사각형이어야 할 이유가 없소!' },
  { type: 'dialog', speaker: 'npc', expression: 'neutral',
    text: '(학당 관계자) 신성한 신전이오! 모든 각이 직각이어야 하오! 대각선 길이가 같아야 한다는 말이오!' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '둘 다 맞는 말 같기도 하고… 아닌 것 같기도 하고…' },

  { type: 'enter', role: 'rival', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '흥. 신참이 벌써 헷갈리는 얼굴이네. 이 정도는 기본 아냐?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '아, 저는 아직 입학 첫날이라서…' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '첫날이면 다야? 나는 첫날부터 다 알았는데.' },
  { type: 'dialog', speaker: 'narrator',
    text: '그때 안뜰 저편에서 묵직한 발소리가 들린다.' },

  // ============================================================
  // Scene 3 — 피타고라스의 첫 과제
  // ============================================================
  { type: 'scene', name: 'Scene 3 — 피타고라스의 첫 과제', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'pythagoras', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'center' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '시끄럽군.' },
  { type: 'dialog', speaker: 'narrator',
    text: '순간 정적. 건축가들도 입을 다문다.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '너. 오늘 입학한 신입이지.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '예, 그렇습니다.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '이름이 폴리곤이라 했나. 다각형. 어울리는 이름이군. 이 분쟁을 해결해라.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '저… 저요?! 첫날인데요?!' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '신입생이라 더 잘됐군. 학당에서는 아는 만큼 보이고, 보이는 만큼 증명한다. 신입생의 능력을 확인할 수 있는 좋은 기회지. 설계도 속 사각형들이 어떤 조건을 만족하는지 판별하여 분쟁을 해결하라. 탈레스가 돕는다.' },

  { type: 'enter', role: 'thales', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '걱정 마. 혼자 하는 거 아니야.' },

  { type: 'enter', role: 'rival', expression: 'surprised' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '(작게, 그러나 들리도록) 신참한테 맡긴다고? 분쟁이 더 길어지겠네.' },
  { type: 'dialog', speaker: 'narrator',
    text: '피타고라스는 다이달로스를 한 번 바라보다 말없이 자리를 뜬다. 폴리곤은 떨리는 손으로 설계도 앞에 선다.' },

  // ============================================================
  // 분기점 — 첫 의지 선택
  // ============================================================
  { type: 'choice',
    prompt: '폴리곤, 첫 과제를 어떻게 받아들일까?',
    options: [
      { label: '"해보겠습니다. 최선을 다해서요."', effect: { math: 1, wisdom: 1, insight: 1 }, reactKey: 'brave' },
      { label: '"…자신은 없지만, 차근차근 해보겠습니다."', effect: { math: 0, wisdom: 2, insight: 1 }, reactKey: 'humble' },
      { label: '(말없이 설계도를 응시한다)', effect: { math: 1, wisdom: 0, insight: 2 }, reactKey: 'silent' },
    ]
  },
  { type: 'reaction',
    reactions: {
      brave: { speaker: 'thales', expression: 'smile', text: '그 정신, 좋아. 일단 시작이 반이야.' },
      humble: { speaker: 'thales', expression: 'smile', text: '겸손한 게 오히려 더 멀리 가더라. 차근차근 가자.' },
      silent: { speaker: 'thales', expression: 'thinking', text: '눈이 빛나는데? 보고 있다는 거지. 좋아.' },
    }
  },

  // ============================================================
  // Scene 4 — 평행사변형의 조건 (M01)
  // ============================================================
  { type: 'scene', name: 'Scene 4 — 평행사변형의 조건', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'center' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '자, 먼저 기초부터. 건축가가 "평행사변형이면 충분하다"고 했는데 — 폴리곤, 사각형이 평행사변형이 되려면 어떤 조건이 필요한지 기억해?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '음… 변이 평행한 거랑… 또 뭐가 있었더라. 분명 몇 가지 더 배웠는데.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '천천히 떠올려봐도 돼. 첫 문제부터 차근차근 볼 거니까.' },

  { type: 'problem', id: 'M01', kind: '메인', topic: '평행사변형 조건 ①', difficulty: '하',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '맞아! 역시. 두 쌍의 대변의 길이가 각각 같으면 평행사변형이 되지.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '괜찮아. 정답을 알았으니 이제 머리에 박혔을 거야. 다음 가자.' } },
  },

  { type: 'enter', role: 'companion', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'companion', expression: 'neutral',
    text: '… 잘 하네요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '아, 감사해요! 저는 폴리곤이에요.' },
  { type: 'dialog', speaker: 'companion', expression: 'neutral',
    text: '알아요. 이리스예요. … 계속해요.' },

  // ============================================================
  // Scene 5 — 함정, 대각선의 길이 (M04)
  // ============================================================
  { type: 'scene', name: 'Scene 5 — 함정 OX', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'rival', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'center' },
  { type: 'enter', role: 'thales', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '그러면 이건 어떻게 설명할 거야. 이 구획은 두 대각선의 길이가 같던데. 그러면 평행사변형이지?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '두 대각선의 길이가 같으면… 음…' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '뭐야, 모르는 거야? 기초 아냐?' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking',
    text: '다이달로스, 신입 괴롭히는 게 취미야? 폴리곤, 천천히 생각해봐. 서두르지 말고.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '잠깐, 두 대각선의 길이가 같기만 하면 되었던가…? 뭔가 다른 조건이 더 있었던 거 같은데.' },

  { type: 'problem', id: 'M04', kind: '메인', topic: '함정 OX', difficulty: '하',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '… 뭐, 맞긴 하네.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '대각선 길이가 같은 건 직사각형·등변사다리꼴에서도 성립해. 평행사변형 "조건"은 아니야.' } },
  },

  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '다이달로스가 신참한테 "맞긴 하네" 소리 하는 거 처음 보는 것 같은데.' },
  { type: 'dialog', speaker: 'rival', expression: 'surprised',
    text: '안 들었거든!' },

  // ============================================================
  // Scene 6 — 네 가지 그림 (M02)
  // ============================================================
  { type: 'scene', name: 'Scene 6 — 네 가지 그림', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'center' },
  { type: 'enter', role: 'companion', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '자, 이제 실전이야. 설계도에 사각형 구획이 네 개 그려져 있어. 모두 평행사변형이긴 한데 — 각각이 왜 평행사변형인지 그 이유가 다 달라. 어떤 조건이 적용됐는지 보기에서 찾아 연결해봐.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '다 비슷해 보이는데… 이유가 다 다르다고요?' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '그림마다 표시된 게 달라요. 변의 길이가 같은 표시인지, 평행 표시인지, 대각선 표시인지 — 거기에 맞는 조건을 골라야 해요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '그렇구나. 하나씩 매칭해보자.' },

  { type: 'problem', id: 'M02', kind: '메인', topic: '평행사변형 조건 매칭 (4개)', difficulty: '중',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '그렇지! 네 그림이 다 평행사변형이지만, 각각 다른 조건으로 그렇게 되는 거야. 폴리곤, 잘 골랐어.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '괜찮아요. 그림에 표시된 게 뭔지부터 다시 보고, 그 표시에 맞는 조건을 찾아봐요.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '감사해요. 그냥 조건 하나하나 대보니까…' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '그게 맞는 방법이에요.' },

  // ============================================================
  // Scene 7 — 각도와 x, y (M03)
  // ============================================================
  { type: 'scene', name: 'Scene 7 — 각도 계산', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'center' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '설계도 이 부분, ∠x랑 ∠y를 구해야 해. 이 구획이 평행사변형이라면 어떤 성질이 적용되는지 알지?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '대각의 크기가 각각 같고, 이웃한 각끼리는 합도 일정하죠.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '좋아. 그럼 직접 해봐.' },

  { type: 'problem', id: 'M03', kind: '메인', topic: '평행사변형 ∠x, ∠y', difficulty: '중',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '정확해. 평행사변형의 성질을 제대로 쓸 줄 아는구나.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '이웃한 각끼리 더하면 180°. 그걸로 다시 풀어보면 답이 나올 거야.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '탈레스 선생님이 잘 알려주셔서요.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '아니, 네가 생각한 거야. 나는 방향만 가리켰을 뿐이고.' },
  { type: 'dialog', speaker: 'narrator',
    text: '그때 멀리서 다이달로스가 들릴 듯 말 듯 — "저 신참, 생각보다 빠르네." 본인도 들렸을까봐 얼른 딴 곳을 본다.' },

  // ============================================================
  // Scene 8 — 놀이기구와 평행사변형 (S01)
  // ============================================================
  { type: 'scene', name: 'Scene 8 — 실생활의 평행사변형', bg: 'garden', clearChars: true },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '수학이 설계도에만 쓰이는 줄 알아? 광장에서 본 빙글빙글 도는 놀이기구 있잖아. 거기 비밀이 하나 숨어 있어.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '비밀이요? 그냥 빙빙 도는 거 아니에요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '도는데도 의자가 안 기울잖아. 그 안에 우리가 배운 사각형 하나가 숨어 있어. 어떤 도형일까?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '…어떤 사각형이지.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '자, 이 원리로 문제 하나.' },

  { type: 'problem', id: 'S01', kind: '사이드', topic: '놀이기구 평행사변형', difficulty: '하',
    onCorrect: { stats: { wisdom: 2, insight: 1 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '봐, 재밌지? 수학은 알고 나면 세상이 다르게 보이거든.' } },
    onWrong: { stats: { wisdom: 0 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '평행한 대변이 키 포인트야. 그게 수평을 만드는 거지.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '선생님, 저는 탈레스 선생님한테 배우길 잘한 것 같아요.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '아이고, 아부는. 어서 다음 가자. 이번엔 여러 가지 사각형으로 넘어가야 해.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '사각형 종류가 더 있나요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '직사각형, 마름모, 정사각형, 등변사다리꼴… 다 다르게 생겼지만 다 연결돼 있어. 이쪽 구획들 봐봐.' },

  // ============================================================
  // Scene 9 — 직사각형 + 정사각형 풀밭 (M08, S02)
  // ============================================================
  { type: 'scene', name: 'Scene 9 — 이리스의 발견', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'companion', expression: 'thinking', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '… 폴리곤, 여기.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '왜요?' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '이 구획, 모양이 좀 특이해요. 대각선이 두 개 보이는데 — 수치가 정확히 나와 있어요. x랑 y를 구해야 건축가한테 치수를 줄 수 있어요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '어떤 사각형 성질을 써야 하지… 한번 풀어볼게요.' },

  { type: 'problem', id: 'M08', kind: '메인', topic: '직사각형 x, y', difficulty: '중',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'companion', expression: 'smile',
        text: '이 구획은 직사각형으로 확정.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '대각선이 이등분되는 성질, 거기서 식이 풀려요.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '이리스는 어떻게 이쪽 구획을 먼저 본 거예요?' },
  { type: 'dialog', speaker: 'companion', expression: 'neutral',
    text: '… 전체를 훑으면 이상한 데가 먼저 눈에 들어와요.' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '그리고 여기, 이 구획. 목장 부지 표시인데 — 정사각형임을 이용하면 넓이를 구할 수 있을 거 같아요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '아, 이것도 수치가 나와 있네요.' },

  { type: 'problem', id: 'S02', kind: '사이드', topic: '정사각형 풀밭 목장', difficulty: '중',
    onCorrect: { stats: { wisdom: 2, insight: 1 },
      dialog: { speaker: 'companion', expression: 'smile',
        text: '맞아요. … 당신도 눈이 좋아요.' } },
    onWrong: { stats: { wisdom: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '정사각형은 대각선 길이가 변의 √2배. 그 관계가 키예요.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '이리스 덕분에 이쪽 구역 다 됐어요.' },

  // ============================================================
  // Scene 10 — 평행사변형 되도록 + 마름모 + 정사각형 (M05, M09, M10)
  // ============================================================
  { type: 'scene', name: 'Scene 10 — 셋이 맞춘 호흡', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'center' },
  { type: 'enter', role: 'rival', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'companion', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '뭐야, 나 빼고 다 하게? 이쪽 구획은 내가 볼게.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '… 같이 봐요.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '여기, 평행사변형이 되려면 x랑 y 값이 어떻게 정해져야 하는지 알아?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '변의 길이나 각도 조건에 맞춰야 하는 거네요.' },
  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '… 풀어봐.' },

  { type: 'problem', id: 'M05', kind: '메인', topic: '평행사변형 조건 x, y', difficulty: '중',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '… 맞네. 뭐.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '대변·대각·이등분 조건 중에 어느 게 적용되는지 다시 봐.' } },
  },

  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '그런데 이쪽이 문제예요. 마름모 구획인 것 같은데 — 넓이를 구해야 해요.' },
  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '마름모? 어디.' },

  { type: 'problem', id: 'M09', kind: '메인', topic: '마름모 △AOB 넓이', difficulty: '중',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '… 마름모 대각선 성질 제대로 알고 있네.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '마름모는 대각선이 수직으로 만나니까, 직각삼각형 넓이 공식을 써요.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '탈레스 선생님이 잘 알려주셨어요.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '선생님 덕만은 아닌 것 같은데.' },

  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '그러면 이건 뭐야. 두 대각선의 길이가 같고, 수직으로 만나. 어떤 사각형이야?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '두 조건이 동시에 성립하면…' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '두 가지 성질이 겹치는 사각형이… 뭐였더라.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '잠깐, 생각해볼게요.' },

  { type: 'problem', id: 'M10', kind: '메인', topic: '조건 만족 사각형 이름', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '… 맞아.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '대각선 길이가 같은 건 직사각형, 수직인 건 마름모. 두 개가 겹치면 정사각형이에요.' } },
  },

  { type: 'dialog', speaker: 'rival', expression: 'surprised',
    text: '뭐, 셋이 하니까 빠르네. … 나쁘지 않잖아.' },

  // ============================================================
  // Scene 11 — 핵심 구획 (M06, M07)
  // ============================================================
  { type: 'scene', name: 'Scene 11 — 분쟁의 정체', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'thales', expression: 'thinking', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'center' },
  { type: 'enter', role: 'rival', expression: 'thinking', position: 'right' },
  { type: 'enter', role: 'companion', expression: 'thinking' },
  { type: 'dialog', speaker: 'thales', expression: 'thinking',
    text: '자, 마지막이야. 여기가 건축가랑 학당이 싸우는 핵심 구획. 폴리곤, 판별해봐.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '대각선이… 서로 수직으로 만나는데요? 그리고 길이가 같지 않고…' },
  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '수직이등분이면… 마름모 아냐?' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '대각선 길이가 같지 않으면 직사각형도 아니고.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '둘 다 틀렸어요! 평행사변형도 직사각형도 아니라 — 마름모예요!' },

  { type: 'problem', id: 'M06', kind: '메인', topic: 'AB=DC 추가 조건', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '훌륭해. 추가 조건을 정확히 짚어냈어.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: 'AB=DC 한 조건만으론 부족해. 또 어떤 게 같이 성립해야 평행사변형이 되는지 보기를 다시 봐.' } },
  },

  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '좋아. 그럼 마지막 구획 하나만 더. 두 대각선이 어떤 관계인지 잘 봐.' },

  { type: 'problem', id: 'M07', kind: '메인', topic: '수직 대각선 + 직사각형 = 정사각형', difficulty: '중',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '완벽해. 정사각형 조건이 머리에 박힌 거지.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '직사각형 + 수직 대각선 = 정사각형. 이 등식 하나만 기억해.' } },
  },

  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '정리하자면 — 이 핵심 구획은 마름모야. 건축가도 학당도 둘 다 틀렸어.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '그럼 설계도 자체를 수정해야 한다는 거네요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '정확해. 기둥 구획을 직사각형 또는 정사각형으로 고쳐야 건축 허가가 나.' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '… 신참이 분쟁 풀었네.' },

  // ============================================================
  // Scene 12 — 별명 예고와 황금 비례판 (5단원 연결 훅)
  // ============================================================
  { type: 'scene', name: 'Scene 12 — 별명 예고', bg: 'yard_sunset', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '저녁 무렵, 학당 안뜰. 노을이 진다. 분쟁이 해결되고 건축가들이 돌아간 뒤. 탈레스와 폴리곤이 나란히 기둥에 기대 앉아 있다.' },

  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '오늘 어땠어? 첫날치고.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '심장이 열 번은 멎을 뻔했어요.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '그게 배우는 맛이야. 폴리곤, 너 오늘 뭔가 특이한 거 알아?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '뭐요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '다각형(폴리곤)답게 — 도형들의 관계를 보는 눈이 있어. 그냥 외운 게 아니라, 조건들이 서로 어떻게 연결되는지를 봤잖아.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'neutral',
    text: '그냥 하나씩 따져본 것뿐인데요.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '그게 전부야. 대부분은 그 "하나씩"을 못 하거든.' },

  { type: 'enter', role: 'pythagoras', expression: 'neutral', position: 'center' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '폴리곤.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '예!' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'smile',
    text: '도형들 사이의 관계를 읽는 눈이 있구나. 오늘은 사각형이었지만 — 언젠가 닮음이라는 주제를 다룰 때가 올 것이다. 그때가 오면, 그때 어울리는 이름을 하나 더 얹어주마.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '… 이름이요?' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'smile',
    text: '기대해라.' },
  { type: 'dialog', speaker: 'narrator',
    text: '노을 속에 피타고라스가 사라진다. 폴리곤과 탈레스가 서로 마주본다.' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '선생님이 저런 말씀 하시는 거 나도 처음 봤다. 대단한 거야.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '… 닮음이요.' },

  { type: 'dialog', speaker: 'thales', expression: 'thinking',
    text: '아, 맞다. 창고에 오래된 유물 정리해야 하는데… 황금 비례판은 괜찮으려나.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '황금 비례판이요? 그게 뭐예요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '아, 아무것도 아니야. 오래된 물건. 신경 쓰지 마.' },
  { type: 'dialog', speaker: 'narrator',
    text: '그러나 탈레스의 눈이 잠깐, 의미심장하게 창고 쪽으로 향한다. 폴리곤은 창고를 바라본다. 마음 한편에 작은 호기심이 남은 채.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '… 황금 비례판.' },
  { type: 'dialog', speaker: 'narrator',
    text: '화면이 노을빛으로 서서히 어두워진다.' },

  // ============================================================
  // 엔딩 분기
  // ============================================================
  { type: 'ending' },
];

// 엔딩 분기는 engine 내부 ENDINGS(index.html)에서 처리.
// 기준: 첫 시도 정답 개수 (problemResults.firstCorrect === true 개수)
//   A (9개 이상):  황금의 통찰
//   B (5~8개):     착실한 한 걸음
//   C (4개 이하):  다시 시작하는 자리
