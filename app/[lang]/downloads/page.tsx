import { Download } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { Locale, downloads, isLocale, siteCopy } from "@/lib/site-content";

export default async function DownloadsPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].downloads;

  return (
    <div className="section-space">
      <div className="container-shell space-y-10">
        <Reveal>
          <div className="max-w-4xl space-y-5">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Downloads</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
          </div>
        </Reveal>
        <div className="grid gap-6 lg:grid-cols-2">
          {downloads[locale].map((item, index) => (
            <Reveal key={item.href} delay={index * 0.08}>
              <a href={item.href} className="flex items-center justify-between rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-6 shadow-[0_18px_50px_rgba(16,38,64,0.08)] hover:border-[var(--color-gold)]">
                <div>
                  <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">{item.category}</p>
                  <h2 className="mt-3 display-title text-4xl text-[var(--color-ink)]">{item.title}</h2>
                </div>
                <div className="rounded-full bg-[var(--color-ink)] p-4 text-white">
                  <Download size={18} />
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}