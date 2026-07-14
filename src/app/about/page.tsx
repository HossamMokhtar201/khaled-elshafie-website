import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import Timeline from "@/components/ui/Timeline";
import QuoteCard from "@/components/cards/QuoteCard";
import { aboutContent, timeline, quotes, siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "من هو خالد الشافعي",
  description: aboutContent.intro,
};

export default function AboutPage() {
  return (
    <>
      <PageHero title="من هو خالد الشافعي" description={aboutContent.intro} />

      <section aria-labelledby="timeline-heading" className="py-16">
        <Container>
          <h2 id="timeline-heading" className="mb-8 font-heading text-3xl font-bold">
            الرحلة الزمنية
          </h2>
          <Timeline items={timeline} />
        </Container>
      </section>

      <section aria-labelledby="philosophy-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <h2 id="philosophy-heading" className="mb-4 font-heading text-3xl font-bold">
            {aboutContent.philosophy.title}
          </h2>
          <p className="max-w-2xl text-text-secondary">{aboutContent.philosophy.paragraph}</p>
        </Container>
      </section>

      <section aria-labelledby="quotes-heading" className="border-t border-border py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 id="quotes-heading" className="font-heading text-3xl font-bold">
              اقتباساته
            </h2>
            <Link href="/quotes" className="text-accent-600 hover:underline">
              كل الاقتباسات ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {quotes.slice(0, 4).map((q) => (
              <li key={q.id}>
                <QuoteCard text={q.text} context={q.context} />
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section aria-label="روابط التواصل" className="border-t border-border py-10">
        <Container>
          <a href={siteSettings.contact.facebookUrl} className="text-accent-600 hover:underline">
            تابع خالد الشافعي على فيسبوك — {siteSettings.contact.facebookPageName}
          </a>
        </Container>
      </section>
    </>
  );
}
