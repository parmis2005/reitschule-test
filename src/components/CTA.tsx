"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { images } from "@/lib/images";
import { site } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";
import MagneticButton from "./MagneticButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative isolate mx-auto max-w-7xl px-6 py-24 sm:py-28 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <Image
            src={images.ctaBg}
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-forest-dark/80" />
        </div>

        <motion.div
          aria-hidden
          animate={{ opacity: [0.2, 0.45, 0.2], scale: [1, 1.2, 1] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[26rem] w-[26rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gold/20 blur-[100px]"
        />

        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Bereit für Ihre erste Stunde im Sattel?
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-ivory/75">
            Sichern Sie sich jetzt Ihre unverbindliche Probestunde bei{" "}
            {site.name} — wir freuen uns auf Sie und Ihr Pferdeglück.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <MagneticButton
              href="#kontakt"
              className="inline-block rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-dark shadow-lg transition-colors hover:bg-gold-light"
            >
              Jetzt Probestunde sichern
            </MagneticButton>
            <MagneticButton
              href={site.phoneHref}
              strength={0.25}
              className="inline-block rounded-full border border-ivory/30 px-7 py-3.5 text-sm font-semibold text-ivory transition-colors hover:bg-ivory/10"
            >
              {site.phone}
            </MagneticButton>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
