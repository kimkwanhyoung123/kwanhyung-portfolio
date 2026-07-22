import Image from "next/image";
import FlowSteps from "@/components/ui/FlowSteps";
import type { OtherProject } from "@/types/portfolio";

interface ProjectCardProps {
  project: OtherProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      {/* First image leads full-width; any further images sit in a 2-up grid. */}
      <div className="space-y-2">
        <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-background">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
        {project.images.length > 1 ? (
          <div className="grid grid-cols-2 gap-2">
            {project.images.slice(1).map((image) => (
              <figure key={image.src} className="m-0">
                <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-background">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-contain"
                  />
                </div>
                <figcaption className="mt-1 text-center font-mono text-[10px] text-muted">
                  {image.alt}
                </figcaption>
              </figure>
            ))}
          </div>
        ) : null}
      </div>

      {project.processFlow ? (
        <div className="mt-4">
          <FlowSteps steps={project.processFlow} />
        </div>
      ) : null}

      <h3 className="mt-5 text-lg font-semibold text-foreground">
        {project.titleKo}
      </h3>
      {project.titleEn ? (
        <p className="mt-1 font-inter text-sm text-muted">{project.titleEn}</p>
      ) : null}

      <p className="mt-3 text-sm text-muted">{project.description}</p>

      <ul className="mt-4 flex flex-wrap gap-2">
        {project.keyExperience.map((item) => (
          <li
            key={item}
            className="rounded-full border border-border px-3 py-1 text-xs text-muted"
          >
            {item}
          </li>
        ))}
      </ul>

      {project.technicalStory ? (
        <div className="mt-5 space-y-4 border-t border-border pt-4">
          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              기술 구현
            </p>
            <ul className="mt-2 space-y-1">
              {project.technicalStory.approach.map((item) => (
                <li key={item} className="flex gap-2 text-sm text-muted">
                  <span aria-hidden className="mt-1 text-accent">
                    ▹
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              문제 → 해결
            </p>
            <ul className="mt-2 space-y-3">
              {project.technicalStory.challenges.map((c) => (
                <li key={c.problem} className="text-sm">
                  <p className="text-muted">
                    <span className="font-semibold text-foreground">문제.</span>{" "}
                    {c.problem}
                  </p>
                  <p className="mt-1 text-muted">
                    <span className="font-semibold text-accent">해결.</span>{" "}
                    {c.solution}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-mono text-xs uppercase tracking-wide text-accent">
              성장
            </p>
            <p className="mt-2 text-sm text-muted">
              {project.technicalStory.growth}
            </p>
          </div>
        </div>
      ) : null}

      {project.deliverables ? (
        <ul className="mt-4 space-y-1 font-mono text-xs text-muted">
          {project.deliverables.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      ) : null}

      {project.metrics ? (
        <dl className="mt-4 grid grid-cols-3 gap-3 border-t border-border pt-4">
          {project.metrics.map((metric) => (
            <div key={metric.label}>
              <dt className="font-mono text-[10px] uppercase tracking-wide text-accent">
                {metric.label}
              </dt>
              <dd className="mt-1 text-sm text-foreground">{metric.value}</dd>
            </div>
          ))}
        </dl>
      ) : null}

      <p className="mt-4 font-mono text-xs text-muted">
        {project.technologies.join(" · ")}
      </p>

      {project.links ? (
        <ul className="mt-4 flex flex-wrap gap-4">
          {project.links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 font-mono text-xs text-accent underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
                <span aria-hidden>↗</span>
                <span className="sr-only"> (새 창에서 열림)</span>
              </a>
            </li>
          ))}
        </ul>
      ) : null}

      {project.disclaimerNote ? (
        <p className="mt-4 text-xs italic text-muted">
          {project.disclaimerNote}
        </p>
      ) : null}
    </article>
  );
}
