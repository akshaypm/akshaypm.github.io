"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BlurFade } from "@/components/ui/BlurFade";
import { ChevronDown } from "lucide-react";

const CASES = [
  {
    metric: "7.5×", label: "Faster Provisioning",
    title: "Edge Gateway Provisioning", co: "GE Healthcare",
    before: "~30s endpoint latency with 10–12 manual inputs per deployment. Unacceptable for scaling a medical IoT fleet.",
    after: "Under 4s. 1 manual input. Production system with mTLS + X.509 device authentication.",
    how: "Parallelized backend calls via CompletableFuture. tmpfs RAM disk staging. S3 multipart upload pipeline. Least-privilege IAM + X.509 cert-based device auth over MQTT on K3s.",
    stack: ["Java", "Spring Boot", "AWS IoT Core", "S3", "K3s", "MQTT"],
  },
  {
    metric: "0", label: "Critical CVEs",
    title: "Container Supply Chain Security", co: "GE Healthcare",
    before: "10–15 images on K3s clusters with no image verification. A compromised image could reach production medical devices.",
    after: "Zero Critical CVEs. 4-layer pipeline. No unsigned or unscanned image reaches edge deployment.",
    how: "Multi-stage Dockerfiles with distroless final stages → Twistlock CI/CD scan gates → cosign signature verification → Kyverno admission control on K3s.",
    stack: ["Docker", "Twistlock", "cosign", "Kyverno", "K3s", "Distroless"],
  },
  {
    metric: "500+", label: "Edge Gateways Managed",
    title: "Smart Building Platform at Scale", co: "JLL Technologies",
    before: "Fragmented monitoring, no centralized observability, manual provisioning with config drift across environments.",
    after: "500+ gateways, multi-region AWS IoT Core, 200+ msg/sec MQTT. 30% faster incident detection. 40% faster infra deployment.",
    how: "Multi-region IoT Core with IAM least-privilege + KMS encryption. SQS dead-letter queuing. Terraform + SaltStack across dev/staging/prod. Grafana dashboards.",
    stack: ["Python", "Django", "AWS IoT Core", "EKS", "SQS", "Terraform", "Grafana"],
  },
  {
    metric: "1,000+", label: "US Locations",
    title: "McDonald's Drive-Thru IoT", co: "Deloitte USI",
    before: "High data latency in drive-thru telemetry pipeline across US restaurant locations.",
    after: "25% data latency reduction. Real-time edge processing. Improved operational responsiveness.",
    how: "End-to-end backend ownership. AWS IoT Greengrass + Lambda for real-time edge processing. Cloud sync for aggregated reporting.",
    stack: ["AWS IoT", "Greengrass", "Lambda", "Python", "Kubernetes"],
  },
];

function CaseCard({ c, i }: { c: typeof CASES[0]; i: number }) {
  const [open, setOpen] = useState(i === 0);
  return (
    <BlurFade delay={i * 0.07}>
      <div className="card" style={{ overflow: "hidden", marginBottom: 12, borderColor: open ? "var(--border-accent)" : "var(--border)" }}>
        <button
          onClick={() => setOpen(!open)}
          style={{
            width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between",
            padding: "22px 28px", background: "transparent", border: "none", cursor: "pointer", textAlign: "left", gap: 16,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ textAlign: "center", minWidth: 70 }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: "clamp(26px, 3vw, 36px)", fontWeight: 800, color: open ? "var(--accent)" : "var(--white)", letterSpacing: "-0.03em", lineHeight: 1, transition: "color 200ms" }}>
                {c.metric}
              </div>
              <div style={{ fontFamily: "var(--fn)", fontSize: 10, color: "var(--grey-2)", letterSpacing: "0.06em", textTransform: "uppercase", marginTop: 3 }}>{c.label}</div>
            </div>
            <div style={{ borderLeft: "1px solid var(--border)", paddingLeft: 20 }}>
              <div style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em" }}>{c.title}</div>
              <div style={{ fontFamily: "var(--fn)", fontSize: 12, color: "var(--accent)", marginTop: 3 }}>{c.co}</div>
            </div>
          </div>
          <motion.div
            animate={{ rotate: open ? 180 : 0 }}
            transition={{ duration: 0.25 }}
            style={{ color: "var(--grey-2)", flexShrink: 0 }}
          >
            <ChevronDown size={18} />
          </motion.div>
        </button>

        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              style={{ overflow: "hidden" }}
            >
              <div style={{ padding: "0 28px 28px", borderTop: "1px solid var(--border)" }}>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, marginTop: 24, marginBottom: 20 }}>
                  {[
                    { h: "Before", t: c.before },
                    { h: "After", t: c.after },
                    { h: "How", t: c.how },
                  ].map(({ h, t }) => (
                    <div key={h} style={{ padding: "16px", background: "var(--bg-primary)", borderRadius: 8, border: "1px solid var(--border)" }}>
                      <p style={{ fontFamily: "var(--fn)", fontSize: 10, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.12em", color: "var(--accent)", marginBottom: 8 }}>{h}</p>
                      <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--grey-2)", lineHeight: 1.65 }}>{t}</p>
                    </div>
                  ))}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                  {c.stack.map(s => <span key={s} className="pill">{s}</span>)}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </BlurFade>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="section-dark">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Portfolio</span>
          <h2 className="section-title">Case Studies</h2>
          <div className="title-bar" />
          <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--grey-2)", maxWidth: 520, marginTop: -32, marginBottom: 48, lineHeight: 1.7 }}>
            Production challenges I&apos;ve solved — structured as Before → After → How.
          </p>
        </BlurFade>
        {CASES.map((c, i) => <CaseCard key={c.title} c={c} i={i} />)}
      </div>
    </section>
  );
}
