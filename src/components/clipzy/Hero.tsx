"use client";

import { motion } from "framer-motion";
import Button from "./Button";
import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";

function ArrowIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" aria-hidden>
      <path
        d="M7 17 17 7M9 7h8v8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-4 pt-14 sm:px-6 sm:pt-20">
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-24 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full border border-dashed border-cz-border-strong/70 sm:h-[720px] sm:w-[720px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute start-1/2 top-24 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full border border-dashed border-cz-border-strong/50 sm:h-[560px] sm:w-[560px]"
      />

      <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-cz-pill border border-cz-border-strong bg-cz-bg-alt px-4 py-1.5 text-cz-xs font-semibold text-cz-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-cz-accent" />
            A cult favorite on the internet
          </span>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="mt-6 text-cz-display font-extrabold leading-[1.02] tracking-tight text-cz-ink">
            Agency that makes your
            <br />
            <span
              className="font-cz-accent font-normal italic text-cz-ink/90"
              style={{ fontFamily: "var(--font-cz-accent)" }}
            >
              videos &amp; reels
            </span>{" "}
            <span className="text-cz-accent">viral</span>
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="mt-6 max-w-xl text-cz-lg text-cz-ink-soft">
            Short-form video editing for influencers, creators, and brands —
            placeholder copy for the visual clone stage.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button variant="primary" icon={<ArrowIcon />}>
              Book a Free Meeting
            </Button>
            <Button variant="outline">View Our Works</Button>
          </div>
        </Reveal>
      </div>

      <Reveal delay={0.3} className="relative mx-auto mt-14 max-w-5xl">
        <div className="relative overflow-hidden rounded-cz-xl shadow-cz-lg">
          <PlaceholderMedia
            tone="sunset"
            showPlay={false}
            className="aspect-[16/9] w-full"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, -8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 0.9 },
            y: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.9 },
          }}
          className="absolute -top-4 end-4 hidden items-center gap-2 rounded-cz-md bg-cz-white px-4 py-3 shadow-cz-md sm:flex sm:end-8"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-cz-accent-soft text-cz-accent">
            <ArrowIcon className="h-4 w-4" />
          </span>
          <span className="text-cz-sm font-semibold text-cz-ink">
            See This Template
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { duration: 0.6, delay: 1.1 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.1 },
          }}
          className="absolute -bottom-6 start-4 hidden items-center gap-3 rounded-cz-md bg-cz-ink px-4 py-3 text-cz-bg shadow-cz-md sm:flex sm:start-10"
        >
          <span className="text-cz-sm font-semibold">
            Unlock 300+ Templates
          </span>
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cz-accent text-cz-white">
            <ArrowIcon className="h-3.5 w-3.5" />
          </span>
        </motion.div>
      </Reveal>
    </section>
  );
}
