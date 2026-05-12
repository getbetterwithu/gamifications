# gamifications — 수학 게임 프로젝트

## 개요
중학교 수학 단원별 복습용 비주얼노벨 + 육성 시뮬레이션 게임을 만드는 곳.
세계관: 고대 그리스, **피타고라스 학당**. 캐릭터 5명(폴리곤·피타고라스·탈레스·다이달로스·이리스).
시간 흐름: **4단원(사각형) → 5단원(닮음)**. 4단원에서는 주인공이 "폴리곤"(신입), 5단원에서는 별명 "시밀러"(닮음).

## 진입 프로토콜

이 프로젝트에서 "부팅" / "체크인" 매직워드를 받으면 다음 순서로 진행:

1. **메모리 동기화 확인** — `.claude-memory/` 폴더가 git에 들어있고, 실제 메모리 시스템(`~/.claude/projects/.../memory/`)과 sync 되어 있는지 확인. 안 됐으면 [docs/SETUP_NEW_COMPUTER.md](docs/SETUP_NEW_COMPUTER.md)의 sync 명령으로 복원.

2. **현재 상황 스냅샷 출력** — 아래 [📍 현재 진행 상황](#-현재-진행-상황) 섹션을 사용자에게 그대로 보여줌.

3. **사용자에게 다음 액션 안내** — 어떤 작업을 이어갈지 사용자가 결정. 그 후 매직워드 받으면 본격 작업.

## 워크플로우

- 단원별 폴더: `unit{N}_{topic}/`
- 각 단원 안에 `docs/`, `games/`, `characters/`, `textbook/` 구조
- 게임은 HTML/CSS/JS 단일 웹앱 (크롬북에서 바로 실행)
- 평가 시스템: 첫 시도 정답만 점수 부여 + 오답 시 재시도 + 힌트 단계별 표시 + 3회 실패 시 정답 공개·미해결 기록 + PDF 리포트 생성

## 결과물 저장
워크스페이스 규칙에 따라 `~/Workspace/99_outputs/gamifications/{YYYY-MM-DD}_{주제}/` 사용. 단, 학생 PDF 리포트는 게임 안에서 동적 생성·다운로드되므로 별도 저장 불필요.

---

## 📍 현재 진행 상황 (2026-05-13)

### 완료
- **5단원 (닮음)** — 게임 완성, Gemini 배경 9장, 시나리오 12 Scene
- **4단원 (사각형)** — 게임 거의 완성:
  - 시나리오 12 Scene + 엔딩 ABC 코드화
  - 12개 문제 데이터 + 도형 PNG 8장 (PDF 캡처)
  - 캐릭터 5명 × 5표정 (5단원과 동일 자산 + 4단원 폴더에 사본)
  - Gemini 배경 5장 (entrance, yard, yard_sunset, award_hall, title) + 5단원 재활용 2장 (garden, corridor)
  - 평가 시스템 (첫 시도 정답·재시도·힌트·재과제 기록)
  - 스토리보드 검수 HTML
- **GitHub 푸시 완료** — `getbetterwithu/gamifications` (private)

### 보류 작업 (메모리에 기록됨)
1. **4단원 도형 PNG → SVG 전환** ([.claude-memory/project_pending_svg_conversion.md](.claude-memory/project_pending_svg_conversion.md))
   - 현재 도형은 PDF에서 캡처한 PNG. 게임 UI와 시각 이질감 있음. SVG로 직접 그리기.
   - 3~5시간 작업
2. **4단원 문제 정답 검수** ([.claude-memory/project_pending_answer_review.md](.claude-memory/project_pending_answer_review.md))
   - Claude가 직접 계산한 정답 12개 중 일부(M06, M08~M10, S02 등) 정확도 미확인
   - 검수 전용 HTML 또는 markdown 만들기
3. **GitHub Pages 배포 결정** — 저장소 public 전환 + Pages 활성화 + concept-edtech-planner의 game-hub.html에 카드 추가
   - 저작권 이슈(교과서 도형 PNG)로 SVG 전환 먼저 권장

### 그 후 (5단원 재구성)
- 사용자가 5단원 소단원 "바로 확인하기" 문제 제공 → 5단원 시나리오 완전히 갈아엎기 → 코드화
- 인물 그림·재활용 배경은 보존, 시나리오·문제는 새로
- 자세한 계획: [.claude-memory/project_unit5_rebuild_plan.md](.claude-memory/project_unit5_rebuild_plan.md)

---

## 핵심 결정 사항

- **주인공 이름**: 4단원 = 폴리곤 / 5단원 = 시밀러 (별명)
- **다이달로스 톤**: 4단원에서 더 거만 → 사건 풀면서 인정 시작. 5단원에서 완전한 동료
- **이리스 톤**: 4단원에서 폴리곤과 처음 만남. 어색하지만 통찰
- **문제 출처**: 교과서 소단원 "바로 확인하기"를 그대로 사용 (4단원 = 405·406, 5단원 = 향후 사용자 제공)

---

## 새 컴퓨터에서 시작할 때
👉 [docs/SETUP_NEW_COMPUTER.md](docs/SETUP_NEW_COMPUTER.md) 참고 (Mac + Windows 양쪽 가이드 + `.claude-memory/` 복원 방법 포함)
