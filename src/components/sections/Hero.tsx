"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Download, ExternalLink, ArrowRight, MapPin, Mail } from "lucide-react";
import Image from "next/image";

const TYPED_STRINGS = [
  "Staff Software Engineer",
  "IoT Platform Architect",
  "Edge Security Specialist",
  "AWS · Kubernetes · mTLS",
];

function TypedText() {
  const [idx, setIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const target = TYPED_STRINGS[idx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && displayed.length < target.length) {
      timeout = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 65);
    } else if (!deleting && displayed.length === target.length) {
      timeout = setTimeout(() => setDeleting(true), 1800);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setIdx((idx + 1) % TYPED_STRINGS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, idx]);

  return (
    <span
      style={{
        fontFamily: "var(--fh)",
        fontSize: "clamp(20px, 2.5vw, 30px)",
        fontWeight: 600,
        color: "var(--accent)",
        letterSpacing: "-0.01em",
      }}
    >
      {displayed}
      <span
        style={{
          display: "inline-block",
          width: 2,
          height: "1.1em",
          background: "var(--accent)",
          marginLeft: 2,
          verticalAlign: "text-bottom",
          animation: "blink 0.8s step-end infinite",
        }}
      />
      <style>{`@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }`}</style>
    </span>
  );
}

const E = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  return (
    <section
      style={{
        minHeight: "100svh",
        background: "var(--bg-primary)",
        position: "relative",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      {/* Background radial */}
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          background: `
            radial-gradient(ellipse 70% 60% at 80% 20%, rgba(18,214,64,0.07) 0%, transparent 60%),
            radial-gradient(ellipse 50% 50% at 10% 80%, rgba(9,32,58,0.8) 0%, transparent 70%)
          `,
          pointerEvents: "none",
        }}
      />

      <div
        className="wrap"
        style={{ position: "relative", zIndex: 1, width: "100%", paddingTop: 90, paddingBottom: 80 }}
      >
        <div className="hero-grid">
          {/* ── LEFT: content ── */}
          <div>
            {/* Status */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: E }}
              style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 24 }}
            >
              <span className="dot-live" />
              <span style={{ fontFamily: "var(--fn)", fontSize: 12, color: "var(--grey-2)", letterSpacing: "0.04em", lineHeight: 1.5 }}>
                Currently at GE Healthcare · Open to Staff / Principal IoT roles
              </span>
            </motion.div>

            {/* Greeting + name */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: E }}
            >
              <p style={{ fontFamily: "var(--fn)", fontSize: 14, color: "var(--grey-2)", marginBottom: 8, letterSpacing: "0.02em" }}>
                Hello, I&apos;m
              </p>
              <h1
                style={{
                  fontFamily: "var(--fh)",
                  fontSize: "clamp(52px, 7vw, 96px)",
                  fontWeight: 800,
                  color: "var(--white)",
                  lineHeight: 0.92,
                  letterSpacing: "-0.04em",
                  marginBottom: 24,
                }}
              >
                Akshay
                <br />
                <span style={{ color: "var(--accent)" }}>P M</span>
              </h1>
            </motion.div>

            {/* Typed role */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
              style={{ marginBottom: 20, minHeight: 38 }}
            >
              <TypedText />
            </motion.div>

            {/* Tagline */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.48, ease: E }}
              style={{
                fontFamily: "var(--fb)",
                fontSize: "clamp(14px, 1.5vw, 16px)",
                color: "var(--grey-2)",
                lineHeight: 1.7,
                maxWidth: 520,
                marginBottom: 36,
              }}
            >
              Building IoT platforms that run in hospitals and drive-thrus —
              {" "}<strong style={{ color: "var(--grey-1)", fontWeight: 600 }}>not in demo environments.</strong>
              {" "}10+ years across GE Healthcare, JLL, Deloitte, Samsung, and IISc.
            </motion.p>

            {/* Info row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.55 }}
              style={{ display: "flex", gap: 24, flexWrap: "wrap", marginBottom: 36 }}
            >
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--fn)", fontSize: 13, color: "var(--grey-2)" }}>
                <MapPin size={14} style={{ color: "var(--accent)" }} />
                Bengaluru, India · Remote-ready
              </span>
              <span style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "var(--fn)", fontSize: 13, color: "var(--grey-2)" }}>
                <Mail size={14} style={{ color: "var(--accent)" }} />
                akshaypm90@gmail.com
              </span>
            </motion.div>

            {/* CTA row */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.65, ease: E }}
              style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
            >
              <a href="#case-studies" className="btn-primary">
                View My Work <ArrowRight size={15} />
              </a>
              <a href="/AkshayPM_Resume_1.0.0.pdf" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <Download size={14} /> Download Resume
              </a>
              <a href="https://linkedin.com/in/akshaypm90" target="_blank" rel="noopener noreferrer" className="btn-outline">
                <ExternalLink size={14} /> LinkedIn
              </a>
            </motion.div>
          </div>

          {/* ── RIGHT: photo ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: E }}
            className="hero-photo-col"
            style={{ flexShrink: 0 }}
          >
            {/* slow float */}
            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              style={{ position: "relative" }}
            >
              {/* outer glow ring */}
              <div
                aria-hidden
                style={{
                  position: "absolute",
                  inset: -28,
                  borderRadius: "50%",
                  background: "radial-gradient(circle, rgba(18,214,64,0.22) 0%, transparent 68%)",
                  filter: "blur(18px)",
                  pointerEvents: "none",
                }}
              />

              {/* spinning dashed ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                style={{
                  position: "absolute",
                  inset: -10,
                  borderRadius: "50%",
                  border: "1.5px dashed rgba(18,214,64,0.28)",
                  pointerEvents: "none",
                }}
              />

              {/* solid accent ring */}
              <div
                style={{
                  position: "relative",
                  width: "clamp(260px, 22vw, 340px)",
                  height: "clamp(260px, 22vw, 340px)",
                  borderRadius: "50%",
                  padding: 4,
                  background: "linear-gradient(135deg, rgba(18,214,64,0.7) 0%, rgba(18,214,64,0.12) 60%, transparent 100%)",
                }}
              >
                {/* image crop circle */}
                <div
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: "50%",
                    overflow: "hidden",
                    background: "var(--bg-secondary)",
                  }}
                >
                  <Image
                    src="/Akshay.jpg"
                    alt="Akshay P M — Staff Software Engineer"
                    fill
                    priority
                    sizes="(max-width: 768px) 0px, 340px"
                    style={{ objectFit: "cover", objectPosition: "center top" }}
                  />
                </div>
              </div>

              {/* floating badge — years */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
                style={{
                  position: "absolute",
                  bottom: 12,
                  left: -20,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-accent)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <span style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>10+</span>
                <span style={{ fontFamily: "var(--fn)", fontSize: 11, color: "var(--grey-2)", lineHeight: 1.3 }}>Years<br />Production IoT</span>
              </motion.div>

              {/* floating badge — locations */}
              <motion.div
                initial={{ opacity: 0, scale: 0.7 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.05, duration: 0.4 }}
                style={{
                  position: "absolute",
                  top: 20,
                  right: -24,
                  background: "var(--bg-card)",
                  border: "1px solid var(--border-accent)",
                  borderRadius: 12,
                  padding: "8px 14px",
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  backdropFilter: "blur(12px)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                <span style={{ fontFamily: "var(--fh)", fontSize: 22, fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>1K+</span>
                <span style={{ fontFamily: "var(--fn)", fontSize: 11, color: "var(--grey-2)", lineHeight: 1.3 }}>Sites<br />Deployed</span>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      <style>{`
        /* Mobile — single column, photo hidden */
        .hero-grid {
          display: grid;
          grid-template-columns: 1fr;
          align-items: center;
        }
        .hero-photo-col { display: none; }

        /* Tablet+ — two columns with photo */
        @media (min-width: 768px) {
          .hero-grid {
            grid-template-columns: 1fr auto;
            gap: clamp(40px, 6vw, 96px);
          }
          .hero-photo-col { display: block; }
        }
      `}</style>
    </section>
  );
}
