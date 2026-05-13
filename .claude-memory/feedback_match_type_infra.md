---
name: match type 게임 엔진 인프라
description: 매칭형 문제 타입 'match' 인프라 — 좌측 항목과 우측 보기 ㄱㄴㄷㄹ 매핑. 향후 단원 재사용 가능
metadata:
  type: feedback
---

매칭형 문제는 게임 엔진의 **`match` type**으로 처리. 2026-05-13 4단원 M02 적용으로 신규 추가됨.

**Why**: 4단원 M02 (PDF 4-5 164쪽 1번)는 원래 "(1)~(4) 각각이 평행사변형인 이유"를 묻는 매칭 의미. choice-multi로 단순화했더니 학습 의도 망가짐. 매칭형 UI가 학습 효과·UX 모두 우위.

**How to apply (problems.js)**:
```js
M02: {
  type: 'match',
  text: '본문',
  figure: 'M02.png',         // 좌측 항목 도형은 한 PNG에 통합
  items: ['(1)', '(2)', '(3)', '(4)'],  // 좌측 항목
  choices: ['보기 ㄱ', '보기 ㄴ', '보기 ㄷ', '보기 ㄹ'],  // 우측 보기 (자동으로 ㄱㄴㄷㄹ 라벨)
  correctMatches: [0, 1, 2, 3],  // items[i] → choices[correctMatches[i]]
  hints: [],
}
```

**구현 위치** (`unit4_tri_quad/games/stage1_quadrilaterals/`):
- `index.html`: CSS `.match-grid` / `_buildProblemUi`의 `match` 분기 / `submitMatch()` / `_showAnswerReveal` 매칭 정답 표시 / responseArea querySelector
- `storyboard.html`: renderProblem 안 `pdata.type === 'match'` 분기

**채점 정책**: 모든 (1)~(N) 매핑이 정답과 일치해야 정답. 한 개라도 다르면 오답 (부분점수 없음).

**향후 재사용**: 5단원 이후 단원에서도 매칭형 문제 등장 시 같은 type 사용. 새 게임 폴더 만들 때 위 5곳 코드 복사.

**관련**: [[project_unit4_stage1_progress]]
