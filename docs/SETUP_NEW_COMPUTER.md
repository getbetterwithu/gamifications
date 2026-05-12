# 새 컴퓨터에서 작업 환경 세팅

집(Mac) ↔ 회사(Windows) 컴퓨터 간 작업 동기화 가이드.
**터미널/PowerShell에 그대로 복사·붙여넣기** 하면 됩니다.

> 💡 **회사 컴퓨터 = Windows**, 집 컴퓨터 = Mac. 각 단계에 두 OS 명령어를 함께 적어두었습니다.

---

## 📥 처음 한 번만 — 회사 컴퓨터에 프로젝트 받아오기

### 1단계: Workspace 폴더 만들기

#### 🍎 Mac (터미널)
```bash
mkdir -p ~/Workspace/00_projects-and-labs
cd ~/Workspace/00_projects-and-labs
```

#### 🪟 Windows (PowerShell)
```powershell
New-Item -ItemType Directory -Force -Path "$HOME\Workspace\00_projects-and-labs"
cd "$HOME\Workspace\00_projects-and-labs"
```

> ⚠️ `gamifications` 폴더는 직접 만들지 마세요. 다음 단계의 `clone`이 알아서 만들어줍니다.

---

### 2단계: GitHub에서 프로젝트 clone

**Mac/Windows 공통**:

#### 방법 A: HTTPS (간단, 추천)
```bash
git clone https://github.com/getbetterwithu/gamifications.git
```
→ 처음 한 번 GitHub 로그인 요구할 수 있음. `getbetterwithu` 계정으로 로그인.

#### 방법 B: SSH (집과 동일한 SSH 키 환경이면)
```bash
git clone git@github-getbetterwithu:getbetterwithu/gamifications.git
```

---

### 3단계: Claude Code 메모리 복원 (⭐ 중요)

집에서 작업한 **장기 메모리(보류 작업, 결정 사항)** 를 회사 컴퓨터로 옮기는 단계.

#### 🪟 Windows
```powershell
# 1. 메모리 저장 폴더 만들기 (Windows에서 처음 클로드 코드 실행하면 자동 생성되지만, 미리 만들어둬도 OK)
New-Item -ItemType Directory -Force -Path "$HOME\.claude\projects\-C--Users-$env:USERNAME-Workspace-00-projects-and-labs-gamifications\memory"

# 2. 저장소 안 .claude-memory/ 내용을 메모리 폴더로 복사
cd "$HOME\Workspace\00_projects-and-labs\gamifications"
Copy-Item -Path ".claude-memory\*" -Destination "$HOME\.claude\projects\-C--Users-$env:USERNAME-Workspace-00-projects-and-labs-gamifications\memory\" -Force
```

> ⚠️ Windows에서 Claude Code 프로젝트 폴더명은 경로를 `-`로 인코딩합니다. **회사 컴퓨터에서 한 번 Claude Code를 `gamifications/` 폴더에서 열어보면** 자동으로 해당 폴더가 생성됩니다. 그 폴더명을 확인 후 위 경로를 보정하세요.
>
> 폴더명 확인 방법:
> ```powershell
> ls "$HOME\.claude\projects\"
> ```

#### 🍎 Mac (참고용 — 이미 설정된 환경)
```bash
mkdir -p ~/.claude/projects/-Users-$USER-Workspace-00-projects-and-labs-gamifications/memory
cd ~/Workspace/00_projects-and-labs/gamifications
cp .claude-memory/*.md ~/.claude/projects/-Users-$USER-Workspace-00-projects-and-labs-gamifications/memory/
```

---

### 4단계: 폴더 진입 + VSCode로 열기

#### 🍎 Mac
```bash
cd ~/Workspace/00_projects-and-labs/gamifications
code .
```

#### 🪟 Windows
```powershell
cd "$HOME\Workspace\00_projects-and-labs\gamifications"
code .
```

`code` 명령이 없으면 VSCode를 열고 메뉴에서 **File → Open Folder → `Workspace/00_projects-and-labs/gamifications`** 선택.

---

### 5단계: Claude Code 부팅

VSCode 안에서 Claude Code 탭을 열고:

```
부팅
```

→ Claude가 [CLAUDE.md](../CLAUDE.md) 의 진입 프로토콜에 따라 현재 진행 상황을 보고하고, 다음 작업을 안내합니다.

---

### 6단계: 작동 확인

#### 🍎 Mac
```bash
open unit4_tri_quad/games/stage1_quadrilaterals/index.html
```

#### 🪟 Windows
```powershell
start unit4_tri_quad\games\stage1_quadrilaterals\index.html
```

브라우저에서 게임 타이틀 화면이 뜨면 성공.

> 💡 더 안전하게 보려면 로컬 서버 띄우기:
> ```bash
> python -m http.server 8765
> # 또는 python3
> ```
> → 브라우저에서 `http://localhost:8765/unit4_tri_quad/games/stage1_quadrilaterals/`

---

## 🔄 매일 작업 시작 전 — 최신 내용 받아오기

**Mac/Windows 공통**:

```bash
cd ~/Workspace/00_projects-and-labs/gamifications   # Mac
cd "$HOME\Workspace\00_projects-and-labs\gamifications"   # Windows (PowerShell)

git pull
```

그 다음 메모리도 sync:

#### 🪟 Windows
```powershell
Copy-Item -Path ".claude-memory\*" -Destination "$HOME\.claude\projects\-C--Users-$env:USERNAME-Workspace-00-projects-and-labs-gamifications\memory\" -Force
```

#### 🍎 Mac
```bash
cp .claude-memory/*.md ~/.claude/projects/-Users-$USER-Workspace-00-projects-and-labs-gamifications/memory/
```

> ⚠️ 작업 시작 전에 **항상** 먼저 `git pull` + 메모리 복사. 안 그러면 충돌·맥락 단절 발생.

---

## 💾 작업 끝나고 — 변경사항 올리기

작업 중 새 메모리가 추가됐을 수 있으므로, push 전에 **메모리도 git으로 다시 옮기기**:

#### 🪟 Windows
```powershell
cd "$HOME\Workspace\00_projects-and-labs\gamifications"

# 메모리 → 저장소 .claude-memory/ 로 역방향 복사
Copy-Item -Path "$HOME\.claude\projects\-C--Users-$env:USERNAME-Workspace-00-projects-and-labs-gamifications\memory\*.md" -Destination ".claude-memory\" -Force

git add .
git commit -m "오늘 작업한 내용 한 줄 요약"
git push
```

#### 🍎 Mac
```bash
cd ~/Workspace/00_projects-and-labs/gamifications

# 메모리 → 저장소 .claude-memory/ 로 역방향 복사
cp ~/.claude/projects/-Users-$USER-Workspace-00-projects-and-labs-gamifications/memory/*.md .claude-memory/

git add .
git commit -m "오늘 작업한 내용 한 줄 요약"
git push
```

> 또는 Claude Code 안에서 **"메모리 동기화하고 commit·push해줘"** 라고 시키면 알아서 처리.

---

## 🆘 자주 발생하는 문제 + 해결

### Q1. `git: command not found` (Windows·Mac)
**원인**: Git이 설치 안 됨.
**해결**:
- Mac: `xcode-select --install`
- Windows: https://git-scm.com 에서 Git for Windows 다운로드 → 설치 시 기본 옵션 유지

### Q2. `python` 또는 `python3` 명령이 없음
**해결**:
- Mac: 기본 설치돼 있음. 없으면 `brew install python3`
- Windows: https://python.org 에서 다운로드, 설치 시 **"Add Python to PATH" 체크**

### Q3. `code .` 했는데 VSCode가 안 열림
**원인**: VSCode가 PATH에 등록 안 됨.
**해결**:
- Mac: VSCode 안에서 `Cmd+Shift+P` → "Shell Command: Install 'code' command in PATH"
- Windows: VSCode 안에서 `Ctrl+Shift+P` → 동일

### Q4. `Permission denied (publickey)` (SSH clone 실패)
**원인**: SSH 키가 등록 안 됨.
**해결**: HTTPS 방식 사용 (위 2단계 방법 A).

### Q5. `git pull` 했더니 충돌 (conflict) 발생
**원인**: 양쪽 컴퓨터에서 같은 파일을 다르게 수정.
**해결**: Claude Code에 **"git 충돌 해결해줘"** 시키기.

### Q6. `git push` 거부됨 (`rejected`)
**원인**: 반대편 컴퓨터에서 먼저 push한 변경이 있음.
**해결**:
```bash
git pull
git push
```

### Q7. 메모리 폴더명이 맞는지 모르겠다 (Windows)
**확인**:
```powershell
ls "$HOME\.claude\projects\"
```
→ 출력된 폴더 중 `gamifications` 포함된 것의 이름을 사용. 처음엔 비어있을 수 있으니, Claude Code를 `gamifications/` 폴더에서 한 번 실행한 후 다시 확인.

### Q8. clone 끝났는데 폴더가 어디 있는지 모르겠음
**확인**:
- Mac: `ls ~/Workspace/00_projects-and-labs/`
- Windows: `ls "$HOME\Workspace\00_projects-and-labs\"`
→ `gamifications` 폴더가 보여야 정상.

---

## 🚦 권장 워크플로우

```
[집 Mac]
1. 작업 시작 → git pull + 메모리 복사 (저장소 → ~/.claude/.../memory/)
2. 작업 진행 (Claude Code가 자동으로 메모리 갱신)
3. 작업 끝 → 메모리 역복사 (~/.claude/.../memory/ → 저장소 .claude-memory/) → git add → commit → push
4. 컴퓨터 끄기

         ↓ (회사로 이동)

[회사 Windows]
1. 작업 시작 → git pull + 메모리 복사
2. 작업 진행
3. 작업 끝 → 메모리 역복사 → git add → commit → push
4. 컴퓨터 끄기

         ↓ (집으로 이동)

[집 Mac] ... 반복
```

### ⛔ 절대 하지 말 것
- 양쪽 컴퓨터에서 **동시에** 작업 (충돌 발생)
- 작업 시작 전 `git pull` + 메모리 복사 건너뛰기
- 작업 끝나고 메모리 역복사·`git push` 안 하고 컴퓨터 끄기

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

clone 전에 확인:

#### 🪟 Windows (PowerShell)
```powershell
git --version           # 예: git version 2.xx
python --version        # 예: Python 3.xx
python -c "from PIL import Image; print('OK')"
```

#### 🍎 Mac
```bash
git --version
python3 --version
python3 -c "from PIL import Image; print('OK')"
```

### 없으면 설치

#### 🪟 Windows
- **Git**: https://git-scm.com/download/win
- **Python**: https://python.org/downloads (설치 시 "Add to PATH" 체크)
- **Pillow**: `pip install Pillow` (또는 `python -m pip install Pillow`)
- **VSCode**: https://code.visualstudio.com/download
- **Claude Code 확장**: VSCode Marketplace에서 검색 + 설치

#### 🍎 Mac
- **Git**: `xcode-select --install`
- **Python**: 기본 설치됨 (없으면 `brew install python3`)
- **Pillow**: `pip3 install Pillow`

---

**마지막 업데이트**: 2026-05-13
