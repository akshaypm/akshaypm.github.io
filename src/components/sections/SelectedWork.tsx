import { ProvisioningFigure } from "@/components/diagrams/ProvisioningFigure";
import { Reveal } from "@/components/Reveal";
import { selectedWork } from "@/lib/content";

export function SelectedWork() {
  return (
    <section className="section work" aria-labelledby="work-heading">
      <div className="frame">
        <Reveal>
          <p className="label">03 — Selected work</p>
          <h2 id="work-heading">Three systems, in production.</h2>
        </Reveal>
        <div className="work-list">
          {selectedWork.map((row) => (
            <article
              key={row.company}
              className={row.figure ? "work-row has-figure" : "work-row"}
            >
              <div className="work-meta">
                <p className="work-company">{row.company}</p>
                <p className="work-years">{row.years}</p>
              </div>
              <div>
                <h3 className="role">{row.title}</h3>
                <p className="story">{row.story}</p>
                <p className="tech">{row.tech}</p>
              </div>
              {row.figure === "provisioning" ? <ProvisioningFigure /> : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
