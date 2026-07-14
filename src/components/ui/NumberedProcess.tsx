import Reveal from "@/components/ui/Reveal";

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  image?: string;
}

export default function NumberedProcess({ steps }: { steps: ProcessStep[] }) {
  return (
    <ol className="flex flex-col gap-16">
      {steps.map((step, i) => (
        <li key={step.number}>
          <Reveal>
            <div
              className={`grid items-center gap-8 sm:grid-cols-2 ${
                i % 2 === 1 ? "sm:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div
                className="flex aspect-video items-center justify-center rounded-lg bg-bg-alt text-text-muted"
                aria-hidden={!step.image}
              >
                {step.image ? (
                  <span className="text-sm">{step.image}</span>
                ) : (
                  <span className="text-sm">صورة توضيحية</span>
                )}
              </div>
              <div>
                <span className="inline-flex items-center justify-center rounded-full border border-border-strong px-3 py-1 font-heading text-sm font-extrabold text-accent-600">
                  {step.number}
                </span>
                <h3 className="mt-4 font-heading text-2xl font-extrabold text-text-primary sm:text-3xl">
                  {step.title}
                </h3>
                <p className="mt-3 text-text-secondary">{step.description}</p>
              </div>
            </div>
          </Reveal>
        </li>
      ))}
    </ol>
  );
}
