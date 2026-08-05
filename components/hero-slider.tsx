"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, PlayCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { Locale, getLocalizedPath, heroSlides, siteCopy } from "@/lib/site-content";

type HeroSliderProps = {
  locale: Locale;
};

export function HeroSlider({ locale }: HeroSliderProps) {
  const slides = heroSlides[locale];
  const t = siteCopy[locale];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, [slides.length]);

  const slide = slides[index];

  return (
    <section className="coastline relative overflow-hidden border-b border-[rgba(16,38,64,0.08)] bg-[var(--color-ink)] text-white">
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.image}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `linear-gradient(105deg, rgba(16, 38, 64, 0.82), rgba(16, 38, 64, 0.46)), url(${slide.image})` }}
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        />
      </AnimatePresence>

      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.2fr_0.8fr] lg:py-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={`content-${index}`}
            className="max-w-3xl space-y-7"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              className="inline-flex items-center gap-3 rounded-full border border-white/18 bg-white/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-[var(--color-sand-strong)]"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.05 }}
            >
              <span className="h-2 w-2 rounded-full bg-[var(--color-gold)]" />
              {slide.eyebrow}
            </motion.div>
            <div className="space-y-5">
              <motion.p
                className="text-sm font-semibold uppercase tracking-[0.28em] text-[var(--color-sand-strong)]/80"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.1 }}
              >
                {t.home.eyebrow}
              </motion.p>
              <motion.h1
                className="display-title max-w-4xl text-5xl leading-[0.95] sm:text-6xl lg:text-7xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.16 }}
              >
                {slide.title}
              </motion.h1>
              <motion.p
                className="max-w-2xl text-lg leading-8 text-white/78"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.24 }}
              >
                {slide.subtitle}
              </motion.p>
            </div>
            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.3 }}
            >
              <Link
                href={getLocalizedPath(locale, "/properties")}
                className="inline-flex items-center gap-2 rounded-full bg-[var(--color-gold)] px-6 py-3 text-sm font-semibold text-[var(--color-ink)] hover:bg-[#d1b888]"
              >
                {t.common.viewProperties}
                <ArrowRight size={16} />
              </Link>
              <Link
                href={getLocalizedPath(locale, "/loans#calculator")}
                className="inline-flex items-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3 text-sm font-semibold text-white hover:bg-white/16"
              >
                <PlayCircle size={16} />
                {t.common.calculateLoan}
              </Link>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        <div className="panel rounded-[2rem] p-5 text-[var(--color-ink)]">
          <div className="rounded-[1.75rem] bg-[var(--color-white)] p-6">
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">
              Costa Properties
            </p>
            <h2 className="mt-4 display-title text-4xl leading-none">{t.home.title}</h2>
            <p className="mt-4 text-sm leading-7 text-[var(--color-ink-soft)]">{t.home.intro}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {t.home.stats.map((stat) => (
                <div key={stat.label} className="min-w-0 rounded-[1.5rem] border border-[rgba(16,38,64,0.08)] bg-[var(--color-sand)] px-4 py-5">
                  <p className="text-3xl font-extrabold leading-tight text-[var(--color-sea)]">{stat.value}</p>
                  <p className="mt-2 text-[0.68rem] font-semibold uppercase leading-snug tracking-[0.08em] text-[var(--color-ink-soft)]">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-3">
          {slides.map((item, slideIndex) => (
            <button
              key={item.title}
              type="button"
              className={`h-2.5 rounded-full ${slideIndex === index ? "w-10 bg-[var(--color-gold)]" : "w-2.5 bg-white/45"}`}
              onClick={() => setIndex(slideIndex)}
              aria-label={`Go to slide ${slideIndex + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}