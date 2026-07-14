import {
  Noto_Kufi_Arabic,
  IBM_Plex_Sans_Arabic,
  Aref_Ruqaa,
  Inter,
} from "next/font/google";

export const notoKufiArabic = Noto_Kufi_Arabic({
  variable: "--font-heading",
  subsets: ["arabic", "latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const ibmPlexSansArabic = IBM_Plex_Sans_Arabic({
  variable: "--font-body",
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const arefRuqaa = Aref_Ruqaa({
  variable: "--font-quote",
  subsets: ["arabic"],
  weight: ["400", "700"],
  display: "swap",
});

export const inter = Inter({
  variable: "--font-latin",
  subsets: ["latin"],
  display: "swap",
});
