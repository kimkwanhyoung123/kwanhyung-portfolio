# 김관형 FDE 개발자 포트폴리오 — 전체 스펙 (PORTFOLIO_SPEC)

> 이 문서는 포트폴리오의 콘텐츠·디자인·구조에 대한 단일 기준 문서입니다.
> Claude Code는 각 섹션을 구현하기 전에 해당 번호의 내용을 읽고, 여기 적힌 실제 문구/구조를 사용합니다.
> 규칙(비공개 정보 보호, 기술 스택 등)은 `CLAUDE.md`를 따릅니다.

---

## 1. 포트폴리오 목표

단순히 개발 기술을 나열하는 사이트가 아니라 다음 역량을 보여주는 것을 목표로 합니다.

- 모호한 요구사항을 기술 과제로 구체화하는 능력
- 새로운 산업과 업무 도메인을 빠르게 이해하는 능력
- 기존 시스템과 데이터, 처리 모듈을 통합하는 능력
- 설계부터 구현, 테스트, 배포까지 수행하는 능력
- 오류와 성능 문제의 원인을 추적하고 개선하는 능력
- 기술적 결과를 고객과 팀이 이해할 수 있도록 전달하는 능력

지원 목표 직무: Forward Deployed Engineer, Solutions Engineer, Product Engineer, Customer-Facing Software Engineer, AI Solutions Engineer

---

## 2. 사이트 제작 방향

Brittany Chiang 포트폴리오의 장점을 참고합니다: 한 페이지 연속 구조, 짧고 강한 첫 화면, 번호가 들어간 섹션 제목, 경력 탭 구성, 대표 프로젝트 강조, 보조 프로젝트 카드 정리, 어두운 배경 + 한 가지 포인트 색상, 절제된 애니메이션, 모바일 반응형.

원본 저장소를 그대로 포크하지 않고 다음 기술로 새롭게 구현합니다: **Next.js · TypeScript · Tailwind CSS · Framer Motion · GitHub · Vercel**

---

## 3. 사이트 전체 구조

```
HOME
├─ Hero
├─ About
├─ Experience
├─ Featured Projects
├─ Other Projects
├─ Security Research
└─ Contact
```

상단 메뉴:

```
01. About
02. Experience
03. Projects
04. Research
05. Contact
```

1차 버전은 한국어로 제작하고, 이후 영어 버전을 추가합니다.

---

## 4. 핵심 포지셔닝

- 메인 문구(국문): 복잡한 현장 문제를 실제로 동작하는 소프트웨어로 전환합니다.
- 메인 문구(영문): I turn ambiguous operational problems into production-ready software.

---

## 5. Hero 섹션

- 작은 문구: 안녕하세요. 저는 김관형입니다.
- 이름: 김관형 / Kwan Hyung Kim
- 메인 헤드라인: 복잡한 현장 문제를 실제로 동작하는 소프트웨어로 전환합니다.
- 소개 문구 1: 고객과 사용자의 요구사항을 구체적인 기술 과제로 정의하고, C#과 C++ 기반 영상처리 시스템과 데이터 파이프라인을 설계·구현해 왔습니다.
- 소개 문구 2: 대용량 영상과 공간정보 데이터처럼 복잡한 도메인을 빠르게 이해하고, 기존 시스템과의 연동부터 성능 개선, 검증과 배포까지 제품 개발 전 과정을 수행합니다.
- 버튼: [대표 프로젝트 보기] (가장 크게 배치), [GitHub], [PDF 포트폴리오]

---

## 6. About 섹션

3개 문단(각 3줄 이내):

1. 저는 복잡한 도메인과 모호한 요구사항을 빠르게 이해하고, 이를 실제 사용 가능한 소프트웨어로 구현하는 엔지니어입니다.

2. 현재 3DLabs에서 공공·연구 기관이 사용하는 영상처리 소프트웨어를 개발하고 있습니다. 사용자 요구사항을 분석해 기능과 데이터 흐름을 설계하고, C# UI와 C++ 처리 모듈, 공간정보 데이터와 외부 실행 프로그램을 하나의 제품으로 통합해 왔습니다.

3. 단순히 전달받은 기능을 구현하는 데 그치지 않고, 실제 업무 흐름에서 무엇이 문제인지 파악하고 기술적 해결책으로 구체화하는 과정을 중요하게 생각합니다. 성능 저하, 데이터 오차, 좌표계 문제와 배포 환경 차이 같은 문제를 직접 재현하고 원인을 추적해 왔습니다.

4. 새로운 산업과 시스템을 빠르게 이해하고, 고객과 가까운 위치에서 문제를 정의하며, 설계부터 구현·검증·배포까지 책임지는 Forward Deployed Engineer를 지향합니다.

---

## 7. 핵심 강점

- **Problem Framing** — 모호한 업무 요구사항을 기능, 데이터 흐름, 처리 단계와 기술 지표로 구체화합니다.
- **End-to-End Delivery** — 요구사항 분석부터 설계, 구현, 통합, 테스트와 배포까지 전 과정을 수행합니다.
- **System Integration** — C# UI, C++ 처리 엔진, 공간정보 데이터, 외부 실행 모듈과 기존 시스템을 연결합니다.
- **Domain Adaptation** — 영상처리, 공간정보와 보안 등 새로운 도메인을 빠르게 학습합니다.
- **Root-Cause Analysis** — 오류와 성능 저하를 재현하고 로그, 코드, 데이터와 실행 환경을 기반으로 원인을 추적합니다.
- **Customer-Oriented Engineering** — 기술적으로 구현 가능한 기능보다 사용자의 실제 업무에서 활용할 수 있는 결과를 우선합니다.

---

## 8. 기술 목록

- **Languages**: C#, C++, Python, Java
- **Engineering**: System Integration, Data Pipeline, API Design, Performance Optimization, Root-Cause Analysis, Technical Documentation
- **Domain and Tools**: DirectX 11, GDAL, OpenCV, WinForms, Spatial Data, Git, Visual Studio, Jira

About 섹션에는 다음 8개만 우선 표시: `C#`, `C++`, `Python`, `DirectX 11`, `GDAL`, `OpenCV`, `WinForms`, `Git`

---

## 9. Experience 섹션

탭 구성: `3DLabs` / `공간정보 아카데미` / `Security Research`

### Software Engineer @ 3DLabs — 2024.07 ~ Present

- 공공·연구 기관의 요구사항을 분석해 영상처리 기능과 데이터 흐름으로 구체화했습니다.
- C# UI와 C++ 영상처리 엔진, 외부 처리 프로그램을 하나의 제품으로 통합했습니다.
- 대용량 영상의 전처리, 분석과 시각화 파이프라인을 구현했습니다.
- DirectX 11 기반 렌더링 구조를 구축해 대용량 영상 표출 성능을 개선했습니다.
- 고객 환경에서 발생하는 DLL, 좌표계와 배포 오류를 재현하고 원인을 해결했습니다.
- 개발 결과를 설계서, 처리 흐름도, 시험 절차와 사용자 문서로 정리했습니다.

### Application Developer @ 공간정보 아카데미

- 러닝 크루의 실제 사용 시나리오를 분석해 위치 기반 모바일 서비스로 구현했습니다.
- 사용자 이동 경로와 구성원 위치를 실시간으로 지도에 표출했습니다.
- 스마트폰 추락 감지 시 주변 AED 위치를 안내하는 긴급 대응 기능을 개발했습니다.
- 요구사항 정의, 화면 설계, 위치 데이터 처리와 Android 애플리케이션 구현을 수행했습니다.

### Independent Security Researcher — 2026 ~ Present

- 웹 서비스와 브라우저 지갑의 사용자 흐름을 분석하고 권한·인증·거래 처리 과정의 위험 시나리오를 도출했습니다.
- 재현 가능한 테스트 환경과 PoC를 구축해 문제의 영향과 발생 조건을 검증했습니다.
- 로그, 영상, 실행 절차와 개선 방향을 포함한 기술 보고서를 작성했습니다.
- 제품 동작을 사용자와 공격자 관점에서 검토하며 예외 상황과 보안 경계를 분석했습니다.

---

## 10. 대표 프로젝트 작성 방식 (공통 순서)

```
Business Context → 사용자가 어떤 업무를 수행했는가
Problem          → 기존 방식에서 무엇이 어려웠는가
My Role          → 내가 직접 담당한 범위는 무엇인가
Solution         → 어떤 구조와 기술로 해결했는가
Integration      → 기존 시스템과 어떻게 연결했는가
Result           → 무엇이 개선됐는가
```

---

## 11. Featured Project 1 — 영상처리 및 분석 플랫폼 (Image Processing & Analysis Platform)

- **Business Context**: 여러 센서로 수집한 영상 데이터를 분석하기 위해 여러 개의 처리 도구와 수작업 절차를 사용하고 있었습니다.
- **Problem**: 센서별 데이터 형식이 다르고, 전처리부터 분석과 결과 확인까지의 과정이 분리되어 있어 사용자가 전체 작업 흐름을 관리하기 어려웠습니다.
- **My Role**: 사용자 요구사항 분석, 처리 단계 정의, C# UI와 C++ 처리 엔진 연동, 영상 표출과 분석 기능 구현을 담당했습니다.
- **Solution**: 메타데이터 표준화, 기하보정, 모자이크, 반사율 변환, 식생지수와 이상치 분석을 하나의 데이터 파이프라인으로 통합했습니다.
- **Integration**: 여러 계열의 센서 영상 데이터, GDAL 기반 공간정보 처리, C++ 영상처리 모듈과 C# 애플리케이션을 연결했습니다.
- **Result**: 사용자는 하나의 소프트웨어에서 데이터 처리, 결과 확인과 픽셀 스펙트럼 분석까지 연속적으로 수행할 수 있게 됐습니다.

핵심 기여: C# UI ↔ C++ 영상처리 모듈 인터페이스 설계 / 센서별 메타데이터 표준화 / ENVI BIL Float32 데이터 입출력 / 반사율 변환과 식생지수 계산 / RGB·단일 밴드 영상 표출 / 픽셀 스펙트럼 분석 / 영상 좌표 ↔ UTM 좌표 변환

기술: C# · C++ · GDAL · OpenCV · WinForms · ENVI

시각자료: 실제 회사 SW 화면 사용 금지. 일반화된 데이터 파이프라인 개념도를 제작.

```
Raw Sensor Data → Metadata Standardization → Geometric Correction → Mosaic
→ Reflectance Conversion → Vegetation Index / Anomaly Analysis → Viewer & Spectrum Analysis
```

표기 문구: "실제 업무 경험을 일반화해 재구성한 개념도이며, 회사의 실제 내부 설계와 제품 화면은 포함하지 않았습니다."

---

## 12. Featured Project 2 — DirectX 11 기반 대용량 영상 렌더링 엔진 (DirectX 11 Image Rendering Engine)

- **Business Context**: 사용자는 수 GB 규모의 대용량 영상을 확대·축소하며 세부 지역을 분석해야 했습니다.
- **Problem**: 기존 렌더링 구조에서는 대용량 영상 이동과 확대·축소 시 화면 지연이 발생해 분석 업무의 흐름이 끊겼습니다.
- **My Role**: 기존 구조 분석, 병목 구간 식별, DirectX 11 렌더링 엔진 설계와 C# 애플리케이션 연동을 담당했습니다.
- **Solution**: ROI와 Overview를 활용해 현재 화면에 필요한 데이터만 선택적으로 읽고, GPU 기반으로 렌더링하도록 구조를 변경했습니다.
- **Integration**: 기존 C# 데스크톱 애플리케이션을 유지하면서 C++ DirectX 렌더링 모듈을 재사용 가능한 인터페이스로 연결했습니다.
- **Result**: 내부 테스트 기준 화면 렌더링 지연을 약 30% 개선하고 대용량 영상 탐색의 응답성을 높였습니다.

핵심 기여: Direct3D 11 렌더링 구조 설계 / C#↔C++ 렌더링 모듈 인터페이스 구현 / ROI 기반 선택적 데이터 로딩 / Overview 기반 해상도 선택 / GPU 텍스처 생성·렌더링 / 화면 좌표 ↔ 영상 좌표 동기화 / 기존 앱에 재사용 가능한 형태로 통합

기술: C++ · Direct3D 11 · HLSL · GDAL · WIC · C#

시각자료: 실제 회사 아키텍처 사용 금지. Before / After 개념도를 제작.

```
[기존 구조]  전체 영상 중심 로딩 → 화면 이동 시 반복 처리 → CPU 중심 렌더링 → 응답 지연 발생
[개선 구조]  현재 화면 ROI 계산 → 적정 Overview 선택 → 필요 데이터만 로딩 → GPU 텍스처 렌더링 → 화면 응답성 개선
```

성과 카드: `Rendering Latency — 약 30% 개선 (내부 테스트 기준)`

실제 클래스명·함수명·DLL명·캐시 정책·타일 크기·세부 파라미터는 표시하지 않습니다.

---

## 13. Featured Project 3 — 영상 시계열 분석·표출 시스템 (Image Time-Series Analysis Viewer)

- **Business Context**: 사용자는 서로 다른 시기에 촬영된 영상과 분석 결과를 비교해 지역 변화를 확인해야 했습니다.
- **Problem**: 시기별 데이터가 분리되어 있어 변화 양상을 연속적으로 파악하기 어려웠고, 영상과 시설물 정보를 함께 비교하기도 어려웠습니다.
- **My Role**: 다중 시기 데이터 구조 설계, 조회와 표출 기능 구현, 영상과 공간정보 레이어의 동기화를 담당했습니다.
- **Solution**: 여러 시기의 영상 데이터를 하나의 시계열로 구성하고, 사용자가 시점과 지역을 선택해 변화 결과를 조회할 수 있도록 구현했습니다.
- **Integration**: 영상, 분석 결과, 시설물 공간정보와 기존 데스크톱 뷰어를 하나의 사용자 흐름으로 통합했습니다.
- **Result**: 사용자가 여러 데이터와 프로그램을 오가지 않고 하나의 화면에서 시계열 변화와 공간정보를 함께 확인할 수 있게 했습니다.

핵심 기여: 다중 시기 영상 데이터 구성 / 시계열 조회·비교 기능 / 영상·공간정보 레이어 중첩 / 화면 ↔ 지도 좌표 동기화 / 분석 결과 조회 UI / 데이터 유효성 검증 / 납품 환경 오류 대응

기술: C# · C++ · GDAL · DirectX 11 · Spatial Data

시각자료: 실제 SW UI 사용 금지. 일반화된 시스템 흐름도를 제작.

```
Multi-Date Images → Metadata Validation → Time-Series Dataset
→ Spatial Layer Integration → Date / Region Selection → Change Analysis Visualization
```

제품명·고객기관명·실제 촬영지역·데이터 구조는 표시하지 않습니다.

---

## 14. Other Projects

카드 순서: 1) 데이터 관리 모듈 설계  2) Bug Bounty Security Research  3) CTF Security Challenges  4) 크루 기반 러닝 애플리케이션

### 데이터 관리 모듈 설계 (Data Management Module Design)

관리 대상 데이터의 조회·생성·등록·갱신·삭제·품질평가 업무를 분석하고, 이를 유스케이스·데이터 흐름·데이터베이스 구조로 구체화했습니다. 사용자 업무 흐름을 기능 단위로 분해하고, 화면 정의·데이터 처리 순서·품질평가 항목·테이블 구조를 설계했습니다.

핵심 경험: 요구사항 분석 / 유스케이스 설계 / 데이터 흐름도 작성 / 데이터베이스 설계 / 화면 처리 흐름 정의 / 품질평가 데이터 구조 설계

기술: Requirement Analysis · System Design · Database · UML · Spatial Data

시각자료: 회사 설계 문서 그대로 사용 금지. 외부 공개 가능한 수준으로 다시 그린 개념도 사용.

```
사용자 요구사항 → 유스케이스 정의 → 화면 처리 흐름 → 데이터 흐름 → 데이터베이스 구조 → 품질평가 데이터 관리
```

실제 테이블명·컬럼명·내부 문서·고객 요구사항은 공개하지 않습니다.

### Bug Bounty Security Research

실제 서비스와 오픈소스 제품의 사용자 흐름·권한 처리·거래 구조를 분석하고, 보안 문제가 의심되는 동작을 재현 가능한 PoC와 기술 보고서로 작성해 제보했습니다. 문제 발생 조건을 명확히 하기 위해 테스트 환경을 구성하고, 실행 영상·로그·프레임·코드·재현 절차를 증거 자료로 정리했습니다.

핵심 경험: 인증·권한·거래 흐름 분석 / 비정상 동작의 발생 조건 검증 / 재현 가능한 PoC 구현 / 테스트 환경 구성 / 로그·실행 결과 수집 / 단계별 기술 보고서 작성 / 피드백 반영한 시나리오·영향도 보완

기술: Web Security · Authorization · Transaction Security · PoC · Technical Writing

시각자료: 실제 HackerOne 화면·비공개 보고서·PoC 코드·증거 캡처 사용 금지. 다음 분석 흐름도를 제작.

```
제품 기능과 사용자 흐름 분석 → 권한·거래 경계 식별 → 위험 시나리오 가설 수립
→ 독립 테스트 환경 구성 → PoC 및 반복 검증 → 로그·영상·실행 결과 수집 → 기술 보고서 작성 및 제출
```

산출물 카드: `01 Reproducible PoC / 02 Execution Walkthrough / 03 Console & Network Evidence / 04 Impact Analysis / 05 Technical Report`

표기 문구: "비공개 책임 공개 절차를 준수하기 위해 제품명, 상세 공격 절차, PoC 코드와 증거 화면은 공개하지 않았습니다."

**표현 규칙**: "취약점 발견 / 공식 인정 / 보안 취약점 해결" 표현 금지. 대신 "취약점 분석 및 제보 / 보안 문제가 의심되는 동작 검증 / 재현 가능한 PoC 작성 / 보안 테스트 수행" 사용.

### CTF Security Challenges

제한된 정보와 복잡한 실행 환경에서 시스템 구조와 취약 가능성을 추론하고, 공격 경로를 구성해 총 4개의 보안 문제를 해결했습니다. 애플리케이션의 입력값·권한 구조·데이터 처리 흐름을 분석하고 가설 수립과 반복 검증을 통해 문제를 해결했습니다.

핵심 경험: 제한된 정보에서 시스템 구조 추론 / 코드·데이터 흐름 분석 / 공격 시나리오 구성 / 로그 기반 가설 수정 / 디버깅·반복 검증 / 해결 절차 문서화

기술: Security Analysis · Vulnerability Research · Debugging · Python · Root-Cause Analysis

시각자료: **실제 공개 순위 화면 캡처 사용**. 캡처에 표시할 내용: 대회명 / 개인전·팀전 / 최종 순위 / 전체 참가자·팀 수 / 해결 문제 수 / 주요 문제 분야.
가릴 정보: 이메일, 로그인 정보, 세션 값, URL 토큰, 다른 참가자 개인정보, 플래그, 비공개 풀이 코드.

성과 카드:
```
Final Rank         00 / 000
Challenges Solved  4
Approach           Static Analysis / Debugging / Log Investigation / Hypothesis Testing
```
팀전이었다면 반드시 팀 순위라고 표시하고 본인 담당 범위를 별도로 적습니다.

### 크루 기반 러닝 애플리케이션 (Crew Running Application)

러닝 크루의 실제 사용 흐름을 분석해 사용자 위치와 이동 경로를 실시간으로 공유하는 Android 애플리케이션을 개발했습니다. 스마트폰 추락 감지 시 주변 AED 위치를 자동으로 표출해 긴급상황에 대응할 수 있도록 구현했습니다.

핵심 경험: 사용자 요구사항 분석 / 위치 기반 데이터 처리 / 실시간 사용자 위치 표출 / 러닝 경로 시각화 / 스마트폰 추락 감지 / 주변 AED 위치 안내

기술: Java · Android Studio · Location API · Spatial Data

시각자료: **실제 앱 화면 캡처 사용**. 추천 화면: 로그인·메인 / 크루 위치 지도 / 러닝 경로 표출 / 추락 감지 알림 / AED 위치 안내.
제거할 정보: 실제 사용자 이름, 실제 위치·이동 경로, 개인 연락처, 서버 주소, API 키, 로그인 정보, 개발용 디버그 정보. 가능하면 테스트 계정과 가상 위치 데이터 사용.

---

## 15. 프로젝트별 최종 시각자료

| 프로젝트 | 사용할 시각자료 |
| --- | --- |
| 영상처리 플랫폼 | 일반화된 데이터 파이프라인 |
| DirectX 렌더링 엔진 | Before / After 구조 비교 |
| 영상 시계열 시스템 | 일반화된 시스템 흐름도 |
| 데이터 관리 모듈 | 일반화된 설계 프로세스 |
| 버그바운티 | 분석·재현·보고 프로세스 |
| CTF | 공개 순위 화면 캡처 |
| 러닝 애플리케이션 | 실제 앱 화면 캡처 |

실제 캡처는 **CTF Security Challenges**와 **Crew Running Application** 두 프로젝트에만 사용합니다.

---

## 16. 회사 프로젝트 공통 표기

국문: "회사 프로젝트에 사용된 구조도와 흐름도는 실제 내부 설계를 그대로 공개하지 않고, 담당 업무와 문제 해결 방식을 중심으로 일반화해 재구성했습니다. 실제 제품 UI, 고객 데이터, 내부 모듈명, 상세 알고리즘과 비공개 시스템 정보는 포함하지 않았습니다."

영문: "The diagrams are generalized reconstructions of my engineering experience and do not represent the company's actual internal architecture or confidential product information."

---

## 17. Contact 섹션

- 제목: 복잡한 문제를 함께 정의하고 실제로 동작하는 솔루션을 만들고 싶습니다.
- 본문 1: 새로운 도메인을 빠르게 이해하고, 고객과 가까운 위치에서 문제를 구체화하며, 설계부터 구현과 배포까지 책임지는 역할에 관심이 있습니다.
- 본문 2: Forward Deployed Engineer, Solutions Engineer, Product Engineer와 고객 밀착형 소프트웨어 엔지니어 포지션에 열려 있습니다.
- 링크: 이메일 보내기 / GitHub / LinkedIn / 이력서 PDF / 포트폴리오 PDF

---

## 18. 디자인 방향

색상:
```
Background: #0B1220
Secondary Background: #121C2E
Primary Text: #E5EAF3
Secondary Text: #97A3B6
Accent: #48D6C4
Border: rgba(72, 214, 196, 0.15)
```

폰트:
```
한글: Pretendard
영문: Inter
코드 및 번호: JetBrains Mono
```

디자인 원칙:
- 실제 캡처보다 구조도와 성과를 먼저 보여줍니다.
- 프로젝트마다 시각자료 형식을 다르게 구성합니다.
- 회사 프로젝트에는 일반화 표기를 넣습니다.
- 한 문단은 3줄을 넘기지 않습니다.
- 기술 스택은 작은 텍스트로 배치합니다.
- 프로젝트의 문제와 결과를 강조합니다.
- 장식용 애니메이션은 최소화합니다.
- 모바일에서는 그림 다음에 설명이 배치되도록 구성합니다.

---

## 19. 폴더 구조

```
kwanhyung-portfolio/
├─ public/
│  ├─ images/
│  │  ├─ diagrams/
│  │  │  ├─ image-pipeline.png
│  │  │  ├─ directx-before-after.png
│  │  │  ├─ image-time-series.png
│  │  │  ├─ data-module-process.png
│  │  │  └─ bug-bounty-process.png
│  │  ├─ ctf/
│  │  │  └─ ctf-ranking.png
│  │  ├─ running-app/
│  │  │  ├─ running-main.png
│  │  │  ├─ running-map.png
│  │  │  └─ aed-alert.png
│  │  ├─ profile/
│  │  │  └─ profile.png
│  │  └─ og/
│  │     └─ og-image.png
│  ├─ resume/
│  │  └─ kim-kwanhyung-resume.pdf
│  └─ portfolio/
│     └─ kim-kwanhyung-portfolio.pdf
│
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  ├─ globals.css
│  │  └─ projects/
│  │     └─ [slug]/
│  │        └─ page.tsx
│  ├─ components/
│  │  ├─ layout/
│  │  ├─ sections/
│  │  └─ ui/
│  ├─ data/
│  │  ├─ profile.ts
│  │  ├─ experience.ts
│  │  ├─ projects.ts
│  │  ├─ skills.ts
│  │  └─ navigation.ts
│  ├─ types/
│  │  └─ portfolio.ts
│  └─ lib/
│
├─ CLAUDE.md
├─ README.md
├─ package.json
└─ next.config.ts
```

---

## 20. Claude Code 작업 순서 (단계별 프롬프트)

> 각 단계 시작 시 `Read CLAUDE.md and the relevant sections of PORTFOLIO_SPEC.md first.` 를 앞에 붙일 것.
> 한 단계가 끝나면 `npm run dev`로 브라우저 확인 후 다음 단계로 진행.

### 1단계: 기본 구조
```
Create the foundational portfolio structure.
1. Set up global colors and typography (see spec §18).
2. Create a fixed responsive header (nav: §3).
3. Create reusable Container, SectionTitle, Button, and Reveal components.
4. Add sections: Hero, About, Experience, Featured Projects, Other Projects, Security Research, Contact.
5. Compose them in src/app/page.tsx.
6. Add smooth anchor navigation.
7. Support prefers-reduced-motion.
8. Use a clean dark engineering design. Do not copy another portfolio exactly.
9. Run npm run lint and npm run build. Fix every error.
```

### 2단계: 데이터 구성
```
Create typed portfolio data files (keep all content outside React components):
- src/types/portfolio.ts
- src/data/profile.ts, experience.ts, projects.ts, skills.ts, navigation.ts
Use real screenshots only for CTF and Crew Running Application.
Use placeholder diagram paths for all company projects and bug bounty.
Pull the actual copy from PORTFOLIO_SPEC §5–§17.
```

### 3단계: Hero와 About  (spec §5–§8)
```
Implement Hero and About using the portfolio data. FDE-focused wording.
Hero: greeting, name, headline, two short paragraphs, featured-projects button, GitHub + PDF links.
About: three concise paragraphs, core strengths (§7), technology list (§8, show 8), responsive layout.
```

### 4단계: Experience  (spec §9)
```
Implement accessible Experience tabs for: 3DLabs, 공간정보 아카데미, Security Research.
Include role, period, concise bullets. Keyboard navigation + mobile horizontal scrolling.
```

### 5단계: Featured Projects  (spec §11–§13, §16)
```
Implement Featured Projects with an alternating layout.
1. Image Processing & Analysis Platform
2. DirectX 11 Image Rendering Engine
3. Image Time-Series Analysis Viewer
Use generalized diagrams only. No company software screenshots.
Each project shows: Business context, Problem, My role, Solution, Integration, Result, Technology, Confidentiality note.
```

### 6단계: Other Projects  (spec §14)
```
Implement Other Projects as a responsive card grid:
1. Data Management Module Design — generalized design-process diagram
2. Bug Bounty Security Research — generalized research-process diagram
3. CTF Security Challenges — real ranking screenshot
4. Crew Running Application — real app screenshots
Do not exaggerate bug bounty outcomes (see CLAUDE.md wording rules).
```

### 7단계: 최종 점검
```
Perform a production readiness pass:
Responsive, mobile nav, accessibility, focus states, reduced motion, heading hierarchy,
metadata, Open Graph, image optimization, broken links, TypeScript, ESLint, production build.
Run npm run lint and npm run build. Fix every error before finishing.
```

---

## 21. 최종 포트폴리오 메시지

저는 단순히 주어진 기능을 구현하는 개발자가 아닙니다. 사용자가 실제로 겪는 문제를 이해하고, 모호한 요구를 기능과 데이터 흐름으로 구체화하며, 기존 시스템과 처리 모듈을 통합해 실제 환경에서 동작하는 제품을 만듭니다. 문제가 발생하면 로그·코드·데이터·실행 환경을 바탕으로 원인을 추적하고, 기술적 결과를 고객과 팀이 이해할 수 있는 문서와 구조로 전달합니다. 회사와 고객의 비공개 정보는 보호하면서도, 제가 어떤 문제를 어떻게 분석하고 해결했는지는 명확하게 보여주는 포트폴리오를 구성합니다.
