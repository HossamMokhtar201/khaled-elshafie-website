import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import UnitInquiryForm from "@/components/forms/UnitInquiryForm";
import { realEstateProjects, getRealEstateProject } from "@/lib/content";
import { projectStatusLabels } from "@/lib/real-estate";

export function generateStaticParams() {
  return realEstateProjects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getRealEstateProject(slug);
  return { title: project?.name ?? "مشروع عقاري" };
}

export default async function RealEstateProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getRealEstateProject(slug);

  if (!project) {
    notFound();
  }

  return (
    <>
      <PageHero
        title={project.name}
        description={`${project.location} — ${projectStatusLabels[project.status]}`}
      />

      <section aria-labelledby="description-heading" className="py-16">
        <Container>
          <h2 id="description-heading" className="mb-4 font-heading text-2xl font-bold">
            وصف المشروع
          </h2>
          <p className="max-w-3xl text-text-secondary">{project.description}</p>
        </Container>
      </section>

      <section aria-labelledby="delivery-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="delivery-heading" className="mb-4 font-heading text-2xl font-bold">
            مواصفات التسليم
          </h2>
          <p className="text-text-secondary">
            <strong>الجدول الزمني: </strong>
            {project.delivery.timeline}
          </p>
          <p className="mt-1 text-text-secondary">
            <strong>التشطيب: </strong>
            {project.delivery.finishing}
          </p>
          <ul className="mt-4 list-disc space-y-1 ps-5 text-text-secondary">
            {project.delivery.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-labelledby="units-heading" className="border-t border-border py-16">
        <Container>
          <h2 id="units-heading" className="mb-8 font-heading text-2xl font-bold">
            نماذج الوحدات وأسعارها
          </h2>
          {project.units.length === 0 ? (
            <p className="text-text-muted">PLACEHOLDER: نماذج الوحدات وأسعارها ستُضاف بمجرد توفر البيانات الفعلية.</p>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full min-w-[640px] border-collapse text-start">
                <thead>
                  <tr className="border-b border-border text-start text-sm text-text-secondary">
                    <th className="py-2 pe-4 text-start">الوحدة</th>
                    <th className="py-2 pe-4 text-start">المساحة</th>
                    <th className="py-2 pe-4 text-start">التفاصيل</th>
                    <th className="py-2 pe-4 text-start">الدفعة المقدمة</th>
                    <th className="py-2 text-start">المتبقي</th>
                  </tr>
                </thead>
                <tbody>
                  {project.units.map((unit) => (
                    <tr key={unit.id} className="border-b border-border">
                      <td className="py-3 pe-4 font-semibold">{unit.name}</td>
                      <td className="py-3 pe-4">{unit.area}</td>
                      <td className="py-3 pe-4 text-text-secondary">{unit.details}</td>
                      <td className="py-3 pe-4">{unit.downPayment}</td>
                      <td className="py-3">{unit.remaining}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          <a
            href={project.contractPdfUrl}
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-sm border border-primary-900 px-6 py-3 font-semibold text-primary-900 transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:bg-primary-900 hover:text-text-inverse"
          >
            تحميل نموذج العقد (PDF)
          </a>
        </Container>
      </section>

      <section aria-labelledby="inquiry-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="inquiry-heading" className="mb-6 font-heading text-2xl font-bold">
            تواصل / احجز وحدة
          </h2>
          <UnitInquiryForm units={project.units.map((u) => ({ id: u.id, name: u.name }))} />
        </Container>
      </section>
    </>
  );
}
