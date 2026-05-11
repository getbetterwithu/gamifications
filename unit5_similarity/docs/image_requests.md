# 이미지 요청 누적 리스트

게임 만드는 과정에서 SVG로는 한계가 있거나, 더 사실적인 이미지가 필요한 항목을 누적하는 파일입니다.
선생님이 시간 날 때 이 리스트의 프롬프트를 모아서 Gemini/fal.ai로 한 번에 생성합니다.

---

## 운영 규칙

1. **누가 추가하나?**
   - Claude: 게임 코드 만들다 "이건 SVG로 안 되겠다" 발견 시 자동 추가
   - 선생님: 결과물 검토하다 "이건 이미지로 교체하자" 요청 시 Claude가 접수 후 추가
   - 선생님: 시나리오 검토하다 추가 일러스트 필요 시 Claude가 접수 후 추가

2. **언제 처리하나?**
   - 누적 리스트가 충분히 모이면 (또는 게임 한 단계 완성되면) 선생님이 하루 잡고 일괄 생성
   - 받은 이미지는 `assets/props/` 폴더에 저장
   - Claude가 코드의 SVG 호출 부분을 이미지 호출로 교체

3. **이미지 톤 통일**
   - 캐릭터와 같은 톤 유지: "Modern Korean illustrated comic style for tweens, warm muted color palette with terracotta and olive accents, ancient Greek setting, soft natural lighting"
   - 모든 프롬프트에 위 공통 스타일 블록 포함

4. **⚠️ 보조 이미지 배치 규칙 (절대 위반 금지)**
   - **보조 이미지(소품·도해·삽화·도형 등)는 메인 캐릭터와 대사를 가리지 않도록 화면 사이드(우측 상단)에 작게 배치한다.**
   - 이유: 메인 콘텐츠는 "말하는 캐릭터 + 대사"이며, 보조 이미지는 부가 설명용 단서.
   - 적용: HTML/CSS의 `#prop-panel` 영역은 우측 상단 고정. 화면 가운데에 두지 않는다.
   - 이 규칙은 **앞으로 만들어지는 모든 스테이지·단원·후속 게임에 동일하게 적용**한다.

---

## 공통 스타일 블록 (모든 프롬프트에 복붙)

```
Modern Korean illustrated comic style for tweens (clean line art, semi-realistic, NOT Disney cartoon, NOT Japanese visual novel),
warm muted color palette with terracotta and olive accents,
ancient Greek setting,
soft natural lighting,
fully transparent background (transparent PNG, no background, no checkered pattern),
2D illustration, no realistic photo style,
high quality
```

---

## 우선순위 1 — 스테이지 1 핵심 소품

게임 진행에 필수적인 소품. 선생님이 SVG 결과 보고 마음에 안 들면 이 항목으로 이미지 생성.

### IMG-001: 등대탑 (lighthouse_tower)
- **상태**: SVG 1차 시도 예정 (백업 프롬프트 마련)
- **등장**: Scene 1 — 탈레스가 "저기 보이는 등대탑 있지?" 할 때 화면에 띄움
- **저장 파일명**: `assets/props/lighthouse_tower.png`
- **프롬프트** (영어):
```
[공통 스타일 블록]

Subject: An ancient Greek lighthouse tower standing on a rocky coastal cliff,
made of pale beige limestone with circular tiers,
a small fire/beacon at the very top,
classical Greek architecture with simple columns at the base,
the tower is the main focus, centered in the frame,
viewed from a slight low angle making it look majestic,
the cliff edge and a hint of ocean visible at the bottom,
warm golden morning light from one side,
no people in the scene.
```
- **프롬프트** (한국어 번역):
> 고대 그리스의 등대탑, 바위 절벽 위에 우뚝 서 있음, 연한 베이지색 석회암 재질, 원통형 단들이 쌓인 구조, 꼭대기에는 작은 불꽃/봉화, 기단부에는 단순한 그리스식 기둥, 탑이 중앙에 메인 피사체로 위치, 약간 아래에서 올려다보는 각도로 위풍당당함, 화면 하단에 절벽 가장자리와 바다가 살짝 보임, 한쪽에서 들어오는 따뜻한 아침 햇살, 사람 없음.

---

## 우선순위 2 — 게임 진행 중 추가될 소품 (SVG 1차 시도 완료, 마음에 안 들면 이미지로 교체)

### IMG-002: 황금 비례판 (proportion_plate)
- **상태**: SVG 시도 완료 ([props.js](../games/stage1_similarity/props.js))
- **등장**: Scene 3, 7, 10
- **저장 파일명**: `assets/props/proportion_plate.png`
- **프롬프트**:
```
[공통 스타일 블록]
A circular ancient Greek golden artifact called the "Golden Proportion Plate",
ornate gold metalwork with intricate engravings,
a perfect equilateral triangle inscribed inside a circle pattern at the center,
small star decorations at four cardinal directions,
glowing softly with warm light against a dark background,
sacred and mysterious atmosphere, top-down view, centered.
```

### IMG-003: 직각삼각형 + 빗변 수선 (right_triangle_perpendicular)
- **등장**: Scene 9, 10
- **수학 도해 — SVG로 충분**, 이미지 생성 불필요

### IMG-004: SSS·SAS·AA 닮음 조건 (similarity_conditions)
- **등장**: Scene 8
- **수학 도해 — SVG로 충분**, 이미지 생성 불필요

### IMG-005: 항상 닮음인 도형 카드 (always_similar_shapes)
- **등장**: Scene 7
- **수학 도해 — SVG로 충분**, 이미지 생성 불필요

### IMG-006: 두 닮은 삼각형 비교 (two_triangles_compare)
- **등장**: Scene 8
- **수학 도해 — SVG로 충분**, 이미지 생성 불필요

### IMG-007: 발자국 두 개 (footprints_pair)
- **상태**: SVG 시도 완료
- **등장**: Scene 5
- **저장 파일명**: `assets/props/footprints_pair.png`
- **프롬프트**:
```
[공통 스타일 블록]
Two muddy footprints on a stone floor in an ancient Greek warehouse,
one larger (25cm) and one smaller (15cm) clearly different in size but same shape,
detailed sandal/foot impressions, dramatic lighting from above,
mysterious crime scene atmosphere, top-down or slightly angled view.
```

### IMG-008: 그림자 비교 도해 (shadow_similarity)
- **등장**: Scene 1 (선택지 A 시)
- **수학 도해 — SVG로 충분**

### IMG-009: 피라미드 + 탈레스 측정 (pyramid_thales)
- **상태**: SVG 시도 완료
- **등장**: Scene 4
- **저장 파일명**: `assets/props/pyramid_thales.png`
- **프롬프트**:
```
[공통 스타일 블록]
The Great Pyramid of Egypt under bright Egyptian sun,
a small Greek scholar (Thales) standing nearby measuring with a stick,
both casting clearly visible shadows on the desert sand,
the pyramid's shadow stretching far across the sand,
educational diagram-like composition showing similar triangles formed by the shadows,
warm golden hour lighting, side view.
```

### IMG-010: 학당 지도 (academy_map)
- **상태**: SVG 시도 완료
- **등장**: Scene 3
- **저장 파일명**: `assets/props/academy_map.png`
- **프롬프트**:
```
[공통 스타일 블록]
An aged parchment map showing the floor plan of an ancient Greek academy,
labeled rooms (lecture hall, library, courtyard, basement storage, warehouse marked with a red X),
hand-drawn ink style with slight burn marks at the corners,
a scale indicator showing "1:200" at the bottom,
a small compass rose in the corner,
warm sepia tones, top-down architectural view.
```

### IMG-011: 대응 표기 도해 (correspondence_notation)
- **등장**: Scene 2, 3
- **수학 도해 — SVG로 충분**

### IMG-012: 단서 카드 5장 (clue_cards)
- **상태**: SVG 시도 완료
- **등장**: Scene 10
- **저장 파일명**: `assets/props/clue_cards.png`
- **프롬프트**:
```
[공통 스타일 블록]
Five collectible clue cards spread out on a dark wooden table,
each card aged parchment style with different illustrations:
1) a treasure map, 2) a footprint, 3) similar geometric shapes,
4) the words "SSS SAS AA" in Greek-style calligraphy, 5) a right triangle with perpendicular line.
Cards slightly overlapping and tilted at varying angles,
warm candlelight glow, mysterious investigation atmosphere.
```

### IMG-013: 비례판 문양 (scroll_pattern)
- **등장**: Scene 7
- **수학 도해 — SVG로 충분**

### IMG-014: 닮음비·넓이비·부피비 (area_volume_ratio)
- **등장**: Scene 5, 7
- **수학 도해 — SVG로 충분**

---

## 우선순위 3 — 있으면 좋은 소품 (옵션)

(아직 없음)

---

## 처리 완료 항목

(생성 완료된 이미지는 여기로 이동)
