import Link from "next/link";
import { siteSettings, homeContent, stats } from "@/lib/content";

export default function Home() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-8 bg-primary-900 px-6 py-24 text-center text-text-inverse">
      <p className="font-quote text-2xl text-accent-400">{siteSettings.tagline}</p>
      <h1 className="font-heading text-5xl font-extrabold">{homeContent.hero.title}</h1>
      <p className="max-w-xl text-lg text-text-inverse/80">{homeContent.hero.subheadline}</p>
      <div className="flex flex-wrap items-center justify-center gap-4">
        <Link
          href={homeContent.hero.primaryCta.href}
          className="rounded-sm bg-accent-500 px-6 py-3 font-semibold text-primary-900 transition-colors hover:bg-accent-400"
        >
          {homeContent.hero.primaryCta.label}
        </Link>
        <Link
          href={homeContent.hero.secondaryCta.href}
          className="rounded-sm border border-accent-500 px-6 py-3 font-semibold text-text-inverse transition-colors hover:bg-primary-800"
        >
          {homeContent.hero.secondaryCta.label}
        </Link>
      </div>
      <dl className="mt-8 flex flex-wrap items-center justify-center gap-10">
        {stats.map((stat) => (
          <div key={stat.label} className="flex flex-col items-center">
            <dt className="sr-only">{stat.label}</dt>
            <dd className="font-heading text-4xl font-bold text-accent-400">
              {stat.value}
              {stat.suffix}
            </dd>
            <p className="mt-1 max-w-[10rem] text-sm text-text-inverse/70">{stat.label}</p>
          </div>
        ))}
      </dl>
      <p className="mt-6 text-xs text-text-inverse/50">
        Milestone 0 — Design Tokens &amp; Infrastructure Check ✓
      </p>
    </main>
  );
}
