import { email, linkedIn, nowStack, resumeMailto } from "@/lib/content";

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="frame hero-grid">
        <div>
          <h1 id="hero-heading">
            I build agentic AI on ten years of production cloud and IoT.
          </h1>
          <p className="lede">Senior AI Engineer at Norwin. Bengaluru.</p>
          <div className="actions">
            <a className="btn" href={resumeMailto}>
              Resume on request
            </a>
            <a className="text-link" href={`mailto:${email}`}>
              Email
            </a>
            <a className="text-link" href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
        <aside className="now" aria-label="Current stack">
          <p className="label">01 — Now</p>
          <p className="now-sentence">
            Building an AI-agent deployment and evaluation platform at Norwin, on GCP Cloud Run.
          </p>
          <ul className="now-list">
            {nowStack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <p className="now-inline">{nowStack.join(" · ")}</p>
        </aside>
      </div>
    </section>
  );
}
