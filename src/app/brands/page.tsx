import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { mokhzangy, alibaba } from "@/lib/content";

export const metadata: Metadata = { title: "البراندات" };

export default function BrandsIndexPage() {
  return (
    <>
      <PageHero title="البراندات" description="براندان بهوية خاصة، تحت مظلة خبرة خالد الشافعي في التجارة." />
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-md border border-border bg-surface p-6">
            <h2 className="font-heading text-xl font-bold">{mokhzangy.name}</h2>
            <p className="mt-2 text-text-secondary">{mokhzangy.tagline}</p>
            <Link href="/brands/mokhzangy" className="mt-4 inline-block font-semibold text-accent-600 hover:underline">
              زور البراند ←
            </Link>
          </article>
          <article className="rounded-md border border-border bg-surface p-6">
            <h2 className="font-heading text-xl font-bold">{alibaba.fullName}</h2>
            <p className="mt-2 text-text-secondary">{alibaba.tagline}</p>
            <Link href="/brands/alibaba" className="mt-4 inline-block font-semibold text-accent-600 hover:underline">
              زور البراند ←
            </Link>
          </article>
        </Container>
      </section>
    </>
  );
}
