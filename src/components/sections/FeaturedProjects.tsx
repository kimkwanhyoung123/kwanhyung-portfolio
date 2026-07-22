import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import FlowSteps from "@/components/ui/FlowSteps";
import { featuredProjects } from "@/data/projects";
import { companyProjectDisclaimer } from "@/data/profile";
import type { FeaturedProject } from "@/types/portfolio";

function contentBlocks(project: FeaturedProject) {
  return [
    { label: "Business Context", value: project.businessContext },
    { label: "Problem", value: project.problem },
    { label: "My Role", value: project.myRole },
    { label: "Solution", value: project.solution },
    { label: "Integration", value: project.integration },
    { label: "Result", value: project.result },
  ];
}

export default function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="scroll-mt-20 py-24"
      aria-label="Featured Projects"
    >
      <Container>
        <Reveal>
          <SectionTitle number="03" title="Featured Projects" />
        </Reveal>

        <div className="mt-12 flex flex-col gap-20">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05}>
              <article
                className={`flex flex-col gap-8 md:gap-12 ${
                  index % 2 === 1 ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                <div className="md:w-1/2">
                  <div className="relative aspect-video overflow-hidden rounded-lg border border-border bg-background">
                    <Image
                      src={project.diagram.src}
                      alt={project.diagram.alt}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-contain"
                    />
                  </div>

                  <div className="mt-4 space-y-3 text-muted">
                    {project.flowBefore && project.flowAfter ? (
                      <>
                        <div>
                          <p className="mb-1 font-mono text-xs text-muted">
                            [기존 구조]
                          </p>
                          <FlowSteps steps={project.flowBefore} />
                        </div>
                        <div>
                          <p className="mb-1 font-mono text-xs text-muted">
                            [개선 구조]
                          </p>
                          <FlowSteps steps={project.flowAfter} />
                        </div>
                      </>
                    ) : project.processFlow ? (
                      <FlowSteps steps={project.processFlow} />
                    ) : null}

                    {project.metric ? (
                      <div className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-3 py-2">
                        <span className="font-mono text-xs text-muted">
                          {project.metric.label}
                        </span>
                        <span className="font-mono text-sm font-semibold text-accent">
                          {project.metric.value}
                        </span>
                      </div>
                    ) : null}

                    <p className="text-xs italic text-muted">
                      {project.disclaimerNote}
                    </p>
                  </div>
                </div>

                <div className="md:w-1/2">
                  <h3 className="text-xl font-semibold text-foreground">
                    {project.titleKo}
                  </h3>
                  <p className="mt-1 font-inter text-sm text-muted">
                    {project.titleEn}
                  </p>

                  <dl className="mt-6 space-y-4">
                    {contentBlocks(project).map((block) => (
                      <div key={block.label}>
                        <dt className="font-mono text-xs uppercase tracking-wide text-accent">
                          {block.label}
                        </dt>
                        <dd className="mt-1 text-sm text-muted">
                          {block.value}
                        </dd>
                      </div>
                    ))}
                  </dl>

                  {project.technicalStory ? (
                    <div className="mt-6 space-y-4 border-t border-border pt-5">
                      <div>
                        <p className="font-mono text-xs uppercase tracking-wide text-accent">
                          문제 → 해결
                        </p>
                        <ul className="mt-3 space-y-4">
                          {project.technicalStory.challenges.map((c) => (
                            <li key={c.problem} className="text-sm">
                              <p className="text-muted">
                                <span className="font-semibold text-foreground">
                                  문제.
                                </span>{" "}
                                {c.problem}
                              </p>
                              <p className="mt-1.5 text-muted">
                                <span className="font-semibold text-accent">
                                  해결.
                                </span>{" "}
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

                  <ul className="mt-6 flex flex-wrap gap-2">
                    {project.keyContributions.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border px-3 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className="mt-4 font-mono text-xs text-muted">
                    {project.technologies.join(" · ")}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <p className="mt-16 max-w-3xl text-xs text-muted">
            {companyProjectDisclaimer.ko}
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
