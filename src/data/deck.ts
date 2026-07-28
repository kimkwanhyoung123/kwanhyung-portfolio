import type { DeckItem } from "@/types/portfolio";

/** Projects grouped into Work and Personal Projects (Security / Embedded &
 * Mobile). Work projects carry the FDE 7-part detail and render as deep
 * panels; personal projects render as compact cards. Copy stays generalized —
 * no customer names, internal architecture, or product UI. */
export const deckItems: DeckItem[] = [
  /* ---- Work ---- */
  {
    id: "national-fire-web",
    group: "work",
    art: "opsflow",
    kicker: "포도(주) · 웹·지도 개발",
    titleKo: "포도 웹 개발 — 국가산불위험예보",
    titleEn: "Wildfire Risk Web Service",
    oneLiner: "산불 위험정보를 웹·지도로 제공하는 공공 안전 서비스를 개발·운영.",
    bullets: [
      "화면→요청→응답→데이터→지도 단계로 오류 재현",
      "수정 배포 후 회귀(변경 영향도) 검증",
      "공간정보 조회 · 지도 레이어 표출",
    ],
    technologies: ["Web", "공간정보", "Map"],
    detail: {
      customerContext:
        "공공 기관과 국민이 산불 위험정보를 웹·지도로 확인해야 했고, 지역별 위험도를 지도 서비스로 제공·운영했습니다.",
      ambiguity:
        "여러 화면·서버·데이터·지도 계층 중 어디서 값이 틀어지는지 처음엔 명확하지 않았습니다.",
      engineering:
        "화면 → 요청 → 응답 → 데이터 조회 → 지도 표출 단계로 나눠, 각 경계에서 로그와 응답을 비교하며 문제를 좁혔습니다.",
      delivery:
        "공간정보 조회와 지도 레이어 표출 기능을 개발해 서비스에 반영하고 운영했습니다.",
      validation:
        "수정 배포 후 회귀(변경 영향도)를 검증해 다른 기능에 영향이 없는지 확인했습니다.",
      impact: "산불 위험정보를 안정적으로 웹·지도로 제공했습니다.",
      reusableLearning:
        "단계별 장애 분석(로그 확인→응답 비교→데이터 검증→회귀 테스트) 절차를 이후 문제 해결에 재사용했습니다.",
    },
  },
  {
    id: "image-processing-platform",
    group: "work",
    art: "pipeline",
    image: "/images/projects/image-processing-platform.png",
    imageAlt: "영상처리·분석 플랫폼 통합 처리 파이프라인 개념도",
    imageWidth: 1672,
    imageHeight: 941,
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
    group: "work",
    art: "roi",
    image: "/images/projects/directx-rendering-engine.png",
    imageAlt: "대용량 영상 렌더링 엔진 기존 방식 대비 개선 포인트 비교도",
    imageWidth: 1672,
    imageHeight: 941,
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
    detail: {
      customerContext:
        "사용자는 수 GB 단위의 영상을 확대·이동하며 관찰해야 했는데, 기존 표출이 자주 끊겼습니다.",
      ambiguity:
        "전체를 한 번에 올릴 수 없다는 제약에서, 어디까지를 실시간 처리 대상으로 볼지 기준이 없었습니다.",
      engineering:
        "현재 화면의 ROI를 계산해 필요한 블록만 읽어 GPU 텍스처로 올리는 구조로 재설계하고, 표출부를 OpenGL에서 DirectX 11로 전환했습니다.",
      delivery: "기존 뷰어의 표출 계층을 대체하도록 통합해 제품에 반영했습니다.",
      validation:
        "표출 지연을 계측해 기존 대비 약 30% 감소를 확인하고, 최대 ~10GB 영상에서 검증했습니다.",
      impact: "대용량 영상에서도 끊김 없는 확대·이동을 확보했습니다.",
      reusableLearning:
        "ROI·오버뷰 기반 부분 로딩 패턴을 다른 대용량 표출 기능에 재사용했습니다.",
    },
    note: "보안상 실제 UI·데이터는 공개하지 않고 처리 구조만 재구성했습니다.",
  },
  {
    id: "data-management-module",
    group: "work",
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
    detail: {
      customerContext:
        "영상처리 제품이 다루는 관리 데이터가 늘면서, 조회·생성·갱신·삭제와 품질 점검을 일관된 구조로 다뤄야 했습니다.",
      ambiguity:
        "요구사항이 화면 동작 중심이라, 그 뒤의 데이터 구조와 변경 이력 관리를 어떻게 잡을지가 모호했습니다.",
      engineering:
        "요구 → 유스케이스 → 테이블 매핑으로 정리하고, 약 8개 테이블과 변경 이력 구조, 품질평가 지표 5종을 설계했습니다.",
      delivery:
        "조회·생성·갱신·삭제·품질평가를 하나의 데이터 모듈로 제품에 통합했습니다.",
      validation:
        "주요 유스케이스별로 데이터 정합성과 이력 기록을 점검했습니다.",
      impact:
        "관리 데이터를 일관된 구조로 다루고, 품질을 정량 지표로 점검할 수 있게 했습니다.",
      reusableLearning:
        "요구→유스케이스→테이블 매핑 방식을 이후 데이터 설계의 기본 틀로 재사용했습니다.",
    },
  },

  /* ---- Personal Projects · Security ---- */
  {
    id: "security-triage-agent",
    group: "security",
    art: "agent",
    image: "/images/diagrams/agent-cli-run.png",
    imageAlt: "트리아지 에이전트 실행 화면 — Triage Report와 실행 지표",
    imageWidth: 1619,
    imageHeight: 2405,
    kicker: "개인 프로젝트 · AI 에이전트",
    titleKo: "보안 이상징후 트리아지 에이전트",
    titleEn: "Security Triage AI Agent",
    oneLiner: "로그를 스스로 조사해 이상을 판정하고 근거 리포트를 생성하는 AI 에이전트.",
    bullets: [
      "LangGraph investigate ⇄ tool 루프",
      "스키마 검증 · fail-closed 가드레일",
      "실제 공개 로그 평가 하니스",
    ],
    technologies: ["Python", "LangGraph", "Pydantic"],
    metric: { value: "F1 0.75", label: "실로그 8천건 · 13 시나리오" },
    link: {
      label: "GitHub",
      href: "https://github.com/kimkwanhyoung123/security-incident-triage-agent",
    },
  },
  {
    id: "ctf-security-challenges",
    group: "security",
    art: "ctf",
    kicker: "개인 프로젝트 · 알고리즘",
    titleKo: "CTF 보안 문제 해결",
    titleEn: "CTF · Crypto",
    oneLiner: "제한된 정보에서 구조를 추론해 암호 문제를 해결.",
    bullets: ["Dreamhack CTF S8 R4 (Crypto)", "가설 → 디버깅 → 반복 검증"],
    technologies: ["Algorithms", "Python", "Debugging"],
    metric: { value: "28 / 307", label: "개인전 · 4문제 해결" },
  },
  {
    id: "bug-bounty-security-research",
    group: "security",
    art: "authz",
    kicker: "개인 프로젝트 · 보안 연구",
    titleKo: "보안 취약점 분석·제보",
    titleEn: "Bug Bounty Research",
    oneLiner: "API·권한 경계를 분석해 재현 가능한 PoC로 제보.",
    bullets: ["정상 흐름 vs 권한 우회 흐름 비교", "재현 PoC · 기술 보고서"],
    technologies: ["Web Security", "Authorization", "PoC"],
    metric: { value: "3건", label: "CVSS High 7.7 포함 · 검토중" },
    note: "제품명·상세 절차·PoC는 비공개(책임공개 절차).",
  },

  /* ---- Personal Projects · Embedded & Mobile ---- */
  {
    id: "line-tracer",
    group: "embedded",
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
    group: "embedded",
    art: "runningapp",
    kicker: "공간정보 아카데미 · LBS",
    titleKo: "크루 러닝 애플리케이션",
    titleEn: "Crew Running App",
    oneLiner: "실시간 위치·경로를 공유하고 추락 시 주변 AED를 안내하는 러닝 앱.",
    bullets: ["GPS 실시간 위치·경로 지도 표출", "추락 감지 → 주변 AED 안내"],
    technologies: ["Android", "Kotlin/Java", "GPS"],
  },
];
