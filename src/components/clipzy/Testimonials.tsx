"use client";

import useEmblaCarousel from "embla-carousel-react";
import PlaceholderMedia, { type MediaTone } from "./PlaceholderMedia";
import Reveal from "./Reveal";

const testimonials: {
  name: string;
  handle: string;
  quote: string;
  tone: MediaTone;
}[] = [
  {
    name: "Jaiden Lee",
    handle: "3 Apps That Feel Illegal to Know",
    quote: "Their editing completely changed my content game. The Reels they delivered were snappy, on-trend, and exactly what my audience wanted.",
    tone: "slate",
  },
  {
    name: "Priya Anand",
    handle: "Stop Using Oil Like This",
    quote: "I never thought my Reels could look this professional — and the growth followed within weeks of switching editors.",
    tone: "ember",
  },
  {
    name: "Marcus Reyes",
    handle: "Founder, Northline Studio",
    quote: "Placeholder testimonial about turnaround time and how easy the whole handoff process was for our team.",
    tone: "ocean",
  },
  {
    name: "Sofia Bianchi",
    handle: "Creator, wellness & lifestyle",
    quote: "Placeholder testimonial about consistent posting cadence and how it grew a loyal audience over one quarter.",
    tone: "berry",
  },
];

export default function Testimonials() {
  const [emblaRef] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
  });

  return (
    <section className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto max-w-6xl text-center">
        <h2 className="text-cz-3xl font-extrabold tracking-tight">
          Loved by{" "}
          <span className="text-cz-accent italic" style={{ fontFamily: "var(--font-cz-accent)" }}>
            top creators
          </span>
        </h2>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-10 max-w-6xl overflow-hidden">
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="min-w-0 shrink-0 basis-[80%] overflow-hidden rounded-cz-lg bg-cz-bg-alt shadow-cz-sm sm:basis-[46%] lg:basis-[30%]"
              >
                <PlaceholderMedia
                  tone={t.tone}
                  showPlay={false}
                  className="aspect-[4/3] w-full"
                />
                <div className="p-5">
                  <p className="text-cz-sm leading-relaxed text-cz-ink-soft">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <span className="h-8 w-8 rounded-full bg-cz-bg-subtle" />
                    <div>
                      <p className="text-cz-sm font-bold text-cz-ink">
                        {t.name}
                      </p>
                      <p className="text-cz-xs text-cz-ink-faint">
                        {t.handle}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
