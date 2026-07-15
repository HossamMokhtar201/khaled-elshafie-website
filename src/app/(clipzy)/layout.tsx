import type { Metadata } from "next";
import { plusJakartaSans, instrumentSerif, cairo } from "@/lib/clipzy-fonts";
import "./globals.css";

export const metadata: Metadata = {
  title: "Clipzy Home Clone Preview",
  description:
    "Internal visual/interaction reference build — not a public page.",
  robots: { index: false, follow: false },
};

export default function ClipzyRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      dir="rtl"
      className={`cz-scope ${plusJakartaSans.variable} ${instrumentSerif.variable} ${cairo.variable} antialiased`}
    >
      <body className="bg-cz-bg text-cz-ink">{children}</body>
    </html>
  );
}
