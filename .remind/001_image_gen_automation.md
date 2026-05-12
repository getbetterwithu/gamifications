---
id: 001
title: 이미지 생성 자동화 시스템 구축 (Google AI Studio API)
created: 2026-05-12
trigger:
  - "다음 단원 시작 (unit6 이상)"
  - "캐릭터 추가 일러스트 작업 시작 (새 캐릭터 표정·포즈 등)"
  - "unit5_similarity Stage 1 게임 완성 직후 (Stage 2로 넘어가기 전)"
  - "이미지 50장 이상 생성 필요한 작업 등장 시"
priority: medium
status: pending
---

## 무엇

배경/캐릭터 PNG를 Gemini 웹에 매번 복붙하는 대신, Python 스크립트로 Google AI Studio API (나노바나나 = Gemini 2.5 Flash Image) 호출하여 일괄 생성하는 시스템.

## 왜 (지금이 적기인 이유)

- 5단원 × 9장 = 45장 + 캐릭터 25장 + Stage별 추가 = 100장 넘게 생성 예정
- 단원 추가될 때마다 복붙 30분~1시간 반복 → 자동화 시 단원당 5분으로 단축
- 사용자가 명시적으로 "여러 단원에서 비슷한 게임 계속 만들 예정" 이라고 함
- 비용 1단원당 약 $0.36, 5단원 다 해도 $2 미만 (무료 티어 있음)
- 화풍 통일도 코드로 강제됨 (수동 복붙보다 일관성 높음)

## 추천안 (사용자가 "처리하자" 했을 때 바로 따라갈 순서)

### 1회 세팅 (15~30분)
1. https://aistudio.google.com 에서 무료 API 키 발급
2. `.env` 파일에 `GEMINI_API_KEY=...` 저장
3. `.gitignore` 에 `.env` 추가 (키 노출 방지)
4. `scripts/generate_images.py` 작성 — 단원/Stage별 prompts.json 읽어 PNG 일괄 생성
5. Python 의존성: `google-genai`, `python-dotenv`

### 매 단원마다 (5분)
1. 단원 폴더에 `images_prompts.json` 작성 (영어 프롬프트 + 파일명 + 출력 폴더)
2. `python scripts/generate_images.py unit6` 실행
3. 5분 뒤 backgrounds/ 또는 characters/ 폴더에 PNG 생성 완료
4. 마음에 안 드는 1~2장만 부분 재생성 (`--only harbor,classroom` 같은 옵션)

### 대안 옵션 (필요 시 검토)
- **fal.ai** (Flux Pro) — 살짝 더 비싸지만 결과물 퀄리티 톱
- **OpenAI gpt-image-1** — ChatGPT API 키 별도, $0.04~0.17/장

## 추가 확장 가능성

- 캐릭터 일러스트 일괄 생성 (5캐릭터 × 5표정 = 25장)
- 단원 PDF에서 시나리오 초안 자동 추출 (Claude API 별도 사용)
- 문제 본문도 단원 PDF 보고 자동 생성

자동화 시스템 한 번 깔아두면 위 확장이 모두 같은 인프라 위에 얹힘.
