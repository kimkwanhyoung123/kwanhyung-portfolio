/* Bespoke, illustration-first artwork for each project.
 * Goal: show what the project actually does at a glance — scenes and objects,
 * not abstract box-and-arrow diagrams. One inline SVG per `art` id. */

const MONO = "var(--font-jetbrains-mono), monospace";

interface ProjectArtProps {
  art: string;
  className?: string;
}

function Frame({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <svg
      viewBox="0 0 480 360"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label={label}
      style={{ width: "100%", height: "100%", display: "block" }}
    >
      <defs>
        <radialGradient id="glow" cx="78%" cy="14%" r="80%">
          <stop offset="0%" stopColor="#48d6c4" stopOpacity="0.14" />
          <stop offset="60%" stopColor="#48d6c4" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect x="0" y="0" width="480" height="360" rx="18" fill="#0a1220" />
      <rect x="0" y="0" width="480" height="360" rx="18" fill="url(#glow)" />
      {children}
    </svg>
  );
}

function Satellite() {
  return (
    <Frame label="위성·드론 영상처리 일러스트">
      {/* satellite */}
      <g transform="translate(44 44)">
        <rect x="26" y="0" width="34" height="46" rx="6" fill="#16324a" stroke="#48d6c4" strokeWidth="2" />
        <rect x="34" y="10" width="18" height="12" rx="2" fill="#0a1220" />
        <g fill="#0e2436" stroke="#7cc6ff" strokeWidth="1.5">
          <rect x="-30" y="8" width="52" height="30" rx="2" />
          <rect x="64" y="8" width="52" height="30" rx="2" />
        </g>
        <g stroke="#3a5a72" strokeWidth="1">
          <line x1="-13" y1="8" x2="-13" y2="38" /><line x1="4" y1="8" x2="4" y2="38" />
          <line x1="81" y1="8" x2="81" y2="38" /><line x1="98" y1="8" x2="98" y2="38" />
        </g>
      </g>
      {/* drone */}
      <g transform="translate(372 54)" stroke="#7cc6ff" strokeWidth="2" fill="none">
        <line x1="-22" y1="-14" x2="22" y2="14" /><line x1="22" y1="-14" x2="-22" y2="14" />
        <circle cx="-22" cy="-14" r="9" /><circle cx="22" cy="-14" r="9" />
        <circle cx="-22" cy="14" r="9" /><circle cx="22" cy="14" r="9" />
        <rect x="-9" y="-7" width="18" height="14" rx="3" fill="#16324a" />
      </g>
      {/* capture beams */}
      <g stroke="#48d6c4" strokeWidth="1.5" strokeDasharray="4 5" opacity="0.7">
        <line x1="120" y1="96" x2="205" y2="228" />
        <line x1="372" y1="88" x2="275" y2="228" />
      </g>
      {/* ground: NDVI tile field */}
      <g transform="translate(96 234)">
        <rect x="0" y="0" width="288" height="96" rx="8" fill="#0c1a24" stroke="#2b3a4d" />
        {["#ff6b6b","#ff9d5c","#f4d35e","#9ad06b","#6ee7a8","#3fbf8f",
          "#ff9d5c","#f4d35e","#9ad06b","#6ee7a8","#3fbf8f","#2aa87a",
          "#f4d35e","#9ad06b","#6ee7a8","#3fbf8f","#2aa87a","#1f8f66"].map((c, i) => (
          <rect key={i} x={12 + (i % 6) * 44} y={12 + Math.floor(i / 6) * 26} width="40" height="22" rx="3" fill={c} opacity="0.9" />
        ))}
      </g>
      <text x="240" y="348" textAnchor="middle" fontFamily={MONO} fontSize="12" fill="#97a3b6">
        NDVI · 식생지수 분석
      </text>
      {/* mini spectrum card */}
      <g transform="translate(300 150)">
        <rect x="0" y="0" width="132" height="66" rx="8" fill="#0e1c2b" stroke="#48d6c4" opacity="0.95" />
        <polyline points="10,50 30,24 52,40 74,16 96,34 122,20" fill="none" stroke="#48d6c4" strokeWidth="2.5" />
        <text x="12" y="16" fontFamily={MONO} fontSize="9" fill="#7cc6ff">픽셀 스펙트럼</text>
      </g>
    </Frame>
  );
}

function Viewer() {
  return (
    <Frame label="대용량 영상 렌더링 일러스트">
      {/* large image with grid */}
      <g transform="translate(40 44)">
        <rect x="0" y="0" width="300" height="272" rx="10" fill="#0d1f2b" stroke="#2b3a4d" />
        <g stroke="#173042" strokeWidth="1">
          {[1,2,3,4,5].map((i) => <line key={`v${i}`} x1={i*50} y1="0" x2={i*50} y2="272" />)}
          {[1,2,3,4].map((i) => <line key={`h${i}`} x1="0" y1={i*54} x2="300" y2={i*54} />)}
        </g>
        {/* faux terrain blobs */}
        <path d="M20 210 Q80 150 150 200 T300 180 L300 272 L0 272 Z" fill="#123a44" opacity="0.7" />
        <circle cx="90" cy="90" r="26" fill="#1c4a3a" opacity="0.8" />
        <rect x="180" y="60" width="60" height="40" rx="4" fill="#20364a" opacity="0.8" />
      </g>
      {/* magnifier lens */}
      <g transform="translate(250 150)">
        <circle cx="0" cy="0" r="66" fill="#0a1622" stroke="#48d6c4" strokeWidth="4" />
        <clipPath id="lens"><circle cx="0" cy="0" r="62" /></clipPath>
        <g clipPath="url(#lens)" stroke="#2aa87a" strokeWidth="1.5">
          {[-40,-20,0,20,40].map((v) => <line key={`lv${v}`} x1={v} y1="-62" x2={v} y2="62" />)}
          {[-40,-20,0,20,40].map((v) => <line key={`lh${v}`} x1="-62" y1={v} x2="62" y2={v} />)}
          <rect x="-30" y="-30" width="60" height="60" fill="#2aa87a" opacity="0.18" stroke="none" />
        </g>
        <line x1="47" y1="47" x2="86" y2="86" stroke="#48d6c4" strokeWidth="8" strokeLinecap="round" />
      </g>
      {/* GPU chip */}
      <g transform="translate(372 250)">
        <rect x="0" y="0" width="70" height="70" rx="8" fill="#101c2e" stroke="#7cc6ff" strokeWidth="2" />
        <rect x="16" y="16" width="38" height="38" rx="4" fill="#16324a" />
        <text x="35" y="41" textAnchor="middle" fontFamily={MONO} fontSize="14" fontWeight="700" fill="#7cc6ff">GPU</text>
        <g stroke="#7cc6ff" strokeWidth="2">
          {[14,28,42,56].map((y) => <line key={`pl${y}`} x1="-8" y1={y} x2="0" y2={y} />)}
          {[14,28,42,56].map((y) => <line key={`pr${y}`} x1="70" y1={y} x2="78" y2={y} />)}
        </g>
      </g>
      {/* pan arrows */}
      <g transform="translate(372 60)" stroke="#48d6c4" strokeWidth="3" fill="none" strokeLinecap="round">
        <line x1="4" y1="30" x2="64" y2="30" />
        <polyline points="14,20 4,30 14,40" /><polyline points="54,20 64,30 54,40" />
      </g>
      <text x="404" y="122" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">부드러운 확대·이동</text>
    </Frame>
  );
}

function TimeSeries() {
  const card = (x: number, y: number, year: string, accent: boolean) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="150" height="120" rx="10" fill="#0e1c2b" stroke={accent ? "#48d6c4" : "#2b3a4d"} strokeWidth={accent ? 2.5 : 1.5} />
      <rect x="10" y="10" width="130" height="80" rx="6" fill="#0d2430" />
      <path d="M18 76 Q52 44 90 62 T140 50 L140 88 L18 88 Z" fill="#123a44" />
      <circle cx="96" cy="52" r="12" fill="none" stroke={accent ? "#48d6c4" : "#3a5a72"} strokeWidth={accent ? 3 : 2} />
      <text x="12" y="110" fontFamily={MONO} fontSize="12" fill={accent ? "#48d6c4" : "#97a3b6"}>{year}</text>
    </g>
  );
  return (
    <Frame label="영상 시계열 비교 일러스트">
      {card(40, 44, "2019", false)}
      {card(120, 96, "2021", false)}
      {card(200, 148, "2023", true)}
      <text x="300" y="120" fontFamily={MONO} fontSize="12" fill="#7cc6ff">시기별 영상·지도</text>
      <text x="300" y="140" fontFamily={MONO} fontSize="12" fill="#7cc6ff">레이어 중첩·비교</text>
      {/* timeline */}
      <g transform="translate(60 300)">
        <line x1="0" y1="0" x2="360" y2="0" stroke="#2b3a4d" strokeWidth="3" />
        {[0, 120, 240, 360].map((x, i) => (
          <circle key={i} cx={x} cy="0" r={i === 3 ? 9 : 6} fill={i === 3 ? "#48d6c4" : "#3a5a72"} />
        ))}
        <text x="352" y="26" fontFamily={MONO} fontSize="11" fill="#48d6c4">now</text>
      </g>
      <text x="240" y="348" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">타임라인으로 지역 변화 추적</text>
    </Frame>
  );
}

function Database() {
  const entity = (x: number, y: number, name: string, hot?: boolean) => (
    <g transform={`translate(${x} ${y})`}>
      <rect x="0" y="0" width="120" height="52" rx="8" fill="#0e1c2b" stroke={hot ? "#48d6c4" : "#2b3a4d"} strokeWidth={hot ? 2.5 : 1.5} />
      <rect x="0" y="0" width="120" height="20" rx="8" fill={hot ? "rgba(72,214,196,0.16)" : "#16242f"} />
      <text x="10" y="14" fontFamily={MONO} fontSize="10" fontWeight="700" fill={hot ? "#48d6c4" : "#cbd5e0"}>{name}</text>
      <line x1="10" y1="34" x2="80" y2="34" stroke="#3a5a72" strokeWidth="2" />
      <line x1="10" y1="43" x2="60" y2="43" stroke="#28394a" strokeWidth="2" />
    </g>
  );
  return (
    <Frame label="데이터베이스 설계 일러스트">
      {/* DB cylinder */}
      <g transform="translate(60 120)">
        <path d="M0 14 L0 96 Q0 110 55 110 Q110 110 110 96 L110 14" fill="#0f2a30" stroke="#48d6c4" strokeWidth="2.5" />
        <ellipse cx="55" cy="14" rx="55" ry="16" fill="#123a44" stroke="#48d6c4" strokeWidth="2.5" />
        <ellipse cx="55" cy="46" rx="55" ry="14" fill="none" stroke="#2aa87a" strokeWidth="1.5" />
        <ellipse cx="55" cy="76" rx="55" ry="14" fill="none" stroke="#2aa87a" strokeWidth="1.5" />
        <text x="55" y="140" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#48d6c4">Database</text>
      </g>
      {/* relation lines */}
      <g stroke="#3a5a72" strokeWidth="1.5">
        <line x1="170" y1="150" x2="300" y2="86" /><line x1="170" y1="170" x2="300" y2="176" /><line x1="170" y1="186" x2="300" y2="256" />
      </g>
      {entity(300, 60, "관리대상", true)}
      {entity(300, 150, "이력")}
      {entity(300, 236, "품질평가")}
      {/* CRUD chips */}
      <g transform="translate(40 300)" fontFamily={MONO} fontSize="11">
        {["조회", "생성", "갱신", "삭제", "품질평가"].map((t, i) => (
          <g key={t} transform={`translate(${i * 84} 0)`}>
            <rect x="0" y="0" width="76" height="26" rx="13" fill="#101c2e" stroke="#2b3a4d" />
            <text x="38" y="17" textAnchor="middle" fill={i === 4 ? "#48d6c4" : "#97a3b6"}>{t}</text>
          </g>
        ))}
      </g>
    </Frame>
  );
}

function FireMap() {
  return (
    <Frame label="국가산불위험예보 웹·지도 일러스트">
      {/* browser window */}
      <g transform="translate(36 40)">
        <rect x="0" y="0" width="408" height="280" rx="12" fill="#0b1a22" stroke="#2b3a4d" />
        <rect x="0" y="0" width="408" height="30" rx="12" fill="#12242e" />
        <rect x="0" y="18" width="408" height="12" fill="#12242e" />
        <circle cx="18" cy="15" r="4" fill="#ff6b6b" /><circle cx="34" cy="15" r="4" fill="#f4d35e" /><circle cx="50" cy="15" r="4" fill="#48d6c4" />
        <rect x="70" y="8" width="220" height="14" rx="7" fill="#0a1622" />
        <text x="80" y="19" fontFamily={MONO} fontSize="9" fill="#7cc6ff">산불위험예보 · 지도</text>
        {/* Korea-ish peninsula */}
        <path d="M150 60 Q120 78 130 110 Q116 132 138 150 Q126 176 150 196 Q158 224 186 236 Q200 250 214 236 Q236 214 228 188 Q252 168 240 140 Q252 112 226 96 Q214 70 186 66 Q166 52 150 60 Z"
          fill="#12303a" stroke="#48d6c4" strokeWidth="1.5" />
        {/* fire-risk heat blobs */}
        <circle cx="175" cy="120" r="24" fill="#ff6b6b" opacity="0.5" />
        <circle cx="205" cy="170" r="20" fill="#ff9d5c" opacity="0.5" />
        <circle cx="160" cy="205" r="16" fill="#f4d35e" opacity="0.5" />
        {/* flame marker */}
        <path d="M300 150 q-14 -18 0 -34 q6 12 12 8 q-4 14 8 20 q10 -6 6 -18 q16 14 6 34 q-8 12 -22 12 q-16 0 -22 -12 q-2 -8 4 -14 q2 8 12 4 Z" fill="#ff7a45" />
        {/* legend */}
        <g transform="translate(300 210)" fontFamily={MONO} fontSize="10">
          <circle cx="6" cy="0" r="6" fill="#9ad06b" /><text x="18" y="4" fill="#97a3b6">저</text>
          <circle cx="6" cy="22" r="6" fill="#f4d35e" /><text x="18" y="26" fill="#97a3b6">중</text>
          <circle cx="6" cy="44" r="6" fill="#ff6b6b" /><text x="18" y="48" fill="#97a3b6">고 위험</text>
        </g>
      </g>
      <text x="240" y="348" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">공공 안전 웹·지도 서비스 운영</text>
    </Frame>
  );
}

function Triage() {
  const line = (y: number, w: number, color: string, alert?: boolean) => (
    <g transform={`translate(0 ${y})`}>
      {alert ? <text x="-2" y="9" fontSize="11" fill="#ff8b8b">⚠</text> : <circle cx="4" cy="5" r="2.5" fill="#3a5a72" />}
      <rect x="16" y="0" width={w} height="8" rx="4" fill={color} />
    </g>
  );
  return (
    <Frame label="보안 트리아지 에이전트 일러스트">
      {/* terminal */}
      <g transform="translate(36 44)">
        <rect x="0" y="0" width="250" height="272" rx="10" fill="#070d14" stroke="#2b3a4d" />
        <rect x="0" y="0" width="250" height="26" rx="10" fill="#101c2e" />
        <circle cx="16" cy="13" r="4" fill="#ff6b6b" /><circle cx="32" cy="13" r="4" fill="#f4d35e" /><circle cx="48" cy="13" r="4" fill="#48d6c4" />
        <text x="200" y="17" fontFamily={MONO} fontSize="9" fill="#5b6b7a">logs</text>
        <g transform="translate(18 44)">
          {line(0, 200, "#22384a")}
          {line(22, 150, "#ff8b8b", true)}
          {line(44, 190, "#22384a")}
          {line(66, 120, "#22384a")}
          {line(88, 160, "#ff8b8b", true)}
          {line(110, 200, "#22384a")}
          {line(132, 140, "#22384a")}
          {line(154, 175, "#22384a")}
          {line(176, 110, "#22384a")}
        </g>
      </g>
      {/* arrow */}
      <g transform="translate(292 170)" stroke="#48d6c4" strokeWidth="3" fill="none" strokeLinecap="round">
        <line x1="0" y1="10" x2="34" y2="10" /><polyline points="24,2 34,10 24,18" />
      </g>
      {/* triage report card */}
      <g transform="translate(336 96)">
        <rect x="0" y="0" width="108" height="168" rx="10" fill="#0e1c2b" stroke="#48d6c4" strokeWidth="2" />
        <text x="12" y="22" fontFamily={MONO} fontSize="10" fontWeight="700" fill="#48d6c4">Triage</text>
        <text x="12" y="36" fontFamily={MONO} fontSize="10" fontWeight="700" fill="#48d6c4">Report</text>
        <g fontFamily={MONO} fontSize="8.5" fill="#9aa7b6">
          <text x="12" y="62">verdict</text><text x="96" y="62" textAnchor="end" fill="#6ee7a8">✓</text>
          <text x="12" y="82">severity</text><rect x="60" y="74" width="36" height="8" rx="4" fill="#f4d35e" />
          <text x="12" y="102">root cause</text>
          <line x1="12" y1="112" x2="96" y2="112" stroke="#28394a" strokeWidth="2" />
          <line x1="12" y1="122" x2="80" y2="122" stroke="#28394a" strokeWidth="2" />
          <text x="12" y="146">action</text>
          <line x1="12" y1="156" x2="96" y2="156" stroke="#28394a" strokeWidth="2" />
        </g>
      </g>
      <text x="240" y="344" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">로그 조사 → 이상 판정 · 스키마 리포트</text>
    </Frame>
  );
}

function Security() {
  return (
    <Frame label="보안 연구 일러스트">
      {/* shield */}
      <g transform="translate(150 70)">
        <path d="M90 0 L170 26 Q170 150 90 200 Q10 150 10 26 Z" fill="#0f2a30" stroke="#48d6c4" strokeWidth="2.5" />
        <circle cx="90" cy="86" r="20" fill="none" stroke="#48d6c4" strokeWidth="3" />
        <rect x="84" y="96" width="12" height="26" rx="3" fill="#48d6c4" />
      </g>
      {/* code + magnifier */}
      <g transform="translate(44 66)">
        <rect x="0" y="0" width="120" height="92" rx="8" fill="#070d14" stroke="#2b3a4d" />
        <g fontFamily={MONO} fontSize="11" fill="#5b8fb0">
          <text x="10" y="22">{"{"}</text>
          <text x="26" y="40" fill="#7cc6ff">auth()</text>
          <text x="26" y="58" fill="#ff8b8b">bypass</text>
          <text x="10" y="76">{"}"}</text>
        </g>
        <circle cx="96" cy="66" r="20" fill="none" stroke="#48d6c4" strokeWidth="3" />
        <line x1="110" y1="80" x2="126" y2="96" stroke="#48d6c4" strokeWidth="5" strokeLinecap="round" />
      </g>
      {/* bug */}
      <g transform="translate(70 214)" stroke="#ff8b8b" strokeWidth="2.5" fill="#2a1420">
        <ellipse cx="0" cy="0" rx="18" ry="24" />
        <line x1="0" y1="-24" x2="0" y2="24" />
        <line x1="-18" y1="-12" x2="-34" y2="-22" /><line x1="18" y1="-12" x2="34" y2="-22" />
        <line x1="-18" y1="4" x2="-36" y2="4" /><line x1="18" y1="4" x2="36" y2="4" />
        <line x1="-16" y1="18" x2="-32" y2="30" /><line x1="16" y1="18" x2="32" y2="30" />
      </g>
      {/* report doc */}
      <g transform="translate(300 210)">
        <rect x="0" y="0" width="90" height="112" rx="8" fill="#0e1c2b" stroke="#2b3a4d" />
        <text x="12" y="24" fontFamily={MONO} fontSize="10" fontWeight="700" fill="#48d6c4">PoC Report</text>
        <g stroke="#28394a" strokeWidth="2.5">
          <line x1="12" y1="42" x2="78" y2="42" /><line x1="12" y1="56" x2="70" y2="56" />
          <line x1="12" y1="70" x2="78" y2="70" /><line x1="12" y1="84" x2="60" y2="84" />
        </g>
        <text x="66" y="106" fontFamily={MONO} fontSize="10" fill="#ff8b8b">7.7</text>
      </g>
    </Frame>
  );
}

function Ctf() {
  return (
    <Frame label="CTF 일러스트">
      {/* podium hill */}
      <ellipse cx="240" cy="300" rx="150" ry="30" fill="#0f2a30" />
      {/* flag pole */}
      <line x1="240" y1="70" x2="240" y2="290" stroke="#48d6c4" strokeWidth="5" strokeLinecap="round" />
      <path d="M240 76 L340 100 L240 124 Z" fill="#48d6c4" />
      <text x="286" y="106" textAnchor="middle" fontFamily={MONO} fontSize="14" fontWeight="800" fill="#062024">28</text>
      {/* lock */}
      <g transform="translate(96 176)">
        <rect x="0" y="24" width="70" height="56" rx="10" fill="#0f2a30" stroke="#48d6c4" strokeWidth="2.5" />
        <path d="M14 24 v-10 a21 21 0 0 1 42 0 v10" fill="none" stroke="#48d6c4" strokeWidth="4" />
        <circle cx="35" cy="48" r="7" fill="#48d6c4" /><rect x="32" y="50" width="6" height="16" fill="#48d6c4" />
      </g>
      {/* binary rain */}
      <g fontFamily={MONO} fontSize="13" fill="#2aa87a" opacity="0.85">
        <text x="330" y="150">1011</text><text x="356" y="184">0110</text><text x="330" y="214">1001</text>
        <text x="360" y="246">0x3f</text><text x="332" y="278">1100</text>
      </g>
      <text x="240" y="344" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">Crypto · 구조 추론 · 문제 해결</text>
    </Frame>
  );
}

function LineTracer() {
  return (
    <Frame label="라인트레이서 자율주행 일러스트">
      {/* road */}
      <rect x="70" y="36" width="200" height="288" rx="12" fill="#25313d" />
      <path d="M170 316 C170 250 118 232 118 176 C118 120 210 96 210 44"
        stroke="#0a0f14" strokeWidth="16" fill="none" strokeLinecap="round" />
      <path d="M170 316 C170 250 118 232 118 176 C118 120 210 96 210 44"
        stroke="#f4d35e" strokeWidth="2" strokeDasharray="6 10" fill="none" opacity="0.5" />
      {/* car (top view) */}
      <g transform="translate(112 210)">
        <rect x="8" y="8" width="60" height="104" rx="18" fill="#16324a" stroke="#48d6c4" strokeWidth="2" />
        <rect x="18" y="16" width="40" height="26" rx="6" fill="#0a1220" />
        <g fill="#0a0f14" stroke="#3a5a72">
          <rect x="-4" y="20" width="14" height="24" rx="3" /><rect x="66" y="20" width="14" height="24" rx="3" />
          <rect x="-4" y="76" width="14" height="24" rx="3" /><rect x="66" y="76" width="14" height="24" rx="3" />
        </g>
        <circle cx="38" cy="30" r="5" fill="#48d6c4" />
        <text x="38" y="-6" textAnchor="middle" fontFamily={MONO} fontSize="9" fill="#48d6c4">CAM</text>
      </g>
      {/* camera view thumbnail */}
      <g transform="translate(300 70)">
        <text x="0" y="-8" fontFamily={MONO} fontSize="10" fill="#7cc6ff">카메라 뷰</text>
        <rect x="0" y="0" width="140" height="96" rx="8" fill="#05080f" stroke="#2b3a4d" />
        <path d="M64 90 L54 14" stroke="#c9d3dd" strokeWidth="10" strokeLinecap="round" />
      </g>
      <g transform="translate(300 190)">
        <text x="0" y="-8" fontFamily={MONO} fontSize="10" fill="#f4d35e">문제 구간 (반사·그림자)</text>
        <rect x="0" y="0" width="140" height="96" rx="8" fill="#05080f" stroke="#2b3a4d" />
        <path d="M64 90 L54 14" stroke="#556" strokeWidth="9" strokeDasharray="8 10" strokeLinecap="round" />
        <ellipse cx="72" cy="50" rx="34" ry="18" fill="#f4d35e" opacity="0.16" />
      </g>
      <text x="370" y="316" textAnchor="middle" fontFamily={MONO} fontSize="10" fill="#97a3b6">6케이스 시험 → 좌측 앞바퀴</text>
    </Frame>
  );
}

function RunningApp() {
  return (
    <Frame label="크루 러닝 앱 일러스트">
      {/* phone */}
      <g transform="translate(150 34)">
        <rect x="0" y="0" width="180" height="292" rx="26" fill="#0b1a22" stroke="#48d6c4" strokeWidth="2.5" />
        <rect x="60" y="10" width="60" height="10" rx="5" fill="#16242f" />
        <rect x="12" y="30" width="156" height="250" rx="10" fill="#0e2430" />
        {/* map roads */}
        <g stroke="#1b3a44" strokeWidth="6">
          <line x1="12" y1="90" x2="168" y2="120" /><line x1="40" y1="30" x2="70" y2="280" /><line x1="120" y1="30" x2="150" y2="280" />
        </g>
        {/* running route */}
        <path d="M40 250 C60 200 110 210 100 160 C92 120 140 120 140 80"
          stroke="#48d6c4" strokeWidth="4" fill="none" strokeDasharray="2 8" strokeLinecap="round" />
        {/* runner pin */}
        <g transform="translate(40 250)">
          <path d="M0 0 C-14 -20 -14 -34 0 -34 C14 -34 14 -20 0 0 Z" fill="#48d6c4" />
          <circle cx="0" cy="-22" r="6" fill="#05141a" />
        </g>
        {/* crew dots */}
        <circle cx="100" cy="160" r="6" fill="#7cc6ff" stroke="#0e2430" strokeWidth="2" />
        {/* AED marker */}
        <g transform="translate(126 74)">
          <rect x="-13" y="-13" width="26" height="26" rx="6" fill="#ff6b6b" />
          <path d="M0 -8 V8 M-8 0 H8" stroke="#fff" strokeWidth="4" strokeLinecap="round" />
        </g>
        <text x="132" y="58" fontFamily={MONO} fontSize="8" fill="#ff9d9d">AED</text>
      </g>
      <text x="240" y="346" textAnchor="middle" fontFamily={MONO} fontSize="11" fill="#97a3b6">실시간 위치·경로 · 추락 시 AED 안내</text>
    </Frame>
  );
}

const ART: Record<string, () => React.ReactElement> = {
  satellite: Satellite,
  viewer: Viewer,
  timeseries: TimeSeries,
  database: Database,
  firemap: FireMap,
  triage: Triage,
  security: Security,
  ctf: Ctf,
  linetracer: LineTracer,
  runningapp: RunningApp,
};

export default function ProjectArt({ art, className }: ProjectArtProps) {
  const Art = ART[art] ?? Viewer;
  return (
    <div className={className}>
      <Art />
    </div>
  );
}
