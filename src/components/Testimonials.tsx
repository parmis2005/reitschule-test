"use client";

import Image from "next/image";
import { Star, Quote } from "lucide-react";
import { testimonials } from "@/lib/data";
import { images } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";

export default function Testimonials() {
  return (
    <section id="stimmen" className="relative overflow-hidden bg-forest py-24 sm:py-32">
      <div className="absolute inset-0 opacity-[0.12]">
        <Image
          src={images.testimonialsBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest via-forest/95 to-forest-dark" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            Stimmen aus dem Stall
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Was unsere Reitschüler:innen sagen
          </h2>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {testimonials.map((t, i) => (
            <ScrollReveal key={t.name} delay={(i % 2) * 0.12}>
              <div className="relative h-full rounded-2xl bg-ivory/[0.06] p-7 ring-1 ring-ivory/10 backdrop-blur-sm">
                <Quote className="h-7 w-7 text-gold/40" strokeWidth={1.5} />
                <div className="mt-3 flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, s) => (
                    <Star
                      key={s}
                      className="h-4 w-4 fill-gold text-gold"
                      strokeWidth={0}
                    />
                  ))}
                </div>
                <p className="mt-4 text-[15px] leading-relaxed text-ivory/85">
                  „{t.text}“
                </p>
                <p className="mt-5 text-sm font-semibold text-gold-light">
                  {t.name}
                </p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
