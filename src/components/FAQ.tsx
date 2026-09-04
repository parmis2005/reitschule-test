"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <ScrollReveal className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-leather">
            Häufige Fragen
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">
            Gut zu wissen
          </h2>
        </ScrollReveal>

        <div className="mt-14 divide-y divide-forest/10 rounded-2xl bg-ivory/60 ring-1 ring-forest/5">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="px-6 sm:px-8">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-6 text-left"
                >
                  <span className="font-display text-lg font-medium text-forest">
                    {f.q}
                  </span>
                  <Plus
                    className={`h-5 w-5 shrink-0 text-leather transition-transform duration-300 ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr] pb-6 opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="max-w-2xl text-[15px] leading-relaxed text-charcoal/70">
                      {f.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
