"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { FileText, Globe, Trophy, Star, Cloud } from "lucide-react";

const ITEMS = [
  { Icon: FileText, type: "Publication",   title: "IEEE IoT Journal",               year: "2021", detail: "Peer-reviewed paper on scalable IPv6 IoT network architectures." },
  { Icon: Globe,    type: "Standard",      title: "IETF RFC Co-author",             year: "2016", detail: "Internet standard for 6LoWPAN deterministic networking — shaping global IoT protocols." },
  { Icon: Trophy,   type: "Award",         title: "Outstanding Award",              year: "2022", detail: "Deloitte USI — high-impact IoT delivery on the McDonald's platform." },
  { Icon: Star,     type: "Award",         title: "Applause Award",                 year: "2021", detail: "Deloitte USI — technical leadership on Cisco ThingWorx IoT integration." },
  { Icon: Cloud,    type: "Certification", title: "AWS Solutions Architect Assoc.", year: "—",    detail: "Score 920 / 1000." },
];

export function Publications() {
  return (
    <section className="section-light">
      <div className="wrap">
        <BlurFade>
          <span className="overline">Recognition</span>
          <h2 className="section-title">Publications & Awards</h2>
          <div className="title-bar" />
        </BlurFade>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 16 }}>
          {ITEMS.map((item, i) => {
            const Icon = item.Icon;
            return (
              <BlurFade key={item.title} delay={i * 0.08}>
                <div className="card" style={{ padding: "24px", height: "100%" }}>
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                    <div
                      style={{
                        width: 40, height: 40, borderRadius: 8,
                        background: "var(--accent-dim)", border: "1px solid var(--border-accent)",
                        display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)",
                      }}
                    >
                      <Icon size={18} />
                    </div>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                      <span className="pill" style={{ fontSize: 9, letterSpacing: "0.1em" }}>{item.type.toUpperCase()}</span>
                      <span style={{ fontFamily: "var(--fn)", fontSize: 11, color: "var(--grey-2)" }}>{item.year}</span>
                    </div>
                  </div>
                  <h3 style={{ fontFamily: "var(--fh)", fontSize: 15, fontWeight: 700, color: "var(--white)", letterSpacing: "-0.02em", marginBottom: 8, lineHeight: 1.3 }}>{item.title}</h3>
                  <p style={{ fontFamily: "var(--fb)", fontSize: 13, color: "var(--grey-2)", lineHeight: 1.65 }}>{item.detail}</p>
                </div>
              </BlurFade>
            );
          })}
        </div>
      </div>
    </section>
  );
}
