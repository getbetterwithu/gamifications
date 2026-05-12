# 새 컴퓨터에서 작업 환경 세팅

집 ↔ 회사 컴퓨터 간 작업 동기화 가이드.
터미널에 그대로 복사·붙여넣기 하면 됩니다.

---

## 📥 처음 한 번만 — 회사 컴퓨터에 프로젝트 받아오기

### 1단계: Workspace 폴더 구조 만들기

```bash
mkdir -p ~/Workspace/00_projects-and-labs
cd ~/Workspace/00_projects-and-labs
```

> ⚠️ `gamifications` 폴더는 만들지 마세요. 다음 단계의 `clone`이 알아서 만들어줍니다.

### 2단계: GitHub에서 프로젝트 clone

#### 방법 A: HTTPS (간단함, 추천)

```bash
git clone https://github.com/getbetterwithu/gamifications.git
```

→ 처음 한 번 GitHub 로그인을 요구할 수 있음. `getbetterwithu` 계정으로 로그인.

#### 방법 B: SSH (집 컴퓨터와 동일한 환경일 때)

```bash
git clone git@github-getbetterwithu:getbetterwithu/gamifications.git
```

→ `~/.ssh/` 폴더에 `id_ed25519_getbetterwithu` 키와 `config` 파일이 설정돼 있어야 함.

### 3단계: 폴더 진입 + VSCode로 열기

```bash
cd gamifications
code .
```

만약 `code` 명령이 없으면 VSCode를 열고 메뉴에서 **File → Open Folder → `~/Workspace/00_projects-and-labs/gamifications`** 선택.

### 4단계: 작동 확인

```bash
open unit5_similarity/games/stage1_similarity/index.html
```

브라우저에서 게임 타이틀 화면이 뜨면 성공.

---

## 🔄 매일 작업 시작 전 — 최신 내용 받아오기

```bash
cd ~/Workspace/00_projects-and-labs/gamifications
git pull
```

> ⚠️ 작업 시작 전에 **항상** 먼저 pull 하기. 안 그러면 충돌 발생 가능.

---

## 💾 작업 끝나고 — 변경사항 올리기

```bash
cd ~/Workspace/00_projects-and-labs/gamifications
git add .
git commit -m "오늘 작업한 내용 한 줄 요약"
git push
```

> 또는 Claude Code 안에서 "지금까지 작업한 거 commit하고 push해줘"라고 시키면 알아서 처리.

---

## 🆘 자주 발생하는 문제 + 해결

### Q1. `git: command not found`
**원인**: Git이 설치 안 됨.
**해결**:
```bash
xcode-select --install
```
또는 https://git-scm.com 에서 다운로드.

### Q2. `Permission denied (publickey)`
**원인**: SSH 키가 등록 안 됨. HTTPS 방식으로 가는 게 빠름.
**해결**: 위 1단계의 **방법 A (HTTPS)** 사용.

### Q3. clone 끝났는데 폴더가 어디 있는지 모르겠음
**확인**:
```bash
ls ~/Workspace/00_projects-and-labs/
```
→ `gamifications` 폴더가 보여야 정상.

### Q4. `git pull` 했더니 충돌 (conflict) 발생
**원인**: 양쪽 컴퓨터에서 같은 파일을 다르게 수정함.
**해결**: Claude Code에 "git 충돌 해결해줘"라고 시키기. 또는 신중하게:
```bash
git status     # 어떤 파일이 충돌인지 확인
# 충돌 파일을 열어 <<<<< ===== >>>>> 표시를 손으로 정리
git add .
git commit -m "충돌 해결"
git push
```

### Q5. `git push` 했는데 거부됨 (`rejected`)
**원인**: 다른 컴퓨터에서 먼저 push한 변경이 있음.
**해결**:
```bash
git pull       # 먼저 받아오기
git push       # 다시 push
```

---

## 🚦 권장 워크플로우

```
[집 컴퓨터]
1. 작업 시작 → git pull
2. 작업 진행
3. 작업 끝 → git add . → git commit → git push
4. 컴퓨터 끄기

         ↓ (회사로 이동)

[회사 컴퓨터]
1. 작업 시작 → git pull   ← 집에서 push한 내용 받아옴
2. 작업 진행
3. 작업 끝 → git add . → git commit → git push
4. 컴퓨터 끄기

         ↓ (집으로 이동)

[집 컴퓨터]
1. 작업 시작 → git pull   ← 회사에서 push한 내용 받아옴
2. ... 반복
```

### ⛔ 절대 하지 말 것
- 양쪽 컴퓨터에서 **동시에** 작업하기 (충돌 발생)
- 작업 시작 전에 `git pull` 안 하기
- 작업 끝나고 `git push` 안 하고 컴퓨터 끄기

---

## 📁 GitHub Repo 정보

| 항목 | 값 |
|---|---|
| **URL** | https://github.com/getbetterwithu/gamifications |
| **공개 여부** | Private (선생님만 접근 가능) |
| **계정** | getbetterwithu |
| **기본 브랜치** | main |

---

## 🛠️ 회사 컴퓨터에 미리 있어야 하는 것

clone 전에 다음 확인:

```bash
# Git
git --version           # 결과: git version 2.xx.x

# Python 3 (이미지 처리할 때 필요)
python3 --version       # 결과: Python 3.xx.x

# Pillow (이미지 처리 라이브러리)
python3 -c "from PIL import Image; print('OK')"   # 결과: OK
```

### 없으면 설치

```bash
# Git
xcode-select --install

# Python 3 (macOS는 기본 설치돼 있음)

# Pillow
pip3 install Pillow
```

---

**마지막 업데이트**: 2026-05-12
