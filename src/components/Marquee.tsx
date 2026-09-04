import { Sparkle } from "lucide-react";

const items = [
  "Reitunterricht",
  "Beritt & Training",
  "Pferdepension",
  "Ausritte & Gelände",
  "Ferienkurse",
  "Longenunterricht",
];

export default function Marquee() {
  return (
    <div className="relative overflow-hidden border-y border-forest/10 bg-cream-dark py-5">
      <div className="flex w-max animate-marquee gap-10 whitespace-nowrap">
        {[0, 1].map((copy) => (
          <div key={copy} className="flex items-center gap-10">
            {items.map((item, i) => (
              <span
                key={`${copy}-${item}-${i}`}
                className="flex items-center gap-3 font-display text-xl italic text-forest/70"
              >
                {item}
                <Sparkle className="h-3.5 w-3.5 shrink-0 fill-gold text-gold" strokeWidth={0} />
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
