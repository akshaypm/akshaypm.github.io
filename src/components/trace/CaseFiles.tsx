import { caseFiles } from "@/data/trace";
import { TraceViewer } from "@/components/trace/TraceViewer";

export function CaseFiles() {
  const [norwin, ge, jll] = caseFiles;

  return (
    <section className="cases" id="work" aria-labelledby="work-heading">
      <div className="frame">
        <p className="kicker">Child spans · 3 case files</p>
        <h2 id="work-heading">What I built, in detail.</h2>

        <article className="case case-a">
          <p className="case-kicker">
            Case {norwin.index} · {norwin.org} · {norwin.range}
            {norwin.running ? (
              <span className="case-live">
                <span className="status-dot" aria-hidden="true" /> running
              </span>
            ) : null}
          </p>
          <div className="case-split">
            <div className="case-copy">
              <h3>{norwin.title}</h3>
              {norwin.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="part-label">My part</p>
              <ul className="part-list">
                {norwin.part?.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <TraceViewer />
          </div>
        </article>

        <article className="case case-b">
          <p className="case-kicker">
            Case {ge.index} · {ge.org} · {ge.range}
          </p>
          <h3>{ge.title}</h3>
          <div className="measure" aria-label="Provisioning time, before and after">
            <div className="measure-row">
              <span className="measure-label">{ge.measure?.before.label}</span>
              <span className="measure-track">
                <span
                  className="measure-bar is-solid"
                  style={{ width: `${((ge.measure?.before.solidTo ?? 0) / (ge.measure?.axis ?? 1)) * 100}%` }}
                />
                <span
                  className="measure-bar is-hatched"
                  style={{
                    left: `${((ge.measure?.before.hatchFrom ?? 0) / (ge.measure?.axis ?? 1)) * 100}%`,
                    width: `${(((ge.measure?.before.hatchTo ?? 0) - (ge.measure?.before.hatchFrom ?? 0)) / (ge.measure?.axis ?? 1)) * 100}%`,
                  }}
                />
              </span>
            </div>
            <div className="measure-row">
              <span className="measure-label">{ge.measure?.after.label}</span>
              <span className="measure-track">
                <span
                  className="measure-bar is-pass"
                  style={{ width: `${((ge.measure?.after.to ?? 0) / (ge.measure?.axis ?? 1)) * 100}%` }}
                />
                <span
                  className="measure-callout"
                  style={{ left: `calc(${((ge.measure?.after.to ?? 0) / (ge.measure?.axis ?? 1)) * 100}% + 10px)` }}
                >
                  {ge.measure?.after.callout}
                </span>
              </span>
            </div>
            <div className="measure-row measure-axis">
              <span className="measure-label" />
              <span className="measure-track">
                {ge.measure?.ticks.map((tick, index) => (
                  <span
                    key={tick}
                    className={index === 0 ? "axis-tick is-first" : index === (ge.measure?.ticks.length ?? 1) - 1 ? "axis-tick is-last" : "axis-tick"}
                    style={{ left: `${(tick / (ge.measure?.axis ?? 1)) * 100}%` }}
                  >
                    {tick}
                  </span>
                ))}
              </span>
            </div>
          </div>
          <dl className="fact-strip">
            {ge.measure?.facts.map((fact) => (
              <div key={fact.key}>
                <dt>{fact.key}</dt>
                <dd>{fact.value}</dd>
              </div>
            ))}
          </dl>
          {ge.paragraphs?.map((paragraph) => (
            <p key={paragraph} className="case-body">
              {paragraph}
            </p>
          ))}
        </article>

        <article className="case case-c">
          <p className="case-kicker">
            Case {jll.index} · {jll.org} · {jll.range}
          </p>
          <div className="case-flip">
            <div className="ticker">
              <p className="ticker-caption">illustrative feed</p>
              <div className="ticker-head">
                <span>ts</span>
                <span>gateway</span>
                <span>facility</span>
                <span>topic</span>
                <span>status</span>
              </div>
              <div className="ticker-window">
                <div className="ticker-track" style={{ ["--n" as string]: jll.feed?.length ?? 0 }}>
                  {[...(jll.feed ?? []), ...(jll.feed ?? [])].map((line, index) => (
                    <p className="ticker-line" key={`${line.ts}-${index}`}>
                      <span className="ts">{line.ts}</span>
                      <span>{line.gateway}</span>
                      <span>{line.facility}</span>
                      <span>{line.topic}</span>
                      <span className="feed-ok">{line.status}</span>
                    </p>
                  ))}
                </div>
              </div>
            </div>
            <div className="case-copy">
              <h3>{jll.title}</h3>
              {jll.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              <p className="stack-line">
                <span>stack</span> {jll.stack}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
