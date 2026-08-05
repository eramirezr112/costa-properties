"use client";

import { useMemo, useState } from "react";
import { Calculator } from "lucide-react";
import { Locale, siteCopy } from "@/lib/site-content";

type LoanCalculatorProps = {
  locale: Locale;
  compact?: boolean;
};

const ANNUAL_RATE = 0.079;

export function LoanCalculator({ locale, compact = false }: LoanCalculatorProps) {
  const t = siteCopy[locale];
  const [amount, setAmount] = useState(250000);
  const [years, setYears] = useState(20);

  const payment = useMemo(() => {
    const monthlyRate = ANNUAL_RATE / 12;
    const periods = years * 12;

    if (periods <= 0) {
      return 0;
    }

    if (monthlyRate === 0) {
      return amount / periods;
    }

    const factor = Math.pow(1 + monthlyRate, periods);
    return (amount * monthlyRate * factor) / (factor - 1);
  }, [amount, years]);

  const formatter = new Intl.NumberFormat(locale === "es" ? "es-CR" : "en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

  return (
    <div id="calculator" className="panel rounded-[2rem] p-5">
      <div className="rounded-[1.75rem] bg-[var(--color-white)] p-6 md:p-8">
        <div className="flex items-center gap-3">
          <div className="rounded-2xl bg-[var(--color-sand)] p-3 text-[var(--color-sea)]">
            <Calculator size={22} />
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-gold-deep)]">Loan tool</p>
            <h3 className="display-title text-3xl text-[var(--color-ink)]">{t.common.calculateLoan}</h3>
          </div>
        </div>

        <div className={`mt-8 grid gap-5 ${compact ? "lg:grid-cols-[1fr_0.8fr]" : "lg:grid-cols-[1fr_0.9fr]"}`}>
          <label className="space-y-3">
            <span className="text-sm font-semibold text-[var(--color-ink)]">
              {locale === "es" ? "Monto del prestamo" : "Loan amount"}
            </span>
            <input
              type="range"
              min={50000}
              max={1500000}
              step={5000}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="w-full accent-[var(--color-sea)]"
            />
            <input
              type="number"
              min={50000}
              max={1500000}
              step={5000}
              value={amount}
              onChange={(event) => setAmount(Number(event.target.value))}
              className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>

          <label className="space-y-3">
            <span className="text-sm font-semibold text-[var(--color-ink)]">
              {locale === "es" ? "Plazo en anos" : "Term in years"}
            </span>
            <input
              type="range"
              min={5}
              max={30}
              step={1}
              value={years}
              onChange={(event) => setYears(Number(event.target.value))}
              className="w-full accent-[var(--color-gold)]"
            />
            <input
              type="number"
              min={5}
              max={30}
              step={1}
              value={years}
              onChange={(event) => setYears(Number(event.target.value))}
              className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>
        </div>

        <div className="mt-8 rounded-[1.75rem] bg-[var(--color-ink)] p-6 text-white">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[var(--color-sand-strong)]/80">
            {t.common.monthlyEstimate}
          </p>
          <p className="mt-3 display-title text-5xl leading-none">{formatter.format(payment)}</p>
          <p className="mt-4 text-sm leading-7 text-white/72">{t.common.annualRateNote}</p>
        </div>
      </div>
    </div>
  );
}