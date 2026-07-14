export default function TestimonialCard({
  quote,
  name,
  role,
}: {
  quote: string;
  name: string;
  role?: string;
}) {
  return (
    <figure className="rounded-md border border-border bg-surface p-6 shadow-sm">
      <blockquote className="text-text-secondary">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-heading font-bold text-text-primary">
        {name}
        {role && (
          <span className="ms-2 font-normal text-text-muted">— {role}</span>
        )}
      </figcaption>
    </figure>
  );
}
