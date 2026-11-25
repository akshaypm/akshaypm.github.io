import { email, linkedIn, resumeHref } from "@/lib/content";

export function Contact() {
  return (
    <footer id="contact" className="section contact">
      <div className="frame">
        <p className="label">07 — Contact</p>
        <h2>Write.</h2>
        <p className="lede">Senior AI Engineer, Bengaluru. Open to remote.</p>
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
        </a>
        <ul className="contact-links">
          <li>
            <a className="text-link" href={linkedIn} target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
          </li>
          <li>
            <a className="text-link" href={resumeHref} download>
              Download resume
            </a>
          </li>
        </ul>
        <p className="colophon">Akshay P M · Bengaluru</p>
      </div>
    </footer>
  );
}
