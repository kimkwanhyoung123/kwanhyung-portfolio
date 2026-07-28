import CursorGlow from "@/components/ui/CursorGlow";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import ProjectsDeck from "@/components/sections/ProjectsDeck";
import Capabilities from "@/components/sections/Capabilities";
import Playbook from "@/components/sections/Playbook";
import WhatIBring from "@/components/sections/WhatIBring";
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
        <ProjectsDeck />
        <Capabilities />
        <Playbook />
        <WhatIBring />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
