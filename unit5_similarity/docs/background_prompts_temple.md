# 5단원 신전 증축 배경 — Gemini(나노바나나) 생성 가이드

**대상 도구**: Google Gemini 2.5 Flash Image (나노바나나 / Nano Banana) — https://gemini.google.com (구독 중)
**규격**: 1920×1080 PNG (16:9 가로)
**저장 위치**: [`../games/stage1_similarity/backgrounds/`](../games/stage1_similarity/backgrounds/)
**작성일**: 2026-06-07 (시나리오 v2 확정 반영)

> ⚠️ 모든 생성 프롬프트는 **영어로 입력**. 한글 블록은 의미 확인용.
> 💡 **화풍 통일**: 5단원 기존 배경 9장(yard·garden 등)을 만든 **동일 Gemini 채팅에서 이어서** 생성하면 화풍이 자동 통일됩니다.
> ✅ **각 프롬프트는 공통 스타일 문구가 이미 포함된 완성본**입니다. 그대로 한 번에 복붙하세요. (예열 메시지 불필요)

---

## 🎯 왜 이걸 만드는가 (설계 의도)

5단원은 "신전을 함께 지으며 닮음·비례를 익히는" 이야기. 자재를 하나씩 모을 때마다 **신전이 실제로 자라야** 보상감이 생깁니다. 지금은 7개 씬이 전부 같은 `yard.png` 하나라 그 보상이 비어 있습니다 (자문 치명적 약점 #2).
→ **같은 신전이 6단계로 자라는 연속 컷** `temple_site0~5` + 떠돌이 상인 **임시 거처** `merchant_camp`.

---

## 🔑 신전 6컷은 "기준컷 고정 후 증축"으로

6장을 따로 그리면 구도가 제각각이라 "자란다"가 안 보입니다.
**site0 한 장을 먼저 확정** → 그 이미지가 채팅에 떠 있는 상태에서 site1~5를 순서대로 보내면, 각 프롬프트 첫 줄의 "이전 이미지와 동일 앵글" 지시가 작동해 같은 신전이 자랍니다.

> **순서 지킬 것**: site0 → 1 → 2 → 3 → 4 → 5. (각각 별도 메시지)
> 폭풍(어두운) 버전은 따로 안 만듭니다 — 게임이 CSS로 어둡게+비 효과를 입힙니다.

---

# 📜 신전 증축 6컷

---

## 0️⃣ temple_site0.png — 터파기 (★기준컷, 공들여 확정)

### 🇬🇧 복붙용 (완성본)
```
Painted digital illustration background for an educational visual novel, ancient Greek setting (6th century BC, Pythagoras era), warm muted color palette with terracotta, olive, sandstone and soft blue, soft natural lighting, semi-realistic painterly style (NOT anime, NOT photo), no characters, no text, no people, no letters of any kind, wide 16:9 landscape composition 1920x1080, keep the lower-center area visually clean for dialogue.

Subject: A temple construction site on the east side of a Greek academy, at the very beginning of building. The ground is freshly excavated — a marked-out rectangular foundation pit with stakes and guide ropes, piles of fresh-cut sandstone blocks waiting at the side, a few wooden tools and a large blank drafting board on an easel. NO walls and NO columns yet — only the cleared ground and the promise of a building to come. Morning light, Mediterranean hills in the far background, an olive tree to one side. The open foundation pit sits in the mid-ground.
```
### 🇰🇷 참고
학당 동편 신전 부지, 건축의 맨 처음. 막 파낸 직사각형 기초 구덩이 + 말뚝·기준줄, 옆에 갓 자른 사암 블록 더미, 빈 제도판(이젤). **벽·기둥 아직 없음**. 아침 빛, 멀리 지중해 언덕, 측면 올리브 나무.

---

## 1️⃣ temple_site1.png — 벽돌 벽이 서다

### 🇬🇧 복붙용 (완성본)
```
Keep the EXACT same camera angle, composition, lighting, and background layout as the previous temple image. Same painted style, same ancient Greek setting, same warm muted palette, no characters, no text, no people, 16:9 1920x1080, lower-center kept clear.

Only change this: the foundation pit is now filled and the FIRST sandstone brick walls have risen to about waist-to-chest height around the rectangular base. The stone blocks piled at the side are noticeably fewer now (they were used). Everything else — hills, olive tree, drafting board, morning light — stays identical to the previous image.
```
### 🇰🇷 참고
직전과 **동일 앵글·구도·배경**, 변화만: 기초가 메워지고 **첫 사암 벽돌 벽**이 허리~가슴 높이로 올라옴. 옆 블록 더미 줄어듦.

---

## 2️⃣ temple_site2.png — 유리 천창, 빛이 들다

### 🇬🇧 복붙용 (완성본)
```
Keep the EXACT same camera angle, composition, lighting, and background layout as the previous temple image. Same painted style, same ancient Greek setting, same warm muted palette, no characters, no text, no people, 16:9 1920x1080, lower-center kept clear.

Only change this: the brick walls are now taller (above head height), and a wooden roof frame has begun, holding GLASS SKYLIGHT panels through which a bright shaft of sunlight falls into the interior. A warm beam of light now touches the floor inside the walls. Everything else stays identical to the previous image.
```
### 🇰🇷 참고
동일 앵글, 변화만: 벽이 머리 위로 높아지고 **유리 천창**을 끼운 목재 지붕 골조 시작 → 안으로 밝은 햇빛 기둥. 벽 안쪽 바닥에 따뜻한 빛.

---

## 3️⃣ temple_site3.png — 기둥과 가마 불빛

### 🇬🇧 복붙용 (완성본)
```
Keep the EXACT same camera angle, composition, lighting, and background layout as the previous temple image. Same painted style, same ancient Greek setting, same warm muted palette, no characters, no text, no people, 16:9 1920x1080, lower-center kept clear.

Only change this: several tall stone COLUMNS now stand along the structure, solid and clay-filled. Near the site, a small kiln/furnace glows with warm orange fire light (clay being fired), casting a gentle warm glow over the nearby stones. Everything else stays identical to the previous image.
```
### 🇰🇷 참고
동일 앵글, 변화만: **돌기둥 여러 개**가 단단히 섬. 부지 옆 작은 **가마**가 주황 불빛(점토 굽는 중) → 따뜻한 광원.

---

## 4️⃣ temple_site4.png — 골조 완성, 회당만 빔

### 🇬🇧 복붙용 (완성본)
```
Keep the EXACT same camera angle, composition, lighting, and background layout as the previous temple image. Same painted style, same ancient Greek setting, same warm muted palette, no characters, no text, no people, 16:9 1920x1080, lower-center kept clear.

Only change this: the temple's full FRAME is now complete — all columns and the walls are finished. The GLASS SKYLIGHT from before MUST REMAIN clearly visible in the roof, still letting the shaft of sunlight fall inside (do NOT cover it with a solid roof). It clearly looks like a finished temple shell, EXCEPT the central inner hall, which is conspicuously empty and unfinished — a clear rectangular gap left blank, as if waiting for one final measurement. The drafting board on the easel now faintly shows a rectangle with one empty highlighted cell. Everything else stays identical to the previous image.
```
### 🇰🇷 참고
동일 앵글, 변화만: 신전 **골조 전체 완성**(기둥·지붕·벽). 거의 완성 형태인데 **중앙 회당만 비어 있음** — 직사각형 빈 칸. 제도판에 빈 칸 하나 강조된 직사각형이 흐릿하게.

---

## 5️⃣ temple_site5.png — 완성 (노을 + 황금비)

### 🇬🇧 복붙용 (완성본)
```
Keep the EXACT same camera angle and composition as the previous temple image, but change the time of day to SUNSET. Same painted style, same ancient Greek setting, semi-realistic painterly, no characters, no text, no people, 16:9 1920x1080, lower-center kept clear.

Only change this: the temple is now FULLY COMPLETE — the central hall is finished, its proportions visibly elegant like a golden-ratio rectangle. The GLASS SKYLIGHT in the roof MUST REMAIN (do NOT replace it with a solid roof); now it catches the warm sunset glow. The whole scene is bathed in warm sunset light: deep orange and gold sky, long warm shadows, a serene afterglow. The construction tools and material piles are gone — the work is done. A quiet sense of accomplishment.
```
### 🇰🇷 참고
직전과 동일 앵글·구도, **시간만 노을로**. 신전 **완전 완성**(중앙 회당 완성, 황금비 직사각형). 전체 노을빛, 긴 그림자. 공사 도구·자재 사라짐.

---

# 🏕️ merchant_camp.png — 떠돌이 상인의 임시 거처

소폴로스는 정착 상인이 아니라 **떠도는 지혜 상인**. "창고"가 아니라 길가 **임시 천막 노점/야영지** 느낌.

### 🇬🇧 복붙용 (완성본)
```
Painted digital illustration background for an educational visual novel, ancient Greek setting (6th century BC), warm muted color palette with terracotta, olive, sandstone and soft blue, soft natural lighting, semi-realistic painterly style (NOT anime, NOT photo), no characters, no text, no people, no letters of any kind, wide 16:9 landscape composition 1920x1080, keep the lower-center area visually clean for dialogue.

Subject: A wandering merchant's temporary roadside camp. A weathered canvas tent/awning stretched over wooden poles, half-open to reveal goods inside: ceramic jars and amphorae, rolled rugs, a balance scale with weights, small crates and baskets of wares, a low wooden table. Lanterns hang from the tent poles. The camp sits beside a dusty road with Mediterranean scrubland and distant hills. It feels mobile and impermanent — packed-up bundles ready to move on, the air of a traveller who never stays long. Late afternoon warm light.
```
### 🇰🇷 참고
고대 그리스 길가의 떠돌이 상인 임시 야영지. 낡은 천막/차양, 반쯤 열려 안의 물건(도자기 항아리·암포라, 말린 양탄자, 저울·추, 궤짝·바구니, 낮은 탁자)이 보임. 천막 기둥에 매단 등불. 먼지 이는 길가, 지중해 관목지·먼 언덕. **이동성·임시성** — 싸둔 짐 보따리. 늦은 오후 따뜻한 빛.

---

## 📋 체크리스트 (생성 진행용)

저장 위치: `unit5_similarity/games/stage1_similarity/backgrounds/`

**신전 증축 (반드시 순서대로 — 앞 이미지 기준 증축)**
- [ ] `temple_site0.png` — 터파기 (★기준컷)
- [ ] `temple_site1.png` — 벽돌 벽
- [ ] `temple_site2.png` — 유리 천창
- [ ] `temple_site3.png` — 기둥 + 가마
- [ ] `temple_site4.png` — 골조 완성 (회당 빔)
- [ ] `temple_site5.png` — 완성 (노을)

**상인 거처**
- [ ] `merchant_camp.png` — 떠돌이 임시 천막

**합계: 7장** → 다 모이면 "배경 다 받았어" 하면 Claude가 backgrounds.js·scenario.js 연결 처리.

---

## 🔧 7장 모이면 — Claude가 처리할 일 (예고)

1. PNG 7장 → `backgrounds/` 저장 확인
2. `backgrounds.js`에 키 추가 (temple_site0~5, merchant_camp)
3. `scenario.js`의 `[[진척:N]]` 주석 달린 `bg: 'yard'` → 해당 `temple_siteN`으로 교체
   (Scene1→site0, Scene3벽→site1, Scene4빛→site2, Scene5기둥→site3, Scene6골조→site4, Scene10→site5)
4. `bg: 'warehouse'` (상인 장면) → `merchant_camp`로 교체
5. 폭풍/노을 연출은 이미 CSS 날씨효과(`mood`/`weather` 속성)로 적용 완료 — 추가 작업 없음
