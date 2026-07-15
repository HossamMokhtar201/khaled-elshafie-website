import type { Metadata } from "next";
import Link from "next/link";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import NumberedProcess from "@/components/ui/NumberedProcess";
import Reveal from "@/components/ui/Reveal";
import QuoteCard from "@/components/cards/QuoteCard";
import { aboutContent, timeline, quotes, siteSettings } from "@/lib/content";

export const metadata: Metadata = {
  title: "من هو خالد الشافعي",
  description: aboutContent.intro,
};

const journeySteps = timeline.map((item, i) => ({
  number: String(i + 1).padStart(2, "0"),
  title: `${item.year} — ${item.title}`,
  description: item.description,
}));

export default function AboutPage() {
  return (
    <>
      <PageHero title="من هو خالد الشافعي" description={aboutContent.intro} />

      <section aria-labelledby="timeline-heading" className="py-20">
        <Container>
          <Reveal>
            <h2
              id="timeline-heading"
              className="mb-12 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              الرحلة الزمنية
            </h2>
          </Reveal>
          <NumberedProcess steps={journeySteps} />
        </Container>
      </section>

      <section
        aria-labelledby="philosophy-heading"
        className="border-t border-border bg-bg-alt py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="philosophy-heading"
              className="mb-4 font-heading text-3xl font-extrabold sm:text-4xl"
            >
              {aboutContent.philosophy.title}
            </h2>
            <p className="max-w-2xl text-text-secondary">
              {aboutContent.philosophy.paragraph}
            </p>
          </Reveal>
        </Container>
      </section>

      <section
        aria-labelledby="quotes-heading"
        className="border-t border-border py-20"
      >
        <Container>
          <div className="mb-10 flex items-center justify-between">
            <h2
              id="quotes-heading"
              className="font-heading text-3xl font-extrabold sm:text-4xl"
            >
              اقتباساته
            </h2>
            <Link href="/quotes" className="text-accent-600 hover:underline">
              كل الاقتباسات ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {quotes.slice(0, 4).map((q, i) => (
              <li key={q.id}>
                <Reveal delay={i * 0.08}>
                  <QuoteCard text={q.text} context={q.context} />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section
        aria-label="روابط التواصل"
        className="border-t border-border py-10"
      >
        <Container>
          <a
            href={siteSettings.contact.facebookUrl}
            className="text-accent-600 hover:underline"
          >
            تابع خالد الشافعي على فيسبوك —{" "}
            {siteSettings.contact.facebookPageName}
          </a>
        </Container>
      </section>
    </>
  );
}
