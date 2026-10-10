import type { SkillGroups, TechLogo } from "@/types/portfolio";

/** Core stack shown as logo tiles in About. */
export const techStack: TechLogo[] = [
  { name: "Python", src: "/logos/python.svg" },
  { name: "C++", src: "/logos/cplusplus.svg" },
  { name: "C#", src: "/logos/csharp.svg" },
  { name: "Java", src: "/logos/java.svg" },
  { name: ".NET", src: "/logos/dotnet.svg" },
  { name: "Git", src: "/logos/git.svg" },
  { name: "Visual Studio", src: "/logos/visualstudio.svg" },
];

/** Security-side stack without common brand logos — shown as text alongside. */
export const techStackMore = [
  "Linux",
  "Windows Security",
  "TPM · DPAPI",
  "HackerOne",
];

export const skills: SkillGroups = {
  languages: ["Python", "C++", "C#", "Shell", "Java", "SQL"],
  engineering: [
    "모의해킹 (PT)",
    "취약점 분석",
    "소스코드 보안 리뷰",
    "위협 모델링",
    "PoC 개발 · 재현",
    "로그 분석",
    "조치 가이드 작성",
  ],
  domainAndTools: [
    "Linux",
    "Windows Security",
    "TPM · DPAPI",
    "HackerOne",
    "LangGraph",
    "Ollama",
    "Pydantic",
    "Git",
    "Visual Studio",
  ],
  aboutHighlight: [
    "Python",
    "C++",
    "C#",
    "Linux",
    "취약점 분석",
    "위협 모델링",
    "PoC",
    "HackerOne",
  ],
};
