import Link from "next/link";
import { siteSettings } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-primary-900 text-text-inverse">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:grid-cols-3">
        <div>
          <h2 className="font-heading text-lg font-bold">
            {siteSettings.siteName}
          </h2>
          <p className="mt-2 text-sm text-text-inverse/70">
            {siteSettings.tagline}
          </p>
        </div>

        <nav aria-label="روابط سريعة">
          <h2 className="mb-3 font-heading text-sm font-bold text-accent-400">
            روابط سريعة
          </h2>
          <ul className="space-y-2 text-sm">
            {siteSettings.footer.quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-accent-400">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-3 font-heading text-sm font-bold text-accent-400">
            تواصل
          </h2>
          <ul className="space-y-2 text-sm">
            <li>
              <a
                href={siteSettings.contact.facebookUrl}
                className="hover:text-accent-400"
              >
                فيسبوك — {siteSettings.contact.facebookPageName}
              </a>
            </li>
            <li>
              <Link href="/contact" className="hover:text-accent-400">
                تواصل معنا
              </Link>
            </li>
          </ul>
          <ul className="mt-4 flex gap-4 text-sm">
            {siteSettings.footer.legalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="underline hover:text-accent-400"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-text-inverse/60">
        {siteSettings.footer.copyright}
      </div>
    </footer>
  );
}
