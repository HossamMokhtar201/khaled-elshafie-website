export default function VideoCard({
  title,
  description,
  href,
  isPlaceholder = false,
}: {
  title: string;
  description?: string;
  href?: string | null;
  isPlaceholder?: boolean;
}) {
  if (isPlaceholder || !href) {
    return (
      <div className="flex aspect-video flex-col items-center justify-center rounded-lg border border-dashed border-border-strong bg-bg-alt p-4 text-center text-sm text-text-muted">
        {title}
      </div>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1.5 hover:shadow-hover"
    >
      <div className="flex aspect-video items-center justify-center overflow-hidden bg-primary-900 text-text-inverse">
        <span
          aria-hidden="true"
          className="text-3xl transition-transform duration-[var(--duration-section)] ease-[var(--ease-standard)] group-hover:scale-[1.04]"
        >
          ▶
        </span>
      </div>
      <div className="p-4">
        <h3 className="font-heading font-bold text-text-primary">{title}</h3>
        {description && (
          <p className="mt-1 text-sm text-text-secondary">{description}</p>
        )}
      </div>
    </a>
  );
}
