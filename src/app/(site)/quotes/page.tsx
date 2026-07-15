import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import PageHero from "@/components/ui/PageHero";
import QuoteCard from "@/components/cards/QuoteCard";
import { quotes } from "@/lib/content";

export const metadata: Metadata = { title: "بنك الاقتباسات" };

export default function QuotesPage() {
  return (
    <>
      <PageHero
        title="بنك الاقتباسات"
        description="جمل مقتبسة من تجربة خالد الشافعي الحقيقية في التجارة."
      />
      <section className="py-16">
        <Container>
          <ul className="grid gap-6 sm:grid-cols-2">
            {quotes.map((q, i) => (
              <li key={q.id}>
                <Reveal delay={(i % 4) * 0.08}>
                  <QuoteCard text={q.text} context={q.context} shareable />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>
    </>
  );
}
