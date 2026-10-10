import type {
  CompanyProjectDisclaimer,
  ContactContent,
  CoreStrength,
  NumberedItem,
  PlaybookStep,
  Profile,
  StatMetric,
} from "@/types/portfolio";

export const profile: Profile = {
  nameKo: "김관형",
  nameEn: "Kwan Hyoung Kim",
  headline: "소프트웨어를 만들어 본 시선으로 취약점을 찾습니다.",
  heroParagraphs: [
    "C#·C++로 상용 소프트웨어를 설계하고 납품해 온 엔지니어입니다. 제품이 어떻게 만들어지는지 알기 때문에, 인증정보가 어디에 남고 신뢰 경계가 어디서 무너지는지를 코드 수준에서 찾습니다.",
    "오픈소스 코드베이스 감사로 MetaMask 취약점을 제보해 HackerOne 보상을 받았고, 사내 제품에서는 관리자 인증정보 노출과 라이선스 우회를 직접 재현해 개선안까지 전달했습니다.",
  ],
  heroCtas: [
    { label: "보안 이력 보기 ↘", href: "#projects", variant: "primary" },
    {
      label: "GitHub ↗",
      href: "https://github.com/kimkwanhyoung123",
      variant: "secondary",
      external: true,
    },
  ],
  aboutParagraphs: [
    "개발자로 3년간 상용 소프트웨어를 만들면서, 기능이 동작하는 것과 안전하게 동작하는 것이 다르다는 것을 제품 안에서 직접 확인했습니다.",
    "사내 SW를 소스코드 수준에서 리뷰하다 Admin 계정의 인증정보와 해시값이 프로그램 내부에 노출될 수 있는 구조를 발견했습니다. 탈취 시 권한 상승 경로를 정리하고 인증정보 처리 방식을 바꿔 그 경로를 차단했습니다.",
    "MAC Address 하나만 신뢰하는 라이선스 인증은 MAC Spoofing으로 우회된다는 것을 직접 재현해 보였고, 서버 검증이 없는 오프라인 납품 환경이라는 제약까지 고려해 TPM·DPAPI 기반 보호 구조로 개선안을 제시했습니다.",
    "사외에서는 MetaMask 버그바운티에 참여해 오픈소스 코드베이스를 감사하고, 로컬에서 재현한 PoC와 영향도 분석을 HackerOne 책임공개 절차로 제보해 취약점 1건이 유효 취약점으로 인정되었습니다. 티오리 주관 CTF 개인전에서는 출제된 4문제를 전량 해결해 307팀 중 28위를 기록했습니다.",
    "찾는 데서 끝내지 않는 것을 원칙으로 합니다. 개발팀이 실제로 적용할 수 있는 조치 방안까지 전달될 때 취약점이 닫힌다고 생각합니다.",
  ],
};

export const coreStrengths: CoreStrength[] = [
  {
    title: "Penetration Testing",
    description:
      "애플리케이션과 상용 제품을 대상으로 공격자 관점의 시나리오를 세우고, 실제로 재현해 성립 여부를 검증합니다.",
  },
  {
    title: "Source Code Review",
    description:
      "소스코드 수준에서 인증정보 처리, 권한 검사, 신뢰 경계를 추적해 결함이 생기는 지점을 찾습니다.",
  },
  {
    title: "Threat Modeling",
    description:
      "제품이 무엇을 신뢰하고 있는지 먼저 정리하고, 그 신뢰가 깨지는 지점을 공격 시나리오로 구체화합니다.",
  },
  {
    title: "PoC & Reproduction",
    description:
      "의심되는 동작을 독립 환경에서 재현해 발생 조건을 좁히고, 제3자가 따라할 수 있는 PoC로 증명합니다.",
  },
  {
    title: "Remediation Guidance",
    description:
      "운영·납품 환경의 제약을 고려해 개발팀이 바로 적용할 수 있는 조치 방안을 문서로 제시합니다.",
  },
  {
    title: "Security Automation",
    description:
      "Python으로 로그 조사와 판정을 자동화하고, 정밀도·재현율로 성능을 측정해 약점을 드러냅니다.",
  },
];

/** 3 numbered blocks shown directly under the hero. */
export const systemProfile: NumberedItem[] = [
  {
    title: "모의해킹 · 취약점 진단",
    description: "소스코드 · 인증 · 신뢰 경계",
  },
  { title: "버그바운티 · CTF", description: "HackerOne 보상 · 307팀 중 28위" },
  { title: "발견 → 재현 → 조치", description: "PoC와 개선안까지" },
];

/** Headline statistics band. */
export const experienceMetrics: StatMetric[] = [
  { value: "Bounty", label: "MetaMask 취약점 인정 · HackerOne (2026.09)" },
  { value: "28/307", label: "티오리 주관 CTF · 출제 4문제 전량 해결" },
  { value: "2건", label: "상용 제품 취약점 발견 → 조치 완료" },
  { value: "F1 0.75", label: "보안 트리아지 에이전트 · 실로그 8천건" },
];

/** How I work — 01 → 02 → 03. */
export const playbook: PlaybookStep[] = [
  {
    step: "01",
    title: "신뢰 경계를 그린다",
    description:
      "제품이 무엇을 믿고 동작하는지(하드웨어 식별값, 로컬 저장소, 외부 모듈, 사용자 입력)를 먼저 정리하고 공격 표면을 나눕니다.",
  },
  {
    step: "02",
    title: "깨지는 지점을 재현한다",
    description:
      "가설을 세워 독립 환경에서 실제로 재현하고, 발생 조건을 좁혀 재현 가능한 PoC로 만듭니다.",
  },
  {
    step: "03",
    title: "고칠 수 있게 전달한다",
    description:
      "영향도와 함께 운영 제약을 고려한 조치 방안을 문서로 정리하고, 수정 이후 동일 시나리오를 재검증합니다.",
  },
];

/** What I bring — 3 numbered value callouts. */
export const whatIBring: NumberedItem[] = [
  {
    title: "개발자의 시야",
    description:
      "제품을 직접 만들어 봤기 때문에 결함이 생기는 지점을 코드 구조에서 먼저 의심합니다.",
  },
  {
    title: "재현으로 증명",
    description:
      "주장 대신 재현 가능한 PoC와 증거로 취약점이 실제로 성립함을 증명합니다.",
  },
  {
    title: "조치까지 책임",
    description:
      "보고서에서 끝내지 않고 적용 가능한 개선안을 제시한 뒤 수정 결과를 재검증합니다.",
  },
];

export const contact: ContactContent = {
  title: "모의해킹과 취약점 진단으로 제품을 안전하게 만들고 싶습니다.",
  paragraphs: [
    "서비스·애플리케이션·시스템 모의해킹(PT), 최신 공격 기법과 공격 시나리오 연구, 발견된 이슈의 조치 가이드라인 작성에 관심이 있습니다.",
    "개발 경험을 바탕으로 코드 수준에서 원인을 추적하고, 실제로 고칠 수 있는 개선안까지 전달하는 보안 엔지니어 포지션에 열려 있습니다.",
  ],
  links: [
    { label: "이메일 보내기", href: "mailto:khkims0206@gmail.com" },
    {
      label: "GitHub",
      href: "https://github.com/kimkwanhyoung123",
      external: true,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kwanhyoungkim",
      external: true,
    },
  ],
};

export const companyProjectDisclaimer: CompanyProjectDisclaimer = {
  ko: "회사 제품을 대상으로 한 진단 내용은 제품명, 상세 공격 절차, PoC 코드와 증거 화면을 공개하지 않고, 담당한 분석 과정과 개선 방향을 중심으로 일반화해 기술했습니다. 사외 버그바운티 건은 책임공개(Responsible Disclosure) 절차를 따릅니다.",
  en: "Findings against company products are described in generalized form only — no product names, exploitation steps, PoC code, or evidence screenshots. External bug bounty work follows responsible disclosure.",
};
