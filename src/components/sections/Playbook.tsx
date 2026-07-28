import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { playbook } from "@/data/profile";

export default function Playbook() {
  return (
    <section className="scroll-mt-20 py-16" aria-label="Engineering Playbook">
      <Container>
        <Reveal>
          <SectionTitle title="Engineering Playbook" />
        </Reveal>

        <ol className="mt-10 grid gap-6 md:grid-cols-3">
          {playbook.map((step, i) => (
            <Reveal key={step.step} delay={0.05 * i}>
              <li className="relative h-full rounded-xl border border-border bg-surface/40 p-6">
                <span className="font-mono text-2xl font-bold text-accent">
                  {step.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {step.description}
                </p>
                {i < playbook.length - 1 ? (
                  <span
                    aria-hidden
                    className="pointer-events-none absolute -right-4 top-1/2 hidden -translate-y-1/2 font-mono text-lg text-border md:block"
                  >
                    →
                  </span>
                ) : null}
              </li>
            </Reveal>
          ))}
        </ol>
      </Container>
    </section>
  );
}
