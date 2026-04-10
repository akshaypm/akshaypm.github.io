"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Search, Shield, Server, Activity } from "lucide-react";

const STEPS = [
  { icon: Search,   n: "01", title: "Understand the Device & Constraint",    body: "Physical reality first — not a whiteboard. What's at the edge? How constrained? What compliance rules apply?" },
  { icon: Shield,   n: "02", title: "Design Security & Observability In",    body: "Device auth, image signing, IAM scoping, encryption, monitoring — architecture decisions, not afterthoughts." },
  { icon: Server,   n: "03", title: "Build for the Fleet, Not One Device",   body: "Works on 1 gateway but breaks at 500? That's a demo. I design for provisioning and deployment at fleet scale." },
  { icon: Activity, n: "04", title: "Operate, Observe, Harden",              body: "Ship to production, instrument with Grafana and OpenTelemetry, harden based on real failure patterns. Repeat." },
];

export function EngineeringProcess() {
  return (
    <section className="section-light">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Methodology</span>
          <h2 className="section-title">Engineering Approach</h2>
          <div className="title-bar" />
        </BlurFade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <BlurFade key={s.n} delay={i * 0.09}>
                <div className="card" style={{ padding: "28px", height: "100%", textAlign: "center" }}>
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: "50%",
                      background: "var(--accent-dim)", border: "1px solid var(--border-accent)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      margin: "0 auto 20px", color: "var(--accent)",
                    }}
                  >
                    <Icon size={22} />
                  </div>
                  <div style={{ fontFamily: "var(--fn)", fontSize: 11, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 10 }}>{s.n}</div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: 12, lineHeight: 1.3 }}>{s.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--grey-2)", lineHeight: 1.7 }}>{s.body}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
