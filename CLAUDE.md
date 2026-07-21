# Kwan Hyung Kim Portfolio

## Project Goal

Build a production-ready developer portfolio for a Forward Deployed Engineer (FDE) candidate.

The design may be inspired by the clean structure of Brittany Chiang's portfolio (brittanychiang.com), but **do not copy** its source code, wording, layout dimensions, branding, animations, or assets. Create an original implementation.

## How To Use This Repo

- `CLAUDE.md` (this file): the rules you must always follow.
- `PORTFOLIO_SPEC.md`: the full content spec — exact copy, project details, colors, diagrams, section-by-section instructions. **Read it before implementing any section**, and pull the actual text/content from there rather than inventing it.

At the start of each task: read `CLAUDE.md` and the relevant section of `PORTFOLIO_SPEC.md` first.

## Core Positioning

Present the engineer as someone who:

- Understands ambiguous operational problems
- Converts requirements into technical solutions
- Integrates software, data, and existing systems
- Delivers from design through deployment
- Investigates failures and performance bottlenecks
- Communicates technical findings clearly

## Technology

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- ESLint
- Deployment: Vercel

## Main Sections

1. Hero
2. About
3. Experience
4. Featured Projects
5. Other Projects
6. Security Research
7. Contact

## Featured Projects

1. Hyperspectral Image Processing Platform
2. DirectX 11 Image Rendering Engine
3. Satellite Time-Series Analysis Viewer

## Other Projects

1. GCP Chip Management Module
2. Bug Bounty Security Research
3. CTF Security Challenges
4. Crew Running Application

## Visual Asset Rules

Use **real screenshots only** for:

- CTF Security Challenges (public ranking screen)
- Crew Running Application (app screens)

For all company projects and bug bounty, use **generalized diagrams only** (placeholder image paths until the diagrams are provided).

**Never expose:**

- Company product UI
- Customer / client / agency names
- Internal architecture
- Actual class names, function names, DLL names
- Database schemas, table/column names
- API parameters, file paths, credentials
- Detailed algorithms, cache policies, tile sizes, tuning parameters
- Non-public vulnerability information (product names, exploit steps, PoC code, evidence captures)

Approved generalized visualizations:

- Data pipeline diagram
- Before / After architecture comparison
- System flow diagram
- Requirement-to-design process
- Security research process

## Content Priority

Every featured project must clearly communicate, in this order:

1. Business context
2. Problem
3. My role
4. Solution
5. Integration
6. Result
7. Technology

## Security Research Wording (important)

For bug bounty work, do **not** claim official recognition or resolution. Avoid: "vulnerability found", "officially acknowledged", "security vulnerability fixed".

Use instead: "vulnerability analysis and reporting", "verified suspicious behavior", "built a reproducible PoC", "performed security testing". Do not exaggerate outcomes.

## Code Architecture

Keep all content **outside** React components. Components render data; data lives in:

- `src/types/portfolio.ts`
- `src/data/profile.ts`
- `src/data/experience.ts`
- `src/data/projects.ts`
- `src/data/skills.ts`
- `src/data/navigation.ts`

## Quality Requirements

- Responsive from 360px to desktop
- Semantic HTML
- Keyboard accessible, visible focus states
- Proper alt text on all images
- Support `prefers-reduced-motion`
- No horizontal scrolling
- Optimized Next.js `<Image>`
- Open Graph metadata
- No TypeScript errors
- No ESLint errors
- Production build (`npm run build`) must pass

## Writing Style

- Primary language: Korean (concise). English version added later.
- Avoid generic claims; use evidence-based, measurable descriptions.
- Keep paragraphs to 3 lines or fewer.

## Workflow (follow every task)

1. Inspect the current project structure.
2. Explain which files you will change.
3. Implement the smallest complete version.
4. Run `npm run lint` and `npm run build`.
5. Fix all errors.
6. Summarize the result briefly.
