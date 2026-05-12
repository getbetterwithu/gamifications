# 4단원 스테이지 1 배경 — 나노바나나 생성 가이드

**대상 도구**: Google Gemini 2.5 Flash Image (별명: 나노바나나 / Nano Banana)
**접속**: https://gemini.google.com (구독 중)
**최종 결과물**: 1920×1080 PNG 5장 → [`../games/stage1_quadrilaterals/backgrounds/`](../games/stage1_quadrilaterals/backgrounds/) 폴더에 저장

> ⚠️ **중요**: 모든 그림 생성 프롬프트는 **영어로 입력**하세요. 나노바나나는 영어 프롬프트에서 더 정확하고 일관된 결과를 냅니다. 한글 번역은 의미 확인용으로만 두었습니다.

> 💡 **5단원과의 일관성**: 4단원과 5단원은 같은 세계관(피타고라스 학당)을 공유하므로 — 가능하면 **5단원 배경 9장을 만들었던 동일한 Gemini 채팅**에서 이어서 생성하면 화풍이 자동으로 통일됩니다. 새 채팅에서 시작한다면 아래 공통 스타일 프롬프트로 먼저 보정해주세요.

---

## 🎯 작업 순서 (선생님이 할 일)

1. Gemini 웹에 접속 → 5단원 배경 만들 때 쓴 **기존 채팅**에 이어가기 (없으면 새 채팅)
2. 새 채팅인 경우만: 아래 [**🎨 공통 스타일 프롬프트 (English)**](#-공통-스타일-프롬프트-style-preamble) 를 첫 메시지로 복붙
3. [**📜 5개 장면 프롬프트 (English)**](#-5개-장면-프롬프트-scene-prompts) 를 **하나씩 차례로** 복붙
   - 한 메시지에 하나씩 (한 번에 다 넣지 말 것 — 화풍 일관성 깨짐)
4. 결과 이미지 마음에 들면 → 우클릭 다운로드 → **파일명 정확히** [`backgrounds/`](../games/stage1_quadrilaterals/backgrounds/) 폴더에 저장
   - 마음에 안 들면 같은 채팅에 영어로 "redraw with X" 또는 "make it warmer" 등 수정 요청
5. 5장 다 모이면 폴리곤(Claude)에게 "배경 다 받았어" → backgrounds.js 업데이트

---

## 📦 5단원에서 재활용할 자산

다음 2장은 **5단원에 이미 만들어둔 PNG를 복사해 쓰면 됩니다** (새로 생성 X):

| 4단원 사용 | 5단원 자산 | 비고 |
|---|---|---|
| `garden.png` | `unit5_similarity/games/stage1_similarity/backgrounds/garden.png` | Scene 8 (나무 그늘) |
| `corridor.png` | `unit5_similarity/games/stage1_similarity/backgrounds/corridor.png` | 엔딩 B (학당 복도) |

복사 방법:
```bash
cp unit5_similarity/games/stage1_similarity/backgrounds/garden.png \
   unit4_tri_quad/games/stage1_quadrilaterals/backgrounds/
cp unit5_similarity/games/stage1_similarity/backgrounds/corridor.png \
   unit4_tri_quad/games/stage1_quadrilaterals/backgrounds/
```

---

## 🎨 공통 스타일 프롬프트 (Style Preamble)

> 5단원 채팅에서 이어간다면 **이 단계는 생략**. 새 채팅에서만 사용.

### 🇬🇧 복붙용 (English) — 이걸 첫 메시지로 보내세요

```
I'm creating 5 background illustrations for a visual novel game set in ancient Greece. These backgrounds belong to a Pythagoras Academy story (Unit 4 — quadrilaterals). The most critical requirement: ALL backgrounds must share a unified, consistent art style — they should look like they were painted by the same artist.

[Common Style Guide]
- Art style: Studio Ghibli-inspired painted background; thick brushstrokes; watercolor mixed with gouache feel
- Mood: warm, mystical, classical yet inviting
- Setting: Ancient Greek Mediterranean (6th century BC, Pythagoras era)
- Lighting: natural light, soft shadows, warm color temperature (terracotta, olive, ochre palette)
- Composition: 16:9 widescreen landscape, 1920x1080 resolution; keep the center-bottom area visually clean (this is where dialogue boxes and characters will appear)
- Detail: stylized, painterly brushwork — NOT photorealistic

[Strict Rules — must follow on every image]
- NO people, NO characters, NO human figures — backgrounds only
- NO text, NO letters, NO signs, NO writing of any kind
- Keep the center-bottom area uncluttered
- All backgrounds must share the same palette, brushwork, and atmosphere

If you understand, reply only "OK" and I will send the first scene description.
```

---

## 📜 5개 장면 프롬프트 (Scene Prompts)

> 각 장면을 **별도 메시지**로, 영어 블록을 복붙하세요. 한글 블록은 참고용입니다.

---

### 1️⃣ entrance.png — 학당 정문 (Scene 1)

#### 🇬🇧 복붙용 (English)

```
Background #1 — filename: entrance.png

Scene: The main entrance of Pythagoras's academy at early morning, where a new apprentice arrives for the first time.

Elements:
- Foreground: stone-paved approach leading to a large wooden double-door entrance
- Two or three tall Doric columns flanking the entrance, supporting a triangular pediment carved with simple geometric reliefs
- Stone steps with worn edges, suggesting age and many footsteps
- A few olive branches or wild laurel sprouting beside the columns
- Background: the academy building's facade peeks above, with the Aegean Sea barely visible in the far distance through the columns
- Sky: pale gold-to-blue gradient of early dawn, a sea breeze gently stirring tree leaves

Mood: the threshold of a new journey, hopeful but slightly intimidating.
Color palette: warm cream stone, soft gold dawn light, hints of sea blue.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
1번 배경 — 파일명: entrance.png

장면: 피타고라스 학당의 정문, 이른 아침. 새 견습생이 처음 도착하는 곳
요소:
- 전경: 큰 목재 양쪽 문으로 이어지는 돌 포장 진입로
- 정문 양옆: 키 큰 도리아식 기둥 두세 개, 삼각형 박공(페디먼트)에 단순한 기하학 부조
- 닳은 가장자리의 돌계단 (오랜 세월의 흔적)
- 기둥 옆에 살짝 자란 올리브 가지 또는 야생 월계수
- 원경: 학당 건물 외벽이 살짝 보임, 기둥 사이로 멀리 에게해
- 하늘: 이른 새벽의 옅은 황금-푸른 그라데이션, 잎을 흔드는 바닷바람
분위기: 새로운 여정의 문턱, 희망적이지만 약간 긴장됨
색감: 따뜻한 크림색 돌, 부드러운 새벽 황금빛, 살짝 비치는 바다색
```

---

### 2️⃣ yard.png — 설계도 석판이 있는 안뜰 (Scene 2~7, 9~11 공용)

> ⚠️ **5단원의 yard.png와 다른 분위기**입니다. 4단원은 안뜰에 **설계도 석판**이 펼쳐져 있고 분쟁의 무대가 되는 곳이라, 더 사건성 있는 구도가 필요합니다.

#### 🇬🇧 복붙용 (English)

```
Background #2 — filename: yard.png

Scene: The central courtyard of Pythagoras's academy during midday, where a large architectural blueprint is laid out on a stone slab — the stage of a dispute.

Elements:
- Center-foreground: a large flat stone slab/table at about waist height, displaying an unrolled parchment-like blueprint with faint geometric drawings (quadrilateral shapes, parallel lines, diagonals — kept abstract and intentionally illegible)
- The slab is the visual anchor — characters will stand around it
- Surrounding: stone-paved courtyard with a colonnade (covered walkway with stone columns) on three sides
- One large cypress or olive tree on the side, casting partial shade
- A few scattered stone benches near the edges
- In the distance: the academy's main building facade with a triangular pediment

Mood: midday sun, focused tension — the air of a debate about to begin.
Color palette: warm beige stone, deep green tree, clear blue sky overhead.

Composition note: KEEP THE CENTER-BOTTOM CLEAR — the slab should sit in the lower-middle area but not block where dialogue and characters appear. Place the slab slightly off-center if needed.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text on the blueprint, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
2번 배경 — 파일명: yard.png (5단원 버전과 다름!)

장면: 피타고라스 학당 중앙 안뜰, 한낮. 큰 석판 위에 건축 설계도가 펼쳐져 있어 — 분쟁의 무대
요소:
- 중앙 전경: 허리 높이의 큰 평평한 석판/탁자, 그 위에 양피지 같은 설계도가 펼쳐짐 (사각형 도형, 평행선, 대각선이 흐릿하게 — 추상적이고 의도적으로 읽히지 않게)
- 이 석판이 시각적 중심점 — 캐릭터들이 그 주변에 모임
- 주변: 돌 포장된 안뜰, 삼면을 둘러싼 콜로네이드 (지붕 있는 회랑)
- 측면에 큰 사이프러스 또는 올리브 나무 한 그루, 부분 그림자
- 가장자리에 흩어진 돌 벤치 몇 개
- 원경: 학당 본관의 삼각형 박공이 보이는 외관
분위기: 한낮의 햇살, 집중된 긴장감 — 곧 시작될 논쟁의 공기
색감: 따뜻한 베이지 돌, 짙은 녹색 나무, 머리 위 맑은 푸른 하늘
구도 노트: 가운데 하단은 비울 것 — 석판이 약간 비껴서 배치되도록
```

---

### 3️⃣ yard_sunset.png — 안뜰의 노을 (Scene 12 — 별명 예고)

#### 🇬🇧 복붙용 (English)

```
Background #3 — filename: yard_sunset.png

Scene: The same central courtyard as yard.png, but now at sunset — the dispute has been resolved, the day is ending, and a quiet moment of reflection awaits.

Elements:
- Same architectural layout as yard.png (stone-paved courtyard, colonnade, cypress/olive tree, distant academy facade)
- The blueprint slab is now empty/rolled up — the work is done
- Long orange-gold shadows stretch across the stones
- The sky is painted in deep sunset tones: warm orange near the horizon, fading into rose, then violet overhead
- Wisps of evening cloud catching the last light
- A single lit oil lamp or sconce near a column (just one small warm light source, no people)

Mood: serene, contemplative, the warm afterglow of a long day; a sense of quiet anticipation for what comes next.
Color palette: deep orange, gold, rose-pink, fading violet sky; warm honey-colored stone in the foreground.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
3번 배경 — 파일명: yard_sunset.png

장면: yard.png와 같은 안뜰이지만 노을 — 분쟁이 해결되고 하루가 저무는, 조용한 성찰의 순간
요소:
- yard.png와 동일한 건축 구조 (돌 포장 안뜰, 콜로네이드, 사이프러스/올리브, 멀리 학당 외관)
- 설계도 석판은 이제 비어 있거나 둘둘 말려 있음 — 일이 끝남
- 돌 위로 길게 늘어진 주황-금빛 그림자
- 하늘: 깊은 노을빛, 수평선 가까이 따뜻한 주황, 위로 갈수록 장미빛, 머리 위 보라
- 마지막 빛을 받은 저녁 구름 자락
- 기둥 옆에 켜진 작은 등잔 또는 벽등 하나 (사람 없이 작은 광원만)
분위기: 평온하고 사색적, 긴 하루의 따뜻한 잔광; 다음 일을 향한 조용한 기대
색감: 깊은 주황, 금색, 장미빛 핑크, 옅어지는 보라 하늘; 전경 돌은 꿀빛
```

---

### 4️⃣ award_hall.png — 학당 시상 공간 (엔딩 A)

#### 🇬🇧 복붙용 (English)

```
Background #4 — filename: award_hall.png

Scene: A formal indoor hall inside the academy, used for ceremonies and recognitions — the place where Pythagoras commends a worthy apprentice.

Elements:
- A grand stone hall with a high ceiling, supported by tall fluted columns on both sides
- At the far end: a raised stone dais (low platform) with a simple stone seat or lectern — the master's position
- Along the walls: stone reliefs showing geometric shapes and patterns (triangles, squares, abstract geometric ornaments)
- Hanging laurel wreaths or simple bronze medallions on the walls
- Skylight or clerestory windows allowing soft beams of golden light to enter and illuminate the dais
- A few large bronze braziers or oil lamps casting warm glow

Mood: solemn, dignified, celebratory yet restrained; a sacred academic space.
Color palette: ivory and cream stone, polished dark wood, glints of bronze, golden sunbeams.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
4번 배경 — 파일명: award_hall.png

장면: 학당 내부의 의식·표창에 쓰이는 격식 있는 실내 홀 — 피타고라스가 우수한 견습생을 인정하는 곳
요소:
- 천장이 높은 웅장한 석조 홀, 양옆에 키 큰 홈 새겨진 기둥들
- 안쪽 끝: 약간 높인 석조 단상 (낮은 플랫폼)과 단순한 돌 의자 또는 강단 — 스승의 자리
- 벽: 기하학 도형·문양 부조 (삼각형, 사각형, 추상적 기하 장식)
- 벽에 걸린 월계수 화환이나 단순한 청동 메달
- 천창 또는 고측창에서 부드러운 황금빛 광선이 단상을 비춤
- 따뜻한 빛을 내는 큰 청동 화로나 등잔 몇 개
분위기: 엄숙하고 위엄 있음, 축하 분위기지만 절제됨; 신성한 학문의 공간
색감: 아이보리·크림 석재, 광택 있는 짙은 목재, 청동의 반짝임, 황금 햇살
```

---

### 5️⃣ title.png — 4단원 타이틀 (게임 시작 화면)

#### 🇬🇧 복붙용 (English)

```
Background #5 — filename: title.png

Scene: A grand title illustration for the game's opening screen — atmospheric, evocative, showing the world of the story without giving away specifics.

Elements:
- Wide panoramic view from inside the academy looking out: through a colonnade of tall Doric columns, the viewer sees the Aegean Sea and a coastline at golden hour
- In the middle-ground: a large stone slab or open book/scroll on a pedestal, with very faint geometric shapes etched on it (quadrilateral outlines — diamond, rectangle, square — kept ghostly and dreamlike)
- Distant: a hint of the academy's pediment and silhouettes of buildings on the headland
- Atmospheric particles: motes of golden dust suspended in beams of light
- Sky: deep dramatic sunset with layered clouds, gradient from gold to rose to deep blue

Mood: epic, mysterious, beckoning — like the opening shot of an animated film.
Color palette: rich golds, sunset rose, deep teal sea, warm honey stone.

Composition note: This is a title background — title text will be overlaid later, so keep the upper-center and middle composition striking but with a slightly darker or simpler band in the lower third for text legibility.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text in the image, atmospheric and cinematic.
```

#### 🇰🇷 참고용 (한글)

```
5번 배경 — 파일명: title.png

장면: 게임 시작 화면용 웅장한 타이틀 일러스트 — 분위기 있고 환기적인, 이야기의 세계를 구체화하지 않으면서 보여줌
요소:
- 학당 안쪽에서 바깥을 보는 와이드 파노라마: 키 큰 도리아 기둥들의 콜로네이드 너머로 황금시간대의 에게해와 해안선
- 중경: 큰 돌 받침대 위 펼쳐진 책 또는 두루마리, 위에 사각형 도형들(마름모·직사각형·정사각형) 윤곽이 아주 흐릿하게 — 꿈처럼 환영처럼
- 원경: 곶 위에 학당 박공과 건물 실루엣 살짝
- 분위기: 빛줄기에 떠도는 황금 먼지 알갱이
- 하늘: 극적인 노을, 층층 구름, 황금→장미→짙은 푸름 그라데이션
분위기: 서사적, 신비, 손짓하는 — 애니메이션 영화의 오프닝 컷처럼
색감: 풍부한 황금, 노을의 장미빛, 깊은 청록 바다, 따뜻한 꿀빛 돌
구도 노트: 타이틀 텍스트가 나중에 얹히므로 상중단은 극적으로, 하단 1/3은 텍스트 가독성을 위해 약간 어둡거나 단순하게
```

---

## 📋 체크리스트 (선생님 작업 진행용)

생성한 PNG는 `unit4_tri_quad/games/stage1_quadrilaterals/backgrounds/`에 정확한 파일명으로 저장:

**새로 생성 (5장)**
- [ ] `entrance.png` — 학당 정문 (Scene 1)
- [ ] `yard.png` — 설계도 안뜰 (Scene 2~7, 9~11)
- [ ] `yard_sunset.png` — 안뜰 노을 (Scene 12)
- [ ] `award_hall.png` — 시상 공간 (엔딩 A)
- [ ] `title.png` — 타이틀 화면

**5단원에서 복사 (2장)**
- [ ] `garden.png` (← 5단원에서 cp)
- [ ] `corridor.png` (← 5단원에서 cp)

**합계: 7장**

---

## 🔧 PNG 7장 모이면 — backgrounds.js 업데이트 예고

폴리곤(Claude)이 자동으로 처리하지만 참고용:

```javascript
const BACKGROUNDS = {
  entrance:    bgImg('entrance.png'),     // Scene 1
  yard:        bgImg('yard.png'),         // Scene 2~7, 9~11
  yard_sunset: bgImg('yard_sunset.png'),  // Scene 12
  garden:      bgImg('garden.png'),       // Scene 8 (5단원 재활용)
  corridor:    bgImg('corridor.png'),     // 엔딩 B (5단원 재활용)
  award_hall:  bgImg('award_hall.png'),   // 엔딩 A
  title:       bgImg('title.png'),        // 타이틀
};
```

그리고 scenario.js의 일부 `bg: 'yard'` → `bg: 'yard_sunset'` (Scene 12), `bg: 'entrance'` (Scene 1) 등 시나리오 배경 매핑도 같이 수정.
