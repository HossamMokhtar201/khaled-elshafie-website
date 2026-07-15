"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";

const links = [
  { label: "All Pages", href: "#" },
  { label: "About", href: "#story" },
  { label: "Store", href: "#services" },
  { label: "Blog", href: "#pricing" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
      <div
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-cz-pill border border-cz-border/70 bg-cz-bg/80 px-4 py-2.5 backdrop-blur-md transition-shadow duration-300 sm:px-5 ${
          scrolled ? "shadow-cz-md" : "shadow-none"
        }`}
      >
        <a href="#top" className="flex items-center gap-2 ps-1">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cz-accent text-cz-xs font-black text-cz-white">
            C
          </span>
          <span className="text-cz-base font-extrabold tracking-tight">
            Clipzy
          </span>
        </a>

        <nav className="hidden items-center gap-7 text-cz-sm font-medium text-cz-ink-soft md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="transition-colors duration-[var(--cz-duration-micro)] hover:text-cz-ink"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button variant="primary" className="px-5 py-2.5 text-cz-xs">
            Book a Free Meeting
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Toggle menu"
          className="flex h-9 w-9 items-center justify-center rounded-full text-cz-ink md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" aria-hidden>
            {open ? (
              <path
                d="M6 6l12 12M18 6L6 18"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -8, height: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="mx-auto mt-2 max-w-6xl overflow-hidden rounded-cz-lg border border-cz-border/70 bg-cz-bg-alt shadow-cz-md md:hidden"
          >
            <nav className="flex flex-col gap-1 p-4 text-cz-sm font-medium text-cz-ink-soft">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="rounded-cz-sm px-3 py-2.5 hover:bg-cz-bg-subtle hover:text-cz-ink"
                >
                  {link.label}
                </a>
              ))}
              <Button variant="primary" className="mt-2 w-full text-cz-xs">
                Book a Free Meeting
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
