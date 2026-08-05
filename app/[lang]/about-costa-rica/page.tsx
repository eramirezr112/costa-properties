import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Locale, isLocale, siteCopy, zones } from "@/lib/site-content";

export default async function AboutCostaRicaPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].about;

  return (
    <div className="section-space">
      <div className="container-shell space-y-10">
        <Reveal>
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Costa Rica</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {zones[locale].map((zone, index) => (
            <Reveal key={zone.title} delay={index * 0.08}>
              <article className="overflow-hidden rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] shadow-[0_18px_50px_rgba(16,38,64,0.08)]">
                <div className="h-72 bg-cover bg-center" style={{ backgroundImage: `url(${zone.image})` }} />
                <div className="p-6">
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">{zone.subtitle}</p>
                  <h2 className="mt-3 display-title text-4xl text-[var(--color-ink)]">{zone.title}</h2>
                  <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{zone.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <div className="rounded-[2.5rem] bg-[var(--color-ink)] px-8 py-10 text-white md:px-12">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">{locale === "es" ? "Por que invertir aqui" : "Why invest here"}</p>
            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {t.reasons.map((reason) => (
                <div key={reason} className="rounded-[1.75rem] border border-white/10 bg-white/8 p-5 text-sm leading-7 text-white/78">
                  {reason}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </div>
  );
}