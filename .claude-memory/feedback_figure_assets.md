---
name: 도형 자산은 PDF 캡처 PNG
description: 문제 도형은 SVG 직접 작성하지 말고 교과서 PDF에서 영역 캡처한 PNG 사용
metadata:
  type: feedback
---

문제 도형 자산은 **교과서 PDF에서 영역 캡처한 PNG**로. SVG 직접 작성 시도하지 말 것.

**Why**: 2026-05-13 4단원 stage1 작업 중 M03·M05 SVG 직접 작성 시도. 좌표·라벨·각도 호·점선 측정 호 등 디테일 잡는 데 도형 한 장당 30분~1시간 소요. 결과물도 PDF 원본보다 못함. 사용자 판단으로 폐기. PDF 캡처 PNG가 가성비 압도적이고 정확도도 100%.

**How to apply**:
- 신규 단원 문제 도형 작업 시 SVG 그리지 말 것
- 사용자가 PDF에서 직접 영역 캡처 → `unit{N}_*/games/*/problems/` 폴더에 `{ID}.png` 형식으로 저장 (예: `M02.png`)
- problems.js의 `figure` 필드에 `'M02.png'` 형태로 참조 (`_figure` 접미사 X)
- 저작권 이슈는 별도 관리 (Pages public 배포 시 인지)

**관련**: [[project_pending_svg_conversion]] (폐기된 작업 기록)
