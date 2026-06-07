#!/usr/bin/env python3
"""단일 표정 추출: 5컷 시트에서 지정 인덱스 1컷만 잘라 투명화.
검증된 split_sheet.py의 find_valley_cuts + make_transparent 재사용 (삽질 방지).
사용: python3 extract_one.py <시트.png> <out_role_expr> <index 1~5>
"""
import sys, os
from PIL import Image
from split_sheet import find_valley_cuts, make_transparent

sheet_path, out_name, idx1 = sys.argv[1], sys.argv[2], int(sys.argv[3])
idx = idx1 - 1  # 1-based → 0-based

im = Image.open(sheet_path).convert('RGBA')
H = im.size[1]
cuts = find_valley_cuts(im)
seg = im.crop((cuts[idx], 0, cuts[idx + 1], H))

os.makedirs('split_transparent', exist_ok=True)
trans = make_transparent(seg)
out1 = f'split_transparent/{out_name}.png'
trans.save(out1)
print(f"✓ {out_name}: cut#{idx1} x={cuts[idx]}~{cuts[idx+1]} (폭 {cuts[idx+1]-cuts[idx]}) → {out1}")

# 게임 폴더에도 복사
game_dir = '../games/stage1_similarity/characters/split_transparent'
os.makedirs(game_dir, exist_ok=True)
trans.save(f'{game_dir}/{out_name}.png')
print(f"  → {game_dir}/{out_name}.png")
