import Link from "next/link";
import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import StatsCounter from "@/components/ui/StatsCounter";
import Reveal from "@/components/ui/Reveal";
import BrandCard from "@/components/cards/BrandCard";
import ProjectCard from "@/components/cards/ProjectCard";
import VideoCard from "@/components/cards/VideoCard";
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

export default function Home() {
  const featuredProjects = realEstateProjects.slice(0, 3);
  const featuredEpisodes = podcastEpisodes
    .filter((ep) => !ep.isPlaceholder)
    .slice(0, 2);
  const tickerQuotes = quotes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border bg-primary-900 py-24 text-text-inverse"
      >
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="font-quote text-2xl text-accent-400">
            {siteSettings.tagline}
          </p>
          <h1
            id="hero-heading"
            className="font-heading text-5xl font-extrabold"
          >
            {homeContent.hero.title}
          </h1>
          <p className="max-w-xl text-lg text-text-inverse/80">
            {homeContent.hero.subheadline}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button href={homeContent.hero.primaryCta.href} variant="primary">
              {homeContent.hero.primaryCta.label}
            </Button>
            <Link
              href={homeContent.hero.secondaryCta.href}
              className="rounded-sm border border-accent-500 px-6 py-3 font-semibold transition-colors duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:bg-primary-800"
            >
              {homeContent.hero.secondaryCta.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section
        aria-label="أرقام وإحصائيات"
        className="border-b border-border bg-bg-alt py-10"
      >
        <Container>
          <dl className="flex flex-wrap items-center justify-center gap-12">
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

      {/* Quotes ticker */}
      <section aria-label="من أقواله" className="py-10">
        <Container>
          <ul className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:justify-center">
            {tickerQuotes.map((q) => (
              <li
                key={q.id}
                className="font-quote text-lg text-primary-800 sm:border-e sm:border-border sm:pe-4 last:border-none"
              >
                &ldquo;{q.text}&rdquo;
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Brands */}
      <section
        aria-labelledby="brands-heading"
        className="border-t border-border py-16"
      >
        <Container>
          <Reveal>
            <h2
              id="brands-heading"
              className="mb-8 text-center font-heading text-3xl font-bold"
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

      {/* Consultations CTA */}
      <section
        aria-labelledby="consultations-cta-heading"
        className="border-y border-border bg-primary-800 py-16 text-text-inverse"
      >
        <Container className="text-center">
          <Reveal>
            <h2
              id="consultations-cta-heading"
              className="font-heading text-3xl font-bold"
            >
              {homeContent.consultationsCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-text-inverse/80">
              {homeContent.consultationsCta.description}
            </p>
            <Button
              href={homeContent.consultationsCta.cta.href}
              variant="primary"
              className="mt-6"
            >
              {homeContent.consultationsCta.cta.label}
            </Button>
          </Reveal>
        </Container>
      </section>

      {/* Real estate projects */}
      <section aria-labelledby="real-estate-heading" className="py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2
              id="real-estate-heading"
              className="font-heading text-3xl font-bold"
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
        className="border-t border-border bg-bg-alt py-16"
      >
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2
              id="content-heading"
              className="font-heading text-3xl font-bold"
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
      <section aria-labelledby="final-cta-heading" className="py-16">
        <Container className="text-center">
          <Reveal>
            <h2
              id="final-cta-heading"
              className="font-heading text-3xl font-bold"
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
