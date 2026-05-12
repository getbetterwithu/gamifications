# 스테이지 1 배경 9장 — 나노바나나 생성 가이드

**대상 도구**: Google Gemini 2.5 Flash Image (별명: 나노바나나 / Nano Banana)
**접속**: https://gemini.google.com (구독 중)
**최종 결과물**: 1920×1080 PNG 9장 → [`../games/stage1_similarity/backgrounds/`](../games/stage1_similarity/backgrounds/) 폴더에 저장

> ⚠️ **중요**: 모든 그림 생성 프롬프트는 **영어로 입력**하세요. 나노바나나는 영어 프롬프트에서 더 정확하고 일관된 결과를 냅니다. 한글 번역은 의미 확인용으로만 두었습니다.

---

## 🎯 작업 순서 (선생님이 할 일)

1. Gemini 웹에 접속 → **새 채팅** 시작
2. 아래 [**🎨 공통 스타일 프롬프트 (English)**](#공통-스타일-프롬프트-style-preamble) 를 첫 메시지로 복붙 → 전송
   - Gemini가 "OK"로 답함
3. 그 다음 [**📜 9개 장면 프롬프트 (English)**](#9개-장면-프롬프트-scene-prompts) 를 **하나씩 차례로** 복붙
   - 한 메시지에 하나씩 (한 번에 9개 다 넣지 말 것 — 화풍 일관성 깨짐)
4. 결과 이미지 마음에 들면 → 우클릭 다운로드 → **파일명 정확히** [`backgrounds/`](../games/stage1_similarity/backgrounds/) 폴더에 저장
   - 마음에 안 들면 같은 채팅에 영어로 "redraw with X" 또는 "make it warmer" 등 수정 요청
5. 9장 다 모이면 시밀러(Claude)에게 "배경 다 받았어" → backgrounds.js 교체 작업 진행

---

## 🎨 공통 스타일 프롬프트 (Style Preamble)

### 🇬🇧 복붙용 (English) — 이걸 첫 메시지로 보내세요

```
I'm creating 9 background illustrations for a visual novel game set in ancient Greece. The most critical requirement: ALL 9 backgrounds must share a unified, consistent art style — they should look like they were painted by the same artist.

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
- All 9 backgrounds must share the same palette, brushwork, and atmosphere

If you understand, reply only "OK" and I will send the first scene description.
```

### 🇰🇷 참고용 (한글 번역)

```
나는 고대 그리스를 배경으로 한 비주얼 노벨 게임의 배경 일러스트 9장을 만들 거야.
가장 중요한 요구사항: 9장 모두 동일하고 일관된 화풍이어야 함 — 같은 작가가 그린 것처럼 보여야 함.

【공통 스타일 가이드】
- 화풍: 스튜디오 지브리 풍 페인팅 배경, 두꺼운 붓터치, 수채화+과슈 느낌
- 분위기: 따뜻하고 신비로움, 고전적이면서 친근함
- 시대/장소: 고대 그리스 지중해 (기원전 6세기, 피타고라스 시대)
- 빛: 자연광, 부드러운 그림자, 따뜻한 색온도 (테라코타·올리브·황토 팔레트)
- 구도: 16:9 와이드 풍경 1920x1080, 가운데 하단부는 비워둘 것
- 디테일: 양식화된 회화적 붓터치 — 사진처럼 사실적이지 않게

【엄격한 규칙】
- 사람·캐릭터 절대 그리지 말 것
- 텍스트·글자·간판 절대 넣지 말 것
- 가운데 하단 비워두기
- 9장 모두 동일 팔레트·붓질·분위기 유지

이해했으면 "OK"만 답해줘. 그러면 첫 장면을 보낼게.
```

---

## 📜 9개 장면 프롬프트 (Scene Prompts)

> 각 장면을 **별도 메시지**로, 영어 블록을 복붙하세요. 한글 블록은 참고용입니다.

---

### 1️⃣ harbor.png — 항구의 아침 (Scene 1)

#### 🇬🇧 복붙용 (English)

```
Background #1 — filename: harbor.png

Scene: An ancient Greek small island harbor at early morning.
Time: Dawn, sun just rising above the horizon.

Elements:
- Foreground: stone-paved dock with two or three small wooden boats moored
- Midground: calm blue sea, a single distant lighthouse tower
- Background: small port town with terracotta rooftops, thin smoke rising from chimneys
- Sky: warm orange-to-gold gradient, a few wispy clouds

Mood: the start of an adventure, hopeful morning.
Color palette: warm oranges, golden hues, calm teal sea.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
1번 배경 — 파일명: harbor.png

장면: 고대 그리스의 작은 섬 항구, 아침 햇살
시간대: 이른 아침, 수평선 위로 막 떠오르는 태양
요소:
- 전경: 돌로 포장된 부두, 정박된 작은 목선 두세 척
- 중경: 잔잔한 푸른 바다, 멀리 등대탑 하나
- 원경: 테라코타 색조 지붕의 작은 항구도시, 가는 굴뚝 연기
- 하늘: 따뜻한 주황빛-금빛 그라데이션, 옅은 구름
분위기: 모험의 시작, 희망찬 아침
색감: 따뜻한 오렌지, 황금빛, 차분한 청록 바다
```

---

### 2️⃣ classroom.png — 학당 강의실 (Scene 2)

#### 🇬🇧 복붙용 (English)

```
Background #2 — filename: classroom.png

Scene: Indoor lecture hall of Pythagoras's academy where the first lesson is held.

Elements:
- Stone floor, two or three marble columns
- Walls: geometric figures (triangles, circles, similarity diagrams) etched or chalked into the surface
- Center: a large wooden lectern, with a small table beside it stacked with parchment scrolls
- Low wooden chairs or floor cushions where students would sit (chairs only, no people)
- Soft sunlight pouring through tall windows

Mood: classical, scholarly, sacred yet warm.
Color palette: beige and ivory stone, deep brown wood, golden sunlight.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
2번 배경 — 파일명: classroom.png

장면: 피타고라스 학당의 첫 수업이 열리는 실내 강의실
요소:
- 석재 바닥, 대리석 기둥 두세 개
- 벽면: 기하학 도형(삼각형, 원, 닮음 그림)이 분필이나 양각으로 새겨짐
- 중앙: 큰 목재 강단, 옆에 양피지 더미 탁자
- 학생용 낮은 의자/방석 (사람 없이 의자만)
- 큰 창문으로 들어오는 부드러운 햇살
분위기: 고전적·학구적, 신성하면서 따뜻함
색감: 베이지·아이보리 석재, 짙은 갈색 목재, 햇빛의 황금색
```

---

### 3️⃣ yard.png — 학당 중앙 마당 (Scene 3, 8, 9 공용)

#### 🇬🇧 복붙용 (English)

```
Background #3 — filename: yard.png

Scene: Outdoor central courtyard of Pythagoras's academy, a gathering place for apprentices.

Elements:
- Center: stone-paved circular plaza with a small sundial or geometric pattern in the middle
- Surrounded by a colonnade (stone columns forming a covered walkway)
- A large olive tree or cypress tree on one side
- Stone benches placed around the plaza edges
- In the distance, the academy building's pediment (triangular gable) is visible

Mood: peaceful and contemplative, with an undercurrent of impending events.
Color palette: warm beige stone, deep green foliage, blue sky.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
3번 배경 — 파일명: yard.png

장면: 피타고라스 학당의 야외 중앙 마당, 견습생들이 모이는 공간
요소:
- 중앙: 돌로 포장된 원형 광장, 가운데 해시계 또는 기하학 무늬
- 주변: 회랑 (콜로네이드, 돌기둥들이 둘러싼 통로)
- 한쪽에 큰 올리브 나무 또는 사이프러스 한 그루
- 광장 가장자리에 돌 벤치
- 멀리 학당 건물의 페디먼트(삼각형 박공)
분위기: 평화롭고 사색적, 무언가 일이 벌어질 듯한 긴장감
색감: 따뜻한 베이지 돌, 짙은 녹색 나무, 푸른 하늘
```

---

### 4️⃣ corridor.png — 학당 복도 (Scene 4)

#### 🇬🇧 복붙용 (English)

```
Background #4 — filename: corridor.png

Scene: A long indoor corridor inside the academy, leading toward the storage warehouse.

Elements:
- Doric or Ionic stone columns lining both sides
- Ceiling: wooden beams with occasional skylights
- Floor: simple geometric mosaic patterns
- End of corridor: dim light, slightly ajar door
- Wall reliefs and small votive offerings hanging on the walls

Perspective: one-point perspective with strong sense of depth.
Mood: slightly mysterious and exploratory, the feeling of moving toward something unknown.
Color palette: muted beige, warm browns, golden light glowing at the far end.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
4번 배경 — 파일명: corridor.png

장면: 학당 내부의 긴 복도, 창고로 향하는 통로
요소:
- 양쪽에 도리아식/이오니아식 석조 기둥
- 천장: 목재 들보, 일부 채광창
- 바닥: 간단한 기하학 모자이크 무늬
- 복도 끝: 어슴푸레한 빛, 살짝 열린 문
- 벽에 양각 부조나 작은 봉헌물
원근감: 1점 투시, 깊이감
분위기: 약간 신비롭고 탐험적
색감: 차분한 베이지, 따뜻한 갈색, 끝부분의 금빛
```

---

### 5️⃣ warehouse.png — 창고 내부 (Scene 5, 황금 비례판이 사라진 현장)

#### 🇬🇧 복붙용 (English)

```
Background #5 — filename: warehouse.png

Scene: Dim, dusty storage warehouse of the academy — the crime scene where the Golden Proportion Plate has gone missing.

Elements:
- Rough wooden or stone shelves lining the walls
- On the shelves: parchment scrolls, bronze tools, geometric models (polyhedra, discs)
- Floor: weathered stone, with two distinct footprint marks at the center (one large, one small — the similarity-ratio clue)
- A single beam of light slanting in from a small window in the ceiling
- Floating dust particles caught in the light beam

Mood: mystery, slight tension, the central stage of a detective story.
Color palette: dark browns and grays, with high contrast from the single golden light beam.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
5번 배경 — 파일명: warehouse.png

장면: 학당의 어두침침한 창고, 황금 비례판이 사라진 사건 현장
요소:
- 거친 목재/석재 선반들이 벽을 따라 늘어섬
- 선반 위: 양피지 두루마리, 청동 도구, 기하학 모형(다면체, 원반)
- 바닥: 낡은 돌바닥, 중앙에 발자국 자국 두 개 (큰 것 하나, 작은 것 하나 — 닮음 단서)
- 천장의 작은 창문에서 비스듬히 들어오는 한 줄기 빛
- 떠다니는 먼지 입자
분위기: 미스터리, 약간의 긴장감, 추리극 핵심 무대
색감: 어두운 갈색, 회색, 한 줄기 빛의 황금색 대비
```

---

### 6️⃣ garden.png — 학당 정원 (Scene 6, 휴식)

#### 🇬🇧 복붙용 (English)

```
Background #6 — filename: garden.png

Scene: A small garden beside the academy, used as a brief resting spot.

Elements:
- Large olive trees with silver-green leaves
- A small fountain or stone-built well
- Stone benches with scattered flower petals on top
- Flower beds planted with Mediterranean herbs (lavender, rosemary)
- Part of the academy building visible in the distance, blue sky beyond
- Sunlight filtering through tree branches in soft light shafts

Mood: peaceful and warm, a refuge for clearing the mind.
Color palette: rich greens, lavender purples, warm golden sunlight.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
6번 배경 — 파일명: garden.png

장면: 학당 옆 작은 정원, 잠시 쉬는 휴식 공간
요소:
- 큰 올리브 나무들 (은빛 잎사귀)
- 작은 분수 또는 돌 우물
- 돌 벤치, 위에 흩어진 꽃잎
- 화단에 라벤더, 로즈마리 같은 지중해 허브
- 멀리 학당 건물 일부, 푸른 하늘
- 나무 사이로 새어드는 햇살 (light shafts)
분위기: 평화롭고 따뜻함, 머리 식히는 쉼터
색감: 풍부한 녹색, 라벤더 보라, 따뜻한 햇살의 황금색
```

---

### 7️⃣ library.png — 도서관 (Scene 7, 양피지 두루마리 서가)

#### 🇬🇧 복붙용 (English)

```
Background #7 — filename: library.png

Scene: The academy's library, filled with ancient parchment scrolls.

Elements:
- Walls covered in wooden lattice shelves, each cell holding scrolls neatly arranged
- Center: a large reading table with one open parchment, a quill, and an inkwell on top
- Ceiling: tall, arched, with skylights pouring down warm light
- One wall holds a large constellation chart or celestial sphere model
- Floor: dark wood or mosaic tile
- Floating dust particles drifting in the light, atmospheric scattering

Mood: a treasury of knowledge, mystical and scholarly, the tension of searching for clues.
Color palette: cream and ochre parchment, deep brown wood, golden light.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
7번 배경 — 파일명: library.png

장면: 학당 도서관, 고대 양피지 두루마리들로 가득
요소:
- 벽면 가득한 목재 격자형 선반 (각 칸에 두루마리)
- 중앙: 큰 독서용 탁자, 펼쳐진 양피지·깃펜·잉크병
- 천장: 높은 아치형, 채광창에서 따뜻한 빛
- 한쪽 벽에 큰 별자리 지도 또는 천구 모형
- 바닥: 짙은 목재 또는 모자이크
- 공중에 떠다니는 먼지 입자, 빛의 산란
분위기: 지식의 보고, 신비롭고 학구적, 단서 찾는 긴장감
색감: 양피지의 크림·황토색, 짙은 갈색 목재, 빛의 황금색
```

---

### 8️⃣ basement.png — 지하 보관고 입구 (Scene 10, 클라이맥스)

#### 🇬🇧 복붙용 (English)

```
Background #8 — filename: basement.png

Scene: Entrance to the academy's underground storage, where the Proportion Plate is hidden — the climactic location.

Elements:
- Stone steps descending into darkness
- Arched stone doorway at the entrance, two flickering torches mounted on either side
- Walls carved with geometric reliefs (pentagram star, golden ratio figures, Pythagorean symbols)
- Floor: worn stone, traces of antiquity
- Strong contrast between deep shadows and warm torchlight
- Subtle golden glow seeping up from the basement (hinting at the Proportion Plate's hidden presence)

Mood: mystical and climactic, the moment of discovery.
Color palette: deep browns and black shadows, vivid orange torchlight, mysterious golden underglow.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text, leave center-bottom clean.
```

#### 🇰🇷 참고용 (한글)

```
8번 배경 — 파일명: basement.png

장면: 학당 지하 보관고로 내려가는 입구, 비례판이 숨겨진 곳
요소:
- 돌계단이 어둠 속으로 내려감
- 입구의 아치형 석조 문, 양옆에 횃불 두 개 (불꽃 흔들리는 느낌)
- 벽면에 새겨진 기하학 부조 (오각형 별, 황금비, 피타고라스 학파 상징)
- 바닥: 닳은 돌, 고대의 흔적
- 깊은 그림자와 횃불의 따뜻한 빛 대비
- 지하 쪽에서 새어 나오는 미묘한 황금빛 (비례판의 빛 암시)
분위기: 신비롭고 클라이맥스다운, 발견의 순간
색감: 깊은 갈색·검정 그림자, 횃불의 진한 오렌지, 신비한 황금빛
```

---

### 9️⃣ title.png — 타이틀 화면

#### 🇬🇧 복붙용 (English)

```
Background #9 — filename: title.png

Scene: Main title screen visual (the hero/key image of the game).

Elements:
- Pythagoras's academy seen from a distance, perched on a hilltop
- Academy buildings: white marble columns, triangular pediments
- Surroundings: cypress trees, olive groves
- Sky: sunset gradient of golden-orange
- A glimpse of the blue Aegean Sea in the far distance
- A few birds crossing the sky
- Overall feel: cinematic poster, grand and poetic

Mood: the promise of adventure, mystery, classical grandeur.
Color palette: warm gold-orange sunset, white marble, deep cypress green, blue sea.
Composition: academy building positioned upper-center (leaving space for a title text overlay later), lower portion calm and uncluttered.

Style reminder: Studio Ghibli painted background, thick brushstrokes, 16:9 widescreen 1920x1080, no people, no text in the image itself.
```

#### 🇰🇷 참고용 (한글)

```
9번 배경 — 파일명: title.png

장면: 게임 타이틀 화면용 메인 비주얼 (대표 이미지)
요소:
- 언덕 위에 자리 잡은 피타고라스 학당 전경 (멀리서 본 풍경)
- 학당 건물: 흰 대리석 기둥, 삼각형 페디먼트
- 주변: 사이프러스 나무, 올리브 숲
- 하늘: 노을 황금-오렌지 그라데이션
- 멀리 푸른 에게해 살짝
- 새 몇 마리가 하늘을 가로지름
- 전체: 영화 포스터처럼 웅장하고 시적
분위기: 모험의 약속, 신비, 고전적 웅장함
색감: 따뜻한 황금-오렌지 노을, 흰 대리석, 짙은 사이프러스 녹색, 푸른 바다
구도: 학당 건물은 중앙 상단(나중에 제목 텍스트 자리), 하단은 차분하게
```

---

## 🛠️ 트러블슈팅 (자주 발생하는 문제)

### Q1. 화풍이 점점 달라짐 (5번째쯤부터 색감이 바뀜)
**원인**: Gemini 컨텍스트가 길어지면 초기 스타일을 잊음
**해결**: 5번째 장면쯤 한 번 영어로 리마인드:
```
Reminder: please keep the same Studio Ghibli painted style, warm Mediterranean palette, thick brushstrokes, 16:9 widescreen, no people, no text — exactly as the first images.
```

### Q2. 사람·캐릭터가 자꾸 그려짐
**해결**: 프롬프트 끝에 강조 추가:
```
ABSOLUTELY no people, no human figures, no characters of any kind. Background only. If any person appears, redraw without them.
```

### Q3. 16:9가 아닌 정사각형이 나옴
**해결**: 명시:
```
The output MUST be 16:9 widescreen aspect ratio (1920x1080 horizontal). NOT square, NOT portrait.
```
그래도 안 되면 [Photopea](https://www.photopea.com) 무료 웹 편집기로 크롭.

### Q4. 텍스트·글자가 그림 안에 들어감
**해결**:
```
NO text, NO letters, NO numbers, NO signs, NO writing of any kind inside the image. Even on books, scrolls, or signs — keep them blank.
```

### Q5. 결과물이 거의 좋은데 약간만 수정하고 싶음
**해결**: 같은 채팅에서 영어로 수정 요청:
```
This is great, but please add one more torch on the left side and make the underglow slightly more golden.
```
Gemini는 같은 이미지의 변형을 생성합니다.

---

## ✅ 작업 완료 체크리스트

생성한 PNG를 [`../games/stage1_similarity/backgrounds/`](../games/stage1_similarity/backgrounds/) 폴더에 다음 파일명으로 저장:

- [ ] `harbor.png`
- [ ] `classroom.png`
- [ ] `yard.png`
- [ ] `corridor.png`
- [ ] `warehouse.png`
- [ ] `garden.png`
- [ ] `library.png`
- [ ] `basement.png`
- [ ] `title.png`

9장 다 모이면 시밀러(Claude)에게 **"배경 다 받았어, backgrounds.js 교체해줘"** 라고 말씀해주세요.
그러면 SVG 코드를 `<img>` 태그로 깔끔하게 교체합니다.
