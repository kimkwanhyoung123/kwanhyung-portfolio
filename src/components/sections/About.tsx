import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { skills } from "@/data/skills";

export default function About() {
  return (
    <section
      id="about"
      className="scroll-mt-20 py-24"
      aria-label="About"
    >
      <Container>
        <Reveal>
          <SectionTitle number="01" title="About" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 grid gap-x-12 gap-y-4 text-muted md:grid-cols-2">
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
      </Container>
    </section>
  );
}
