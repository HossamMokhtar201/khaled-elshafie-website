import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import ProjectGrid from "@/components/real-estate/ProjectGrid";
import { unionSystem, realEstateProjects } from "@/lib/content";

export const metadata: Metadata = { title: "المشاريع العقارية" };

export default function RealEstatePage() {
  return (
    <>
      <PageHero title={unionSystem.title} description={unionSystem.intro} />

      <section aria-labelledby="steps-heading" className="py-16">
        <Container>
          <Reveal>
            <h2
              id="steps-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              خطوات الآلية
            </h2>
            <ol className="space-y-4 border-e-2 border-accent-500 pe-6">
              {unionSystem.steps.map((step, i) => (
                <li key={step}>
                  <span className="font-heading font-bold text-accent-600">
                    {i + 1}.{" "}
                  </span>
                  <span className="text-text-secondary">{step}</span>
                </li>
              ))}
            </ol>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="projects-heading"
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="projects-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              المشاريع
            </h2>
            <ProjectGrid projects={realEstateProjects} />
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="border-t border-border py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="faq-heading"
              className="mb-8 font-heading text-3xl font-bold"
            >
              الأسئلة الشائعة
            </h2>
            <dl className="space-y-6">
              {unionSystem.faq.map((item) => (
                <div key={item.q}>
                  <dt className="font-heading font-bold">{item.q}</dt>
                  <dd className="mt-1 text-text-secondary">{item.a}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
