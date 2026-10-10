import type { DeckItem } from "@/types/portfolio";

/** Security work first (deep panels), then wargame/CTF and the engineering
 * background that the analysis rests on (compact cards). Copy stays
 * generalized — no product names, exploitation steps, or PoC code. */
export const deckItems: DeckItem[] = [
  /* ---- Security Work (deep panels) ---- */
  {
    id: "metamask-bug-bounty",
    group: "work",
    art: "authz",
    kicker: "Bug Bounty · HackerOne",
    titleKo: "MetaMask 취약점 발견 · 보상 획득",
    titleEn: "Bug Bounty · MetaMask (HackerOne)",
    oneLiner:
      "글로벌 Web3 지갑의 오픈소스 코드베이스를 감사해 찾은 취약점이 유효 인정.",
    bullets: [
      "오픈소스 코드베이스 소스코드 감사",
      "로컬 재현 검증 · PoC 작성",
      "HackerOne 책임공개 → 보상 획득",
    ],
    technologies: ["Source Code Audit", "Web3 / Wallet", "PoC", "HackerOne"],
    metric: { value: "Bounty", label: "취약점 1건 유효 인정 · 2026.09" },
    detail: {
      customerContext:
        "전 세계 수천만 명이 사용하는 Web3 지갑 MetaMask의 공개 버그바운티 프로그램을 대상으로, 공개된 오픈소스 코드베이스 범위 안에서 분석했습니다.",
      ambiguity:
        "코드베이스가 방대해 어디부터 볼지가 문제였습니다. 사용자 자산과 직접 맞닿는 처리 경로부터 좁혀 들어가기로 기준을 잡았습니다.",
      engineering:
        "보안 로직과 권한·신뢰 경계를 소스코드 수준에서 추적하며, 입력이 검증 없이 신뢰되는 지점과 예외 경로를 후보로 정리했습니다.",
      delivery:
        "의심되는 동작을 로컬 테스트 환경에서 재현해 발생 조건을 좁히고, 제3자가 동일하게 따라할 수 있는 PoC로 정리했습니다.",
      validation:
        "재현 절차를 반복 실행해 조건 의존성과 재현 여부를 확인하고, 실행 로그와 결과를 증거로 수집했습니다.",
      impact:
        "제보한 취약점 1건이 유효 취약점으로 인정되어 HackerOne을 통해 버그바운티 보상을 획득했습니다(2026.09).",
      reusableLearning:
        "영향도 분석과 완화 방향을 포함한 기술 보고서를 함께 제출했고, 보고 이후의 보완 요청까지 대응하며 책임공개 절차 전 과정을 경험했습니다.",
    },
    note: "상세 공격 절차와 PoC 코드는 책임공개(Responsible Disclosure) 절차에 따라 공개하지 않습니다.",
  },
  {
    id: "product-security-assessment",
    group: "work",
    art: "pentest",
    kicker: "3DLabs · 상용 제품 취약점 진단",
    titleKo: "상용 제품 인증·라이선스 취약점 진단",
    titleEn: "Product Security Assessment",
    oneLiner:
      "관리자 인증정보 노출과 라이선스 우회를 재현하고 개선 구조까지 설계.",
    bullets: [
      "소스코드 보안 리뷰 · 인증정보 추적",
      "MAC Spoofing 라이선스 우회 재현",
      "TPM·DPAPI 기반 개선안 도출",
    ],
    technologies: [
      "Source Code Review",
      "Threat Modeling",
      "Windows Security",
      "TPM · DPAPI",
    ],
    metric: { value: "2건", label: "취약점 발견 → 조치 완료" },
    detail: {
      customerContext:
        "공공·연구기관에 납품되는 사내 상용 소프트웨어의 인증정보 처리와 라이선스 보호 구조를 대상으로 진단했습니다.",
      ambiguity:
        "서버 검증이 없는 오프라인 납품 환경이라, 제품이 단독으로 인증과 라이선스를 판단한다면 그 근거가 클라이언트 안에 남아 있을 것이라고 봤습니다.",
      engineering:
        "소스코드 보안 리뷰로 Admin 계정 인증정보와 해시값이 프로그램 내부에 노출될 수 있는 구조를 식별하고, 라이선스가 MAC Address라는 하드웨어 식별값 하나만 신뢰한다는 점을 확인했습니다.",
      delivery:
        "인증정보 탈취 시의 권한 상승 경로를 정리하고, MAC Spoofing으로 라이선스 인증을 우회하는 시나리오와 라이선스 정보 복제를 직접 재현했습니다.",
      validation:
        "재현 조건과 영향 범위를 정리한 뒤, 수정 이후 동일한 시나리오가 더 이상 성립하지 않는지 다시 확인했습니다.",
      impact:
        "프로그램 내부 분석만으로 관리자 권한을 획득할 수 있는 경로를 배포 전에 제거했고, 하드웨어 식별값 단독 신뢰 방식의 한계를 재현 가능한 형태로 제시했습니다.",
      reusableLearning:
        "인증정보 저장·검증 방식을 재설계하고, 오프라인 제약을 고려해 TPM·DPAPI 등 OS·하드웨어 기반 키 보호로 전환하는 개선안과 위협 모델링 기반 가이드를 작성했습니다.",
    },
    note: "회사 제품 정보 보호를 위해 제품명과 상세 절차, 코드는 공개하지 않고 진단 구조만 일반화해 기술했습니다.",
  },
  {
    id: "security-triage-agent",
    group: "work",
    art: "agent",
    image: "/images/diagrams/agent-cli-run.png",
    imageAlt: "트리아지 에이전트 실행 화면 — Triage Report와 실행 지표",
    imageWidth: 1619,
    imageHeight: 2405,
    kicker: "개인 프로젝트 · 보안 자동화",
    titleKo: "보안 이상징후 트리아지 에이전트",
    titleEn: "Security Triage AI Agent",
    oneLiner:
      "로그를 스스로 조사해 정탐·오탐과 심각도를 판정하고 근거 리포트를 생성.",
    bullets: [
      "LangGraph investigate ⇄ tool 루프",
      "읽기전용 · 스키마 검증 가드레일",
      "실제 공개 로그 8천건 평가 하니스",
    ],
    technologies: ["Python", "LangGraph", "Pydantic", "Ollama"],
    metric: { value: "F1 0.75", label: "실로그 8천건 · 13 시나리오" },
    link: {
      label: "GitHub",
      href: "https://github.com/kimkwanhyoung123/security-incident-triage-agent",
    },
    detail: {
      customerContext:
        "공개 로그셋(LogHub의 OpenSSH·BGL·Linux·Apache) 위에서 보안 알림을 조사해 판정하는 자동 트리아지 파이프라인을 만들었습니다.",
      ambiguity:
        "LLM에 로그를 통째로 넘기면 판정이 흔들릴 것이라 보고, 조사 도구와 출력 스키마로 묶어야 재현 가능한 판정이 나온다는 가설을 세웠습니다.",
      engineering:
        "LangGraph StateGraph로 investigate ⇄ tools 루프와 conclude 노드를 구성하고, 읽기전용 도구 5종의 조사 결과를 Pydantic 스키마로 강제했습니다.",
      delivery:
        "실제 공개 로그 약 8,000건을 파싱해 13개 라벨 시나리오를 구성하고, 동일 입력으로 반복 실행되는 평가 하니스를 만들었습니다.",
      validation:
        "에이전트와 다른 로컬 모델을 judge로 두어 근본원인의 의미 일치를 채점하고, 정밀도·재현율 0.75(F1 0.75)를 측정했습니다.",
      impact:
        "관측성 트레이스로 증거 요약이 뒷부분만 남아 공격 초반 이벤트가 잘리던 버그와, 위협 인텔에 없는 IP를 clean으로 반환하던 설계 결함을 찾아 미탐을 줄였습니다.",
      reusableLearning:
        "‘정보 없음’과 ‘안전함’을 분리하고 라벨 출처·임계값을 문서화했으며, F1 0.75라는 실측값과 약점(심각도 과소평가)을 그대로 공개했습니다.",
    },
  },

  /* ---- Wargame · CTF ---- */
  {
    id: "ctf-security-challenges",
    group: "security",
    art: "ctf",
    kicker: "Wargame · CTF",
    titleKo: "CTF 보안 문제 해결",
    titleEn: "CTF · Crypto (주관 Theori)",
    oneLiner: "제한된 정보에서 구조를 추론해 암호 문제를 해결.",
    bullets: [
      "Dreamhack CTF S8 R4 · 주관 Theori",
      "가설 → 디버깅 → 반복 검증",
    ],
    technologies: ["Python", "Cryptography", "Debugging"],
    metric: { value: "28 / 307", label: "개인전 · 출제 4문제 전량 해결" },
  },

  /* ---- Engineering Foundation ---- */
  {
    id: "directx-rendering-engine",
    group: "embedded",
    art: "roi",
    image: "/images/projects/directx-rendering-engine.png",
    imageAlt: "대용량 영상 렌더링 엔진 기존 방식 대비 개선 포인트 비교도",
    imageWidth: 1672,
    imageHeight: 941,
    kicker: "3DLabs · C++ 네이티브",
    titleKo: "대용량 영상 렌더링 엔진",
    titleEn: "DirectX 11 Rendering Engine",
    oneLiner: "C++과 GPU를 직접 다루며 메모리·리소스 경계를 설계한 경험.",
    bullets: ["화면 ROI 계산 → 필요한 블록만 GPU 업로드", "OpenGL → DirectX 11 전환"],
    technologies: ["C++", "Direct3D 11", "HLSL"],
    metric: { value: "지연 30%↓", label: "최대 ~10GB 영상 표출" },
    note: "보안상 실제 UI·데이터는 공개하지 않고 처리 구조만 재구성했습니다.",
  },
  {
    id: "image-processing-platform",
    group: "embedded",
    art: "pipeline",
    image: "/images/projects/image-processing-platform.png",
    imageAlt: "영상처리·분석 플랫폼 통합 처리 파이프라인 개념도",
    imageWidth: 1672,
    imageHeight: 941,
    kicker: "3DLabs · C#/C++ 시스템 통합",
    titleKo: "영상처리·분석 플랫폼",
    titleEn: "Image Processing & Analysis Platform",
    oneLiner:
      "P/Invoke로 관리·네이티브 경계를 넘나들며 외부 EXE·DLL까지 통합한 제품.",
    bullets: [
      "C# UI ↔ C++ 엔진 P/Invoke 연동",
      "외부 EXE·DLL 실행 및 결과 검증",
      "처리 시간 약 20% 단축",
    ],
    technologies: ["C#", "C++", "P/Invoke", "GDAL"],
    metric: {
      value: "특허",
      label: "무인기 초분광 영상처리 SW · 2026.07 특허결정",
    },
  },
  {
    id: "line-tracer",
    group: "embedded",
    art: "linetracer",
    kicker: "현대 NGV · 임베디드 · IoT",
    titleKo: "라즈베리파이 자율주행 라인트레이서",
    titleEn: "Raspberry Pi Line Tracer",
    oneLiner: "Linux 임베디드 보드에서 센서 입력과 제어 흐름을 다룬 경험.",
    bullets: ["카메라 인지 → 조향 제어", "카메라 위치 6케이스 실험"],
    technologies: ["Raspberry Pi", "Linux", "Python", "OpenCV"],
    metric: { value: "이탈 0", label: "6케이스 실험 후 전 구간 안정" },
  },
  {
    id: "data-management-module",
    group: "embedded",
    art: "erd",
    kicker: "3DLabs · 데이터 설계",
    titleKo: "데이터 관리·품질 모듈 설계",
    titleEn: "Data & Quality Module Design",
    oneLiner:
      "권한 기반 삭제와 변경 이력까지 포함해 데이터 관리 흐름을 설계.",
    bullets: [
      "조회·생성·갱신·삭제·품질평가 7개 기능",
      "관리자 승인 기반 2단계 권한 검증",
    ],
    technologies: ["RDB", "SQL", "UML"],
    metric: { value: "8 테이블", label: "변경 이력 · 품질지표 5종" },
  },
];
