const gradients: Record<string, string> = {
  sunset: "linear-gradient(155deg, #2a2117 0%, #6b3a24 45%, #fb4b2c 100%)",
  ocean: "linear-gradient(155deg, #101616 0%, #1c3b3a 45%, #3f8f86 100%)",
  dusk: "linear-gradient(155deg, #17140f 0%, #40342a 50%, #d6a15a 100%)",
  berry: "linear-gradient(155deg, #1a1013 0%, #4a1f2e 45%, #c2456b 100%)",
  slate: "linear-gradient(155deg, #14120f 0%, #33302a 50%, #8a8272 100%)",
  ember: "linear-gradient(160deg, #1c1108 0%, #7a2c14 50%, #fb4b2c 100%)",
};

export type MediaTone = keyof typeof gradients;

function PlayGlyph() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6" aria-hidden>
      <path d="M8 5.5v13l11-6.5-11-6.5Z" fill="currentColor" />
    </svg>
  );
}

export default function PlaceholderMedia({
  tone = "sunset",
  className = "",
  showPlay = true,
  grain = true,
}: {
  tone?: MediaTone;
  className?: string;
  showPlay?: boolean;
  grain?: boolean;
}) {
  return (
    <div
      className={`relative flex items-center justify-center overflow-hidden ${className}`}
      style={{ background: gradients[tone] }}
    >
      {grain && (
        <div
          aria-hidden
          className="absolute inset-0 opacity-[0.12] mix-blend-overlay"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 20%, white 0%, transparent 45%), radial-gradient(circle at 80% 70%, white 0%, transparent 40%)",
          }}
        />
      )}
      {showPlay && (
        <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-cz-white/90 text-cz-ink shadow-cz-md backdrop-blur">
          <PlayGlyph />
        </span>
      )}
    </div>
  );
}
