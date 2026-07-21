import Image from "next/image";
import FlowSteps from "@/components/ui/FlowSteps";
import type { OtherProject } from "@/types/portfolio";

interface ProjectCardProps {
  project: OtherProject;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex h-full flex-col rounded-lg border border-border bg-surface p-6">
      {project.images.length === 1 ? (
        <div className="relative aspect-video overflow-hidden rounded-md border border-border bg-background">
          <Image
            src={project.images[0].src}
            alt={project.images[0].alt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-contain"
          />
        </div>
      ) : (
        <div className="grid grid-cols-3 gap-2">
          {project.images.map((image) => (
            <div
              key={image.src}
              className="relative aspect-[9/16] overflow-hidden rounded-md border border-border"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 768px) 16vw, 33vw"
                className="object-cover"
              />
            </div>
          ))}
        </div>
      )}

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

      {project.disclaimerNote ? (
        <p className="mt-4 text-xs italic text-muted">
          {project.disclaimerNote}
        </p>
      ) : null}
    </article>
  );
}
