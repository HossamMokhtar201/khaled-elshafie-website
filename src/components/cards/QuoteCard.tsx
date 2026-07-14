"use client";

import { useState } from "react";

export default function QuoteCard({
  text,
  context,
  shareable = false,
}: {
  text: string;
  context?: string;
  shareable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  return (
    <figure className="h-full rounded-lg border border-border bg-surface p-8 shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1.5 hover:shadow-hover">
      <span
        aria-hidden="true"
        className="mb-5 block h-1 w-10 rounded-full bg-accent-500"
      />
      <blockquote className="font-quote text-2xl font-extrabold leading-relaxed text-accent-600">
        &ldquo;{text}&rdquo;
      </blockquote>
      {context && (
        <figcaption className="mt-4 text-sm text-text-muted">
          {context}
        </figcaption>
      )}
      {shareable && (
        <button
          type="button"
          onClick={async () => {
            try {
              await navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            } catch {
              /* clipboard unavailable */
            }
          }}
          className="mt-4 text-sm font-semibold text-accent-600 hover:underline"
        >
          {copied ? "تم النسخ ✓" : "مشاركة"}
        </button>
      )}
    </figure>
  );
}
