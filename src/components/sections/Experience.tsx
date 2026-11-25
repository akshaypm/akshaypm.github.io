import { Reveal } from "@/components/Reveal";
import { experience } from "@/lib/content";

export function Experience() {
  return (
    <section id="experience" className="section experience" aria-labelledby="experience-heading">
      <div className="frame">
        <Reveal>
          <p className="label">06 — Experience</p>
          <h2 id="experience-heading">The record.</h2>
          <ol className="record">
            {experience.map((row) => (
              <li key={row.where}>
                <p className="when">{row.when}</p>
                <p className="where">{row.where}</p>
                <p className="what">{row.what}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
