# 5단원 사운드 — AI 음원 생성 프롬프트 (풀세트 · 고대 그리스 + 게임 톤)

> 생성 도구: Suno / Udio 등 AI 음악 생성기. 프롬프트는 영문이 인식 잘 됨(한글 주석 병기).
> **파일은 아래 정확한 이름으로 저장**해서 `unit5_similarity/games/stage1_similarity/audio/` 에 넣어주세요.
> 코드(sounds.js)가 이 이름을 그대로 찾습니다. 형식: **mp3, 44.1kHz**. BGM은 **이음새 없이 루프**되게.

---

## BGM 5종 (배경음악)

### 1. `bgm_main.mp3` — 평상/메인 테마 (S1·5·7·8·10·11·12·13) ★재생성
> 이전 곡은 멜로디가 과해 평상 배경에 부적합. **앰비언트(분위기 중심)** 로 재생성.
> 핵심: 멜로디 라인을 앞세우지 말 것. 드론·패드·잔잔한 반복으로 "깔리는" 음악.

**주력 프롬프트 (앰비언트):**
```
Calm ambient background music for a learning game, NO strong lead melody, ancient Greek Mediterranean atmosphere, soft sustained drone and warm pads with very sparse gentle lyre notes far in the background, light airy texture, slow and unobtrusive, meditative and peaceful, low-key so it never distracts from dialogue, seamless loop, instrumental, slow tempo around 60-65 BPM, minimal, soft dynamics, no percussion or only the faintest soft pulse.
```
**대안 프롬프트 (조금 더 따뜻·서정):**
```
Gentle warm ambient soundscape, ancient Greek mood, soft kithara harmonics and airy aulos breaths floating over a quiet sustained pad, no busy melody, no drums, slow drifting and calm, like a peaceful afternoon at an old temple, very soft and in the background, seamless loop, instrumental, around 60 BPM.
```
길이 ~60–90초 · **루프 O** · **잔잔·은은·멜로디 약하게** (배경에 깔리는 게 목적)
> 팁: 생성 후 "멜로디가 또렷하면" 재생성. 드론/패드가 중심이고 악기는 멀리 들리는 게 정답.

**참고 (작가 피드백):** 기존 5곡 중 ⑤(완성·노을, ending)가 가장 잔잔해 메인에 가까웠으나 메인 테마로는 아쉬움.
→ ⑤의 잔잔한 결을 출발점으로 삼되, **벅참·고조 빼고** 더 평탄·은은하게. 감정 고조 없이 "계속 깔려도 안 질리는" 무던함이 목표.

### 2. `bgm_merchant.mp3` — 상인 흥정 (S3·6)
```
Playful slightly mischievous market theme, ancient Greek bazaar vibe, bouncy plucked lyre and tambourine/frame drum, light comedic bargaining mood, witty and cheerful, seamless loop, instrumental, around 110 BPM.
```
길이 ~60초 · **루프 O** · 익살·경쾌

### 3. `bgm_storm.mp3` — 폭풍 위기 (S2·4)
```
Tense urgent storm danger music, ancient Greek instruments with driving low frame drums and dramatic strings and aulos, rising tension, minor key, sense of a race against time, seamless loop, instrumental, around 125 BPM.
```
길이 ~60초 · **루프 O** · 긴박·어두움 (minor)

### 4. `bgm_boss.mp3` — 다이달로스 보스전 (S9)
```
Intense rivalry confrontation duel music, ancient Greek instruments layered with driving percussion and a determined ostinato, competitive and dramatic, building intensity, minor key, a clever-genius antagonist feel, seamless loop, instrumental, around 130 BPM.
```
길이 ~75초 · **루프 O** · 대립·긴장 (minor)

### 5. `bgm_ending.mp3` — 신전 완성·노을 (S14·15)
```
Triumphant yet warm emotional resolution music, sunset over a finished Greek temple, swelling lyre with soft choir-like pads and gentle aulos, golden and heartfelt, hopeful and uplifting, major key, seamless loop, instrumental, slow around 70 BPM.
```
길이 ~60–90초 · **루프 O** · 벅참·따뜻 (major)

---

## SFX 4종 (효과음)

### 6. `sfx_correct.mp3` — 정답
```
Short bright positive success chime, magical sparkle, cheerful "correct answer" UI sound, warm bell tones, about 1 second.
```
~1초 · 밝은 성공음

### 7. `sfx_wrong.mp3` — 오답
```
Short soft gentle negative tone, not harsh, friendly "try again" UI sound for kids, about 0.8 second.
```
~0.8초 · 부드러운 실패음 (날카롭지 않게)

### 8. `sfx_click.mp3` — 버튼/대사 넘김
```
Short subtle UI tap click, soft wooden or parchment-like, unobtrusive, about 0.2 second.
```
~0.2초 · 잔잔한 클릭

### 9. `sfx_get.mp3` — 황금 비례판 획득 (S13 보상)
```
Special reward acquire shimmer, golden glowing magical sound, sense of obtaining a precious artifact, warm rising sparkle, about 1.5 to 2 seconds.
```
~1.5–2초 · 황금빛 획득음

---

## 정리 (작가용 체크리스트)
- [ ] BGM 5개 + SFX 4개 = **총 9개 파일**
- [ ] 파일명 위와 **정확히 일치** (코드가 그대로 찾음)
- [ ] mp3 형식, BGM은 루프 자연스럽게
- [ ] `unit5_similarity/games/stage1_similarity/audio/` 폴더에 저장
- 받아오시면 Claude가 sounds.js 연결 코드로 즉시 작동시킴 (코드는 미리 깔아둠)
