# 5단원 신규 캐릭터 이미지 생성 프롬프트

> 4단원/5단원 기존 캐릭터 화풍에 맞춘 신규 2명 프롬프트.
> 생성 도구: Gemini 2.5 Flash Image (나노바나나) 권장 — 기존 캐릭터와 동일 도구.
> 작성일: 2026-06-06 / 작가: 허준성·허태욱

---

## 기존 캐릭터 화풍 (참고 기준)

- 반사실적 2D 일러스트, 깔끔한 선화, NOT 디즈니, NOT 일본 비주얼노벨
- 따뜻하고 차분한 색감 (테라코타 + 올리브 악센트)
- 고대 그리스 복장: 키톤(튜닉) + 가죽 벨트 + 다리에 감기는 끈 샌들
- 전신 입상, 정면, 완전 투명 배경
- 출력 규격: 세로 1536급 전신 (기존 시트 2816×1536). 게임 사용 시 표정별 ~560×1536로 잘림. ⚠️ 가로 비율(5:1.5 등)을 강제하면 세로 1120으로 눌려 깨지니 비율 지시 금지. 구도는 4단원 피타고라스와 동일하게 `full-body or three-quarter view`로 전신 명시.

---

## 공통 스타일 블록 (모든 프롬프트에 복붙 — 4단원 검증 프롬프트 그대로)

```
Modern Korean illustrated comic style for tweens (clean line art, semi-realistic anatomy, slightly stylized but not chibi, NOT Disney cartoon, NOT Japanese visual novel, NOT Korean educational manhwa for kids), warm muted color palette with terracotta and olive accents, ancient Greek setting, full-body or three-quarter view, all five characters at the EXACT same height, same camera distance, same eye level, character facing slightly toward viewer, soft natural lighting, fully transparent background (transparent PNG, no background, no checkered pattern), entire character visible without cropping at top or bottom, 2D illustration, no realistic photo style, high quality, consistent character design across all 5 figures.
```

---

## ⭐ 표정 시트 레이아웃 지시 (자르기 최적화 — 모든 캐릭터에 복붙, 4단원 검증 프롬프트 그대로)

기존 캐릭터와 동일하게 **5표정을 가로 한 줄로 나란히**, 표정별 차이를 눈·입 모양까지 명시한다. (비율 강제 금지 — `5:1.5` 같은 가로 납작 지시를 넣으면 세로가 1120으로 눌려 화질·표정이 깨진다. 4단원처럼 비율을 비워두면 세로 1536급으로 나온다.)

```
Generate an expression sheet of this character: place the same character in a single horizontal row, repeated 5 times side by side, ALL 5 figures at identical height, identical pose framing, identical body proportions. Keep face, hair, outfit, and props 100% identical across all 5; only the facial expression changes:
1 (leftmost): neutral, calm, slight closed-mouth smile
2: smiling brightly, mouth open, cheerful and happy
3: surprised, wide eyes, mouth open in a small "O" shape
4: thinking deeply, hand on chin, eyes looking up to the side
5 (rightmost): clearly disappointed and sad, downturned mouth, eyes looking down, eyebrows tilted in a sad shape (NOT scratching head, NOT confused)
Fully transparent background, even spacing between characters, no overlap, each character fully visible without cropping.
```

> 출력 기대: 약 2800×1536 가로 시트(세로 1536급), 5인 등간격. Claude가 이걸 받아 표정별 ~560×1536로 5등분 → 투명 PNG로 저장.

---

## CHAR-01: 테론 (건축가 / architect)

**역할**: 학당 동편에 새 신전을 짓는 건축가. 폴리곤에게 건축에 필요한 것들을 의뢰하는 중심 인물.
**성격/이미지 방향**: 30~40대, 듬직하고 우직한 장인. 단단한 체격. 믿음직한 현장 책임자.

> 생성 방식: **5표정 시트 한 번에** (4단원과 동일, 검증됨). 아래 [공통 스타일 블록] + [표정 시트 레이아웃 블록] + Subject를 모두 합쳐 1회 생성.

```
[공통 스타일 블록]
[표정 시트 레이아웃 블록]

Subject: Theron, a sturdy ancient Greek master builder/architect, 30s-40s,
broad-shouldered and solid build, tanned skin from working outdoors,
short dark hair, a well-groomed short beard, kind but focused expression,
wearing a practical sleeveless terracotta-brown work tunic (exomis style, one shoulder),
a thick leather tool belt with measuring cords and a plumb bob hanging from it,
a rolled architectural blueprint/scroll tucked under one arm,
leather wrist guards, sturdy leather sandals,
standing confidently like a foreman, full body, facing forward, transparent background.
```

**표정 5종** (시트로 한 번에, 또는 개별 생성):
- `neutral` 기본 / `smile` 흐뭇한 미소 / `surprised` 놀람(눈썹 올림) / `thinking` 도면 보며 고민 / `sad` 난처함

저장 경로: `unit5_similarity/characters/split_transparent/architect_{표정}.png`

---

## CHAR-02: 소폴로스 (상인 / merchant)

**역할**: 떠돌이 정보상. 재료의 수치·비밀(벽돌 치수, 유리 무게, 점토 혼합비)을 알고 있어, 문제를 풀면 정보를 내준다.
**이름 의미**: sophos(지혜로운) + poles(파는 자) = "지혜를 파는 자"
**성격/이미지 방향**: 박학다식하고 능청맞은 떠돌이 상인. 온갖 곳을 다녀 물건·지식이 많음. 약간 신비롭고 영리한 분위기.

> 생성 방식: **5표정 시트 한 번에** (4단원과 동일, 검증됨). 아래 [공통 스타일 블록] + [표정 시트 레이아웃 블록] + Subject를 모두 합쳐 1회 생성.

```
[공통 스타일 블록]
[표정 시트 레이아웃 블록]

Subject: Sopolos, a clever well-traveled ancient Greek wandering merchant,
40s-50s, lean and sharp-eyed with a knowing sly smile,
weathered skin from travel, salt-and-pepper hair, a neat pointed beard,
wearing layered travel robes in deep olive and terracotta with a patterned trim (more colorful and exotic than locals),
a wide sash, many small pouches and a leather satchel across the body,
exotic beaded necklace, several scrolls and a small abacus-like counting tool peeking from his bag,
holding up one finger as if about to make a clever offer,
full body, facing forward, transparent background.
```

**표정 5종**:
- `neutral` 능청 기본 / `smile` 흥정하는 미소 / `surprised` 의외라는 놀람 / `thinking` 셈하는 표정 / `sad` 손해 본 척

저장 경로: `unit5_similarity/characters/split_transparent/merchant_{표정}.png`

---

## 생성 후 작업 (Claude가 처리)

1. 생성된 이미지를 표정별로 자르기 + 배경 투명화 (550×1536, sRGB)
2. `unit5_similarity/characters/split_transparent/`에 저장
3. `characters.js`의 NAMES에 추가:
   ```js
   architect: '테론',
   merchant: '소폴로스',
   ```
4. IMG_VERSION 숫자 올림 (캐시 우회)
