import { Header } from "@/components/Header";
import { PublicBuild } from "@/components/PublicBuild";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { SelectedWork } from "@/components/sections/SelectedWork";
import { Platform } from "@/components/sections/Platform";
import { Skills } from "@/components/sections/Skills";
import { Standards } from "@/components/sections/Standards";

export default function Home() {
  return (
    <div id="top">
      <a className="skip" href="#content">
        Skip to content
      </a>
      <Header />
      <main id="content">
        <Hero />
        <Platform />
        <SelectedWork />
        <Skills />
        <Standards />
        <Experience />
        <PublicBuild />
      </main>
      <Contact />
    </div>
  );
}
