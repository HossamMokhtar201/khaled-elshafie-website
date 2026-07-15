import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatsCounter from "@/components/ui/StatsCounter";
import Reveal from "@/components/ui/Reveal";
import Marquee from "@/components/ui/Marquee";
import DraggableCarousel from "@/components/ui/DraggableCarousel";
import BrandCard from "@/components/cards/BrandCard";
import ProjectCard from "@/components/cards/ProjectCard";
import VideoCard from "@/components/cards/VideoCard";
import QuoteCard from "@/components/cards/QuoteCard";
import {
  siteSettings,
  homeContent,
  stats,
  quotes,
  mokhzangy,
  alibaba,
  realEstateProjects,
  podcastEpisodes,
} from "@/lib/content";

const trustItems = [
  "الإعلام 1",
  "الإعلام 2",
  "الإعلام 3",
  "الإعلام 4",
  "الإعلام 5",
];

export default function Home() {
  const featuredProjects = realEstateProjects.slice(0, 3);
  const featuredEpisodes = podcastEpisodes
    .filter((ep) => !ep.isPlaceholder)
    .slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="bg-primary-950 py-24 text-text-on-dark sm:py-32"
      >
        <Container className="flex flex-col items-center gap-6 text-center">
          <span className="inline-flex items-center gap-2 rounded-pill border border-white/15 px-4 py-1.5 text-sm text-text-on-dark-muted">
            <span aria-hidden="true" className="text-accent-500">
              ★
            </span>
            {siteSettings.tagline}
          </span>
          <h1
            id="hero-heading"
            className="max-w-4xl font-heading text-display font-black leading-[1.05]"
          >
            {homeContent.hero.title}
          </h1>
          <p className="max-w-xl text-lg text-text-on-dark-muted">
            {homeContent.hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Button href={homeContent.hero.primaryCta.href} variant="accent">
              {homeContent.hero.primaryCta.label} ↗
            </Button>
            <Link
              href={homeContent.hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-white/20 px-7 py-3.5 font-semibold text-text-on-dark transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:bg-white/10"
            >
              {homeContent.hero.secondaryCta.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* Trust marquee */}
      <section
        aria-label="موثوق من"
        className="border-b border-border bg-bg py-10"
      >
        <Container>
          <p className="mb-6 text-center text-sm text-text-muted">
            موثوق من رواد أعمال وأصحاب مشاريع
          </p>
        </Container>
        <Marquee
          items={trustItems.map((label) => (
            <span
              key={label}
              className="px-8 font-heading text-xl font-bold text-text-muted"
            >
              {label}
            </span>
          ))}
        />
      </section>

      {/* Stats Bar — dark section */}
      <section
        aria-label="أرقام وإحصائيات"
        className="bg-bg-dark-section py-16"
      >
        <Container>
          <dl className="flex flex-wrap items-center justify-center gap-12 sm:gap-20">
            {stats.map((stat) => (
              <StatsCounter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            ))}
          </dl>
        </Container>
      </section>

      {/* Brands */}
      <section aria-labelledby="brands-heading" className="py-20">
        <Container>
          <Reveal>
            <h2
              id="brands-heading"
              className="mb-10 text-center font-heading text-3xl font-extrabold sm:text-4xl"
            >
              البراندات
            </h2>
          </Reveal>
          <div className="grid gap-6 sm:grid-cols-2">
            <Reveal delay={0.05}>
              <BrandCard
                name={mokhzangy.name}
                tagline={mokhzangy.tagline}
                href="/brands/mokhzangy"
              />
            </Reveal>
            <Reveal delay={0.15}>
              <BrandCard
                name={alibaba.fullName}
                tagline={alibaba.tagline}
                href="/brands/alibaba"
                accentColor="var(--brand-alibaba-primary)"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Quotes carousel */}
      <section
        aria-labelledby="quotes-heading"
        className="border-t border-border bg-bg-alt py-20"
      >
        <Container>
          <Reveal>
            <h2
              id="quotes-heading"
              className="mb-10 text-center font-heading text-3xl font-extrabold sm:text-4xl"
            >
              من أقواله
            </h2>
          </Reveal>
          <DraggableCarousel
            items={quotes.map((q) => (
              <QuoteCard key={q.id} text={q.text} context={q.context} />
            ))}
          />
        </Container>
      </section>

      {/* Consultations CTA */}
      <section
        aria-labelledby="consultations-cta-heading"
        className="bg-primary-950 py-20 text-text-on-dark"
      >
        <Container className="text-center">
          <Reveal>
            <h2
              id="consultations-cta-heading"
              className="font-heading text-3xl font-extrabold sm:text-4xl"
            >
              {homeContent.consultationsCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-on-dark-muted">
              {homeContent.consultationsCta.description}
            </p>
            <Button
              href={homeContent.consultationsCta.cta.href}
              variant="accent"
              className="mt-6"
            >
              {homeContent.consultationsCta.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Real estate projects */}
      <section aria-labelledby="real-estate-heading" className="py-20">
        <Container>
          <div className="mb-10 flex items-center justify-between">
            <h2
              id="real-estate-heading"
              className="font-heading text-3xl font-extrabold sm:text-4xl"
            >
              أحدث المشاريع العقارية
            </h2>
            <Link
              href="/investments/real-estate"
              className="text-accent-600 hover:underline"
            >
              كل المشاريع ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {featuredProjects.map((project, i) => (
              <li key={project.slug}>
                <Reveal delay={i * 0.1}>
                  <ProjectCard
                    name={project.name}
                    location={project.location}
                    status={project.status}
                    href={`/investments/real-estate/${project.slug}`}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Content hub */}
      <section
        aria-labelledby="content-heading"
        className="border-t border-border bg-bg-alt py-20"
      >
        <Container>
          <div className="mb-10 flex items-center justify-between">
            <h2
              id="content-heading"
              className="font-heading text-3xl font-extrabold sm:text-4xl"
            >
              أحدث المحتوى
            </h2>
            <Link href="/content" className="text-accent-600 hover:underline">
              كل الحلقات ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {featuredEpisodes.map((ep, i) => (
              <li key={ep.id}>
                <Reveal delay={i * 0.1}>
                  <VideoCard
                    title={ep.title}
                    description={ep.description}
                    href={ep.youtubeUrl}
                  />
                </Reveal>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="final-cta-heading" className="py-20">
        <Container className="text-center">
          <Reveal>
            <h2
              id="final-cta-heading"
              className="font-heading text-3xl font-extrabold sm:text-4xl"
            >
              {homeContent.finalCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
              {homeContent.finalCta.description}
            </p>
            <Button
              href={homeContent.finalCta.cta.href}
              variant="secondary"
              className="mt-6"
            >
              {homeContent.finalCta.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
