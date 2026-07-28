import ProjectArt from "@/components/ui/ProjectArt";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { deckItems } from "@/data/deck";
import type { DeckItem, FdeDetail } from "@/types/portfolio";

/* Labels for the FDE 7-part breakdown shown on featured projects. */
const FDE_ROWS: { key: keyof FdeDetail; label: string; en: string }[] = [
  { key: "customerContext", label: "고객 맥락", en: "CONTEXT" },
  { key: "ambiguity", label: "불명확성", en: "AMBIGUITY" },
  { key: "engineering", label: "설계", en: "ENGINEERING" },
  { key: "delivery", label: "통합·배포", en: "DELIVERY" },
  { key: "validation", label: "검증", en: "VALIDATION" },
  { key: "impact", label: "임팩트", en: "IMPACT" },
  { key: "reusableLearning", label: "재사용 학습", en: "REUSABLE" },
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

function FeaturedPanel({ item, index }: { item: DeckItem; index: number }) {
  const imageFirst = index % 2 === 0;
  return (
    <article className="scroll-mt-20 py-14 lg:py-16">
      <Container>
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
          {/* diagram */}
          <Reveal className={imageFirst ? "lg:order-1" : "lg:order-2"}>
            <figure>
              <ProjectArt
                art={item.art}
                className="aspect-[4/3] w-full rounded-2xl border border-border bg-background/60"
              />
              <figcaption className="mt-3 text-center font-mono text-xs text-muted">
                {item.oneLiner}
              </figcaption>
            </figure>
          </Reveal>

          {/* text */}
          <Reveal delay={0.05} className={imageFirst ? "lg:order-2" : "lg:order-1"}>
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <span className="font-mono text-sm text-accent/70">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.kicker}
                </span>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                  {item.titleKo}
                </h3>
                {item.titleEn ? (
                  <p className="mt-1 font-inter text-sm text-muted">
                    {item.titleEn}
                  </p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <MetricChip item={item} />
                <span className="font-mono text-xs text-muted">
                  {item.technologies.join(" · ")}
                </span>
              </div>

              {/* FDE structured breakdown */}
              {item.detail ? (
                <dl className="space-y-2.5 border-l border-border pl-4">
                  {FDE_ROWS.map(({ key, label, en }) => (
                    <div
                      key={key}
                      className="grid gap-x-4 gap-y-0.5 sm:grid-cols-[6.5rem_1fr]"
                    >
                      <dt className="flex flex-col leading-tight">
                        <span className="whitespace-nowrap text-sm font-semibold text-foreground">
                          {label}
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-accent/60">
                          {en}
                        </span>
                      </dt>
                      <dd className="text-sm leading-relaxed text-muted">
                        {item.detail![key]}
                      </dd>
                    </div>
                  ))}
                </dl>
              ) : null}

              {item.link ? (
                <a
                  href={item.link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {item.link.label}
                  <span className="sr-only"> (새 창에서 열림)</span>
                </a>
              ) : null}

              {item.note ? (
                <p className="text-xs italic text-muted/80">{item.note}</p>
              ) : null}
            </div>
          </Reveal>
        </div>
      </Container>
    </article>
  );
}

function AdditionalCard({ item }: { item: DeckItem }) {
  return (
    <article className="flex h-full flex-col rounded-2xl border border-border bg-surface/40 p-5">
      <ProjectArt
        art={item.art}
        className="mb-4 aspect-[16/9] w-full rounded-lg border border-border bg-background/60"
      />
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

export default function ProjectsDeck() {
  const featured = deckItems.filter((i) => i.featured);
  const additional = deckItems.filter((i) => !i.featured);

  return (
    <section id="projects" aria-label="프로젝트" className="scroll-mt-20 pt-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 · Work
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            Selected Work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            문제 정의 → 설계 → 통합·배포 → 검증 → 임팩트까지, 대표 프로젝트 네
            건을 흐름 중심으로 정리했습니다.
          </p>
        </Reveal>
      </Container>

      {featured.map((item, i) => (
        <FeaturedPanel key={item.id} item={item} index={i} />
      ))}

      {/* Additional work */}
      <Container>
        <Reveal>
          <h2 className="mt-16 text-2xl font-bold text-foreground sm:text-3xl">
            Additional Work
          </h2>
          <p className="mt-2 max-w-xl text-sm text-muted">
            그 외 실무·연구·개인 프로젝트.
          </p>
        </Reveal>

        <div className="mt-8 grid gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-3">
          {additional.map((item) => (
            <Reveal key={item.id}>
              <AdditionalCard item={item} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
