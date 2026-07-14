"use client";

import { useEffect, useRef, useState } from "react";

export default function StatsCounter({
  value,
  suffix = "",
  label,
}: {
  value: number;
  suffix?: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let frame: number;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        const reduceMotion = window.matchMedia(
          "(prefers-reduced-motion: reduce)",
        ).matches;
        const duration = reduceMotion ? 0 : 1200;
        const start = performance.now();

        const tick = (now: number) => {
          const progress =
            duration === 0 ? 1 : Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(eased * value));
          if (progress < 1) {
            frame = requestAnimationFrame(tick);
          }
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.3, rootMargin: "-40px 0px" },
    );
    observer.observe(el);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <dd className="font-heading text-4xl font-black text-text-on-dark sm:text-5xl">
        {display}
        {suffix}
      </dd>
      <dd className="mt-2 max-w-[12rem] text-sm text-text-on-dark-muted">
        {label}
      </dd>
    </div>
  );
}
