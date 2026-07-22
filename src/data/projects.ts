import type { FeaturedProject, OtherProject } from "@/types/portfolio";

export const featuredProjects: FeaturedProject[] = [
  {
    id: "image-processing-platform",
    slug: "image-processing-platform",
    titleKo: "영상처리 및 분석 플랫폼",
    titleEn: "Image Processing & Analysis Platform",
    businessContext:
      "여러 센서로 수집한 영상 데이터를 분석하기 위해 분산된 처리 도구 4개와 수작업 절차를 사용하고 있었습니다.",
    problem:
      "센서별 데이터 형식이 다르고, 전처리부터 분석과 결과 확인까지의 과정이 분리되어 있어 사용자가 전체 작업 흐름을 관리하기 어려웠습니다.",
    myRole:
      "사용자 요구사항 분석, 처리 단계 정의, C# UI와 C++ 처리 엔진 연동, 영상 표출과 분석 기능 구현을 담당했습니다.",
    solution:
      "메타데이터 표준화, 기하보정, 모자이크, 영상 보정, 지표·이상치 분석을 하나의 데이터 파이프라인으로 통합했습니다.",
    integration:
      "여러 계열의 센서 영상 데이터, GDAL 기반 공간정보 처리, C++ 영상처리 모듈과 C# 애플리케이션을 연결했습니다.",
    result:
      "분산된 처리 도구 4개를 하나의 흐름으로 통합하고, 반복 작업과 파일 이동 절차를 개선해 전체 처리 시간을 약 20% 단축했습니다. 사용자는 하나의 소프트웨어에서 처리·결과 확인·픽셀 단위 분석까지 연속 수행할 수 있게 됐습니다.",
    keyContributions: [
      "C# UI ↔ C++ 영상처리 모듈 인터페이스 설계",
      "센서별 메타데이터 표준화",
      "대용량 영상 포맷 입출력",
      "영상 보정과 지표 분석 계산",
      "RGB·단일 채널 영상 표출",
      "픽셀 단위 값 분석",
      "영상 좌표 ↔ 지리 좌표 변환",
    ],
    technologies: ["C#", "C++", "GDAL", "OpenCV", "WinForms"],
    processFlow: [
      "Raw Image Data",
      "Metadata Standardization",
      "Geometric Correction",
      "Mosaic",
      "Image Normalization",
      "Feature / Anomaly Analysis",
      "Viewer & Pixel Analysis",
    ],
    diagram: {
      src: "/images/diagrams/image-pipeline.png",
      alt: "영상처리 데이터 파이프라인 개념도",
    },
    metric: {
      label: "처리 시간",
      value: "약 20% 단축 (도구 4개 → 단일 흐름)",
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
      "사용자는 최대 약 10GB 규모의 대용량 영상을 확대·축소하며 세부 지역을 분석해야 했습니다.",
    problem:
      "기존 렌더링 구조에서는 대용량 영상 이동과 확대·축소 시 화면 지연이 발생해 분석 업무의 흐름이 끊겼습니다.",
    myRole:
      "기존 구조 분석, 병목 구간 식별, DirectX 11 렌더링 엔진 설계와 C# 애플리케이션 연동을 담당했습니다.",
    solution:
      "ROI와 Overview를 활용해 현재 화면에 필요한 데이터만 선택적으로 읽고, GPU 기반으로 렌더링하도록 구조를 변경했습니다.",
    integration:
      "기존 C# 데스크톱 애플리케이션을 유지하면서 C++ DirectX 렌더링 모듈을 재사용 가능한 인터페이스로 연결했습니다.",
    result:
      "내부 테스트 기준 화면 렌더링 지연을 약 30% 개선하고, 최대 약 10GB 규모 영상의 탐색 응답성을 높였습니다.",
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
      label: "Rendering",
      value: "지연 약 30% ↓ · 최대 ~10GB 표출",
    },
    disclaimerNote:
      "실제 클래스명·함수명·DLL명·캐시 정책·타일 크기·세부 파라미터는 표시하지 않습니다.",
  },
  {
    id: "image-time-series-viewer",
    slug: "image-time-series-analysis-viewer",
    titleKo: "영상 시계열 분석·표출 시스템",
    titleEn: "Image Time-Series Analysis Viewer",
    businessContext:
      "사용자는 서로 다른 시기에 촬영된 영상과 분석 결과를 비교해 지역 변화를 확인해야 했습니다.",
    problem:
      "시기별 데이터가 분리되어 있어 변화 양상을 연속적으로 파악하기 어려웠고, 영상과 시설물 정보를 함께 비교하기도 어려웠습니다.",
    myRole:
      "다중 시기 데이터 구조 설계, 조회와 표출 기능 구현, 영상과 공간정보 레이어의 동기화를 담당했습니다.",
    solution:
      "여러 시기의 영상 데이터를 하나의 시계열로 구성하고, 사용자가 시점과 지역을 선택해 변화 결과를 조회할 수 있도록 구현했습니다.",
    integration:
      "영상, 분석 결과, 시설물 공간정보와 기존 데스크톱 뷰어를 하나의 사용자 흐름으로 통합했습니다.",
    result:
      "기존 2개 프로그램을 오가던 작업을 하나의 뷰어로 일원화하고, 최대 12개 시기의 영상을 단일 화면에서 비교·확인할 수 있게 했습니다.",
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
      "Multi-Date Images",
      "Metadata Validation",
      "Time-Series Dataset",
      "Spatial Layer Integration",
      "Date / Region Selection",
      "Change Analysis Visualization",
    ],
    diagram: {
      src: "/images/diagrams/image-time-series.png",
      alt: "영상 시계열 분석 시스템 흐름도",
    },
    metric: {
      label: "시계열 통합",
      value: "최대 12시기 · 프로그램 2개 → 1개",
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
      "보안 알림을 받아 읽기전용 도구로 로그를 조사하고, 공격 체인을 재구성해 스키마로 검증된 트리아지 리포트(정탐/오탐·심각도·근본원인)를 생성하는 멀티스텝 LangGraph 에이전트입니다. 합성 데이터가 아닌 실제 공개 로그(LogHub의 OpenSSH·BGL·Linux·Apache) 약 8,000건 위에서 13개 라벨 시나리오로 평가해 정밀도·재현율 0.75(F1 0.75)를 측정했고, 에이전트와 다른 로컬 모델을 judge로 써서 근본원인의 의미 일치를 채점합니다. 전 과정이 로컬 LLM(Ollama)으로 API 비용 없이 실행됩니다.",
    keyExperience: [
      "LangGraph ReAct 에이전트 설계",
      "멀티스텝 tool-use",
      "가드레일(읽기전용·반복상한·스키마검증)",
      "관측성(토큰·지연·트레이스)",
      "정밀도·재현율 평가 하니스",
      "LLM-as-judge (자기채점 방지)",
      "실제 공개 로그셋 파서 연동",
    ],
    technologies: ["Python", "LangGraph", "Ollama", "Pydantic", "pytest"],
    visualType: "diagram",
    images: [
      {
        src: "/images/diagrams/security-agent.png",
        alt: "보안 인시던트 트리아지 에이전트 아키텍처 개념도",
      },
      {
        src: "/images/diagrams/agent-cli-run.png",
        alt: "실제 실행 화면 · 트리아지 리포트",
      },
      {
        src: "/images/diagrams/agent-eval-results.png",
        alt: "평가 결과 · 정밀도 0.75 / 재현율 0.75",
      },
    ],
    metrics: [
      { label: "Precision / Recall", value: "0.75 / 0.75 (F1 0.75)" },
      { label: "평가 규모", value: "실로그 8천건 · 13 시나리오" },
      { label: "Latency", value: "~13s / alert" },
    ],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/kimkwanhyoung123/security-incident-triage-agent",
      },
    ],
    technicalStory: {
      approach: [
        "LangGraph StateGraph로 investigate ↔ tools 루프와 conclude 노드를 구성한 ReAct 에이전트를 설계하고, 읽기전용 도구 5종으로 조사한 결과를 Pydantic 스키마로 강제했습니다.",
        "합성 데이터에 머무르지 않고 LogHub의 실제 공개 로그(OpenSSH·BGL·Linux·Apache) 파서를 만들어 약 8,000건 위에서 13개 라벨 시나리오로 평가했습니다.",
        "에이전트와 다른 로컬 모델을 judge로 두어 근본원인의 의미 일치와 근거 인용 여부를 채점하고, 정밀도·재현율·F1로 지표화했습니다.",
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
            "실제 로그로 옮기자 공격자 IP가 위협 인텔에 아예 없어서, 조회 결과가 'clean'으로 나오며 에이전트를 미탐(false negative) 쪽으로 밀었습니다.",
          solution:
            "인텔 기록이 없는 주소는 'clean'이 아니라 'unknown'으로 반환하도록 바꿔, '정보 없음'과 '안전함'을 분리했습니다. 실데이터를 넣지 않았으면 발견하지 못했을 설계 결함이었습니다.",
        },
        {
          problem:
            "정답 라벨을 제가 만들다 보니 채점 자체가 불공정해질 위험이 있었습니다.",
          solution:
            "시나리오마다 라벨 출처를 명시(BGL은 데이터셋 공식 라벨, 나머지는 규칙 기반 파생)하고 임계값을 문서화했습니다. 그 과정에서 '실패한 SSH 브루트포스'를 high로 잡은 제 라벨이 과했음을 발견해 medium으로 정정했습니다.",
        },
      ],
      growth:
        "합성 데이터에서는 보이지 않던 결함(위협인텔 공백, 과한 정답 라벨)이 실데이터에서 드러나는 것을 경험하며, '평가 설계가 곧 제품 품질'이라는 관점을 얻었습니다. 완벽한 수치를 만들기보다 F1 0.75라는 실제 측정값과 약점(심각도 과소평가)을 그대로 공개하는 편이 신뢰를 준다고 판단했습니다.",
    },
  },
  {
    id: "data-management-module",
    titleKo: "데이터 관리 모듈 설계",
    titleEn: "Data Management Module Design",
    description:
      "관리 대상 데이터의 조회·생성·등록·갱신·삭제·품질평가 업무를 분석하고, 이를 유스케이스·데이터 흐름·데이터베이스 구조로 구체화했습니다. 6종 관리 기능과 5종 품질지표, 약 8개 테이블·엔티티 기반의 데이터 및 이력 구조를 설계했습니다.",
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
        src: "/images/diagrams/data-module-process.png",
        alt: "데이터 관리 모듈 설계 프로세스 개념도",
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
    metrics: [
      { label: "관리 기능", value: "6종 (CRUD·품질평가)" },
      { label: "품질지표", value: "5종" },
      { label: "테이블·엔티티", value: "약 8개" },
    ],
    disclaimerNote:
      "실제 테이블명·컬럼명·내부 문서·고객 요구사항은 공개하지 않습니다.",
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
