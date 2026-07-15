"use client";

import Reveal from "./Reveal";
import { useCountUp } from "./useCountUp";

const stats: { target: number; suffix: string; label: string }[] = [
  { target: 120, suffix: "M+", label: "Total reach for clients" },
  { target: 40, suffix: "k+", label: "Videos edited for clients" },
  { target: 8, suffix: "M+", label: "Revenue generated for clients" },
];

function Stat({ target, suffix, label }: (typeof stats)[number]) {
  const { ref, value } = useCountUp(target);
  return (
    <div ref={ref as React.RefObject<HTMLDivElement>} className="text-center">
      <dt className="sr-only">{label}</dt>
      <dd className="text-cz-3xl font-extrabold tracking-tight text-cz-ink sm:text-cz-4xl">
        {value}
        {suffix}
      </dd>
      <dd className="mt-2 text-cz-sm text-cz-ink-soft">{label}</dd>
    </div>
  );
}

export default function StoryStats() {
  return (
    <section id="story" className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto max-w-3xl rounded-cz-xl bg-cz-bg-alt p-8 shadow-cz-sm sm:p-12">
        <p className="text-center text-cz-xl font-medium leading-relaxed text-cz-ink sm:text-cz-2xl">
          We&rsquo;re a{" "}
          <span className="text-cz-accent">short-form</span> video editing
          agency helping creators and brands turn raw clips into{" "}
          <span className="text-cz-accent">viral Reels</span>, Shorts, and{" "}
          <span className="text-cz-accent">TikToks</span> — fast, engaging,
          and tailored to trends that perform.
        </p>

        <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-cz-border pt-8">
          {stats.map((stat) => (
            <Stat key={stat.label} {...stat} />
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
