import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import { legal } from "@/lib/content";

export const metadata: Metadata = {
  title: legal.terms.title,
  description: legal.terms.paragraphs[0],
};

export default function TermsPage() {
  return (
    <>
      <PageHero title={legal.terms.title} />
      <section className="py-16">
        <Container className="max-w-3xl space-y-4 text-text-secondary">
          <Reveal>
            {legal.terms.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
