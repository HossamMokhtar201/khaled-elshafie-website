import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import CareerApplicationForm from "@/components/forms/CareerApplicationForm";
import { careers } from "@/lib/content";

export const metadata: Metadata = { title: "الوظائف" };

export default function CareersPage() {
  return (
    <>
      <PageHero title="الوظائف" description="فرص عمل متاحة حاليًا ضمن براندات خالد الشافعي." />

      <section aria-labelledby="jobs-heading" className="py-16">
        <Container>
          <h2 id="jobs-heading" className="mb-8 font-heading text-3xl font-bold">
            الوظائف المتاحة
          </h2>
          <ul className="grid gap-6 sm:grid-cols-3">
            {careers.map((job) => (
              <li key={job.id} className="rounded-md border border-border bg-surface p-5">
                <h3 className="font-heading text-lg font-bold">{job.title}</h3>
                <p className="mt-1 text-sm text-text-secondary">{job.type}</p>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="apply-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="apply-heading" className="mb-6 font-heading text-2xl font-bold">
            نموذج التقديم
          </h2>
          <CareerApplicationForm jobs={careers} />
        </Container>
      </section>
    </>
  );
}
