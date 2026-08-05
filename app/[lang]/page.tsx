import Link from "next/link";
import { ArrowRight, BadgeDollarSign, Building2, Globe2 } from "lucide-react";
import { notFound } from "next/navigation";
import { HeroSlider } from "@/components/hero-slider";
import { LoanCalculator } from "@/components/loan-calculator";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { Locale, downloads, getLocalizedPath, isLocale, properties, siteCopy, testimonials, zones } from "@/lib/site-content";

export default async function LocaleHome({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale];
  const featured = properties.filter((property) => property.featured).slice(0, 3);

  return (
    <>
      <HeroSlider locale={locale} />

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {t.home.valueCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 0.08} className="h-full">
              <article className="h-full rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8 shadow-[0_18px_50px_rgba(16,38,64,0.08)]">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">0{index + 1}</p>
                <h2 className="mt-5 display-title text-4xl text-[var(--color-ink)]">{card.title}</h2>
                <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{card.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space pt-0">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
          <Reveal>
            <div className="space-y-6">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">{t.home.processTitle}</p>
              <h2 className="display-title text-5xl text-[var(--color-ink)]">
                {locale === "es" ? "Compra, financia y cierra con un mismo ritmo." : "Search, finance, and close at one pace."}
              </h2>
              <p className="text-base leading-8 text-[var(--color-ink-soft)]">{t.home.countryTeaser}</p>
              <div className="space-y-4">
                {t.home.process.map((step, index) => (
                  <div key={step} className="flex gap-4 rounded-[1.75rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-5">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-sm font-bold text-white">
                      0{index + 1}
                    </div>
                    <p className="pt-2 text-sm leading-7 text-[var(--color-ink-soft)]">{step}</p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.12}>
            <LoanCalculator locale={locale} compact />
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[var(--color-white)]">
        <div className="container-shell">
          <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Portfolio</p>
              <h2 className="display-title mt-3 text-5xl text-[var(--color-ink)]">
                {locale === "es" ? "Propiedades destacadas" : "Featured properties"}
              </h2>
            </div>
            <Link href={getLocalizedPath(locale, "/properties")} className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-sea)]">
              {t.common.viewProperties}
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            {featured.map((property, index) => (
              <Reveal key={property.slug} delay={index * 0.08}>
                <PropertyCard locale={locale} property={property} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[2rem] bg-[var(--color-ink)] p-8 text-white lg:col-span-1">
            <BadgeDollarSign className="text-[var(--color-gold)]" size={28} />
            <h2 className="mt-6 display-title text-4xl">{siteCopy[locale].loans.title}</h2>
            <p className="mt-4 text-sm leading-7 text-white/72">{siteCopy[locale].loans.rates}</p>
            <Link href={getLocalizedPath(locale, "/loans")} className="mt-6 inline-flex rounded-full bg-[var(--color-gold)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)]">
              {t.common.calculateLoan}
            </Link>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8 lg:col-span-1">
            <Building2 className="text-[var(--color-sea)]" size={28} />
            <h2 className="mt-6 display-title text-4xl text-[var(--color-ink)]">{t.home.testimonialsTitle}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">“{testimonials[locale][0].quote}”</p>
            <p className="mt-4 text-sm font-semibold text-[var(--color-ink)]">{testimonials[locale][0].name}</p>
          </Reveal>
          <Reveal delay={0.16} className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8 lg:col-span-1">
            <Globe2 className="text-[var(--color-palm)]" size={28} />
            <h2 className="mt-6 display-title text-4xl text-[var(--color-ink)]">
              {locale === "es" ? "Costa Rica para extranjeros" : "Costa Rica for foreign buyers"}
            </h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{t.home.countryTeaser}</p>
            <Link href={getLocalizedPath(locale, "/about-costa-rica")} className="mt-6 inline-flex rounded-full border border-[rgba(16,38,64,0.12)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]">
              {locale === "es" ? "Conocer zonas" : "Explore areas"}
            </Link>
          </Reveal>
        </div>
      </section>

      <section className="section-space bg-[var(--color-white)]">
        <div className="container-shell grid gap-6 lg:grid-cols-3">
          {zones[locale].map((zone, index) => (
            <Reveal key={zone.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-sand)]">
                <div className="h-64 bg-cover bg-center" style={{ backgroundImage: `url(${zone.image})` }} />
                <div className="space-y-4 p-6">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">{zone.subtitle}</p>
                    <h3 className="mt-3 display-title text-4xl text-[var(--color-ink)]">{zone.title}</h3>
                  </div>
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{zone.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="section-space">
        <div className="container-shell rounded-[2.5rem] bg-[var(--color-ink)] px-8 py-12 text-white md:px-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_0.9fr] lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">{t.home.downloadsTitle}</p>
              <h2 className="mt-4 display-title text-5xl">{t.common.documentsReady}</h2>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {downloads[locale].slice(0, 4).map((item) => (
                <a key={item.href} href={item.href} className="rounded-[1.5rem] border border-white/12 bg-white/8 px-5 py-4 text-sm font-semibold text-white/82 hover:bg-white/14">
                  <span className="block text-xs uppercase tracking-[0.22em] text-[var(--color-sand-strong)]/75">{item.category}</span>
                  <span className="mt-2 block">{item.title}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}