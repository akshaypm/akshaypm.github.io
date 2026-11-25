import { Hero } from "@/components/trace/Hero";
import { StatusBar } from "@/components/trace/StatusBar";
import { Timeline } from "@/components/trace/Timeline";
import { YearRuler } from "@/components/trace/YearRuler";

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <StatusBar />
      <YearRuler />
      <main id="content">
        <Hero />
        <Timeline />
        <section id="work" hidden />
        <section id="stack" hidden />
        <section id="contact" hidden />
      </main>
    </>
  );
}
