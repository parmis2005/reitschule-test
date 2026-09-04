import type { Metadata } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  display: "swap",
  axes: ["opsz", "SOFT", "WONK"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Reitschule Sonnenhof — Reitunterricht, Beritt & Pferdepension",
  description:
    "Reitschule Sonnenhof: professioneller Reitunterricht für Kinder & Erwachsene, einfühlsamer Beritt und liebevolle Pferdepension. Jetzt Probestunde sichern.",
  keywords: [
    "Reitschule",
    "Reitunterricht",
    "Beritt",
    "Pferdepension",
    "Reiten lernen",
    "Reitstall",
  ],
  openGraph: {
    title: "Reitschule Sonnenhof",
    description:
      "Professioneller Reitunterricht, Beritt & Pferdepension in familiärer Atmosphäre.",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="de"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal">
        {children}
      </body>
    </html>
  );
}
