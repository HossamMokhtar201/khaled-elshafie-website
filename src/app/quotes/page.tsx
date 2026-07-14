import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import { quotes } from "@/lib/content";

export const metadata: Metadata = { title: "بنك الاقتباسات" };

export default function QuotesPage() {
  return (
    <>
      <PageHero title="بنك الاقتباسات" description="جمل مقتبسة من تجربة خالد الشافعي الحقيقية في التجارة." />
      <section className="py-16">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2">
            {quotes.map((q) => (
              <li key={q.id} className="rounded-md border border-border bg-surface p-6">
                <p className="font-quote text-2xl text-primary-800">&ldquo;{q.text}&rdquo;</p>
                <p className="mt-3 text-sm text-text-muted">{q.context}</p>
                <button
                  type="button"
                  className="mt-4 text-sm font-semibold text-accent-600 hover:underline"
                >
                  مشاركة
                </button>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
