"use client";

import { motion } from "framer-motion";
import { Mail, ExternalLink, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" style={{ background: "var(--bg-secondary)", borderTop: "1px solid var(--border)" }}>
      {/* Contact section */}
      <div className="wrap" style={{ paddingTop: 80, paddingBottom: 64 }}>
        <span className="overline">Get In Touch</span>
        <h2 className="section-title" style={{ marginBottom: 8 }}>Let&apos;s Connect</h2>
        <div className="title-bar" />

        <div className="footer-grid">
          {/* Left */}
          <div>
            <p style={{ fontFamily: "var(--fb)", fontSize: 15, color: "var(--grey-2)", lineHeight: 1.75, marginBottom: 36, maxWidth: 440 }}>
              Open to senior / staff IoT platform engineering roles — remote or hybrid. US · EU · IN.
              I bring a decade of production IoT systems, not theory.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {[
                { Icon: MapPin, text: "Bengaluru, India · Remote-Ready" },
                { Icon: Mail,   text: "akshaypm90@gmail.com",      href: "mailto:akshaypm90@gmail.com" },
                { Icon: Phone,  text: "+91 8892681034" },
              ].map(({ Icon, text, href }) => (
                <div key={text} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: 8, background: "var(--accent-dim)", border: "1px solid var(--border-accent)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)", flexShrink: 0 }}>
                    <Icon size={16} />
                  </div>
                  {href
                    ? <a href={href} style={{ fontFamily: "var(--fn)", fontSize: 14, color: "var(--grey-1)", textDecoration: "none" }}>{text}</a>
                    : <span style={{ fontFamily: "var(--fn)", fontSize: 14, color: "var(--grey-1)" }}>{text}</span>
                  }
                </div>
              ))}
            </div>
          </div>

          {/* Right — CTA card */}
          <div
            style={{
              background: "var(--bg-card)",
              border: "1px solid var(--border-accent)",
              borderRadius: 14,
              padding: "36px",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontFamily: "var(--fh)", fontSize: 24, fontWeight: 800, color: "var(--white)", letterSpacing: "-0.03em", marginBottom: 12 }}>
              Ready to build something real?
            </h3>
            <p style={{ fontFamily: "var(--fb)", fontSize: 14, color: "var(--grey-2)", marginBottom: 28, lineHeight: 1.65 }}>
              10+ years. 1,000+ locations. 500+ gateways. Zero excuses.
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
              <motion.a
                href="mailto:akshaypm90@gmail.com"
                className="btn-primary"
                style={{ justifyContent: "center" }}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <Mail size={15} />
                Send a Message
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/akshaypm90"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline"
                style={{ justifyContent: "center" }}
                whileHover={{ y: -2 }}
              >
                <ExternalLink size={14} />
                Connect on LinkedIn
              </motion.a>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (min-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 64px;
          }
        }
      `}</style>

      {/* Bottom bar */}
      <div style={{ borderTop: "1px solid var(--border)", padding: "20px 0" }}>
        <div className="wrap" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <span style={{ fontFamily: "var(--fn)", fontSize: 13, color: "var(--grey-2)" }}>
            © {new Date().getFullYear()} Akshay P M — All rights reserved
          </span>
          <span style={{ fontFamily: "var(--fn)", fontSize: 13, color: "var(--grey-2)" }}>
            Built with Next.js · Framer Motion
          </span>
        </div>
      </div>
    </footer>
  );
}
