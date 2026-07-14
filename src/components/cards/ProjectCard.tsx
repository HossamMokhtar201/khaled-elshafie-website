import Link from "next/link";
import Badge from "@/components/ui/Badge";
import { projectStatusLabels } from "@/lib/real-estate";

const statusTone: Record<string, "success" | "warning" | "neutral"> = {
  available: "success",
  "partially-reserved": "warning",
  completed: "neutral",
  "coming-soon": "neutral",
};

export default function ProjectCard({
  name,
  location,
  status,
  href,
}: {
  name: string;
  location: string;
  status: string;
  href: string;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-md border border-border bg-surface p-5 shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-accent-500 hover:shadow-md"
    >
      <Badge tone={statusTone[status] ?? "neutral"}>
        {projectStatusLabels[status] ?? status}
      </Badge>
      <h3 className="mt-3 font-heading text-lg font-bold text-text-primary">
        {name}
      </h3>
      <p className="mt-1 text-sm text-text-secondary">{location}</p>
      <span className="mt-3 inline-block text-sm font-semibold text-accent-600 group-hover:underline">
        تفاصيل المشروع ←
      </span>
    </Link>
  );
}
