import type { ProjectImage, ProjectPanelData } from "@/types/portfolio";
import {
  featuredProjects,
  otherProjects,
  securityResearchProjects,
} from "@/data/projects";

const featuredPanels: ProjectPanelData[] = featuredProjects.map((p) => ({
  id: p.id,
  sectionLabel: "Projects",
  titleKo: p.titleKo,
  titleEn: p.titleEn,
  summary: p.result,
  highlights: p.keyContributions,
  technologies: p.technologies,
  images: [p.diagram],
  processFlow: p.processFlow,
  flowBefore: p.flowBefore,
  flowAfter: p.flowAfter,
  metrics: p.metric ? [p.metric] : [],
  disclaimerNote: p.disclaimerNote,
  accent: "company",
}));

const dataModule = otherProjects.find((p) => p.id === "data-management-module");
const triageAgent = otherProjects.find(
  (p) => p.id === "security-triage-agent",
);

const dataModulePanel: ProjectPanelData[] = dataModule
  ? [
      {
        id: dataModule.id,
        sectionLabel: "Projects",
        titleKo: dataModule.titleKo,
        titleEn: dataModule.titleEn,
        summary: dataModule.description,
        highlights: dataModule.keyExperience,
        technologies: dataModule.technologies,
        images: dataModule.images,
        processFlow: dataModule.processFlow,
        metrics: dataModule.metrics ?? [],
        disclaimerNote: dataModule.disclaimerNote,
        accent: "company",
      },
    ]
  : [];

const triagePanel: ProjectPanelData[] = triageAgent
  ? [
      {
        id: triageAgent.id,
        sectionLabel: "Security Research",
        titleKo: triageAgent.titleKo,
        titleEn: triageAgent.titleEn,
        summary: triageAgent.description,
        highlights: triageAgent.keyExperience,
        technologies: triageAgent.technologies,
        // Lead with the evaluation result, then the architecture diagram.
        images: [triageAgent.images[2], triageAgent.images[0]].filter(
          (img): img is ProjectImage => Boolean(img),
        ),
        metrics: triageAgent.metrics ?? [],
        links: triageAgent.links,
        disclaimerNote: triageAgent.disclaimerNote,
        accent: "security",
      },
    ]
  : [];

const securityPanels: ProjectPanelData[] = securityResearchProjects.map((p) => ({
  id: p.id,
  sectionLabel: "Security Research",
  titleKo: p.titleKo,
  titleEn: p.titleEn,
  summary: p.description,
  highlights: p.keyExperience,
  technologies: p.technologies,
  images: p.images,
  processFlow: p.processFlow,
  metrics: p.metrics ?? [],
  deliverables: p.deliverables,
  links: p.links,
  disclaimerNote: p.disclaimerNote,
  accent: "security",
}));

/** Company / engineering work — anchored at #projects. */
export const projectPanels: ProjectPanelData[] = [
  ...featuredPanels,
  ...dataModulePanel,
];

/** Security work (triage agent + bug bounty + CTF) — anchored at #research. */
export const researchPanels: ProjectPanelData[] = [
  ...triagePanel,
  ...securityPanels,
];
