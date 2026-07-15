import Reveal from "./Reveal";

const services: { title: string; icon: string; big?: boolean }[] = [
  { title: "Youtube Shorts", icon: "▶" },
  { title: "Instagram Reels", icon: "◎" },
  { title: "TikTok Videos", icon: "♪" },
  { title: "Video Edits & Content Creation", icon: "✂", big: true },
  { title: "Motion Graphics & Animation Design", icon: "✺", big: true },
];

export default function ServicesGrid() {
  return (
    <section id="services" className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto max-w-6xl text-center">
        <span className="inline-flex rounded-cz-pill border border-cz-border-strong px-3 py-1 text-cz-xs font-semibold text-cz-ink-soft">
          Services we offer
        </span>
        <h2 className="mt-3 text-cz-3xl font-extrabold tracking-tight">
          Everything you need{" "}
          <span className="text-cz-accent italic" style={{ fontFamily: "var(--font-cz-accent)" }}>
            for views
          </span>
        </h2>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-6">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            delay={i * 0.06}
            className={`group flex flex-col justify-between rounded-cz-lg bg-cz-bg-alt p-6 shadow-cz-sm transition-all duration-[var(--cz-duration-hover)] ease-[var(--cz-ease-standard)] hover:-translate-y-1 hover:shadow-cz-md lg:col-span-2 ${
              service.big ? "lg:col-span-3" : ""
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-cz-sm bg-cz-bg-subtle text-cz-xl text-cz-accent transition-colors duration-[var(--cz-duration-hover)] group-hover:bg-cz-accent group-hover:text-cz-white">
              {service.icon}
            </span>
            <span className="mt-6 text-cz-lg font-bold text-cz-ink">
              {service.title}
            </span>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
