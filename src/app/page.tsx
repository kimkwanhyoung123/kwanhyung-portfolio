import CursorGlow from "@/components/ui/CursorGlow";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import OtherProjects from "@/components/sections/OtherProjects";
import SecurityResearch from "@/components/sections/SecurityResearch";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <CursorGlow />
      <Header />
      <main className="relative z-10 flex-1">
        <Hero />
        <About />
        <Experience />
        <FeaturedProjects />
        <OtherProjects />
        <SecurityResearch />
        <Contact />
      </main>
    </>
  );
}
