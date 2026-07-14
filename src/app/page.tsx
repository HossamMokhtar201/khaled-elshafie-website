import Link from "next/link";
import Container from "@/components/ui/Container";
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
  const featuredEpisodes = podcastEpisodes.filter((ep) => !ep.isPlaceholder).slice(0, 2);
  const tickerQuotes = quotes.slice(0, 3);

  return (
    <>
      {/* Hero */}
      <section
        aria-labelledby="hero-heading"
        className="border-b border-border bg-primary-900 py-24 text-text-inverse"
      >
        <Container className="flex flex-col items-center gap-6 text-center">
          <p className="font-quote text-2xl text-accent-400">{siteSettings.tagline}</p>
          <h1 id="hero-heading" className="font-heading text-5xl font-extrabold">
            {homeContent.hero.title}
          </h1>
          <p className="max-w-xl text-lg text-text-inverse/80">{homeContent.hero.subheadline}</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href={homeContent.hero.primaryCta.href}
              className="rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
            >
              {homeContent.hero.primaryCta.label}
            </Link>
            <Link
              href={homeContent.hero.secondaryCta.href}
              className="rounded-sm border border-accent-500 px-6 py-3 font-semibold hover:bg-primary-800"
            >
              {homeContent.hero.secondaryCta.label}
            </Link>
          </div>
        </Container>
      </section>

      {/* Stats Bar */}
      <section aria-label="أرقام وإحصائيات" className="border-b border-border bg-bg-alt py-10">
        <Container>
          <dl className="flex flex-wrap items-center justify-center gap-12">
            {stats.map((stat) => (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <dt className="sr-only">{stat.label}</dt>
                <dd className="font-heading text-4xl font-bold text-primary-700">
                  {stat.value}
                  {stat.suffix}
                </dd>
                <p className="mt-1 max-w-[10rem] text-sm text-text-secondary">{stat.label}</p>
              </div>
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
      <section aria-labelledby="brands-heading" className="border-t border-border py-16">
        <Container>
          <h2 id="brands-heading" className="mb-8 text-center font-heading text-3xl font-bold">
            البراندات
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <article className="rounded-md border border-border bg-surface p-6">
              <h3 className="font-heading text-xl font-bold">{mokhzangy.name}</h3>
              <p className="mt-2 text-text-secondary">{mokhzangy.tagline}</p>
              <Link
                href="/brands/mokhzangy"
                className="mt-4 inline-block font-semibold text-accent-600 hover:underline"
              >
                زور البراند ←
              </Link>
            </article>
            <article className="rounded-md border border-border bg-surface p-6">
              <h3 className="font-heading text-xl font-bold">{alibaba.fullName}</h3>
              <p className="mt-2 text-text-secondary">{alibaba.tagline}</p>
              <Link
                href="/brands/alibaba"
                className="mt-4 inline-block font-semibold text-accent-600 hover:underline"
              >
                زور البراند ←
              </Link>
            </article>
          </div>
        </Container>
      </section>

      {/* Consultations CTA */}
      <section aria-labelledby="consultations-cta-heading" className="border-y border-border bg-primary-800 py-16 text-text-inverse">
        <Container className="text-center">
          <h2 id="consultations-cta-heading" className="font-heading text-3xl font-bold">
            {homeContent.consultationsCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-inverse/80">
            {homeContent.consultationsCta.description}
          </p>
          <Link
            href={homeContent.consultationsCta.cta.href}
            className="mt-6 inline-block rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 hover:bg-accent-400"
          >
            {homeContent.consultationsCta.cta.label}
          </Link>
        </Container>
      </section>

      {/* Real estate projects */}
      <section aria-labelledby="real-estate-heading" className="py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 id="real-estate-heading" className="font-heading text-3xl font-bold">
              أحدث المشاريع العقارية
            </h2>
            <Link href="/investments/real-estate" className="text-accent-600 hover:underline">
              كل المشاريع ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-3">
            {featuredProjects.map((project) => (
              <li key={project.slug} className="rounded-md border border-border bg-surface p-5">
                <h3 className="font-heading text-lg font-bold">{project.name}</h3>
                <p className="mt-1 text-sm text-text-secondary">{project.location}</p>
                <Link
                  href={`/investments/real-estate/${project.slug}`}
                  className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline"
                >
                  تفاصيل المشروع ←
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Content hub */}
      <section aria-labelledby="content-heading" className="border-t border-border bg-bg-alt py-16">
        <Container>
          <div className="mb-8 flex items-center justify-between">
            <h2 id="content-heading" className="font-heading text-3xl font-bold">
              أحدث المحتوى
            </h2>
            <Link href="/content" className="text-accent-600 hover:underline">
              كل الحلقات ←
            </Link>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2">
            {featuredEpisodes.map((ep) => (
              <li key={ep.id} className="rounded-md border border-border bg-surface p-5">
                <h3 className="font-heading text-lg font-bold">{ep.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{ep.description}</p>
                <a
                  href={ep.youtubeUrl ?? undefined}
                  className="mt-3 inline-block text-sm font-semibold text-accent-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  مشاهدة الحلقة ←
                </a>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Final CTA */}
      <section aria-labelledby="final-cta-heading" className="py-16">
        <Container className="text-center">
          <h2 id="final-cta-heading" className="font-heading text-3xl font-bold">
            {homeContent.finalCta.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-text-secondary">
            {homeContent.finalCta.description}
          </p>
          <Link
            href={homeContent.finalCta.cta.href}
            className="mt-6 inline-block rounded-sm bg-primary-900 px-6 py-3 font-semibold text-text-inverse hover:bg-primary-700"
          >
            {homeContent.finalCta.cta.label}
          </Link>
        </Container>
      </section>
    </>
  );
}
