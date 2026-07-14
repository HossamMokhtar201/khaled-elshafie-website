import type { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

type Variant = "primary" | "secondary" | "ghost" | "link";
type Size = "sm" | "md" | "lg";

const base =
  "group relative isolate inline-flex items-center justify-center gap-2 overflow-hidden font-semibold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent-500 disabled:cursor-not-allowed disabled:opacity-50";

const variants: Record<Variant, string> = {
  primary: "rounded-sm bg-accent-500 text-primary-900",
  secondary: "rounded-sm border border-primary-900 text-primary-900",
  ghost: "rounded-sm text-primary-900 hover:bg-bg-alt",
  link: "text-accent-600 underline-offset-4 hover:underline",
};

const sweepColor: Partial<Record<Variant, string>> = {
  primary: "bg-accent-400",
  secondary: "bg-primary-900",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

interface CommonProps {
  variant?: Variant;
  size?: Size;
  children: ReactNode;
  className?: string;
  href?: string;
}

type ButtonProps = CommonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export default function Button({
  variant = "primary",
  size = "md",
  children,
  className = "",
  href,
  ...rest
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${variant === "link" ? "" : sizes[size]} ${className}`;
  const sweep = sweepColor[variant];

  const content = (
    <>
      {sweep && (
        <span
          aria-hidden="true"
          className={`absolute inset-0 -z-10 origin-right scale-x-0 transition-transform duration-[var(--duration-micro)] ease-[var(--ease-standard)] group-hover:scale-x-100 ${sweep}`}
        />
      )}
      <span
        className={
          variant === "secondary"
            ? "relative z-10 transition-colors duration-[var(--duration-micro)] group-hover:text-text-inverse"
            : "relative z-10"
        }
      >
        {children}
      </span>
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button className={classes} {...rest}>
      {content}
    </button>
  );
}
