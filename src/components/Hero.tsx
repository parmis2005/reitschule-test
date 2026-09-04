"use client";

import { useEffect, useState, type MouseEvent } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ChevronDown, PlayCircle } from "lucide-react";
import { images, heroVideos } from "@/lib/images";
import { stats } from "@/lib/data";
import AnimatedCounter from "./AnimatedCounter";
import MagneticButton from "./MagneticButton";

export default function Hero() {
  const [active, setActive] = useState(0);
  const [videoOk, setVideoOk] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(
    () =>
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
  );

  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const parallaxX = useSpring(mx, { stiffness: 40, damping: 20 });
  const parallaxY = useSpring(my, { stiffness: 40, damping: 20 });

  function handleMouseMove(e: MouseEvent<HTMLElement>) {
    const { innerWidth, innerHeight } = window;
    mx.set(((e.clientX - innerWidth / 2) / innerWidth) * -24);
    my.set(((e.clientY - innerHeight / 2) / innerHeight) * -24);
  }

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  const slideCount = videoOk && !reducedMotion ? heroVideos.length : images.heroSlides.length;

  useEffect(() => {
    if (reducedMotion) return;
    const duration = videoOk ? 7500 : 6000;
    const id = setInterval(() => setActive((v) => (v + 1) % slideCount), duration);
    return () => clearInterval(id);
  }, [slideCount, videoOk, reducedMotion]);

  return (
    <section
      id="top"
      onMouseMove={handleMouseMove}
      className="relative flex min-h-screen flex-col overflow-hidden bg-forest-dark"
    >
      <motion.div
        style={{ x: parallaxX, y: parallaxY }}
        className="absolute -inset-6"
      >
        {videoOk && !reducedMotion
          ? heroVideos.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="auto"
                  poster={images.heroSlides[i % images.heroSlides.length]}
                  onError={() => setVideoOk(false)}
                  className="h-full w-full object-cover"
                >
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))
          : images.heroSlides.map((src, i) => (
              <div
                key={src}
                className={`absolute inset-0 transition-opacity duration-[1400ms] ease-in-out ${
                  i === active ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={src}
                  alt="Reitschule Sonnenhof – Pferd und Reiterin"
                  fill
                  priority={i === 0}
                  sizes="100vw"
                  className={`object-cover ${
                    i === active && !reducedMotion ? "animate-kenburns" : ""
                  }`}
                />
              </div>
            ))}
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/70 via-forest-dark/30 to-forest-dark/80" />
      <div className="absolute inset-0 bg-gradient-to-t from-forest-dark via-transparent to-transparent" />

      <motion.div
        aria-hidden
        animate={{ opacity: [0.25, 0.5, 0.25], scale: [1, 1.15, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -top-32 right-[-10%] h-[36rem] w-[36rem] rounded-full bg-gold/20 blur-[110px]"
      />
      <motion.div
        aria-hidden
        animate={{ opacity: [0.2, 0.4, 0.2], scale: [1, 1.1, 1] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="pointer-events-none absolute bottom-[-8rem] left-[-6rem] h-[28rem] w-[28rem] rounded-full bg-leather/25 blur-[100px]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 pt-32 pb-24 lg:px-8">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-5 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.25em] text-gold-light"
        >
          <span className="h-px w-8 bg-gold-light" />
          Reitschule &amp; Pferdepension
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-3xl text-balance font-display text-5xl font-medium leading-[1.05] text-ivory sm:text-6xl lg:text-7xl"
        >
          Reiten lernen mit
          <span className="italic text-gold-light"> Herz</span> &amp;
          Pferdeverstand
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-ivory/80"
        >
          Professioneller Reitunterricht, einfühlsamer Beritt und liebevolle
          Pferdepension in familiärer Atmosphäre — für Einsteiger:innen und
          ambitionierte Reiter:innen gleichermaßen.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <MagneticButton
            href="#kontakt"
            className="inline-block rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-forest-dark shadow-lg shadow-black/20 transition-colors hover:bg-gold-light hover:shadow-xl"
          >
            Probestunde buchen
          </MagneticButton>
          <MagneticButton
            href="#galerie"
            strength={0.25}
            className="group inline-flex items-center gap-2 rounded-full border border-ivory/30 px-6 py-3.5 text-sm font-semibold text-ivory backdrop-blur-sm transition-colors hover:bg-ivory/10"
          >
            <PlayCircle className="h-5 w-5 transition-transform group-hover:scale-110" />
            Einblicke ansehen
          </MagneticButton>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid max-w-2xl grid-cols-2 gap-x-8 gap-y-6 border-t border-ivory/15 pt-8 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <div className="font-display text-2xl font-semibold text-ivory sm:text-3xl">
                <AnimatedCounter value={s.value} />
              </div>
              <div className="mt-1 text-xs uppercase tracking-wide text-ivory/60">
                {s.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 flex justify-center pb-8">
        <a
          href="#ueber-uns"
          aria-label="Nach unten scrollen"
          className="flex h-10 w-10 animate-bounce items-center justify-center rounded-full border border-ivory/30 text-ivory/80"
        >
          <ChevronDown className="h-5 w-5" />
        </a>
      </div>

      <div className="absolute bottom-8 right-6 z-10 hidden gap-2 lg:right-8 lg:flex">
        {(videoOk && !reducedMotion ? heroVideos : images.heroSlides).map((src, i) => (
          <button
            key={src}
            aria-label={`Slide ${i + 1}`}
            onClick={() => setActive(i)}
            className={`h-1.5 rounded-full transition-all ${
              i === active ? "w-8 bg-gold" : "w-4 bg-ivory/40"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
