"use client";

import { useLocale } from "@/lib/locale-context";
import { FadeIn } from "@/components/animate";

const sponsors = [
  { name: "Doniraj Kompjuter", src: "/images/sponsors/doniraj_kompjuter.jpg" },
  { name: "Ecrowd", src: "/images/sponsors/ecrowd.png" },
  { name: "Kanal 77", src: "/images/sponsors/kanal77.jpg" },
  { name: "KB Zip", src: "/images/sponsors/kb_zip.png" },
  {
    name: "Komercijalna Banka",
    src: "/images/sponsors/komercijalna_banka.png",
  },
  { name: "Srekja Bar", src: "/images/sponsors/srekja_bar.png" },
  { name: "Startup Club", src: "/images/sponsors/startup_club.jpg" },
  { name: "Studentarija", src: "/images/sponsors/studentarija.png" },
  { name: "Tikves", src: "/images/sponsors/tikves-logo.png" },
  { name: "USS", src: "/images/sponsors/uss.png" },
  { name: "Kombo", src: "/images/sponsors/kombo.jpeg" },
  { name: "Mzmp", src: "/images/sponsors/mzmp.png" },
  { name: "Dijabet", src: "/images/sponsors/dijabet.jpg" },
  { name: "Yes For Less", src: "/images/sponsors/yes_for_less.png" },
];

export function SponsorsSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">
            {t("sponsors_title")}
          </h2>
        </FadeIn>
        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-background to-transparent" />
          <div className="flex w-max animate-sponsors-marquee items-center gap-12 motion-reduce:animate-none">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="flex items-center justify-center rounded-full bg-card px-6 py-4 shadow-sm"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain opacity-80 rounded-full transition-opacity hover:opacity-100 md:h-24"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
            {sponsors.map((sponsor, index) => (
              <div
                key={`${sponsor.name}-${index}-duplicate`}
                aria-hidden="true"
                className="flex items-center justify-center rounded-full bg-card px-6 py-6 shadow-sm"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className="h-20 w-auto object-contain opacity-80 md:h-24 rounded-full"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
