import PlaceholderMedia from "./PlaceholderMedia";
import Reveal from "./Reveal";
import type { MediaTone } from "./PlaceholderMedia";

const steps: {
  index: string;
  title: string;
  copy: string;
  tone: MediaTone;
}[] = [
  {
    index: "01",
    title: "Give us your raw footage, it can be DSLR or iPhone",
    copy: "Placeholder copy describing how raw footage is dropped into the shared workspace, no formatting required.",
    tone: "slate",
  },
  {
    index: "02",
    title: "Our team instantly starts editing your videos",
    copy: "Placeholder copy describing the editing pipeline — pacing, captions, sound design, and color in one pass.",
    tone: "ember",
  },
  {
    index: "03",
    title: "Upload & start seeing results from day one",
    copy: "Placeholder copy describing publishing across every short-form platform straight from the shared drive.",
    tone: "dusk",
  },
];

export default function ProcessSteps() {
  return (
    <section className="px-4 py-[var(--cz-section-y)] sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-5 md:grid-cols-3">
        {steps.map((step, i) => (
          <Reveal
            key={step.index}
            delay={i * 0.1}
            className={`flex flex-col overflow-hidden rounded-cz-lg bg-cz-bg-alt p-5 shadow-cz-sm ${
              i === 1 ? "md:mt-8" : ""
            }`}
          >
            <span className="text-cz-xs font-bold text-cz-ink-faint">
              {step.index}
            </span>
            <h3 className="mt-3 text-cz-lg font-bold leading-snug text-cz-ink">
              {step.title}
            </h3>
            <p className="mt-2 text-cz-sm text-cz-ink-soft">{step.copy}</p>
            <PlaceholderMedia
              tone={step.tone}
              showPlay={false}
              className="mt-5 aspect-[4/3] w-full rounded-cz-md"
            />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
