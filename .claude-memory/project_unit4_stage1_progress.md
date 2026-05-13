---
name: 4단원 stage1 진행 상황
description: 2026-05-13 작업 종료 시점. 정답 검수 + 매칭형 type 인프라 + SVG 폐기 결정 반영
metadata:
  type: project
---

# 4단원 Stage1 진행 상황 (2026-05-13 17시 시점)

## 완료
- **GitHub Pages 배포**: repo public 전환, root `index.html` 허브 카드 작성, Pages 활성화. URL: `https://getbetterwithu.github.io/gamifications/`
- **도형 PNG 8장 재캡처**: 사용자가 PDF에서 직접 캡처 → `problems/{ID}.png` (파일명 `_figure` 접미사 제거). `problems.js` figure 필드 일괄 교체.
- **SVG 전환 작업 폐기**: M03·M05 SVG 시안 작성 후 시간 비효율로 폐기 결정. PDF 캡처 PNG로 대체.
- **매칭형 `match` type 인프라**: index.html에 CSS·UI·submitMatch·정답공개 추가. storyboard.html에도 분기 추가. M02 적용 (choice-multi → match).
- **M06 정답 수정**: `[0,1,2]` → `[0,2]` (AB=DC + AD∥BC는 등변사다리꼴 가능, 평행사변형 보장 X)
- **모바일 viewport**: 4단원·5단원 storyboard.html 양쪽 추가

## 진행 중 — 사용자 정답 검수
사용자가 12문제 정답 검토 중. 결과 수신 대기:
- 받음: M06 (수정 완료), M02 (4)→ㄹ 확정
- **대기 중**: M01, M03, M04, M05, S01 정답 검수 결과

## 4-6 단원 정답 (PDF 직접 확인 완료, 신뢰도 높음)
- M07: x=7 cm, y=90° / M08: x=4 cm, y=40° / M09: 9 cm² / M10: 정사각형 / S02: 200 m²

## 4-5 단원 정답 (PDF 본문 봤지만 풀이 검증 안 됨, 사용자 검수 필요)
- M01: O / M03: ∠x=60°, ∠y=120° / M04: X / M05: x=35, y=4 / S01: O

## 12문제 단원·페이지·문항 매핑
| ID | 단원 | 페이지 | 문항 |
|---|---|---|---|
| M01 | 4-5 | 164 | 개념콕(1) |
| M04 | 4-5 | 164 | 개념콕(2) |
| M02 | 4-5 | 164 | 1번 (4그림) |
| M03 | 4-5 | 164 | 2번 |
| M05 | 4-5 | 164 | 3번 |
| M06 | 4-5 | 164 | 4번 (보기 ㄱㄴㄷ) |
| S01 | 4-5 | 163 | 수학TALK |
| M08 | 4-6 | 172 | 1번 |
| M09 | 4-6 | 172 | 2번 |
| M07 | 4-6 | 172 | 3번 |
| M10 | 4-6 | 172 | 4번 |
| S02 | 4-6 | 172 | 생각약 |

## 다음 세션 진입 시 할 일
1. 사용자에게 정답 검수 결과 요청 (M01·M03·M04·M05·S01)
2. 받은 결과를 problems.js에 반영 + commit/push
3. 게임 브라우저 검증 (특히 M02 매칭형 UI 동작)

## 관련 메모리
- [[feedback_figure_assets]] — 도형 자산은 PDF 캡처 PNG (SVG 직접 그리지 말 것)
- [[feedback_match_type_infra]] — match type 게임 엔진 인프라 향후 단원 재사용 가능
- [[project_pending_svg_conversion]] — 폐기됨 (시간 비효율로 폐기 결정)
