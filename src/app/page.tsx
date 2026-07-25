import CursorGlow from "@/components/ui/CursorGlow";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";
import ProjectPanel from "@/components/ui/ProjectPanel";
import { projectPanels, researchPanels } from "@/data/panels";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Experience />

        {projectPanels.map((panel, index) => (
          <ProjectPanel
            key={panel.id}
            data={panel}
            number="03"
            anchorId={index === 0 ? "projects" : undefined}
          />
        ))}

        {researchPanels.map((panel, index) => (
          <ProjectPanel
            key={panel.id}
            data={panel}
            number="04"
            anchorId={index === 0 ? "research" : undefined}
          />
        ))}

        <Contact />
      </main>
    </>
  );
}
