import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, LandPlot, MapPin } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { companyInfo, formatCurrency, getLocalizedPath, getPropertyBySlug, isLocale, locales, Locale, properties } from "@/lib/site-content";

export function generateStaticParams() {
  return locales.flatMap((lang) => properties.map((property) => ({ lang, slug: property.slug })));
}

export default async function PropertyDetailPage({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;

  if (!isLocale(lang)) {
    notFound();
  }

  const locale = lang as Locale;
  const property = getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  return (
    <div className="section-space">
      <div className="container-shell space-y-10">
        <Reveal>
          <div className="grid gap-8 lg:grid-cols-[1.12fr_0.88fr] lg:items-center">
            <div className="space-y-5">
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">{property.location[locale]}</p>
              <h1 className="display-title text-6xl text-[var(--color-ink)]">{property.title[locale]}</h1>
              <p className="max-w-3xl text-lg leading-8 text-[var(--color-ink-soft)]">{property.description[locale]}</p>
              <div className="flex flex-wrap gap-4 text-sm text-[var(--color-ink)]">
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-white)] px-4 py-2 shadow-[0_12px_30px_rgba(16,38,64,0.08)]">
                  <BedDouble size={16} />
                  {property.beds}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-white)] px-4 py-2 shadow-[0_12px_30px_rgba(16,38,64,0.08)]">
                  <Bath size={16} />
                  {property.baths}
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[var(--color-white)] px-4 py-2 shadow-[0_12px_30px_rgba(16,38,64,0.08)]">
                  <LandPlot size={16} />
                  {property.area} m2
                </div>
              </div>
            </div>

            <div className="panel rounded-[2rem] p-5">
              <div className="rounded-[1.75rem] bg-[var(--color-white)] p-6">
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-[var(--color-gold-deep)]">{locale === "es" ? "Precio" : "Price"}</p>
                <p className="mt-4 display-title text-5xl text-[var(--color-sea)]">{formatCurrency(locale, property.price)}</p>
                <p className="mt-4 flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
                  <MapPin size={16} />
                  {property.location[locale]}
                </p>
                <div className="mt-6 space-y-3">
                  {property.highlights[locale].map((item) => (
                    <div key={item} className="rounded-2xl bg-[var(--color-sand)] px-4 py-3 text-sm text-[var(--color-ink-soft)]">
                      {item}
                    </div>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-3">
                  <a href={`https://wa.me/${companyInfo.whatsapp}`} target="_blank" rel="noreferrer" className="rounded-full bg-[var(--color-palm)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-sea)]">
                    WhatsApp
                  </a>
                  <Link href={getLocalizedPath(locale, "/contact")} className="rounded-full border border-[rgba(16,38,64,0.14)] px-5 py-3 text-sm font-semibold text-[var(--color-ink)] hover:border-[var(--color-gold)] hover:text-[var(--color-sea)]">
                    {locale === "es" ? "Solicitar informacion" : "Request information"}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {property.gallery.map((image, index) => (
            <Reveal key={image} delay={index * 0.08}>
              <div className="relative h-80 overflow-hidden rounded-[2rem]">
                <Image src={image} alt={`${property.title[locale]} ${index + 1}`} fill className="object-cover" unoptimized />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}