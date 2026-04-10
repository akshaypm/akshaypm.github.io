"use client";

import { BlurFade } from "@/components/ui/BlurFade";

const P = [
  { n: "01", t: "Physical reality first — not a whiteboard. What's at the edge? How constrained? What compliance rules apply? Architecture follows constraints, not the other way around." },
  { n: "02", t: "Security is architecture, not a feature. mTLS, signed images, least-privilege IAM, KMS encryption — designed in from day one, not added at the end." },
  { n: "03", t: "Works on 1 gateway but breaks at 500? That's a demo. I design for provisioning and deployment at fleet scale from the start." },
  { n: "04", t: "I don't demo architectures — I ship them to production and operate them. POCs that never graduate are wasted engineering." },
  { n: "05", t: "If I can't see it in Grafana within 5 minutes of deployment, it's not production-ready. Observability is a first-class deliverable." },
  { n: "06", t: "I own systems end-to-end — architecture, implementation, security hardening, monitoring — not handed off between layers." },
];

export function Philosophy() {
  return (
    <section className="section-dark">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Approach & Mindset</span>
          <h2 className="section-title">How I Engineer</h2>
          <div className="title-bar" />
        </BlurFade>

        <div style={{ maxWidth: 800 }}>
          {P.map((p, i) => (
            <BlurFade key={p.n} delay={i * 0.06}>
              <div
                style={{
                  display: "flex",
                  gap: 20,
                  padding: "22px 0",
                  borderBottom: i < P.length - 1 ? "1px solid var(--border)" : "none",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontFamily: "var(--fn)", fontSize: 11, fontWeight: 700, color: "var(--accent)", letterSpacing: "0.1em", paddingTop: 3, flexShrink: 0, minWidth: 24 }}>{p.n}</span>
                <p style={{ fontFamily: "var(--fb)", fontSize: "clamp(14px, 1.4vw, 16px)", color: "var(--grey-1)", lineHeight: 1.7 }}>{p.t}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
