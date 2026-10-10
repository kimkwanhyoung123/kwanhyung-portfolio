import Image from "next/image";
import ProjectArt from "@/components/ui/ProjectArt";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { deckItems } from "@/data/deck";
import type { DeckItem, FdeDetail } from "@/types/portfolio";

/* Labels for the 7-part breakdown shown on security panels — the shape of an
 * assessment report: what was in scope, the hypothesis, the analysis, the
 * reproduction, how it was verified, the impact and the remediation. */
const FDE_ROWS: { key: keyof FdeDetail; label: string; en: string }[] = [
  { key: "customerContext", label: "대상 · 범위", en: "TARGET" },
  { key: "ambiguity", label: "가설", en: "HYPOTHESIS" },
  { key: "engineering", label: "분석", en: "ANALYSIS" },
  { key: "delivery", label: "재현 · PoC", en: "REPRODUCTION" },
  { key: "validation", label: "검증", en: "VALIDATION" },
  { key: "impact", label: "결과 · 영향도", en: "IMPACT" },
  { key: "reusableLearning", label: "조치 · 개선안", en: "REMEDIATION" },
];

function MetricChip({ item }: { item: DeckItem }) {
  if (!item.metric) return null;
  return (
    <span className="inline-flex items-baseline gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5">
      <span className="font-mono text-base font-bold text-accent">
        {item.metric.value}
      </span>
      <span className="text-xs text-muted">{item.metric.label}</span>
    </span>
  );
}

/* Large media for a Work panel: real image if present, else schematic. */
function WorkMedia({ item }: { item: DeckItem }) {
  if (item.image) {
    return (
      <Image
        src={item.image}
        alt={item.imageAlt ?? item.titleKo}
        width={item.imageWidth ?? 1600}
        height={item.imageHeight ?? 1000}
        className="h-auto w-full rounded-2xl border border-border shadow-[0_18px_50px_-20px_rgba(0,0,0,0.75)]"
        sizes="(min-width: 1152px) 1152px, 100vw"
        unoptimized
      />
    );
  }
  return (
    <ProjectArt
      art={item.art}
      className="aspect-[16/9] w-full rounded-2xl border border-border bg-background/60"
    />
  );
}

/* Thumbnail media for a personal-project card. */
function CardMedia({ item }: { item: DeckItem }) {
  if (item.image) {
    return (
      <div className="relative mb-4 aspect-[16/9] w-full overflow-hidden rounded-lg border border-border bg-background/60">
        <Image
          src={item.image}
          alt={item.imageAlt ?? item.titleKo}
          fill
          className="object-cover object-top"
          sizes="(min-width: 1024px) 33vw, 100vw"
          unoptimized
        />
      </div>
    );
  }
  return (
    <ProjectArt
      art={item.art}
      className="mb-4 aspect-[16/9] w-full rounded-lg border border-border bg-background/60"
    />
  );
}

function WorkPanel({ item, index }: { item: DeckItem; index: number }) {
  return (
    <article className="scroll-mt-20 py-14 lg:py-20">
      {/* header (comfortable reading width) */}
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8">
        <Reveal>
          <div className="flex items-center gap-3">
            <span className="font-mono text-sm text-accent/70">
              {String(index + 1).padStart(2, "0")}
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
              {item.kicker}
            </span>
          </div>
          <h3 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            {item.titleKo}
          </h3>
          {item.titleEn ? (
            <p className="mt-1 font-inter text-sm text-muted">{item.titleEn}</p>
          ) : null}
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <MetricChip item={item} />
            <span className="font-mono text-xs text-muted">
              {item.technologies.join(" · ")}
            </span>
          </div>
        </Reveal>
      </div>

      {/* large media (wider, so the diagram/infographic is readable) */}
      <div className="mx-auto mt-8 w-full max-w-6xl px-6 sm:px-8">
        <Reveal delay={0.05}>
          <figure className="sm:px-[2cm]">
            <WorkMedia item={item} />
            <figcaption className="mt-3 text-center font-mono text-xs text-muted">
              {item.oneLiner}
            </figcaption>
          </figure>
        </Reveal>
      </div>

      {/* FDE breakdown below, two columns */}
      {item.detail ? (
        <div className="mx-auto mt-10 w-full max-w-5xl px-6 sm:px-8">
          <Reveal delay={0.1}>
            <dl className="grid gap-x-10 gap-y-5 sm:grid-cols-2">
              {FDE_ROWS.map(({ key, label, en }) => (
                <div key={key}>
                  <dt className="flex items-baseline gap-2">
                    <span className="text-sm font-semibold text-foreground">
                      {label}
                    </span>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-accent/60">
                      {en}
                    </span>
                  </dt>
                  <dd className="mt-1 text-sm leading-relaxed text-muted">
                    {item.detail![key]}
                  </dd>
                </div>
              ))}
            </dl>
            {item.note ? (
              <p className="mt-6 text-xs italic text-muted/80">{item.note}</p>
            ) : null}
          </Reveal>
        </div>
      ) : null}
    </article>
  );
}

function ProjectCard({ item }: { item: DeckItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-5">
      <CardMedia item={item} />
      <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
        {item.kicker}
      </p>
      <h4 className="mt-2 text-lg font-semibold text-foreground">
        {item.titleKo}
      </h4>
      {item.titleEn ? (
        <p className="font-inter text-xs text-muted">{item.titleEn}</p>
      ) : null}
      <p className="mt-2 text-sm leading-relaxed text-muted">{item.oneLiner}</p>

      <div className="mt-auto space-y-3 pt-4">
        {item.metric ? (
          <p className="font-mono text-xs text-accent">
            {item.metric.value}
            <span className="ml-2 text-muted">{item.metric.label}</span>
          </p>
        ) : null}
        <p className="font-mono text-[11px] text-muted">
          {item.technologies.join(" · ")}
        </p>
        {item.link ? (
          <a
            href={item.link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs font-medium text-foreground transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            {item.link.label} ↗
            <span className="sr-only"> (새 창에서 열림)</span>
          </a>
        ) : null}
        {item.note ? (
          <p className="text-[11px] italic text-muted/70">{item.note}</p>
        ) : null}
      </div>
    </article>
  );
}

function CardGroup({ label, items }: { label: string; items: DeckItem[] }) {
  return (
    <div className="mt-10">
      <Reveal>
        <h3 className="font-mono text-sm uppercase tracking-[0.18em] text-accent">
          {label}
        </h3>
      </Reveal>
      <div className="mt-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item) => (
          <Reveal key={item.id}>
            <ProjectCard item={item} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProjectsDeck() {
  const work = deckItems.filter((i) => i.group === "work");
  const security = deckItems.filter((i) => i.group === "security");
  const embedded = deckItems.filter((i) => i.group === "embedded");

  return (
    <section id="projects" aria-label="프로젝트" className="scroll-mt-20 pt-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 · Security
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Security Work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            대상 정의 → 가설 → 분석 → 재현·PoC → 검증 → 조치까지, 보안 작업을
            진단 보고서의 흐름으로 정리했습니다.
          </p>
        </Reveal>
      </Container>

      {work.map((item, i) => (
        <WorkPanel key={item.id} item={item} index={i} />
      ))}

      <Container>
        <Reveal>
          <h2 className="mt-16 text-2xl font-bold text-foreground sm:text-3xl">
            Research & Foundation
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            워게임·CTF 활동과, 취약점 분석의 기반이 된 개발 경험.
          </p>
        </Reveal>

        <CardGroup label="Wargame · CTF" items={security} />
        <CardGroup label="Engineering Foundation" items={embedded} />

        <div className="pb-8" />
      </Container>
    </section>
  );
}
