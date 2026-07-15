import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import { investmentOpportunities } from "@/lib/content";

export const metadata: Metadata = {
  title: "فرص استثمارية أخرى",
  description: investmentOpportunities.ecommerce.capital,
};

export default function OtherOpportunitiesPage() {
  const { ecommerce } = investmentOpportunities;

  return (
    <>
      <PageHero title="فرص استثمارية أخرى" />
      <section className="py-16">
        <Container>
          <Reveal>
            <article className="rounded-md border border-border bg-surface p-6">
              <h2 className="font-heading text-2xl font-bold">
                {ecommerce.title}
              </h2>
              <dl className="mt-4 space-y-4">
                <div>
                  <dt className="font-heading font-bold text-accent-600">
                    رأس المال المطلوب
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {ecommerce.capital}
                  </dd>
                </div>
                <div>
                  <dt className="font-heading font-bold text-accent-600">
                    المهام المطلوبة من المستثمر
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {ecommerce.investorTasks}
                  </dd>
                </div>
                <div>
                  <dt className="font-heading font-bold text-accent-600">
                    دور خالد الشافعي
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {ecommerce.khaledRole}
                  </dd>
                </div>
                <div>
                  <dt className="font-heading font-bold text-accent-600">
                    طريقة الربح
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {ecommerce.profitModel}
                  </dd>
                </div>
                <div>
                  <dt className="font-heading font-bold text-accent-600">
                    ضمانات الخروج
                  </dt>
                  <dd className="mt-1 text-text-secondary">
                    {ecommerce.exitGuarantees}
                  </dd>
                </div>
              </dl>
            </article>

            <p className="mt-8">
              مهتم بفرصة إدارة أحد فروع علي بابا؟{" "}
              <Link
                href="/brands/alibaba/branch-opportunities"
                className="font-semibold text-accent-600 hover:underline"
              >
                اطّلع على فرص إدارة الفروع ←
              </Link>
            </p>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
