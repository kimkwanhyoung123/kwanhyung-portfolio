import Container from "@/components/ui/Container";
import SectionTitle from "@/components/ui/SectionTitle";
import Reveal from "@/components/ui/Reveal";
import ProjectCard from "@/components/ui/ProjectCard";
import { securityResearchProjects } from "@/data/projects";

export default function SecurityResearch() {
  return (
    <section
      id="research"
      className="scroll-mt-20 py-24"
      aria-label="Security Research"
    >
      <Container>
        <Reveal>
          <SectionTitle number="04" title="Security Research" />
        </Reveal>

        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {securityResearchProjects.map((project, index) => (
            <Reveal key={project.id} delay={0.05 * index}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
