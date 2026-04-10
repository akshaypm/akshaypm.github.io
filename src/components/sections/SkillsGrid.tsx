"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BlurFade } from "@/components/ui/BlurFade";

const SKILL_BARS = [
  { name: "AWS IoT Core / Greengrass",  pct: 95 },
  { name: "Kubernetes / K3s / Docker",  pct: 90 },
  { name: "Java / Spring Boot",          pct: 88 },
  { name: "Python / Django / Flask",     pct: 85 },
  { name: "Terraform / SaltStack",       pct: 85 },
  { name: "mTLS / X.509 / cosign",       pct: 90 },
  { name: "MQTT / CoAP / 6LoWPAN",      pct: 92 },
  { name: "Grafana / OpenTelemetry",     pct: 82 },
];

const TECH_GROUPS = [
  {
    label: "IoT & Edge",
    items: ["AWS IoT Core", "Greengrass", "MQTT", "CoAP", "6LoWPAN", "OTA Updates", "Fleet Mgmt", "Zero-Touch"],
  },
  {
    label: "Cloud (AWS)",
    items: ["Lambda", "Kinesis", "SQS", "DynamoDB", "S3", "EKS", "IAM", "KMS", "CloudWatch", "API GW"],
  },
  {
    label: "Security",
    items: ["mTLS", "X.509", "cosign", "Kyverno", "Twistlock", "PKCS#11", "Distroless", "IAM Least-Priv"],
  },
  {
    label: "Observability",
    items: ["Grafana", "OpenTelemetry", "Datadog", "CloudWatch"],
  },
];

function SkillBar({ name, pct }: { name: string; pct: number }) {
  const ref = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const inView = useInView(ref, { once: true, margin: "-60px" as any });

  return (
    <div ref={ref} style={{ marginBottom: 20 }}>
      <div style={{ display: "flex", justifyContent: "space-between", marginBottom: 7 }}>
        <span style={{ fontFamily: "var(--fn)", fontSize: 13, fontWeight: 500, color: "var(--grey-1)" }}>{name}</span>
        <span style={{ fontFamily: "var(--fn)", fontSize: 12, color: "var(--accent)", fontWeight: 600 }}>{pct}%</span>
      </div>
      <div className="progress-bar-bg">
        <motion.div
          className="progress-bar-fill"
          initial={{ width: 0 }}
          animate={inView ? { width: `${pct}%` } : {}}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        />
      </div>
    </div>
  );
}

export function SkillsGrid() {
  return (
    <section id="skills" className="section-light">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Expertise</span>
          <h2 className="section-title">Technical Skills</h2>
          <div className="title-bar" />
        </BlurFade>

        <div className="skills-grid">
          {/* Left — progress bars */}
          <BlurFade>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--white)", marginBottom: 28, letterSpacing: "-0.02em" }}>
              Core Proficiencies
            </h3>
            {SKILL_BARS.map(s => <SkillBar key={s.name} {...s} />)}
          </BlurFade>

          {/* Right — grouped tags */}
          <BlurFade delay={0.15}>
            <h3 style={{ fontFamily: "var(--fh)", fontSize: 18, fontWeight: 700, color: "var(--white)", marginBottom: 28, letterSpacing: "-0.02em" }}>
              Full Arsenal
            </h3>
            <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
              {TECH_GROUPS.map(g => (
                <div key={g.label}>
                  <p style={{ fontFamily: "var(--fn)", fontSize: 11, fontWeight: 600, color: "var(--accent)", textTransform: "uppercase", letterSpacing: "0.12em", marginBottom: 10 }}>
                    {g.label}
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {g.items.map(item => (
                      <span key={item} className="pill">{item}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </BlurFade>
        </div>
      </div>

      <style>{`
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .skills-grid {
            grid-template-columns: 1fr 1fr;
            gap: 48px;
          }
        }
      `}</style>
    </section>
  );
}
