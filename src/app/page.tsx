import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/sections/Hero";
import { HowIAddValue } from "@/components/sections/HowIAddValue";
import { CareerTimeline } from "@/components/sections/CareerTimeline";
import { ImpactNumbers } from "@/components/sections/ImpactNumbers";
import { CaseStudies } from "@/components/sections/CaseStudies";
import { SkillsGrid } from "@/components/sections/SkillsGrid";
import { Philosophy } from "@/components/sections/Philosophy";
import { Publications } from "@/components/sections/Publications";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <HowIAddValue />
      <CareerTimeline />
      <ImpactNumbers />
      <CaseStudies />
      <SkillsGrid />
      <Philosophy />
      <Publications />
      <Footer />
    </main>
  );
}
