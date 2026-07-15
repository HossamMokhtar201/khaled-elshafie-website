"use client";

import { useState } from "react";
import Button from "./Button";
import Reveal from "./Reveal";

const plans = [
  {
    name: "Clipzient",
    monthly: 299,
    payAsYouGo: 349,
    features: [
      "4 Videos per week",
      "48-hour turnaround",
      "Basic motion graphics",
      "Shared editing dashboard",
    ],
    variant: "outline" as const,
  },
  {
    name: "ProFlow",
    monthly: 599,
    payAsYouGo: 699,
    features: [
      "10 Videos per week",
      "24-hour turnaround",
      "Advanced motion graphics",
      "Priority Slack channel",
      "Dedicated video strategist",
    ],
    variant: "secondary" as const,
    featured: true,
  },
  {
    name: "WallFlowd",
    monthly: null,
    payAsYouGo: null,
    features: [
      "Unlimited videos",
      "Same-day turnaround",
      "Custom brand kit",
      "Dedicated pod of editors",
    ],
    variant: "outline" as const,
  },
];

export default function Pricing() {
  const [monthly, setMonthly] = useState(true);

  return (
    <section id="pricing" className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <Reveal className="mx-auto max-w-3xl text-center">
        <h2 className="text-cz-3xl font-extrabold tracking-tight">
          Pay monthly or{" "}
          <span className="text-cz-accent italic" style={{ fontFamily: "var(--font-cz-accent)" }}>
            pay as you need
          </span>
        </h2>
        <p className="mt-3 text-cz-base text-cz-ink-soft">
          Placeholder copy describing flexible plans with no long-term
          contracts.
        </p>

        <div className="mx-auto mt-6 inline-flex items-center gap-3 rounded-cz-pill border border-cz-border-strong bg-cz-bg-alt p-1.5">
          <span
            className={`px-3 text-cz-sm font-semibold ${monthly ? "text-cz-ink" : "text-cz-ink-faint"}`}
          >
            Monthly
          </span>
          <button
            type="button"
            role="switch"
            aria-checked={!monthly}
            onClick={() => setMonthly((v) => !v)}
            className="relative h-7 w-12 rounded-cz-pill bg-cz-ink transition-colors"
          >
            <span
              className={`absolute top-1 h-5 w-5 rounded-full bg-cz-white shadow-cz-sm transition-[inset-inline-start] duration-[var(--cz-duration-hover)] ease-[var(--cz-ease-standard)] ${
                monthly ? "start-1" : "start-6"
              }`}
            />
          </button>
          <span
            className={`px-3 text-cz-sm font-semibold ${!monthly ? "text-cz-ink" : "text-cz-ink-faint"}`}
          >
            Pay as you need
          </span>
        </div>
      </Reveal>

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 md:grid-cols-3">
        {plans.map((plan, i) => (
          <Reveal
            key={plan.name}
            delay={i * 0.1}
            className={`flex flex-col rounded-cz-lg p-6 ${
              plan.featured
                ? "bg-cz-ink text-cz-bg shadow-cz-lg md:-mt-4 md:mb-4"
                : "bg-cz-bg-alt text-cz-ink shadow-cz-sm"
            }`}
          >
            <h3 className="text-cz-lg font-bold">{plan.name}</h3>
            <div className="mt-3 flex items-baseline gap-1">
              {plan.monthly ? (
                <>
                  <span className="text-cz-3xl font-extrabold">
                    ${monthly ? plan.monthly : plan.payAsYouGo}
                  </span>
                  <span
                    className={`text-cz-sm ${plan.featured ? "text-cz-bg/60" : "text-cz-ink-faint"}`}
                  >
                    /mo
                  </span>
                </>
              ) : (
                <span className="text-cz-3xl font-extrabold">Custom</span>
              )}
            </div>

            <ul className="mt-6 flex flex-1 flex-col gap-3 text-cz-sm">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <span
                    className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[0.6rem] ${
                      plan.featured
                        ? "bg-cz-accent text-cz-white"
                        : "bg-cz-accent-soft text-cz-accent"
                    }`}
                  >
                    ✓
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <Button
              variant={plan.featured ? "secondary" : "primary"}
              className="mt-8 w-full"
            >
              {plan.monthly ? "Get Started" : "Book a Free Meeting"}
            </Button>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
