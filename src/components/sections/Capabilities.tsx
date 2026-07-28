import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { coreStrengths } from "@/data/profile";
import { skills } from "@/data/skills";

const SKILL_GROUPS: { label: string; items: string[] }[] = [
  { label: "Languages", items: skills.languages },
  { label: "Engineering", items: skills.engineering },
  { label: "Domain · Tools", items: skills.domainAndTools },
];

export default function Capabilities() {
  return (
    <section id="capabilities" className="scroll-mt-20 py-24" aria-label="Skills">
      <Container>
        <Reveal>
          <SectionTitle number="04" title="Engineering Capabilities" />
        </Reveal>

        {/* 6 numbered focus areas */}
        <ul className="mt-10 grid gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
          {coreStrengths.map((s, i) => (
            <Reveal key={s.title} delay={0.03 * i}>
              <li className="h-full bg-background p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold text-foreground">{s.title}</p>
                <p className="mt-2 text-sm text-muted">{s.description}</p>
              </li>
            </Reveal>
          ))}
        </ul>

        {/* skills / tech */}
        <Reveal delay={0.1}>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            {SKILL_GROUPS.map((group) => (
              <div key={group.label}>
                <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">
                  {group.label}
                </p>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-md border border-border px-2.5 py-1 font-mono text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
