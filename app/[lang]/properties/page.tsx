import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { PropertiesBrowser } from "@/components/properties-browser";
import { Locale, isLocale, siteCopy } from "@/lib/site-content";

export default async function PropertiesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].propertiesPage;

  return (
    <div className="section-space">
      <div className="container-shell space-y-10">
        <Reveal>
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Properties</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <PropertiesBrowser locale={locale} />
        </Reveal>
      </div>
    </div>
  );
}