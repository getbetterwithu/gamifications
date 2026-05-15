# 다시풀이 화면 (submit_prototype)

학생이 게임을 마친 뒤, **틀린 문제만 모아 한 페이지씩 보여주고 펜으로 풀이를 직접 작성**한 다음 **PDF로 다운로드 또는 구글 클래스룸에 자동 제출**하는 화면입니다.

> **현재 상태 (2026-05-15)**: 프로토타입 단계. 게임과 연동되어 있지 않음. 5단원 게임 재구성 시 본격 통합 예정.

---

## 왜 별도 폴더인가

이 시스템은 **모든 단원·모든 게임이 공통으로 호출하는 단일 화면**으로 설계됨. 단원별로 따로 만들지 않음.

```
4단원 게임 ─┐
            │ (페이로드)  →  submit_prototype/  →  PDF / 클래스룸 제출
5단원 게임 ─┤
            │
6단원 게임 ─┘  (앞으로 추가될 게임들)
```

→ 이 화면을 한 번만 잘 만들면 모든 게임에 적용됨.

---

## 핵심 개념: 페이로드 (Payload)

게임 → 다시풀이 화면 사이는 **표준 페이로드 객체** 하나로만 통신함. 다시풀이 화면은 어느 단원에서 호출되는지 모르고, 알 필요도 없음.

페이로드 형식 정의: [PAYLOAD_SPEC.md](PAYLOAD_SPEC.md)

```js
// 게임 쪽
const payload = buildPayload(gameState, studentInfo);  // 각 게임이 구현
sessionStorage.setItem('reviewPayload', JSON.stringify(payload));
window.location.href = '../../../submit_prototype/';

// 다시풀이 화면 쪽 (app.js)
const payload = JSON.parse(sessionStorage.getItem('reviewPayload'));
// → 페이로드만으로 화면 렌더링 + 필기 + PDF 다운로드
```

---

## 파일 구성

| 파일 | 역할 |
|---|---|
| `PAYLOAD_SPEC.md` | **시스템의 약속 문서**. 게임이 만들 페이로드 형식 정의. |
| `demo-payload.js` | 프로토타입용 더미 페이로드 (4단원 8문제 데이터). 게임 연결 후 삭제 예정. |
| `payload-validator.js` | 페이로드 검증 (형식 확인 → 잘못되면 에러 화면) |
| `pages.js` | 표지 + 문제 유형 6종 (ox/choice/choice-multi/shortAnswer/shortAnswer-pair/match) 렌더러 + KaTeX 수식 |
| `ink-canvas.js` | 펜 필기 캔버스 (Pointer Events·언두·리두·지우개) |
| `app.js` | 메인 (네비·툴바·키보드·PDF 다운로드) |
| `styles.css` | 가로 A4 레이아웃 (좌측 문제·우측 풀이 영역) |
| `index.html` | 진입점 |

---

## 5단원 통합 시 해야 할 일

1. **5단원 게임에 `build-payload.js` 추가** — 게임 상태 → 페이로드로 변환하는 함수
2. **게임 엔딩에 "다시풀이로 이동" 버튼** — 페이로드를 sessionStorage에 저장 + 이 화면으로 이동
3. **`demo-payload.js` 삭제** — 실제 페이로드가 들어오므로 더미 불필요
4. **구글 로그인 관문 추가** (게임 진입 시) — 학생 정보를 페이로드에 포함시키기 위해
5. **클래스룸 자동 제출 기능 추가** — 현재는 PDF 다운로드만. Drive 업로드 + Classroom API 호출 추가.

작업 순서·기술 결정은 합의된 로드맵 참조.

---

## 로컬 테스트

```bash
# 프로젝트 루트에서
python3 -m http.server 8765

# 브라우저: http://localhost:8765/submit_prototype/
# → 더미 페이로드(demo-payload.js)로 4단원 8문제 시연
```

---

## 지원하는 문제 유형

| 유형 | 설명 | 4단원 사례 |
|---|---|---|
| `ox` | O/X | M01, M04 |
| `choice` | 단일 객관식 | S01 |
| `choice-multi` | 다중 객관식 | M06 |
| `shortAnswer` | 단답형 | M09, M10, S02 |
| `shortAnswer-pair` | 두 칸 단답 | M03, M05, M07, M08 |
| `match` | 매칭 (좌 항목 ↔ 우 보기) | M02 |

새 유형이 필요하면 `pages.js`의 `renderChoicesOrAnswers()`·`renderMyAnswerAndCorrect()`·`payload-validator.js`에 한 케이스씩 추가.

---

## 키보드 단축키 (다시풀이 화면)

| 키 | 동작 |
|---|---|
| `← →` | 페이지 이동 |
| `Z` / `Shift+Z` | 언두 / 리두 |
| `P` / `E` | 펜 / 지우개 |
