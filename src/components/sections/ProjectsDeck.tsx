"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";
import ProjectArt from "@/components/ui/ProjectArt";
import { deckItems } from "@/data/deck";

export default function ProjectsDeck() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion();
  const total = deckItems.length;

  const goTo = useCallback(
    (i: number) => {
      const el = trackRef.current;
      if (!el) return;
      const clamped = Math.max(0, Math.min(total - 1, i));
      el.scrollTo({
        left: clamped * el.clientWidth,
        behavior: reduce ? "auto" : "smooth",
      });
    },
    [reduce, total],
  );

  // Keep the active index in sync with horizontal scroll position.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onScroll = () => {
      const i = Math.round(el.scrollLeft / el.clientWidth);
      setActive((prev) => (prev === i ? prev : i));
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  // Translate vertical wheel into horizontal movement; release to the page
  // once the deck reaches either end so scrolling never gets trapped.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e: WheelEvent) => {
      const delta =
        Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
      if (delta === 0) return;
      const atStart = el.scrollLeft <= 1;
      const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 1;
      if ((delta > 0 && !atEnd) || (delta < 0 && !atStart)) {
        e.preventDefault();
        el.scrollLeft += delta;
      }
    };
    el.addEventListener("wheel", onWheel, { passive: false });
    return () => el.removeEventListener("wheel", onWheel);
  }, []);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowRight") {
      e.preventDefault();
      goTo(active + 1);
    } else if (e.key === "ArrowLeft") {
      e.preventDefault();
      goTo(active - 1);
    }
  };

  return (
    <section
      id="projects"
      aria-label="프로젝트"
      className="flex min-h-svh scroll-mt-20 flex-col justify-center pt-24 pb-10"
    >
      {/* header */}
      <div className="mx-auto mb-5 flex w-full max-w-6xl items-end justify-between px-6 sm:px-8">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            03 · Projects
          </p>
          <h2 className="mt-2 text-xl font-bold text-foreground sm:text-2xl">
            전체 프로젝트 · 좌우로 넘겨보기
          </h2>
        </div>
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs text-muted">
            {String(active + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </span>
          <button
            type="button"
            aria-label="이전 프로젝트"
            onClick={() => goTo(active - 1)}
            disabled={active === 0}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label="다음 프로젝트"
            onClick={() => goTo(active + 1)}
            disabled={active === total - 1}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-accent hover:text-accent disabled:opacity-30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            ›
          </button>
        </div>
      </div>

      {/* horizontal track */}
      <div
        ref={trackRef}
        tabIndex={0}
        onKeyDown={onKeyDown}
        aria-roledescription="carousel"
        className="no-scrollbar flex flex-1 snap-x snap-mandatory overflow-x-auto overflow-y-hidden outline-none"
      >
        {deckItems.map((item, i) => (
          <article
            key={item.id}
            id={i === 0 ? "projects-start" : undefined}
            aria-label={item.titleKo}
            className="flex min-w-full snap-center items-center px-6 sm:px-8"
          >
            <div className="mx-auto grid w-full max-w-6xl items-center gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-14">
              {/* illustration */}
              <ProjectArt
                art={item.art}
                className="aspect-[4/3] w-full rounded-2xl border border-border bg-background/60 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.6)]"
              />

              {/* compact text */}
              <div className="space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.kicker}
                </p>
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
                    <li key={b} className="flex gap-2 text-sm text-muted">
                      <span aria-hidden className="mt-0.5 text-accent">
                        ▹
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3">
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
                </div>

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
                  <p className="text-xs italic text-muted/80">{item.note}</p>
                ) : null}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* progress dots */}
      <div className="mx-auto mt-6 flex max-w-6xl items-center justify-center gap-2 px-6">
        {deckItems.map((item, i) => (
          <button
            key={item.id}
            type="button"
            aria-label={`${i + 1}번째 프로젝트로 이동`}
            aria-current={i === active}
            onClick={() => goTo(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-border hover:bg-muted"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
