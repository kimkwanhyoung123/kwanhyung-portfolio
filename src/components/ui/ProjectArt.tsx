/* Per-project artwork rendered as realistic application/website screenshots
 * (title bars, toolbars, panels, data grids, maps, ER diagrams) rather than
 * floating abstract icons — so each frame reads like a real product screen. */

const MONO = "var(--font-jetbrains-mono), monospace";
const UI = "var(--font-inter), system-ui, sans-serif";

const C = {
  bg: "#0b1220",
  head: "#18263c",
  panel: "#0f1a2a",
  panel2: "#0c1523",
  border: "#233649",
  soft: "#182b40",
  text: "#d6e0ee",
  mut: "#8494a8",
  dim: "#5a6a7d",
  ac: "#48d6c4",
  blue: "#7cc6ff",
  warn: "#f4b64c",
  danger: "#ff6f6f",
  green: "#5fd68b",
  purple: "#b58cff",
};

interface ProjectArtProps {
  art: string;
  className?: string;
}

/* Full-frame screenshot canvas. */
function Base({
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
      <rect x="0" y="0" width="480" height="360" fill={C.bg} />
      {children}
    </svg>
  );
}

/* macOS-ish window title bar spanning the whole frame. */
function TitleBar({ title }: { title: string }) {
  return (
    <g>
      <rect x="0" y="0" width="480" height="28" fill={C.head} />
      <circle cx="18" cy="14" r="4.5" fill="#ff5f57" />
      <circle cx="36" cy="14" r="4.5" fill="#febc2e" />
      <circle cx="54" cy="14" r="4.5" fill="#28c840" />
      <text
        x="240"
        y="18"
        textAnchor="middle"
        fontFamily={UI}
        fontSize="11"
        fill={C.mut}
      >
        {title}
      </text>
    </g>
  );
}

/* ---- 1. Image processing / remote-sensing workspace ---- */
function Satellite() {
  const tools = ["◲", "✛", "◐", "▤", "⤢", "⬚"];
  return (
    <Base label="영상 분석 워크스페이스 화면">
      <TitleBar title="Image Analysis  —  scene_0427.tif" />
      {/* left toolbar */}
      <rect x="0" y="28" width="34" height="332" fill={C.panel} />
      {tools.map((t, i) => (
        <g key={i}>
          <rect
            x="7"
            y={40 + i * 40}
            width="20"
            height="20"
            rx="4"
            fill={i === 1 ? C.ac : C.soft}
          />
          <text
            x="17"
            y={54 + i * 40}
            textAnchor="middle"
            fontFamily={UI}
            fontSize="11"
            fill={i === 1 ? "#052024" : C.mut}
          >
            {t}
          </text>
        </g>
      ))}
      {/* canvas: satellite raster */}
      <rect x="34" y="28" width="300" height="308" fill="#0a1a1a" />
      {/* field patches */}
      {[
        ["#25543a", 44, 40, 120, 70],
        ["#2f6b45", 168, 40, 96, 52],
        ["#3c7a3a", 268, 40, 62, 92],
        ["#1f4a33", 44, 116, 80, 96],
        ["#4b7d33", 128, 152, 96, 60],
        ["#2a5a3e", 228, 138, 102, 74],
        ["#356b46", 44, 218, 130, 94],
        ["#264f38", 178, 218, 152, 94],
      ].map(([c, x, y, w, h], i) => (
        <rect
          key={i}
          x={x as number}
          y={y as number}
          width={w as number}
          height={h as number}
          fill={c as string}
          opacity="0.85"
        />
      ))}
      {/* river */}
      <path
        d="M40 60 C110 90 90 150 150 175 C210 200 200 260 300 300"
        fill="none"
        stroke="#2b6a8c"
        strokeWidth="7"
        opacity="0.8"
      />
      {/* ROI selection */}
      <rect
        x="150"
        y="132"
        width="120"
        height="96"
        fill="none"
        stroke={C.ac}
        strokeWidth="1.5"
        strokeDasharray="5 4"
      />
      {[
        [150, 132],
        [270, 132],
        [150, 228],
        [270, 228],
      ].map(([x, y], i) => (
        <rect key={i} x={x - 3} y={y - 3} width="6" height="6" fill={C.ac} />
      ))}
      {/* right panel */}
      <rect x="334" y="28" width="146" height="332" fill={C.panel} />
      <text x="346" y="52" fontFamily={UI} fontSize="10" fill={C.mut}>
        BANDS
      </text>
      {["R", "G", "B"].map((b, i) => (
        <g key={b}>
          <text
            x="346"
            y={74 + i * 22}
            fontFamily={MONO}
            fontSize="9"
            fill={C.dim}
          >
            {b}
          </text>
          <rect x="360" y={68 + i * 22} width="104" height="4" rx="2" fill={C.soft} />
          <circle
            cx={360 + [70, 44, 88][i]}
            cy={70 + i * 22}
            r="5"
            fill={[C.danger, C.green, C.blue][i]}
          />
        </g>
      ))}
      <text x="346" y="158" fontFamily={UI} fontSize="10" fill={C.mut}>
        NDVI
      </text>
      <defs>
        <linearGradient id="ndvi" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0" stopColor="#ff6b6b" />
          <stop offset="0.5" stopColor="#f4d35e" />
          <stop offset="1" stopColor="#2aa87a" />
        </linearGradient>
      </defs>
      <rect x="346" y="166" width="118" height="12" rx="2" fill="url(#ndvi)" />
      <text x="346" y="192" fontFamily={MONO} fontSize="8" fill={C.dim}>
        -1.0
      </text>
      <text x="464" y="192" textAnchor="end" fontFamily={MONO} fontSize="8" fill={C.dim}>
        +1.0
      </text>
      {/* histogram */}
      <text x="346" y="222" fontFamily={UI} fontSize="10" fill={C.mut}>
        HISTOGRAM
      </text>
      <g transform="translate(346 230)">
        <rect x="0" y="0" width="118" height="64" fill={C.panel2} />
        {[18, 30, 46, 58, 50, 62, 44, 34, 40, 28, 20, 14].map((h, i) => (
          <rect
            key={i}
            x={4 + i * 9.4}
            y={62 - h}
            width="7"
            height={h}
            fill={C.ac}
            opacity="0.7"
          />
        ))}
      </g>
      {/* status bar */}
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="10" y="352" fontFamily={MONO} fontSize="9" fill={C.mut}>
        37.5642, 127.0089
      </text>
      <text x="240" y="352" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={C.mut}>
        zoom 240%
      </text>
      <text x="470" y="352" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.ac}>
        RGB · NDVI
      </text>
    </Base>
  );
}

/* ---- 2. Gigapixel image viewer (DirectX engine) ---- */
function Viewer() {
  return (
    <Base label="대용량 영상 뷰어 화면">
      <TitleBar title="Large Image Viewer" />
      {/* toolbar */}
      <rect x="0" y="28" width="480" height="26" fill={C.panel} />
      {["−", "240%", "+", "⤢ fit", "▦ tiles"].map((t, i) => (
        <g key={i}>
          <rect x={12 + i * 60} y="33" width={i === 1 ? 44 : 40} height="16" rx="3" fill={C.soft} />
          <text
            x={12 + i * 60 + (i === 1 ? 22 : 20)}
            y="45"
            textAnchor="middle"
            fontFamily={MONO}
            fontSize="9"
            fill={C.text}
          >
            {t}
          </text>
        </g>
      ))}
      {/* canvas */}
      <rect x="0" y="54" width="480" height="282" fill="#081418" />
      {/* faux terrain raster */}
      <path d="M0 240 Q120 170 240 220 T480 190 L480 336 L0 336 Z" fill="#123a44" opacity="0.7" />
      <path d="M0 300 Q160 250 300 290 T480 270 L480 336 L0 336 Z" fill="#0f2e38" />
      <circle cx="120" cy="130" r="40" fill="#1c4a3a" opacity="0.7" />
      <ellipse cx="330" cy="120" rx="70" ry="40" fill="#204a4a" opacity="0.6" />
      {/* tile grid */}
      <g stroke="#0f2630" strokeWidth="1" opacity="0.7">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={i * 60} y1="54" x2={i * 60} y2="336" />
        ))}
        {[1, 2, 3, 4].map((i) => (
          <line key={`h${i}`} x1="0" y1={54 + i * 56} x2="480" y2={54 + i * 56} />
        ))}
      </g>
      {/* loaded zoom region */}
      <rect x="186" y="120" width="150" height="120" fill="none" stroke={C.ac} strokeWidth="2" />
      <rect x="186" y="120" width="150" height="120" fill={C.ac} opacity="0.06" />
      {/* overview minimap */}
      <g transform="translate(14 232)">
        <rect x="0" y="0" width="96" height="88" rx="4" fill={C.panel2} stroke={C.border} />
        <path d="M6 66 Q30 48 54 60 T90 52 L90 82 L6 82 Z" fill="#123a44" />
        <rect x="40" y="24" width="34" height="28" fill="none" stroke={C.ac} strokeWidth="1.5" />
        <text x="6" y="-6" fontFamily={UI} fontSize="8" fill={C.mut}>
          overview
        </text>
      </g>
      {/* GPU readout */}
      <g transform="translate(366 66)">
        <rect x="0" y="0" width="100" height="74" rx="6" fill={C.panel2} stroke={C.border} />
        <text x="10" y="18" fontFamily={MONO} fontSize="9" fill={C.mut}>
          FPS
        </text>
        <text x="90" y="18" textAnchor="end" fontFamily={MONO} fontSize="11" fontWeight="700" fill={C.green}>
          60
        </text>
        <text x="10" y="36" fontFamily={MONO} fontSize="9" fill={C.mut}>
          GPU decode
        </text>
        <text x="10" y="52" fontFamily={MONO} fontSize="9" fill={C.mut}>
          VRAM
        </text>
        <rect x="42" y="45" width="48" height="6" rx="3" fill={C.soft} />
        <rect x="42" y="45" width="30" height="6" rx="3" fill={C.blue} />
        <text x="10" y="68" fontFamily={MONO} fontSize="9" fill={C.mut}>
          tiles
        </text>
        <text x="90" y="68" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.text}>
          480
        </text>
      </g>
      {/* status */}
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="10" y="352" fontFamily={MONO} fontSize="9" fill={C.mut}>
        12000 × 9000 px
      </text>
      <text x="470" y="352" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.ac}>
        Direct3D 11 · streaming tiles
      </text>
    </Base>
  );
}

/* ---- 3. Time-series split compare ---- */
function TimeSeries() {
  const pane = (x: number, date: string, veg: string, extent: string) => (
    <g>
      <rect x={x} y="54" width="220" height="230" fill="#081a1a" />
      <rect x={x + 40} y="94" width="140" height="150" fill={veg} opacity="0.5" />
      <path
        d={`M${x + 20} 240 Q${x + 80} 190 ${x + 130} 220 T${x + 218} 200 L${x + 218} 284 L${x + 20} 284 Z`}
        fill="#123a44"
      />
      <path d={extent} fill="none" stroke={C.ac} strokeWidth="1.5" strokeDasharray="4 3" />
      <rect x={x + 8} y="62" width="70" height="16" rx="3" fill="rgba(0,0,0,0.55)" />
      <text x={x + 14} y="74" fontFamily={MONO} fontSize="10" fill={C.text}>
        {date}
      </text>
    </g>
  );
  return (
    <Base label="시기별 영상 비교 화면">
      <TitleBar title="Time-Series Compare  —  region A" />
      {pane(0, "2019·04", "#2a5a3e", "M40 150 q40 -20 80 0 q30 30 -10 60 q-50 20 -80 -10 Z")}
      {pane(260, "2023·04", "#7ba53a", "M300 140 q60 -26 116 6 q26 44 -20 78 q-70 22 -110 -16 Z")}
      {/* divider handle */}
      <rect x="238" y="54" width="4" height="230" fill={C.ac} />
      <circle cx="240" cy="169" r="11" fill={C.ac} />
      <path d="M236 165 l-4 4 4 4 M244 165 l4 4 -4 4" stroke="#052024" strokeWidth="1.6" fill="none" />
      {/* time slider */}
      <g transform="translate(0 300)">
        <text x="20" y="4" fontFamily={UI} fontSize="9" fill={C.mut}>
          2016
        </text>
        <text x="460" y="4" textAnchor="end" fontFamily={UI} fontSize="9" fill={C.mut}>
          2024
        </text>
        <line x1="20" y1="20" x2="460" y2="20" stroke={C.soft} strokeWidth="4" strokeLinecap="round" />
        <line x1="120" y1="20" x2="380" y2="20" stroke={C.ac} strokeWidth="4" strokeLinecap="round" />
        {[20, 74, 128, 182, 236, 290, 344, 398, 452].map((x, i) => (
          <line key={i} x1={x} y1="14" x2={x} y2="26" stroke={C.dim} strokeWidth="1" />
        ))}
        <circle cx="120" cy="20" r="7" fill={C.blue} stroke="#0b1220" strokeWidth="2" />
        <circle cx="380" cy="20" r="7" fill={C.ac} stroke="#0b1220" strokeWidth="2" />
      </g>
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="240" y="352" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={C.ac}>
        화면 ↔ 지도 좌표 동기화 · 레이어 중첩 비교
      </text>
    </Base>
  );
}

/* ---- 4. ER diagram in a DB tool ---- */
function ErTable({
  x,
  y,
  name,
  rows,
  accent,
}: {
  x: number;
  y: number;
  name: string;
  rows: [string, string, string?][];
  accent?: boolean;
}) {
  return (
    <g transform={`translate(${x} ${y})`}>
      <rect
        x="0"
        y="0"
        width="124"
        height={22 + rows.length * 17}
        rx="5"
        fill={C.panel}
        stroke={accent ? C.ac : C.border}
        strokeWidth={accent ? 1.6 : 1}
      />
      <path
        d="M0 5 q0 -5 5 -5 h114 q5 0 5 5 v17 h-124 Z"
        fill={accent ? "rgba(72,214,196,0.16)" : C.soft}
      />
      <text x="10" y="15" fontFamily={MONO} fontSize="10" fontWeight="700" fill={accent ? C.ac : C.text}>
        {name}
      </text>
      {rows.map(([col, type, key], i) => (
        <g key={col} transform={`translate(0 ${22 + i * 17})`}>
          {i > 0 && <line x1="0" y1="0" x2="124" y2="0" stroke={C.border} strokeWidth="0.6" />}
          <text x="10" y="12" fontFamily={MONO} fontSize="8.5" fill={key ? C.warn : C.mut}>
            {key === "PK" ? "🔑" : key === "FK" ? "⚷" : ""}
          </text>
          <text x={key ? 24 : 10} y="12" fontFamily={MONO} fontSize="8.5" fill={C.text}>
            {col}
          </text>
          <text x="116" y="12" textAnchor="end" fontFamily={MONO} fontSize="8" fill={C.dim}>
            {type}
          </text>
        </g>
      ))}
    </g>
  );
}

function Database() {
  return (
    <Base label="데이터베이스 ER 다이어그램 화면">
      <TitleBar title="schema.dbm  —  ER Diagram" />
      {/* schema tree */}
      <rect x="0" y="28" width="96" height="308" fill={C.panel} />
      <text x="12" y="46" fontFamily={UI} fontSize="9" fill={C.mut}>
        PUBLIC
      </text>
      {["asset", "asset_history", "inspection", "region", "quality_log"].map((t, i) => (
        <g key={t}>
          <text x="20" y={66 + i * 20} fontFamily={MONO} fontSize="9" fill={i < 3 ? C.text : C.dim}>
            ▸ {t}
          </text>
        </g>
      ))}
      {/* canvas grid */}
      <rect x="96" y="28" width="384" height="308" fill={C.panel2} />
      <g stroke="#122032" strokeWidth="1">
        {[1, 2, 3, 4, 5, 6, 7].map((i) => (
          <line key={`v${i}`} x1={96 + i * 48} y1="28" x2={96 + i * 48} y2="336" />
        ))}
        {[1, 2, 3, 4, 5].map((i) => (
          <line key={`h${i}`} x1="96" y1={28 + i * 51} x2="480" y2={28 + i * 51} />
        ))}
      </g>
      {/* relations */}
      <g stroke={C.ac} strokeWidth="1.3" fill="none" opacity="0.85">
        <path d="M234 96 H300" />
        <path d="M234 150 C270 150 270 236 300 236" />
        <circle cx="300" cy="96" r="2.5" fill={C.ac} />
        <circle cx="300" cy="236" r="2.5" fill={C.ac} />
        {/* crow's foot on asset side */}
        <path d="M234 90 l-8 6 8 6 M226 96 h-6" />
      </g>
      <ErTable
        x={110}
        y={60}
        name="asset"
        accent
        rows={[
          ["id", "PK", "PK"],
          ["region_cd", "FK", "FK"],
          ["name", "VARCHAR"],
          ["status", "ENUM"],
          ["created_at", "TS"],
        ]}
      />
      <ErTable
        x={300}
        y={62}
        name="asset_history"
        rows={[
          ["id", "PK", "PK"],
          ["asset_id", "FK", "FK"],
          ["change", "JSONB"],
          ["ts", "TS"],
        ]}
      />
      <ErTable
        x={300}
        y={212}
        name="inspection"
        rows={[
          ["id", "PK", "PK"],
          ["asset_id", "FK", "FK"],
          ["result", "BOOL"],
          ["score", "NUMERIC"],
        ]}
      />
      {/* status */}
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="10" y="352" fontFamily={MONO} fontSize="9" fill={C.mut}>
        PostgreSQL 15
      </text>
      <text x="470" y="352" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.ac}>
        3 tables · 2 FK · indexed
      </text>
    </Base>
  );
}

/* ---- 5. Public web GIS service (browser) ---- */
function FireMap() {
  return (
    <Base label="산불위험 웹지도 서비스 화면">
      {/* browser chrome */}
      <rect x="0" y="0" width="480" height="28" fill={C.head} />
      <circle cx="18" cy="14" r="4.5" fill="#ff5f57" />
      <circle cx="36" cy="14" r="4.5" fill="#febc2e" />
      <circle cx="54" cy="14" r="4.5" fill="#28c840" />
      <rect x="76" y="7" width="288" height="15" rx="7.5" fill={C.panel2} />
      <text x="88" y="18" fontFamily={MONO} fontSize="9" fill={C.green}>
        🔒
      </text>
      <text x="102" y="18" fontFamily={MONO} fontSize="9" fill={C.mut}>
        wildfire-risk.map / 지도
      </text>
      <text x="372" y="18" fontFamily={UI} fontSize="11" fill={C.dim}>
        ⟳
      </text>
      {/* nav bar */}
      <rect x="0" y="28" width="480" height="26" fill="#0e1b2b" />
      <rect x="14" y="35" width="12" height="12" rx="3" fill={C.ac} />
      <text x="32" y="45" fontFamily={UI} fontSize="10" fontWeight="700" fill={C.text}>
        산불위험예보
      </text>
      {["지도", "통계", "예보", "알림"].map((t, i) => (
        <text
          key={t}
          x={132 + i * 40}
          y="45"
          fontFamily={UI}
          fontSize="9.5"
          fill={i === 0 ? C.ac : C.mut}
        >
          {t}
        </text>
      ))}
      <rect x="392" y="34" width="74" height="14" rx="7" fill={C.panel2} />
      <text x="400" y="44" fontFamily={UI} fontSize="8" fill={C.dim}>
        🔍 지역 검색
      </text>
      {/* left filter panel */}
      <rect x="0" y="54" width="104" height="306" fill={C.panel} />
      <text x="14" y="76" fontFamily={UI} fontSize="9" fill={C.mut}>
        위험등급
      </text>
      {[
        ["고위험", C.danger],
        ["중위험", C.warn],
        ["저위험", C.green],
      ].map(([t, c], i) => (
        <g key={t as string} transform={`translate(14 ${88 + i * 22})`}>
          <rect x="0" y="0" width="11" height="11" rx="2" fill={c as string} />
          <path d="M2 6 l2.5 2.5 L9 3" stroke="#04121a" strokeWidth="1.4" fill="none" />
          <text x="18" y="10" fontFamily={UI} fontSize="9" fill={C.text}>
            {t}
          </text>
        </g>
      ))}
      <text x="14" y="176" fontFamily={UI} fontSize="9" fill={C.mut}>
        지역 선택
      </text>
      {["강원", "경북", "충남"].map((t, i) => (
        <g key={t} transform={`translate(14 ${186 + i * 20})`}>
          <rect x="0" y="0" width="76" height="15" rx="3" fill={i === 0 ? C.soft : C.panel2} />
          <text x="8" y="11" fontFamily={UI} fontSize="8.5" fill={i === 0 ? C.ac : C.mut}>
            {t}
          </text>
        </g>
      ))}
      {/* map area */}
      <rect x="104" y="54" width="376" height="306" fill="#0c1a22" />
      {/* Korea peninsula divided into risk regions */}
      <g transform="translate(150 66)">
        <path
          d="M96 8 Q60 30 74 66 Q56 92 82 112 Q66 142 96 166 Q108 200 142 214 Q160 230 176 214 Q204 188 194 156 Q222 132 206 100 Q222 66 190 48 Q176 18 142 16 Q116 -2 96 8 Z"
          fill="#12303a"
          stroke={C.ac}
          strokeWidth="1.4"
        />
        {/* regional risk overlays */}
        <path d="M96 8 Q60 30 74 66 L120 60 Q120 26 142 16 Q116 -2 96 8 Z" fill={C.danger} opacity="0.42" />
        <path d="M142 16 Q176 18 190 48 Q222 66 206 100 L150 96 Q140 50 142 16 Z" fill={C.warn} opacity="0.4" />
        <path d="M74 66 Q56 92 82 112 Q66 142 96 166 L134 120 Q110 88 120 60 Z" fill={C.warn} opacity="0.3" />
        <path d="M96 166 Q108 200 142 214 Q160 230 176 214 Q204 188 194 156 L150 150 Q120 180 96 166 Z" fill={C.green} opacity="0.35" />
        {/* internal boundaries */}
        <g stroke="#1c4250" strokeWidth="1" fill="none" opacity="0.8">
          <path d="M120 60 L150 96 L134 120 L150 150" />
          <path d="M74 66 L120 60" />
          <path d="M150 96 L206 100" />
        </g>
        {/* pin + popup */}
        <g transform="translate(112 58)">
          <path d="M0 0 C-9 -13 -9 -22 0 -22 C9 -22 9 -13 0 0 Z" fill={C.danger} />
          <circle cx="0" cy="-14" r="4" fill="#fff" />
        </g>
      </g>
      {/* zoom control */}
      <g transform="translate(446 72)">
        <rect x="0" y="0" width="20" height="40" rx="4" fill={C.panel2} stroke={C.border} />
        <text x="10" y="15" textAnchor="middle" fontFamily={UI} fontSize="13" fill={C.text}>
          +
        </text>
        <line x1="4" y1="20" x2="16" y2="20" stroke={C.border} />
        <text x="10" y="34" textAnchor="middle" fontFamily={UI} fontSize="13" fill={C.text}>
          −
        </text>
      </g>
      {/* legend card */}
      <g transform="translate(118 288)">
        <rect x="0" y="0" width="150" height="58" rx="6" fill="rgba(9,16,26,0.9)" stroke={C.border} />
        <text x="10" y="18" fontFamily={UI} fontSize="9" fontWeight="700" fill={C.text}>
          오늘의 산불위험지수
        </text>
        {[
          ["낮음", C.green],
          ["보통", C.warn],
          ["높음", C.danger],
        ].map(([t, c], i) => (
          <g key={t as string} transform={`translate(${10 + i * 48} 32)`}>
            <rect x="0" y="0" width="12" height="12" rx="2" fill={c as string} />
            <text x="16" y="10" fontFamily={UI} fontSize="8" fill={C.mut}>
              {t}
            </text>
          </g>
        ))}
      </g>
    </Base>
  );
}

/* ---- 6. Security triage agent CLI ---- */
function Triage() {
  const rows: [string, string][] = [
    ["$ triage analyze ./logs", C.text],
    ["▸ ingest 8,214 events", C.mut],
    ["▸ investigate → query(schema)", C.blue],
    ["▸ correlate 3 signals", C.mut],
    ["▸ verify → tool(auth_map)", C.blue],
    ["⚠ anomaly: privilege escalation", C.danger],
    ["✓ verdict ready", C.green],
  ];
  return (
    <Base label="보안 트리아지 에이전트 실행 화면">
      <TitleBar title="triage-agent  ▸  run" />
      {/* terminal */}
      <rect x="0" y="28" width="296" height="308" fill="#060c13" />
      {rows.map(([t, c], i) => (
        <text
          key={i}
          x="16"
          y={54 + i * 26}
          fontFamily={MONO}
          fontSize="10"
          fill={c}
        >
          {t}
        </text>
      ))}
      <rect x="16" y={54 + rows.length * 26 - 9} width="8" height="12" fill={C.ac} opacity="0.85" />
      {/* report panel */}
      <rect x="296" y="28" width="184" height="308" fill={C.panel} />
      <text x="310" y="50" fontFamily={UI} fontSize="10" fontWeight="700" fill={C.ac}>
        Triage Report
      </text>
      <g fontFamily={MONO} fontSize="9">
        <text x="310" y="76" fill={C.mut}>
          {"{"}
        </text>
        <text x="322" y="94" fill={C.dim}>
          &quot;verdict&quot;:
        </text>
        <text x="410" y="94" fill={C.danger}>
          suspicious
        </text>
        <text x="322" y="112" fill={C.dim}>
          &quot;severity&quot;:
        </text>
        <text x="410" y="112" fill={C.warn}>
          high
        </text>
        <text x="322" y="130" fill={C.dim}>
          &quot;confidence&quot;:
        </text>
        <text x="440" y="130" fill={C.green}>
          0.82
        </text>
        <text x="322" y="148" fill={C.dim}>
          &quot;action&quot;:
        </text>
        <text x="410" y="148" fill={C.blue}>
          escalate
        </text>
        <text x="310" y="166" fill={C.mut}>
          {"}"}
        </text>
      </g>
      {/* severity meter */}
      <text x="310" y="198" fontFamily={UI} fontSize="9" fill={C.mut}>
        confidence
      </text>
      <rect x="310" y="204" width="156" height="8" rx="4" fill={C.soft} />
      <rect x="310" y="204" width="128" height="8" rx="4" fill={C.green} />
      <text x="310" y="240" fontFamily={UI} fontSize="9" fill={C.mut}>
        guardrail
      </text>
      <rect x="310" y="248" width="90" height="16" rx="8" fill="rgba(255,111,111,0.14)" stroke={C.danger} strokeWidth="0.8" />
      <text x="355" y="259" textAnchor="middle" fontFamily={MONO} fontSize="8.5" fill={C.danger}>
        fail-closed
      </text>
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="10" y="352" fontFamily={MONO} fontSize="9" fill={C.mut}>
        LangGraph · Pydantic
      </text>
      <text x="470" y="352" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.ac}>
        eval F1 0.75 · 13 scenarios
      </text>
    </Base>
  );
}

/* ---- 7. Security research — HTTP inspector (proxy) ---- */
function Security() {
  return (
    <Base label="보안 점검 HTTP 인스펙터 화면">
      <TitleBar title="HTTP Inspector  —  intercept" />
      {/* request panel */}
      <rect x="0" y="28" width="240" height="308" fill={C.panel2} />
      <rect x="0" y="28" width="240" height="20" fill={C.soft} />
      <text x="12" y="42" fontFamily={UI} fontSize="9" fill={C.blue}>
        Request
      </text>
      <g fontFamily={MONO} fontSize="9">
        <text x="12" y="68" fill={C.warn}>
          POST
        </text>
        <text x="46" y="68" fill={C.text}>
          /api/v2/transfer
        </text>
        <text x="12" y="90" fill={C.dim}>
          Host:
        </text>
        <text x="60" y="90" fill={C.mut}>
          api.target.test
        </text>
        <text x="12" y="108" fill={C.dim}>
          Authorization:
        </text>
        <text x="12" y="124" fill={C.mut}>
          Bearer ••••••••••
        </text>
        <text x="12" y="150" fill={C.text}>
          {"{"}
        </text>
        <text x="24" y="166" fill={C.dim}>
          &quot;to&quot;:
        </text>
        <text x="58" y="166" fill={C.green}>
          &quot;0xA9f…&quot;,
        </text>
        <text x="24" y="182" fill={C.dim}>
          &quot;role&quot;:
        </text>
        <text x="64" y="182" fill={C.danger}>
          &quot;admin&quot;
        </text>
        <text x="12" y="198" fill={C.text}>
          {"}"}
        </text>
      </g>
      {/* response panel */}
      <rect x="240" y="28" width="240" height="200" fill="#060c13" />
      <rect x="240" y="28" width="240" height="20" fill={C.soft} />
      <text x="252" y="42" fontFamily={UI} fontSize="9" fill={C.green}>
        Response
      </text>
      <g fontFamily={MONO} fontSize="9">
        <text x="252" y="68" fill={C.green}>
          HTTP/1.1 200 OK
        </text>
        <rect x="248" y="78" width="224" height="16" fill="rgba(255,111,111,0.12)" />
        <text x="252" y="90" fill={C.danger}>
          ⚠ expected 403 — deputy trusted
        </text>
        <text x="252" y="112" fill={C.dim}>
          {"{"} &quot;status&quot;:
        </text>
        <text x="330" y="112" fill={C.green}>
          &quot;ok&quot;,
        </text>
        <text x="252" y="128" fill={C.dim}>
          &quot;applied&quot;:
        </text>
        <text x="330" y="128" fill={C.danger}>
          true {"}"}
        </text>
      </g>
      {/* finding card */}
      <rect x="240" y="228" width="240" height="108" fill={C.panel} />
      <text x="252" y="250" fontFamily={UI} fontSize="10" fontWeight="700" fill={C.text}>
        Finding
      </text>
      <rect x="252" y="258" width="70" height="18" rx="9" fill="rgba(255,111,111,0.16)" stroke={C.danger} strokeWidth="0.8" />
      <text x="287" y="270" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={C.danger}>
        High · 7.7
      </text>
      <text x="252" y="296" fontFamily={UI} fontSize="9" fill={C.mut}>
        재현 가능한 PoC 확보
      </text>
      <text x="252" y="312" fontFamily={UI} fontSize="9" fill={C.mut}>
        책임공개 절차로 리포트
      </text>
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="10" y="352" fontFamily={MONO} fontSize="9" fill={C.mut}>
        intercept · repeater · diff
      </text>
      <text x="470" y="352" textAnchor="end" fontFamily={MONO} fontSize="9" fill={C.ac}>
        제품명·상세는 비공개
      </text>
    </Base>
  );
}

/* ---- 8. CTF scoreboard ---- */
function Ctf() {
  const board: [string, string, string, boolean][] = [
    ["26", "h4ck3rz", "3120", false],
    ["27", "0xdead", "3080", false],
    ["28", "kwan", "3010", true],
    ["29", "nullbyte", "2990", false],
    ["30", "s3gfault", "2870", false],
  ];
  return (
    <Base label="CTF 스코어보드 화면">
      {/* browser chrome */}
      <rect x="0" y="0" width="480" height="28" fill={C.head} />
      <circle cx="18" cy="14" r="4.5" fill="#ff5f57" />
      <circle cx="36" cy="14" r="4.5" fill="#febc2e" />
      <circle cx="54" cy="14" r="4.5" fill="#28c840" />
      <rect x="76" y="7" width="240" height="15" rx="7.5" fill={C.panel2} />
      <text x="88" y="18" fontFamily={MONO} fontSize="9" fill={C.mut}>
        ctf.io / scoreboard
      </text>
      <text x="16" y="52" fontFamily={UI} fontSize="12" fontWeight="700" fill={C.text}>
        Scoreboard
      </text>
      <text x="470" y="52" textAnchor="end" fontFamily={MONO} fontSize="10" fill={C.ac}>
        307 teams
      </text>
      {/* table header */}
      <g transform="translate(16 66)">
        <text x="4" y="12" fontFamily={UI} fontSize="9" fill={C.dim}>
          RANK
        </text>
        <text x="60" y="12" fontFamily={UI} fontSize="9" fill={C.dim}>
          TEAM
        </text>
        <text x="300" y="12" fontFamily={UI} fontSize="9" fill={C.dim}>
          SOLVED
        </text>
        <text x="444" y="12" textAnchor="end" fontFamily={UI} fontSize="9" fill={C.dim}>
          SCORE
        </text>
      </g>
      {board.map(([r, team, score, me], i) => (
        <g key={r} transform={`translate(16 ${80 + i * 30})`}>
          <rect
            x="0"
            y="0"
            width="448"
            height="26"
            rx="5"
            fill={me ? "rgba(72,214,196,0.12)" : C.panel}
            stroke={me ? C.ac : "transparent"}
            strokeWidth="1.2"
          />
          <text x="10" y="17" fontFamily={MONO} fontSize="11" fontWeight={me ? "700" : "400"} fill={me ? C.ac : C.text}>
            #{r}
          </text>
          <circle cx="66" cy="13" r="7" fill={me ? C.ac : C.soft} />
          <text x="82" y="17" fontFamily={UI} fontSize="10" fontWeight={me ? "700" : "400"} fill={me ? C.ac : C.text}>
            {team}
            {me ? "  (me)" : ""}
          </text>
          {/* solved dots */}
          <g transform="translate(300 8)">
            {[0, 1, 2, 3, 4].map((d) => (
              <circle key={d} cx={d * 13} cy="5" r="4" fill={d < (me ? 4 : 3) ? C.green : C.soft} />
            ))}
          </g>
          <text x="440" y="17" textAnchor="end" fontFamily={MONO} fontSize="10" fill={me ? C.ac : C.mut}>
            {score}
          </text>
        </g>
      ))}
      {/* captured flag */}
      <g transform="translate(16 244)">
        <rect x="0" y="0" width="448" height="34" rx="6" fill="#060c13" stroke={C.border} />
        <text x="12" y="15" fontFamily={MONO} fontSize="9" fill={C.green}>
          $ ./solve.py --stage crypto
        </text>
        <text x="12" y="28" fontFamily={MONO} fontSize="9" fill={C.ac}>
          flag{"{"}r3curs1v3_x0r_pwn3d{"}"}
        </text>
      </g>
      <rect x="0" y="336" width="480" height="24" fill={C.head} />
      <text x="240" y="352" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={C.mut}>
        Crypto · Reversing · Pwn · 28 / 307
      </text>
    </Base>
  );
}

/* ---- 9. Raspberry Pi line tracer (kept — the reference the user liked) ---- */
function LineTracer() {
  return (
    <Base label="라즈베리파이 라인트레이서 화면">
      <TitleBar title="line-tracer  —  camera + control" />
      {/* track scene */}
      <rect x="0" y="28" width="300" height="308" fill="#141b22" />
      <path
        d="M150 328 C150 262 96 244 96 186 C96 128 196 104 196 50"
        stroke="#05090d"
        strokeWidth="46"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M150 328 C150 262 96 244 96 186 C96 128 196 104 196 50"
        stroke="#f4d35e"
        strokeWidth="2"
        strokeDasharray="5 12"
        fill="none"
        opacity="0.45"
      />
      {/* car top view */}
      <g transform="translate(120 214)">
        <rect x="0" y="0" width="60" height="104" rx="16" fill="#16324a" stroke={C.ac} strokeWidth="2" />
        <rect x="10" y="10" width="40" height="26" rx="6" fill="#0a1220" />
        <g fill="#0a0f14" stroke="#3a5a72">
          <rect x="-8" y="16" width="12" height="22" rx="3" />
          <rect x="56" y="16" width="12" height="22" rx="3" />
          <rect x="-8" y="70" width="12" height="22" rx="3" />
          <rect x="56" y="70" width="12" height="22" rx="3" />
        </g>
        <circle cx="30" cy="22" r="5" fill={C.ac} />
        <text x="30" y="-6" textAnchor="middle" fontFamily={MONO} fontSize="9" fill={C.ac}>
          CAM
        </text>
      </g>
      {/* camera views */}
      <g transform="translate(312 40)">
        <text x="0" y="-6" fontFamily={UI} fontSize="9" fill={C.blue}>
          카메라 뷰 (정상)
        </text>
        <rect x="0" y="0" width="150" height="94" rx="6" fill="#05080f" stroke={C.border} />
        <path d="M70 90 L58 12" stroke="#e6ecf2" strokeWidth="12" strokeLinecap="round" />
        <rect x="60" y="42" width="30" height="30" fill="none" stroke={C.green} strokeWidth="1.5" strokeDasharray="3 3" />
      </g>
      <g transform="translate(312 154)">
        <text x="0" y="-6" fontFamily={UI} fontSize="9" fill={C.warn}>
          문제 구간 (반사·그림자)
        </text>
        <rect x="0" y="0" width="150" height="94" rx="6" fill="#05080f" stroke={C.border} />
        <path d="M70 90 L58 12" stroke="#5a6473" strokeWidth="11" strokeDasharray="7 9" strokeLinecap="round" />
        <ellipse cx="80" cy="48" rx="36" ry="18" fill={C.warn} opacity="0.16" />
      </g>
      {/* control HUD */}
      <g transform="translate(312 264)">
        <rect x="0" y="0" width="150" height="66" rx="6" fill={C.panel} stroke={C.border} />
        <text x="10" y="18" fontFamily={UI} fontSize="9" fill={C.mut}>
          steering
        </text>
        <line x1="10" y1="34" x2="140" y2="34" stroke={C.soft} strokeWidth="3" strokeLinecap="round" />
        <circle cx="58" cy="34" r="6" fill={C.ac} />
        <text x="10" y="56" fontFamily={MONO} fontSize="9" fill={C.green}>
          이탈 0 · 6-case 시험 통과
        </text>
      </g>
    </Base>
  );
}

/* ---- 10. Crew running mobile app ---- */
function RunningApp() {
  return (
    <Base label="크루 러닝 모바일 앱 화면">
      <rect x="0" y="0" width="480" height="360" fill="#0a1017" />
      {/* phone */}
      <g transform="translate(150 12)">
        <rect x="0" y="0" width="180" height="336" rx="28" fill="#0c1a22" stroke="#2a3b4d" strokeWidth="2" />
        {/* status bar */}
        <text x="16" y="24" fontFamily={UI} fontSize="9" fill={C.text}>
          9:41
        </text>
        <text x="150" y="24" textAnchor="end" fontFamily={UI} fontSize="9" fill={C.text}>
          ▮▮▮ 84%
        </text>
        {/* app bar */}
        <text x="16" y="48" fontFamily={UI} fontSize="12" fontWeight="700" fill={C.text}>
          크루런
        </text>
        <circle cx="164" cy="43" r="9" fill={C.soft} />
        {/* map */}
        <rect x="10" y="58" width="160" height="188" rx="10" fill="#0e2430" />
        <g stroke="#173241" strokeWidth="7" opacity="0.7">
          <line x1="10" y1="110" x2="170" y2="140" />
          <line x1="40" y1="58" x2="66" y2="246" />
          <line x1="118" y1="58" x2="146" y2="246" />
          <line x1="10" y1="200" x2="170" y2="220" />
        </g>
        {/* route */}
        <path
          d="M46 220 C64 176 108 186 100 146 C93 112 138 110 138 82"
          stroke={C.ac}
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        {/* start pin */}
        <g transform="translate(46 220)">
          <path d="M0 0 C-11 -16 -11 -27 0 -27 C11 -27 11 -16 0 0 Z" fill={C.ac} />
          <circle cx="0" cy="-17" r="5" fill="#05141a" />
        </g>
        {/* current location */}
        <circle cx="100" cy="146" r="8" fill={C.blue} opacity="0.25" />
        <circle cx="100" cy="146" r="4" fill={C.blue} stroke="#0e2430" strokeWidth="1.5" />
        {/* AED marker */}
        <g transform="translate(138 82)">
          <rect x="-11" y="-11" width="22" height="22" rx="5" fill={C.danger} />
          <path d="M0 -6 V6 M-6 0 H6" stroke="#fff" strokeWidth="3" strokeLinecap="round" />
          <text x="0" y="-16" textAnchor="middle" fontFamily={MONO} fontSize="7" fill="#ff9d9d">
            AED
          </text>
        </g>
        {/* stats card */}
        <rect x="10" y="254" width="160" height="52" rx="10" fill={C.panel} />
        {[
          ["3.24", "km"],
          ["5'32\"", "pace"],
          ["17:48", "time"],
        ].map(([v, l], i) => (
          <g key={l} transform={`translate(${24 + i * 52} 274)`}>
            <text x="0" y="0" fontFamily={MONO} fontSize="12" fontWeight="700" fill={C.text}>
              {v}
            </text>
            <text x="0" y="16" fontFamily={UI} fontSize="8" fill={C.mut}>
              {l}
            </text>
          </g>
        ))}
        {/* crew avatars + start */}
        <g transform="translate(20 320)">
          {[C.ac, C.blue, C.purple, C.warn].map((c, i) => (
            <circle key={i} cx={i * 14} cy="0" r="7" fill={c} stroke="#0c1a22" strokeWidth="1.5" />
          ))}
          <text x="66" y="4" fontFamily={UI} fontSize="8" fill={C.mut}>
            크루 4명
          </text>
        </g>
        <rect x="110" y="312" width="52" height="18" rx="9" fill={C.ac} />
        <text x="136" y="324" textAnchor="middle" fontFamily={UI} fontSize="9" fontWeight="700" fill="#052024">
          START
        </text>
      </g>
      {/* side captions */}
      <text x="20" y="120" fontFamily={UI} fontSize="10" fill={C.mut}>
        실시간 GPS
      </text>
      <text x="20" y="138" fontFamily={UI} fontSize="10" fill={C.mut}>
        위치·경로 공유
      </text>
      <text x="356" y="210" fontFamily={UI} fontSize="10" fill={C.danger}>
        추락 감지 →
      </text>
      <text x="356" y="228" fontFamily={UI} fontSize="10" fill={C.mut}>
        주변 AED 안내
      </text>
    </Base>
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
    <div className={`overflow-hidden ${className ?? ""}`}>
      <Art />
    </div>
  );
}
