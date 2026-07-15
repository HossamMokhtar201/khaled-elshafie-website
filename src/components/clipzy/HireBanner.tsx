import Button from "./Button";
import Reveal from "./Reveal";

const perks = [
  {
    icon: "◆",
    title: "Save 50-70% on salaries",
    copy: "Placeholder copy about cost savings versus hiring an in-house team.",
  },
  {
    icon: "◷",
    title: "Hire within days",
    copy: "Placeholder copy about fast onboarding once the meeting is booked.",
  },
  {
    icon: "✓",
    title: "Expertly trained",
    copy: "Placeholder copy about the vetting and training process for editors.",
  },
];

export default function HireBanner() {
  return (
    <section className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto max-w-6xl overflow-hidden rounded-cz-xl bg-cz-accent p-8 text-cz-white sm:p-14">
        <div className="grid gap-8 lg:grid-cols-[1fr_1.2fr] lg:items-center">
          <div>
            <h2 className="text-cz-2xl font-extrabold leading-tight tracking-tight sm:text-cz-3xl">
              Hire top-tier talent quickly without any headaches.
            </h2>
            <Button variant="dark" className="mt-6">
              Book a Free Meeting
            </Button>
          </div>

          <div className="grid gap-3 sm:grid-cols-1">
            {perks.map((perk) => (
              <div
                key={perk.title}
                className="flex items-start gap-4 rounded-cz-md bg-white/10 p-4 backdrop-blur-sm"
              >
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-cz-sm bg-white/15 text-cz-lg">
                  {perk.icon}
                </span>
                <div>
                  <p className="font-bold">{perk.title}</p>
                  <p className="mt-1 text-cz-sm text-white/80">{perk.copy}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
