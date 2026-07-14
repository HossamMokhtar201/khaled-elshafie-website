"use client";

import { useCallback, useEffect, useState, type ReactNode } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function DraggableCarousel({ items }: { items: ReactNode[] }) {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    direction: "rtl",
    loop: false,
    align: "start",
    dragFree: false,
  });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = requestAnimationFrame(onSelect);
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => cancelAnimationFrame(frame);
  }, [emblaApi, onSelect]);

  return (
    <div>
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex gap-6">
          {items.map((item, i) => (
            <div
              key={i}
              className="min-w-0 flex-[0_0_85%] sm:flex-[0_0_45%] lg:flex-[0_0_32%]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => emblaApi?.scrollPrev()}
          disabled={!canPrev}
          aria-label="السابق"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text-primary transition-colors duration-[var(--duration-micro)] hover:border-accent-500 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-30"
        >
          →
        </button>
        <button
          type="button"
          onClick={() => emblaApi?.scrollNext()}
          disabled={!canNext}
          aria-label="التالي"
          className="flex h-11 w-11 items-center justify-center rounded-full border border-border-strong text-text-primary transition-colors duration-[var(--duration-micro)] hover:border-accent-500 hover:text-accent-600 disabled:cursor-not-allowed disabled:opacity-30"
        >
          ←
        </button>
      </div>
    </div>
  );
}
