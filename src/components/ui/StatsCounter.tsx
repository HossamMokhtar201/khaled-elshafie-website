"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

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
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    const duration = reduceMotion ? 0 : 1200;
    const start = performance.now();

    let frame: number;
    const tick = (now: number) => {
      const progress = duration === 0 ? 1 : Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      }
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, reduceMotion]);

  return (
    <div ref={ref} className="flex flex-col items-center text-center">
      <dt className="sr-only">{label}</dt>
      <dd className="font-heading text-4xl font-bold text-primary-700">
        {display}
        {suffix}
      </dd>
      <p className="mt-1 max-w-[10rem] text-sm text-text-secondary">{label}</p>
    </div>
  );
}
