import { PlatformDiagram } from "@/components/diagrams/PlatformDiagram";
import { Reveal } from "@/components/Reveal";
import { platform } from "@/lib/content";

export function Platform() {
  return (
    <section id="work" className="section platform" aria-labelledby="platform-heading">
      <div className="frame">
        <Reveal>
          <p className="label">02 — Case study</p>
          <div className="platform-head">
            <h2 id="platform-heading" className="platform-title">
              The platform
            </h2>
            <div className="platform-problem">
              <h3 className="part">Problem</h3>
              <p>{platform.problem}</p>
            </div>
            <div className="platform-arch-copy">
              <h3 className="part">Architecture</h3>
              <p>{platform.architecture}</p>
            </div>
          </div>
        </Reveal>

        <div className="platform-arch">
          <PlatformDiagram />
        </div>

        <Reveal className="grid-12 platform-split">
          <div className="span-7">
            <h3 className="part">My role</h3>
            <p className="measure">{platform.role}</p>
          </div>
          <div className="span-5">
            <h3 className="part">Outcome</h3>
            <p className="measure">{platform.outcome}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
