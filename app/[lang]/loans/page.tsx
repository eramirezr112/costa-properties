import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { notFound } from "next/navigation";
import { LoanCalculator } from "@/components/loan-calculator";
import { Reveal } from "@/components/reveal";
import { Locale, getLocalizedPath, isLocale, siteCopy } from "@/lib/site-content";

export default async function LoansPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].loans;
  const common = siteCopy[locale].common;

  return (
    <div className="section-space">
      <div className="container-shell space-y-12">
        <Reveal>
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Loans</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          <Reveal className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
              {locale === "es" ? "Tipos de prestamos" : "Loan types"}
            </p>
            <div className="mt-6 grid gap-4">
              {t.types.map((item) => (
                <div key={item} className="flex gap-3 rounded-[1.5rem] bg-[var(--color-sand)] px-5 py-4">
                  <CheckCircle2 className="mt-1 text-[var(--color-sea)]" size={18} />
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{item}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm leading-7 text-[var(--color-ink)]">{t.rates}</p>
          </Reveal>

          <Reveal delay={0.08} className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-ink)] p-8 text-white">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">
              {locale === "es" ? "Perfiles" : "Profiles"}
            </p>
            <div className="mt-6 grid gap-5">
              <div className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5">
                <h2 className="display-title text-4xl">{locale === "es" ? "Nacionales" : "Nationals"}</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">{t.profiles.nationals}</p>
              </div>
              <div className="rounded-[1.5rem] border border-white/12 bg-white/7 p-5">
                <h2 className="display-title text-4xl">{locale === "es" ? "Extranjeros" : "Foreign buyers"}</h2>
                <p className="mt-3 text-sm leading-7 text-white/72">{t.profiles.foreigners}</p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <Reveal className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
              {locale === "es" ? "Requisitos" : "Requirements"}
            </p>
            <ul className="mt-6 space-y-4">
              {t.requirements.map((item) => (
                <li key={item} className="rounded-[1.4rem] bg-[var(--color-sand)] px-4 py-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.08} className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
              {locale === "es" ? "Proceso" : "Process"}
            </p>
            <ul className="mt-6 space-y-4">
              {t.process.map((item, index) => (
                <li key={item} className="flex gap-4 rounded-[1.4rem] bg-[var(--color-sand)] px-4 py-4">
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[var(--color-ink)] text-xs font-bold text-white">
                    0{index + 1}
                  </span>
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{item}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16} className="rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-8">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">
              {locale === "es" ? "Beneficios" : "Benefits"}
            </p>
            <ul className="mt-6 space-y-4">
              {t.benefits.map((item) => (
                <li key={item} className="rounded-[1.4rem] bg-[var(--color-sand)] px-4 py-4 text-sm leading-7 text-[var(--color-ink-soft)]">
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal>
          <LoanCalculator locale={locale} />
        </Reveal>

        <div className="flex flex-wrap gap-4">
          <Link href={getLocalizedPath(locale, "/contact")} className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-sea)]">
            {common.contactUs}
          </Link>
          <Link href={getLocalizedPath(locale, "/properties")} className="rounded-full border border-[rgba(16,38,64,0.14)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]">
            {common.viewProperties}
          </Link>
        </div>
      </div>
    </div>
  );
}