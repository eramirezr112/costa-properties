import { MessageCircle } from "lucide-react";
import { companyInfo, Locale, siteCopy } from "@/lib/site-content";

type WhatsAppFloatProps = {
  locale: Locale;
};

export function WhatsAppFloat({ locale }: WhatsAppFloatProps) {
  return (
    <a
      href={`https://wa.me/${companyInfo.whatsapp}`}
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-[var(--color-palm)] px-4 py-3 text-sm font-semibold text-white shadow-[0_18px_45px_rgba(42,76,64,0.28)] hover:bg-[var(--color-sea)]"
      aria-label={siteCopy[locale].common.whatsapp}
    >
      <MessageCircle size={18} />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}