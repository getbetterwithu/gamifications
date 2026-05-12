// ===== 캐릭터 메타데이터 =====
// 영문 키 ↔ 한국어 이름 + 이미지 경로

const IMG_BASE = '../../characters/split_transparent';
// 캐시 우회용 버전 (이미지 갱신 시 숫자 올림)
const IMG_VERSION = 'v5';
function charImg(role, expression) {
  return `${IMG_BASE}/${role}_${expression}.png?${IMG_VERSION}`;
}

const NAMES = {
  apprentice: '시밀러',
  pythagoras: '피타고라스',
  thales: '탈레스',
  rival: '다이달로스',
  companion: '이리스',
  narrator: '나레이션',
  npc: '조교',
};
