import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import Button from "@/components/ui/Button";
import { contact } from "@/data/profile";

export default function Contact() {
  const [primaryLink, ...secondaryLinks] = contact.links;

  return (
    <section
      id="contact"
      className="scroll-mt-20 py-24"
      aria-label="Contact"
    >
      <Container>
        <Reveal>
          <SectionTitle number="05" title="Contact" />
        </Reveal>

        <Reveal delay={0.05}>
          <h3 className="mt-8 max-w-2xl text-2xl font-semibold leading-snug text-foreground sm:text-3xl">
            {contact.title}
          </h3>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-6 max-w-xl space-y-4 text-muted">
            {contact.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <Button
              href={primaryLink.href}
              variant="primary"
              {...(primaryLink.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {primaryLink.label}
            </Button>

            <ul className="flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
              {secondaryLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="transition-colors hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                    {...(link.external
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    {link.label}
                    {link.external ? (
                      <span className="sr-only"> (새 창에서 열림)</span>
                    ) : null}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
