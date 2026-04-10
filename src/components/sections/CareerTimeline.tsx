"use client";

import { BlurFade } from "@/components/ui/BlurFade";

const ENTRIES = [
  {
    period: "2025 – Present",
    role: "Staff Software Engineer — IoT Platform",
    org: "GE Healthcare",
    summary: "Provisioning latency 30s → 4s (7.5×). Hardened 10–15 container images to zero Critical CVEs via 4-layer supply chain security. Leading 10 engineers on medical IoT platform.",
    tags: ["mTLS", "X.509", "cosign", "Kyverno", "K3s", "Spring Boot"],
    active: true,
  },
  {
    period: "2023 – 2025",
    role: "Senior Software Engineer — IoT & Edge",
    org: "JLL Technologies · Remote",
    summary: "Operated Smart Building platform — 500+ edge gateways, 200+ msg/sec MQTT across multi-region AWS IoT Core. 30% faster incident detection. 40% faster deployments via Terraform + SaltStack. Built RAG workflows for JLL GPT.",
    tags: ["AWS IoT Core", "EKS", "Terraform", "Grafana", "Python"],
    active: false,
  },
  {
    period: "2023",
    role: "Chief Engineer — SmartThings Platform",
    org: "Samsung R&D Institute India",
    summary: "40% event processing throughput improvement by redesigning AWS architecture and optimizing Kinesis pipelines — serving millions of connected devices globally.",
    tags: ["SmartThings", "Kinesis", "AWS", "Architecture"],
    active: false,
  },
  {
    period: "2019 – 2022",
    role: "Senior IoT Consultant → Senior Consultant",
    org: "Deloitte USI Consulting",
    summary: "Owned McDonald's drive-thru IoT backend across 1,000+ US locations. AWS IoT Greengrass + Lambda at the edge — 25% latency reduction. Led 10-engineer team. Outstanding & Applause Awards.",
    tags: ["AWS IoT", "Greengrass", "Lambda", "1,000+ locations"],
    active: false,
  },
  {
    period: "2017 – 2019",
    role: "IoT Developer",
    org: "Smarten Spaces → Incedo Inc.",
    summary: "Beacon-based indoor navigation achieving 90% accuracy via BLE triangulation. Built backend for Cisco EFF Cloud no-code IoT platform for Oil & Gas clients.",
    tags: ["BLE", "Python", "Cisco EFF Cloud"],
    active: false,
  },
  {
    period: "2015 – 2016",
    role: "Research Assistant — IoT Wireless Protocols",
    org: "Networks Lab, IISc Bangalore",
    summary: "Published IEEE IoT Journal paper on scalable IPv6 network architectures. Co-authored IETF RFC on 6LoWPAN deterministic networking. Built Contiki OS firmware for campus-scale sensor deployments.",
    tags: ["6LoWPAN", "RPL", "Contiki OS", "IEEE", "IETF RFC"],
    active: false,
  },
];

export function CareerTimeline() {
  return (
    <section id="timeline" className="section-light">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Career</span>
          <h2 className="section-title">Experience</h2>
          <div className="title-bar" />
        </BlurFade>

        <div>
          {ENTRIES.map((e, i) => (
            <BlurFade key={e.period} delay={i * 0.07}>
              <div className="tl-item">
                <div className={`tl-dot ${e.active ? "active" : ""}`} />

                <div className="card" style={{ padding: "24px 28px" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 8, marginBottom: 8 }}>
                    <div>
                      <h3 style={{ fontFamily: "var(--fh)", fontSize: 17, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: 4 }}>
                        {e.role}
                      </h3>
                      <span style={{ fontFamily: "var(--fn)", fontSize: 13, color: "var(--accent)", fontWeight: 500 }}>
                        {e.org}
                      </span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      {e.active && (
                        <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--fn)", fontSize: 11, color: "var(--accent)", background: "var(--accent-dim)", border: "1px solid var(--border-accent)", padding: "3px 10px", borderRadius: 50 }}>
                          <span className="dot-live" style={{ width: 6, height: 6 }} />
                          Current
                        </span>
                      )}
                      <span style={{ fontFamily: "var(--fn)", fontSize: 12, color: "var(--grey-2)", background: "var(--grey-4)", padding: "3px 10px", borderRadius: 50 }}>
                        {e.period}
                      </span>
                    </div>
                  </div>

                  <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--grey-2)", lineHeight: 1.7, marginBottom: 16 }}>
                    {e.summary}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                    {e.tags.map(t => <span key={t} className="pill">{t}</span>)}
                  </div>
                </div>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
