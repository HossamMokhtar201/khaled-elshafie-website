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
    <figure className="rounded-md border border-border bg-surface p-6 shadow-sm transition-all duration-[var(--duration-micro)] ease-[var(--ease-standard)] hover:-translate-y-1 hover:border-accent-500 hover:shadow-md">
      <blockquote className="font-quote text-2xl leading-relaxed text-primary-800">
        &ldquo;{text}&rdquo;
      </blockquote>
      {context && <figcaption className="mt-3 text-sm text-text-muted">{context}</figcaption>}
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
