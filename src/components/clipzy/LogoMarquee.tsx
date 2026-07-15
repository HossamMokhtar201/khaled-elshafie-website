import Marquee from "./Marquee";
import Reveal from "./Reveal";

const logos = [
  "Craftgram",
  "Pulse",
  "Swift",
  "Sparkle",
  "Lumina Labs",
  "Craftgram",
  "Northline",
  "Verve",
];

export default function LogoMarquee() {
  return (
    <section className="px-4 py-10 sm:px-6 sm:py-14">
      <Reveal className="mx-auto mb-6 max-w-6xl text-center">
        <p className="text-cz-sm text-cz-ink-faint">
          Trusted by 10,000+ founders &amp; business owners
        </p>
      </Reveal>
      <Marquee className="mx-auto max-w-6xl">
        {logos.map((logo, i) => (
          <span
            key={`${logo}-${i}`}
            className="mx-6 flex items-center gap-2 text-cz-lg font-bold text-cz-ink-faint sm:mx-10"
          >
            <span className="h-2 w-2 rounded-full bg-cz-ink-faint" />
            {logo}
          </span>
        ))}
      </Marquee>
    </section>
  );
}
