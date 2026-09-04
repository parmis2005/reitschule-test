"use client";

import Image from "next/image";
import {
  Sparkles,
  Award,
  PartyPopper,
  Home,
  TreePine,
  CircleDot,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { services } from "@/lib/data";
import { images } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import Blob from "./Blob";

const icons: Record<string, LucideIcon> = {
  Sparkles,
  Award,
  PartyPopper,
  Home,
  TreePine,
  CircleDot,
};

export default function Services() {
  return (
    <section id="angebote" className="relative overflow-hidden bg-forest-dark py-24 sm:py-32">
      <div className="absolute inset-0 opacity-[0.18]">
        <Image
          src={images.servicesBg}
          alt=""
          fill
          sizes="100vw"
          className="object-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark via-forest-dark/95 to-forest-dark" />
      <Blob
        color="var(--color-gold)"
        className="left-[-8rem] top-1/3 h-80 w-80 opacity-[0.08] animate-float-slow"
      />
      <Blob
        color="var(--color-leather)"
        className="right-[-6rem] bottom-[-4rem] h-72 w-72 opacity-[0.1] animate-float-slow-reverse"
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-gold-light">
            Unsere Angebote
          </p>
          <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Rundum-Betreuung für Reiter:in und Pferd
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/70">
            Von der ersten Reitstunde bis zur professionellen Pension — alles
            aus einer Hand, individuell abgestimmt.
          </p>
        </ScrollReveal>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[s.icon];
            return (
              <ScrollReveal key={s.title} delay={(i % 3) * 0.1}>
                <motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group h-full rounded-2xl border border-ivory/10 bg-ivory/5 p-7 backdrop-blur-sm transition-colors hover:border-gold/40 hover:bg-ivory/10"
                >
                  <motion.span
                    whileHover={{ rotate: 12, scale: 1.1 }}
                    transition={{ type: "spring", stiffness: 300, damping: 15 }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl bg-gold/15 text-gold-light"
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </motion.span>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ivory">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ivory/65">
                    {s.description}
                  </p>
                  <a
                    href="#kontakt"
                    className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-light opacity-0 transition-opacity group-hover:opacity-100"
                  >
                    Mehr erfahren
                    <ArrowUpRight className="h-4 w-4" />
                  </a>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
