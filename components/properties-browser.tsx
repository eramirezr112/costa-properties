"use client";

import { useMemo, useState } from "react";
import { PropertyCard } from "@/components/property-card";
import { Locale, properties, propertyTypeLabels } from "@/lib/site-content";

type PropertiesBrowserProps = {
  locale: Locale;
};

export function PropertiesBrowser({ locale }: PropertiesBrowserProps) {
  const [type, setType] = useState("all");
  const [location, setLocation] = useState("all");
  const [maxPrice, setMaxPrice] = useState(1500000);

  const locationOptions = useMemo(
    () => Array.from(new Set(properties.map((property) => property.location[locale]))),
    [locale],
  );

  const filtered = useMemo(
    () =>
      properties.filter((property) => {
        const matchesType = type === "all" || property.type === type;
        const matchesLocation = location === "all" || property.location[locale] === location;
        const matchesPrice = property.price <= maxPrice;
        return matchesType && matchesLocation && matchesPrice;
      }),
    [locale, location, maxPrice, type],
  );

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[2rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-white)] p-5 shadow-[0_18px_45px_rgba(16,38,64,0.08)] md:grid-cols-3">
        <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
          {locale === "es" ? "Tipo de propiedad" : "Property type"}
          <select
            value={type}
            onChange={(event) => setType(event.target.value)}
            className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
          >
            <option value="all">{locale === "es" ? "Todos" : "All"}</option>
            {Object.entries(propertyTypeLabels[locale]).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
          {locale === "es" ? "Ubicacion" : "Location"}
          <select
            value={location}
            onChange={(event) => setLocation(event.target.value)}
            className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
          >
            <option value="all">{locale === "es" ? "Todas" : "All"}</option>
            {locationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>

        <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
          {locale === "es" ? "Precio maximo" : "Maximum price"}
          <input
            type="number"
            min={100000}
            max={1500000}
            step={10000}
            value={maxPrice}
            onChange={(event) => setMaxPrice(Number(event.target.value))}
            className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
          />
        </label>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
        {filtered.map((property) => (
          <PropertyCard key={property.slug} locale={locale} property={property} />
        ))}
      </div>
    </div>
  );
}