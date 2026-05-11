// ===== SVG 배경 라이브러리 =====
const BACKGROUNDS = {
  // === Scene 1: 항구의 아침 ===
  harbor: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyHarbor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#f8d4a8"/>
          <stop offset="40%" stop-color="#f5c98a"/>
          <stop offset="70%" stop-color="#e8a07a"/>
          <stop offset="100%" stop-color="#d68a6a"/>
        </linearGradient>
        <linearGradient id="seaHarbor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#7ba8b8"/>
          <stop offset="100%" stop-color="#4a7a8c"/>
        </linearGradient>
        <radialGradient id="sunGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff5d6" stop-opacity="0.9"/>
          <stop offset="100%" stop-color="#ffd47a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="700" fill="url(#skyHarbor)"/>
      <circle cx="1450" cy="280" r="180" fill="url(#sunGlow)"/>
      <circle cx="1450" cy="280" r="80" fill="#fff2c4" opacity="0.95"/>
      <g class="cloud-drift" opacity="0.85">
        <ellipse cx="280" cy="180" rx="120" ry="28" fill="#fff5e8"/>
        <ellipse cx="340" cy="170" rx="90" ry="24" fill="#fff5e8"/>
        <ellipse cx="220" cy="195" rx="80" ry="22" fill="#fff5e8"/>
      </g>
      <g class="cloud-drift" opacity="0.7" style="animation-delay:-15s">
        <ellipse cx="900" cy="140" rx="100" ry="22" fill="#fff5e8"/>
        <ellipse cx="850" cy="155" rx="70" ry="20" fill="#fff5e8"/>
      </g>
      <path d="M 600 240 q 20 -15 40 0 q 20 -15 40 0" stroke="#5d4a30" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M 800 200 q 15 -10 30 0 q 15 -10 30 0" stroke="#5d4a30" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 1100 260 q 18 -12 36 0 q 18 -12 36 0" stroke="#5d4a30" stroke-width="2.5" fill="none" stroke-linecap="round"/>
      <path d="M 0 580 L 200 460 L 380 530 L 560 470 L 720 540 L 880 490 L 1080 560 L 1280 480 L 1500 540 L 1720 490 L 1920 560 L 1920 700 L 0 700 Z"
            fill="#a08070" opacity="0.6"/>
      <path d="M 0 620 L 240 540 L 480 590 L 720 550 L 960 600 L 1200 560 L 1440 600 L 1680 560 L 1920 610 L 1920 700 L 0 700 Z"
            fill="#8b6f5a" opacity="0.7"/>
      <rect y="700" width="1920" height="380" fill="url(#seaHarbor)"/>
      <g class="water-shimmer">
        <path d="M 0 760 q 60 -10 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0 t 120 0"
              stroke="#a8c5d4" stroke-width="2" fill="none" opacity="0.5"/>
        <path d="M 0 820 q 80 -8 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0 t 160 0"
              stroke="#bdd6e0" stroke-width="2" fill="none" opacity="0.4"/>
        <path d="M 0 900 q 100 -8 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0 t 200 0"
              stroke="#cce0e8" stroke-width="2" fill="none" opacity="0.4"/>
      </g>
      <g class="boat-sway" transform="translate(300, 720)">
        <path d="M 0 -90 L 0 -10 L 50 -10 Z" fill="#f5e6d3"/>
        <path d="M 0 -90 L 0 -10 L -45 -10 Z" fill="#e8d4b8"/>
        <line x1="0" y1="-95" x2="0" y2="0" stroke="#5d4a30" stroke-width="3"/>
        <path d="M -50 0 Q -45 25 -25 30 L 25 30 Q 45 25 50 0 Z" fill="#8b6f47"/>
        <path d="M -50 0 L 50 0" stroke="#5d4a30" stroke-width="2"/>
      </g>
      <g class="boat-sway" transform="translate(1300, 800)" style="animation-delay:-3s">
        <path d="M 0 -120 L 0 -15 L 70 -15 Z" fill="#f5e6d3"/>
        <path d="M 0 -120 L 0 -15 L -60 -15 Z" fill="#e0c8a8"/>
        <line x1="0" y1="-125" x2="0" y2="0" stroke="#5d4a30" stroke-width="4"/>
        <path d="M -75 0 Q -65 35 -35 42 L 35 42 Q 65 35 75 0 Z" fill="#a0805a"/>
        <path d="M -75 0 L 75 0" stroke="#3a2818" stroke-width="2"/>
      </g>
      <path d="M 0 950 L 1920 950 L 1920 1080 L 0 1080 Z" fill="#d4a574"/>
      <path d="M 0 980 L 1920 980" stroke="#a8814e" stroke-width="2" opacity="0.5"/>
      <rect x="120" y="900" width="20" height="80" fill="#5d4a30"/>
      <rect x="115" y="895" width="30" height="12" fill="#3a2818"/>
      <rect x="1750" y="910" width="22" height="70" fill="#5d4a30"/>
      <rect x="1745" y="905" width="32" height="12" fill="#3a2818"/>
      <circle cx="400" cy="1020" r="6" fill="#a8814e"/>
      <circle cx="450" cy="1035" r="4" fill="#8b6f47"/>
      <circle cx="900" cy="1010" r="5" fill="#a8814e"/>
      <circle cx="950" cy="1030" r="6" fill="#8b6f47"/>
      <circle cx="1400" cy="1020" r="4" fill="#a8814e"/>
      <circle cx="1450" cy="1040" r="5" fill="#8b6f47"/>
    </svg>
  `,

  // === Scene 2: 학당 강의실 ===
  classroom: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wallClass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#e8d4b0"/>
          <stop offset="100%" stop-color="#c8a87a"/>
        </linearGradient>
        <linearGradient id="floorClass" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8814e"/>
          <stop offset="100%" stop-color="#6b4423"/>
        </linearGradient>
        <radialGradient id="lightClass" cx="50%" cy="20%" r="60%">
          <stop offset="0%" stop-color="#fff8d8" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#fff8d8" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="850" fill="url(#wallClass)"/>
      <rect width="1920" height="850" fill="url(#lightClass)"/>
      <rect y="850" width="1920" height="230" fill="url(#floorClass)"/>
      <line x1="0" y1="850" x2="1920" y2="850" stroke="#3a2818" stroke-width="2"/>
      <g opacity="0.3">
        <line x1="0" y1="900" x2="1920" y2="900" stroke="#3a2818" stroke-width="1"/>
        <line x1="0" y1="950" x2="1920" y2="950" stroke="#3a2818" stroke-width="1"/>
        <line x1="0" y1="1000" x2="1920" y2="1000" stroke="#3a2818" stroke-width="1"/>
      </g>
      <g>
        <rect x="80" y="100" width="60" height="750" fill="#d4b890"/>
        <rect x="70" y="80" width="80" height="30" fill="#a8814e"/>
        <rect x="70" y="850" width="80" height="20" fill="#8b6f47"/>
        <line x1="100" y1="120" x2="100" y2="840" stroke="#a8814e" stroke-width="1" opacity="0.5"/>
        <line x1="120" y1="120" x2="120" y2="840" stroke="#a8814e" stroke-width="1" opacity="0.5"/>
      </g>
      <g>
        <rect x="1780" y="100" width="60" height="750" fill="#d4b890"/>
        <rect x="1770" y="80" width="80" height="30" fill="#a8814e"/>
        <rect x="1770" y="850" width="80" height="20" fill="#8b6f47"/>
        <line x1="1800" y1="120" x2="1800" y2="840" stroke="#a8814e" stroke-width="1" opacity="0.5"/>
        <line x1="1820" y1="120" x2="1820" y2="840" stroke="#a8814e" stroke-width="1" opacity="0.5"/>
      </g>
      <rect x="850" y="120" width="220" height="160" fill="#7a9bb0" opacity="0.5"/>
      <rect x="845" y="115" width="230" height="20" fill="#5d4a30"/>
      <line x1="960" y1="125" x2="960" y2="280" stroke="#5d4a30" stroke-width="3"/>
      <line x1="850" y1="200" x2="1070" y2="200" stroke="#5d4a30" stroke-width="3"/>
      <polygon points="850,280 1070,280 1180,850 740,850" fill="#fff5d6" opacity="0.15"/>
      <rect x="380" y="320" width="500" height="280" fill="#3a4a3a"/>
      <rect x="370" y="315" width="520" height="15" fill="#5d4a30"/>
      <rect x="370" y="595" width="520" height="15" fill="#5d4a30"/>
      <g stroke="#fff5e8" stroke-width="2" fill="none" opacity="0.85">
        <polygon points="450,400 450,490 550,490"/>
        <polygon points="700,360 700,520 850,520"/>
        <text x="430" y="510" font-family="serif" font-size="20" fill="#fff5e8">A</text>
        <text x="555" y="510" font-family="serif" font-size="20" fill="#fff5e8">B</text>
        <text x="685" y="540" font-family="serif" font-size="20" fill="#fff5e8">D</text>
        <text x="855" y="540" font-family="serif" font-size="20" fill="#fff5e8">E</text>
        <text x="600" y="450" font-family="serif" font-size="36" fill="#fff5e8">∽</text>
      </g>
      <rect x="1180" y="450" width="380" height="120" fill="#6b4423"/>
      <rect x="1180" y="445" width="380" height="10" fill="#3a2818"/>
      <g>
        <rect x="1210" y="380" width="22" height="70" fill="#e8d4b0"/>
        <rect x="1208" y="378" width="26" height="8" fill="#a8814e"/>
        <rect x="1245" y="395" width="22" height="55" fill="#d4b890"/>
        <rect x="1243" y="393" width="26" height="8" fill="#a8814e"/>
        <rect x="1280" y="370" width="22" height="80" fill="#e8d4b0"/>
        <rect x="1278" y="368" width="26" height="8" fill="#a8814e"/>
        <rect x="1320" y="400" width="22" height="50" fill="#d4b890"/>
        <rect x="1318" y="398" width="26" height="8" fill="#a8814e"/>
        <rect x="1360" y="385" width="22" height="65" fill="#e8d4b0"/>
        <rect x="1358" y="383" width="26" height="8" fill="#a8814e"/>
        <rect x="1400" y="375" width="22" height="75" fill="#d4b890"/>
        <rect x="1398" y="373" width="26" height="8" fill="#a8814e"/>
        <rect x="1440" y="395" width="22" height="55" fill="#e8d4b0"/>
        <rect x="1438" y="393" width="26" height="8" fill="#a8814e"/>
        <rect x="1480" y="380" width="22" height="70" fill="#d4b890"/>
        <rect x="1478" y="378" width="26" height="8" fill="#a8814e"/>
        <rect x="1520" y="390" width="22" height="60" fill="#e8d4b0"/>
        <rect x="1518" y="388" width="26" height="8" fill="#a8814e"/>
      </g>
      <g transform="translate(220, 720)">
        <ellipse cx="0" cy="80" rx="40" ry="50" fill="#a8814e"/>
        <ellipse cx="0" cy="80" rx="40" ry="50" fill="#8b6f47" opacity="0.5"/>
        <rect x="-30" y="20" width="60" height="20" fill="#6b4423"/>
        <ellipse cx="0" cy="20" rx="30" ry="8" fill="#5d4a30"/>
        <path d="M -20 70 q 5 -5 10 0 q 5 -5 10 0 q 5 -5 10 0 q 5 -5 10 0" stroke="#3a2818" stroke-width="1.5" fill="none"/>
      </g>
    </svg>
  `,

  // === Scene 4: 학당 복도 (이동 중) ===
  corridor: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="corridorWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#dcc4a0"/>
          <stop offset="100%" stop-color="#a8814e"/>
        </linearGradient>
        <linearGradient id="corridorFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#8b6f47"/>
          <stop offset="100%" stop-color="#5d4a30"/>
        </linearGradient>
      </defs>
      <rect width="1920" height="780" fill="url(#corridorWall)"/>
      <rect y="780" width="1920" height="300" fill="url(#corridorFloor)"/>
      <!-- 원근 기둥 (양쪽으로 멀어지는 느낌) -->
      <g>
        <rect x="50" y="180" width="80" height="600" fill="#c8a87a"/>
        <rect x="40" y="160" width="100" height="30" fill="#8b6f47"/>
        <rect x="40" y="780" width="100" height="20" fill="#6b4423"/>
        <rect x="280" y="240" width="60" height="540" fill="#c8a87a"/>
        <rect x="270" y="220" width="80" height="25" fill="#8b6f47"/>
        <rect x="270" y="780" width="80" height="18" fill="#6b4423"/>
        <rect x="450" y="290" width="45" height="490" fill="#c8a87a"/>
        <rect x="442" y="275" width="61" height="20" fill="#8b6f47"/>
        <rect x="442" y="780" width="61" height="15" fill="#6b4423"/>
        <rect x="1790" y="180" width="80" height="600" fill="#c8a87a"/>
        <rect x="1780" y="160" width="100" height="30" fill="#8b6f47"/>
        <rect x="1780" y="780" width="100" height="20" fill="#6b4423"/>
        <rect x="1580" y="240" width="60" height="540" fill="#c8a87a"/>
        <rect x="1570" y="220" width="80" height="25" fill="#8b6f47"/>
        <rect x="1570" y="780" width="80" height="18" fill="#6b4423"/>
        <rect x="1425" y="290" width="45" height="490" fill="#c8a87a"/>
        <rect x="1417" y="275" width="61" height="20" fill="#8b6f47"/>
        <rect x="1417" y="780" width="61" height="15" fill="#6b4423"/>
      </g>
      <!-- 멀리 보이는 출구 (밝은 빛) -->
      <rect x="850" y="350" width="220" height="430" fill="#fff5d6" opacity="0.85"/>
      <rect x="840" y="340" width="240" height="20" fill="#8b6f47"/>
      <polygon points="850,780 1070,780 1180,1080 740,1080" fill="#fff5d6" opacity="0.3"/>
      <!-- 바닥 타일 -->
      <g opacity="0.4">
        <line x1="0" y1="850" x2="1920" y2="850" stroke="#3a2818" stroke-width="1"/>
        <line x1="0" y1="930" x2="1920" y2="930" stroke="#3a2818" stroke-width="1"/>
        <line x1="0" y1="1010" x2="1920" y2="1010" stroke="#3a2818" stroke-width="1"/>
      </g>
    </svg>
  `,

  // === Scene 5: 학당 창고 (어두침침) ===
  warehouse: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="wareWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#5a4530"/>
          <stop offset="100%" stop-color="#3a2818"/>
        </linearGradient>
        <linearGradient id="wareFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a2818"/>
          <stop offset="100%" stop-color="#1a0f08"/>
        </linearGradient>
        <radialGradient id="wareLight" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stop-color="#ffd47a" stop-opacity="0.35"/>
          <stop offset="100%" stop-color="#ffd47a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="780" fill="url(#wareWall)"/>
      <rect y="780" width="1920" height="300" fill="url(#wareFloor)"/>
      <!-- 천장 빛 (작은 환기창) -->
      <rect x="900" y="50" width="120" height="80" fill="#d4a574" opacity="0.6"/>
      <line x1="960" y1="55" x2="960" y2="125" stroke="#3a2818" stroke-width="2"/>
      <line x1="900" y1="90" x2="1020" y2="90" stroke="#3a2818" stroke-width="2"/>
      <rect width="1920" height="780" fill="url(#wareLight)"/>
      <!-- 좌측 선반 -->
      <g>
        <rect x="60" y="380" width="380" height="20" fill="#5d4a30"/>
        <rect x="60" y="540" width="380" height="20" fill="#5d4a30"/>
        <rect x="60" y="700" width="380" height="20" fill="#5d4a30"/>
        <rect x="60" y="380" width="20" height="340" fill="#3a2818"/>
        <rect x="420" y="380" width="20" height="340" fill="#3a2818"/>
        <!-- 항아리 -->
        <ellipse cx="140" cy="360" rx="35" ry="22" fill="#8b6f47"/>
        <rect x="115" y="320" width="50" height="40" fill="#6b4423"/>
        <ellipse cx="280" cy="360" rx="40" ry="20" fill="#6b4423"/>
        <ellipse cx="380" cy="365" rx="30" ry="18" fill="#a8814e"/>
        <!-- 두루마리 -->
        <rect x="110" y="500" width="22" height="40" fill="#d4b890" opacity="0.7"/>
        <rect x="160" y="495" width="22" height="45" fill="#c8a87a" opacity="0.7"/>
        <rect x="220" y="510" width="22" height="30" fill="#d4b890" opacity="0.7"/>
        <!-- 상자 -->
        <rect x="100" y="650" width="80" height="50" fill="#6b4423"/>
        <rect x="240" y="660" width="100" height="40" fill="#5d4a30"/>
      </g>
      <!-- 우측 선반 -->
      <g>
        <rect x="1480" y="380" width="380" height="20" fill="#5d4a30"/>
        <rect x="1480" y="540" width="380" height="20" fill="#5d4a30"/>
        <rect x="1480" y="700" width="380" height="20" fill="#5d4a30"/>
        <rect x="1480" y="380" width="20" height="340" fill="#3a2818"/>
        <rect x="1840" y="380" width="20" height="340" fill="#3a2818"/>
        <ellipse cx="1560" cy="360" rx="38" ry="20" fill="#6b4423"/>
        <ellipse cx="1700" cy="365" rx="35" ry="22" fill="#8b6f47"/>
        <rect x="1530" y="500" width="80" height="40" fill="#5d4a30"/>
        <rect x="1640" y="495" width="100" height="45" fill="#6b4423"/>
        <rect x="1760" y="650" width="80" height="50" fill="#5d4a30"/>
      </g>
      <!-- 바닥 발자국 (큰 것 + 작은 것 — 시나리오 단서) -->
      <g opacity="0.7">
        <ellipse cx="700" cy="920" rx="36" ry="18" fill="#1a0f08" transform="rotate(-15 700 920)"/>
        <ellipse cx="780" cy="940" rx="36" ry="18" fill="#1a0f08" transform="rotate(-12 780 940)"/>
        <ellipse cx="1100" cy="900" rx="22" ry="11" fill="#1a0f08" transform="rotate(-10 1100 900)"/>
        <ellipse cx="1150" cy="920" rx="22" ry="11" fill="#1a0f08" transform="rotate(-8 1150 920)"/>
      </g>
      <!-- 횃불 (좌우 벽) -->
      <g class="torch-flicker" transform="translate(40, 280)">
        <rect x="-4" y="0" width="8" height="80" fill="#5d4a30"/>
        <ellipse cx="0" cy="-15" rx="14" ry="22" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-12" rx="8" ry="14" fill="#fff5d6" opacity="0.9"/>
      </g>
      <g class="torch-flicker" transform="translate(1880, 280)" style="animation-delay:-0.7s">
        <rect x="-4" y="0" width="8" height="80" fill="#5d4a30"/>
        <ellipse cx="0" cy="-15" rx="14" ry="22" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-12" rx="8" ry="14" fill="#fff5d6" opacity="0.9"/>
      </g>
      <!-- 먼지 입자 -->
      <g opacity="0.4">
        <circle cx="500" cy="400" r="2" fill="#fff5d6"/>
        <circle cx="700" cy="500" r="1.5" fill="#fff5d6"/>
        <circle cx="900" cy="350" r="2" fill="#fff5d6"/>
        <circle cx="1200" cy="450" r="1.5" fill="#fff5d6"/>
        <circle cx="1400" cy="380" r="2" fill="#fff5d6"/>
      </g>
    </svg>
  `,

  // === Scene 6: 학당 정원 (올리브 나무) ===
  garden: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyGarden" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8d4e8"/>
          <stop offset="100%" stop-color="#dcecf0"/>
        </linearGradient>
        <linearGradient id="grassGarden" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#9ab87a"/>
          <stop offset="100%" stop-color="#6a8b4a"/>
        </linearGradient>
      </defs>
      <rect width="1920" height="700" fill="url(#skyGarden)"/>
      <!-- 구름 -->
      <g class="cloud-drift" opacity="0.7">
        <ellipse cx="400" cy="180" rx="100" ry="22" fill="#fff8e7"/>
        <ellipse cx="350" cy="195" rx="70" ry="20" fill="#fff8e7"/>
      </g>
      <g class="cloud-drift" opacity="0.6" style="animation-delay:-12s">
        <ellipse cx="1300" cy="220" rx="120" ry="24" fill="#fff8e7"/>
        <ellipse cx="1380" cy="210" rx="80" ry="22" fill="#fff8e7"/>
      </g>
      <!-- 멀리 산 -->
      <path d="M 0 600 L 280 480 L 540 560 L 800 490 L 1080 570 L 1340 500 L 1620 580 L 1920 510 L 1920 700 L 0 700 Z"
            fill="#a8b89a" opacity="0.6"/>
      <!-- 잔디 -->
      <rect y="700" width="1920" height="380" fill="url(#grassGarden)"/>
      <!-- 잔디 디테일 -->
      <g opacity="0.5">
        <line x1="100" y1="780" x2="105" y2="760" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="200" y1="800" x2="208" y2="775" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="350" y1="820" x2="358" y2="795" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="600" y1="850" x2="608" y2="822" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="900" y1="880" x2="908" y2="855" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="1200" y1="900" x2="1208" y2="875" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="1500" y1="850" x2="1508" y2="825" stroke="#4a6a3a" stroke-width="2"/>
        <line x1="1700" y1="820" x2="1708" y2="795" stroke="#4a6a3a" stroke-width="2"/>
      </g>
      <!-- 좌측 올리브 나무 (큰 그늘) -->
      <g transform="translate(220, 700)">
        <rect x="-15" y="-150" width="30" height="150" fill="#5d4a30"/>
        <ellipse cx="0" cy="-180" rx="160" ry="120" fill="#7a9b5a"/>
        <ellipse cx="-50" cy="-220" rx="80" ry="60" fill="#8aab6a" opacity="0.85"/>
        <ellipse cx="50" cy="-200" rx="80" ry="60" fill="#8aab6a" opacity="0.85"/>
        <!-- 올리브 -->
        <circle cx="-30" cy="-160" r="5" fill="#3a4a2a"/>
        <circle cx="20" cy="-180" r="5" fill="#3a4a2a"/>
        <circle cx="-60" cy="-200" r="5" fill="#3a4a2a"/>
        <circle cx="40" cy="-220" r="5" fill="#3a4a2a"/>
      </g>
      <!-- 우측 올리브 나무 -->
      <g transform="translate(1700, 700)">
        <rect x="-12" y="-130" width="24" height="130" fill="#5d4a30"/>
        <ellipse cx="0" cy="-160" rx="140" ry="100" fill="#7a9b5a"/>
        <ellipse cx="-40" cy="-190" rx="70" ry="55" fill="#8aab6a" opacity="0.85"/>
        <ellipse cx="40" cy="-180" rx="70" ry="55" fill="#8aab6a" opacity="0.85"/>
        <circle cx="-20" cy="-150" r="4" fill="#3a4a2a"/>
        <circle cx="30" cy="-170" r="4" fill="#3a4a2a"/>
      </g>
      <!-- 가운데 돌 벤치 -->
      <g transform="translate(900, 850)">
        <rect x="-100" y="0" width="200" height="30" fill="#a8a08a"/>
        <rect x="-90" y="30" width="20" height="40" fill="#8a8270"/>
        <rect x="70" y="30" width="20" height="40" fill="#8a8270"/>
      </g>
      <!-- 작은 꽃 -->
      <g>
        <circle cx="500" cy="900" r="6" fill="#e8a070"/>
        <circle cx="500" cy="900" r="3" fill="#fff5d6"/>
        <circle cx="700" cy="950" r="6" fill="#d68aa8"/>
        <circle cx="700" cy="950" r="3" fill="#fff5d6"/>
        <circle cx="1100" cy="920" r="6" fill="#e8a070"/>
        <circle cx="1100" cy="920" r="3" fill="#fff5d6"/>
        <circle cx="1300" cy="970" r="6" fill="#d68aa8"/>
        <circle cx="1300" cy="970" r="3" fill="#fff5d6"/>
      </g>
    </svg>
  `,

  // === Scene 7: 학당 도서관 (양피지·서가) ===
  library: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="libWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c8a87a"/>
          <stop offset="100%" stop-color="#8b6f47"/>
        </linearGradient>
        <linearGradient id="libFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#6b4423"/>
          <stop offset="100%" stop-color="#3a2818"/>
        </linearGradient>
        <radialGradient id="libLight" cx="50%" cy="30%" r="60%">
          <stop offset="0%" stop-color="#ffd47a" stop-opacity="0.4"/>
          <stop offset="100%" stop-color="#ffd47a" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="820" fill="url(#libWall)"/>
      <rect width="1920" height="820" fill="url(#libLight)"/>
      <rect y="820" width="1920" height="260" fill="url(#libFloor)"/>
      <!-- 좌측 거대 서가 -->
      <g>
        <rect x="40" y="120" width="500" height="700" fill="#5d4a30"/>
        <rect x="40" y="120" width="500" height="20" fill="#3a2818"/>
        <rect x="40" y="800" width="500" height="20" fill="#3a2818"/>
        <!-- 선반 줄 -->
        <line x1="40" y1="240" x2="540" y2="240" stroke="#3a2818" stroke-width="6"/>
        <line x1="40" y1="360" x2="540" y2="360" stroke="#3a2818" stroke-width="6"/>
        <line x1="40" y1="480" x2="540" y2="480" stroke="#3a2818" stroke-width="6"/>
        <line x1="40" y1="600" x2="540" y2="600" stroke="#3a2818" stroke-width="6"/>
        <line x1="40" y1="720" x2="540" y2="720" stroke="#3a2818" stroke-width="6"/>
        <!-- 두루마리 (각 칸에) -->
        <g>
          <!-- 1단 -->
          <rect x="70" y="155" width="22" height="80" fill="#e8d4b0"/>
          <rect x="100" y="160" width="22" height="75" fill="#d4b890"/>
          <rect x="130" y="150" width="22" height="85" fill="#e8d4b0"/>
          <rect x="160" y="165" width="22" height="70" fill="#c8a87a"/>
          <rect x="200" y="155" width="22" height="80" fill="#e8d4b0"/>
          <rect x="230" y="160" width="22" height="75" fill="#d4b890"/>
          <rect x="270" y="150" width="22" height="85" fill="#e8d4b0"/>
          <rect x="310" y="165" width="22" height="70" fill="#c8a87a"/>
          <rect x="350" y="155" width="22" height="80" fill="#e8d4b0"/>
          <rect x="390" y="160" width="22" height="75" fill="#d4b890"/>
          <rect x="430" y="150" width="22" height="85" fill="#e8d4b0"/>
          <rect x="470" y="165" width="22" height="70" fill="#c8a87a"/>
          <!-- 2단 -->
          <rect x="70" y="275" width="22" height="80" fill="#d4b890"/>
          <rect x="100" y="280" width="22" height="75" fill="#e8d4b0"/>
          <rect x="140" y="270" width="22" height="85" fill="#c8a87a"/>
          <rect x="180" y="285" width="22" height="70" fill="#e8d4b0"/>
          <rect x="220" y="275" width="22" height="80" fill="#d4b890"/>
          <rect x="260" y="280" width="22" height="75" fill="#e8d4b0"/>
          <rect x="300" y="270" width="22" height="85" fill="#c8a87a"/>
          <rect x="340" y="285" width="22" height="70" fill="#e8d4b0"/>
          <rect x="380" y="275" width="22" height="80" fill="#d4b890"/>
          <rect x="420" y="280" width="22" height="75" fill="#e8d4b0"/>
          <rect x="460" y="270" width="22" height="85" fill="#c8a87a"/>
          <!-- 3단 -->
          <rect x="70" y="395" width="22" height="80" fill="#e8d4b0"/>
          <rect x="100" y="400" width="22" height="75" fill="#d4b890"/>
          <rect x="140" y="390" width="22" height="85" fill="#e8d4b0"/>
          <rect x="180" y="405" width="22" height="70" fill="#c8a87a"/>
          <rect x="220" y="395" width="22" height="80" fill="#e8d4b0"/>
          <rect x="260" y="400" width="22" height="75" fill="#d4b890"/>
          <rect x="300" y="390" width="22" height="85" fill="#e8d4b0"/>
          <rect x="340" y="405" width="22" height="70" fill="#c8a87a"/>
          <rect x="380" y="395" width="22" height="80" fill="#e8d4b0"/>
          <rect x="420" y="400" width="22" height="75" fill="#d4b890"/>
          <rect x="460" y="390" width="22" height="85" fill="#e8d4b0"/>
          <!-- 4단 -->
          <rect x="70" y="515" width="22" height="80" fill="#c8a87a"/>
          <rect x="100" y="520" width="22" height="75" fill="#e8d4b0"/>
          <rect x="140" y="510" width="22" height="85" fill="#d4b890"/>
          <rect x="180" y="525" width="22" height="70" fill="#e8d4b0"/>
          <rect x="220" y="515" width="22" height="80" fill="#c8a87a"/>
          <rect x="260" y="520" width="22" height="75" fill="#e8d4b0"/>
          <rect x="300" y="510" width="22" height="85" fill="#d4b890"/>
          <rect x="340" y="525" width="22" height="70" fill="#e8d4b0"/>
          <rect x="380" y="515" width="22" height="80" fill="#c8a87a"/>
          <rect x="420" y="520" width="22" height="75" fill="#e8d4b0"/>
          <rect x="460" y="510" width="22" height="85" fill="#d4b890"/>
          <!-- 5단 -->
          <rect x="70" y="635" width="22" height="80" fill="#e8d4b0"/>
          <rect x="100" y="640" width="22" height="75" fill="#d4b890"/>
          <rect x="140" y="630" width="22" height="85" fill="#e8d4b0"/>
          <rect x="180" y="645" width="22" height="70" fill="#c8a87a"/>
          <rect x="220" y="635" width="22" height="80" fill="#e8d4b0"/>
          <rect x="260" y="640" width="22" height="75" fill="#d4b890"/>
          <rect x="300" y="630" width="22" height="85" fill="#e8d4b0"/>
          <rect x="340" y="645" width="22" height="70" fill="#c8a87a"/>
          <rect x="380" y="635" width="22" height="80" fill="#e8d4b0"/>
          <rect x="420" y="640" width="22" height="75" fill="#d4b890"/>
          <rect x="460" y="630" width="22" height="85" fill="#e8d4b0"/>
        </g>
      </g>
      <!-- 우측 거대 서가 (대칭) -->
      <g>
        <rect x="1380" y="120" width="500" height="700" fill="#5d4a30"/>
        <rect x="1380" y="120" width="500" height="20" fill="#3a2818"/>
        <rect x="1380" y="800" width="500" height="20" fill="#3a2818"/>
        <line x1="1380" y1="240" x2="1880" y2="240" stroke="#3a2818" stroke-width="6"/>
        <line x1="1380" y1="360" x2="1880" y2="360" stroke="#3a2818" stroke-width="6"/>
        <line x1="1380" y1="480" x2="1880" y2="480" stroke="#3a2818" stroke-width="6"/>
        <line x1="1380" y1="600" x2="1880" y2="600" stroke="#3a2818" stroke-width="6"/>
        <line x1="1380" y1="720" x2="1880" y2="720" stroke="#3a2818" stroke-width="6"/>
        <g>
          <rect x="1410" y="155" width="22" height="80" fill="#d4b890"/>
          <rect x="1450" y="160" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1490" y="150" width="22" height="85" fill="#c8a87a"/>
          <rect x="1530" y="165" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1570" y="155" width="22" height="80" fill="#d4b890"/>
          <rect x="1610" y="160" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1650" y="150" width="22" height="85" fill="#c8a87a"/>
          <rect x="1690" y="165" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1730" y="155" width="22" height="80" fill="#d4b890"/>
          <rect x="1770" y="160" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1810" y="150" width="22" height="85" fill="#c8a87a"/>
          <rect x="1410" y="275" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1450" y="280" width="22" height="75" fill="#d4b890"/>
          <rect x="1490" y="270" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1530" y="285" width="22" height="70" fill="#c8a87a"/>
          <rect x="1570" y="275" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1610" y="280" width="22" height="75" fill="#d4b890"/>
          <rect x="1650" y="270" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1690" y="285" width="22" height="70" fill="#c8a87a"/>
          <rect x="1730" y="275" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1770" y="280" width="22" height="75" fill="#d4b890"/>
          <rect x="1810" y="270" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1410" y="395" width="22" height="80" fill="#c8a87a"/>
          <rect x="1450" y="400" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1490" y="390" width="22" height="85" fill="#d4b890"/>
          <rect x="1530" y="405" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1570" y="395" width="22" height="80" fill="#c8a87a"/>
          <rect x="1610" y="400" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1650" y="390" width="22" height="85" fill="#d4b890"/>
          <rect x="1690" y="405" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1730" y="395" width="22" height="80" fill="#c8a87a"/>
          <rect x="1770" y="400" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1810" y="390" width="22" height="85" fill="#d4b890"/>
          <rect x="1410" y="515" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1450" y="520" width="22" height="75" fill="#d4b890"/>
          <rect x="1490" y="510" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1530" y="525" width="22" height="70" fill="#c8a87a"/>
          <rect x="1570" y="515" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1610" y="520" width="22" height="75" fill="#d4b890"/>
          <rect x="1650" y="510" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1690" y="525" width="22" height="70" fill="#c8a87a"/>
          <rect x="1730" y="515" width="22" height="80" fill="#e8d4b0"/>
          <rect x="1770" y="520" width="22" height="75" fill="#d4b890"/>
          <rect x="1810" y="510" width="22" height="85" fill="#e8d4b0"/>
          <rect x="1410" y="635" width="22" height="80" fill="#d4b890"/>
          <rect x="1450" y="640" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1490" y="630" width="22" height="85" fill="#c8a87a"/>
          <rect x="1530" y="645" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1570" y="635" width="22" height="80" fill="#d4b890"/>
          <rect x="1610" y="640" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1650" y="630" width="22" height="85" fill="#c8a87a"/>
          <rect x="1690" y="645" width="22" height="70" fill="#e8d4b0"/>
          <rect x="1730" y="635" width="22" height="80" fill="#d4b890"/>
          <rect x="1770" y="640" width="22" height="75" fill="#e8d4b0"/>
          <rect x="1810" y="630" width="22" height="85" fill="#c8a87a"/>
        </g>
      </g>
      <!-- 가운데 큰 책상 -->
      <g transform="translate(960, 720)">
        <rect x="-180" y="80" width="360" height="100" fill="#5d4a30"/>
        <rect x="-190" y="70" width="380" height="20" fill="#3a2818"/>
        <rect x="-160" y="180" width="20" height="60" fill="#3a2818"/>
        <rect x="140" y="180" width="20" height="60" fill="#3a2818"/>
        <!-- 책상 위 펼친 두루마리 -->
        <rect x="-100" y="40" width="200" height="35" fill="#f5e6d3"/>
        <ellipse cx="-100" cy="57" rx="8" ry="18" fill="#a8814e"/>
        <ellipse cx="100" cy="57" rx="8" ry="18" fill="#a8814e"/>
        <!-- 두루마리 위 글자 (선) -->
        <line x1="-80" y1="50" x2="80" y2="50" stroke="#5d4a30" stroke-width="1"/>
        <line x1="-80" y1="60" x2="80" y2="60" stroke="#5d4a30" stroke-width="1"/>
      </g>
      <!-- 촛대 (책상 위) -->
      <g class="torch-flicker" transform="translate(800, 700)">
        <rect x="-3" y="0" width="6" height="40" fill="#a8814e"/>
        <ellipse cx="0" cy="0" rx="8" ry="3" fill="#8b6f47"/>
        <ellipse cx="0" cy="-12" rx="6" ry="14" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-10" rx="3" ry="8" fill="#fff5d6"/>
      </g>
    </svg>
  `,

  // === Scene 8/9: 학당 마당·중앙 광장 ===
  yard: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="skyYard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#a8c5d4"/>
          <stop offset="100%" stop-color="#dce8e8"/>
        </linearGradient>
        <linearGradient id="groundYard" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#c8a87a"/>
          <stop offset="100%" stop-color="#8b6f47"/>
        </linearGradient>
      </defs>
      <rect width="1920" height="650" fill="url(#skyYard)"/>
      <!-- 구름 -->
      <g class="cloud-drift" opacity="0.7">
        <ellipse cx="500" cy="160" rx="110" ry="24" fill="#fff8e7"/>
        <ellipse cx="450" cy="175" rx="80" ry="22" fill="#fff8e7"/>
      </g>
      <g class="cloud-drift" opacity="0.6" style="animation-delay:-10s">
        <ellipse cx="1500" cy="220" rx="120" ry="26" fill="#fff8e7"/>
        <ellipse cx="1430" cy="210" rx="80" ry="22" fill="#fff8e7"/>
      </g>
      <!-- 학당 건물 (멀리 보이는 신전 모양) -->
      <g>
        <!-- 우측 작은 신전 -->
        <rect x="1350" y="320" width="450" height="280" fill="#e8d4b0"/>
        <polygon points="1350,320 1575,200 1800,320" fill="#c8a87a"/>
        <polygon points="1380,310 1575,230 1770,310" fill="#fff5e8" opacity="0.7"/>
        <!-- 기둥들 -->
        <rect x="1380" y="350" width="30" height="250" fill="#d4b890"/>
        <rect x="1450" y="350" width="30" height="250" fill="#d4b890"/>
        <rect x="1520" y="350" width="30" height="250" fill="#d4b890"/>
        <rect x="1600" y="350" width="30" height="250" fill="#d4b890"/>
        <rect x="1670" y="350" width="30" height="250" fill="#d4b890"/>
        <rect x="1740" y="350" width="30" height="250" fill="#d4b890"/>
        <!-- 기단 -->
        <rect x="1340" y="600" width="470" height="20" fill="#a8814e"/>
        <rect x="1330" y="620" width="490" height="20" fill="#8b6f47"/>
      </g>
      <!-- 좌측 신전 -->
      <g>
        <rect x="100" y="350" width="400" height="260" fill="#e8d4b0"/>
        <polygon points="100,350 300,240 500,350" fill="#c8a87a"/>
        <polygon points="130,340 300,270 470,340" fill="#fff5e8" opacity="0.7"/>
        <rect x="130" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="195" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="260" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="325" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="390" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="450" y="380" width="28" height="230" fill="#d4b890"/>
        <rect x="90" y="610" width="420" height="20" fill="#a8814e"/>
        <rect x="80" y="630" width="440" height="20" fill="#8b6f47"/>
      </g>
      <!-- 바닥 (광장) -->
      <rect y="650" width="1920" height="430" fill="url(#groundYard)"/>
      <!-- 광장 타일 -->
      <g opacity="0.4" stroke="#5d4a30" stroke-width="1" fill="none">
        <line x1="0" y1="720" x2="1920" y2="720"/>
        <line x1="0" y1="800" x2="1920" y2="800"/>
        <line x1="0" y1="880" x2="1920" y2="880"/>
        <line x1="0" y1="960" x2="1920" y2="960"/>
      </g>
      <!-- 가운데 큰 나무 -->
      <g transform="translate(960, 650)">
        <rect x="-25" y="-220" width="50" height="220" fill="#5d4a30"/>
        <ellipse cx="0" cy="-260" rx="200" ry="160" fill="#7a9b5a"/>
        <ellipse cx="-70" cy="-310" rx="100" ry="70" fill="#8aab6a" opacity="0.85"/>
        <ellipse cx="70" cy="-290" rx="100" ry="70" fill="#8aab6a" opacity="0.85"/>
      </g>
      <!-- 분수 (작게) -->
      <g transform="translate(700, 850)">
        <ellipse cx="0" cy="40" rx="80" ry="20" fill="#a8a08a"/>
        <ellipse cx="0" cy="40" rx="60" ry="14" fill="#7a9bb0"/>
        <rect x="-8" y="-30" width="16" height="60" fill="#a8a08a"/>
        <ellipse cx="0" cy="-30" rx="20" ry="6" fill="#8a8270"/>
        <!-- 물줄기 -->
        <path d="M -3 -35 q -3 -15 0 -25" stroke="#a8c5d4" stroke-width="2" fill="none"/>
        <path d="M 3 -35 q 3 -15 0 -25" stroke="#a8c5d4" stroke-width="2" fill="none"/>
      </g>
    </svg>
  `,

  // === Scene 10: 지하 보관고 입구 (어둡고 신비) ===
  basement: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="baseWall" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#3a2818"/>
          <stop offset="100%" stop-color="#1a0f08"/>
        </linearGradient>
        <linearGradient id="baseFloor" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a0f08"/>
          <stop offset="100%" stop-color="#0a0604"/>
        </linearGradient>
        <radialGradient id="baseGlow" cx="50%" cy="55%" r="50%">
          <stop offset="0%" stop-color="#ffd47a" stop-opacity="0.6"/>
          <stop offset="40%" stop-color="#ffaa44" stop-opacity="0.25"/>
          <stop offset="100%" stop-color="#ffaa44" stop-opacity="0"/>
        </radialGradient>
      </defs>
      <rect width="1920" height="780" fill="url(#baseWall)"/>
      <rect y="780" width="1920" height="300" fill="url(#baseFloor)"/>
      <!-- 가운데 아치형 입구 -->
      <g>
        <path d="M 760 800 L 760 500 Q 760 360 960 360 Q 1160 360 1160 500 L 1160 800 Z"
              fill="#0a0604"/>
        <path d="M 760 800 L 760 500 Q 760 360 960 360 Q 1160 360 1160 500 L 1160 800"
              stroke="#5d4a30" stroke-width="8" fill="none"/>
        <!-- 아치 돌 블록 -->
        <g stroke="#3a2818" stroke-width="2">
          <line x1="780" y1="380" x2="800" y2="395"/>
          <line x1="830" y1="370" x2="845" y2="380"/>
          <line x1="880" y1="362" x2="888" y2="370"/>
          <line x1="960" y1="360" x2="960" y2="370"/>
          <line x1="1030" y1="362" x2="1038" y2="370"/>
          <line x1="1080" y1="370" x2="1095" y2="380"/>
          <line x1="1130" y1="380" x2="1145" y2="395"/>
        </g>
      </g>
      <!-- 입구 안쪽 빛 -->
      <ellipse cx="960" cy="700" rx="200" ry="350" fill="url(#baseGlow)"/>
      <!-- 입구 위 키스톤 (별 모양) -->
      <g transform="translate(960, 380)">
        <polygon points="0,-15 4,-4 15,-4 6,3 9,14 0,7 -9,14 -6,3 -15,-4 -4,-4"
                 fill="#f5d99a"/>
      </g>
      <!-- 좌우 기둥 -->
      <g>
        <rect x="60" y="200" width="80" height="600" fill="#5d4a30"/>
        <rect x="50" y="180" width="100" height="30" fill="#3a2818"/>
        <rect x="50" y="800" width="100" height="20" fill="#1a0f08"/>
        <rect x="1780" y="200" width="80" height="600" fill="#5d4a30"/>
        <rect x="1770" y="180" width="100" height="30" fill="#3a2818"/>
        <rect x="1770" y="800" width="100" height="20" fill="#1a0f08"/>
      </g>
      <!-- 횃불 (양쪽) -->
      <g class="torch-flicker" transform="translate(280, 450)">
        <rect x="-4" y="0" width="8" height="100" fill="#5d4a30"/>
        <ellipse cx="0" cy="-20" rx="20" ry="32" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-15" rx="10" ry="20" fill="#fff5d6" opacity="0.95"/>
      </g>
      <g class="torch-flicker" transform="translate(1640, 450)" style="animation-delay:-0.5s">
        <rect x="-4" y="0" width="8" height="100" fill="#5d4a30"/>
        <ellipse cx="0" cy="-20" rx="20" ry="32" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-15" rx="10" ry="20" fill="#fff5d6" opacity="0.95"/>
      </g>
      <g class="torch-flicker" transform="translate(550, 540)" style="animation-delay:-1s">
        <rect x="-3" y="0" width="6" height="80" fill="#5d4a30"/>
        <ellipse cx="0" cy="-15" rx="14" ry="22" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-12" rx="7" ry="14" fill="#fff5d6" opacity="0.9"/>
      </g>
      <g class="torch-flicker" transform="translate(1370, 540)" style="animation-delay:-1.3s">
        <rect x="-3" y="0" width="6" height="80" fill="#5d4a30"/>
        <ellipse cx="0" cy="-15" rx="14" ry="22" fill="#ffaa44" opacity="0.85"/>
        <ellipse cx="0" cy="-12" rx="7" ry="14" fill="#fff5d6" opacity="0.9"/>
      </g>
      <!-- 바닥 돌 라인 -->
      <g opacity="0.3" stroke="#5d4a30" stroke-width="1" fill="none">
        <line x1="0" y1="850" x2="1920" y2="850"/>
        <line x1="0" y1="930" x2="1920" y2="930"/>
        <line x1="0" y1="1010" x2="1920" y2="1010"/>
      </g>
      <!-- 신비한 빛 입자 -->
      <g class="water-shimmer" opacity="0.6">
        <circle cx="500" cy="500" r="3" fill="#fff5d6"/>
        <circle cx="700" cy="600" r="2" fill="#fff5d6"/>
        <circle cx="1300" cy="550" r="3" fill="#fff5d6"/>
        <circle cx="1500" cy="650" r="2" fill="#fff5d6"/>
      </g>
    </svg>
  `,

  // === 타이틀 화면 배경 (학당 전경) ===
  title: `
    <svg viewBox="0 0 1920 1080" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <linearGradient id="titleSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="#1a0f30"/>
          <stop offset="50%" stop-color="#3a2050"/>
          <stop offset="100%" stop-color="#5d3a40"/>
        </linearGradient>
      </defs>
      <rect width="1920" height="1080" fill="url(#titleSky)"/>
      <!-- 별 -->
      <g fill="#fff5d6">
        <circle cx="200" cy="150" r="2"/>
        <circle cx="400" cy="80" r="1.5"/>
        <circle cx="600" cy="180" r="2"/>
        <circle cx="800" cy="100" r="1.5"/>
        <circle cx="1000" cy="160" r="2"/>
        <circle cx="1200" cy="90" r="1.5"/>
        <circle cx="1400" cy="170" r="2"/>
        <circle cx="1600" cy="120" r="1.5"/>
        <circle cx="1800" cy="200" r="2"/>
        <circle cx="300" cy="280" r="1.5"/>
        <circle cx="700" cy="250" r="2"/>
        <circle cx="1100" cy="280" r="1.5"/>
        <circle cx="1500" cy="240" r="2"/>
      </g>
      <!-- 달 -->
      <circle cx="1500" cy="220" r="80" fill="#fff5d6" opacity="0.9"/>
      <circle cx="1480" cy="200" r="20" fill="#a8a07a" opacity="0.3"/>
      <circle cx="1530" cy="240" r="15" fill="#a8a07a" opacity="0.3"/>
      <!-- 멀리 신전 실루엣 -->
      <g>
        <rect x="600" y="600" width="720" height="280" fill="#1a0f08"/>
        <polygon points="600,600 960,400 1320,600" fill="#0a0604"/>
        <rect x="640" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="720" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="800" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="880" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="960" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="1040" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="1120" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="1200" y="640" width="40" height="240" fill="#3a2818"/>
        <rect x="1280" y="640" width="40" height="240" fill="#3a2818"/>
      </g>
      <!-- 땅 -->
      <rect y="880" width="1920" height="200" fill="#0a0604"/>
    </svg>
  `,
};

