#!/usr/bin/env python3
"""
캐릭터 5표정 시트 → 표정별 투명 PNG 자동 분할 도구
================================================================
나노바나나(Gemini)로 생성한 "가로 5표정 시트"를 받아
  1) 인물 사이 골(valley)을 찾아 중복 없이 5등분
  2) 외부 배경 + 팔-몸 사이 갇힌 틈까지 모두 투명화 (눈·치아는 보존)
  3) split/ (배경O) 와 split_transparent/ (투명) 양쪽에 저장
하는 검증된 파이프라인. (2026-06 테론·소폴로스 + 기존 5명에 적용 완료)

핵심 교훈 (왜 이 방식인가):
  - 단순 w//5 등분은 인물 간격이 불균등하면 옆 인물 팔이 침범 → 골 기반 분할 필요.
    단, apprentice처럼 균등 배치 시트는 골 검출이 흰옷을 골로 오인하므로
    탐색 범위 ±40%로 넓게 잡고 col 최소점을 쓰면 균등/불균등 모두 안전.
  - 외부 flood-fill만 하면 팔-몸 사이 "갇힌 틈"의 배경(체커)이 안 지워짐.
    → 얼굴 영역(상단 30%)만 제외하고 남은 배경색을 전부 투명화하면
      눈·치아(상단, 흰색)는 보존되고 팔틈(중하단)은 깨끗이 제거됨.
  - 색기반 전체제거는 눈 흰자·치아까지 뚫어 '유령 눈'이 되므로 금지.
  - inpaint(주변색 메우기)는 얼룩이 번져 실패. 투명화가 정답.

사용법:
  python3 split_sheet.py <시트.png> <role키>
  예) python3 split_sheet.py ../images/테론.png architect
  → split/architect_{neutral,smile,surprised,thinking,sad}.png
    split_transparent/architect_*.png  (게임이 읽는 폴더)

배경 판정 임계 is_bg(): 흰/회색 체커 = mn>=120 AND (max-min)<=22.
  생성 배경이 다른 색이면 이 함수만 조정.
"""
import sys
from collections import deque
from PIL import Image

EXPRS = ['neutral', 'smile', 'surprised', 'thinking', 'sad']
FACE_TOP_RATIO = 0.30  # 상단 30%는 눈·치아 보존 위해 갇힌배경 제거 제외


def is_bg(p):
    """흰색/회색 체커 배경인지 (저채도 + 밝거나 중간 밝기)."""
    r, g, b, a = p[0], p[1], p[2], p[3]
    if a < 10:
        return True
    mx, mn = max(r, g, b), min(r, g, b)
    return mn >= 120 and (mx - mn) <= 22


def find_valley_cuts(im):
    """5명 사이 4개 골 x좌표 → [0, c1, c2, c3, c4, W]. 균등/불균등 모두 대응."""
    w, h = im.size
    px = im.load()
    col = [sum(1 for y in range(0, h, 3) if not is_bg(px[x, y])) for x in range(w)]
    seg = w / 5
    cuts = [0]
    for i in range(1, 5):
        c = seg * i
        lo, hi = int(c - seg * 0.40), int(c + seg * 0.40)
        # 골 = 인물픽셀 최소. 동률이면 5등분 경계에 가까운 쪽
        best = min(range(lo, hi), key=lambda x: (col[x], abs(x - c)))
        cuts.append(best)
    cuts.append(w)
    return cuts


def make_transparent(seg):
    """외부 flood-fill + 얼굴 아래 갇힌 배경 전부 투명화."""
    seg = seg.convert('RGBA')
    w, h = seg.size
    px = seg.load()
    # 1) 외부 flood-fill (모서리 연결 배경만 → 눈·치아 보존)
    out = bytearray(w * h)
    dq = deque()
    for x in range(w):
        dq.append((x, 0)); dq.append((x, h - 1))
    for y in range(h):
        dq.append((0, y)); dq.append((w - 1, y))
    while dq:
        x, y = dq.popleft()
        if x < 0 or y < 0 or x >= w or y >= h:
            continue
        i = y * w + x
        if out[i] or not is_bg(px[x, y]):
            continue
        out[i] = 1
        dq.append((x + 1, y)); dq.append((x - 1, y))
        dq.append((x, y + 1)); dq.append((x, y - 1))
    for y in range(h):
        for x in range(w):
            if out[y * w + x]:
                r, g, b, _ = px[x, y]
                px[x, y] = (r, g, b, 0)
    # 2) 갇힌 틈(팔-몸 사이 등): 얼굴 영역 빼고 남은 배경색 전부 투명화
    face_limit = int(h * FACE_TOP_RATIO)
    for y in range(face_limit, h):
        for x in range(w):
            p = px[x, y]
            if p[3] >= 10 and is_bg(p):
                px[x, y] = (p[0], p[1], p[2], 0)
    return seg


def main():
    if len(sys.argv) != 3:
        print("사용법: python3 split_sheet.py <시트.png> <role키>")
        sys.exit(1)
    sheet_path, role = sys.argv[1], sys.argv[2]
    import os
    os.makedirs('split', exist_ok=True)
    os.makedirs('split_transparent', exist_ok=True)
    im = Image.open(sheet_path).convert('RGBA')
    H = im.size[1]
    cuts = find_valley_cuts(im)
    widths = [cuts[i + 1] - cuts[i] for i in range(5)]
    for i, expr in enumerate(EXPRS):
        seg = im.crop((cuts[i], 0, cuts[i + 1], H))
        seg.save(f'split/{role}_{expr}.png')               # 배경 있는 원본 컷
        make_transparent(seg).save(f'split_transparent/{role}_{expr}.png')  # 투명
    print(f"✓ {role}: cuts={cuts} 폭={widths}")
    print(f"  → split/{role}_*.png (배경O)  split_transparent/{role}_*.png (투명)")
    print("  게임 적용: split_transparent/* 를 games/.../characters/split_transparent/ 로 복사 후 IMG_VERSION 올림")


if __name__ == '__main__':
    main()
