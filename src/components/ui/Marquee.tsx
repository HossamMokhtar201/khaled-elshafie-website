import type { ReactNode } from "react";

export default function Marquee({ items }: { items: ReactNode[] }) {
  const doubled = [...items, ...items];

  return (
    <div
      className="group relative overflow-hidden [mask-image:linear-gradient(to_left,transparent,black_10%,black_90%,transparent)]"
      aria-hidden="true"
    >
      <div
        className="flex w-max items-center gap-16 py-2 group-hover:[animation-play-state:paused]"
        style={{ animation: "marquee var(--duration-marquee) linear infinite" }}
      >
        {doubled.map((item, i) => (
          <div key={i} className="flex shrink-0 items-center">
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}
