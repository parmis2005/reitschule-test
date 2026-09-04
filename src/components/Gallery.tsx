"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand } from "lucide-react";
import { images } from "@/lib/images";
import { galleryCaptions } from "@/lib/data";
import ScrollReveal from "./ScrollReveal";

export default function Gallery() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const close = () => setOpenIndex(null);
  const prev = () =>
    setOpenIndex((i) =>
      i === null ? null : (i - 1 + images.gallery.length) % images.gallery.length
    );
  const next = () =>
    setOpenIndex((i) => (i === null ? null : (i + 1) % images.gallery.length));

  return (
    <section id="galerie" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <ScrollReveal className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-leather">
            Galerie
          </p>
          <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">
            Einblicke in den Stallalltag
          </h2>
          <p className="mt-5 text-lg leading-relaxed text-charcoal/70">
            Vom Morgentraining bis zum Ausritt bei Sonnenuntergang.
          </p>
        </ScrollReveal>

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6 lg:gap-5">
          {images.gallery.map((src, i) => (
            <ScrollReveal
              key={src + i}
              delay={(i % 6) * 0.06}
              className={i === 0 || i === 3 ? "col-span-2 row-span-2" : ""}
            >
              <motion.button
                onClick={() => setOpenIndex(i)}
                whileHover={{ scale: 1.02, rotate: i % 2 === 0 ? -1 : 1 }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative block aspect-square w-full overflow-hidden rounded-2xl bg-forest/10"
              >
                <Image
                  src={src}
                  alt={galleryCaptions[i] ?? "Reitschule Sonnenhof"}
                  fill
                  sizes="(min-width: 1024px) 320px, 45vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/70 via-forest-dark/0 to-forest-dark/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <span className="text-left text-xs font-medium leading-snug text-ivory">
                    {galleryCaptions[i]}
                  </span>
                  <Expand className="h-4 w-4 shrink-0 text-ivory" />
                </div>
              </motion.button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      {openIndex !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-forest-dark/95 p-4 backdrop-blur-sm"
          onClick={close}
        >
          <button
            aria-label="Schließen"
            onClick={close}
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20"
          >
            <X className="h-5 w-5" />
          </button>
          <button
            aria-label="Vorheriges Bild"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            className="absolute left-3 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:left-6"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            aria-label="Nächstes Bild"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            className="absolute right-3 flex h-11 w-11 items-center justify-center rounded-full bg-ivory/10 text-ivory hover:bg-ivory/20 sm:right-6"
          >
            <ChevronRight className="h-6 w-6" />
          </button>

          <div
            className="relative aspect-[4/3] w-full max-w-3xl overflow-hidden rounded-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images.gallery[openIndex]}
              alt={galleryCaptions[openIndex] ?? "Reitschule Sonnenhof"}
              fill
              sizes="90vw"
              className="object-cover"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-forest-dark/80 to-transparent p-5">
              <p className="text-sm font-medium text-ivory">
                {galleryCaptions[openIndex]}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
