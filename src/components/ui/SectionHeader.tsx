import { BlurFade } from "./BlurFade";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export function SectionHeader({ label, title, subtitle, className = "" }: SectionHeaderProps) {
  return (
    <div className={className} style={{ marginBottom: 56 }}>
      <BlurFade>
        <span className="label">{label}</span>
        <h2 className="h2">{title}</h2>
        {subtitle && (
          <p style={{ marginTop: 14, fontSize: 16, color: "var(--t2)", lineHeight: 1.65, maxWidth: 540 }}>
            {subtitle}
          </p>
        )}
      </BlurFade>
    </div>
  );
}
