"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, PawPrint, Phone } from "lucide-react";
import { navLinks, site } from "@/lib/data";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid
          ? "bg-cream/95 shadow-sm backdrop-blur-md"
          : "bg-gradient-to-b from-black/40 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <a href="#top" className="group flex items-center gap-2.5">
          <motion.span
            whileHover={{ rotate: 25, scale: 1.08 }}
            transition={{ type: "spring", stiffness: 300, damping: 12 }}
            className={`flex h-10 w-10 items-center justify-center rounded-full ${
              solid ? "bg-forest" : "bg-white/15 backdrop-blur"
            }`}
          >
            <PawPrint className="h-5 w-5 text-gold-light" strokeWidth={1.75} />
          </motion.span>
          <span
            className={`font-display text-lg font-semibold tracking-tight ${
              solid ? "text-forest" : "text-white"
            }`}
          >
            {site.name}
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`group relative text-sm font-medium tracking-wide transition-colors ${
                solid
                  ? "text-charcoal/80 hover:text-forest"
                  : "text-white/90 hover:text-white"
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-1 left-0 h-px w-0 transition-all duration-300 group-hover:w-full ${
                  solid ? "bg-forest" : "bg-white"
                }`}
              />
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={site.phoneHref}
            className={`flex items-center gap-2 text-sm font-medium ${
              solid ? "text-charcoal/80" : "text-white/90"
            }`}
          >
            <Phone className="h-4 w-4" strokeWidth={1.75} />
            {site.phone}
          </a>
          <a
            href="#kontakt"
            className="rounded-full bg-leather px-5 py-2.5 text-sm font-semibold text-ivory shadow-sm transition-colors hover:bg-leather-dark"
          >
            Probestunde buchen
          </a>
        </div>

        <button
          aria-label="Menü öffnen"
          className={`lg:hidden ${solid ? "text-forest" : "text-white"}`}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-black/5 bg-cream px-6 py-6 lg:hidden">
          <nav className="flex flex-col gap-5">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-charcoal/85"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-leather px-5 py-3 text-center text-sm font-semibold text-ivory"
            >
              Probestunde buchen
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 text-sm font-medium text-charcoal/70"
            >
              <Phone className="h-4 w-4" /> {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
