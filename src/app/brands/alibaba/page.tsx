import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import { alibaba } from "@/lib/content";

export const metadata: Metadata = {
  title: alibaba.fullName,
  description: alibaba.tagline,
};

export default function AlibabaPage() {
  return (
    <>
      <section
        aria-labelledby="alibaba-heading"
        className="border-b py-16 text-white"
        style={{
          backgroundColor: "var(--brand-alibaba-primary)",
          borderColor: "var(--brand-alibaba-secondary)",
        }}
      >
        <Container>
          <h1 id="alibaba-heading" className="font-heading text-4xl font-extrabold">
            {alibaba.fullName}
          </h1>
          <p className="mt-4 max-w-2xl text-white/90">{alibaba.tagline}</p>
        </Container>
      </section>

      <section aria-labelledby="alibaba-story-heading" className="py-16">
        <Container>
          <h2 id="alibaba-story-heading" className="mb-4 font-heading text-2xl font-bold">
            نبذة عن البراند
          </h2>
          <p className="max-w-3xl text-text-secondary">{alibaba.story}</p>
        </Container>
      </section>

      <section aria-labelledby="alibaba-categories-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="alibaba-categories-heading" className="mb-4 font-heading text-2xl font-bold">
            الفئات
          </h2>
          <ul className="flex flex-wrap gap-4">
            {alibaba.categories.map((cat) => (
              <li key={cat} className="rounded-sm border border-border-strong bg-surface px-4 py-2">
                {cat}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="alibaba-gallery-heading" className="border-t border-border py-16">
        <Container>
          <h2 id="alibaba-gallery-heading" className="mb-4 font-heading text-2xl font-bold">
            معرض الصور
          </h2>
          <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            {alibaba.gallery.map((src) => (
              <li key={src} className="aspect-square rounded-md bg-bg-alt" aria-label="صورة منتج (Placeholder)" />
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="alibaba-branches-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="alibaba-branches-heading" className="mb-4 font-heading text-2xl font-bold">
            الفروع
          </h2>
          <ul className="grid gap-4 sm:grid-cols-2">
            {alibaba.branches.map((branch) => (
              <li key={branch.name} className="rounded-md border border-border bg-surface p-4">
                <h3 className="font-heading font-bold">{branch.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{branch.address}</p>
                <a href={`tel:${branch.phone}`} className="mt-1 block text-sm text-accent-600">
                  {branch.phone}
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-label="فرص إدارة الفروع" className="border-t border-border py-16">
        <Container>
          <h2 className="mb-4 font-heading text-2xl font-bold">فرص إدارة الفروع</h2>
          <p className="max-w-2xl text-text-secondary">{alibaba.branchOpportunities.intro}</p>
          <Link
            href="/brands/alibaba/branch-opportunities"
            className="mt-4 inline-block font-semibold text-accent-600 hover:underline"
          >
            التفاصيل والتقديم ←
          </Link>
        </Container>
      </section>
    </>
  );
}
