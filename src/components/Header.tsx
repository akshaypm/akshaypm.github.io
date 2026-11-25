import { resumeHref } from "@/lib/content";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
  { href: resumeHref, label: "Resume" },
] as const;

export function Header() {
  return (
    <header className="site-header">
      <div className="frame header-bar">
        <a className="wordmark" href="#top">
          Akshay P M
        </a>
        <nav className="nav" aria-label="Primary">
          {links.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
