import { Camera, Mail, MapPin, Music2, Phone, Video } from "lucide-react";
import { notFound } from "next/navigation";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { companyInfo, Locale, isLocale, siteCopy } from "@/lib/site-content";

export default async function ContactPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const t = siteCopy[locale].contact;

  return (
    <div className="section-space">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.88fr_1.12fr] lg:items-start">
        <Reveal>
          <div className="space-y-6">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Contact</p>
            <h1 className="display-title text-6xl text-[var(--color-ink)]">{t.title}</h1>
            <p className="text-lg leading-8 text-[var(--color-ink-soft)]">{t.intro}</p>
            <div className="grid gap-4">
              <div className="rounded-[1.75rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-5">
                <div className="flex items-center gap-3 text-[var(--color-ink)]">
                  <MapPin size={18} />
                  <span>{companyInfo.address[locale]}</span>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-5">
                <div className="flex items-center gap-3 text-[var(--color-ink)]">
                  <Phone size={18} />
                  <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`}>{companyInfo.phone}</a>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-5">
                <div className="flex items-center gap-3 text-[var(--color-ink)]">
                  <Mail size={18} />
                  <a href={`mailto:${companyInfo.email}`}>{companyInfo.email}</a>
                </div>
              </div>
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">Social</p>
              <div className="mt-4 flex gap-3">
                <a href={companyInfo.social.youtube} target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(16,38,64,0.12)] p-3 text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]"><Video size={18} /></a>
                <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(16,38,64,0.12)] p-3 text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]"><Camera size={18} /></a>
                <a href={companyInfo.social.tiktok} target="_blank" rel="noreferrer" className="rounded-full border border-[rgba(16,38,64,0.12)] p-3 text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]"><Music2 size={18} /></a>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ContactForm locale={locale} />
        </Reveal>
      </div>
    </div>
  );
}