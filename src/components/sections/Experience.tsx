import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";
import { experienceMetrics } from "@/data/profile";

export default function Experience() {
  return (
    <section
      id="experience"
      className="scroll-mt-20 py-24"
      aria-label="Experience"
    >
      <Container>
        {/* metrics band */}
        <Reveal>
          <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-border bg-border lg:grid-cols-4">
            {experienceMetrics.map((m) => (
              <div key={m.label} className="bg-background p-6">
                <dt className="sr-only">{m.label}</dt>
                <dd>
                  <span className="block font-mono text-3xl font-bold text-accent">
                    {m.value}
                  </span>
                  <span className="mt-2 block text-sm text-muted">
                    {m.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </Reveal>

        {/* career timeline */}
        <Reveal delay={0.05}>
          <div className="mt-16">
            <SectionTitle number="02" title="Experience" />
          </div>
        </Reveal>

        <ol className="mt-10 space-y-10 border-l border-border pl-6 sm:pl-8">
          {experience.map((entry, i) => (
            <Reveal key={entry.id} delay={0.05 + i * 0.05}>
              <li className="relative">
                {/* node */}
                <span
                  aria-hidden
                  className="absolute -left-[calc(1.5rem+1px)] top-1.5 h-3 w-3 -translate-x-1/2 rounded-full border-2 border-accent bg-background sm:-left-[calc(2rem+1px)]"
                />
                {entry.period ? (
                  <p className="font-mono text-sm text-accent">{entry.period}</p>
                ) : null}
                <h3 className="mt-1 text-lg font-semibold text-foreground">
                  {entry.role}
                </h3>
                <ul className="mt-4 space-y-3">
                  {entry.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3 text-muted">
                      <span aria-hidden className="mt-1 shrink-0 text-accent">
                        ▹
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
