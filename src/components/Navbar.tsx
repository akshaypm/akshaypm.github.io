"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { label: "Home",         href: "#" },
  { label: "About",        href: "#about" },
  { label: "Experience",   href: "#timeline" },
  { label: "Skills",       href: "#skills" },
  { label: "Portfolio",    href: "#case-studies" },
  { label: "Contact",      href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -56, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          inset: "0 0 auto 0",
          zIndex: 50,
          height: 60,
          display: "flex",
          alignItems: "center",
          background: scrolled ? "rgba(1,14,27,0.93)" : "rgba(1,14,27,0.6)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid var(--border)",
          transition: "background 300ms",
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
          <a
            href="#"
            style={{
              fontFamily: "var(--fh)",
              fontSize: 20,
              fontWeight: 800,
              color: "var(--white)",
              textDecoration: "none",
              letterSpacing: "-0.04em",
            }}
          >
            Akshay<span style={{ color: "var(--accent)" }}>.</span>
          </a>

          {/* display is controlled entirely by Tailwind — no inline display property */}
          <nav style={{ alignItems: "center", gap: 2 }} className="hidden md:flex">
            {LINKS.map(l => (
              <a
                key={l.href}
                href={l.href}
                style={{
                  padding: "6px 14px",
                  borderRadius: 6,
                  fontFamily: "var(--fn)",
                  fontSize: 13,
                  fontWeight: 500,
                  color: "var(--grey-2)",
                  textDecoration: "none",
                  transition: "color 150ms, background 150ms",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => { e.currentTarget.style.color = "var(--accent)"; e.currentTarget.style.background = "var(--accent-dim)"; }}
                onMouseLeave={e => { e.currentTarget.style.color = "var(--grey-2)"; e.currentTarget.style.background = "transparent"; }}
              >
                {l.label}
              </a>
            ))}
            <a
              href="/AkshayPM_Resume_1.0.0.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ marginLeft: 12, padding: "7px 20px", borderRadius: "50px", fontSize: 12 }}
            >
              Resume
            </a>
          </nav>

          {/* flex + md:hidden — show as flex on mobile, hidden on desktop */}
          <button
            onClick={() => setOpen(!open)}
            className="flex md:hidden"
            aria-label="menu"
            style={{ background: "transparent", border: "none", cursor: "pointer", padding: 4, flexDirection: "column", gap: 5 }}
          >
            {[0, 1, 2].map(i => (
              <motion.span
                key={i}
                style={{ display: "block", width: 22, height: 2, background: "var(--grey-1)", borderRadius: 2, transformOrigin: "center" }}
                animate={
                  open && i === 0 ? { rotate: 45, y: 7 } :
                  open && i === 1 ? { opacity: 0 } :
                  open && i === 2 ? { rotate: -45, y: -7 } :
                  { rotate: 0, y: 0, opacity: 1 }
                }
                transition={{ duration: 0.2 }}
              />
            ))}
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed", top: 60, left: 0, right: 0, zIndex: 40,
              background: "rgba(1,14,27,0.97)", backdropFilter: "blur(20px)",
              borderBottom: "1px solid var(--border)",
            }}
            className="md:hidden"
          >
            {LINKS.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.04 }}
                onClick={() => setOpen(false)}
                style={{ display: "block", padding: "14px 28px", borderBottom: "1px solid var(--border)", fontFamily: "var(--fn)", fontSize: 14, color: "var(--grey-2)", textDecoration: "none" }}
              >
                {l.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
