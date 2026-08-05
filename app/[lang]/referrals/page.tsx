import { PlayCircle } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Locale, isLocale, siteCopy, testimonials } from "@/lib/site-content";

export default async function ReferralsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].referrals;

  return (
    <div className="section-space">
      <div className="container-shell space-y-10">
        <Reveal>
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Referrals</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials[locale].map((item, index) => (
            <Reveal key={item.name} delay={index * 0.08} className="h-full">
              <article className="flex h-full flex-col overflow-hidden rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] shadow-[0_18px_50px_rgba(16,38,64,0.08)]">
                <div className="flex h-56 items-center justify-center bg-[linear-gradient(135deg,rgba(16,38,64,0.94),rgba(28,97,123,0.72))] text-white">
                  <div className="text-center">
                    <PlayCircle className="mx-auto text-[var(--color-gold)]" size={42} />
                    <p className="mt-4 text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-sand-strong)]/80">Video slot</p>
                    <p className="mt-3 max-w-[15rem] text-sm leading-7 text-white/72">{t.videoNote}</p>
                  </div>
                </div>
                <div className="flex flex-1 flex-col space-y-4 p-6">
                  <h2 className="display-title text-4xl text-[var(--color-ink)]">{item.name}</h2>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">{item.title}</p>
                  <p className="text-sm leading-7 text-[var(--color-ink-soft)]">“{item.quote}”</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}