import type { ExperienceEntry } from "@/types/portfolio";

export const experience: ExperienceEntry[] = [
  {
    id: "3dlabs",
    tabLabel: "3DLabs",
    role: "Software Engineer @ 3DLabs",
    period: "2024.07 ~ Present",
    bullets: [
      "국가기관·연구기관 고객과 직접 요구사항을 정의하고, 이를 영상처리 기능과 데이터 흐름으로 구체화했습니다.",
      "센서 원본 데이터부터 표출·분석까지 이어지는 7단계 처리 파이프라인을 설계해 분리된 도구·수작업 절차를 단일 소프트웨어로 통합했습니다.",
      "C# UI와 C++ 영상처리 엔진, 외부 처리 프로그램을 하나의 제품으로 통합했습니다.",
      "위성·드론·초분광 영상의 전처리, 분석과 시각화 파이프라인을 구현했습니다.",
      "DirectX 11 기반 렌더링 구조를 구축해 수 GB 규모 영상의 표출 지연을 약 30% 개선했습니다(내부 테스트 기준).",
      "고객 납품 환경에서 발생하는 DLL·좌표계·배포 오류를 현장 관점에서 직접 재현하고 원인을 추적해 해결했습니다.",
      "개발 결과를 설계서, 처리 흐름도, 시험 절차와 사용자 문서로 정리해 고객에게 전달했습니다.",
    ],
  },
  {
    id: "geospatial-academy",
    tabLabel: "공간정보 아카데미",
    role: "Application Developer @ 공간정보 아카데미",
    period: "2023.06 ~ 2023.11",
    bullets: [
      "러닝 크루의 실제 사용 시나리오를 분석해 위치 기반 모바일 서비스로 구현했습니다.",
      "사용자 이동 경로와 구성원 위치를 실시간으로 지도에 표출했습니다.",
      "스마트폰 추락 감지 시 주변 AED 위치를 안내하는 긴급 대응 기능을 개발했습니다.",
      "요구사항 정의, 화면 설계, 위치 데이터 처리와 Android 애플리케이션 구현을 수행했습니다.",
    ],
  },
  {
    id: "security-research",
    tabLabel: "Security Research",
    role: "Independent Security Researcher",
    period: "2026 ~ Present",
    bullets: [
      "웹 서비스와 브라우저 지갑의 사용자 흐름을 분석하고 권한·인증·거래 처리 과정의 위험 시나리오를 도출했습니다.",
      "재현 가능한 테스트 환경과 PoC를 구축해 문제의 영향과 발생 조건을 검증했습니다.",
      "로그, 영상, 실행 절차와 개선 방향을 포함한 기술 보고서를 작성했습니다.",
      "제품 동작을 사용자와 공격자 관점에서 검토하며 예외 상황과 보안 경계를 분석했습니다.",
    ],
  },
];
