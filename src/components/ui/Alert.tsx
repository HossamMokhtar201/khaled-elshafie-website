import type { ReactNode } from "react";

type Tone = "success" | "danger" | "warning";

const tones: Record<Tone, string> = {
  success: "border-success bg-success/10 text-success",
  danger: "border-danger bg-danger/10 text-danger",
  warning: "border-accent-500 bg-accent-500/10 text-accent-600",
};

export default function Alert({
  tone = "success",
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <p
      role="status"
      className={`rounded-md border p-4 text-sm font-medium ${tones[tone]}`}
    >
      {children}
    </p>
  );
}
