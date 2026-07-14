import Container from "./Container";

export default function PageHero({
  title,
  description,
}: {
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-border bg-primary-900 py-16 text-text-inverse">
      <Container>
        <h1 className="font-heading text-3xl font-extrabold sm:text-4xl">{title}</h1>
        {description && (
          <p className="mt-4 max-w-2xl text-text-inverse/80">{description}</p>
        )}
      </Container>
    </section>
  );
}
