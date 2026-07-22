import type { FeaturedProject, OtherProject } from "@/types/portfolio";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "hyperspectral-platform",
    slug: "hyperspectral-image-processing-platform",
    titleKo: "초분광 영상처리 및 분석 플랫폼",
    titleEn: "Hyperspectral Image Processing Platform",
    businessContext:
      "초분광 센서로 수집한 데이터를 분석하기 위해 여러 개의 처리 도구와 수작업 절차를 사용하고 있었습니다.",
    problem:
      "센서별 데이터 형식이 다르고, 전처리부터 분석과 결과 확인까지의 과정이 분리되어 있어 사용자가 전체 작업 흐름을 관리하기 어려웠습니다.",
    myRole:
      "사용자 요구사항 분석, 처리 단계 정의, C# UI와 C++ 처리 엔진 연동, 영상 표출과 분석 기능 구현을 담당했습니다.",
    solution:
      "메타데이터 표준화, 기하보정, 모자이크, 반사율 변환, 식생지수와 이상치 분석을 하나의 데이터 파이프라인으로 통합했습니다.",
    integration:
      "여러 계열의 초분광 센서 데이터, GDAL 기반 공간정보 처리, C++ 영상처리 모듈과 C# 애플리케이션을 연결했습니다.",
    result:
      "사용자는 하나의 소프트웨어에서 데이터 처리, 결과 확인과 픽셀 스펙트럼 분석까지 연속적으로 수행할 수 있게 됐습니다.",
    keyContributions: [
      "C# UI ↔ C++ 영상처리 모듈 인터페이스 설계",
      "센서별 메타데이터 표준화",
      "ENVI BIL Float32 데이터 입출력",
      "반사율 변환과 식생지수 계산",
      "RGB·단일 밴드 영상 표출",
      "픽셀 스펙트럼 분석",
      "영상 좌표 ↔ UTM 좌표 변환",
    ],
    technologies: ["C#", "C++", "GDAL", "OpenCV", "WinForms", "ENVI"],
    processFlow: [
      "Raw Sensor Data",
      "Metadata Standardization",
      "Geometric Correction",
      "Mosaic",
      "Reflectance Conversion",
      "Vegetation Index / Anomaly Analysis",
      "Viewer & Spectrum Analysis",
    ],
    diagram: {
      src: "/images/diagrams/hyperspectral-pipeline.png",
      alt: "초분광 영상처리 데이터 파이프라인 개념도",
    },
    metric: {
      label: "Pipeline Consolidation",
      value: "분리된 도구·수작업 → 7단계 단일 파이프라인",
    },
    disclaimerNote:
      "실제 업무 경험을 일반화해 재구성한 개념도이며, 회사의 실제 내부 설계와 제품 화면은 포함하지 않았습니다.",
  },
  {
    id: "directx-rendering-engine",
    slug: "directx-11-image-rendering-engine",
    titleKo: "DirectX 11 기반 대용량 영상 렌더링 엔진",
    titleEn: "DirectX 11 Image Rendering Engine",
    businessContext:
      "사용자는 수 GB 규모의 위성 및 초분광 영상을 확대·축소하며 세부 지역을 분석해야 했습니다.",
    problem:
      "기존 렌더링 구조에서는 대용량 영상 이동과 확대·축소 시 화면 지연이 발생해 분석 업무의 흐름이 끊겼습니다.",
    myRole:
      "기존 구조 분석, 병목 구간 식별, DirectX 11 렌더링 엔진 설계와 C# 애플리케이션 연동을 담당했습니다.",
    solution:
      "ROI와 Overview를 활용해 현재 화면에 필요한 데이터만 선택적으로 읽고, GPU 기반으로 렌더링하도록 구조를 변경했습니다.",
    integration:
      "기존 C# 데스크톱 애플리케이션을 유지하면서 C++ DirectX 렌더링 모듈을 재사용 가능한 인터페이스로 연결했습니다.",
    result:
      "내부 테스트 기준 화면 렌더링 지연을 약 30% 개선하고 대용량 영상 탐색의 응답성을 높였습니다.",
    keyContributions: [
      "Direct3D 11 렌더링 구조 설계",
      "C#↔C++ 렌더링 모듈 인터페이스 구현",
      "ROI 기반 선택적 데이터 로딩",
      "Overview 기반 해상도 선택",
      "GPU 텍스처 생성·렌더링",
      "화면 좌표 ↔ 영상 좌표 동기화",
      "기존 앱에 재사용 가능한 형태로 통합",
    ],
    technologies: ["C++", "Direct3D 11", "HLSL", "GDAL", "WIC", "C#"],
    flowBefore: [
      "전체 영상 중심 로딩",
      "화면 이동 시 반복 처리",
      "CPU 중심 렌더링",
      "응답 지연 발생",
    ],
    flowAfter: [
      "현재 화면 ROI 계산",
      "적정 Overview 선택",
      "필요 데이터만 로딩",
      "GPU 텍스처 렌더링",
      "화면 응답성 개선",
    ],
    diagram: {
      src: "/images/diagrams/directx-before-after.png",
      alt: "DirectX 11 렌더링 구조 개선 전/후 비교 다이어그램",
    },
    metric: {
      label: "Rendering Latency",
      value: "약 30% 개선 (내부 테스트 기준)",
    },
    disclaimerNote:
      "실제 클래스명·함수명·DLL명·캐시 정책·타일 크기·세부 파라미터는 표시하지 않습니다.",
  },
  {
    id: "satellite-time-series-viewer",
    slug: "satellite-time-series-analysis-viewer",
    titleKo: "위성영상 시계열 분석·표출 시스템",
    titleEn: "Satellite Time-Series Analysis Viewer",
    businessContext:
      "사용자는 서로 다른 시기에 촬영된 위성영상과 분석 결과를 비교해 지역 변화를 확인해야 했습니다.",
    problem:
      "시기별 데이터가 분리되어 있어 변화 양상을 연속적으로 파악하기 어려웠고, 영상과 시설물 정보를 함께 비교하기도 어려웠습니다.",
    myRole:
      "다중 시기 데이터 구조 설계, 조회와 표출 기능 구현, 영상과 공간정보 레이어의 동기화를 담당했습니다.",
    solution:
      "여러 시기의 영상 데이터를 하나의 시계열로 구성하고, 사용자가 시점과 지역을 선택해 변화 결과를 조회할 수 있도록 구현했습니다.",
    integration:
      "위성영상, 분석 결과, 시설물 공간정보와 기존 데스크톱 뷰어를 하나의 사용자 흐름으로 통합했습니다.",
    result:
      "사용자가 여러 데이터와 프로그램을 오가지 않고 하나의 화면에서 시계열 변화와 공간정보를 함께 확인할 수 있게 했습니다.",
    keyContributions: [
      "다중 시기 영상 데이터 구성",
      "시계열 조회·비교 기능",
      "영상·공간정보 레이어 중첩",
      "화면 ↔ 지도 좌표 동기화",
      "분석 결과 조회 UI",
      "데이터 유효성 검증",
      "납품 환경 오류 대응",
    ],
    technologies: ["C#", "C++", "GDAL", "DirectX 11", "Spatial Data"],
    processFlow: [
      "Multi-Date Satellite Images",
      "Metadata Validation",
      "Time-Series Dataset",
      "Spatial Layer Integration",
      "Date / Region Selection",
      "Change Analysis Visualization",
    ],
    diagram: {
      src: "/images/diagrams/satellite-data-flow.png",
      alt: "위성영상 시계열 분석 시스템 흐름도",
    },
    metric: {
      label: "Unified View",
      value: "다중 시기 영상·분석·공간정보를 단일 화면으로 통합",
    },
    disclaimerNote:
      "제품명·고객기관명·실제 촬영지역·데이터 구조는 표시하지 않습니다.",
  },
];

export const otherProjects: OtherProject[] = [
  {
    id: "security-triage-agent",
    titleKo: "보안 인시던트 트리아지 AI 에이전트",
    titleEn: "Security Incident Triage Agent",
    description:
      "보안 알림을 받아 읽기전용 도구로 로그를 조사하고, 공격 체인을 재구성해 스키마로 검증된 트리아지 리포트(정탐/오탐·심각도·근본원인)를 생성하는 멀티스텝 LangGraph 에이전트입니다. 가드레일·관측성·평가(eval)를 포함하며, 로컬 LLM(Ollama)로 완전히 오프라인 실행됩니다. CTF·버그바운티에서 하던 로그 기반 가설 수립과 근본원인 추적을 에이전트 엔지니어링으로 확장했습니다.",
    keyExperience: [
      "LangGraph ReAct 에이전트 설계",
      "멀티스텝 tool-use",
      "가드레일(읽기전용·반복상한·스키마검증)",
      "관측성(토큰·지연·트레이스)",
      "평가(eval) 하니스",
      "로컬 LLM 오프라인 실행",
    ],
    technologies: ["Python", "LangGraph", "Ollama", "Pydantic", "pytest"],
    visualType: "diagram",
    images: [
      {
        src: "/images/diagrams/security-agent.png",
        alt: "보안 인시던트 트리아지 에이전트 아키텍처 개념도",
      },
    ],
    metrics: [
      { label: "Agent", value: "LangGraph ReAct" },
      { label: "Runtime", value: "Local LLM" },
      { label: "Eval", value: "2/3 · 3/3" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kimkwanhyoung123/security-incident-triage-agent",
      },
    ],
    technicalStory: {
      approach: [
        "LangGraph StateGraph로 investigate ↔ tools 루프와 conclude 노드를 구성한 ReAct 에이전트를 설계했습니다.",
        "읽기전용 도구 5종(로그 검색·타임라인·IP 평판·자산·신원)으로 알림을 조사하고, 최종 결과를 Pydantic 스키마(TriageReport)로 강제했습니다.",
        "모든 LLM·도구 호출을 토큰·지연·인자 단위로 트레이스에 기록하는 관측성 계층을 넣었습니다.",
      ],
      challenges: [
        {
          problem:
            "소형 로컬 모델이 실제 공격(피싱→C2→측면이동)을 반복적으로 '정상'으로 오판했습니다.",
          solution:
            "관측성 트레이스로 원인을 추적하니, conclude에 넘기는 증거 요약을 뒷부분만 남겨(tail) 공격 초반 이벤트가 잘리고 노이즈만 남는 버그였습니다. 요약을 '분석 노트 보존 + 증거 시간순 유지'로 재설계하자 동일 증거로 모델이 정탐으로 판정했습니다.",
        },
        {
          problem:
            "작은 모델의 출력이 불안정해 잘못되거나 깨진 리포트가 나올 위험이 있었습니다.",
          solution:
            "읽기전용 도구 allowlist·반복 상한·스키마 검증 폴백으로 '안전하게 실패'하도록 가드레일을 세우고, 평가(eval) 하니스로 정확도를 정량화(3B 2/3 · 7B 3/3)해 회귀를 감지하게 했습니다.",
        },
      ],
      growth:
        "'모델을 바꾸기 전에 컨텍스트·평가·가드레일부터 설계한다'는 LLM 제품 엔지니어링 관점을 체득했고, 관측성이 디버깅의 핵심이라는 것을 직접 경험했습니다.",
    },
  },
  {
    id: "gcp-chip-management-module",
    titleKo: "GCP Chip 데이터 관리 모듈",
    titleEn: "GCP Chip Management Module",
    description:
      "GCP Chip 데이터의 조회·생성·등록·갱신·삭제·품질평가 업무를 분석하고, 이를 유스케이스·데이터 흐름·데이터베이스 구조로 구체화했습니다. 사용자 업무 흐름을 기능 단위로 분해하고, 화면 정의·데이터 처리 순서·품질평가 항목·테이블 구조를 설계했습니다.",
    keyExperience: [
      "요구사항 분석",
      "유스케이스 설계",
      "데이터 흐름도 작성",
      "데이터베이스 설계",
      "화면 처리 흐름 정의",
      "품질평가 데이터 구조 설계",
    ],
    technologies: [
      "Requirement Analysis",
      "System Design",
      "Database",
      "UML",
      "Spatial Data",
    ],
    visualType: "diagram",
    images: [
      {
        src: "/images/diagrams/gcp-chip-process.png",
        alt: "GCP Chip 데이터 관리 설계 프로세스 개념도",
      },
    ],
    processFlow: [
      "사용자 요구사항",
      "유스케이스 정의",
      "화면 처리 흐름",
      "데이터 흐름",
      "데이터베이스 구조",
      "품질평가 데이터 관리",
    ],
    disclaimerNote:
      "실제 테이블명·컬럼명·내부 문서·고객 요구사항은 공개하지 않습니다.",
  },
  {
    id: "crew-running-application",
    titleKo: "크루 기반 러닝 애플리케이션",
    titleEn: "Crew Running Application",
    description:
      "러닝 크루의 실제 사용 흐름을 분석해 사용자 위치와 이동 경로를 실시간으로 공유하는 Android 애플리케이션을 개발했습니다. 스마트폰 추락 감지 시 주변 AED 위치를 자동으로 표출해 긴급상황에 대응할 수 있도록 구현했습니다.",
    keyExperience: [
      "사용자 요구사항 분석",
      "위치 기반 데이터 처리",
      "실시간 사용자 위치 표출",
      "러닝 경로 시각화",
      "스마트폰 추락 감지",
      "주변 AED 위치 안내",
    ],
    technologies: ["Java", "Android Studio", "Location API", "Spatial Data"],
    visualType: "screenshot",
    images: [
      {
        src: "/images/running-app/running-main.png",
        alt: "러닝 크루 애플리케이션 로그인 및 메인 화면",
      },
      {
        src: "/images/running-app/running-map.png",
        alt: "크루 위치와 러닝 경로가 표출된 지도 화면",
      },
      {
        src: "/images/running-app/aed-alert.png",
        alt: "추락 감지 시 주변 AED 위치 안내 화면",
      },
    ],
    technicalStory: {
      approach: [
        "Android(Java)에서 위치 API로 크루원의 위치를 주기적으로 수집·공유하고, 지도에 각자의 위치와 러닝 경로를 실시간으로 표출했습니다.",
        "가속도 센서 값의 급격한 변화 패턴으로 스마트폰 추락(낙상) 이벤트를 감지했습니다.",
        "낙상 감지 시 공공 AED 위치 데이터와 현재 위치로 최근접 AED를 계산해 안내했습니다.",
      ],
      challenges: [
        {
          problem:
            "위치를 자주 갱신하면 배터리 소모와 지도 렌더링 부하가 커지고, GPS 오차로 경로가 튀는 문제가 있었습니다.",
          solution:
            "위치 갱신 주기와 정확도 우선순위를 조정하고 경로 좌표를 보정해 배터리 소모와 표출 품질의 균형을 맞췄습니다.",
        },
        {
          problem:
            "달릴 때의 반동·흔들림과 실제 낙상을 구분하지 못해 오탐이 발생했습니다.",
          solution:
            "가속도 임계값에 더해 충격 직후의 정지 구간을 함께 판정 조건으로 삼아 오탐을 줄였습니다.",
        },
      ],
      growth:
        "센서·위치처럼 노이즈가 많은 실데이터를 다루며 '정확도 vs 배터리·오탐' 같은 현실적 트레이드오프를 조정하는 감각을 길렀습니다.",
    },
  },
  {
    id: "portfolio-web",
    titleKo: "포트폴리오 웹사이트 설계·구현",
    titleEn: "Portfolio Website",
    description:
      "이 포트폴리오 사이트를 직접 설계하고 구현했습니다. 콘텐츠를 데이터 계층과 UI 컴포넌트로 분리해 유지보수가 쉬운 구조로 만들고, 반응형 레이아웃·접근성·성능을 고려해 정적 사이트로 배포했습니다. 프로젝트 다이어그램과 UI 목업도 코드로 직접 생성했습니다.",
    keyExperience: [
      "정보 구조 설계",
      "데이터·UI 컴포넌트 분리",
      "반응형 레이아웃",
      "접근성 처리",
      "정적 사이트 배포",
      "CI 연동 자동 배포",
    ],
    technologies: [
      "TypeScript",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Vercel",
    ],
    visualType: "diagram",
    images: [
      {
        src: "/images/diagrams/portfolio-web.png",
        alt: "포트폴리오 웹사이트 구조와 기술 스택 개념도",
      },
    ],
    metrics: [
      { label: "Stack", value: "Next.js / TS" },
      { label: "Deploy", value: "Vercel CI" },
      { label: "Rendering", value: "Static" },
    ],
  },
];

export const securityResearchProjects: OtherProject[] = [
  {
    id: "bug-bounty-security-research",
    titleKo: "Bug Bounty Security Research",
    description:
      "실제 서비스와 오픈소스 제품의 사용자 흐름·권한 처리·거래 구조를 분석하고, 보안 문제가 의심되는 동작을 재현 가능한 PoC와 기술 보고서로 작성해 제보했습니다. 문제 발생 조건을 명확히 하기 위해 테스트 환경을 구성하고, 실행 영상·로그·프레임·코드·재현 절차를 증거 자료로 정리했습니다.",
    keyExperience: [
      "인증·권한·거래 흐름 분석",
      "비정상 동작의 발생 조건 검증",
      "재현 가능한 PoC 구현",
      "테스트 환경 구성",
      "로그·실행 결과 수집",
      "단계별 기술 보고서 작성",
      "피드백 반영한 시나리오·영향도 보완",
    ],
    technologies: [
      "Web Security",
      "Authorization",
      "Transaction Security",
      "PoC",
      "Technical Writing",
    ],
    visualType: "diagram",
    images: [
      {
        src: "/images/diagrams/bug-bounty-process.png",
        alt: "보안 취약점 분석 및 제보 프로세스 흐름도",
      },
    ],
    processFlow: [
      "제품 기능과 사용자 흐름 분석",
      "권한·거래 경계 식별",
      "위험 시나리오 가설 수립",
      "독립 테스트 환경 구성",
      "PoC 및 반복 검증",
      "로그·영상·실행 결과 수집",
      "기술 보고서 작성 및 제출",
    ],
    deliverables: [
      "01 Reproducible PoC",
      "02 Execution Walkthrough",
      "03 Console & Network Evidence",
      "04 Impact Analysis",
      "05 Technical Report",
    ],
    disclaimerNote:
      "비공개 책임 공개 절차를 준수하기 위해 제품명, 상세 공격 절차, PoC 코드와 증거 화면은 공개하지 않았습니다.",
  },
  {
    id: "ctf-security-challenges",
    titleKo: "CTF Security Challenges",
    description:
      "Dreamhack CTF Season 8 Round #4 (Crypto, 주관: Teori)에 참가해, 제한된 정보와 복잡한 실행 환경에서 시스템 구조와 취약 가능성을 추론하고 공격 경로를 구성해 총 4개의 보안 문제를 해결했습니다. 애플리케이션의 입력값·권한 구조·데이터 처리 흐름을 분석하고 가설 수립과 반복 검증을 통해 문제를 해결했습니다.",
    keyExperience: [
      "제한된 정보에서 시스템 구조 추론",
      "코드·데이터 흐름 분석",
      "공격 시나리오 구성",
      "로그 기반 가설 수정",
      "디버깅·반복 검증",
      "해결 절차 문서화",
    ],
    technologies: [
      "Security Analysis",
      "Vulnerability Research",
      "Debugging",
      "Python",
      "Root-Cause Analysis",
    ],
    visualType: "screenshot",
    images: [
      {
        src: "/images/ctf/ctf-result.png",
        alt: "CTF 대회 공개 순위 화면 캡처",
      },
    ],
    metrics: [
      { label: "Competition", value: "Dreamhack S8 R4 · Crypto" },
      { label: "Final Rank", value: "28 / 307" },
      { label: "Challenges Solved", value: "4" },
    ],
  },
];
