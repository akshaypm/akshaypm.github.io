import { cn } from "@/lib/utils";

type BadgeVariant = "teal" | "blue" | "amber" | "red" | "purple" | "pink" | "default";

const variantStyles: Record<BadgeVariant, string> = {
  teal: "bg-[rgba(0,212,170,0.1)] text-[#00d4aa] border-[rgba(0,212,170,0.2)]",
  blue: "bg-[rgba(59,130,246,0.1)] text-[#60a5fa] border-[rgba(59,130,246,0.2)]",
  amber: "bg-[rgba(245,158,11,0.1)] text-[#fbbf24] border-[rgba(245,158,11,0.2)]",
  red: "bg-[rgba(239,68,68,0.1)] text-[#f87171] border-[rgba(239,68,68,0.2)]",
  purple: "bg-[rgba(139,92,246,0.1)] text-[#a78bfa] border-[rgba(139,92,246,0.2)]",
  pink: "bg-[rgba(236,72,153,0.1)] text-[#f472b6] border-[rgba(236,72,153,0.2)]",
  default: "bg-[rgba(255,255,255,0.05)] text-[#8b9db0] border-[rgba(255,255,255,0.08)]",
};

interface BadgeProps {
  children: React.ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium border",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
