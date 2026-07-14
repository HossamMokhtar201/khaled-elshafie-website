import type { Metadata } from "next";
import { notoKufiArabic, ibmPlexSansArabic, inter } from "@/lib/fonts";
import { siteSettings } from "@/lib/content";
import { siteUrl } from "@/lib/site-url";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteSettings.siteName,
    template: `%s | ${siteSettings.siteName}`,
  },
  description: siteSettings.metaDescription,
  openGraph: {
    title: siteSettings.siteName,
    description: siteSettings.metaDescription,
    url: siteUrl,
    siteName: siteSettings.siteName,
    locale: "ar_EG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: siteSettings.siteName,
    description: siteSettings.metaDescription,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ar"
      dir="rtl"
      className={`${notoKufiArabic.variable} ${ibmPlexSansArabic.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-bg text-text-primary">
        <Header />
        <main className="flex flex-1 flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
