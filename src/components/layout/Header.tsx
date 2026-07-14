import Link from "next/link";
import { siteSettings } from "@/lib/content";

export default function Header() {
  return (
    <header className="border-b border-border bg-surface">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4">
        <Link href="/" className="font-heading text-xl font-bold text-primary-900">
          {siteSettings.siteName}
        </Link>

        <nav aria-label="التنقل الرئيسي">
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
                  <Link href={item.href} className="text-text-primary hover:text-accent-600">
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>

        <Link
          href={siteSettings.primaryCta.href}
          className="whitespace-nowrap rounded-sm bg-accent-500 px-4 py-2 text-sm font-semibold text-primary-900 hover:bg-accent-400"
        >
          {siteSettings.primaryCta.label}
        </Link>
      </div>
    </header>
  );
}
