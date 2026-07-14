import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import { legal } from "@/lib/content";

export const metadata: Metadata = { title: legal.privacy.title };

export default function PrivacyPage() {
  return (
    <>
      <PageHero title={legal.privacy.title} />
      <section className="py-16">
        <Container className="max-w-3xl space-y-4 text-text-secondary">
          <Reveal>
            {legal.privacy.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </Reveal>
        </Container>
      </section>
    </>
  );
}
