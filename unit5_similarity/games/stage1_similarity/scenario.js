// ===== 시나리오 데이터 (5단원 Stage 1 — 시밀러와 황금 비례판) v2 개작 =====
// 작가: 허준성·허태욱 / 원본: docs/스토리보드_v2_시밀러와_황금비례판.md (15 Scene)
// 4단원 「폴리곤의 학당」 직후. 신전 건축을 도우며 닮음·비례를 익히고 황금 비례판을 얻는 이야기.
//
// ★ v2 개작 핵심 (중2 남학생 타깃):
//   - 긴장/위기: 의회 최후통첩(폭풍에 토대 유실 시 공사권 박탈), 사보타주 2건, "사람이 깔린다" 실질 위협.
//   - 다이달로스 = 보스: 1장 협박쪽지 "D" → 가격표·주문서 사보타주 → 9장 1:1 대결 → 13장 재등장.
//     동기 = 4단원 엔딩에서 피타고라스가 약속한 "이름"에 대한 질투(명시).
//   - 관통 미스터리: "빈 칸을 누가 왜 비워뒀나" → 12장 회수(탈레스 = 테론의 옛 스승, 황금비례판).
//   - 이리스 썸 라인: "어? 뭐지 이 분위기" 선까지만 (S4·S8·S11·S15).
//   - 신전 진척: temple_site0→5 (터→벽→천창→기둥→골조→완성).
//
// ★ 대사 원칙: 한 step 2~3문장 상한. 위기 순간은 짧게 쪼개 긴박감.
//
// ★ 신규 표정 (이번 개작 적용):
//   - rival(다이달로스) angry: S9·B4(질투 폭발), 선택지B 반응, TOOL1 오답, B7.
//   - companion(이리스) blush: S4·B9, S8·B4, S11 선택지 A/B, S11 MEASURE 정답, S15·B2.
//
// step types: scene / dialog / choice / reaction / enter / problem / ending
// 캐릭터 키: apprentice(시밀러=폴리곤) pythagoras thales rival(다이달로스) companion(이리스)
//            architect(테론) merchant(소폴로스) narrator
// 문제 id는 problems.js의 PROBLEMS 키와 일치: A4 BRICK GLASS CLAY KEY TOOL1 TOOL2 MEASURE SHADOW GOLDEN

const STEPS = [

  // ============================================================
  // Scene 1 — 비어 있는 칸 (도입 + 미스터리 떡밥 "D")
  // [[진척:0 터파기 — 설계도에 빈 칸(?) 보임]]
  // ============================================================
  { type: 'scene', name: 'Scene 1 — 비어 있는 칸', bg: 'temple_site0', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '사각형의 분쟁을 풀어낸 지 며칠. 새 신전 공사장 — 인부들이 게시판 앞에 모여 웅성거리고 있었다.' },
  { type: 'dialog', speaker: 'narrator',
    text: '게시판에 단검이 꽂혀 있었다. 단검이 뚫고 있는 쪽지엔 단 한 줄.\n"그 칸은 영원히 비어 있을 것이다. — D"' },

  { type: 'enter', role: 'architect', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '(쪽지를 뜯어 구긴다) 공사 시작하고 벌써 세 번째다. 질 나쁜 장난이지. 신경 꺼. …네가 폴리곤이군. 분쟁 풀었다는 신입.' },
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '미리 말해두지. 도형 문제 좀 풀었다고 건축가가 되는 건 아니다. 건축은 비율 싸움이야. 기둥 하나, 벽돌 하나가 전부 비례로 정해진다.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '저, 방금 그 쪽지— D가 누구—' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '질문은 실력부터 보이고 해라. (양피지를 던진다) 이거 반으로 잘라도 원래랑 똑같은 비율이 된다. 왜인지 답해. 못 풀면 집에 가고.' },

  { type: 'problem', id: 'A4', kind: '워밍업', topic: '반으로 잘라도 닮은 직사각형', difficulty: '하',
    onCorrect: { stats: { math: 2, insight: 1 },
      dialog: { speaker: 'architect', expression: 'surprised',
        text: '…1:1.41. 반으로 잘라도 닮은꼴이 되는 비를 바로 잡아내? (헛기침) 운이겠지. 따라와라.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'architect', expression: 'neutral',
        text: '닮은꼴이면 대응변의 비가 같다. 그것만 기억해. 한 번 더 기회 주지.' } },
  },

  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '(설계도의 빈 칸을 가리킨다) …이 도면에서 딱 한 칸, 회당 비율만 비어 있다. 스승님이 끝내 안 가르쳐주셨지. "가르쳐줄 수 없는 비" 라고만 하셨다.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '(가르쳐줄 수 없는 비…? 그리고 그 칸이 영원히 빈다고 저주하는 D…?)' },

  // ============================================================
  // Scene 2 — 최후통첩과 폭풍 (위기 도입 + 이리스 첫 재회)
  // [[진척:0, storm 색보정 + 날씨효과]]
  // ============================================================
  { type: 'scene', name: 'Scene 2 — 최후통첩과 폭풍', bg: 'temple_site0', clearChars: true, mood: 'storm', weather: 'storm' },
  { type: 'dialog', speaker: 'narrator',
    text: '전령이 두루마리를 들고 뛰어왔다. 의회의 통첩.' },
  { type: 'enter', role: 'architect', expression: 'surprised', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'surprised',
    text: '"이번 폭풍에 토대가 유실되면 공사권을 회수, 다른 건축가에게 넘긴다" — 다른 건축가? 설마 그자가 의회에 손을…!' },
  { type: 'enter', role: 'companion', expression: 'neutral', position: 'center' },
  { type: 'dialog', speaker: 'companion', expression: 'neutral',
    text: '(밧줄과 줄자를 안고 온다) 테론 님, 인부 배치 끝났어요. …어. (폴리곤을 본다) 폴리곤.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '이리스? 여기는 어떻게—' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '학당에서 공사 지원 나왔어요. 측량 쪽. …당신이 올 줄 알았어요. 분쟁 푼 사람이니까.' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '인사는 나중에! 해 지기 전에 벽을 못 쌓으면 전부 끝이다. 벽돌 치수는 상인 소폴로스가 안다 — 폴리곤, 뛰어!' },

  // ============================================================
  // Scene 3 — 지혜를 파는 상인 (벽돌 / 소폴로스 첫 등장 + D 떡밥)
  // ============================================================
  { type: 'scene', name: 'Scene 3 — 지혜를 파는 상인', bg: 'merchant_camp', clearChars: true },
  { type: 'enter', role: 'merchant', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '오호, 테론의 심부름꾼! 나는 소폴로스, 지혜를 파는 자다. 오늘의 특가는 "신전 벽돌 치수" — 신선도 최상급. 단, 정보엔 값이 따르는 법. 돈 말고 머리로 내라.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '폭풍이 코앞인데 흥정을 해요?!' },
  { type: 'dialog', speaker: 'merchant', expression: 'neutral',
    text: '코앞이니까 부르는 게 값이지. (씩 웃다가 정색) …근데 묘하단 말이야. 며칠 전에도 누가 이 모형 치수를 사 갔거든. 컴퍼스 브로치를 단 사내였는데, 눈빛이 영 별로였어.' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '뭐, 손님 뒷담은 금기. 자 — 이 모형은 실물의 18분의 1이다. 실제 크기를 맞히면 벽돌 정보는 네 거다. 폭풍은 외상 안 받는다, 서둘러!' },

  { type: 'problem', id: 'BRICK', kind: '자재', topic: '사암 벽돌 — 축척', difficulty: '하',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'merchant', expression: 'smile',
        text: '정확해! 벽돌 치수다, 가져가라 — 배송비는 서비스다, 뛰어!' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '줄인 비율을 거꾸로 키우면 실제 치수다. 폭풍은 안 기다려준다!' } },
  },

  // ============================================================
  // Scene 4 — 폭풍 속의 벽, 그리고 가격표 (유리 / 상인 돕기 ① + 이리스 썸)
  // [[진척:1 벽돌 벽]]
  // ============================================================
  { type: 'scene', name: 'Scene 4 — 폭풍 속의 벽', bg: 'temple_site1', clearChars: true, mood: 'storm', weather: 'storm' },
  { type: 'dialog', speaker: 'narrator',
    text: '폭우가 공사장을 때렸다. 폴리곤의 치수대로 쌓은 벽이 버텼다. 토대는 — 무사했다.' },
  { type: 'enter', role: 'architect', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '…버텼군. 치수가 정확했다. 그뿐이다. (돌아서며 작게) …잘했다.' },
  { type: 'enter', role: 'companion', expression: 'smile', position: 'center' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '(옆에 와서, 작게) …들었어요? "잘했다"래요. 테론 님이 저런 말 하는 거, 처음 봐요.' },

  // ── 다음 날, 가격표 (폭풍 갬) ──
  // [[진척:2 유리 천창 자리]]
  { type: 'scene', name: 'Scene 4 — 가격표', bg: 'temple_site1', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '다음 날, 유리를 실은 소폴로스의 짐수레가 들어섰다. 그런데 —' },
  { type: 'enter', role: 'merchant', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '유리 왔습니다! 견본이랑 큰 유리는 닮은꼴이니 가격표대로 — 변이 3배니까 값도 3배! 시원하게 계산—' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '잠깐만요. 그 가격표… 그렇게 받으면 아저씨가 손해예요.' },
  { type: 'dialog', speaker: 'merchant', expression: 'surprised',
    text: '손해?! 내가?! 이보게, 내 사전에서 손해라는 단어는 십 년 전에 찢어버렸—' },
  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '유리는 넓이로 값을 매기잖아요. 변이 3배라고 넓이도 3배가 아니에요. 그게 함정이에요.' },

  { type: 'problem', id: 'GLASS', kind: '자재', topic: '유리 — 닮음비와 넓이비', difficulty: '중',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'merchant', expression: 'surprised',
        text: '넓이는 닮음비의 제곱…! 하마터면 헐값에 넘길 뻔했어! …근데 잠깐. (가격표를 노려본다) 이거 내 글씨가 아니야. 누가 바꿔치기했어.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '길이 비를 그대로 넓이에 쓰면 안 돼. 가로·세로 둘 다 늘잖아. 한 번 더 곱해. 다시!' } },
  },

  { type: 'enter', role: 'companion', expression: 'blush', position: 'center' },
  // [blush] S4·B9 — 썸 비트
  { type: 'dialog', speaker: 'companion', expression: 'blush',
    text: '가격표를 바꿔서 이간질…? (폴리곤을 본다) …그걸 한눈에. …당신, 역시 눈이 좋아요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '(왜 이렇게 얼굴이 뜨겁지. 계산 때문인가.) …테론 님, 게시판의 그 쪽지— 같은 사람 같아요.' },

  // ============================================================
  // Scene 5 — 빛이 들다 (천창 완성)
  // [[진척:2 유리 천창 — 빛이 듦]]
  // ============================================================
  { type: 'scene', name: 'Scene 5 — 빛이 들다', bg: 'temple_site2', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '유리 천창으로 첫 햇빛이 회당 바닥에 내려앉았다.' },
  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '빛이 드는군. …네가 두 번이나 공사를 살렸다. 인정하마.' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '다음은 기둥. 속을 점토로 채워 구워야 한다. 점토 양은 소폴로스가 계산해뒀을 거다 — 주문서 확인하고 와라.' },
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '…가는 길에 눈 똑바로 떠라. 가격표를 바꾼 손이, 거기서 멈출 것 같지 않다.' },

  // ============================================================
  // Scene 6 — 바뀐 주문서 (점토 / 부피비 돕기 ② + 사보타주 본격)
  // ============================================================
  { type: 'scene', name: 'Scene 6 — 바뀐 주문서', bg: 'merchant_camp', clearChars: true },
  { type: 'enter', role: 'merchant', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'neutral',
    text: '왔나. 먼저 말해두지. (주문서를 내민다) 점토 주문서다. 근데 — 이것도 내 글씨가 아니야.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '큰 항아리는 작은 항아리의 2배 닮음꼴… 점토 양은 4배로 적혀 있고. 잠깐, 4배는 넓이의 비잖아요. 부피는—' },
  { type: 'dialog', speaker: 'merchant', expression: 'surprised',
    text: '그래. 이대로 구우면 기둥 속이 모자라 텅 빈다. 겉은 멀쩡한 속 빈 기둥 — 지붕 얹는 순간 무너져. 사람이 깔린다고, 폴리곤.' },

  { type: 'problem', id: 'CLAY', kind: '자재', topic: '점토 — 닮음비와 부피비', difficulty: '중',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'merchant', expression: 'smile',
        text: '세제곱! 부피는 닮음비의 세제곱이다! 휴— 또 살았네. 내 평생 지혜를 공짜로 푼 건 네가 처음이다. 이러다 가게 망해.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '넓이가 두 번 곱이면 부피는 세 번이다. 차원이 하나 늘었잖나. 침착하게, 다시.' } },
  },

  { type: 'dialog', speaker: 'narrator',
    text: '바꿔치기된 주문서 뒷면 구석 — 낯익은 글씨. "D"' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '게시판 쪽지랑 같은 글씨야. 가격표도 주문서도, 전부 한 사람 짓이었어.' },

  // ============================================================
  // Scene 7 — 교장의 열쇠, 그리고 십 년 전 (피타고라스 관문 + 다이달로스 정체 암시)
  // ============================================================
  { type: 'scene', name: 'Scene 7 — 교장의 열쇠', bg: 'library', clearChars: true, bgmKey: 'sacred' },
  { type: 'enter', role: 'pythagoras', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '가마 열쇠라. 신전을 위해서라면 내주마. 단, 학당의 규칙 — 아는 만큼 얻는 법. 여섯 삼각형 중 닮은 것끼리 짝짓고 까닭을 답하라.' },

  { type: 'problem', id: 'KEY', kind: '관문', topic: '삼각형 닮음 조건 (SSS·SAS·AA)', difficulty: '중',
    onCorrect: { stats: { math: 4 },
      dialog: { speaker: 'pythagoras', expression: 'smile',
        text: '세 조건을 정확히 구분하는군. 열쇠다.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'pythagoras', expression: 'neutral',
        text: '세 변의 비면 SSS, 두 변과 끼인각이면 SAS, 두 각이면 AA. 다시.' } },
  },

  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '교장 선생님. "D"가 누군지 아시죠. 이러다 정말 사람이 다쳐요.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'sad',
    text: '…짐작은 간다. 학당에 황금 비례판 소문이 돈 뒤로, 그 빈 칸에 사로잡힌 학생이 하나 있지. 재능은 네 또래 중 으뜸이다. 한데 그 아이는 황금비를 "달라"고 했어.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '학당의 규칙은 아는 만큼 얻는 법 — 거절당했다. 그날 이후 그 아이는 수업에도 안 나온다. …그리고 폴리곤. 테론의 설계 도구를 "빌려간" 것도 그 아이다. 누군지, 이제 알겠지.' },

  // ============================================================
  // Scene 8 — 기둥이 서다 (다이달로스 출격 직전 + 이리스 썸)
  // [[진척:3 기둥]]
  // ============================================================
  { type: 'scene', name: 'Scene 8 — 기둥이 서다', bg: 'temple_site3', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '대장간이 열리고, 제대로 구운 기둥이 신전을 떠받쳤다.' },
  { type: 'enter', role: 'architect', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '…들었겠지. 도구를 가져간 건 학당 학생 다이달로스다. 돌려달라 사람을 보냈더니 "문제를 풀면 주겠다"며 전부 돌려보냈다더군. 설계 마무리엔 그 도구가 꼭 필요한데.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'neutral',
    text: '제가 갈게요. 아는 사이거든요. …그리고 가격표 빚, 주문서 빚 — 받아낼 것도 많고요.' },
  { type: 'enter', role: 'companion', expression: 'blush', position: 'center' },
  // [blush] S8·B4 — 소매 잡았다 놓는 비트
  { type: 'dialog', speaker: 'companion', expression: 'blush',
    text: '(따라 나오며, 소매를 살짝 잡는다) …다이달로스, 요즘 좀 이상해요. 학당에도 안 나오고. 사각형 때의 그 애가 아니에요. (손을 얼른 놓고) …그러니까, 계산 실수하지 말아요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '…안 다치고 올게요. 계산도 안 틀리고요.' },

  // ============================================================
  // Scene 9 — 다이달로스 (보스전: 동시 풀이 레이스 + 질투 폭발)
  // ============================================================
  { type: 'scene', name: 'Scene 9 — 다이달로스', bg: 'classroom', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '낡은 교실. 책상 위에 도면이 산처럼 쌓여 있었다 — 전부, 같은 직사각형을 그리다 만 흔적이었다.' },
  { type: 'enter', role: 'rival', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '…올 줄 알았어. 컴퍼스 돌려달라고? 흥. 들었거든 — 피타고라스 선생님이 너한테 이름을 약속했다며. 닮음을 통달하면 준다는 그 이름. 웃기지 마. 닮음이라면 내가 너보다 위야.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'neutral',
    text: '가격표랑 주문서, 네 짓이지. 기둥이 무너졌으면 사람이 죽었어.' },
  // [angry] S9·B4 — 질투 폭발 지점
  { type: 'dialog', speaker: 'rival', expression: 'angry',
    text: '죽긴 누가 죽어. 네 계산이 틀리는 꼴, 드러나기만 하면 됐지. 첫날부터 다 알았던 건 나야 — 근데 왜 이름은 네가 받지? …좋아, 도구를 걸게. 두 문제. 나도 같이 푼다. 나보다 늦거나 틀리면 — 빈손으로 돌아가.' },

  { type: 'choice', prompt: '어떻게 응수할까?',
    options: [
      { label: '(말없이 분필을 집는다) 시작하자.', reactKey: 'A', effect: { wisdom: 1 } },
      { label: '이름이 그렇게 갖고 싶으면 — 정정당당하게 풀어서 가져가.', reactKey: 'B', effect: { insight: 1 } },
    ] },
  { type: 'reaction', reactions: {
      A: { speaker: 'rival', expression: 'neutral', text: '…건방진 침묵이네. 좋아, 그 여유가 어디까지 가나 보자.' },
      // [angry] 선택지 B 반응 — 책상을 내리친다 (최우선 비트)
      B: { speaker: 'rival', expression: 'angry', text: '…뭐? (책상을 내리친다) 네가 뭘 안다고! …풀어. 풀고 나서 지껄여.' },
  } },

  { type: 'dialog', speaker: 'narrator',
    text: '첫 번째 도면이 펼쳐졌다. 두 사람이 동시에 분필을 들었다.' },

  { type: 'problem', id: 'TOOL1', kind: '관문', topic: '공통각 AA — 길이 구하기', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '…공통각으로 닮음을 잡아? (자기 풀이를 슬쩍 구긴다) …내 풀이보다 한 줄 짧군. 다음.' } },
    onWrong: { stats: { math: 0 },
      // [angry] TOOL1 오답 반응
      dialog: { speaker: 'rival', expression: 'angry',
        text: '∠A가 공통, ∠C=∠ABD. 두 삼각형이 닮았다는 뜻이다. 그것도 못 보나?' } },
  },

  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '두 번째 — 막대 두 개가 X자로 교차할 때 DE의 길이. (혼잣말) …이건 나도 사흘 밤을 새운 문제다. 운인지 실력인지, 여기서 갈린다.' },

  { type: 'problem', id: 'TOOL2', kind: '관문', topic: '맞꼭지각 SAS — 길이 구하기', difficulty: '상',
    onCorrect: { stats: { math: 4 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '맞꼭지각에 두 변의 비까지… 사흘짜리를 그 자리에서. (도구를 던진다) 가져가. 잘못 봤다는 말은 안 한다.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '맞꼭지각은 같다. 양변의 비를 보면 SAS가 보인다. …실망이군.' } },
  },

  // [angry] S9·B7 — "마지막 칸 — 너도 못 채워"
  { type: 'dialog', speaker: 'rival', expression: 'angry',
    text: '(떠나는 등에 대고) 하나만 알려줄게. 마지막 칸 — 너도 못 채워. (도면 더미를 가리킨다) 저게 전부 그 빈 칸이야. 밤마다 수백 장을 그렸어. 그 비는… 존재하지 않아.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '(수백 장의 미완성 직사각형…) 수업에 안 나온 게 — 이것 때문이었구나. (이 녀석도, 찾으려고 했구나.)' },

  // ============================================================
  // Scene 10 — 골조가 서다 (테론의 고백)
  // [[진척:4 골조 — 회당만 빔]]
  // ============================================================
  { type: 'scene', name: 'Scene 10 — 골조가 서다', bg: 'temple_site4', clearChars: true },
  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '도구가… 돌아왔군. (한참 말이 없다) 골조가 다 섰다. 회당만 남았어.' },
  { type: 'dialog', speaker: 'architect', expression: 'sad',
    text: '…고백하지. 나는 그 칸이 두려웠다. 스승님이 끝내 알려주지 않으신 비 — 나는 그걸 볼 자격이 없는 거라고 생각했다. 그래서 십 년간, 들여다보지도 못했어.' },

  // ============================================================
  // Scene 11 — 닿지 않는 높이 (이리스 메인 + 썸 투샷)
  // ============================================================
  { type: 'scene', name: 'Scene 11 — 닿지 않는 높이', bg: 'yard', clearChars: true },
  { type: 'enter', role: 'companion', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '…무사히 왔네요. (작게 안도의 한숨, 들킨 걸 알고 헛기침) 다이달로스를 이겼다고, 벌써 소문 났어요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '이긴 게 아니라 문제를 푼 것뿐—' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '…그런 것도 여전하네요. 근데 지금 그게 문제가 아니에요. 간밤에 비계 위에 누가 있는 걸 봤어요. 첨탑 기둥 규격이 틀어졌으면 갓돌이 안 맞아요. 재야 하는데 — 너무 높아서 줄자가 안 닿아요.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '닿지 않아도 잴 수 있어요. 직각삼각형 빗변에 수선을 내리면, 큰 삼각형이랑 닮은 작은 삼각형이 생기거든요.' },
  { type: 'dialog', speaker: 'companion', expression: 'surprised',
    text: '닮음으로… 안 닿는 걸 잰다고요? (도면 위로 머리를 가까이 들이민다) 보여줘요, 같이 구해요.' },
  { type: 'dialog', speaker: 'narrator',
    text: '도면 위에서 두 사람의 머리가 부딪힐 뻔했다. 동시에 한 뼘씩 물러났다. 잠시, 묘한 정적.' },

  { type: 'choice', prompt: '뭐라고 하지?',
    options: [
      { label: '…계산에 집중하죠. (도면만 본다)', reactKey: 'A', effect: { wisdom: 1 } },
      { label: '…이리스가 옆에 있으면 계산이 더 잘 되는 것 같아요.', reactKey: 'B', effect: { insight: 1 } },
    ] },
  { type: 'reaction', reactions: {
      // [blush] S11 선택지 A — 귀가 조금 빨갛다
      A: { speaker: 'companion', expression: 'blush', text: '(작게 웃으며) 네, 집중. 집중이요. (귀가 조금 빨갛다)' },
      // [blush] S11 선택지 B — 줄자를 떨어뜨린다 (최우선 비트)
      B: { speaker: 'companion', expression: 'blush', text: '…! (줄자를 떨어뜨린다) …그, 그런 건 계산 끝나고 말해요!' },
  } },

  { type: 'problem', id: 'MEASURE', kind: '관문', topic: '직각삼각형 빗변 수선', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      // [blush] S11 MEASURE 정답 — 수학도… 뭐, 다른 것도
      dialog: { speaker: 'companion', expression: 'blush',
        text: '…규격대로예요! 기둥은 무사해요! (활짝 웃다가, 시선을 피하며) …당신, 정말 보는 눈이 좋네요. 수학도… 뭐, 다른 것도.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '빗변에 수선을 내리면 닮은 삼각형 둘이 숨어 있어요. 어느 것끼리 닮았는지부터, 같이 다시 봐요.' } },
  },

  // ============================================================
  // Scene 12 — 그림자로 재는 법, 그리고 스승 (탈레스 = 테론의 옛 스승 / 미스터리 회수)
  // ============================================================
  { type: 'scene', name: 'Scene 12 — 그림자로 재는 법', bg: 'garden', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '자재도 도구도 측정법도 모였다. 마지막 지붕돌엔 첨탑의 정확한 높이가 필요했다. 폴리곤은 멘토 탈레스를 찾았다.' },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '사다리도 줄자도 안 닿는 높이라고? 야, 나 왕년에 막대기 하나 모래에 꽂아서 피라미드 키를 쟀던 사람이야. 비밀은 딱 하나 — 닮음. 어때, 그 눈 한번 빌려볼래?' },

  { type: 'problem', id: 'SHADOW', kind: '관문', topic: '그림자로 높이 측정', difficulty: '상',
    onCorrect: { stats: { math: 4, wisdom: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '거봐, 되잖아. 닿지 않는 것까지 비(比)로 잡아냈어. …자, 폴리곤. 이제 너한테 들려줄 얘기가 있다.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '막대의 삼각형이랑 첨탑의 삼각형 — 같은 햇빛 아래선 같은 비야. 나란히 놓아봐.' } },
  },

  { type: 'dialog', speaker: 'thales', expression: 'neutral',
    text: '입학 첫날 내가 황금 비례판 얘기 꺼냈다가 얼버무린 거, 기억하지? …설계도의 빈 칸 — 그 칸을 비워둔 게 나야. 테론은 내 옛 제자거든.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '테론 님의 스승이… 탈레스 선생님이었어요?! 그럼 왜 안 가르쳐주신 거예요? 테론 님은 십 년을 두려워했는데!' },
  { type: 'dialog', speaker: 'thales', expression: 'sad',
    text: '황금비는 건네주는 순간 죽는 비라서 그래. 받아 적은 비율은 그냥 숫자야. 왜 그 비여야만 하는지 제 눈으로 본 사람만, 그 비로 뭔가를 지을 수 있어.' },
  { type: 'dialog', speaker: 'thales', expression: 'neutral',
    text: '다이달로스도 얼마 전에 찾아와서 답을 "달라"고 하더라 — 그래서 못 줬어. 테론은 두려워서 묻지도 못했고 — 줄 기회가 없었지. …근데 너는, 여기까지 전부 네 손으로 풀어서 왔잖아.' },

  // ============================================================
  // Scene 13 — 빈 칸의 정체 (황금비 / 다이달로스 재등장·회복)
  // ============================================================
  { type: 'scene', name: 'Scene 13 — 빈 칸의 정체', bg: 'garden', clearChars: true, bgmKey: 'sacred' },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '이 직사각형에서 정사각형을 떼어내 봐. 남은 부분이 원래랑 닮은꼴이 되는 순간 — 그게 황금비야. 십 년의 빈 칸을 채울, 단 하나의 비.' },
  { type: 'dialog', speaker: 'narrator',
    text: '폴리곤은 주먹을 쥐었다. 천재가 십 년을 바쳐도 못 찾은 비. …정원 울타리 너머에서 누군가 숨죽여 보고 있다는 건, 알지 못했다.' },

  { type: 'problem', id: 'GOLDEN', kind: '최종', topic: '황금비 — 자기닮음과 비례식', difficulty: '최상',
    onCorrect: { stats: { math: 5, wisdom: 2, insight: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '…해냈구나. 누구도 가르쳐줄 수 없는 비를, 네 손으로. 받아 — 창고에서 줄곧 주인을 기다리던, 황금 비례판이야.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '슬라이더를 천천히. 떼어낸 직사각형이 원래랑 똑같은 비율로 겹치는 순간이 딱 한 번 있어. 그때 (전체):(긴 변) = (긴 변):(짧은 변)이야.' } },
  },

  { type: 'dialog', speaker: 'narrator',
    text: '✦ 황금 비례판 획득 ✦ 손바닥 위에서 황금빛 비율이 천천히 빛났다.' },
  { type: 'enter', role: 'rival', expression: 'surprised', position: 'center' },
  { type: 'dialog', speaker: 'rival', expression: 'surprised',
    text: '(울타리 너머, 들리지 않게) …정사각형을 떼어낸다. 자기 자신을 닮는 비라서… 그 수백 장의 밤 동안, 나는 밖에서만 찾고 있었구나. …그렇게, 찾는 거였나.' },
  { type: 'dialog', speaker: 'narrator',
    text: '사내는 한참을 서 있다가 소리 없이 돌아섰다. 그 뒷모습이 — 어딘가 가벼워 보였다.' },

  // ============================================================
  // Scene 14 — 시밀러 (신전 완성 + 별명 하사)
  // [[진척:5 완성 신전 (노을)]]
  // ============================================================
  { type: 'scene', name: 'Scene 14 — 시밀러', bg: 'temple_site5', clearChars: true, mood: 'sunset' },
  { type: 'dialog', speaker: 'narrator',
    text: '황금 비례판이 회당의 가로세로를 맞췄다. 마지막 돌이 놓이고 — 십 년간 비어 있던 칸이 황금비로 채워졌다. 노을 아래, 신전이 완성됐다.' },
  { type: 'enter', role: 'architect', expression: 'sad', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'center' },
  { type: 'dialog', speaker: 'architect', expression: 'sad',
    text: '…채워졌어. 내가 십 년을 무서워서 보지도 못한 칸이. (침묵) 고맙다, 폴리곤. 자재부터 마지막 비까지 — 전부 네가 풀어냈다.' },
  { type: 'enter', role: 'pythagoras', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'smile',
    text: '폴리곤. 닮음을 통달하는 날 이름을 주겠다 했었지. 너는 닮음을, 비례를, 황금비를 꿰뚫었다 — 그리고 그걸로 사람을 지켰다. 오늘부터 너를 "시밀러" 라 부르마. 닮음의 전문가라는 뜻이다.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '시밀러…… (작게 되뇌인다) 닮음의 전문가. ……좋아요. 이 이름값, 제대로 해볼게요.' },

  // ── 새 이름 (이리스) ──
  { type: 'scene', name: 'Scene 14 — 새 이름', bg: 'temple_site5', clearChars: true, mood: 'sunset' },
  { type: 'enter', role: 'companion', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '(군중 속에서 한 발 나서며) 시밀러. (씩 웃는다) …불러보고 싶었어요, 새 이름. 어때요, 어울리는지 본인은 모르죠?' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '(이름보다 지금 심장 박동 비율이 더 문제다. 평소의 몇 대 몇이지, 이거.)' },

  // ============================================================
  // Scene 15 — 마지막 투샷 (다음 이야기 예고 + 이리스 썸 마무리)
  // ============================================================
  { type: 'scene', name: 'Scene 15 — 마지막 투샷', bg: 'temple_site5', clearChars: true, mood: 'sunset' },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '잘 어울린다, 시밀러. 비례를 보는 네 눈은 더 멀리 갈 거야. …아, 그리고 — 다이달로스가 오늘 아침부터 학당에 다시 나왔더라. 답을 달라는 소리는 안 하고, 조용히 도면만 그리던데. 다음 이야기가 기대되지 않냐?' },
  { type: 'enter', role: 'companion', expression: 'blush', position: 'center' },
  // [blush] S15·B2 — 둘이서— (헛기침) 다 같이 가요
  { type: 'dialog', speaker: 'companion', expression: 'blush',
    text: '(옆에 나란히 서며) 다음 모험엔 측량 담당도 필요할 텐데요. …둘이서— (헛기침) 다, 다 같이 가요. 다 같이.' },
  { type: 'dialog', speaker: 'narrator',
    text: '노을빛 신전 위로 황금 비례판이 마지막으로 반짝였다. 폴리곤 — 아니, 시밀러의 새로운 여정이 시작된다.' },

  // ============================================================
  // 엔딩 분기 (첫시도 정답 개수 기준 — 엔진 ENDINGS 처리)
  // ============================================================
  { type: 'ending' },
];

// 엔딩 분기 기준: problemResults에서 firstCorrect===true 개수 (문제 10개)
//   A (8개 이상): 황금의 깨달음
//   B (5~7개):    착실한 건축가
//   C (4개 이하): 다시 쌓는 비례
