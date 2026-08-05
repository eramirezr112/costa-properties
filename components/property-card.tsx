import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, LandPlot, MapPin } from "lucide-react";
import { Locale, PropertyItem, formatCurrency, getLocalizedPath, propertyTypeLabels, siteCopy } from "@/lib/site-content";

type PropertyCardProps = {
  locale: Locale;
  property: PropertyItem;
};

export function PropertyCard({ locale, property }: PropertyCardProps) {
  const t = siteCopy[locale];

  return (
    <article className="overflow-hidden rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] shadow-[0_22px_50px_rgba(16,38,64,0.08)]">
      <div className="relative h-72 overflow-hidden">
        <Image src={property.gallery[0]} alt={property.title[locale]} fill className="object-cover" unoptimized />
        <div className="absolute inset-0 bg-gradient-to-t from-[rgba(16,38,64,0.72)] via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-[var(--color-white)]/88 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink)]">
          {propertyTypeLabels[locale][property.type]}
        </div>
        {property.featured ? (
          <div className="absolute right-5 top-5 rounded-full bg-[var(--color-gold)] px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-[var(--color-ink)]">
            {t.common.featured}
          </div>
        ) : null}
      </div>

      <div className="space-y-4 p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="display-title text-3xl text-[var(--color-ink)]">{property.title[locale]}</h3>
            <p className="mt-2 flex items-center gap-2 text-sm text-[var(--color-ink-soft)]">
              <MapPin size={16} />
              {property.location[locale]}
            </p>
          </div>
          <p className="text-lg font-extrabold text-[var(--color-sea)]">{formatCurrency(locale, property.price)}</p>
        </div>

        <p className="text-sm leading-7 text-[var(--color-ink-soft)]">{property.summary[locale]}</p>

        <div className="grid grid-cols-3 gap-3 text-sm text-[var(--color-ink)]">
          <div className="rounded-2xl bg-[var(--color-sand)] px-3 py-3 text-center">
            <BedDouble className="mx-auto mb-1" size={16} />
            {property.beds}
          </div>
          <div className="rounded-2xl bg-[var(--color-sand)] px-3 py-3 text-center">
            <Bath className="mx-auto mb-1" size={16} />
            {property.baths}
          </div>
          <div className="rounded-2xl bg-[var(--color-sand)] px-3 py-3 text-center">
            <LandPlot className="mx-auto mb-1" size={16} />
            {property.area} m2
          </div>
        </div>

        <Link
          href={getLocalizedPath(locale, `/properties/${property.slug}`)}
          className="inline-flex rounded-full bg-[var(--color-ink)] px-5 py-3 text-sm font-semibold text-white hover:bg-[var(--color-sea)]"
        >
          {t.common.discoverMore}
        </Link>
      </div>
    </article>
  );
}