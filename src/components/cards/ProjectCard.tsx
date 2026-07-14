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
      className="group block overflow-hidden rounded-lg border border-border bg-surface shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1.5 hover:shadow-hover"
    >
      <div className="aspect-[16/10] overflow-hidden bg-bg-alt">
        <div className="h-full w-full transition-transform duration-[var(--duration-section)] ease-[var(--ease-standard)] group-hover:scale-[1.04]" />
      </div>
      <div className="p-5">
        <Badge tone={statusTone[status] ?? "neutral"}>
          {projectStatusLabels[status] ?? status}
        </Badge>
        <h3 className="mt-3 font-heading text-lg font-bold text-text-primary">
          {name}
        </h3>
        <p className="mt-1 text-sm text-text-secondary">{location}</p>
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent-600">
          تفاصيل المشروع
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
