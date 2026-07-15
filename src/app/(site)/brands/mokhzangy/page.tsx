import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import { mokhzangy } from "@/lib/content";

export const metadata: Metadata = {
  title: mokhzangy.name,
  description: mokhzangy.tagline,
};

export default function MokhzangyPage() {
  return (
    <>
      <section
        aria-labelledby="mokhzangy-heading"
        className="border-b py-16 text-text-inverse"
        style={{
          backgroundColor: "var(--brand-mokhzangy-primary)",
          borderColor: "var(--brand-mokhzangy-secondary)",
        }}
      >
        <Container>
          <Reveal>
            <h1
              id="mokhzangy-heading"
              className="font-heading text-4xl font-extrabold"
            >
              {mokhzangy.name}
            </h1>
            <p className="mt-4 max-w-2xl text-white/80">{mokhzangy.tagline}</p>
          </Reveal>
        </Container>
      </section>

      <section aria-labelledby="mokhzangy-story-heading" className="py-16">
        <Container>
          <Reveal>
            <h2
              id="mokhzangy-story-heading"
              className="mb-4 font-heading text-2xl font-bold"
            >
              قصة البراند
            </h2>
            <p className="max-w-3xl text-text-secondary">{mokhzangy.story}</p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="mokhzangy-categories-heading"
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="mokhzangy-categories-heading"
              className="mb-4 font-heading text-2xl font-bold"
            >
              الفئات
            </h2>
            <ul className="flex gap-4">
              {mokhzangy.categories.map((cat) => (
                <li
                  key={cat}
                  className="rounded-sm border border-border-strong bg-surface px-4 py-2"
                >
                  {cat}
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="mokhzangy-gallery-heading"
        className="border-t border-border py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="mokhzangy-gallery-heading"
              className="mb-4 font-heading text-2xl font-bold"
            >
              معرض الصور
            </h2>
            <ul className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              {mokhzangy.gallery.map((src) => (
                <li
                  key={src}
                  className="aspect-square rounded-md bg-bg-alt"
                  aria-label="صورة منتج (Placeholder)"
                />
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="mokhzangy-pricing-heading"
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="mokhzangy-pricing-heading"
              className="mb-4 font-heading text-2xl font-bold"
            >
              فلسفة التسعير
            </h2>
            <p className="max-w-2xl text-text-secondary">
              {mokhzangy.pricingPhilosophy}
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="mokhzangy-branches-heading"
        className="border-t border-border py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="mokhzangy-branches-heading"
              className="mb-4 font-heading text-2xl font-bold"
            >
              الفروع
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2">
              {mokhzangy.branches.map((branch) => (
                <li
                  key={branch.name}
                  className="rounded-md border border-border bg-surface p-4"
                >
                  <h3 className="font-heading font-bold">{branch.name}</h3>
                  <p className="mt-1 text-sm text-text-secondary">
                    {branch.address}
                  </p>
                  <a
                    href={`tel:${branch.phone}`}
                    className="mt-1 block text-sm text-accent-600"
                  >
                    {branch.phone}
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
