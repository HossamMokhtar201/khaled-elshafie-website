export default function StatsCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center text-center">
      <dt className="sr-only">{label}</dt>
      <dd className="font-heading text-4xl font-bold text-primary-700">
        {value}
        {suffix}
      </dd>
      <p className="mt-1 max-w-[10rem] text-sm text-text-secondary">{label}</p>
    </div>
  );
}
