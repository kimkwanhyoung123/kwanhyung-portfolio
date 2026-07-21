"use client";

import { useId, useRef, useState, type KeyboardEvent } from "react";
import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import { experience } from "@/data/experience";

export default function Experience() {
  const [activeIndex, setActiveIndex] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();
  const active = experience[activeIndex];

  const handleKeyDown = (
    event: KeyboardEvent<HTMLButtonElement>,
    index: number,
  ) => {
    let nextIndex = index;
    if (event.key === "ArrowRight") {
      nextIndex = (index + 1) % experience.length;
    } else if (event.key === "ArrowLeft") {
      nextIndex = (index - 1 + experience.length) % experience.length;
    } else if (event.key === "Home") {
      nextIndex = 0;
    } else if (event.key === "End") {
      nextIndex = experience.length - 1;
    } else {
      return;
    }
    event.preventDefault();
    setActiveIndex(nextIndex);
    tabRefs.current[nextIndex]?.focus();
  };

  return (
    <section
      id="experience"
      className="scroll-mt-20 py-24"
      aria-label="Experience"
    >
      <Container>
        <Reveal>
          <SectionTitle number="02" title="Experience" />
        </Reveal>

        <Reveal delay={0.05}>
          <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:gap-10">
            <div
              role="tablist"
              aria-label="경력 탭"
              aria-orientation="horizontal"
              className="flex shrink-0 gap-1 overflow-x-auto sm:w-52 sm:flex-col sm:overflow-visible"
            >
              {experience.map((entry, index) => {
                const isActive = index === activeIndex;
                return (
                  <button
                    key={entry.id}
                    ref={(el) => {
                      tabRefs.current[index] = el;
                    }}
                    role="tab"
                    id={`${baseId}-tab-${entry.id}`}
                    aria-selected={isActive}
                    aria-controls={`${baseId}-panel-${entry.id}`}
                    tabIndex={isActive ? 0 : -1}
                    onClick={() => setActiveIndex(index)}
                    onKeyDown={(event) => handleKeyDown(event, index)}
                    className={`whitespace-nowrap border-b-2 px-4 py-3 text-left font-mono text-sm transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent sm:border-b-0 sm:border-l-2 ${
                      isActive
                        ? "border-accent text-accent sm:bg-surface"
                        : "border-transparent text-muted hover:text-accent"
                    }`}
                  >
                    {entry.tabLabel}
                  </button>
                );
              })}
            </div>

            <div
              role="tabpanel"
              id={`${baseId}-panel-${active.id}`}
              aria-labelledby={`${baseId}-tab-${active.id}`}
              tabIndex={0}
              className="flex-1 pt-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              <h3 className="text-lg font-semibold text-foreground">
                {active.role}
              </h3>
              {active.period ? (
                <p className="mt-1 font-mono text-sm text-accent">
                  {active.period}
                </p>
              ) : null}
              <ul className="mt-4 space-y-3">
                {active.bullets.map((bullet) => (
                  <li key={bullet} className="flex gap-3 text-muted">
                    <span aria-hidden className="mt-1 text-accent">
                      ▹
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
