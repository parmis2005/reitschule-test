import { PawPrint } from "lucide-react";
import { site, navLinks } from "@/lib/data";
import { InstagramIcon, FacebookIcon } from "./icons";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-ivory/70">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10">
                <PawPrint className="h-4.5 w-4.5 text-gold-light" strokeWidth={1.75} />
              </span>
              <span className="font-display text-base font-semibold text-ivory">
                {site.name}
              </span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              Reitunterricht, Beritt und Pferdepension mit Herz — in
              familiärer Atmosphäre nahe München.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 transition-colors hover:bg-gold hover:text-forest-dark"
              >
                <InstagramIcon className="h-4 w-4" />
              </a>
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-ivory/10 transition-colors hover:bg-gold hover:text-forest-dark"
              >
                <FacebookIcon className="h-4 w-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ivory">Navigation</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="transition-colors hover:text-gold-light">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ivory">Kontakt</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>{site.address.street}</li>
              <li>
                {site.address.zip} {site.address.city}
              </li>
              <li>
                <a href={site.phoneHref} className="hover:text-gold-light">
                  {site.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="hover:text-gold-light">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-ivory">Rechtliches</h4>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li>
                <a href="#" className="hover:text-gold-light">
                  Impressum
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-light">
                  Datenschutz
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-gold-light">
                  AGB
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.name}. Alle Rechte vorbehalten.
          </p>
          <p>Mit ♥ gestaltet für Pferdemenschen.</p>
        </div>
      </div>
    </footer>
  );
}
