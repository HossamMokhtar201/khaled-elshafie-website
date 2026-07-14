import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = { title: "الفرص الاستثمارية" };

export default function InvestmentsIndexPage() {
  return (
    <>
      <PageHero title="الفرص الاستثمارية" description="مشاريع عقارية بنظام اتحاد الملاك، وفرص استثمارية أخرى." />
      <section className="py-16">
        <Container className="grid gap-6 sm:grid-cols-2">
          <article className="rounded-md border border-border bg-surface p-6">
            <h2 className="font-heading text-xl font-bold">المشاريع العقارية</h2>
            <p className="mt-2 text-text-secondary">نظام اتحاد الملاك، وقائمة المشاريع المتاحة.</p>
            <Link
              href="/investments/real-estate"
              className="mt-4 inline-block font-semibold text-accent-600 hover:underline"
            >
              استعرض المشاريع ←
            </Link>
          </article>
          <article className="rounded-md border border-border bg-surface p-6">
            <h2 className="font-heading text-xl font-bold">فرص أخرى</h2>
            <p className="mt-2 text-text-secondary">فرصة استثمار في التجارة الإلكترونية وفرص إدارة الفروع.</p>
            <Link
              href="/investments/opportunities"
              className="mt-4 inline-block font-semibold text-accent-600 hover:underline"
            >
              استعرض الفرص ←
            </Link>
          </article>
        </Container>
      </section>
    </>
  );
}
