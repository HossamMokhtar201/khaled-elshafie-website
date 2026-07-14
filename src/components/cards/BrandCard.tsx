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
      className="group block rounded-md border border-border bg-surface p-6 shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-accent-500 hover:shadow-md"
    >
      <span
        className="mb-4 block h-1 w-10 rounded-full"
        style={{ backgroundColor: accentColor ?? "var(--color-accent-500)" }}
        aria-hidden="true"
      />
      <h3 className="font-heading text-xl font-bold text-text-primary">
        {name}
      </h3>
      <p className="mt-2 text-text-secondary">{tagline}</p>
      <span className="mt-4 inline-block font-semibold text-accent-600 group-hover:underline">
        زور البراند ←
      </span>
    </Link>
  );
}
