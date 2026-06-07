// ===== 시나리오 데이터 (5단원 Stage 1 — 시밀러와 황금 비례판) v2 =====
// 작가: 허준성·허태욱 / 설계: project_unit5_final_design 메모리 + 4인 전문가 자문 반영
// 4단원 「폴리곤의 학당」 직후. 신전 건축을 도우며 닮음·비례를 익히고 황금 비례판을 얻는 이야기.
//
// ★ v2 개정 핵심 (전문가 자문 + 사용자 확정):
//   - 관통 미스터리: 테론 설계도의 "빈 칸(?)" = 황금비. Scene1 떡밥 → 6·8 상기 → 9 정체 → 10 회수.
//   - 위기/목적: 자재마다 절박한 이유 (폭풍→벽돌, 햇빛→유리천창 등). 폭풍은 풀세트 1회.
//   - 신전 진척: 자재 모을 때마다 신전이 자람 (터→벽→천창→기둥→골조→완성). 배경 자리 TODO 주석.
//   - 상인 소폴로스: 넓이비·부피비를 몰라 싸게 팔려 함 → 폴리곤이 "제값 받게" 도와줌(따뜻 버전).
//   - 캐릭터 아크: 소폴로스(고마운 단골) / 다이달로스(라이벌→인정) / 테론(결핍→완성).
//
// ★ 대사 원칙: 한 step 2~3문장 상한. 위기 순간은 1문장으로 쪼개 긴박감. 추임새 단독 최소.
//
// step types: scene / dialog / choice / reaction / enter / problem / ending
// 캐릭터 키: apprentice(시밀러=폴리곤) pythagoras thales rival(다이달로스) companion(이리스)
//            architect(테론) merchant(소폴로스) narrator
// 문제 id는 problems.js의 PROBLEMS 키와 일치: A4 BRICK GLASS CLAY KEY TOOL1 TOOL2 MEASURE SHADOW GOLDEN
//
// ※ 신전 진척 배경 TODO: 아래 bg에 'yard'를 쓰되, 향후 진척 배경 생성 시 교체할 자리를
//    [[진척:단계]] 주석으로 표기. (temple_site0~5 등으로 backgrounds.js에 추가 예정)

const STEPS = [

  // ============================================================
  // Scene 1 — 신전, 그리고 빈 칸 하나 (도입 + 미스터리 떡밥)
  // ============================================================
  // [[진척:0 터파기 — 설계도에 빈 칸(?) 보임]]
  { type: 'scene', name: 'Scene 1 — 빈 칸 하나', bg: 'temple_site0', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '사각형의 분쟁을 풀어낸 지 며칠. 학당 동편에 새 신전을 짓는 공사가 시작됐다. 폴리곤은 그 한가운데, 거대한 설계도 앞에 섰다.' },
  // [top#6] 초반 후크 — 빼곡한 설계도 속 단 하나의 빈 칸으로 시선을 끈다
  { type: 'dialog', speaker: 'narrator',
    text: '빼곡한 도면 위, 단 한 칸만이 텅 비어 있었다. 마치 누군가 일부러 비워둔 것처럼.' },

  { type: 'enter', role: 'architect', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '네가 폴리곤이군. 분쟁을 풀었다는 신입. 마침 잘 왔다 — 나는 이 신전을 맡은 건축가, 테론이다.' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '건축은 결국 "비율"의 싸움이지. 자재 하나, 기둥 하나가 다 비례로 정해진다. 도형 보는 눈이 좋다니, 나를 좀 도와다오.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '신전 건축을요…? 제가 할 수 있을까요.' },
  // ── 미스터리 떡밥: 설계도의 빈 칸 ──
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '다만 한 가지. 이 설계도, 거의 완벽한데 — 마지막 회당의 비율, 이 한 칸만은 나도 모른다. 스승님도 끝내 안 가르쳐주셨지.' },
  // [top#6] '나중 일이다'(빈 칸 무게 깎임) → 평생 숙제 + 폴리곤에게 거는 기대
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '이 한 칸을 못 채운 채로 벌써 십 년이다. …어쩌면 너라면, 하고 생각했다. 우선 네 실력부터 좀 보자.' },

  // ============================================================
  // Scene 2 — 양피지 한 장의 비밀 (워밍업)
  // ============================================================
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '설계도를 그릴 양피지다. 이걸 반으로 자르면 — 신기하게도, 잘린 조각이 원래와 똑같은 비율이 돼. 왜 그런지 직접 찾아봐라.' },

  { type: 'problem', id: 'A4', kind: '워밍업', topic: '반으로 잘라도 닮은 직사각형', difficulty: '하',
    onCorrect: { stats: { math: 2, insight: 1 },
      dialog: { speaker: 'architect', expression: 'smile',
        text: '바로 그거다. 반으로 잘라도 닮은꼴이 되는 비 — 약 1:1.41. 닮음과 비례, 감이 오지? 이제 진짜 일을 시작하자.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'architect', expression: 'thinking',
        text: '닮은꼴이면 대응하는 변의 비가 같다 — 그것만 기억하면 돼. 천천히 다시.' } },
  },

  // ============================================================
  // Scene 3 — 폭풍이 온다 (위기 풀세트: 벽돌 / 소폴로스 첫 등장)
  // ============================================================
  // [[진척:0 → 위기연출(폭풍, 어두운 톤)]] 아직 터파기 상태 — site0
  // [top#3] storm 색보정 + 비/번개/구름 날씨효과 (CSS, 이미지 무관)
  { type: 'scene', name: 'Scene 3 — 폭풍이 온다', bg: 'temple_site0', clearChars: true, mood: 'storm', weather: 'storm' },
  { type: 'enter', role: 'architect', expression: 'surprised', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'narrator',
    text: '그때, 바람이 거칠어졌다. 멀리 먹구름이 몰려오고 있었다.' },
  // 위기 — 짧은 대사로 긴박
  { type: 'dialog', speaker: 'architect', expression: 'surprised', text: '폭풍이다.' },
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '벽이 없으면 토대가 빗물에 쓸려간다. 벽돌을 쌓아야 해 — 지금 당장.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised', text: '벽돌 크기는요…?!' },
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '정확한 치수를 내가 몰라. 떠도는 상인 소폴로스, 그자가 안다. 서둘러 다녀와라!' },

  // ── 상인 창고 ──
  { type: 'scene', name: 'Scene 3 — 지혜를 파는 상인', bg: 'merchant_camp', clearChars: true },
  { type: 'enter', role: 'merchant', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '오호, 테론의 심부름꾼이로군. 나는 소폴로스 — 지혜를 파는 자다. 정보엔 값이 따르는 법, 돈 말고 머리로 치르거라.' },
  { type: 'dialog', speaker: 'merchant', expression: 'neutral',
    text: '이 신전 모형은 실제의 18분의 1로 줄인 것. 모형 치수로 실제 크기를 맞히면 벽돌 정보를 주지. 폭풍이 가깝다, 서둘러라.' },

  { type: 'problem', id: 'BRICK', kind: '자재', topic: '사암 벽돌 — 축척', difficulty: '하',
    onCorrect: { stats: { math: 3 },
      dialog: { speaker: 'merchant', expression: 'smile',
        text: '정확해! 축척을 제대로 다루는군. 자, 벽돌 치수다 — 어서 가서 벽을 쌓아!' } },
    onWrong: { stats: { math: 0 },
      // [top#2] 정답풀이 통째공개 제거 — 방향만, 떠먹이기는 hints[]에 위임
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '모형을 줄인 비율을 거꾸로 되짚어 봐. 줄인 만큼 다시 키우면 실제 치수가 나오지. 서둘러!' } },
  },

  // ── 신전 복귀: 벽 완성 (위기 해소) ──
  // [[진척:1 벽돌 벽]]
  { type: 'scene', name: 'Scene 3 — 벽이 서다', bg: 'temple_site1', clearChars: true },
  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'narrator',
    text: '폴리곤이 가져온 치수로 벽이 세워졌다. 빗방울이 벽을 두드렸지만, 토대는 무사했다.' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '해냈군. 네 계산이 정확해서 벽이 버텼다. …쓸 만한 신입이야.' },

  // ============================================================
  // Scene 4 — 빛이 드는 천창 (유리 / 상인 "제값 받게" 돕기 ①)
  // ============================================================
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '벽은 섰다. 한데 신전 안이 너무 어두워. 신께 바치는 곳엔 빛이 들어야지 — 천장에 유리를 끼우자.' },
  // [top#5] 동선 변주: 매번 폴리곤이 가지 않고, 이번엔 상인이 신전으로 찾아온다
  { type: 'dialog', speaker: 'narrator',
    text: '말이 끝나기 무섭게, 짐수레 바퀴 소리가 들렸다. 소폴로스가 유리 견본을 한 아름 안고 신전 마당으로 들어서고 있었다.' },
  { type: 'enter', role: 'merchant', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '하하, 공사 소문 듣고 지나는 길에 들렀지. 유리가 필요할 것 같아서 말야. 작은 견본과 큰 유리는 닮은꼴 — 크기가 좀 더 크니 값도 그만큼만 더 받으면 되겠고—' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '잠깐만요. 그렇게 받으시면… 손해 보세요.' },
  { type: 'dialog', speaker: 'merchant', expression: 'surprised', text: '손해? 내가?' },
  // [top#1] 정답(16:25) 미리말하기 제거 — 의문만 남기고 결론은 onCorrect로
  { type: 'dialog', speaker: 'apprentice', expression: 'smile',
    text: '변의 길이만 더 크다고 값도 딱 그만큼만 오르는 게 아니에요. 유리는 넓이로 값을 매기잖아요 — 그게 함정이에요.' },

  { type: 'problem', id: 'GLASS', kind: '자재', topic: '유리 — 닮음비와 넓이비', difficulty: '중',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'merchant', expression: 'surprised',
        text: '…허. 하마터면 헐값에 넘길 뻔했군. 넓이는 닮음비의 제곱이라 — 이 꼬마가 나를 살렸어. 유리 정보, 제대로 쳐서 가져가라.' } },
    onWrong: { stats: { math: 0 },
      // [top#2] 정답비(16:25) 통째공개 제거 — 넓이는 제곱이라는 관점만
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '길이의 비를 그대로 넓이에 쓰면 안 돼. 넓이는 가로·세로가 둘 다 늘어나니, 길이의 비를 한 번 더 곱해야 한다. 다시 세워봐.' } },
  },

  // ── 신전 복귀: 유리 천창 ──
  // [[진척:2 유리 천창 — 빛이 듦]]
  { type: 'scene', name: 'Scene 4 — 빛이 들다', bg: 'temple_site2', clearChars: true },
  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'narrator',
    text: '유리 천창 사이로 첫 햇빛이 회당 바닥에 내려앉았다.' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '빛이 들어오는군. …그 영감, 하마터면 헐값에 넘길 뻔한 걸 네가 막아줬다지. 덕분에 좋은 유리를 제값에 들였어. 네 덕이 크다.' },

  // ============================================================
  // Scene 5 — 점토와 잠긴 대장간 (부피비 돕기 ② + 피타고라스 관문)
  // ============================================================
  { type: 'dialog', speaker: 'architect', expression: 'neutral',
    text: '다음은 기둥이다. 속을 점토로 채워야 단단해져. 한데 점토는 구워야 쓸 수 있지.' },
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '가마는 북쪽 대장간에 있는데 — 잠겨 있다. 열쇠는 교장 피타고라스 선생이 쥐고 계셔. 먼저 점토 양을 소폴로스에게 확인하고, 열쇠를 받아오너라.' },

  { type: 'scene', name: 'Scene 5 — 점토의 양', bg: 'merchant_camp', clearChars: true },
  { type: 'enter', role: 'merchant', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  { type: 'dialog', speaker: 'merchant', expression: 'smile',
    text: '점토? 항아리 두 개가 닮은꼴인데… 또 내가 대충 값을 부르면 자네가 바로잡겠군. 어디 해보게.' },
  // [top#1] 정답(27:64) 미리말하기 제거 — 넓이보다 더 벌어진다는 방향만
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '이번엔 넓이가 아니라 부피예요. 항아리가 닮은꼴이면 — 부피 차이는 넓이 때보다 훨씬 더 크게 벌어져요. 또 손해 보실 뻔했어요.' },

  { type: 'problem', id: 'CLAY', kind: '자재', topic: '점토 — 닮음비와 부피비', difficulty: '중',
    onCorrect: { stats: { math: 3, insight: 1 },
      dialog: { speaker: 'merchant', expression: 'smile',
        text: '세제곱이라…! 점토 양이 이렇게나 차이가 나는군. 또 살았어. 자네, 아예 내 가게에 눌러앉지 그래?' } },
    onWrong: { stats: { math: 0 },
      // [top#2] 정답비(27:64) 통째공개 제거 — 넓이→부피로 차원이 하나 더라는 관점만
      dialog: { speaker: 'merchant', expression: 'thinking',
        text: '넓이가 길이를 두 번 곱한 거라면, 부피는 한 번 더 — 길이의 비를 세 번 곱해야 한다. 차원이 하나 늘었지. 다시.' } },
  },

  // ── 피타고라스: 대장간 열쇠 관문 ──
  { type: 'scene', name: 'Scene 5 — 교장의 열쇠', bg: 'library', clearChars: true },
  { type: 'enter', role: 'pythagoras', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'surprised', position: 'right' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'neutral',
    text: '대장간 열쇠라. 신전을 위해서라면 내주마. 단, 학당의 규칙 — 아는 만큼 얻는 법이지. 이 여섯 삼각형 중 닮은 것끼리 짝짓고, 그 까닭을 답하라.' },

  { type: 'problem', id: 'KEY', kind: '관문', topic: '삼각형 닮음 조건 (SSS·SAS·AA)', difficulty: '중',
    onCorrect: { stats: { math: 4 },
      dialog: { speaker: 'pythagoras', expression: 'smile',
        text: '세 가지 닮음 조건을 정확히 구분하는군. 열쇠다. 가마를 잘 쓰거라.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'pythagoras', expression: 'neutral',
        text: '세 변의 비가 같으면 SSS, 두 변과 끼인각이면 SAS, 두 각이면 AA. 표시된 것을 다시 보아라.' } },
  },

  // ── 신전 복귀: 기둥 + 가마 ──
  // [[진척:3 기둥 + 점토(가마 불빛)]]
  { type: 'scene', name: 'Scene 5 — 기둥이 서다', bg: 'temple_site3', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '잠긴 대장간이 열렸다. 점토를 구워 채운 기둥이 신전을 떠받쳤다.' },

  // ============================================================
  // Scene 6 — 빌려간 도구, 그리고 라이벌 (다이달로스)
  // ============================================================
  { type: 'scene', name: 'Scene 6 — 빌려간 도구', bg: 'classroom', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '테론의 설계 도구 — 눈금 없는 자와 컴퍼스 — 를 며칠 전 다이달로스가 빌려갔다. 순순히 돌려줄 자가 아니었다.' },
  { type: 'enter', role: 'rival', expression: 'neutral', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '테론의 자랑 컴퍼스를 돌려달라? 흥. 그냥은 안 되지. 두 문제 다 맞히면 생각해보지. 첫 번째 — 이 도면에서 CD의 길이.' },
  // [top#7] 합류형 선택지 (엔딩 영향 없음)
  { type: 'choice', prompt: '어떻게 응수할까?',
    options: [
      { label: '괜한 신경전은 됐고 바로 푼다.', reactKey: 'A', effect: { wisdom: 1 } },
      { label: '그쪽이야말로 풀 수는 있고요?', reactKey: 'B', effect: { insight: 1 } },
    ] },
  { type: 'reaction', reactions: {
      A: { speaker: 'apprentice', expression: 'neutral', text: '(말을 아끼고 도면에 집중한다.)' },
      B: { speaker: 'rival', expression: 'surprised', text: '…뭐? 건방진 신입이군. 어디 풀어나 보고 입을 놀려.' },
  } },

  { type: 'problem', id: 'TOOL1', kind: '관문', topic: '공통각 AA — 길이 구하기', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '…공통각으로 닮음을 잡았다고? 제법인데. 다음.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '∠A가 공통, ∠C=∠ABD다. 두 삼각형이 닮았다는 뜻이지. 비례식을 세워봐.' } },
  },

  // [scene_flow#3] TOOL1↔2 사이 경계유지 비트 (surprised→부정→인정 빌드업)
  { type: 'dialog', speaker: 'rival', expression: 'neutral',
    text: '…첫 문제를 그렇게 깔끔히. 흠, 운이겠지. 두 번째다 — 막대 두 개가 X자로 교차할 때 DE의 길이. 이것도 풀면 도구는 네 거다.' },
  // [learning#5] 둘째 문제가 '운 아님'을 증명하는 한 방 — 다이달로스 혼잣말
  { type: 'dialog', speaker: 'rival', expression: 'thinking',
    text: '(혼잣말) …이번 건 나도 한참 걸렸던 건데. 흥, 운인지 실력인지 보자고.' },

  { type: 'problem', id: 'TOOL2', kind: '관문', topic: '맞꼭지각 SAS — 길이 구하기', difficulty: '상',
    onCorrect: { stats: { math: 4 },
      // [dialogue#4] 호감 농담 삭제, 가시 남기기 (라이벌 인정은 다음 단원용으로 아낌)
      dialog: { speaker: 'rival', expression: 'surprised',
        text: '맞꼭지각에 두 변의 비까지… 잡았군. (잠시) 가져가라. 잘못 봤다는 말은 안 한다. 다만 — 다음엔 내가 푸는 쪽이야.' } },
    onWrong: { stats: { math: 0 },
      dialog: { speaker: 'rival', expression: 'neutral',
        text: '맞꼭지각은 크기가 같아. 양쪽 변의 비를 확인하면 SAS 닮음이 보인다.' } },
  },

  // ── 신전 복귀: 골조 (회당만 빈 칸 — 미스터리 상기) ──
  // [[진척:4 골조 완성, 회당만 빔 — 설계도 ?칸 강조]]
  { type: 'scene', name: 'Scene 6 — 골조가 서다', bg: 'temple_site4', clearChars: true },
  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '도구가 돌아왔군. 골조가 다 섰다 — 이제 회당만 남았어.' },
  { type: 'dialog', speaker: 'architect', expression: 'thinking',
    text: '…저 마지막 칸만. 아직도 나는 그 비율을 모른다.' },

  // ============================================================
  // Scene 7 — 닿지 않는 높이 (이리스, 협동)
  // ============================================================
  { type: 'scene', name: 'Scene 7 — 닿지 않는 높이', bg: 'yard', clearChars: true },
  // [scene_flow#4] 브리지 내레이션 + 이리스 재소개
  { type: 'dialog', speaker: 'narrator',
    text: '테론이 설계도의 빈 칸을 들여다보는 사이, 폴리곤은 새로 세운 기둥들을 점검하러 갔다. 거기, 긴 줄자를 든 낯익은 얼굴이 있었다.' },
  { type: 'enter', role: 'companion', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'neutral', position: 'right' },
  { type: 'dialog', speaker: 'companion', expression: 'smile',
    text: '폴리곤! 사각형 사건 이후로 오랜만이네요.' },
  { type: 'dialog', speaker: 'companion', expression: 'thinking',
    text: '마침 잘 왔어요. 이 기둥이 규격대로 섰는지 재야 하는데 — 너무 높아서 줄자가 닿질 않아요.' },
  // [top#4] 통찰 주체를 폴리곤으로. 이리스는 문제제기만.
  { type: 'dialog', speaker: 'apprentice', expression: 'thinking',
    text: '닿지 않아도 괜찮아요. …직각삼각형의 빗변에 수선을 내리면, 큰 삼각형과 닮은 작은 삼각형이 생기거든요.' },
  { type: 'dialog', speaker: 'companion', expression: 'surprised',
    text: '아…! 닮음을 쓰면 직접 안 닿아도 잴 수 있다는 거네요. 좋아요, 그 관계로 x를 구해봐요. 같이.' },

  { type: 'problem', id: 'MEASURE', kind: '관문', topic: '직각삼각형 빗변 수선', difficulty: '상',
    onCorrect: { stats: { math: 4, insight: 1 },
      dialog: { speaker: 'companion', expression: 'smile',
        text: '맞아요. 닿지 않아도 닮음이면 잴 수 있어요. …당신, 정말 보는 눈이 좋네요.' } },
    onWrong: { stats: { math: 0 },
      // [top#2][dialogue#5] 기호 낭독(AC²=CB×CD) 제거, 관점만
      dialog: { speaker: 'companion', expression: 'thinking',
        text: '빗변에 수선을 내리면 큰 삼각형 안에 닮은 작은 삼각형 둘이 숨어 있어요. 어느 삼각형끼리 닮았는지부터 찾아봐요.' } },
  },

  // ============================================================
  // Scene 8 — 탈레스의 그림자 (클라이맥스 도입)
  // ============================================================
  { type: 'scene', name: 'Scene 8 — 그림자로 재는 법', bg: 'garden', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '자재도, 도구도, 측정법도 모였다. 마지막 지붕돌을 깎으려면 첨탑의 높이를 정확히 알아야 했다. 폴리곤은 멘토 탈레스를 찾았다.' },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'thinking', position: 'right' },
  // [learning#2] '못잰다→닮음으로 잰다' 반복 대신 난이도 상승으로 차별화
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '기둥은 이리스와 잘 쟀다 들었다. 한데 저건 사다리도 줄자도 닿을 길이 없지. 닿을 수 없는 걸 재는 마지막 방법 — 땅에 드리운 그림자.' },
  // [dialogue#6] 일화를 두 노드로 분할해 전설에 무게
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '…나는 막대기 하나를 모래에 꽂아두고 그 그림자만으로 피라미드의 키를 알아냈다. 사람들이 못 믿더군.' },
  { type: 'dialog', speaker: 'thales', expression: 'neutral',
    text: '비밀은 단 하나, 닮음이었지. 막대와 첨탑이 같은 햇빛 아래 같은 삼각형을 그린다는 것 — 자, 그 눈을 너도 빌려보겠나?' },

  { type: 'problem', id: 'SHADOW', kind: '관문', topic: '그림자로 높이 측정', difficulty: '상',
    onCorrect: { stats: { math: 4, wisdom: 2 },
      // [learning#2] 황금비로 가는 다리
      dialog: { speaker: 'thales', expression: 'smile',
        text: '훌륭하다. 닿지 않는 것까지 비로 잡아냈다면 — 이제 누구도 가르쳐줄 수 없는 그 비를 볼 자격이 있다.' } },
    onWrong: { stats: { math: 0 },
      // [top#2] 수치비 삭제, 방향만 환기
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '막대가 만든 삼각형과 피라미드가 만든 삼각형 — 햇빛이 같으니 두 삼각형의 비도 같다. 그 두 비를 나란히 놓으면 답이 보일 게야.' } },
  },

  // ============================================================
  // Scene 9 — 빈 칸의 정체 (미스터리 회수: 황금비)  [scene_flow#5 독립씬 승격]
  // ============================================================
  { type: 'scene', name: 'Scene 9 — 빈 칸의 정체', bg: 'garden', clearChars: false },
  { type: 'dialog', speaker: 'narrator',
    text: '테론이 평생 비워둔 칸. 스승조차 입을 닫았던 그 비율이 — 지금, 폴리곤 앞에 놓였다.' },
  { type: 'dialog', speaker: 'thales', expression: 'neutral',
    text: '이제 마지막이다. 그 빈 칸 — 회당의 비율. 다른 비는 상인도 알지만, 이 비만은 누구도 그냥 가르쳐줄 수 없어. 스스로 깨우쳐야만 얻는 비지.' },
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '스스로… 깨우친다고요?' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '이 직사각형에서 정사각형을 떼어내 봐라. 남은 부분이 원래와 닮은꼴이 되는 순간 — 그 비가 바로 황금비다. 테론의 빈 칸을 채울 단 하나의 비.' },
  // [PX#1] 마지막 비 하나에 이름이 달렸다는 목표 심기
  { type: 'dialog', speaker: 'narrator',
    text: '폴리곤은 주먹을 쥐었다. 닮음을 통달하면 어울리는 이름을 주겠다던 그 약속 — 이 마지막 비 하나에 달려 있었다.' },

  { type: 'problem', id: 'GOLDEN', kind: '최종', topic: '황금비 — 자기닮음과 비례식', difficulty: '최상',
    onCorrect: { stats: { math: 5, wisdom: 2, insight: 2 },
      dialog: { speaker: 'thales', expression: 'smile',
        text: '…해냈구나. 누구도 가르쳐줄 수 없는 비를, 네 손으로 찾아냈어. 받아라 — 이것이 황금 비례판이다.' } },
    onWrong: { stats: { math: 0 },
      // [learning#7] 슬라이더 동작 + 비례식 빈칸 명시
      dialog: { speaker: 'thales', expression: 'thinking',
        text: '슬라이더를 천천히 움직여 봐라. 정사각형을 떼어낸 작은 직사각형이 원래와 똑같은 비율로 겹쳐지는 순간이 딱 한 번 있다. 그 순간 (전체):(긴 변) = (긴 변):(짧은 변)의 빈칸을 채우면 된다.' } },
  },
  // [scene_flow#5] 보상 컷
  { type: 'dialog', speaker: 'narrator',
    text: '✦ 황금 비례판 획득 ✦  손바닥 위에서 황금빛 비율이 천천히 빛났다.' },

  // ============================================================
  // Scene 10 — 채워진 칸, 그리고 새 이름 (결말 + 미스터리 회수 완결)
  // ============================================================
  // [[진척:5 완성 신전 (노을) — 빈 칸이 황금비로 채워짐]]
  // [top#3] sunset 색보정 (temple_site5가 이미 노을 — 약하게 중첩 강조)
  { type: 'scene', name: 'Scene 10 — 시밀러', bg: 'temple_site5', clearChars: true, mood: 'sunset' },
  { type: 'dialog', speaker: 'narrator',
    text: '폴리곤은 황금 비례판으로 회당의 가로와 세로를 맞췄다. 마지막 돌이 제자리에 놓이고 — 비어 있던 칸이, 황금비로 채워졌다. 노을 아래 신전이 완성됐다.' },

  { type: 'enter', role: 'architect', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'center' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '…채워졌어. 내가 평생 비워둔 그 칸이. 네 손으로.' },
  // [PX#2] sad(고백)→smile(해소) 분할
  { type: 'dialog', speaker: 'architect', expression: 'sad',
    text: '솔직히 말하지. 나는 저 비를 끝내 못 찾을까 두려웠다.' },
  { type: 'dialog', speaker: 'architect', expression: 'smile',
    text: '고맙다, 폴리곤. 자재부터 이 마지막 비까지 — 전부 네가 풀어냈어.' },

  { type: 'enter', role: 'pythagoras', expression: 'neutral', position: 'right' },
  // [PX#1] 4단원 의존 줄이고 자기완결형으로
  { type: 'dialog', speaker: 'pythagoras', expression: 'smile',
    text: '폴리곤. 닮음을 통달하는 날 어울리는 이름을 주겠다고 했었지. 너는 닮음을, 비례를, 그리고 황금비를 꿰뚫었다.' },
  // [PX#3] 호명 직전 정적 한 박자
  { type: 'dialog', speaker: 'narrator',
    text: '신전 마당에 잠시 정적이 흘렀다.' },
  { type: 'dialog', speaker: 'pythagoras', expression: 'smile',
    text: '오늘부터 너를 "시밀러"라 부르마. 닮음의 전문가라는 뜻이다.' },
  // [dialogue#7] 단조 복창 제거, 정서적 페이오프
  { type: 'dialog', speaker: 'apprentice', expression: 'surprised',
    text: '시밀러…… (작게 되뇌고) 닮음의 전문가. ……좋아요. 이제 이 이름값, 제대로 해볼게요.' },
  // [scene_flow#6] 슬롯 정리 후 스승·제자 마지막 투샷
  { type: 'scene', name: 'Scene 10 — 마지막 투샷', bg: 'temple_site5', clearChars: true, mood: 'sunset' },
  { type: 'enter', role: 'thales', expression: 'smile', position: 'left' },
  { type: 'enter', role: 'apprentice', expression: 'smile', position: 'right' },
  { type: 'dialog', speaker: 'thales', expression: 'smile',
    text: '잘 어울린다, 시밀러. 비례를 보는 너의 눈은 더 멀리 갈 거다. 다음 이야기에서 또 보자.' },
  { type: 'dialog', speaker: 'narrator',
    text: '노을빛 신전 위로, 황금 비례판이 마지막으로 반짝였다. 폴리곤 — 아니, 시밀러의 새로운 여정이 시작된다.' },

  // ============================================================
  // 엔딩 분기 (첫시도 정답 개수 기준 — 엔진 ENDINGS 처리)
  // ============================================================
  { type: 'ending' },
];

// 엔딩 분기 기준: problemResults에서 firstCorrect===true 개수
//   A (8개 이상): 황금의 깨달음
//   B (5~7개):    착실한 건축가
//   C (4개 이하): 다시 쌓는 비례
