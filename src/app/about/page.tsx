import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
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
          <ol className="space-y-6 border-e-2 border-accent-500 pe-6">
            {timeline.map((stop) => (
              <li key={stop.title}>
                <p className="font-heading text-sm font-bold text-accent-600">{stop.year}</p>
                <h3 className="font-heading text-lg font-bold">{stop.title}</h3>
                <p className="mt-1 text-text-secondary">{stop.description}</p>
              </li>
            ))}
          </ol>
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
              <li key={q.id} className="rounded-md border border-border bg-surface p-5">
                <p className="font-quote text-xl text-primary-800">&ldquo;{q.text}&rdquo;</p>
                <p className="mt-2 text-sm text-text-muted">{q.context}</p>
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
