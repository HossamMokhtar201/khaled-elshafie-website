import Reveal from "./Reveal";

const columns = [
  {
    heading: "Site",
    links: ["Home", "About", "Pricing", "Contact"],
  },
  {
    heading: "Services",
    links: ["Youtube Shorts", "Instagram Reels", "TikTok Videos"],
  },
  {
    heading: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer className="bg-cz-dark px-4 pb-8 pt-[var(--cz-section-y)] text-cz-on-dark sm:px-6">
      <Reveal className="mx-auto max-w-6xl">
        <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <span className="flex items-center gap-2">
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cz-accent text-cz-xs font-black text-cz-white">
                C
              </span>
              <span className="text-cz-lg font-extrabold">Clipzy</span>
            </span>
            <p className="mt-4 max-w-xs text-cz-sm text-cz-on-dark-soft">
              Placeholder footer description — short-form video editing
              agency, visual clone stage only.
            </p>
          </div>

          {columns.map((col) => (
            <div key={col.heading}>
              <p className="text-cz-sm font-bold text-cz-on-dark">
                {col.heading}
              </p>
              <ul className="mt-4 flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-cz-sm text-cz-on-dark-soft transition-colors hover:text-cz-on-dark"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-6 text-cz-xs text-cz-on-dark-soft sm:flex-row">
          <p>© 2026 Clipzy Preview. Internal reference build.</p>
          <p>Design cloned for review — not final content.</p>
        </div>
      </Reveal>
    </footer>
  );
}
