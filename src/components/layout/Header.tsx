"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { siteSettings } from "@/lib/content";
import Drawer from "@/components/ui/Drawer";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 80);
      setHidden(y > lastScrollY.current && y > 160);
      lastScrollY.current = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 border-b border-border bg-surface/95 backdrop-blur transition-transform duration-[var(--duration-micro)] ease-[var(--ease-standard)] ${
        hidden ? "-translate-y-full" : "translate-y-0"
      } ${scrolled ? "shadow-sm" : ""}`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link
          href="/"
          className="font-heading text-xl font-bold text-primary-900"
        >
          {siteSettings.siteName}
        </Link>

        <nav aria-label="التنقل الرئيسي" className="hidden md:block">
          <ul className="flex flex-wrap items-center gap-4 text-sm">
            {siteSettings.nav.map((item) => (
              <li key={item.href} className="relative">
                {item.children ? (
                  <details className="group">
                    <summary className="cursor-pointer list-none text-text-primary hover:text-accent-600">
                      {item.label}
                    </summary>
                    <ul className="absolute z-10 mt-2 min-w-[10rem] rounded-md border border-border bg-surface py-2 shadow-md">
                      {item.children.map((child) => (
                        <li key={child.href}>
                          <Link
                            href={child.href}
                            className="block px-4 py-2 text-text-primary hover:bg-bg-alt"
                          >
                            {child.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link
                    href={item.href}
                    className="relative text-text-primary transition-colors duration-[var(--duration-micro)] hover:text-accent-600 after:absolute after:-bottom-1 after:start-0 after:h-0.5 after:w-0 after:bg-accent-500 after:transition-all after:duration-[var(--duration-micro)] hover:after:w-full"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href={siteSettings.primaryCta.href}
            className="hidden whitespace-nowrap rounded-pill bg-accent-500 px-5 py-2.5 text-sm font-semibold text-primary-950 transition-colors duration-[var(--duration-micro)] hover:bg-accent-400 sm:inline-block"
          >
            {siteSettings.primaryCta.label}
          </Link>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="فتح القائمة"
            className="rounded-sm p-2 text-text-primary hover:bg-bg-alt md:hidden"
          >
            <span aria-hidden="true" className="block text-xl">
              ☰
            </span>
          </button>
        </div>
      </div>

      <Drawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        title={siteSettings.siteName}
      >
        <nav aria-label="التنقل الرئيسي (موبايل)">
          <ul className="space-y-1">
            {siteSettings.nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="block rounded-sm px-2 py-2 font-semibold text-text-primary hover:bg-bg-alt"
                >
                  {item.label}
                </Link>
                {item.children && (
                  <ul className="ms-4 space-y-1">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          onClick={() => setMobileOpen(false)}
                          className="block rounded-sm px-2 py-2 text-sm text-text-secondary hover:bg-bg-alt"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
          <Link
            href={siteSettings.primaryCta.href}
            onClick={() => setMobileOpen(false)}
            className="mt-6 block rounded-pill bg-accent-500 px-5 py-3 text-center font-semibold text-primary-950 hover:bg-accent-400"
          >
            {siteSettings.primaryCta.label}
          </Link>
        </nav>
      </Drawer>
    </header>
  );
}
