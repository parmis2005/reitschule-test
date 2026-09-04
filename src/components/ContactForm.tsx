"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Hinweis: Hier ist noch kein Versand-Backend angebunden (z. B. Resend,
    // Formspree oder eine eigene API-Route). Für den Live-Betrieb bitte
    // einen E-Mail-Versanddienst einbinden.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 700);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl bg-forest/5 px-8 py-14 text-center">
        <CheckCircle2 className="h-10 w-10 text-leather" strokeWidth={1.5} />
        <p className="mt-4 font-display text-xl font-semibold text-forest">
          Vielen Dank für Ihre Nachricht!
        </p>
        <p className="mt-2 max-w-sm text-sm text-charcoal/65">
          Wir melden uns in der Regel innerhalb eines Werktags bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-forest">
            Name
          </span>
          <input
            required
            name="name"
            type="text"
            placeholder="Ihr Name"
            className="w-full rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-leather"
          />
        </label>
        <label className="block">
          <span className="mb-1.5 block text-sm font-medium text-forest">
            E-Mail
          </span>
          <input
            required
            name="email"
            type="email"
            placeholder="ihre@email.de"
            className="w-full rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-leather"
          />
        </label>
      </div>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest">
          Interesse
        </span>
        <select
          name="interest"
          className="w-full rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-sm text-charcoal outline-none transition-colors focus:border-leather"
          defaultValue="Reitunterricht"
        >
          <option>Reitunterricht</option>
          <option>Beritt &amp; Training</option>
          <option>Ferienkurse &amp; Kindergeburtstage</option>
          <option>Pferdepension</option>
          <option>Sonstiges</option>
        </select>
      </label>

      <label className="block">
        <span className="mb-1.5 block text-sm font-medium text-forest">
          Nachricht
        </span>
        <textarea
          required
          name="message"
          rows={4}
          placeholder="Erzählen Sie uns kurz von sich und Ihren Reiterfahrungen..."
          className="w-full resize-none rounded-xl border border-forest/15 bg-ivory px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/40 outline-none transition-colors focus:border-leather"
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className="mt-2 flex items-center justify-center gap-2 rounded-full bg-leather px-6 py-3.5 text-sm font-semibold text-ivory shadow-sm transition-colors hover:bg-leather-dark disabled:opacity-60"
      >
        {loading ? "Wird gesendet..." : "Nachricht senden"}
        {!loading && <Send className="h-4 w-4" />}
      </button>
    </form>
  );
}
