import type { DeckItem } from "@/types/portfolio";

/** Projects, ordered featured-first. Featured projects carry the FDE 7-part
 * detail; the diagram (ProjectArt) carries the system view. Copy stays
 * generalized — no customer names, internal architecture, or product UI. */
export const deckItems: DeckItem[] = [
  {
    id: "image-processing-platform",
    art: "pipeline",
    kicker: "3DLabs · 위성·드론 영상처리",
    titleKo: "영상처리·분석 플랫폼",
    titleEn: "Image Processing & Analysis Platform",
    oneLiner: "여러 센서의 위성·드론 영상을 하나의 흐름으로 처리·분석하는 플랫폼.",
    bullets: [
      "기하보정·모자이크·식생지수(NDVI·NDRE)",
      "센서별 입력 표준화 · C# UI ↔ C++ 엔진 연계",
      "픽셀 스펙트럼·이상치 분석",
    ],
    technologies: ["C#", "C++", "GDAL", "OpenCV"],
    metric: { value: "시간 20%↓", label: "도구 4개 → 단일 연속 처리" },
    featured: true,
    detail: {
      customerContext:
        "공공·연구 기관 담당자가 여러 센서(위성·드론) 영상을 지수 산출까지 여러 도구를 오가며 수작업으로 처리하고 있었습니다.",
      ambiguity:
        "센서마다 입력 규격·좌표계가 달라, 무엇을 표준으로 통일할지가 요구사항 단계에서 명확하지 않았습니다.",
      engineering:
        "입력 표준화 → 기하보정 → 모자이크 → 반사율 변환 → 지수(NDVI·NDRE)를 단일 파이프라인으로 설계하고, C# UI와 C++ 처리 엔진을 연계했습니다.",
      delivery:
        "흩어진 외부 도구를 하나의 프로그램으로 통합해 고객 처리 환경에 배포했습니다.",
      validation:
        "동일 입력에 대한 결과 일치와 처리 시간을 기준값과 비교해 검증했습니다.",
      impact:
        "4개 도구를 오가던 수동 흐름을 단일 연속 처리로 바꿔 처리 시간을 약 20% 단축했습니다.",
      reusableLearning:
        "센서 입력 표준화 규격을 이후 뷰어·시계열 도구에서 공통 기준으로 재사용했습니다.",
    },
  },
  {
    id: "directx-rendering-engine",
    art: "roi",
    kicker: "3DLabs · 성능 최적화",
    titleKo: "대용량 영상 렌더링 엔진",
    titleEn: "DirectX 11 Rendering Engine",
    oneLiner: "수 GB 영상을 끊김 없이 확대·이동하는 GPU 렌더링 엔진.",
    bullets: [
      "화면 ROI 계산 → 필요한 블록만 GPU 업로드",
      "OpenGL → DirectX 11 전환",
      "병목 계측 기반 최적화",
    ],
    technologies: ["C++", "Direct3D 11", "HLSL"],
    metric: { value: "지연 30%↓", label: "최대 ~10GB 영상 표출" },
    featured: true,
    detail: {
      customerContext:
        "사용자는 수 GB 단위의 영상을 확대·이동하며 관찰해야 했는데, 기존 표출이 자주 끊겼습니다.",
      ambiguity:
        "전체를 한 번에 올릴 수 없다는 제약에서, 어디까지를 실시간 처리 대상으로 볼지 기준이 없었습니다.",
      engineering:
        "현재 화면의 ROI를 계산해 필요한 블록만 읽어 GPU 텍스처로 올리는 구조로 재설계하고, 표출부를 OpenGL에서 DirectX 11로 전환했습니다.",
      delivery:
        "기존 뷰어의 표출 계층을 대체하도록 통합해 제품에 반영했습니다.",
      validation:
        "표출 지연을 계측해 기존 대비 약 30% 감소를 확인하고, 최대 ~10GB 영상에서 검증했습니다.",
      impact:
        "대용량 영상에서도 끊김 없는 확대·이동을 확보했습니다.",
      reusableLearning:
        "ROI·오버뷰 기반 부분 로딩 패턴을 시계열 뷰어의 다중 영상 표출에 그대로 재사용했습니다.",
    },
    note: "보안상 실제 UI·데이터는 공개하지 않고 처리 구조만 재구성했습니다.",
  },
  {
    id: "image-time-series-viewer",
    art: "compare",
    kicker: "3DLabs · 공간정보",
    titleKo: "영상 시계열 분석 뷰어",
    titleEn: "Image Time-Series Viewer",
    oneLiner: "서로 다른 시기의 영상·지도를 한 화면에서 비교해 변화를 확인.",
    bullets: [
      "다중 시기 데이터 시계열 구성",
      "영상·공간정보 레이어 중첩",
      "화면 ↔ 지도 좌표·배율 동기화",
    ],
    technologies: ["C#", "GDAL", "DirectX 11"],
    metric: { value: "2 → 1", label: "확인 절차 단일 화면 일원화" },
    featured: true,
    detail: {
      customerContext:
        "사용자는 같은 지역의 서로 다른 시기 영상을 비교해 변화를 확인하려 했습니다.",
      ambiguity:
        "시기·해상도·좌표계가 다른 데이터를 한 화면에서 어떻게 정렬해 비교할지가 모호했습니다.",
      engineering:
        "다중 시기 데이터를 시계열로 구성하고, 화면↔지도의 좌표·배율을 동기화해 나란히 비교하도록 만들었습니다.",
      delivery:
        "두 개로 나뉘어 있던 확인 절차를 하나의 뷰어로 일원화했습니다.",
      validation:
        "동일 좌표에서 시기별 픽셀이 정합되는지 확인했습니다.",
      impact:
        "여러 시기를 한 화면에서 즉시 비교해 변화 판독 시간을 줄였습니다.",
      reusableLearning:
        "좌표 동기화·레이어 중첩 구성을 지도 표출 기능의 공통 모듈로 정리했습니다.",
    },
  },
  {
    id: "security-triage-agent",
    art: "agent",
    kicker: "개인 프로젝트 · AI 에이전트",
    titleKo: "보안 이상징후 트리아지 에이전트",
    titleEn: "Security Triage AI Agent",
    oneLiner: "로그를 스스로 조사해 이상을 판정하는 멀티스텝 AI 에이전트.",
    bullets: [
      "LangGraph investigate ⇄ tool 루프",
      "스키마 검증 · fail-closed 가드레일",
      "실제 공개 로그 평가 하니스",
    ],
    technologies: ["Python", "LangGraph", "Pydantic"],
    metric: { value: "F1 0.75", label: "실로그 8천건 · 13 시나리오" },
    featured: true,
    detail: {
      customerContext:
        "보안 담당자가 대량 로그에서 이상 징후를 사람이 일일이 판정하는 상황을 가정했습니다.",
      ambiguity:
        "무엇을 이상으로 볼지의 기준과 근거가 로그마다 달라, 규칙 기반 자동 판정이 어려웠습니다.",
      engineering:
        "LangGraph로 investigate ⇄ tool 호출 루프를 구성하고, 스키마 검증과 fail-closed 가드레일로 잘못된 판정을 차단했습니다.",
      delivery:
        "입력 로그에서 판정·근거 리포트를 자동 생성하는 파이프라인으로 구성했습니다.",
      validation:
        "실제 공개 로그 약 8,000건·13개 시나리오로 평가 하니스를 만들어 정량 측정했습니다(F1 0.75).",
      impact:
        "사람이 먼저 볼 로그의 우선순위를 자동으로 좁혀 초기 분류 부담을 줄였습니다.",
      reusableLearning:
        "판정 근거 스키마와 fail-closed 검증 방식을 다른 자동화 에이전트에 재사용 가능한 형태로 정리했습니다.",
    },
    link: {
      label: "GitHub",
      href: "https://github.com/kimkwanhyoung123/security-incident-triage-agent",
    },
  },

  /* ---- Additional Work (compact) ---- */
  {
    id: "data-management-module",
    art: "erd",
    kicker: "3DLabs · DB 설계",
    titleKo: "데이터 관리·품질 모듈 설계",
    titleEn: "Data & Quality Module Design",
    oneLiner: "관리 데이터의 조회·생성·갱신·삭제·품질평가를 DB 구조로 설계.",
    bullets: [
      "요구 → 유스케이스 → 테이블 매핑",
      "약 8개 테이블·변경 이력 구조",
      "품질평가 지표 5종",
    ],
    technologies: ["RDB", "SQL", "UML"],
  },
  {
    id: "national-fire-web",
    art: "opsflow",
    kicker: "포도 · 웹·지도 운영",
    titleKo: "국가산불위험예보시스템",
    titleEn: "National Wildfire Risk Web Service",
    oneLiner: "산불 위험정보를 웹·지도로 제공하는 공공 안전 서비스 개발·운영.",
    bullets: [
      "화면→요청→응답→조회→표출 단계로 오류 재현",
      "수정 배포 후 회귀(변경 영향도) 검증",
      "공간정보 조회 · 지도 레이어 표출",
    ],
    technologies: ["Web", "공간정보", "Map"],
  },
  {
    id: "bug-bounty-security-research",
    art: "authz",
    kicker: "개인 프로젝트 · 보안 연구",
    titleKo: "보안 취약점 분석·제보",
    titleEn: "Bug Bounty Research",
    oneLiner: "API·권한 경계를 분석해 재현 가능한 PoC로 제보.",
    bullets: [
      "정상 흐름 vs 권한 우회 흐름 비교",
      "재현 PoC · 기술 보고서",
    ],
    technologies: ["Web Security", "Authorization", "PoC"],
    metric: { value: "3건", label: "CVSS High 7.7 포함 · 검토중" },
    note: "제품명·상세 절차·PoC는 비공개(책임공개 절차).",
  },
  {
    id: "ctf-security-challenges",
    art: "ctf",
    kicker: "개인 프로젝트 · 알고리즘",
    titleKo: "CTF 보안 문제 해결",
    titleEn: "CTF · Crypto",
    oneLiner: "제한된 정보에서 구조를 추론해 암호 문제를 해결.",
    bullets: [
      "Dreamhack CTF S8 R4 (Crypto)",
      "가설 → 디버깅 → 반복 검증",
    ],
    technologies: ["Algorithms", "Python", "Debugging"],
    metric: { value: "28 / 307", label: "개인전 · 4문제 해결" },
  },
  {
    id: "line-tracer",
    art: "linetracer",
    kicker: "현대 NGV · 자율주행",
    titleKo: "라즈베리파이 자율주행 라인트레이서",
    titleEn: "Raspberry Pi Line Tracer",
    oneLiner: "카메라로 라인을 따라가는 소형 자율주행 — 인지 문제를 실험으로 해결.",
    bullets: [
      "특정 구간 이탈 → 카메라 영상 분석",
      "노면 반사·차량 그림자로 품질 저하 규명",
      "카메라 위치 6케이스 시험 → 좌측 앞바퀴 채택",
    ],
    technologies: ["Raspberry Pi", "OpenCV", "Python"],
    metric: { value: "이탈 0", label: "6케이스 실험 후 전 구간 안정" },
  },
  {
    id: "crew-running-app",
    art: "runningapp",
    kicker: "공간정보 아카데미 · LBS",
    titleKo: "크루 러닝 애플리케이션",
    titleEn: "Crew Running App",
    oneLiner: "실시간 위치·경로를 공유하고 추락 시 주변 AED를 안내하는 러닝 앱.",
    bullets: [
      "GPS 실시간 위치·경로 지도 표출",
      "추락 감지 → 주변 AED 안내",
    ],
    technologies: ["Android", "Kotlin/Java", "GPS"],
  },
];
