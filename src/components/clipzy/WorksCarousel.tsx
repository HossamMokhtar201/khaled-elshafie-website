"use client";

import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import PlaceholderMedia, { type MediaTone } from "./PlaceholderMedia";
import Reveal from "./Reveal";

const works: { handle: string; caption: string; tone: MediaTone }[] = [
  { handle: "@wellnesscoach", caption: "“This 30-second reel took us from 4K to 190K followers”", tone: "sunset" },
  { handle: "@dropify.co", caption: "“One editing team, six platforms, zero back and forth”", tone: "ocean" },
  { handle: "@iamphythe_amma", caption: "“I gained 15K followers in one month from this format”", tone: "berry" },
  { handle: "@wellnesscoach", caption: "“Short-form got us featured on the explore page twice”", tone: "dusk" },
  { handle: "@northline.studio", caption: "“Placeholder quote about repeatable reach on Reels”", tone: "ember" },
];

function ArrowIcon({ flipped = false }: { flipped?: boolean }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`h-4 w-4 ${flipped ? "rotate-180" : ""}`}
      fill="none"
      aria-hidden
    >
      <path
        d="M9 6l6 6-6 6"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorksCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    dragFree: true,
    direction: "rtl",
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect).on("reInit", onSelect).on("init", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto flex max-w-6xl flex-wrap items-end justify-between gap-4">
        <div className="text-center sm:text-start">
          <span className="inline-flex rounded-cz-pill border border-cz-border-strong px-3 py-1 text-cz-xs font-semibold text-cz-ink-soft">
            Portfolio
          </span>
          <h2 className="mt-3 text-cz-3xl font-extrabold tracking-tight">
            Recent works for{" "}
            <span className="text-cz-accent italic" style={{ fontFamily: "var(--font-cz-accent)" }}>
              clients
            </span>
          </h2>
        </div>
        <div className="hidden gap-2 sm:flex">
          <button
            type="button"
            onClick={() => emblaApi?.scrollPrev()}
            disabled={!canPrev}
            aria-label="Previous"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-cz-border-strong text-cz-ink transition-opacity disabled:opacity-30"
          >
            <ArrowIcon flipped />
          </button>
          <button
            type="button"
            onClick={() => emblaApi?.scrollNext()}
            disabled={!canNext}
            aria-label="Next"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-cz-ink text-cz-bg transition-opacity disabled:opacity-30"
          >
            <ArrowIcon />
          </button>
        </div>
      </Reveal>

      <Reveal delay={0.1} className="mx-auto mt-8 max-w-6xl overflow-hidden" >
        <div ref={emblaRef} className="overflow-hidden">
          <div className="flex gap-4">
            {works.map((work, i) => (
              <div
                key={`${work.handle}-${i}`}
                className="relative min-w-0 shrink-0 basis-[68%] overflow-hidden rounded-cz-lg sm:basis-[38%] lg:basis-[24%]"
              >
                <PlaceholderMedia
                  tone={work.tone}
                  className="aspect-[9/16] w-full transition-transform duration-500 ease-[var(--cz-ease-standard)] hover:scale-[1.03]"
                />
                <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent p-4">
                  <p className="text-cz-xs font-semibold text-white/90">
                    {work.handle}
                  </p>
                  <p className="mt-1 text-cz-sm font-medium leading-snug text-white">
                    {work.caption}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15} className="mx-auto mt-8 max-w-6xl text-center">
        <a
          href="#"
          className="inline-flex items-center gap-2 text-cz-sm font-semibold text-cz-ink-soft transition-colors hover:text-cz-ink"
        >
          View Our Works
          <ArrowIcon />
        </a>
      </Reveal>
    </section>
  );
}
