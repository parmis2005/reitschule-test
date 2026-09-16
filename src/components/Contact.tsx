"use client";

import dynamic from "next/dynamic";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { site } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import ContactForm from "./ContactForm";

const Map = dynamic(() => import("./Map"), {
  ssr: false,
  loading: () => (
    <div className="flex h-full w-full items-center justify-center bg-cream-dark text-sm text-charcoal/50">
      Karte wird geladen...
    </div>
  ),
});

const infoItems = [
  {
    icon: MapPin,
    label: "Adresse",
    value: `${site.address.street}, ${site.address.zip} ${site.address.city}`,
  },
  { icon: Phone, label: "Telefon", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "E-Mail", value: site.email, href: `mailto:${site.email}` },
  {
    icon: Clock,
    label: "Öffnungszeiten",
    value: "Di–So: 8:00–19:00 Uhr · Mo Ruhetag",
  },
];

export default function Contact() {
  return (
    <section id="kontakt" className="bg-cream-dark py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-leather">
            Kontakt &amp; Anfahrt
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">
            Wir freuen uns auf Sie
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            Ob erste Frage oder direkte Terminbuchung — schreiben Sie uns
            einfach, wir melden uns schnellstmöglich zurück.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-5">
          <ScrollReveal className="lg:col-span-2">
            <div className="flex h-full flex-col rounded-[1.75rem] bg-forest p-8 text-ivory">
              <h3 className="font-display text-2xl font-semibold">
                {site.name}
              </h3>
              <div className="mt-8 flex flex-1 flex-col gap-6">
                {infoItems.map((item) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ivory/10 text-gold-light">
                      <item.icon className="h-4.5 w-4.5" strokeWidth={1.75} />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wide text-ivory/50">
                        {item.label}
                      </p>
                      {item.href ? (
                        <a
                          href={item.href}
                          className="mt-0.5 block text-sm font-medium text-ivory hover:text-gold-light"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="mt-0.5 text-sm font-medium text-ivory">
                          {item.value}
                        </p>
                      )}
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative isolate mt-10 h-56 overflow-hidden rounded-2xl ring-1 ring-ivory/10">
                <Map />
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1} className="lg:col-span-3">
            <div className="h-full rounded-[1.75rem] bg-ivory p-8 shadow-sm ring-1 ring-forest/5 sm:p-10">
              <ContactForm />
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
