import Link from "next/link";
import { Camera, Music2, Video } from "lucide-react";
import { companyInfo, Locale, getLocalizedPath, navItems, siteCopy } from "@/lib/site-content";

type SiteFooterProps = {
  locale: Locale;
};

export function SiteFooter({ locale }: SiteFooterProps) {
  const t = siteCopy[locale];

  return (
    <footer className="mt-16 border-t border-[rgba(16,38,64,0.08)] bg-[var(--color-ink)] text-[var(--color-white)]">
      <div className="container-shell grid gap-10 py-14 md:grid-cols-[1.2fr_0.9fr_0.9fr]">
        <div className="space-y-4">
          <div>
            <p className="display-title text-4xl leading-none">Costa</p>
            <p className="mt-1 text-xs font-semibold uppercase tracking-[0.42em] text-[var(--color-sand-strong)]/80">
              Properties
            </p>
          </div>
          <p className="max-w-md text-sm leading-7 text-white/72">{t.footerTagline}</p>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">Menu</p>
          <div className="mt-4 grid gap-3 text-sm text-white/78">
            {navItems.map((item) => (
              <Link key={item.key} href={getLocalizedPath(locale, item.slug)} className="hover:text-white">
                {t.nav[item.key]}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold)]">Contact</p>
          <div className="mt-4 space-y-3 text-sm text-white/78">
            <p>{companyInfo.address[locale]}</p>
            <a href={`tel:${companyInfo.phone.replace(/\s+/g, "")}`} className="block hover:text-white">
              {companyInfo.phone}
            </a>
            <a href={`mailto:${companyInfo.email}`} className="block hover:text-white">
              {companyInfo.email}
            </a>
            <div className="flex items-center gap-3 pt-2">
              <a href={companyInfo.social.youtube} target="_blank" rel="noreferrer" className="rounded-full border border-white/12 p-2 hover:border-white/40 hover:text-white">
                <Video size={18} />
              </a>
              <a href={companyInfo.social.instagram} target="_blank" rel="noreferrer" className="rounded-full border border-white/12 p-2 hover:border-white/40 hover:text-white">
                <Camera size={18} />
              </a>
              <a href={companyInfo.social.tiktok} target="_blank" rel="noreferrer" className="rounded-full border border-white/12 p-2 hover:border-white/40 hover:text-white">
                <Music2 size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}