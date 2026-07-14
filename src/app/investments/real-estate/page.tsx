import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import ProjectGrid from "@/components/real-estate/ProjectGrid";
import NumberedProcess from "@/components/ui/NumberedProcess";
import FAQAccordion from "@/components/ui/FAQAccordion";
import { unionSystem, realEstateProjects } from "@/lib/content";

export const metadata: Metadata = { title: "المشاريع العقارية" };

const unionSteps = unionSystem.steps.map((step, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: `المرحلة ${i + 1}`,
  description: step,
}));

export default function RealEstatePage() {
  return (
    <>
      <PageHero title={unionSystem.title} description={unionSystem.intro} />

      <section aria-labelledby="steps-heading" className="py-20">
        <Container>
          <Reveal>
            <h2
              id="steps-heading"
              className="mb-12 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              خطوات الآلية
            </h2>
          </Reveal>
          <NumberedProcess steps={unionSteps} />
        </Container>
      </section>

      <section
        aria-labelledby="projects-heading"
        className="border-t border-border bg-bg-alt py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="projects-heading"
              className="mb-8 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              المشاريع
            </h2>
            <ProjectGrid projects={realEstateProjects} />
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="faq-heading"
        className="border-t border-border py-20"
      >
        <Container className="max-w-3xl">
          <Reveal>
            <h2
              id="faq-heading"
              className="mb-8 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              الأسئلة الشائعة
            </h2>
            <FAQAccordion items={unionSystem.faq} />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
