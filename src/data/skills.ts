import type { SkillGroups, TechLogo } from "@/types/portfolio";

/** Core stack shown as logo tiles in About. */
export const techStack: TechLogo[] = [
  { name: "C#", src: "/logos/csharp.svg" },
  { name: "C++", src: "/logos/cplusplus.svg" },
  { name: "Python", src: "/logos/python.svg" },
  { name: "Java", src: "/logos/java.svg" },
  { name: "Spring", src: "/logos/spring.svg" },
  { name: ".NET", src: "/logos/dotnet.svg" },
  { name: "OpenCV", src: "/logos/opencv.svg" },
  { name: "Git", src: "/logos/git.svg" },
  { name: "Visual Studio", src: "/logos/visualstudio.svg" },
];

/** Domain stack without common brand logos — shown as text alongside. */
export const techStackMore = ["DirectX 11", "GDAL", "WinForms", "Spatial Data"];

export const skills: SkillGroups = {
  languages: ["C#", "C++", "Python", "Java", "TypeScript"],
  engineering: [
    "System Integration",
    "Data Pipeline",
    "API Design",
    "Performance Optimization",
    "Root-Cause Analysis",
    "Technical Documentation",
  ],
  domainAndTools: [
    "DirectX 11",
    "GDAL",
    "OpenCV",
    "WinForms",
    "React / Next.js",
    "Tailwind CSS",
    "Spatial Data",
    "Git",
    "Visual Studio",
    "Jira",
  ],
  aboutHighlight: [
    "C#",
    "C++",
    "Python",
    "DirectX 11",
    "GDAL",
    "OpenCV",
    "WinForms",
    "Git",
  ],
};
