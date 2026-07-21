import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { profile } from "@/data/profile";

export default function Hero() {
  return (
    <section
      id="hero"
      className="flex min-h-screen items-center pt-16"
      aria-label="Hero"
    >
      <Container>
        <Reveal>
          <h1 className="text-4xl font-bold text-foreground sm:text-6xl">
            {profile.nameKo}
          </h1>
          <p className="mt-2 font-inter text-lg text-muted sm:text-xl">
            {profile.nameEn}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-8 max-w-2xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            {profile.headline}
          </p>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-6 max-w-xl space-y-4 text-muted">
            {profile.heroParagraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-wrap gap-4">
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
      </Container>
    </section>
  );
}
