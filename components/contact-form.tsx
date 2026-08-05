"use client";

import { FormEvent, useState } from "react";
import { companyInfo, Locale, siteCopy } from "@/lib/site-content";

type ContactFormProps = {
  locale: Locale;
};

export function ContactForm({ locale }: ContactFormProps) {
  const t = siteCopy[locale];
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const lines = [
      locale === "es" ? "Hola, me interesa recibir informacion." : "Hello, I would like more information.",
      `${locale === "es" ? "Nombre" : "Name"}: ${name}`,
      `Email: ${email}`,
      `${locale === "es" ? "Telefono" : "Phone"}: ${phone}`,
      `${locale === "es" ? "Mensaje" : "Message"}: ${message}`,
    ];

    const url = `https://wa.me/${companyInfo.whatsapp}?text=${encodeURIComponent(lines.join("\n"))}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <form onSubmit={handleSubmit} className="panel rounded-[2rem] p-5">
      <div className="rounded-[1.75rem] bg-[var(--color-white)] p-6 md:p-8">
        <div className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
            {locale === "es" ? "Nombre completo" : "Full name"}
            <input
              required
              value={name}
              onChange={(event) => setName(event.target.value)}
              className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)]">
            Email
            <input
              required
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)] md:col-span-2">
            {locale === "es" ? "Telefono / WhatsApp" : "Phone / WhatsApp"}
            <input
              required
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              className="w-full rounded-2xl border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>
          <label className="space-y-2 text-sm font-semibold text-[var(--color-ink)] md:col-span-2">
            {locale === "es" ? "Cuentanos que buscas" : "Tell us what you need"}
            <textarea
              required
              rows={5}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              className="w-full rounded-[1.5rem] border border-[rgba(16,38,64,0.1)] bg-[var(--color-sand)] px-4 py-3 outline-none focus:border-[var(--color-sea)]"
            />
          </label>
        </div>

        <button
          type="submit"
          className="mt-6 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-semibold text-white hover:bg-[var(--color-sea)]"
        >
          {t.contact.formButton}
        </button>
      </div>
    </form>
  );
}