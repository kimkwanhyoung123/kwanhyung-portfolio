/* Schematic diagrams — one per project — drawn to explain the system, not to
 * decorate. Strict, uniform design language: dark navy background, a single
 * mint accent, 1.5px structural lines, rounded rectangles, arrows and dashed
 * lines. In-diagram text is minimal; the prose lives in the caption beside it. */

const MONO = "var(--font-jetbrains-mono), monospace";
const UI = "var(--font-inter), system-ui, sans-serif";

const BG = "#0b1220";
const AC = "#48d6c4"; // the one accent
const LINE = "#334a63"; // structural lines / borders
const FILL = "#0e1a2a"; // node fill
const TXT = "#cdd8e6"; // node label
const MUT = "#8394a8"; // secondary text
const DIM = "#5d6c7f"; // faint text
const WARN = "#cf7f5c"; // used sparingly, only for a "vulnerable / before" contrast

interface ProjectArtProps {
  art: string;
  className?: string;
}

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
      <rect x="0" y="0" width="480" height="360" fill={BG} />
      {children}
    </svg>
  );
}

function Node({
  x,
  y,
  w,
  h = 30,
  label,
  sub,
  accent,
  dashed,
  mono,
  warn,
}: {
  x: number;
  y: number;
  w: number;
  h?: number;
  label: string;
  sub?: string;
  accent?: boolean;
  dashed?: boolean;
  mono?: boolean;
  warn?: boolean;
}) {
  const cx = x + w / 2;
  const stroke = warn ? WARN : accent ? AC : LINE;
  const color = warn ? WARN : accent ? AC : TXT;
  return (
    <g>
      <rect
        x={x}
        y={y}
        width={w}
        height={h}
        rx="6"
        fill={FILL}
        stroke={stroke}
        strokeWidth="1.5"
        strokeDasharray={dashed ? "4 4" : undefined}
      />
      {sub ? (
        <>
          <text x={cx} y={y + h / 2 - 2} textAnchor="middle" fontFamily={mono ? MONO : UI} fontSize="11" fill={color}>
            {label}
          </text>
          <text x={cx} y={y + h / 2 + 12} textAnchor="middle" fontFamily={UI} fontSize="8.5" fill={MUT}>
            {sub}
          </text>
        </>
      ) : (
        <text x={cx} y={y + h / 2 + 4} textAnchor="middle" fontFamily={mono ? MONO : UI} fontSize="11" fill={color}>
          {label}
        </text>
      )}
    </g>
  );
}

function DownArrow({ x, y1, y2, accent }: { x: number; y1: number; y2: number; accent?: boolean }) {
  const c = accent ? AC : LINE;
  return (
    <g>
      <line x1={x} y1={y1} x2={x} y2={y2 - 6} stroke={c} strokeWidth="1.5" />
      <path d={`M${x - 4} ${y2 - 6} L${x + 4} ${y2 - 6} L${x} ${y2} Z`} fill={c} />
    </g>
  );
}

function RightArrow({ y, x1, x2, accent, warn, dashed }: { y: number; x1: number; x2: number; accent?: boolean; warn?: boolean; dashed?: boolean }) {
  const c = warn ? WARN : accent ? AC : LINE;
  return (
    <g>
      <line x1={x1} y1={y} x2={x2 - 6} y2={y} stroke={c} strokeWidth="1.5" strokeDasharray={dashed ? "4 4" : undefined} />
      <path d={`M${x2 - 6} ${y - 4} L${x2 - 6} ${y + 4} L${x2} ${y} Z`} fill={c} />
    </g>
  );
}

/* ---- 1. Image processing pipeline ---- */
function Pipeline() {
  const steps = [
    "센서 원본 데이터",
    "메타데이터 표준화",
    "기하보정",
    "모자이크",
    "반사율 변환",
    "NDVI·NDRE 분석",
  ];
  const x = 28;
  const w = 214;
  const h = 30;
  const gap = 16;
  const y0 = 20;
  return (
    <Base label="영상처리 파이프라인 흐름도">
      {steps.map((s, i) => (
        <g key={s}>
          <Node x={x} y={y0 + i * (h + gap)} w={w} h={h} label={s} />
          <DownArrow x={x + w / 2} y1={y0 + i * (h + gap) + h} y2={y0 + (i + 1) * (h + gap)} />
        </g>
      ))}
      <Node x={x} y={y0 + steps.length * (h + gap)} w={w} h={h} label="Viewer 표출" accent />

      {/* annotation card (facts, not decoration) */}
      <g>
        <rect x="276" y="118" width="176" height="120" rx="8" fill={FILL} stroke={LINE} />
        <text x="292" y="142" fontFamily={UI} fontSize="10" fill={MUT}>
          기존
        </text>
        <text x="440" y="142" textAnchor="end" fontFamily={UI} fontSize="10" fill={TXT}>
          도구 4개 · 수동
        </text>
        <line x1="292" y1="154" x2="436" y2="154" stroke={LINE} strokeWidth="0.8" />
        <text x="292" y="176" fontFamily={UI} fontSize="10" fill={MUT}>
          개선
        </text>
        <text x="440" y="176" textAnchor="end" fontFamily={UI} fontSize="10" fill={TXT}>
          단일 · 연속 처리
        </text>
        <line x1="292" y1="188" x2="436" y2="188" stroke={LINE} strokeWidth="0.8" />
        <text x="292" y="214" fontFamily={UI} fontSize="10" fill={MUT}>
          결과
        </text>
        <text x="440" y="214" textAnchor="end" fontFamily={MONO} fontSize="12" fontWeight="700" fill={AC}>
          시간 20%↓
        </text>
      </g>
    </Base>
  );
}

/* ---- 2. ROI partial-loading structure + before/after ---- */
function Roi() {
  const children = [
    "Overview 선택",
    "현재 화면 ROI 계산",
    "필요한 블록만 읽기",
    "GPU Texture 업로드",
  ];
  return (
    <Base label="ROI 부분 로딩 구조 · 성능 비교">
      <Node x={140} y={18} w={200} h={32} label="전체 영상  ~10GB" accent />
      {/* tree bus */}
      <line x1="150" y1="50" x2="150" y2={80 + (children.length - 1) * 32 + 13} stroke={LINE} strokeWidth="1.5" />
      {children.map((c, i) => {
        const cy = 80 + i * 32;
        return (
          <g key={c}>
            <line x1="150" y1={cy + 13} x2="164" y2={cy + 13} stroke={LINE} strokeWidth="1.5" />
            <Node x={164} y={cy} w={192} h={26} label={c} />
          </g>
        );
      })}
      <DownArrow x={260} y1={80 + children.length * 32 - 6} y2={214} accent />
      <Node x={160} y={214} w={200} h={30} label="DirectX 11 표출" accent />

      {/* before / after bars */}
      <text x="28" y="278" fontFamily={UI} fontSize="9" fill={MUT}>
        표출 지연
      </text>
      <text x="28" y="292" fontFamily={UI} fontSize="9" fill={DIM}>
        기존
      </text>
      <rect x="70" y="284" width="300" height="9" rx="3" fill={FILL} stroke={LINE} />
      <rect x="70" y="284" width="300" height="9" rx="3" fill={DIM} opacity="0.5" />
      <text x="28" y="314" fontFamily={UI} fontSize="9" fill={DIM}>
        개선
      </text>
      <rect x="70" y="306" width="300" height="9" rx="3" fill={FILL} stroke={LINE} />
      <rect x="70" y="306" width="210" height="9" rx="3" fill={AC} />
      <text x="380" y="308" fontFamily={MONO} fontSize="12" fontWeight="700" fill={AC}>
        30%↓
      </text>
    </Base>
  );
}

/* ---- 3. Two-pane time compare wireframe ---- */
function Compare() {
  const pane = (x: number, label: string, blob: string) => (
    <g>
      <rect x={x} y={54} width={172} height={176} rx="8" fill={FILL} stroke={LINE} strokeWidth="1.5" />
      <rect x={x + 10} y={62} width={92} height={16} rx="3" fill={BG} stroke={LINE} strokeWidth="0.8" />
      <text x={x + 16} y={74} fontFamily={UI} fontSize="9" fill={MUT}>
        {label}
      </text>
      <path d={blob} fill="none" stroke={DIM} strokeWidth="1.2" />
      {/* crosshair */}
      <line x1={x + 86} y1={130} x2={x + 86} y2={158} stroke={AC} strokeWidth="1.2" />
      <line x1={x + 72} y1={144} x2={x + 100} y2={144} stroke={AC} strokeWidth="1.2" />
    </g>
  );
  return (
    <Base label="시기별 영상 비교 와이어프레임">
      {pane(46, "2024년 영상", "M60 190 q40 -40 84 -12 q24 26 -6 44 q-46 22 -78 -6 Z")}
      {pane(262, "2026년 영상", "M276 196 q52 -48 104 -8 q26 34 -12 54 q-58 22 -92 -14 Z")}
      {/* sync between panes */}
      <g>
        <line x1="218" y1="142" x2="262" y2="142" stroke={AC} strokeWidth="1.5" />
        <path d="M224 138 L218 142 L224 146 Z" fill={AC} />
        <path d="M256 138 L262 142 L256 146 Z" fill={AC} />
      </g>
      {/* shared axis */}
      <line x1="46" y1="256" x2="434" y2="256" stroke={LINE} strokeWidth="1.5" />
      <line x1="46" y1="252" x2="46" y2="260" stroke={LINE} strokeWidth="1.5" />
      <line x1="434" y1="252" x2="434" y2="260" stroke={LINE} strokeWidth="1.5" />
      <text x="240" y="286" textAnchor="middle" fontFamily={UI} fontSize="11" fill={AC}>
        좌표 · 확대 배율 동기화
      </text>
    </Base>
  );
}

/* ---- 4. LangGraph agent flow with tool loop ---- */
function Agent() {
  return (
    <Base label="에이전트 판정 흐름도">
      <Node x={110} y={20} w={180} label="로그 입력" />
      <DownArrow x={200} y1={50} y2={70} />
      <Node x={110} y={70} w={180} label="스키마 검증" />
      <DownArrow x={200} y1={100} y2={120} />
      <Node x={110} y={120} w={180} label="Investigate" accent />
      {/* tool loop */}
      <Node x={330} y={120} w={120} label="Tool 호출" mono />
      <g>
        <line x1="290" y1="130" x2="330" y2="130" stroke={AC} strokeWidth="1.5" />
        <path d="M324 126 L330 130 L324 134 Z" fill={AC} />
        <line x1="330" y1="140" x2="290" y2="140" stroke={AC} strokeWidth="1.5" />
        <path d="M296 136 L290 140 L296 144 Z" fill={AC} />
      </g>
      <DownArrow x={200} y1={150} y2={172} />
      <Node x={110} y={172} w={180} label="판정 · 근거 생성" />
      <DownArrow x={200} y1={202} y2={224} accent />
      <Node x={110} y={224} w={180} label="Fail-closed 검증" accent />

      {/* eval facts */}
      <g>
        <rect x="316" y={186} width="140" height="86" rx="8" fill={FILL} stroke={LINE} />
        <text x="330" y={208} fontFamily={UI} fontSize="9" fill={MUT}>
          평가 하니스
        </text>
        <text x="330" y={228} fontFamily={MONO} fontSize="10" fill={TXT}>
          실로그 8,000건
        </text>
        <text x="330" y={244} fontFamily={MONO} fontSize="10" fill={TXT}>
          13 시나리오
        </text>
        <text x="330" y={262} fontFamily={MONO} fontSize="12" fontWeight="700" fill={AC}>
          F1 0.75
        </text>
      </g>
    </Base>
  );
}

/* ---- 5. Schematic ERD + use cases ---- */
function ErdTable({
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
  const w = 150;
  const rh = 16;
  const h = 22 + rows.length * rh;
  return (
    <g>
      <rect x={x} y={y} width={w} height={h} rx="6" fill={FILL} stroke={accent ? AC : LINE} strokeWidth="1.5" />
      <line x1={x} y1={y + 22} x2={x + w} y2={y + 22} stroke={accent ? AC : LINE} strokeWidth="1" />
      <text x={x + 10} y={y + 15} fontFamily={MONO} fontSize="10" fontWeight="700" fill={accent ? AC : TXT}>
        {name}
      </text>
      {rows.map(([col, type, key], i) => (
        <g key={col} transform={`translate(${x} ${y + 22 + i * rh})`}>
          <text x="10" y="12" fontFamily={MONO} fontSize="8.5" fill={key ? AC : MUT}>
            {key ?? ""}
          </text>
          <text x="34" y="12" fontFamily={MONO} fontSize="8.5" fill={TXT}>
            {col}
          </text>
          <text x={w - 8} y="12" textAnchor="end" fontFamily={MONO} fontSize="8" fill={DIM}>
            {type}
          </text>
        </g>
      ))}
    </g>
  );
}

function Erd() {
  return (
    <Base label="데이터 관리 ERD">
      <ErdTable
        x={34}
        y={44}
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
      <ErdTable
        x={286}
        y={40}
        name="asset_history"
        rows={[
          ["id", "PK", "PK"],
          ["asset_id", "FK", "FK"],
          ["change", "JSONB"],
          ["ts", "TS"],
        ]}
      />
      <ErdTable
        x={286}
        y={172}
        name="inspection"
        rows={[
          ["id", "PK", "PK"],
          ["asset_id", "FK", "FK"],
          ["result", "BOOL"],
          ["score", "NUMERIC"],
        ]}
      />
      {/* relationships (one → many, crow's foot) */}
      <g stroke={AC} strokeWidth="1.4" fill="none">
        <path d="M184 74 H286" />
        <circle cx="188" cy="74" r="2.5" fill={AC} stroke="none" />
        <path d="M286 68 l-8 6 8 6 M278 74 h-6" />
        <path d="M184 100 C240 100 240 206 286 206" />
        <circle cx="188" cy="100" r="2.5" fill={AC} stroke="none" />
        <path d="M286 200 l-8 6 8 6 M278 206 h-6" />
      </g>
      {/* use cases */}
      <text x="34" y="304" fontFamily={UI} fontSize="9" fill={MUT}>
        Use case
      </text>
      {["조회", "생성", "갱신", "삭제", "품질평가"].map((t, i) => (
        <g key={t}>
          <rect x={34 + i * 84} y="314" width="74" height="24" rx="12" fill={FILL} stroke={i === 4 ? AC : LINE} strokeWidth="1.2" />
          <text x={34 + i * 84 + 37} y="329" textAnchor="middle" fontFamily={UI} fontSize="10" fill={i === 4 ? AC : MUT}>
            {t}
          </text>
        </g>
      ))}
    </Base>
  );
}

/* ---- 6. Web ops / failure-analysis flow ---- */
function OpsFlow() {
  const steps = ["사용자 화면", "브라우저 요청", "서버 응답", "데이터 조회", "지도 레이어 표출"];
  const checks = ["로그 확인", "응답 비교", "데이터 검증", "회귀 테스트"];
  const x = 46;
  const w = 176;
  const h = 30;
  const gap = 26;
  const y0 = 22;
  return (
    <Base label="웹 장애 분석 흐름도">
      {steps.map((s, i) => (
        <g key={s}>
          <Node x={x} y={y0 + i * (h + gap)} w={w} h={h} label={s} accent={i === steps.length - 1} />
          {i < steps.length - 1 && (
            <DownArrow x={x + w / 2} y1={y0 + i * (h + gap) + h} y2={y0 + (i + 1) * (h + gap)} />
          )}
        </g>
      ))}
      {/* per-transition checks on the right */}
      {checks.map((c, i) => {
        const cy = y0 + i * (h + gap) + h + gap / 2;
        return (
          <g key={c}>
            <line x1={x + w} y1={cy} x2={286} y2={cy} stroke={LINE} strokeWidth="1" strokeDasharray="3 3" />
            <rect x={286} y={cy - 12} width="150" height="24" rx="12" fill={FILL} stroke={LINE} strokeWidth="1" />
            <text x={286 + 75} y={cy + 4} textAnchor="middle" fontFamily={UI} fontSize="10" fill={MUT}>
              {c}
            </text>
          </g>
        );
      })}
    </Base>
  );
}

/* ---- 7. Authz: normal vs. bypass flow across a permission boundary ---- */
function Authz() {
  return (
    <Base label="권한 경계 · 정상 대 우회 흐름 비교">
      {/* permission boundary */}
      <line x1="300" y1="44" x2="300" y2="236" stroke={MUT} strokeWidth="1.5" strokeDasharray="6 5" />
      <text x="300" y="34" textAnchor="middle" fontFamily={UI} fontSize="9" fill={MUT}>
        권한 경계
      </text>

      {/* normal lane */}
      <text x="34" y="66" fontFamily={UI} fontSize="9" fill={AC}>
        정상 흐름
      </text>
      <Node x={34} y={74} w={96} label="Client" />
      <RightArrow y={89} x1={130} x2={176} accent />
      <Node x={176} y={74} w={96} label="Auth" accent />
      <RightArrow y={89} x1={272} x2={356} accent />
      <Node x={356} y={74} w={96} label="Resource" />

      {/* vulnerable lane */}
      <text x="34" y="166" fontFamily={UI} fontSize="9" fill={WARN}>
        취약 흐름
      </text>
      <Node x={34} y={174} w={96} label="Client" />
      <Node x={176} y={174} w={96} label="Auth" dashed />
      <Node x={356} y={174} w={96} label="Resource" warn />
      {/* bypass path curving around Auth, crossing boundary */}
      <path d="M130 182 C210 148 300 148 356 182" fill="none" stroke={WARN} strokeWidth="1.5" strokeDasharray="5 4" />
      <path d="M350 178 L356 182 L349 186 Z" fill={WARN} />
      <text x="243" y="146" textAnchor="middle" fontFamily={UI} fontSize="9" fill={WARN}>
        ✕ 경계 우회
      </text>

      {/* disclosure timeline */}
      <line x1="60" y1="288" x2="300" y2="288" stroke={LINE} strokeWidth="1.5" />
      {["제보", "재현 요청", "검토중"].map((t, i) => (
        <g key={t}>
          <circle cx={60 + i * 120} cy="288" r="5" fill={i === 2 ? AC : FILL} stroke={i === 2 ? AC : LINE} strokeWidth="1.5" />
          <text x={60 + i * 120} y="310" textAnchor="middle" fontFamily={UI} fontSize="9" fill={MUT}>
            {t}
          </text>
        </g>
      ))}
      <text x="60" y="338" fontFamily={UI} fontSize="8.5" fill={DIM}>
        제품명 · 상세 절차 · PoC는 비공개(책임공개)
      </text>
    </Base>
  );
}

/* ---- 8. CTF ranking + solve flow ---- */
function Ctf() {
  const rows: [string, string, string, boolean][] = [
    ["26", "h4ck3rz", "3120", false],
    ["27", "0xdead", "3080", false],
    ["28", "kwan (me)", "3010", true],
    ["29", "nullbyte", "2990", false],
    ["30", "s3gfault", "2870", false],
  ];
  return (
    <Base label="CTF 순위 · 풀이 흐름">
      <text x="30" y="42" fontFamily={UI} fontSize="11" fontWeight="700" fill={TXT}>
        Scoreboard
      </text>
      <text x="266" y="42" textAnchor="end" fontFamily={MONO} fontSize="9" fill={MUT}>
        307 teams
      </text>
      <g fontFamily={UI} fontSize="8.5" fill={DIM}>
        <text x="34" y="62">RANK</text>
        <text x="86" y="62">TEAM</text>
        <text x="262" y="62" textAnchor="end">SCORE</text>
      </g>
      {rows.map(([r, team, score, me], i) => (
        <g key={r}>
          <rect x="30" y={70 + i * 30} width="240" height="26" rx="5" fill={me ? "rgba(72,214,196,0.1)" : FILL} stroke={me ? AC : LINE} strokeWidth={me ? 1.4 : 1} />
          <text x="42" y={87 + i * 30} fontFamily={MONO} fontSize="10" fontWeight={me ? "700" : "400"} fill={me ? AC : TXT}>
            #{r}
          </text>
          <text x="86" y={87 + i * 30} fontFamily={UI} fontSize="10" fontWeight={me ? "700" : "400"} fill={me ? AC : TXT}>
            {team}
          </text>
          <text x="258" y={87 + i * 30} textAnchor="end" fontFamily={MONO} fontSize="10" fill={me ? AC : MUT}>
            {score}
          </text>
        </g>
      ))}
      {/* solve flow */}
      <text x="306" y="76" fontFamily={UI} fontSize="9" fill={MUT}>
        풀이 과정
      </text>
      {["가설", "디버깅", "반복 검증"].map((t, i) => (
        <g key={t}>
          <Node x={306} y={86 + i * 44} w={144} h={28} label={t} />
          {i < 2 && <DownArrow x={378} y1={114 + i * 44} y2={130 + i * 44} />}
        </g>
      ))}
      <DownArrow x={378} y1={86 + 3 * 44 - 16} y2={86 + 3 * 44} accent />
      <rect x="306" y={86 + 3 * 44} width="144" height="28" rx="6" fill={FILL} stroke={AC} strokeWidth="1.5" />
      <text x="378" y={86 + 3 * 44 + 18} textAnchor="middle" fontFamily={MONO} fontSize="10" fill={AC}>
        flag{"{ }"}
      </text>
    </Base>
  );
}

/* ---- 9. Line tracer: track schematic + perception flow ---- */
function LineTracer() {
  return (
    <Base label="라인트레이서 인지·조향 개요">
      {/* track */}
      <rect x="28" y="24" width="230" height="312" rx="8" fill={FILL} stroke={LINE} strokeWidth="1.5" />
      <path d="M150 328 C150 262 96 246 96 188 C96 130 196 108 196 52" stroke={LINE} strokeWidth="22" fill="none" strokeLinecap="round" />
      <path d="M150 328 C150 262 96 246 96 188 C96 130 196 108 196 52" stroke={AC} strokeWidth="1.5" strokeDasharray="5 10" fill="none" opacity="0.7" />
      {/* car (top view, outline) */}
      <g transform="translate(122 212)">
        <rect x="0" y="0" width="56" height="96" rx="14" fill="none" stroke={AC} strokeWidth="1.5" />
        <circle cx="28" cy="20" r="4" fill={AC} />
        <text x="28" y="-6" textAnchor="middle" fontFamily={MONO} fontSize="8" fill={AC}>
          CAM
        </text>
      </g>
      {/* perception flow */}
      <Node x={288} y={40} w={164} label="카메라 입력" />
      <DownArrow x={370} y1={70} y2={92} />
      <Node x={288} y={92} w={164} label="라인 검출(인지)" accent />
      <DownArrow x={370} y1={122} y2={144} />
      <Node x={288} y={144} w={164} label="조향 제어" />
      {/* experiment note */}
      <g>
        <rect x="288" y="210" width="164" height="96" rx="8" fill={FILL} stroke={LINE} />
        <text x="300" y="232" fontFamily={UI} fontSize="9" fill={MUT}>
          카메라 위치 실험
        </text>
        <text x="300" y="252" fontFamily={MONO} fontSize="10" fill={TXT}>
          6 케이스 시험
        </text>
        <text x="300" y="270" fontFamily={MONO} fontSize="10" fill={TXT}>
          → 좌측 앞바퀴
        </text>
        <text x="300" y="292" fontFamily={MONO} fontSize="12" fontWeight="700" fill={AC}>
          이탈 0
        </text>
      </g>
    </Base>
  );
}

/* ---- 10. Running app wireframe + feature flow ---- */
function RunningApp() {
  return (
    <Base label="러닝 앱 와이어프레임">
      {/* phone (wireframe) */}
      <g transform="translate(40 26)">
        <rect x="0" y="0" width="170" height="308" rx="24" fill="none" stroke={AC} strokeWidth="1.5" />
        <rect x="58" y="12" width="54" height="7" rx="3.5" fill="none" stroke={LINE} strokeWidth="1" />
        {/* map wireframe */}
        <rect x="12" y="30" width="146" height="216" rx="8" fill={FILL} stroke={LINE} strokeWidth="1" />
        <g stroke={LINE} strokeWidth="1" opacity="0.7">
          <line x1="12" y1="96" x2="158" y2="120" />
          <line x1="44" y1="30" x2="66" y2="246" />
          <line x1="112" y1="30" x2="132" y2="246" />
        </g>
        {/* route */}
        <path d="M42 214 C60 168 104 178 96 138 C90 106 132 106 132 76" stroke={AC} strokeWidth="2" fill="none" />
        <circle cx="42" cy="214" r="4" fill={AC} />
        {/* AED marker */}
        <g transform="translate(132 76)">
          <rect x="-8" y="-8" width="16" height="16" rx="3" fill="none" stroke={WARN} strokeWidth="1.5" />
          <path d="M0 -4 V4 M-4 0 H4" stroke={WARN} strokeWidth="1.5" />
          <text x="0" y="-12" textAnchor="middle" fontFamily={MONO} fontSize="7" fill={WARN}>
            AED
          </text>
        </g>
        {/* stat row wireframe */}
        <rect x="12" y="256" width="146" height="40" rx="8" fill="none" stroke={LINE} strokeWidth="1" />
        {["거리", "페이스", "시간"].map((t, i) => (
          <text key={t} x={30 + i * 48} y="280" textAnchor="middle" fontFamily={UI} fontSize="8" fill={MUT}>
            {t}
          </text>
        ))}
      </g>
      {/* feature flows */}
      <Node x={252} y={72} w={200} label="GPS 위치 수집" />
      <DownArrow x={352} y1={102} y2={124} accent />
      <Node x={252} y={124} w={200} label="위치·경로 공유" accent />

      <Node x={252} y={206} w={200} label="추락 감지" warn />
      <DownArrow x={352} y1={236} y2={258} />
      <Node x={252} y={258} w={200} label="주변 AED 안내" accent />
    </Base>
  );
}

const ART: Record<string, () => React.ReactElement> = {
  pipeline: Pipeline,
  roi: Roi,
  compare: Compare,
  agent: Agent,
  erd: Erd,
  opsflow: OpsFlow,
  authz: Authz,
  ctf: Ctf,
  linetracer: LineTracer,
  runningapp: RunningApp,
};

export default function ProjectArt({ art, className }: ProjectArtProps) {
  const Art = ART[art] ?? Pipeline;
  return (
    <div className={`overflow-hidden ${className ?? ""}`}>
      <Art />
    </div>
  );
}
