import ProjectArt from "@/components/ui/ProjectArt";
import Reveal from "@/components/ui/Reveal";
import Container from "@/components/ui/Container";
import { deckItems } from "@/data/deck";

/* Vertical project deck: scroll down, one project per screen. Image-first,
 * alternating sides for rhythm, minimal supporting copy. */
export default function ProjectsDeck() {
  return (
    <section id="projects" aria-label="프로젝트" className="scroll-mt-20 pt-24">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 · Projects
          </p>
          <h2 className="mt-2 text-2xl font-bold text-foreground sm:text-3xl">
            프로젝트 · 아래로 스크롤
          </h2>
        </Reveal>
      </Container>

      <div>
        {deckItems.map((item, i) => {
          const imageFirst = i % 2 === 0;
          return (
            <article
              key={item.id}
              className="snap-panel flex min-h-svh scroll-mt-20 items-center py-16"
            >
              <Container>
                <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-14">
                  {/* illustration */}
                  <Reveal
                    className={imageFirst ? "lg:order-1" : "lg:order-2"}
                  >
                    <ProjectArt
                      art={item.art}
                      className="aspect-[4/3] w-full rounded-2xl border border-border bg-background/60 shadow-[0_18px_50px_-20px_rgba(0,0,0,0.7)]"
                    />
                  </Reveal>

                  {/* text */}
                  <Reveal
                    delay={0.05}
                    className={imageFirst ? "lg:order-2" : "lg:order-1"}
                  >
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <span className="font-mono text-sm text-accent/70">
                          {String(i + 1).padStart(2, "0")}
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

                      <p className="text-lg font-medium leading-snug text-foreground">
                        {item.oneLiner}
                      </p>

                      <ul className="space-y-2">
                        {item.bullets.map((b) => (
                          <li
                            key={b}
                            className="flex gap-2 text-sm text-muted"
                          >
                            <span aria-hidden className="mt-0.5 text-accent">
                              ▹
                            </span>
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>

                      {item.metric ? (
                        <span className="inline-flex items-baseline gap-2 rounded-lg border border-accent/30 bg-accent/5 px-3 py-1.5">
                          <span className="font-mono text-base font-bold text-accent">
                            {item.metric.value}
                          </span>
                          <span className="text-xs text-muted">
                            {item.metric.label}
                          </span>
                        </span>
                      ) : null}

                      <p className="font-mono text-xs text-muted">
                        {item.technologies.join(" · ")}
                      </p>

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
                        <p className="text-xs italic text-muted/80">
                          {item.note}
                        </p>
                      ) : null}
                    </div>
                  </Reveal>
                </div>
              </Container>
            </article>
          );
        })}
      </div>
    </section>
  );
}
