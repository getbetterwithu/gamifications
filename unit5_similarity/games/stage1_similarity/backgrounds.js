// ===== 배경 이미지 라이브러리 (5단원 닮음 — 신전 건축편) =====
// PNG는 ./backgrounds/ 폴더. innerHTML 주입이므로 <img> 문자열 그대로 사용.

const BG_IMG_STYLE = 'width:100%;height:100%;object-fit:cover;display:block;';
const bgImg = (file) => `<img src="backgrounds/${file}" style="${BG_IMG_STYLE}" alt="">`;

const BACKGROUNDS = {
  harbor:    bgImg('harbor.png'),     // 도입: 항구의 아침
  yard:      bgImg('yard.png'),       // 신전 건축 현장 (메인 무대)
  warehouse: bgImg('warehouse.png'),  // 소폴로스(상인)의 창고
  classroom: bgImg('classroom.png'),  // 다이달로스 (설계실)
  corridor:  bgImg('corridor.png'),   // 이동 복도
  library:   bgImg('library.png'),    // 피타고라스 (서재)
  basement:  bgImg('basement.png'),   // 북쪽 대장간 입구
  garden:    bgImg('garden.png'),     // 탈레스 (황금비 깨달음 장소)
  title:     bgImg('title.png'),      // 타이틀 / 엔딩

  // 신전 진척 6단계 (같은 앵글로 자람 — 자재 모을 때마다 교체)
  temple_site0: bgImg('temple_site0.png'),  // 진척0 터파기
  temple_site1: bgImg('temple_site1.png'),  // 진척1 벽돌 벽
  temple_site2: bgImg('temple_site2.png'),  // 진척2 유리 천창
  temple_site3: bgImg('temple_site3.png'),  // 진척3 기둥 + 가마
  temple_site4: bgImg('temple_site4.png'),  // 진척4 골조 완성 (회당 빔)
  temple_site5: bgImg('temple_site5.png'),  // 진척5 완성 (노을 + 황금비)
  merchant_camp: bgImg('merchant_camp.png'),// 소폴로스 떠돌이 임시 거처 (warehouse 대체)
};
