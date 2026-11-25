"use client";

import { useState } from "react";

const links = [
  { href: "#work", label: "work" },
  { href: "#stack", label: "stack" },
  { href: "#contact", label: "contact" },
];

export function StatusBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="status">
      <div className="frame status-row">
        <p className="status-id">
          <span>TRACE::akshay-pm</span>
          <span className="status-span">SPAN::2015→now</span>
          <span className="status-region">REGION::Bengaluru</span>
          <span className="status-live">
            STATUS::
            <span className="status-dot" aria-hidden="true" />
            running
          </span>
        </p>
        <div className="status-side">
          <nav id="section-menu" className={open ? "status-links is-open" : "status-links"} aria-label="Sections">
            {links.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
                {link.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            aria-controls="section-menu"
            onClick={() => setOpen((value) => !value)}
          >
            menu
          </button>
        </div>
      </div>
    </header>
  );
}
