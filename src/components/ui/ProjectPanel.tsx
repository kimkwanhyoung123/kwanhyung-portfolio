import Image from "next/image";
import Reveal from "@/components/ui/Reveal";
import FlowSteps from "@/components/ui/FlowSteps";
import type { ProjectPanelData } from "@/types/portfolio";

interface ProjectPanelProps {
  data: ProjectPanelData;
  /** Section number shown in the eyebrow (matches the nav numbering). */
  number: string;
  /** DOM id used as a nav anchor; falls back to the project id. */
  anchorId?: string;
}

export default function ProjectPanel({
  data,
  number,
  anchorId,
}: ProjectPanelProps) {
  const images = data.images.slice(0, 2);

  return (
    <section
      id={anchorId ?? data.id}
      aria-label={data.titleKo}
      className="snap-panel flex min-h-svh scroll-mt-20 items-center py-24"
    >
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8">
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            {number} · {data.sectionLabel}
          </p>
          <h2 className="mt-3 text-2xl font-bold text-foreground sm:text-3xl">
            {data.titleKo}
          </h2>
          {data.titleEn ? (
            <p className="mt-1 font-inter text-sm text-muted">{data.titleEn}</p>
          ) : null}
        </Reveal>

        <div className="mt-8 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Media — shown first on mobile, on the right on desktop. */}
          <Reveal delay={0.05} className="order-1 space-y-4 lg:order-2">
            {images.map((img) => (
              <div
                key={img.src}
                className="relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-border bg-background"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-contain"
                />
              </div>
            ))}

            {data.flowBefore && data.flowAfter ? (
              <div className="space-y-3">
                <div>
                  <p className="mb-1 font-mono text-xs text-muted">[기존 구조]</p>
                  <FlowSteps steps={data.flowBefore} />
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs text-muted">[개선 구조]</p>
                  <FlowSteps steps={data.flowAfter} />
                </div>
              </div>
            ) : data.processFlow ? (
              <FlowSteps steps={data.processFlow} />
            ) : null}
          </Reveal>

          {/* Narrative — shown second on mobile, on the left on desktop. */}
          <Reveal delay={0.1} className="order-2 space-y-6 lg:order-1">
            <p className="text-base leading-relaxed text-muted">{data.summary}</p>

            {data.metrics && data.metrics.length > 0 ? (
              <ul className="grid gap-3 sm:grid-cols-2">
                {data.metrics.map((metric) => (
                  <li
                    key={metric.label}
                    className="rounded-xl border border-border bg-surface px-4 py-3"
                  >
                    <p className="font-mono text-sm font-semibold text-accent">
                      {metric.value}
                    </p>
                    <p className="mt-1 text-xs text-muted">{metric.label}</p>
                  </li>
                ))}
              </ul>
            ) : null}

            {data.highlights.length > 0 ? (
              <ul className="flex flex-wrap gap-2">
                {data.highlights.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            ) : null}

            {data.deliverables && data.deliverables.length > 0 ? (
              <ul className="flex flex-wrap gap-x-5 gap-y-1 font-mono text-xs text-muted">
                {data.deliverables.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}

            <p className="font-mono text-xs text-muted">
              {data.technologies.join(" · ")}
            </p>

            {data.links && data.links.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {data.links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2 text-xs font-medium text-foreground transition-colors hover:border-accent hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {link.label}
                    <span className="sr-only"> (새 창에서 열림)</span>
                  </a>
                ))}
              </div>
            ) : null}

            {data.disclaimerNote ? (
              <p className="text-xs italic text-muted">{data.disclaimerNote}</p>
            ) : null}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
