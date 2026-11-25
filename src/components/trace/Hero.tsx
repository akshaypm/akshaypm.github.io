const resumeMailto = "mailto:akshaypm90@gmail.com?subject=Resume%20request";

const current = [
  { key: "service", value: "ai-agent platform @ Norwin" },
  { key: "since", value: "2026-06" },
  { key: "runtime", value: "GCP Cloud Run · Kubernetes" },
  { key: "agents", value: "LangGraph · MCP client" },
  { key: "evals", value: "G-Eval · Langfuse" },
];

export function Hero() {
  return (
    <section className="hero" aria-labelledby="hero-heading">
      <div className="frame hero-grid">
        <p className="eyebrow">AKSHAY P M / SENIOR AI ENGINEER</p>
        <h1 id="hero-heading">I build the platform that deploys and evaluates AI agents.</h1>
        <p className="sub">
          Ten years of production cloud and edge-to-cloud IoT underneath it, from 6LoWPAN meshes to
          regulated medical gateways to agent evaluation on GCP.
        </p>
        <p className="hero-links">
          <a href="mailto:akshaypm90@gmail.com">email → akshaypm90@gmail.com</a>
          <a href="https://www.linkedin.com/in/akshaypm90" target="_blank" rel="noopener noreferrer">
            linkedin → /in/akshaypm90
          </a>
          <a href={resumeMailto}>resume → on request</a>
        </p>
        <aside className="current" aria-label="Current span">
          <p className="current-label">Current span</p>
          <dl>
            {current.map((row) => (
              <div key={row.key}>
                <dt>{row.key}</dt>
                <dd>{row.value}</dd>
              </div>
            ))}
            <div>
              <dt>status</dt>
              <dd className="current-status">
                <span className="status-dot" aria-hidden="true" />
                running
              </dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
