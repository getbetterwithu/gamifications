// ===== 배경 이미지 라이브러리 (4단원 스테이지 1) =====
// PNG 파일은 ./backgrounds/ 폴더에 위치. 1920x1080 권장.
// innerHTML로 주입되므로 <img> 태그 문자열 그대로 사용.
//
// 생성 가이드: ../../docs/background_prompts.md
// (Gemini 2.5 Flash Image로 5장 생성 + 5단원에서 2장 재활용)

const BG_IMG_STYLE = 'width:100%;height:100%;object-fit:cover;display:block;';
const bgImg = (file) => `<img src="backgrounds/${file}" style="${BG_IMG_STYLE}" alt="">`;

const BACKGROUNDS = {
  entrance:    bgImg('entrance.png'),     // Scene 1: 학당 정문, 이른 아침
  yard:        bgImg('yard.png'),         // Scene 2~7, 9~11: 설계도 안뜰
  garden:      bgImg('garden.png'),       // Scene 8: 나무 그늘 (5단원 재활용)
  yard_sunset: bgImg('yard_sunset.png'),  // Scene 12: 안뜰 노을
  award_hall:  bgImg('award_hall.png'),   // 엔딩 A: 시상 공간
  corridor:    bgImg('corridor.png'),     // 엔딩 B: 학당 복도 (5단원 재활용)
  title:       bgImg('title.png'),        // 타이틀 화면
};
