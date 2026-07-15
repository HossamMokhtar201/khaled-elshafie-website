import { Plus_Jakarta_Sans, Instrument_Serif, Cairo } from "next/font/google";

export const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--cz-font-latin",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  display: "swap",
});

export const instrumentSerif = Instrument_Serif({
  variable: "--cz-font-serif-italic",
  subsets: ["latin"],
  weight: ["400"],
  style: ["italic"],
  display: "swap",
});

// Loaded ahead of need: this route's copy is English/Lorem placeholder for
// now, but the page is built RTL-ready so Arabic copy can drop in later
// without a font swap — Cairo is wired into --cz-font-arabic already.
export const cairo = Cairo({
  variable: "--cz-font-cairo",
  subsets: ["arabic", "latin"],
  weight: ["700", "800", "900"],
  display: "swap",
});
