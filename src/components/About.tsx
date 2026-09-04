"use client";

import Image from "next/image";
import { Heart, Leaf, ShieldCheck } from "lucide-react";
import { images } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import Blob from "./Blob";
import TiltCard from "./TiltCard";
import AnimatedCounter from "./AnimatedCounter";

const values = [
  {
    icon: Heart,
    title: "Pferdegerecht",
    text: "Ausbildung im Einklang mit dem natürlichen Verhalten des Pferdes.",
  },
  {
    icon: ShieldCheck,
    title: "Sicherheit zuerst",
    text: "Geprüftes Equipment, kleine Gruppen, geschulte Aufsicht in jeder Stunde.",
  },
  {
    icon: Leaf,
    title: "Familiär & nachhaltig",
    text: "Regionale Futtermittel, viel Weidegang, ein Stall wie eine große Familie.",
  },
];

export default function About() {
  return (
    <section id="ueber-uns" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <Blob
        color="var(--color-gold)"
        className="-left-24 top-10 h-72 w-72 opacity-[0.15] animate-float-slow"
      />
      <Blob
        color="var(--color-leather)"
        className="-right-16 bottom-0 h-64 w-64 opacity-[0.12] animate-float-slow-reverse"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <ScrollReveal>
          <div className="relative">
            <TiltCard className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
              <Image
                src={images.about}
                alt="Nahaufnahme eines Pferdes auf dem Sonnenhof"
                fill
                sizes="(min-width: 1024px) 480px, 90vw"
                className="object-cover"
              />
            </TiltCard>
            <div className="absolute -bottom-8 -right-4 hidden max-w-[220px] rounded-2xl bg-forest p-5 text-ivory shadow-xl sm:right-0 sm:block lg:-right-10">
              <p className="font-display text-3xl font-semibold text-gold-light">
                <AnimatedCounter value="18+" />
              </p>
              <p className="mt-1 text-xs uppercase tracking-wide text-ivory/70">
                Jahre Erfahrung in pferdegerechter Ausbildung
              </p>
            </div>
          </div>
        </ScrollReveal>

        <div>
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-leather">
              Über uns
            </p>
            <h2 className="mt-4 text-balance font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">
              Ein Stall, der sich wie zuhause anfühlt
            </h2>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-charcoal/75">
              Seit über 18 Jahren ist der Sonnenhof Ausbildungsstätte,
              zweites Zuhause und Treffpunkt für alle, die Pferde lieben.
              Auf großzügigen Weiden, in unserer lichtdurchfluteten Halle und
              bei ausgedehnten Ausritten verbinden wir klassische Reitlehre
              mit einem tiefen Verständnis für das Pferd als Lebewesen.
            </p>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-1">
            {values.map((v, i) => (
              <ScrollReveal key={v.title} delay={0.1 + i * 0.1}>
                <div className="flex items-start gap-4 rounded-2xl bg-ivory/60 p-5 ring-1 ring-forest/5">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-forest/10 text-forest">
                    <v.icon className="h-5 w-5" strokeWidth={1.75} />
                  </span>
                  <div>
                    <h3 className="font-semibold text-forest">{v.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-charcoal/70">
                      {v.text}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
