import Link from "next/link";

export default function BrandCard({
  name,
  tagline,
  href,
  accentColor,
}: {
  name: string;
  tagline: string;
  href: string;
  accentColor?: string;
}) {
  return (
    <Link
      href={href}
      className="group block overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1.5 hover:shadow-hover"
    >
      <div
        className="aspect-[16/9] overflow-hidden"
        style={{ backgroundColor: accentColor ?? "var(--color-primary-900)" }}
      >
        <div className="h-full w-full transition-transform duration-[var(--duration-section)] ease-[var(--ease-standard)] group-hover:scale-[1.04]" />
      </div>
      <div className="p-6">
        <h3 className="font-heading text-xl font-bold text-text-primary">
          {name}
        </h3>
        <p className="mt-2 text-text-secondary">{tagline}</p>
        <span className="mt-4 inline-flex items-center gap-1 font-semibold text-accent-600">
          زور البراند
          <span
            aria-hidden="true"
            className="transition-transform duration-[var(--duration-micro)] ease-[var(--ease-standard)] group-hover:-translate-x-1"
          >
            ←
          </span>
        </span>
      </div>
    </Link>
  );
}
