"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Locale, getLocalizedPath, navItems, siteCopy } from "@/lib/site-content";

type SiteHeaderProps = {
  locale: Locale;
};

export function SiteHeader({ locale }: SiteHeaderProps) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const t = siteCopy[locale];
  const alternate = locale === "es" ? "en" : "es";
  const alternatePath = pathname
    ? `/${alternate}${pathname.replace(/^\/(es|en)/, "")}`
    : getLocalizedPath(alternate);

  return (
    <header className="sticky top-0 z-50 border-b border-[rgba(16,38,64,0.08)] bg-[rgba(247,244,238,0.86)] backdrop-blur-xl">
      <div className="container-shell flex items-center justify-between gap-4 py-2">
        <Link href={getLocalizedPath(locale)} className="flex items-center gap-3">
          <Image
            src="/costa-properties-logo.png"
            alt="Costa Properties"
            width={110}
            height={76}
            priority
            className="h-auto w-20 sm:w-22"
          />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {navItems.map((item) => {
            const href = getLocalizedPath(locale, item.slug);
            const active = pathname === href;
            const label = t.nav[item.key];

            return (
              <Link
                key={item.key}
                href={href}
                className={`text-xs font-semibold tracking-[0.12em] uppercase ${
                  active ? "text-[var(--color-sea)]" : "text-[var(--color-ink)]/72 hover:text-[var(--color-sea)]"
                }`}
              >
                {label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Link
            href={alternatePath}
            className="rounded-full border border-[rgba(16,38,64,0.12)] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]"
          >
            {t.otherLocaleName}
          </Link>
          <Link
            href={getLocalizedPath(locale, "/contact")}
            className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-sea)]"
          >
            {t.common.contactUs}
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[rgba(16,38,64,0.12)] text-[var(--color-ink)] lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle navigation"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="border-t border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] lg:hidden">
          <div className="container-shell flex flex-col gap-3 py-5">
            {navItems.map((item) => {
              const href = getLocalizedPath(locale, item.slug);
              return (
                <Link
                  key={item.key}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="rounded-2xl border border-[rgba(16,38,64,0.08)] px-4 py-3 text-sm font-semibold text-[var(--color-ink)]"
                >
                  {t.nav[item.key]}
                </Link>
              );
            })}
            <div className="flex items-center gap-3 pt-2">
              <Link
                href={alternatePath}
                onClick={() => setOpen(false)}
                className="rounded-full border border-[rgba(16,38,64,0.12)] px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-[var(--color-ink)]"
              >
                {t.otherLocaleName}
              </Link>
              <Link
                href={getLocalizedPath(locale, "/contact")}
                onClick={() => setOpen(false)}
                className="rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white"
              >
                {t.common.contactUs}
              </Link>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
}