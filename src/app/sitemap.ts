import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/site-url";
import { realEstateProjects } from "@/lib/content";

export const dynamic = "force-static";

const staticRoutes = [
  { path: "/", priority: 1, changeFrequency: "monthly" as const },
  { path: "/about", priority: 0.8, changeFrequency: "monthly" as const },
  { path: "/brands", priority: 0.7, changeFrequency: "monthly" as const },
  {
    path: "/brands/mokhzangy",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/brands/alibaba",
    priority: 0.8,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/brands/alibaba/branch-opportunities",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/consultations",
    priority: 0.9,
    changeFrequency: "monthly" as const,
  },
  {
    path: "/consultations/book",
    priority: 0.7,
    changeFrequency: "monthly" as const,
  },
  { path: "/courses", priority: 0.5, changeFrequency: "monthly" as const },
  { path: "/content", priority: 0.8, changeFrequency: "weekly" as const },
  { path: "/quotes", priority: 0.6, changeFrequency: "monthly" as const },
  { path: "/investments", priority: 0.7, changeFrequency: "monthly" as const },
  {
    path: "/investments/real-estate",
    priority: 0.8,
    changeFrequency: "weekly" as const,
  },
  {
    path: "/investments/opportunities",
    priority: 0.6,
    changeFrequency: "monthly" as const,
  },
  { path: "/careers", priority: 0.6, changeFrequency: "weekly" as const },
  { path: "/contact", priority: 0.6, changeFrequency: "yearly" as const },
  { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const projectRoutes = realEstateProjects.map((project) => ({
    url: `${siteUrl}/investments/real-estate/${project.slug}`,
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes.map((route) => ({
      url: `${siteUrl}${route.path}`,
      changeFrequency: route.changeFrequency,
      priority: route.priority,
    })),
    ...projectRoutes,
  ];
}
