import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import BranchOpportunityForm from "@/components/forms/BranchOpportunityForm";
import { alibaba } from "@/lib/content";

export const metadata: Metadata = {
  title: alibaba.branchOpportunities.title,
};

export default function BranchOpportunitiesPage() {
  const { title, intro, requirements, companyCommitments } =
    alibaba.branchOpportunities;

  return (
    <>
      <PageHero title={title} description={intro} />

      <section aria-labelledby="requirements-heading" className="py-16">
        <Container className="grid gap-10 sm:grid-cols-2">
          <Reveal>
            <div>
              <h2
                id="requirements-heading"
                className="mb-4 font-heading text-2xl font-bold"
              >
                شروط المتقدم
              </h2>
              <ul className="list-disc space-y-2 ps-5 text-text-secondary">
                {requirements.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="mb-4 font-heading text-2xl font-bold">
                التزامات الشركة
              </h2>
              <ul className="list-disc space-y-2 ps-5 text-text-secondary">
                {companyCommitments.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="apply-heading"
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container className="max-w-xl">
          <Reveal>
            <h2
              id="apply-heading"
              className="mb-6 font-heading text-2xl font-bold"
            >
              نموذج التقديم
            </h2>
            <BranchOpportunityForm />
          </Reveal>
        </Container>
      </section>
    </>
  );
}
