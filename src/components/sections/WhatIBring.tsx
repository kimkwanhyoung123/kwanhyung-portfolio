import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { whatIBring } from "@/data/profile";

export default function WhatIBring() {
  return (
    <section className="scroll-mt-20 py-16" aria-label="What I Bring">
      <Container>
        <Reveal>
          <SectionTitle title="What I Bring" />
        </Reveal>

        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {whatIBring.map((item, i) => (
            <Reveal key={item.title} delay={0.05 * i}>
              <div className="border-t border-border pt-5">
                <p className="font-mono text-sm text-accent">
                  {String(i + 1).padStart(2, "0")}
                  <span className="ml-2 text-muted">/ {item.title}</span>
                </p>
                <p className="mt-3 text-lg font-medium leading-snug text-foreground">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
