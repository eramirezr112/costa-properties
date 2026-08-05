import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { WhatsAppFloat } from "@/components/whatsapp-float";
import { isLocale, locales } from "@/lib/site-content";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <SiteHeader locale={lang} />
      <main>{children}</main>
      <SiteFooter locale={lang} />
      <WhatsAppFloat locale={lang} />
    </div>
  );
}