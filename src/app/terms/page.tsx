import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.terms.title };

export default function TermsPage() {
  return (
    <>
      <PageHero title={legal.terms.title} />
      <section className="py-16">
        <Container className="max-w-3xl space-y-4 text-text-secondary">
          {legal.terms.paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </Container>
      </section>
    </>
  );
}
