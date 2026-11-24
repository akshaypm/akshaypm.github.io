import { SherpaDiagram } from "@/components/diagrams/SherpaDiagram";
import { Reveal } from "@/components/Reveal";
import { sherpa } from "@/lib/content";

export function Sherpa() {
  return (
    <section id="work" className="section sherpa" aria-labelledby="sherpa-heading">
      <div className="frame">
        <Reveal>
          <p className="label">02 — Case study</p>
          <div className="grid-12">
            <h2 id="sherpa-heading" className="span-7">
              Sherpa-v2
            </h2>
            <div className="span-5">
              <h3 className="part">Problem</h3>
              <p className="measure">{sherpa.problem}</p>
            </div>
          </div>
        </Reveal>

        <div className="sherpa-arch">
          <h3 className="part">Architecture</h3>
          <p className="measure">{sherpa.architecture}</p>
          <SherpaDiagram />
        </div>

        <Reveal className="grid-12 sherpa-split">
          <div className="span-7">
            <h3 className="part">My role</h3>
            <p className="measure">{sherpa.role}</p>
          </div>
          <div className="span-5">
            <h3 className="part">Outcome</h3>
            <p className="measure">{sherpa.outcome}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
