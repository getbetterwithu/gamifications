// 페이로드 검증: 다시풀이 화면 진입 시 페이로드가 표준에 맞는지 확인
// 형식 어긋나면 화면을 띄우지 않고 에러를 표시한다.
//
// 표준은 PAYLOAD_SPEC.md 참조.

const PROBLEM_TYPES = ['ox', 'choice', 'choice-multi', 'shortAnswer', 'shortAnswer-pair', 'match'];

function validatePayload(payload) {
  const errors = [];

  if (!payload || typeof payload !== 'object') {
    return { valid: false, errors: ['payload가 객체가 아닙니다.'] };
  }

  // meta
  const m = payload.meta;
  if (!m || typeof m !== 'object') {
    errors.push('meta가 없습니다.');
  } else {
    if (!m.unitTitle) errors.push('meta.unitTitle 누락');
    if (!m.studentName) errors.push('meta.studentName 누락');
    if (typeof m.totalProblems !== 'number') errors.push('meta.totalProblems 누락 또는 잘못된 타입');
    if (typeof m.firstTryCorrect !== 'number') errors.push('meta.firstTryCorrect 누락 또는 잘못된 타입');
    if (!m.figureBase && typeof m.figureBase !== 'string') errors.push('meta.figureBase 누락 (도형 없을 시 빈 문자열 허용)');
  }

  // wrongProblems
  if (!Array.isArray(payload.wrongProblems)) {
    errors.push('wrongProblems 배열이 없습니다.');
  } else if (payload.wrongProblems.length === 0) {
    errors.push('wrongProblems가 비어있습니다. (틀린 문제 없음 시 다시풀이 화면 진입하지 않아야 함)');
  } else {
    payload.wrongProblems.forEach((p, i) => {
      const where = `wrongProblems[${i}]`;
      if (!p.id) errors.push(`${where}.id 누락`);
      if (!p.title) errors.push(`${where}.title 누락`);
      if (!p.text) errors.push(`${where}.text 누락`);
      if (!PROBLEM_TYPES.includes(p.type)) {
        errors.push(`${where}.type "${p.type}"이 지원하지 않는 유형. (${PROBLEM_TYPES.join(', ')})`);
        return;
      }

      // 타입별 필수 필드
      switch (p.type) {
        case 'ox':
          if (!['O', 'X'].includes(p.correctAnswer)) errors.push(`${where}.correctAnswer는 'O' 또는 'X'`);
          if (!['O', 'X'].includes(p.myAnswer)) errors.push(`${where}.myAnswer는 'O' 또는 'X'`);
          break;
        case 'choice':
          if (!Array.isArray(p.choices) || p.choices.length < 2) errors.push(`${where}.choices 배열 필요`);
          if (typeof p.correctChoice !== 'number') errors.push(`${where}.correctChoice 숫자 필요`);
          if (typeof p.myChoice !== 'number') errors.push(`${where}.myChoice 숫자 필요`);
          break;
        case 'choice-multi':
          if (!Array.isArray(p.choices)) errors.push(`${where}.choices 배열 필요`);
          if (!Array.isArray(p.correctChoices)) errors.push(`${where}.correctChoices 배열 필요`);
          if (!Array.isArray(p.myChoices)) errors.push(`${where}.myChoices 배열 필요`);
          break;
        case 'shortAnswer':
          if (typeof p.correctAnswer !== 'string') errors.push(`${where}.correctAnswer 문자열 필요`);
          if (typeof p.myAnswer !== 'string') errors.push(`${where}.myAnswer 문자열 필요`);
          break;
        case 'shortAnswer-pair':
          if (!Array.isArray(p.fields) || p.fields.length !== 2) errors.push(`${where}.fields는 길이 2 배열`);
          if (!Array.isArray(p.myFields) || p.myFields.length !== 2) errors.push(`${where}.myFields는 길이 2 배열`);
          break;
        case 'match':
          if (!Array.isArray(p.items)) errors.push(`${where}.items 배열 필요`);
          if (!Array.isArray(p.choices)) errors.push(`${where}.choices 배열 필요`);
          if (!Array.isArray(p.correctMatches)) errors.push(`${where}.correctMatches 배열 필요`);
          if (!Array.isArray(p.myMatches)) errors.push(`${where}.myMatches 배열 필요`);
          break;
      }
    });
  }

  return { valid: errors.length === 0, errors };
}

window.validatePayload = validatePayload;
