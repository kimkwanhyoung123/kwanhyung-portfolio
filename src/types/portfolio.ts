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

/** A numbered feature/capability block (e.g. system-profile, what-I-bring). */
export interface NumberedItem {
  title: string;
  description: string;
}

/** A headline statistic shown in the experience metrics band. */
export interface StatMetric {
  value: string;
  label: string;
}

/** One step in the engineering playbook (01 → 02 → 03). */
export interface PlaybookStep {
  step: string;
  title: string;
  description: string;
}

export interface SkillGroups {
  languages: string[];
  engineering: string[];
  domainAndTools: string[];
  aboutHighlight: string[];
}

/** A tech-stack logo shown as an image tile in About. */
export interface TechLogo {
  name: string;
  /** Path under /public. */
  src: string;
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

/** A single project rendered as one full-screen panel in the deck.
 * Normalized from FeaturedProject / OtherProject so one component can render
 * company work and security work identically. */
export interface ProjectPanelData {
  id: string;
  /** Section grouping label shown in the eyebrow (e.g. "Projects"). */
  sectionLabel: string;
  titleKo: string;
  titleEn?: string;
  /** One short outcome-focused line. */
  summary: string;
  /** Short capability chips. */
  highlights: string[];
  technologies: string[];
  images: ProjectImage[];
  processFlow?: string[];
  flowBefore?: string[];
  flowAfter?: string[];
  metrics?: ProjectMetric[];
  deliverables?: string[];
  links?: ProjectLink[];
  disclaimerNote?: string;
  accent: "company" | "security";
}

/** FDE-oriented deep-dive for a featured project. Each field is one concise
 * sentence; the diagram carries the system view. */
export interface FdeDetail {
  /** Who the user was and what they were doing. */
  customerContext: string;
  /** What was unclear in the initial requirements. */
  ambiguity: string;
  /** How it was solved, structurally. */
  engineering: string;
  /** How it was integrated with existing systems and shipped. */
  delivery: string;
  /** How correct operation was verified. */
  validation: string;
  /** What changed for the user / performance. */
  impact: string;
  /** The pattern/structure reused in later work. */
  reusableLearning: string;
}

/** A single project in the vertical deck. Featured projects also carry a
 * `detail` (FDE structure); additional work stays compact. */
export interface DeckItem {
  id: string;
  /** Selects the schematic diagram rendered in ProjectArt. */
  art: string;
  /** Small label above the title, e.g. "3DLabs · 위성·드론 영상처리". */
  kicker: string;
  titleKo: string;
  titleEn?: string;
  /** One short sentence describing what the project does. */
  oneLiner: string;
  /** 2–3 short phrases (no full sentences). */
  bullets: string[];
  technologies: string[];
  metric?: ProjectMetric;
  link?: ProjectLink;
  /** Optional short disclaimer. */
  note?: string;
  /** True for the 4 headline projects shown as deep, full-width panels. */
  featured?: boolean;
  /** FDE 7-part breakdown, only set on featured projects. */
  detail?: FdeDetail;
}
