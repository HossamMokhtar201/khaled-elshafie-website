export default function Timeline({
  items,
}: {
  items: { year: string; title: string; description: string }[];
}) {
  return (
    <ol className="space-y-6 border-e-2 border-accent-500 pe-6">
      {items.map((item) => (
        <li key={item.title}>
          <p className="font-heading text-sm font-bold text-accent-600">{item.year}</p>
          <h3 className="font-heading text-lg font-bold">{item.title}</h3>
          <p className="mt-1 text-text-secondary">{item.description}</p>
        </li>
      ))}
    </ol>
  );
}
