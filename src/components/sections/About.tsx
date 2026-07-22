import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { profile, coreStrengths } from "@/data/profile";
import { skills } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24" aria-label="About">
      <Container>
        <Reveal>
          <SectionTitle number="01" title="About" />
        </Reveal>

        {/* Prose runs across the full width in two columns, with the strength
            cards on a full-width row beneath it — a narrow text column beside a
            tall stack of cards left the page half empty. */}
        <div className="mt-10 space-y-10">
          <Reveal delay={0.05}>
            <div className="grid gap-x-12 gap-y-4 text-muted md:grid-cols-2">
              {profile.aboutParagraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
              {skills.aboutHighlight.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <span aria-hidden className="text-accent">
                    ▹
                  </span>
                  {skill}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {coreStrengths.map((strength) => (
                <li
                  key={strength.title}
                  className="rounded-lg border border-border bg-surface p-5"
                >
                  <p className="font-semibold text-foreground">
                    {strength.title}
                  </p>
                  <p className="mt-2 text-sm text-muted">
                    {strength.description}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
