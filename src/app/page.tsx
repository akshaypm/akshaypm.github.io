import { Hero } from "@/components/trace/Hero";
import { StatusBar } from "@/components/trace/StatusBar";
import { Timeline } from "@/components/trace/Timeline";
import { laidSpans, maxMonths, yearMarks } from "@/data/trace";

export default function Home() {
  return (
    <>
      <a className="skip" href="#content">
        Skip to content
      </a>
      <StatusBar />
      <main id="content">
        <Hero />
        <Timeline spans={laidSpans} years={yearMarks} maxMonths={maxMonths} />
        <section id="work" hidden />
        <section id="stack" hidden />
        <section id="contact" hidden />
      </main>
    </>
  );
}
