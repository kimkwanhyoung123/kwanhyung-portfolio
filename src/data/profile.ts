import type {
  CompanyProjectDisclaimer,
  ContactContent,
  CoreStrength,
  Profile,
} from "@/types/portfolio";

export const profile: Profile = {
  greeting: "안녕하세요. 저는 김관형입니다.",
  nameKo: "김관형",
  nameEn: "Kwan Hyung Kim",
  headline: "복잡한 현장 문제를 실제로 동작하는 소프트웨어로 전환합니다.",
  heroParagraphs: [
    "고객과 사용자의 요구사항을 구체적인 기술 과제로 정의하고, C#과 C++ 기반 영상처리 시스템과 데이터 파이프라인을 설계·구현해 왔습니다.",
    "공간정보, 위성·드론·초분광 데이터처럼 복잡한 도메인을 빠르게 이해하고, 기존 시스템과의 연동부터 성능 개선, 검증과 배포까지 제품 개발 전 과정을 수행합니다.",
  ],
  heroCtas: [
    { label: "대표 프로젝트 보기", href: "#projects", variant: "primary" },
    {
      label: "GitHub",
      href: "https://github.com/kimkwanhyoung123",
      variant: "secondary",
      external: true,
    },
  ],
  aboutParagraphs: [
    "저는 복잡한 도메인과 모호한 요구사항을 빠르게 이해하고, 이를 실제 사용 가능한 소프트웨어로 구현하는 엔지니어입니다.",
    "현재 3DLabs에서 국가기관과 연구기관이 사용하는 위성·드론·초분광 영상처리 소프트웨어를 개발하고 있습니다. 사용자 요구사항을 분석해 기능과 데이터 흐름을 설계하고, C# UI와 C++ 처리 모듈, 공간정보 데이터와 외부 실행 프로그램을 하나의 제품으로 통합해 왔습니다.",
    "단순히 전달받은 기능을 구현하는 데 그치지 않고, 실제 업무 흐름에서 무엇이 문제인지 파악하고 기술적 해결책으로 구체화하는 과정을 중요하게 생각합니다. 성능 저하, 데이터 오차, 좌표계 문제와 배포 환경 차이 같은 문제를 직접 재현하고 원인을 추적해 왔습니다.",
    "새로운 산업과 시스템을 빠르게 이해하고, 고객과 가까운 위치에서 문제를 정의하며, 설계부터 구현·검증·배포까지 책임지는 Forward Deployed Engineer를 지향합니다.",
  ],
};

export const coreStrengths: CoreStrength[] = [
  {
    title: "Problem Framing",
    description:
      "모호한 업무 요구사항을 기능, 데이터 흐름, 처리 단계와 기술 지표로 구체화합니다.",
  },
  {
    title: "End-to-End Delivery",
    description:
      "요구사항 분석부터 설계, 구현, 통합, 테스트와 배포까지 전 과정을 수행합니다.",
  },
  {
    title: "System Integration",
    description:
      "C# UI, C++ 처리 엔진, 공간정보 데이터, 외부 실행 모듈과 기존 시스템을 연결합니다.",
  },
  {
    title: "Domain Adaptation",
    description:
      "위성, 드론, 초분광, 공간정보와 보안 등 새로운 도메인을 빠르게 학습합니다.",
  },
  {
    title: "Root-Cause Analysis",
    description:
      "오류와 성능 저하를 재현하고 로그, 코드, 데이터와 실행 환경을 기반으로 원인을 추적합니다.",
  },
  {
    title: "Customer-Oriented Engineering",
    description:
      "기술적으로 구현 가능한 기능보다 사용자의 실제 업무에서 활용할 수 있는 결과를 우선합니다.",
  },
];

export const contact: ContactContent = {
  title: "복잡한 문제를 함께 정의하고 실제로 동작하는 솔루션을 만들고 싶습니다.",
  paragraphs: [
    "새로운 도메인을 빠르게 이해하고, 고객과 가까운 위치에서 문제를 구체화하며, 설계부터 구현과 배포까지 책임지는 역할에 관심이 있습니다.",
    "Forward Deployed Engineer, Solutions Engineer, Product Engineer와 고객 밀착형 소프트웨어 엔지니어 포지션에 열려 있습니다.",
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
  ko: "회사 프로젝트에 사용된 구조도와 흐름도는 실제 내부 설계를 그대로 공개하지 않고, 담당 업무와 문제 해결 방식을 중심으로 일반화해 재구성했습니다. 실제 제품 UI, 고객 데이터, 내부 모듈명, 상세 알고리즘과 비공개 시스템 정보는 포함하지 않았습니다.",
  en: "The diagrams are generalized reconstructions of my engineering experience and do not represent the company's actual internal architecture or confidential product information.",
};
