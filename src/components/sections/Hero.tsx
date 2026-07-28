import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { profile, systemProfile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-svh flex-col justify-center pt-24 pb-12"
      aria-label="Hero"
    >
      <Container>
        {/* centered hero */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <p className="font-mono text-sm text-accent">
              {profile.nameKo} · {profile.nameEn}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="mt-5 text-3xl font-bold leading-tight text-foreground sm:text-5xl">
              {profile.headline}
            </h1>
          </Reveal>

          <Reveal delay={0.15}>
            <p className="mx-auto mt-6 max-w-2xl text-muted">
              {profile.heroParagraphs[0]}
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              {profile.heroCtas.map((cta) => (
                <Button
                  key={cta.label}
                  href={cta.href}
                  variant={cta.variant}
                  {...(cta.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                >
                  {cta.label}
                  {cta.external ? (
                    <span className="sr-only"> (새 창에서 열림)</span>
                  ) : null}
                </Button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* system profile — 3 numbered blocks */}
        <Reveal delay={0.25}>
          <ul className="mx-auto mt-16 grid max-w-4xl gap-px overflow-hidden rounded-xl border border-border bg-border sm:grid-cols-3">
            {systemProfile.map((item, i) => (
              <li key={item.title} className="bg-background p-6">
                <span className="font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <p className="mt-2 font-semibold text-foreground">
                  {item.title}
                </p>
                <p className="mt-1 font-mono text-xs text-muted">
                  {item.description}
                </p>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
