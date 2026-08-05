import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const displayFont = Cormorant_Garamond({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://costaproperties.example"),
  title: {
    default: "Costa Properties",
    template: "%s | Costa Properties",
  },
  description:
    "Costa Properties conecta compradores e inversionistas con propiedades, financiamiento y asesoria local en Costa Rica.",
  keywords: [
    "Costa Rica real estate",
    "property financing",
    "homes for sale Costa Rica",
    "real estate loans",
    "Costa Properties",
  ],
  openGraph: {
    title: "Costa Properties",
    description:
      "Compra propiedades, explora oportunidades de inversion y calcula tu financiamiento en Costa Rica.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${displayFont.variable} ${bodyFont.variable} h-full scroll-smooth antialiased`}
    >
      <body className="min-h-full bg-[var(--color-sand)] text-[var(--color-ink)]">
        {children}
      </body>
    </html>
  );
}