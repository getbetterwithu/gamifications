// ===== 캐릭터 메타데이터 =====
// 영문 키 ↔ 한국어 이름 + 이미지 경로

const IMG_BASE = '../../characters/split_transparent';
// 캐시 우회용 버전 (이미지 갱신 시 숫자 올림)
const IMG_VERSION = 'v5';
function charImg(role, expression) {
  return `${IMG_BASE}/${role}_${expression}.png?${IMG_VERSION}`;
}

// 4단원 (사각형 파트) — 주인공 표기는 '폴리곤'.
// 시간 흐름상 4단원이 5단원보다 앞. 5단원에서 '시밀러'라는 별명이 정착됨.
const NAMES = {
  apprentice: '폴리곤',
  pythagoras: '피타고라스',
  thales: '탈레스',
  rival: '다이달로스',
  companion: '이리스',
  narrator: '나레이션',
  npc: '조교',
};
