"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { projectStatusLabels } from "@/lib/real-estate";
import type { realEstateProjects as ProjectsType } from "@/lib/content";

export default function ProjectGrid({
  projects,
}: {
  projects: typeof ProjectsType;
}) {
  const [status, setStatus] = useState<string>("all");
  const statuses = useMemo(
    () => ["all", ...new Set(projects.map((p) => p.status))],
    [projects],
  );

  const filtered =
    status === "all" ? projects : projects.filter((p) => p.status === status);

  return (
    <div>
      <div
        className="mb-6 flex flex-wrap gap-2"
        role="group"
        aria-label="فلترة حسب الحالة"
      >
        {statuses.map((s) => (
          <button
            key={s}
            type="button"
            onClick={() => setStatus(s)}
            aria-pressed={status === s}
            className={`rounded-full border px-4 py-1 text-sm ${
              status === s
                ? "border-accent-500 bg-accent-500 text-primary-900"
                : "border-border-strong text-text-secondary"
            }`}
          >
            {s === "all" ? "الكل" : projectStatusLabels[s]}
          </button>
        ))}
      </div>
      <ul className="grid gap-6 sm:grid-cols-3">
        {filtered.map((project) => (
          <li
            key={project.slug}
            className="rounded-md border border-border bg-surface p-5"
          >
            <span className="mb-2 inline-block rounded-full bg-bg-alt px-3 py-1 text-xs font-semibold text-text-secondary">
              {projectStatusLabels[project.status]}
            </span>
            <h3 className="font-heading text-lg font-bold">{project.name}</h3>
            <p className="mt-1 text-sm text-text-secondary">
              {project.location}
            </p>
            <Link
              href={`/investments/real-estate/${project.slug}`}
              className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline"
            >
              تفاصيل المشروع ←
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
