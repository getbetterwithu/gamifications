# 5단원 신규 배경 생성 프롬프트

> 스토리 확정 후, 기존 배경보다 장면에 더 맞는 배경을 신규 생성.
> 생성 도구: Gemini 2.5 Flash Image (기존 배경과 동일). 규격 1920×1080(가로) 권장.
> 작성일: 2026-06-06 / 작가: 허준성·허태욱

---

## 공통 스타일 블록 (모든 배경에 복붙 — 기존 9장과 화풍 통일)

```
Painted digital illustration background for an educational visual novel,
ancient Greek setting, warm muted color palette with terracotta, olive, sandstone and soft blue,
soft natural lighting, semi-realistic painterly style (NOT anime, NOT photo),
no characters, no text, no people,
wide 16:9 landscape composition with empty space in the lower-center for dialogue,
high quality, consistent with a Pythagorean academy art style.
```

---

## BG-01: 건축 중인 신전 (temple_construction) — Scene 1·7

기존 yard.png는 "완성된 신전"이라 도입(건축 시작)·실측 장면엔 안 맞음. 공사 현장 신규.

```
[공통 스타일 블록]

Subject: An ancient Greek temple under construction on the east side of an academy,
half-built marble columns with wooden scaffolding around them,
stacked sandstone blocks and building materials on the ground,
some columns complete, others still rising,
a clear work-site atmosphere, morning light, Mediterranean hills in the background.
```
저장: `unit5_similarity/games/stage1_similarity/backgrounds/temple_construction.png`
→ backgrounds.js 키: `temple` (yard 대체)

---

## BG-02: 다이달로스의 설계실 (workshop) — Scene 6

기존 classroom(강의실)보다 "도구·도면이 있는 작업실"이 다이달로스 캐릭터에 맞음.

```
[공통 스타일 블록]

Subject: An ancient Greek architect's workshop room,
wooden drafting tables covered with blueprints and scrolls,
compasses, straightedges, and measuring tools hanging on the walls and resting on tables,
half-finished architectural drawings pinned up,
warm afternoon light through a stone window, scholarly and slightly cluttered.
```
저장: `backgrounds/workshop.png` → 키: `workshop`

---

## BG-03: 황금비의 성소 (golden_hall) — Scene 8·9

탈레스가 황금비를 전수하는 클라이맥스. 신성하고 빛나는 분위기.

```
[공통 스타일 블록]

Subject: A sacred inner sanctuary of an ancient Greek temple at golden hour,
warm golden light streaming through tall columns,
a serene and reverent atmosphere with subtle golden-ratio rectangular patterns in the marble floor and walls,
a sense of mathematical beauty and harmony,
dust motes floating in the light beams, awe-inspiring and calm.
```
저장: `backgrounds/golden_hall.png` → 키: `golden_hall`

---

## 생성 후 작업 (Claude가 처리)
1. 받은 PNG를 backgrounds/ 폴더에 저장
2. backgrounds.js에 키 추가/교체 (temple, workshop, golden_hall)
3. scenario.js의 Scene bg 값 교체 (Scene1·7·10→temple, 6→workshop, 8·9→golden_hall)

## 기존 유지 배경
- warehouse(상인 창고), library(피타고라스 서재), title(타이틀), corridor(이동) → 그대로 사용
- harbor, basement, garden, classroom, yard → 필요 시 보조로
