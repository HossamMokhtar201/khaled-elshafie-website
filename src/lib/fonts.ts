import {
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Inter,
} from "next/font/google";

export const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});
