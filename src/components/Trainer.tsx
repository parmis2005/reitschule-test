"use client";

import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { trainer, site } from "@/lib/data";
import { images } from "@/lib/images";
import ScrollReveal from "./ScrollReveal";
import { InstagramIcon, FacebookIcon } from "./icons";
import TiltCard from "./TiltCard";
import Blob from "./Blob";

export default function Trainer() {
  return (
    <section id="trainerin" className="relative overflow-hidden bg-cream py-24 sm:py-32">
      <Blob
        color="var(--color-forest)"
        className="right-[-6rem] top-[-4rem] h-72 w-72 opacity-[0.08] animate-float-slow"
      />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
        <div className="order-2 lg:order-1">
          <ScrollReveal>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-leather">
              Ihre Trainerin
            </p>
            <h2 className="mt-4 font-display text-4xl font-medium leading-tight text-forest sm:text-5xl">
              {trainer.name}
            </h2>
            <p className="mt-2 text-base font-medium text-leather">
              {trainer.role}
            </p>
          </ScrollReveal>

          <div className="mt-6 space-y-4">
            {trainer.bio.map((p, i) => (
              <ScrollReveal key={i} delay={0.1 + i * 0.1}>
                <p className="text-lg leading-relaxed text-charcoal/75">{p}</p>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={0.3}>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {trainer.credentials.map((c) => (
                <li key={c} className="flex items-start gap-2.5 text-sm text-charcoal/80">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-leather" strokeWidth={2} />
                  {c}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal delay={0.4}>
            <div className="mt-8 flex items-center gap-4">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-forest hover:text-ivory"
              >
                <InstagramIcon className="h-4.5 w-4.5" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full bg-forest/10 text-forest transition-colors hover:bg-forest hover:text-ivory"
              >
                <FacebookIcon className="h-4.5 w-4.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal className="order-1 lg:order-2">
          <TiltCard className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] shadow-2xl shadow-forest/20">
            <Image
              src={images.trainer}
              alt={`${trainer.name} – ${trainer.role}`}
              fill
              sizes="(min-width: 1024px) 480px, 90vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest-dark/40 via-transparent to-transparent" />
          </TiltCard>
        </ScrollReveal>
      </div>
    </section>
  );
}
