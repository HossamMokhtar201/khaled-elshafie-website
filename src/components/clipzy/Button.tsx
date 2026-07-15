import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline" | "dark";

const base =
  "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-cz-pill px-6 py-3 text-cz-sm font-semibold transition-transform duration-[var(--cz-duration-hover)] ease-[var(--cz-ease-standard)] active:scale-[0.97]";

const variants: Record<Variant, string> = {
  primary: "bg-cz-ink text-cz-bg",
  secondary: "bg-cz-accent text-cz-white shadow-cz-accent",
  outline: "border border-cz-border-strong text-cz-ink bg-transparent",
  dark: "bg-cz-white text-cz-ink",
};

const fillColor: Record<Variant, string> = {
  primary: "bg-cz-accent",
  secondary: "bg-cz-accent-dark",
  outline: "bg-cz-ink",
  dark: "bg-cz-accent",
};

const fillText: Record<Variant, string> = {
  primary: "group-hover:text-cz-white",
  secondary: "group-hover:text-cz-white",
  outline: "group-hover:text-cz-white group-hover:border-cz-ink",
  dark: "group-hover:text-cz-white",
};

export default function Button({
  children,
  variant = "primary",
  icon,
  className = "",
  href,
  onClick,
}: {
  children: ReactNode;
  variant?: Variant;
  icon?: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const classes = `${base} ${variants[variant]} ${fillText[variant]} ${className}`;
  const content = (
    <>
      <span
        aria-hidden
        className={`absolute inset-y-0 start-0 z-0 w-0 rounded-cz-pill transition-[width] duration-[var(--cz-duration-hover)] ease-[var(--cz-ease-standard)] group-hover:w-full ${fillColor[variant]}`}
      />
      <span className="relative z-10">{children}</span>
      {icon && <span className="relative z-10">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} className={classes}>
        {content}
      </a>
    );
  }

  return (
    <button type="button" onClick={onClick} className={classes}>
      {content}
    </button>
  );
}
