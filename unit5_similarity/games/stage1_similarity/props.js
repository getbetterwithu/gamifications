// ===== SVG 소품 라이브러리 (PROPS) =====
// 시나리오 step에 prop: 'lighthouse' 같은 키만 넣으면 삽화 패널에 표시됨.
const PROPS = {
  // 등대탑 (Scene 1, 탈레스가 가리키는 탑)
  lighthouse: `
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="lhSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffd9a8"/>
          <stop offset="100%" stop-color="#f5b87a"/>
        </linearGradient>
        <linearGradient id="lhStone" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stop-color="#d4b890"/>
          <stop offset="50%" stop-color="#e8d4b0"/>
          <stop offset="100%" stop-color="#b89868"/>
        </linearGradient>
        <radialGradient id="lhFire" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff5d6"/>
          <stop offset="60%" stop-color="#ffaa44" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="#ff7722" stop-opacity="0"/>
        </radialGradient>
      </defs>

      <!-- 하늘 배경 (둥근 모서리) -->
      <rect x="0" y="0" width="400" height="500" rx="14" fill="url(#lhSky)"/>

      <!-- 멀리 산 -->
      <path d="M 0 380 L 80 320 L 160 360 L 240 310 L 320 350 L 400 320 L 400 420 L 0 420 Z"
            fill="#a08070" opacity="0.5"/>

      <!-- 해 -->
      <circle cx="80" cy="100" r="35" fill="#fff5d6" opacity="0.85"/>
      <circle cx="80" cy="100" r="20" fill="#fff2c4"/>

      <!-- 절벽 -->
      <path d="M 0 460 L 60 440 L 120 450 L 180 420 L 240 440 L 320 430 L 400 460 L 400 500 L 0 500 Z"
            fill="#8b6f47"/>
      <path d="M 0 470 L 400 470" stroke="#5d4a30" stroke-width="2" opacity="0.4"/>
      <path d="M 0 485 L 400 485" stroke="#5d4a30" stroke-width="1" opacity="0.3"/>

      <!-- 등대 본체 (3단 원통) -->
      <!-- 기단 (가장 넓음) -->
      <rect x="160" y="380" width="80" height="60" fill="url(#lhStone)"/>
      <rect x="155" y="375" width="90" height="10" fill="#a8814e"/>

      <!-- 기단 기둥 4개 -->
      <rect x="170" y="385" width="8" height="50" fill="#a8814e"/>
      <rect x="190" y="385" width="8" height="50" fill="#a8814e"/>
      <rect x="210" y="385" width="8" height="50" fill="#a8814e"/>
      <rect x="225" y="385" width="8" height="50" fill="#a8814e"/>

      <!-- 1층 (몸통) -->
      <rect x="170" y="280" width="60" height="100" fill="url(#lhStone)"/>
      <rect x="165" y="275" width="70" height="10" fill="#a8814e"/>
      <!-- 몸통 디테일 라인 -->
      <line x1="170" y1="310" x2="230" y2="310" stroke="#a8814e" stroke-width="1.5" opacity="0.6"/>
      <line x1="170" y1="340" x2="230" y2="340" stroke="#a8814e" stroke-width="1.5" opacity="0.6"/>
      <!-- 작은 창문 -->
      <rect x="195" y="320" width="10" height="14" fill="#3a4a4a"/>

      <!-- 2층 (좁아짐) -->
      <rect x="180" y="200" width="40" height="80" fill="url(#lhStone)"/>
      <rect x="175" y="195" width="50" height="10" fill="#a8814e"/>
      <!-- 작은 창문 -->
      <rect x="195" y="225" width="10" height="14" fill="#3a4a4a"/>

      <!-- 봉화대 (등대 꼭대기) -->
      <rect x="185" y="155" width="30" height="45" fill="url(#lhStone)"/>
      <!-- 봉화대 기둥 4개 (불 보호) -->
      <rect x="187" y="160" width="4" height="35" fill="#5d4a30"/>
      <rect x="198" y="160" width="4" height="35" fill="#5d4a30"/>
      <rect x="209" y="160" width="4" height="35" fill="#5d4a30"/>
      <!-- 봉화대 지붕 -->
      <polygon points="180,160 200,130 220,160" fill="#8b6f47"/>
      <polygon points="183,158 200,135 217,158" fill="#a8814e" opacity="0.7"/>

      <!-- 불꽃 -->
      <circle cx="200" cy="172" r="22" fill="url(#lhFire)" class="torch-flicker"/>
      <ellipse cx="200" cy="170" rx="6" ry="12" fill="#fff5d6" opacity="0.95"/>

      <!-- 그림자 (등대가 절벽 위에 드리우는 그림자) -->
      <path d="M 240 440 L 320 460 L 240 460 Z" fill="#000" opacity="0.18"/>

      <!-- 갈매기 -->
      <path d="M 60 180 q 8 -6 16 0 q 8 -6 16 0" stroke="#5d4a30" stroke-width="1.5" fill="none" stroke-linecap="round"/>
      <path d="M 320 220 q 6 -4 12 0 q 6 -4 12 0" stroke="#5d4a30" stroke-width="1.5" fill="none" stroke-linecap="round"/>
    </svg>
  `,

  // ===== 1. 황금 비례판 (Scene 3, 7, 10) =====
  proportion_plate: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="pp_glow" cx="50%" cy="50%" r="55%">
          <stop offset="0%" stop-color="#fff5d6" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#ffd47a" stop-opacity="0"/>
        </radialGradient>
        <linearGradient id="pp_gold" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="#fff5d6"/>
          <stop offset="50%" stop-color="#f5c860"/>
          <stop offset="100%" stop-color="#b8862a"/>
        </linearGradient>
      </defs>
      <rect width="400" height="400" rx="14" fill="#2a1810"/>
      <circle cx="200" cy="200" r="160" fill="url(#pp_glow)"/>
      <!-- 외곽 장식 원 -->
      <circle cx="200" cy="200" r="140" fill="url(#pp_gold)" stroke="#8b6f1a" stroke-width="3"/>
      <circle cx="200" cy="200" r="125" fill="none" stroke="#8b6f1a" stroke-width="1.5" opacity="0.7"/>
      <circle cx="200" cy="200" r="110" fill="none" stroke="#8b6f1a" stroke-width="1" opacity="0.5"/>
      <!-- 중앙 정삼각형 -->
      <polygon points="200,110 270,225 130,225" fill="none" stroke="#5d4a10" stroke-width="3"/>
      <polygon points="200,125 258,217 142,217" fill="none" stroke="#8b6f1a" stroke-width="1.5" opacity="0.7"/>
      <!-- 내접 원 -->
      <circle cx="200" cy="195" r="38" fill="none" stroke="#5d4a10" stroke-width="2.5"/>
      <circle cx="200" cy="195" r="28" fill="none" stroke="#8b6f1a" stroke-width="1" opacity="0.6"/>
      <!-- 모서리 별 장식 -->
      <g fill="#5d4a10">
        <polygon points="200,75 204,82 211,82 205,87 207,94 200,90 193,94 195,87 189,82 196,82"/>
        <polygon points="200,325 204,318 211,318 205,313 207,306 200,310 193,306 195,313 189,318 196,318"/>
        <polygon points="75,200 82,196 82,189 87,195 94,193 90,200 94,207 87,205 82,211 82,204"/>
        <polygon points="325,200 318,196 318,189 313,195 306,193 310,200 306,207 313,205 318,211 318,204"/>
      </g>
      <!-- 라벨 -->
      <text x="200" y="385" text-anchor="middle" font-family="serif" font-size="20" fill="#f5d99a" font-weight="700">황금 비례판</text>
    </svg>
  `,

  // ===== 2. 직각삼각형 + 빗변 수선 (Scene 9, 10) =====
  right_triangle_perpendicular: `
    <svg viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="400" rx="12" fill="#fff8e7"/>
      <text x="200" y="30" text-anchor="middle" font-family="serif" font-size="18" fill="#5d4a30" font-weight="700">직각삼각형 + 빗변 수선</text>

      <!-- 큰 직각삼각형 ABC -->
      <polygon points="80,300 320,300 80,100" fill="#f5e6d3" stroke="#5d4a30" stroke-width="3"/>

      <!-- 빗변에서 직각으로 내린 수선 (A에서 BC로) -->
      <!-- 수선의 발 D 위치 계산: A(80,100), B(80,300), C(320,300), 빗변 BC가 아니라 빗변은 AC -->
      <!-- 수정: 직각이 B(80,300)에 있고, 빗변은 AC -->
      <!-- A에서 빗변에 수선을 내림 -->
      <!-- A(80,100), B(80,300) (직각), C(320,300) -->
      <!-- 빗변 AC의 수선의 발은 B에서 AC로 -->
      <line x1="80" y1="300" x2="174" y2="216" stroke="#b85a4a" stroke-width="2.5" stroke-dasharray="6,3"/>

      <!-- 점 라벨 -->
      <circle cx="80" cy="100" r="4" fill="#3a2818"/>
      <text x="65" y="95" font-family="serif" font-size="20" fill="#3a2818" font-weight="700">A</text>
      <circle cx="80" cy="300" r="4" fill="#3a2818"/>
      <text x="55" y="320" font-family="serif" font-size="20" fill="#3a2818" font-weight="700">B</text>
      <circle cx="320" cy="300" r="4" fill="#3a2818"/>
      <text x="325" y="320" font-family="serif" font-size="20" fill="#3a2818" font-weight="700">C</text>
      <circle cx="174" cy="216" r="4" fill="#b85a4a"/>
      <text x="180" y="210" font-family="serif" font-size="18" fill="#b85a4a" font-weight="700">D</text>

      <!-- 직각 표시 -->
      <path d="M 90 290 L 90 300 L 80 300" fill="none" stroke="#3a2818" stroke-width="1.5"/>
      <path d="M 168 222 L 174 216 L 180 222" fill="none" stroke="#b85a4a" stroke-width="1.5"/>

      <!-- 세 닮은 삼각형 라벨 -->
      <text x="60" y="200" font-family="serif" font-size="14" fill="#5d4a30" font-style="italic">△ABD</text>
      <text x="220" y="280" font-family="serif" font-size="14" fill="#5d4a30" font-style="italic">△BDC</text>
      <text x="180" y="160" font-family="serif" font-size="14" fill="#5d4a30" font-style="italic">△ABC</text>

      <!-- 하단 메모 -->
      <text x="200" y="375" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6b4423">△ABC ∽ △ABD ∽ △BDC (AA 닮음)</text>
    </svg>
  `,

  // ===== 3. SSS·SAS·AA 닮음 조건 (Scene 8) =====
  similarity_conditions: `
    <svg viewBox="0 0 400 500" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="500" rx="12" fill="#fff8e7"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="18" fill="#5d4a30" font-weight="700">삼각형의 닮음 조건</text>

      <!-- SSS -->
      <g transform="translate(0, 50)">
        <text x="40" y="20" font-family="serif" font-size="20" fill="#b85a4a" font-weight="700">SSS</text>
        <text x="100" y="20" font-family="sans-serif" font-size="13" fill="#5d4a30">세 쌍의 변의 비가 같음</text>
        <polygon points="50,40 110,90 30,90" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <polygon points="220,30 330,118 180,118" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <text x="68" y="105" font-family="sans-serif" font-size="11" fill="#b85a4a">a:b:c</text>
        <text x="245" y="135" font-family="sans-serif" font-size="11" fill="#b85a4a">2a:2b:2c</text>
      </g>

      <!-- SAS -->
      <g transform="translate(0, 200)">
        <text x="40" y="20" font-family="serif" font-size="20" fill="#b85a4a" font-weight="700">SAS</text>
        <text x="100" y="20" font-family="sans-serif" font-size="13" fill="#5d4a30">두 변의 비 + 끼인각</text>
        <polygon points="50,40 110,90 30,90" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <polygon points="220,30 330,118 180,118" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <!-- 끼인각 표시 -->
        <path d="M 35 85 A 8 8 0 0 1 42 80" fill="none" stroke="#b85a4a" stroke-width="2"/>
        <path d="M 188 113 A 12 12 0 0 1 198 105" fill="none" stroke="#b85a4a" stroke-width="2"/>
      </g>

      <!-- AA -->
      <g transform="translate(0, 350)">
        <text x="40" y="20" font-family="serif" font-size="20" fill="#b85a4a" font-weight="700">AA</text>
        <text x="100" y="20" font-family="sans-serif" font-size="13" fill="#5d4a30">두 쌍의 각이 같음</text>
        <polygon points="50,40 110,90 30,90" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <polygon points="220,30 330,118 180,118" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <!-- 두 각 표시 -->
        <path d="M 35 85 A 8 8 0 0 1 42 80" fill="none" stroke="#b85a4a" stroke-width="2"/>
        <path d="M 100 88 A 8 8 0 0 1 95 80" fill="none" stroke="#b85a4a" stroke-width="2"/>
        <path d="M 188 113 A 12 12 0 0 1 198 105" fill="none" stroke="#b85a4a" stroke-width="2"/>
        <path d="M 320 113 A 12 12 0 0 0 312 105" fill="none" stroke="#b85a4a" stroke-width="2"/>
      </g>
    </svg>
  `,

  // ===== 4. 항상 닮음인 도형 카드 (Scene 7) =====
  always_similar_shapes: `
    <svg viewBox="0 0 400 480" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="480" rx="12" fill="#fff8e7"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="17" fill="#5d4a30" font-weight="700">항상 닮음인 도형은?</text>

      <!-- O: 정삼각형 -->
      <g transform="translate(50, 60)">
        <rect width="100" height="100" rx="8" fill="#e8f0d4" stroke="#4a8b3a" stroke-width="2"/>
        <polygon points="50,25 78,75 22,75" fill="none" stroke="#3a5a2a" stroke-width="2"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a5a2a">정삼각형</text>
        <text x="88" y="14" font-size="20" fill="#4a8b3a" font-weight="700">O</text>
      </g>

      <!-- O: 원 -->
      <g transform="translate(170, 60)">
        <rect width="100" height="100" rx="8" fill="#e8f0d4" stroke="#4a8b3a" stroke-width="2"/>
        <circle cx="50" cy="50" r="28" fill="none" stroke="#3a5a2a" stroke-width="2"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a5a2a">원</text>
        <text x="88" y="14" font-size="20" fill="#4a8b3a" font-weight="700">O</text>
      </g>

      <!-- O: 정사각형 -->
      <g transform="translate(290, 60)">
        <rect width="100" height="100" rx="8" fill="#e8f0d4" stroke="#4a8b3a" stroke-width="2"/>
        <rect x="22" y="25" width="56" height="50" fill="none" stroke="#3a5a2a" stroke-width="2"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a5a2a">정사각형</text>
        <text x="88" y="14" font-size="20" fill="#4a8b3a" font-weight="700">O</text>
      </g>

      <!-- X: 이등변삼각형 (함정!) -->
      <g transform="translate(50, 200)">
        <rect width="100" height="100" rx="8" fill="#fde0dc" stroke="#b85a4a" stroke-width="2"/>
        <polygon points="50,28 75,72 25,72" fill="none" stroke="#8b3a2a" stroke-width="2"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#8b3a2a">이등변삼각형</text>
        <text x="84" y="16" font-size="20" fill="#b85a4a" font-weight="700">X</text>
        <text x="50" y="120" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b85a4a" font-style="italic">함정!</text>
      </g>

      <!-- X: 직사각형 -->
      <g transform="translate(170, 200)">
        <rect width="100" height="100" rx="8" fill="#fde0dc" stroke="#b85a4a" stroke-width="2"/>
        <rect x="22" y="35" width="56" height="30" fill="none" stroke="#8b3a2a" stroke-width="2"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#8b3a2a">직사각형</text>
        <text x="84" y="16" font-size="20" fill="#b85a4a" font-weight="700">X</text>
      </g>

      <!-- O: 정육면체 -->
      <g transform="translate(290, 200)">
        <rect width="100" height="100" rx="8" fill="#e8f0d4" stroke="#4a8b3a" stroke-width="2"/>
        <g transform="translate(28, 30)">
          <polygon points="0,15 25,5 25,40 0,50" fill="none" stroke="#3a5a2a" stroke-width="1.5"/>
          <polygon points="0,15 35,15 35,50 0,50" fill="none" stroke="#3a5a2a" stroke-width="1.5"/>
          <polygon points="0,15 25,5 60,5 35,15" fill="none" stroke="#3a5a2a" stroke-width="1.5"/>
          <polygon points="35,15 60,5 60,40 35,50" fill="none" stroke="#3a5a2a" stroke-width="1.5"/>
        </g>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a5a2a">정육면체</text>
        <text x="88" y="14" font-size="20" fill="#4a8b3a" font-weight="700">O</text>
      </g>

      <!-- O: 구 -->
      <g transform="translate(170, 340)">
        <rect width="100" height="100" rx="8" fill="#e8f0d4" stroke="#4a8b3a" stroke-width="2"/>
        <circle cx="50" cy="50" r="28" fill="#fff8e7" stroke="#3a5a2a" stroke-width="2"/>
        <ellipse cx="50" cy="50" rx="28" ry="6" fill="none" stroke="#3a5a2a" stroke-width="1" opacity="0.5"/>
        <text x="50" y="92" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a5a2a">구</text>
        <text x="88" y="14" font-size="20" fill="#4a8b3a" font-weight="700">O</text>
      </g>

      <text x="200" y="465" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#6b4423">정△·원·정사각형·정육면체·구는 OK / 일반 이등변·직사각형은 X</text>
    </svg>
  `,

  // ===== 5. 두 닮은 삼각형 비교 (Scene 8) =====
  two_triangles_compare: `
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" rx="12" fill="#fff8e7"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="18" fill="#5d4a30" font-weight="700">두 닮은 삼각형</text>

      <!-- 작은 삼각형 -->
      <polygon points="60,200 60,260 130,260" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2.5"/>
      <text x="50" y="195" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">A</text>
      <text x="50" y="278" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">B</text>
      <text x="138" y="278" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">C</text>
      <!-- 변 길이 -->
      <text x="40" y="235" font-family="sans-serif" font-size="12" fill="#b85a4a">3</text>
      <text x="92" y="278" font-family="sans-serif" font-size="12" fill="#b85a4a">4</text>
      <text x="100" y="225" font-family="sans-serif" font-size="12" fill="#b85a4a">5</text>

      <!-- 큰 삼각형 -->
      <polygon points="220,170 220,290 340,290" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2.5"/>
      <text x="210" y="165" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">D</text>
      <text x="210" y="308" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">E</text>
      <text x="348" y="308" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">F</text>
      <!-- 변 길이 -->
      <text x="200" y="235" font-family="sans-serif" font-size="13" fill="#b85a4a">6</text>
      <text x="270" y="308" font-family="sans-serif" font-size="13" fill="#b85a4a">8</text>
      <text x="280" y="225" font-family="sans-serif" font-size="13" fill="#b85a4a">10</text>

      <!-- 닮음 기호 -->
      <text x="180" y="240" font-family="serif" font-size="36" fill="#8b6f47">∽</text>

      <!-- 닮음비 표시 -->
      <text x="200" y="100" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#5d4a30">△ABC ∽ △DEF</text>
      <text x="200" y="125" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#6b4423">닮음비 = 3:6 = 4:8 = 5:10 = 1:2</text>
    </svg>
  `,

  // ===== 6. 발자국 두 개 (Scene 5) =====
  footprints_pair: `
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" rx="12" fill="#3a2818"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="17" fill="#f5d99a" font-weight="700">두 개의 발자국 흔적</text>

      <!-- 작은 발자국 -->
      <g transform="translate(80, 80)">
        <ellipse cx="0" cy="40" rx="22" ry="38" fill="#1a0f08" opacity="0.85"/>
        <ellipse cx="-8" cy="-5" rx="6" ry="8" fill="#1a0f08" opacity="0.85"/>
        <ellipse cx="-2" cy="-15" rx="5" ry="6" fill="#1a0f08" opacity="0.85"/>
        <ellipse cx="6" cy="-13" rx="5" ry="5" fill="#1a0f08" opacity="0.85"/>
        <ellipse cx="12" cy="-7" rx="5" ry="5" fill="#1a0f08" opacity="0.85"/>
        <ellipse cx="16" cy="2" rx="4" ry="4" fill="#1a0f08" opacity="0.85"/>
      </g>
      <text x="80" y="190" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#f5d99a" font-weight="700">작음</text>
      <text x="80" y="210" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#c8a87a">15 cm</text>

      <!-- 큰 발자국 -->
      <g transform="translate(280, 80)">
        <ellipse cx="0" cy="55" rx="38" ry="65" fill="#1a0f08" opacity="0.9"/>
        <ellipse cx="-14" cy="-20" rx="10" ry="13" fill="#1a0f08" opacity="0.9"/>
        <ellipse cx="-4" cy="-35" rx="8" ry="10" fill="#1a0f08" opacity="0.9"/>
        <ellipse cx="10" cy="-32" rx="8" ry="9" fill="#1a0f08" opacity="0.9"/>
        <ellipse cx="20" cy="-22" rx="8" ry="8" fill="#1a0f08" opacity="0.9"/>
        <ellipse cx="27" cy="-7" rx="7" ry="7" fill="#1a0f08" opacity="0.9"/>
      </g>
      <text x="280" y="220" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#f5d99a" font-weight="700">큼</text>
      <text x="280" y="240" text-anchor="middle" font-family="sans-serif" font-size="13" fill="#c8a87a">25 cm</text>

      <!-- 비율 -->
      <text x="200" y="280" text-anchor="middle" font-family="serif" font-size="20" fill="#f5d99a">15 : 25 = 3 : 5</text>
      <text x="200" y="300" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c8a87a">닮음비</text>
    </svg>
  `,

  // ===== 7. 그림자 비교 (Scene 1, 선택지 A) =====
  shadow_similarity: `
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="ss_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#ffd9a8"/>
          <stop offset="100%" stop-color="#ffeac0"/>
        </linearGradient>
      </defs>
      <rect width="400" height="280" rx="12" fill="url(#ss_sky)"/>
      <text x="200" y="22" text-anchor="middle" font-family="serif" font-size="16" fill="#5d4a30" font-weight="700">키:그림자 = 탑:탑그림자</text>

      <!-- 땅 -->
      <rect y="220" width="400" height="60" fill="#d4a574"/>

      <!-- 사람 -->
      <g transform="translate(80, 140)">
        <circle cx="0" cy="0" r="10" fill="#5d4a30"/>
        <line x1="0" y1="10" x2="0" y2="60" stroke="#5d4a30" stroke-width="6"/>
        <line x1="0" y1="35" x2="-12" y2="50" stroke="#5d4a30" stroke-width="4"/>
        <line x1="0" y1="35" x2="12" y2="50" stroke="#5d4a30" stroke-width="4"/>
        <line x1="0" y1="60" x2="-8" y2="80" stroke="#5d4a30" stroke-width="4"/>
        <line x1="0" y1="60" x2="8" y2="80" stroke="#5d4a30" stroke-width="4"/>
        <!-- 그림자 -->
        <ellipse cx="40" cy="80" rx="40" ry="6" fill="#5d4a30" opacity="0.4"/>
      </g>
      <line x1="80" y1="220" x2="120" y2="220" stroke="#b85a4a" stroke-width="2"/>
      <text x="100" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b85a4a">그림자 a</text>
      <line x1="68" y1="140" x2="68" y2="220" stroke="#b85a4a" stroke-width="2"/>
      <text x="55" y="180" font-family="sans-serif" font-size="11" fill="#b85a4a">키 h</text>

      <!-- 탑 -->
      <g transform="translate(260, 60)">
        <rect x="-22" y="0" width="44" height="160" fill="#a8814e"/>
        <polygon points="-26,0 26,0 0,-25" fill="#8b6f47"/>
        <rect x="-30" y="160" width="60" height="8" fill="#5d4a30"/>
        <!-- 그림자 -->
        <polygon points="22,160 130,160 22,180 22,168" fill="#5d4a30" opacity="0.4"/>
      </g>
      <line x1="282" y1="220" x2="390" y2="220" stroke="#b85a4a" stroke-width="2"/>
      <text x="335" y="245" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#b85a4a">그림자 A</text>
      <line x1="240" y1="35" x2="240" y2="220" stroke="#b85a4a" stroke-width="2"/>
      <text x="218" y="125" font-family="sans-serif" font-size="11" fill="#b85a4a">높이 H</text>

      <!-- 식 -->
      <text x="200" y="270" text-anchor="middle" font-family="serif" font-size="14" fill="#3a2818" font-weight="700">h : a = H : A</text>
    </svg>
  `,

  // ===== 8. 피라미드 + 탈레스 (Scene 4) =====
  pyramid_thales: `
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="pt_sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#fff5d6"/>
          <stop offset="100%" stop-color="#f5c98a"/>
        </linearGradient>
        <linearGradient id="pt_pyramid" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8c895"/>
          <stop offset="100%" stop-color="#a8814e"/>
        </linearGradient>
      </defs>
      <rect width="400" height="280" rx="12" fill="url(#pt_sky)"/>
      <text x="200" y="22" text-anchor="middle" font-family="serif" font-size="15" fill="#5d4a30" font-weight="700">탈레스의 피라미드 측정</text>

      <!-- 사막 -->
      <rect y="220" width="400" height="60" fill="#d4a574"/>

      <!-- 피라미드 -->
      <polygon points="180,80 100,220 260,220" fill="url(#pt_pyramid)"/>
      <polygon points="180,80 260,220 320,220 240,90" fill="#8b6f47"/>
      <line x1="180" y1="80" x2="240" y2="90" stroke="#5d4a30" stroke-width="1"/>
      <line x1="240" y1="90" x2="320" y2="220" stroke="#5d4a30" stroke-width="1"/>
      <!-- 피라미드 그림자 -->
      <polygon points="100,220 260,220 320,235 60,235" fill="#5d4a30" opacity="0.35"/>

      <!-- 탈레스 -->
      <g transform="translate(60, 170)">
        <circle cx="0" cy="0" r="6" fill="#3a2818"/>
        <line x1="0" y1="6" x2="0" y2="40" stroke="#5d4a30" stroke-width="4"/>
        <line x1="0" y1="20" x2="-7" y2="30" stroke="#5d4a30" stroke-width="3"/>
        <line x1="0" y1="20" x2="7" y2="30" stroke="#5d4a30" stroke-width="3"/>
        <line x1="0" y1="40" x2="-5" y2="50" stroke="#5d4a30" stroke-width="3"/>
        <line x1="0" y1="40" x2="5" y2="50" stroke="#5d4a30" stroke-width="3"/>
        <!-- 그림자 -->
        <ellipse cx="20" cy="50" rx="20" ry="4" fill="#5d4a30" opacity="0.4"/>
      </g>

      <!-- 키 / 그림자 비례 표시 -->
      <text x="48" y="175" font-family="sans-serif" font-size="10" fill="#b85a4a">h</text>
      <text x="68" y="245" font-family="sans-serif" font-size="10" fill="#b85a4a">a</text>
      <text x="160" y="155" font-family="sans-serif" font-size="11" fill="#b85a4a">H</text>
      <text x="155" y="245" font-family="sans-serif" font-size="11" fill="#b85a4a">A</text>

      <text x="200" y="270" text-anchor="middle" font-family="serif" font-size="13" fill="#3a2818" font-weight="700">h:a = H:A → H = h × (A/a)</text>
    </svg>
  `,

  // ===== 9. 학당 지도 (Scene 3) =====
  academy_map: `
    <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="map_paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5e6c8"/>
          <stop offset="100%" stop-color="#d4b890"/>
        </linearGradient>
      </defs>
      <rect width="400" height="360" rx="14" fill="#5d4a30"/>
      <!-- 양피지 -->
      <path d="M 30 30 L 370 35 L 365 330 L 35 325 Z" fill="url(#map_paper)" stroke="#8b6f47" stroke-width="2"/>
      <!-- 모서리 그을음 -->
      <path d="M 30 30 L 50 30 L 50 50 L 30 50 Z" fill="#8b6f47" opacity="0.3"/>
      <path d="M 350 30 L 370 30 L 370 50 L 350 50 Z" fill="#8b6f47" opacity="0.3"/>

      <text x="200" y="58" text-anchor="middle" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">학당 평면도</text>

      <!-- 건물 외곽 -->
      <rect x="80" y="90" width="240" height="180" fill="none" stroke="#5d4a30" stroke-width="2.5"/>
      <!-- 강의실 -->
      <rect x="80" y="90" width="100" height="80" fill="#fff8e7" stroke="#5d4a30" stroke-width="1.5"/>
      <text x="130" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5d4a30">강의실</text>
      <!-- 창고 (X 표시 — 비례판 사라진 곳) -->
      <rect x="180" y="90" width="60" height="80" fill="#fde0dc" stroke="#b85a4a" stroke-width="2"/>
      <text x="210" y="125" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#b85a4a" font-weight="700">창고</text>
      <line x1="185" y1="95" x2="235" y2="165" stroke="#b85a4a" stroke-width="1.5"/>
      <line x1="235" y1="95" x2="185" y2="165" stroke="#b85a4a" stroke-width="1.5"/>
      <!-- 도서관 -->
      <rect x="240" y="90" width="80" height="80" fill="#fff8e7" stroke="#5d4a30" stroke-width="1.5"/>
      <text x="280" y="135" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5d4a30">도서관</text>
      <!-- 정원·마당 -->
      <rect x="80" y="170" width="160" height="100" fill="#e8f0d4" stroke="#5d4a30" stroke-width="1.5"/>
      <text x="160" y="225" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5d4a30">마당·정원</text>
      <!-- 지하 보관고 -->
      <rect x="240" y="170" width="80" height="100" fill="#d8c4a0" stroke="#5d4a30" stroke-width="1.5"/>
      <text x="280" y="215" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30">지하</text>
      <text x="280" y="230" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30">보관고</text>

      <!-- 축척 -->
      <line x1="80" y1="305" x2="180" y2="305" stroke="#3a2818" stroke-width="2"/>
      <line x1="80" y1="300" x2="80" y2="310" stroke="#3a2818" stroke-width="2"/>
      <line x1="180" y1="300" x2="180" y2="310" stroke="#3a2818" stroke-width="2"/>
      <text x="130" y="295" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#3a2818" font-weight="700">축척 1 : 200</text>

      <!-- 나침반 -->
      <g transform="translate(340, 290)">
        <circle r="18" fill="none" stroke="#5d4a30" stroke-width="1.5"/>
        <polygon points="0,-15 4,0 0,15 -4,0" fill="#b85a4a"/>
        <text y="-22" text-anchor="middle" font-family="serif" font-size="10" fill="#5d4a30" font-weight="700">N</text>
      </g>
    </svg>
  `,

  // ===== 10. 대응 표기 (Scene 2, 3) =====
  correspondence_notation: `
    <svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="280" rx="12" fill="#fff8e7"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="17" fill="#5d4a30" font-weight="700">대응 꼭짓점은 순서대로</text>

      <!-- 두 삼각형 -->
      <polygon points="40,180 40,240 110,240" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2.5"/>
      <text x="28" y="178" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">A</text>
      <text x="28" y="258" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">B</text>
      <text x="118" y="258" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">C</text>

      <polygon points="240,150 240,250 360,250" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2.5"/>
      <text x="228" y="148" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">D</text>
      <text x="228" y="268" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">E</text>
      <text x="368" y="268" font-family="serif" font-size="18" fill="#3a2818" font-weight="700">F</text>

      <!-- 대응 화살표 -->
      <path d="M 50 175 Q 145 100 235 145" fill="none" stroke="#b85a4a" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow)"/>
      <path d="M 55 252 Q 145 280 230 258" fill="none" stroke="#4a8b3a" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow2)"/>
      <path d="M 122 248 Q 200 250 355 258" fill="none" stroke="#3a5aa8" stroke-width="2" stroke-dasharray="5,3" marker-end="url(#arrow3)"/>

      <defs>
        <marker id="arrow" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0,0 10,3 0,6" fill="#b85a4a"/>
        </marker>
        <marker id="arrow2" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0,0 10,3 0,6" fill="#4a8b3a"/>
        </marker>
        <marker id="arrow3" markerWidth="10" markerHeight="10" refX="9" refY="3" orient="auto">
          <polygon points="0,0 10,3 0,6" fill="#3a5aa8"/>
        </marker>
      </defs>

      <!-- 표기 -->
      <text x="200" y="80" text-anchor="middle" font-family="serif" font-size="22" fill="#3a2818" font-weight="700">△ABC ∽ △DEF</text>
      <text x="200" y="105" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#6b4423">A↔D, B↔E, C↔F (순서대로 대응)</text>
    </svg>
  `,

  // ===== 11. 단서 카드 5장 (Scene 10) =====
  clue_cards: `
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="320" rx="12" fill="#2a1810"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="17" fill="#f5d99a" font-weight="700">획득한 단서 카드</text>

      <!-- 카드 1: 지도 -->
      <g transform="translate(30, 60) rotate(-8)">
        <rect width="80" height="110" rx="6" fill="#f5e6c8" stroke="#8b6f47" stroke-width="2"/>
        <rect x="10" y="20" width="60" height="50" fill="none" stroke="#5d4a30" stroke-width="1"/>
        <text x="40" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30" font-weight="700">단서 1</text>
        <text x="40" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5d4a30">지도</text>
      </g>

      <!-- 카드 2: 발자국 -->
      <g transform="translate(110, 70) rotate(-3)">
        <rect width="80" height="110" rx="6" fill="#f5e6c8" stroke="#8b6f47" stroke-width="2"/>
        <ellipse cx="40" cy="50" rx="14" ry="22" fill="#3a2818"/>
        <text x="40" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30" font-weight="700">단서 2</text>
        <text x="40" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5d4a30">발자국</text>
      </g>

      <!-- 카드 3: 닮은 도형 -->
      <g transform="translate(190, 75)">
        <rect width="80" height="110" rx="6" fill="#f5e6c8" stroke="#8b6f47" stroke-width="2"/>
        <polygon points="20,30 20,60 50,60" fill="none" stroke="#5d4a30" stroke-width="1.5"/>
        <polygon points="40,25 40,68 75,68" fill="none" stroke="#5d4a30" stroke-width="1.5"/>
        <text x="40" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30" font-weight="700">단서 3</text>
        <text x="40" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5d4a30">도형</text>
      </g>

      <!-- 카드 4: 삼각형 닮음 조건 -->
      <g transform="translate(270, 70) rotate(4)">
        <rect width="80" height="110" rx="6" fill="#f5e6c8" stroke="#8b6f47" stroke-width="2"/>
        <text x="40" y="40" text-anchor="middle" font-family="serif" font-size="14" fill="#5d4a30" font-weight="700">SSS</text>
        <text x="40" y="58" text-anchor="middle" font-family="serif" font-size="14" fill="#5d4a30" font-weight="700">SAS</text>
        <text x="40" y="76" text-anchor="middle" font-family="serif" font-size="14" fill="#5d4a30" font-weight="700">AA</text>
        <text x="40" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5d4a30">닮음 조건</text>
      </g>

      <!-- 카드 5: 직각삼각형 수선 -->
      <g transform="translate(345, 60) rotate(8)">
        <rect width="80" height="110" rx="6" fill="#f5e6c8" stroke="#8b6f47" stroke-width="2"/>
        <polygon points="15,25 15,75 65,75" fill="none" stroke="#5d4a30" stroke-width="1.5"/>
        <line x1="15" y1="75" x2="34" y2="56" stroke="#b85a4a" stroke-width="1.5" stroke-dasharray="3,2"/>
        <text x="40" y="92" text-anchor="middle" font-family="sans-serif" font-size="10" fill="#5d4a30" font-weight="700">단서 5</text>
        <text x="40" y="105" text-anchor="middle" font-family="sans-serif" font-size="9" fill="#5d4a30">수선</text>
      </g>

      <text x="200" y="240" text-anchor="middle" font-family="sans-serif" font-size="14" fill="#f5d99a">5개의 단서를 모았다!</text>
      <text x="200" y="265" text-anchor="middle" font-family="sans-serif" font-size="12" fill="#c8a87a">이제 비례판이 어디 있는지 추론할 수 있다.</text>
      <text x="200" y="295" text-anchor="middle" font-family="serif" font-size="20" fill="#f5d99a" font-weight="700">→ 지하 보관고 동쪽 3번 칸</text>
    </svg>
  `,

  // ===== 12. 비례판 문양 (Scene 7) =====
  scroll_pattern: `
    <svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="sp_paper" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f5e6c8"/>
          <stop offset="100%" stop-color="#d4b890"/>
        </linearGradient>
      </defs>
      <rect width="400" height="320" rx="12" fill="#5d4a30"/>
      <!-- 펼친 두루마리 -->
      <ellipse cx="40" cy="160" rx="20" ry="120" fill="#a8814e"/>
      <ellipse cx="360" cy="160" rx="20" ry="120" fill="#a8814e"/>
      <rect x="40" y="40" width="320" height="240" fill="url(#sp_paper)"/>

      <text x="200" y="70" text-anchor="middle" font-family="serif" font-size="16" fill="#3a2818" font-weight="700">비례판 문양 도안</text>

      <!-- 정삼각형 + 원 결합 문양 -->
      <g transform="translate(200, 180)">
        <!-- 외곽 큰 원 -->
        <circle r="80" fill="none" stroke="#8b6f47" stroke-width="2"/>
        <!-- 정삼각형 -->
        <polygon points="0,-65 56,33 -56,33" fill="none" stroke="#5d4a30" stroke-width="2.5"/>
        <!-- 내접 원 -->
        <circle r="32" fill="none" stroke="#b85a4a" stroke-width="2"/>
        <!-- 작은 정삼각형 (내접 원 내부) -->
        <polygon points="0,-26 22,13 -22,13" fill="none" stroke="#b85a4a" stroke-width="1.5"/>
      </g>

      <text x="200" y="290" text-anchor="middle" font-family="sans-serif" font-size="11" fill="#5d4a30">"정삼각형과 원을 닮음으로 연결한 문양"</text>
    </svg>
  `,

  // ===== 13. 닮음비·넓이비·부피비 (Scene 5, 7) =====
  area_volume_ratio: `
    <svg viewBox="0 0 400 360" xmlns="http://www.w3.org/2000/svg">
      <rect width="400" height="360" rx="12" fill="#fff8e7"/>
      <text x="200" y="28" text-anchor="middle" font-family="serif" font-size="17" fill="#5d4a30" font-weight="700">닮음비 → 넓이비 → 부피비</text>

      <!-- 닮음비 m:n -->
      <g transform="translate(50, 70)">
        <text font-family="sans-serif" font-size="13" fill="#5d4a30" font-weight="700">닮음비</text>
        <rect x="0" y="14" width="40" height="40" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <rect x="60" y="0" width="68" height="68" fill="#f5e6d3" stroke="#5d4a30" stroke-width="2"/>
        <text x="160" y="40" font-family="serif" font-size="22" fill="#b85a4a" font-weight="700">m : n</text>
        <text x="200" y="60" font-family="sans-serif" font-size="11" fill="#6b4423">예: 2 : 3</text>
      </g>

      <!-- 화살표 -->
      <text x="200" y="160" text-anchor="middle" font-family="serif" font-size="24" fill="#8b6f47">↓</text>

      <!-- 넓이비 m²:n² -->
      <g transform="translate(50, 175)">
        <text font-family="sans-serif" font-size="13" fill="#5d4a30" font-weight="700">넓이비</text>
        <rect x="0" y="14" width="40" height="40" fill="#fde0dc" stroke="#b85a4a" stroke-width="2"/>
        <rect x="60" y="0" width="68" height="68" fill="#fde0dc" stroke="#b85a4a" stroke-width="2"/>
        <text x="160" y="40" font-family="serif" font-size="22" fill="#b85a4a" font-weight="700">m² : n²</text>
        <text x="200" y="60" font-family="sans-serif" font-size="11" fill="#6b4423">예: 4 : 9</text>
      </g>

      <text x="200" y="270" text-anchor="middle" font-family="serif" font-size="24" fill="#8b6f47">↓</text>

      <!-- 부피비 m³:n³ -->
      <g transform="translate(50, 285)">
        <text font-family="sans-serif" font-size="13" fill="#5d4a30" font-weight="700">부피비</text>
        <g transform="translate(0, 14)">
          <polygon points="0,15 25,5 25,35 0,45" fill="#fff5d6" stroke="#3a5aa8" stroke-width="1.5"/>
          <polygon points="0,15 35,15 35,45 0,45" fill="#dce8f5" stroke="#3a5aa8" stroke-width="1.5"/>
          <polygon points="0,15 25,5 60,5 35,15" fill="#fff5d6" stroke="#3a5aa8" stroke-width="1.5"/>
        </g>
        <g transform="translate(70, 0)">
          <polygon points="0,25 42,8 42,55 0,72" fill="#fff5d6" stroke="#3a5aa8" stroke-width="1.5"/>
          <polygon points="0,25 60,25 60,72 0,72" fill="#dce8f5" stroke="#3a5aa8" stroke-width="1.5"/>
          <polygon points="0,25 42,8 102,8 60,25" fill="#fff5d6" stroke="#3a5aa8" stroke-width="1.5"/>
        </g>
        <text x="200" y="40" font-family="serif" font-size="22" fill="#3a5aa8" font-weight="700">m³ : n³</text>
        <text x="195" y="60" font-family="sans-serif" font-size="11" fill="#6b4423">예: 8 : 27</text>
      </g>
    </svg>
  `,
};

