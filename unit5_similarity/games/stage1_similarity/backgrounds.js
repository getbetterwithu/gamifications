// ===== 배경 이미지 라이브러리 =====
// PNG 파일은 ./backgrounds/ 폴더에 위치. 1920x1080 권장.
// innerHTML로 주입되므로 <img> 태그 문자열 그대로 사용.

const BG_IMG_STYLE = 'width:100%;height:100%;object-fit:cover;display:block;';
const bgImg = (file) => `<img src="backgrounds/${file}" style="${BG_IMG_STYLE}" alt="">`;

const BACKGROUNDS = {
  harbor:    bgImg('harbor.png'),     // Scene 1: 항구의 아침
  classroom: bgImg('classroom.png'),  // Scene 2: 학당 강의실
  yard:      bgImg('yard.png'),       // Scene 3, 8, 9: 학당 중앙 마당
  corridor:  bgImg('corridor.png'),   // Scene 4: 학당 복도
  warehouse: bgImg('warehouse.png'),  // Scene 5: 창고 (비례판 사라진 현장)
  garden:    bgImg('garden.png'),     // Scene 6: 학당 정원
  library:   bgImg('library.png'),    // Scene 7: 도서관
  basement:  bgImg('basement.png'),   // Scene 10: 지하 보관고 입구
  title:     bgImg('title.png'),      // 타이틀 화면
};
