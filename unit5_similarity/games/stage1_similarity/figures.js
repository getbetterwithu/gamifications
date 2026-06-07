// ===== 문제 도형 SVG 라이브러리 (FIGURES) =====
// problems.js의 figureKey가 이 객체를 참조. 교과서 수치를 그대로 반영해 직접 작도.
// 게임 톤: 따뜻한 베이지 배경 위 진한 잉크 선 + 테라코타/올리브 강조.
// self-similar(a4_fold, golden_rectangle)는 Phase 4에서 동적 인터랙션으로 그리므로 여기 없음.

const FIG_STYLE = {
  stroke: '#3a2f22', strokeW: 2.5,
  fill: '#e9ddc4', fillTri: '#dbe6cf', fillTri2: '#f0d9c4',
  label: '#3a2f22', accent: '#b5642f', dash: '#8a7a5a',
  font: 'font-family:\'Noto Sans KR\',sans-serif;font-size:18px;fill:#3a2f22;',
  fontS: 'font-family:\'Noto Sans KR\',sans-serif;font-size:15px;fill:#3a2f22;',
};

const FIGURES = {

  // 2. BRICK — 사암벽돌 신전 모형 (축척 1/18). 모형 길이 30m·높이 0.4m
  tunnel_scale: `
    <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
      <!-- 신전 모형 (간략한 그리스 신전 실루엣) -->
      <rect x="60" y="150" width="300" height="70" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2.5"/>
      <polygon points="50,150 370,150 340,110 80,110" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <!-- 기둥들 -->
      <line x1="100" y1="150" x2="100" y2="220" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="160" y1="150" x2="160" y2="220" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="220" y1="150" x2="220" y2="220" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="280" y1="150" x2="280" y2="220" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="340" y1="150" x2="340" y2="220" stroke="#3a2f22" stroke-width="2.5"/>
      <!-- 치수: 길이 30m -->
      <line x1="60" y1="245" x2="360" y2="245" stroke="#b5642f" stroke-width="1.5" marker-start="url(#ar)" marker-end="url(#ar)"/>
      <text x="210" y="265" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:16px;fill:#b5642f;">길이 30 m</text>
      <!-- 치수: 높이 0.4m -->
      <line x1="385" y1="110" x2="385" y2="220" stroke="#b5642f" stroke-width="1.5" marker-start="url(#ar)" marker-end="url(#ar)"/>
      <text x="400" y="170" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:15px;fill:#b5642f;" transform="rotate(90,400,170)">높이 0.4 m</text>
      <text x="210" y="30" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:16px;fill:#3a2f22;font-weight:700;">신전 모형 (실제의 1/18)</text>
      <defs><marker id="ar" markerWidth="8" markerHeight="8" refX="4" refY="4" orient="auto"><path d="M1,1 L7,4 L1,7" fill="none" stroke="#b5642f" stroke-width="1.2"/></marker></defs>
    </svg>`,

  // 3. GLASS — 닮은 두 삼각형 (넓이비). AB=8, DE=10
  two_triangles_area: `
    <svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg">
      <!-- 작은 삼각형 ABC -->
      <polygon points="60,210 170,210 110,90" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <text x="105" y="80" text-anchor="middle" style="font-family:serif;font-size:17px;">A</text>
      <text x="48" y="225" style="font-family:serif;font-size:17px;">B</text>
      <text x="175" y="225" style="font-family:serif;font-size:17px;">C</text>
      <text x="68" y="150" text-anchor="end" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">8 cm</text>
      <!-- 큰 삼각형 DEF -->
      <polygon points="250,220 400,220 325,60 " fill="#f0d9c4" stroke="#3a2f22" stroke-width="2.5"/>
      <text x="320" y="50" text-anchor="middle" style="font-family:serif;font-size:17px;">D</text>
      <text x="238" y="235" style="font-family:serif;font-size:17px;">E</text>
      <text x="405" y="235" style="font-family:serif;font-size:17px;">F</text>
      <text x="262" y="150" text-anchor="end" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">10 cm</text>
      <text x="220" y="265" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:15px;fill:#3a2f22;">△ABC ∽ △DEF · △ABC 넓이 = 32 cm²</text>
    </svg>`,

  // 4. CLAY — 닮은 두 원기둥 (부피비). 닮음비 3:4
  two_cylinders_volume: `
    <svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg">
      <!-- 작은 항아리 -->
      <ellipse cx="120" cy="120" rx="45" ry="14" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2.5"/>
      <path d="M75,120 L75,210 A45,14 0 0 0 165,210 L165,120" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2.5"/>
      <ellipse cx="120" cy="210" rx="45" ry="14" fill="none" stroke="#3a2f22" stroke-width="2.5"/>
      <text x="120" y="245" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:14px;fill:#3a2f22;">작은 항아리</text>
      <text x="120" y="263" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">부피 54π cm³</text>
      <!-- 큰 항아리 -->
      <ellipse cx="300" cy="90" rx="60" ry="18" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <path d="M240,90 L240,210 A60,18 0 0 0 360,210 L360,90" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <ellipse cx="300" cy="210" rx="60" ry="18" fill="none" stroke="#3a2f22" stroke-width="2.5"/>
      <text x="300" y="245" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:14px;fill:#3a2f22;">큰 항아리</text>
      <text x="210" y="30" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:15px;fill:#3a2f22;font-weight:700;">닮음비(반지름) 3 : 4</text>
    </svg>`,

  // 5. KEY — 6개 삼각형 닮음 매칭
  // (1)6,4,끼75 (2)5,3,4 (3)40,35 (4)105,40 (5)6,8,10 (6)9,6,끼75
  six_triangles: `
    <svg viewBox="0 0 600 360" xmlns="http://www.w3.org/2000/svg">
      <!-- (1) 두 변 6,4 + 끼인각 75 -->
      <polygon points="40,90 150,75 95,170" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2"/>
      <text x="35" y="70" style="font-family:serif;font-size:14px;">(1)</text>
      <text x="95" y="68" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">6</text>
      <text x="55" y="135" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">4</text>
      <text x="62" y="100" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">75°</text>
      <!-- (2) 5,3,4 -->
      <polygon points="240,75 340,80 285,165" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2"/>
      <text x="230" y="70" style="font-family:serif;font-size:14px;">(2)</text>
      <text x="285" y="68" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">5</text>
      <text x="245" y="130" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">3</text>
      <text x="320" y="130" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">4</text>
      <!-- (3) 40, 35 -->
      <polygon points="420,160 560,160 495,85" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2"/>
      <text x="415" y="80" style="font-family:serif;font-size:14px;">(3)</text>
      <text x="432" y="153" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">40°</text>
      <text x="530" y="153" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">35°</text>
      <!-- (4) 105, 40 -->
      <polygon points="60,290 180,250 90,340" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2"/>
      <text x="40" y="245" style="font-family:serif;font-size:14px;">(4)</text>
      <text x="80" y="278" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">105°</text>
      <text x="150" y="262" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">40°</text>
      <!-- (5) 6,8,10 -->
      <polygon points="250,240 340,240 250,340" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2"/>
      <text x="232" y="245" style="font-family:serif;font-size:14px;">(5)</text>
      <text x="290" y="232" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">6</text>
      <text x="232" y="295" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">8</text>
      <text x="305" y="300" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">10</text>
      <!-- (6) 9,6 + 끼75 -->
      <polygon points="470,250 560,330 430,340" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2"/>
      <text x="420" y="245" style="font-family:serif;font-size:14px;">(6)</text>
      <text x="440" y="290" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">9</text>
      <text x="510" y="300" style="font-family:'Noto Sans KR';font-size:12px;fill:#b5642f;">6</text>
      <text x="448" y="332" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">75°</text>
    </svg>`,

  // 6. TOOL1 — 공통각 AA. △ABC 안에 점 D, ∠C=∠ABD, AB=6, AD=4
  common_angle_AA: `
    <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="60,240 360,240 110,60" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <!-- 점 D on AC, 선분 BD -->
      <line x1="60" y1="240" x2="200" y2="160" stroke="#b5642f" stroke-width="2" stroke-dasharray="0"/>
      <circle cx="200" cy="160" r="3.5" fill="#3a2f22"/>
      <text x="100" y="50" style="font-family:serif;font-size:17px;">A</text>
      <text x="45" y="255" style="font-family:serif;font-size:17px;">B</text>
      <text x="365" y="255" style="font-family:serif;font-size:17px;">C</text>
      <text x="208" y="158" style="font-family:serif;font-size:17px;">D</text>
      <text x="70" y="150" text-anchor="end" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">6 cm (AB)</text>
      <text x="150" y="110" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">AD=4 cm</text>
      <text x="210" y="285" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:14px;fill:#3a2f22;">∠C = ∠ABD</text>
    </svg>`,

  // 7. TOOL2 — 맞꼭지각 SAS. X자 교차. AC=9,BC=12,DC=6,EC=8,AB=15
  vertical_angle_SAS: `
    <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <!-- 두 선분이 C에서 교차 -->
      <line x1="60" y1="70" x2="360" y2="230" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="60" y1="230" x2="360" y2="70" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="60" y1="70" x2="60" y2="230" stroke="#3a2f22" stroke-width="2.5"/>   <!-- AB -->
      <line x1="360" y1="70" x2="360" y2="230" stroke="#b5642f" stroke-width="2.5"/> <!-- DE -->
      <circle cx="210" cy="150" r="3.5" fill="#3a2f22"/>
      <text x="45" y="65" style="font-family:serif;font-size:16px;">A</text>
      <text x="45" y="245" style="font-family:serif;font-size:16px;">B</text>
      <text x="215" y="145" style="font-family:serif;font-size:16px;">C</text>
      <text x="365" y="65" style="font-family:serif;font-size:16px;">E</text>
      <text x="365" y="245" style="font-family:serif;font-size:16px;">D</text>
      <text x="125" y="95" style="font-family:'Noto Sans KR';font-size:13px;fill:#3a2f22;">9</text>
      <text x="125" y="215" style="font-family:'Noto Sans KR';font-size:13px;fill:#3a2f22;">12</text>
      <text x="288" y="95" style="font-family:'Noto Sans KR';font-size:13px;fill:#b5642f;">8</text>
      <text x="288" y="215" style="font-family:'Noto Sans KR';font-size:13px;fill:#b5642f;">6</text>
      <text x="38" y="155" style="font-family:'Noto Sans KR';font-size:13px;fill:#3a2f22;">15</text>
      <text x="378" y="155" style="font-family:'Noto Sans KR';font-size:15px;fill:#b5642f;font-weight:700;">?</text>
    </svg>`,

  // 8. MEASURE — 직각삼각형 빗변 수선. ∠A=90, AC=12, BC=16, CD=x
  right_triangle_perp: `
    <svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg">
      <polygon points="80,240 360,240 130,70" fill="#dbe6cf" stroke="#3a2f22" stroke-width="2.5"/>
      <!-- 수선 AD -->
      <line x1="130" y1="70" x2="172" y2="240" stroke="#b5642f" stroke-width="2"/>
      <circle cx="172" cy="240" r="3.5" fill="#3a2f22"/>
      <!-- 직각 표시 A -->
      <path d="M125,88 L143,92 L139,74" fill="none" stroke="#3a2f22" stroke-width="1.5"/>
      <!-- 직각 표시 D -->
      <rect x="160" y="228" width="12" height="12" fill="none" stroke="#3a2f22" stroke-width="1.3"/>
      <text x="120" y="60" style="font-family:serif;font-size:17px;">A</text>
      <text x="65" y="255" style="font-family:serif;font-size:17px;">B</text>
      <text x="365" y="255" style="font-family:serif;font-size:17px;">C</text>
      <text x="170" y="262" style="font-family:serif;font-size:17px;">D</text>
      <text x="250" y="150" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;">AC=12 cm</text>
      <text x="115" y="232" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:13px;fill:#3a2f22;">BC=16 cm</text>
      <text x="265" y="262" style="font-family:'Noto Sans KR';font-size:14px;fill:#b5642f;font-weight:700;">CD = x</text>
    </svg>`,

  // 9. SHADOW — 피라미드 + 막대 그림자 (닮은 직각삼각형)
  pyramid_shadow: `
    <svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg">
      <!-- 태양 -->
      <circle cx="70" cy="45" r="20" fill="#f0c419" opacity="0.8"/>
      <!-- 피라미드 -->
      <polygon points="120,220 280,220 200,90" fill="#f0d9c4" stroke="#3a2f22" stroke-width="2.5"/>
      <line x1="200" y1="90" x2="200" y2="220" stroke="#8a7a5a" stroke-width="1.2" stroke-dasharray="4,3"/>
      <!-- 피라미드 그림자 -->
      <line x1="200" y1="220" x2="400" y2="220" stroke="#b5642f" stroke-width="2"/>
      <text x="300" y="240" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:13px;fill:#b5642f;">220.5 m</text>
      <!-- 막대 + 그림자 -->
      <line x1="400" y1="220" x2="400" y2="185" stroke="#3a2f22" stroke-width="3"/>
      <line x1="400" y1="220" x2="430" y2="220" stroke="#b5642f" stroke-width="2"/>
      <text x="405" y="200" style="font-family:'Noto Sans KR';font-size:11px;fill:#3a2f22;">1m</text>
      <text x="415" y="240" style="font-family:'Noto Sans KR';font-size:10px;fill:#b5642f;">1.5m</text>
      <text x="200" y="80" text-anchor="middle" style="font-family:'Noto Sans KR';font-size:13px;fill:#3a2f22;">높이 = ?</text>
    </svg>`,

};
