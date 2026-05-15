# 오답 페이로드 표준 (Payload Spec)

이 문서는 **게임 → 다시풀이 화면** 사이에 오가는 데이터의 표준 규격을 정의합니다.
모든 단원의 모든 게임이 이 규격에 맞게 오답 데이터를 만들면, 다시풀이 화면은 단원을 가리지 않고 동일하게 작동합니다.

---

## 핵심 원칙

1. **다시풀이 화면은 어느 단원인지 모른다** — 페이로드만 보고 렌더링한다.
2. **게임은 다시풀이 화면의 내부 구현을 모른다** — 페이로드만 만들어 넘긴다.
3. **새 단원·새 스테이지 추가 = 페이로드 생성 함수 추가**. 다시풀이 화면은 손대지 않는다.

---

## 페이로드 구조

```typescript
{
  // ─── 메타 정보 ───
  meta: {
    unitTitle: string,         // 예: "사각형의 시험 (4단원 stage1)"
    unitId: string,            // 예: "unit4_stage1" — 클래스룸 과제 ID 매핑용
    studentName: string,       // 예: "허철호"
    studentEmail?: string,     // 구글 로그인 후 채워짐 (Phase 2+)
    completedAt: string,       // ISO 8601 — "2026-05-14T15:32:00+09:00"
    totalProblems: number,     // 전체 문제 수 (예: 12)
    firstTryCorrect: number,   // 첫 시도 정답 수
    figureBase: string,        // 도형 PNG 폴더 상대 경로
                               // 예: "../unit4_tri_quad/games/stage1_quadrilaterals/problems/"
  },

  // ─── 다시 풀어야 할 문제들 (학생이 첫 시도에 못 푼 것) ───
  wrongProblems: Problem[]
}
```

### Problem 공통 필드

```typescript
{
  id: string,             // "M02", "S01" 등 — 게임 내 식별자
  type: ProblemType,      // 아래 6종 중 하나
  title: string,          // 예: "문제 M02 — 평행사변형 판별 조건"
  text: string,           // 본문. KaTeX 수식($...$) 포함 가능. 줄바꿈은 \n
  figure?: string,        // 도형 파일명 (figureBase 기준). 없으면 생략
  hint?: string,          // 1단계 힌트 텍스트. 없으면 생략
}
```

### 문제 유형 (ProblemType)

다시풀이 화면이 지원하는 6가지 유형. **새 유형이 필요하면 화면에 렌더러를 1개 추가하면 된다.**

#### 1. `"ox"` — O/X 문제

```typescript
{
  type: "ox",
  correctAnswer: "O" | "X",
  myAnswer: "O" | "X",         // 학생이 골랐던 답
}
```

#### 2. `"choice"` — 단일 선택 객관식

```typescript
{
  type: "choice",
  choices: string[],            // 보기 텍스트. KaTeX 수식 포함 가능.
  correctChoice: number,        // 정답 인덱스 (0-based)
  myChoice: number,             // 학생이 골랐던 인덱스. -1이면 미응답.
}
```

#### 3. `"choice-multi"` — 다중 선택 객관식

```typescript
{
  type: "choice-multi",
  choices: string[],
  correctChoices: number[],     // 정답 인덱스 배열 (예: [0, 2])
  myChoices: number[],          // 학생이 골랐던 인덱스 배열
}
```

#### 4. `"shortAnswer"` — 단답형

```typescript
{
  type: "shortAnswer",
  askFormat?: string,           // 예: "넓이: ___ cm²" (없어도 됨)
  correctAnswer: string,        // 표시용 정답 (예: "9")
  myAnswer: string,             // 학생이 적었던 답
}
```

#### 5. `"shortAnswer-pair"` — 두 칸 단답

```typescript
{
  type: "shortAnswer-pair",
  fields: [
    { label: string, unit: string, correct: string },  // 예: label="∠x", unit="°", correct="60"
    { label: string, unit: string, correct: string },
  ],
  myFields: [string, string],   // 학생이 적었던 두 답
}
```

#### 6. `"match"` — 매칭 문제

```typescript
{
  type: "match",
  items: string[],              // 좌측 항목 (예: ["(1)", "(2)", "(3)", "(4)"])
  choices: string[],            // 우측 보기 (예: ["ㄱ. ...", "ㄴ. ..."])
  correctMatches: number[],     // items 순서대로 매칭할 choices 인덱스 (예: [1,3,2,0])
  myMatches: number[],          // 학생이 매칭한 인덱스 배열
}
```

---

## 페이로드 전달 방법

게임 → 다시풀이 화면으로 페이로드를 넘기는 방법은 환경에 따라 다르다:

| 방법 | 언제 사용 | 비고 |
|---|---|---|
| `sessionStorage` | 같은 브라우저 세션 내 페이지 전환 | 가장 단순. 추천. |
| URL 파라미터 | 작은 페이로드만 | URL 길이 제한. 보통은 비추. |
| `postMessage` | iframe 임베드 시 | 향후 클래스룸 임베드용 |
| 직접 함수 호출 | 단일 페이지 통합 시 | 동일 페이지 내 SPA |

**기본 방식은 `sessionStorage`**. 키: `"reviewPayload"`.

```js
// 게임 쪽
sessionStorage.setItem('reviewPayload', JSON.stringify(payload));
window.location.href = '../submit_prototype/';

// 다시풀이 화면 쪽
const raw = sessionStorage.getItem('reviewPayload');
const payload = raw ? JSON.parse(raw) : DEMO_PAYLOAD;
```

---

## 검증 (Validation)

다시풀이 화면은 진입 시 페이로드를 **검증**한다. 형식이 맞지 않으면 에러 메시지를 띄우고 종료.

검증 함수: `validatePayload(payload) → { valid, errors[] }`

검증 항목:
- `meta.studentName`, `meta.unitTitle` 필수
- `wrongProblems` 배열, 1개 이상
- 각 문제의 `type`이 6종 중 하나
- 타입별 필수 필드 (예: `ox`는 `correctAnswer`·`myAnswer` 둘 다)

---

## 단원별 페이로드 생성 위치 (장기 계획)

각 게임이 자기 폴더에 `build-payload.js`(또는 인라인 함수)를 두고 그 안에서 페이로드를 만든다.

```
unit4_tri_quad/games/stage1_quadrilaterals/
  └── build-payload.js   ← problems.js + game state → payload

unit5_similarity/games/stage1_similarity/
  └── build-payload.js

unit5_similarity/games/stage2_xxx/
  └── build-payload.js
```

각 함수의 시그니처:
```typescript
buildPayload(gameState, studentInfo) → Payload
```

---

## 향후 확장 (Phase 2+)

- `meta.classroomCourseId`, `meta.classroomAssignmentId` 필드 추가 → 자동 제출 매핑
- `meta.googleSubmissionInfo` 필드 추가 → OAuth 토큰 정보
- `wrongProblems[].aiGradingResult` 필드 추가 → AI 채점 결과 캐싱
