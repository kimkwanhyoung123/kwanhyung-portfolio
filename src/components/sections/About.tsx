import Image from "next/image";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { profile } from "@/data/profile";
import { techStack, techStackMore } from "@/data/skills";

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 py-24" aria-label="About">
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
        </Reveal>

        {/* tech stack as logo tiles */}
        <Reveal delay={0.1}>
          <div className="mt-10">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
              Core Stack
            </p>
            <ul className="mt-4 flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <li
                  key={tech.name}
                  className="flex w-24 flex-col items-center gap-2 rounded-xl border border-border bg-surface/40 px-3 py-4"
                >
                  <Image
                    src={tech.src}
                    alt={`${tech.name} 로고`}
                    width={32}
                    height={32}
                    className="h-8 w-8 object-contain"
                    unoptimized
                  />
                  <span className="text-center font-mono text-[11px] text-muted">
                    {tech.name}
                  </span>
                </li>
              ))}
            </ul>
            <p className="mt-4 font-mono text-xs text-muted">
              <span className="text-accent">+</span>{" "}
              {techStackMore.join(" · ")}
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
