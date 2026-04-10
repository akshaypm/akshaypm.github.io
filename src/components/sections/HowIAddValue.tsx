"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Layers, ShieldCheck, BarChart3, Users } from "lucide-react";

const ITEMS = [
  {
    icon: Layers,
    title: "Edge-to-Cloud Ownership",
    body: "Device provisioning, MQTT telemetry, Kinesis pipelines, and cloud observability — one engineer, full stack, production-grade.",
    tags: ["AWS IoT Core", "MQTT", "Kubernetes", "Kinesis"],
  },
  {
    icon: ShieldCheck,
    title: "Security Built In, Not Bolted On",
    body: "mTLS device auth, X.509 certs, cosign image signing, Kyverno admission control, IAM least-privilege, KMS encryption — architected from day one.",
    tags: ["mTLS", "X.509", "cosign", "Kyverno"],
  },
  {
    icon: BarChart3,
    title: "Quantified, Production Impact",
    body: "7.5× provisioning speedup. 25% latency reduction. 40% faster deployments. Every claim backed by before/after numbers from live systems.",
    tags: ["7.5× speedup", "25% latency↓", "40% faster deploys"],
  },
  {
    icon: Users,
    title: "Technical Leadership",
    body: "Led 10-engineer teams twice across GE Healthcare and Deloitte. Architecture decisions, design reviews, delivery unblocking. Not just an IC — a force multiplier.",
    tags: ["Team Lead", "Architecture", "Mentorship"],
  },
];

export function HowIAddValue() {
  return (
    <section id="about" className="section-dark">
      <div className="wrap">
        <BlurFade>
          <span className="overline">What I Do</span>
          <h2 className="section-title">How I Add Value</h2>
          <div className="title-bar" />
        </BlurFade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 20 }}>
          {ITEMS.map((item, i) => {
            const Icon = item.icon;
            return (
              <BlurFade key={item.title} delay={i * 0.1}>
                <div className="icon-box" style={{ flexDirection: "column" }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 16 }}>
                    <div className="icon-box-icon">
                      <Icon size={20} />
                    </div>
                    <h3 style={{ fontFamily: "var(--fh)", fontSize: 17, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em" }}>
                      {item.title}
                    </h3>
                  </div>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--grey-2)", lineHeight: 1.7, marginBottom: 16 }}>
                    {item.body}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {item.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
