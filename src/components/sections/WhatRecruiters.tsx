"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { CheckCircle } from "lucide-react";

const PROOF = [
  { title: "Production Ownership", body: "Builds systems that run 24/7 with real devices, real telemetry, and real patients — not POCs that never graduate." },
  { title: "Security Depth", body: "4-layer container supply chain security. mTLS device auth. IAM least-privilege. Architecture-level thinking, not checklist compliance." },
  { title: "Quantified Impact", body: "7.5× provisioning speedup. 25% latency reduction. 40% faster deployments. Every claim backed by before/after numbers." },
  { title: "Technical Leadership", body: "Led 10-engineer teams twice. Architecture decisions, design reviews, delivery unblocking. Not just an IC — a force multiplier." },
];

export function WhatRecruiters() {
  return (
    <section className="section-dark">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Recruiter Signal</span>
          <h2 className="section-title">What Recruiters Should See</h2>
          <div className="title-bar" />
          <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--grey-2)", maxWidth: 520, marginTop: -32, marginBottom: 48, lineHeight: 1.7 }}>
            Not a tool user. A platform builder who ships and operates.
          </p>
        </BlurFade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 16 }}>
          {PROOF.map((p, i) => (
            <BlurFade key={p.title} delay={i * 0.08}>
              <div className="icon-box" style={{ flexDirection: "column" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                  <CheckCircle size={20} style={{ color: "var(--accent)", flexShrink: 0 }} />
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 16, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em" }}>{p.title}</h3>
                </div>
                <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--grey-2)", lineHeight: 1.7 }}>{p.body}</p>
              </div>
            </BlurFade>
          ))}
        </div>
      </div>
    </section>
  );
}
