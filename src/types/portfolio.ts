export interface NavItem {
  number: string;
  label: string;
  href: string;
}

export interface HeroCta {
  label: string;
  href: string;
  variant: "primary" | "secondary";
  external?: boolean;
}

export interface Profile {
  nameKo: string;
  nameEn: string;
  headline: string;
  heroParagraphs: string[];
  heroCtas: HeroCta[];
  aboutParagraphs: string[];
}

export interface CoreStrength {
  title: string;
  description: string;
}

export interface SkillGroups {
  languages: string[];
  engineering: string[];
  domainAndTools: string[];
  aboutHighlight: string[];
}

export interface ExperienceEntry {
  id: string;
  tabLabel: string;
  role: string;
  period?: string;
  bullets: string[];
}

export interface ProjectImage {
  src: string;
  alt: string;
}

export interface ProjectMetric {
  label: string;
  value: string;
}

export interface FeaturedProject {
  id: string;
  slug: string;
  titleKo: string;
  titleEn: string;
  businessContext: string;
  problem: string;
  myRole: string;
  solution: string;
  integration: string;
  result: string;
  keyContributions: string[];
  technologies: string[];
  /** Linear pipeline/flow diagram steps (used when the project has a single flow, not a before/after comparison). */
  processFlow?: string[];
  /** Before-state flow steps, only set for before/after comparison diagrams. */
  flowBefore?: string[];
  /** After-state flow steps, only set for before/after comparison diagrams. */
  flowAfter?: string[];
  diagram: ProjectImage;
  metric?: ProjectMetric;
  technicalStory?: TechnicalStory;
  disclaimerNote: string;
}

export type OtherProjectVisualType = "diagram" | "screenshot";

export interface ProjectLink {
  label: string;
  href: string;
}

export interface TechnicalChallenge {
  problem: string;
  solution: string;
}

/** Optional engineering deep-dive: how it was built, what was hard and how it
 * was solved, and what growth came from it.
 *
 * `approach` is optional — featured projects already describe their approach in
 * the My Role / Solution / Integration blocks, so they carry only the
 * challenges and the growth. */
export interface TechnicalStory {
  approach?: string[];
  challenges: TechnicalChallenge[];
  growth: string;
}

export interface OtherProject {
  id: string;
  titleKo: string;
  titleEn?: string;
  description: string;
  keyExperience: string[];
  technologies: string[];
  visualType: OtherProjectVisualType;
  images: ProjectImage[];
  processFlow?: string[];
  deliverables?: string[];
  metrics?: ProjectMetric[];
  links?: ProjectLink[];
  technicalStory?: TechnicalStory;
  disclaimerNote?: string;
}

export interface ContactLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface ContactContent {
  title: string;
  paragraphs: string[];
  links: ContactLink[];
}

export interface CompanyProjectDisclaimer {
  ko: string;
  en: string;
}
