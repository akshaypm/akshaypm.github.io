"use client";

import { motion } from "framer-motion";
import { BlurFade } from "@/components/ui/BlurFade";
import { AnimatedNumber } from "@/components/ui/AnimatedNumber";

const METRICS = [
  { val: "7.5×", isN: false, label: "Provisioning Speedup",     sub: "30s → 4s endpoint latency" },
  { num: 40, sfx: "%", isN: true, label: "Faster Deployments",  sub: "Terraform + SaltStack IaC" },
  { num: 25, sfx: "%", isN: true, label: "Latency Reduced",     sub: "Real-time drive-thru pipeline" },
  { num: 30, sfx: "%", isN: true, label: "Faster Detection",    sub: "Grafana + OpenTelemetry" },
  { val: "0", isN: false, label: "Critical CVEs",               sub: "4-layer supply chain security" },
  { num: 200, sfx: "+", isN: true, label: "Messages / sec",     sub: "MQTT at multi-region scale" },
];

export function ImpactNumbers() {
  return (
    <section id="impact" className="section-dark">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Results</span>
          <h2 className="section-title">Impact By Numbers</h2>
          <div className="title-bar" />
          <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--grey-2)", maxWidth: 520, marginTop: -32, marginBottom: 48, lineHeight: 1.7 }}>
            Real numbers from production systems — not POC metrics.
          </p>
        </BlurFade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {METRICS.map((m, i) => (
            <BlurFade key={m.label} delay={i * 0.07}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
                style={{
                  padding: "32px 28px",
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 10,
                  transition: "border-color 250ms",
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border-accent)"}
                onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = "var(--border)"}
              >
                {/* Accent corner */}
                <div
                  aria-hidden
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: 4,
                    height: "100%",
                    background: "linear-gradient(to bottom, var(--accent), transparent)",
                    borderRadius: "10px 0 0 10px",
                  }}
                />

                <div style={{ fontFamily: "var(--fh)", fontSize: "clamp(40px, 5vw, 56px)", fontWeight: 800, color: "var(--accent)", lineHeight: 1, letterSpacing: "-0.04em", marginBottom: 10 }}>
                  {m.isN
                    ? <AnimatedNumber value={(m as { num: number }).num} suffix={(m as { sfx: string }).sfx} />
                    : m.val
                  }
                </div>
                <div style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: "var(--white)", marginBottom: 6, letterSpacing: "-0.01em" }}>
                  {m.label}
                </div>
                <div style={{ fontFamily: "var(--fn)", fontSize: 12, color: "var(--grey-2)" }}>{m.sub}</div>
              </motion.div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
