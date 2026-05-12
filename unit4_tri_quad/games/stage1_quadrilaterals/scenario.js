// ===== 시나리오 데이터 (4단원 Stage 1 — 사각형) =====
// 시나리오는 별도 클로드 채팅에 의뢰 후 받아와 채울 예정.
// 일단 골격만 두고 빈 STEPS 배열로 시작.
//
// step types:
//   { type: 'scene', name, bg, clearChars }
//   { type: 'dialog', speaker, expression, position?, text, prop? }
//   { type: 'choice', prompt, options: [{ label, effect, reactKey }] }
//   { type: 'reaction', reactions: { A: {...}, ... } }
//   { type: 'enter', role, expression, position }
//   { type: 'problem',
//       id, kind, topic, difficulty, format,
//       image?: 'M01.png',
//       responseType: 'choice' | 'shortAnswer' | 'ox',
//       choices?: ['①', '②', '③', '④'],
//       correctChoice?: 0,                 // 객관식 정답 인덱스
//       acceptedAnswers?: ['3:5'],         // 단답형 허용 답안
//       hints?: ['힌트1', '힌트2', '힌트3'], // 오답 시 순서대로 표시
//       onCorrect: { stats, dialog },
//       onWrong:   { stats, dialog }        // (참고용 — 새 시스템에선 사용 안 함)
//   }
//   { type: 'ending' }

const STEPS = [
  // === 시나리오 받아오면 여기 채움 ===
  { type: 'scene', name: 'Scene 0 — 임시', bg: 'title', clearChars: true },
  { type: 'dialog', speaker: 'narrator',
    text: '4단원 시나리오는 별도 의뢰 후 작성됩니다. 지금은 응답 시스템 데모만 작동합니다.' },
  { type: 'ending' },
];
