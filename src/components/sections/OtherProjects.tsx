import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { otherProjects } from "@/data/projects";

export default function OtherProjects() {
  return (
    <section
      id="other-projects"
      className="scroll-mt-20 py-24"
      aria-label="Other Projects"
    >
      <Container>
        <Reveal>
          <SectionTitle title="Other Noteworthy Projects" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {otherProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
