"use client";

import { useLocale } from "@/lib/locale-context";
import { FadeIn } from "@/components/animate";

const sponsors: { name: string; src: string; url: string; darkSrc?: string }[] = [
  { name: "Doniraj Kompjuter", src: "/images/sponsors/doniraj_kompjuter.jpg", url: "https://donirajkompjuter.mk" },
  { name: "Ecrowd", src: "/images/sponsors/ecrowd.png", url: "https://ecrowd.mk" },
  { name: "Kanal 77", src: "/images/sponsors/kanal77.jpg", url: "https://kanal77.mk" },
  { name: "KB Zip", src: "/images/sponsors/kb_zip.png", url: "https://zipp.mk" },
  {
    name: "Komercijalna Banka",
    src: "/images/sponsors/komercijalna_banka.png",
    url: "https://kb.com.mk",
  },
  { name: "Srekja Bar", src: "/images/sponsors/srekja_bar.png", url: "https://srekjabar.mk" },
  { name: "Startup Club", src: "/images/sponsors/startup_club.jpg", url: "https://startupclub.mk" },
  { name: "Studentarija", src: "/images/sponsors/studentarija.png", url: "https://studentarija.mk" },
  { name: "Tikves", src: "/images/sponsors/tikves-logo.png", url: "https://tikves.com.mk" },
  { name: "USS", src: "/images/sponsors/uss.png", url: "https://www.facebook.com/ussukim/" },
  { name: "Kombo", src: "/images/sponsors/kombo.jpeg", url: "https://kombo.mk" },
  { name: "Mzmp", src: "/images/sponsors/mzmp.png", url: "https://myla.org.mk/" },
  { name: "Dijabet", src: "/images/sponsors/dijabet.jpg", url: "https://diabetes.mk/" },
  { name: "Yes For Less", src: "/images/sponsors/yes_for_less.png", url: "https://www.yesforless.mk/" },
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
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center rounded-full bg-card px-6 py-4 shadow-sm"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className={`h-20 w-auto object-contain opacity-80 rounded-full transition-opacity hover:opacity-100 md:h-24${sponsor.darkSrc ? " dark:hidden" : ""}`}
                  loading="lazy"
                  decoding="async"
                />
                {sponsor.darkSrc && (
                  <img
                    src={sponsor.darkSrc}
                    alt={sponsor.name}
                    className="hidden h-20 w-auto object-contain opacity-80 rounded-full transition-opacity hover:opacity-100 md:h-24 dark:block"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </a>
            ))}
            {sponsors.map((sponsor, index) => (
              <a
                key={`${sponsor.name}-${index}-duplicate`}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-hidden="true"
                tabIndex={-1}
                className="flex items-center justify-center rounded-full bg-card px-6 py-6 shadow-sm"
              >
                <img
                  src={sponsor.src}
                  alt={sponsor.name}
                  className={`h-20 w-auto object-contain opacity-80 md:h-24 rounded-full${sponsor.darkSrc ? " dark:hidden" : ""}`}
                  loading="lazy"
                  decoding="async"
                />
                {sponsor.darkSrc && (
                  <img
                    src={sponsor.darkSrc}
                    alt={sponsor.name}
                    className="hidden h-20 w-auto object-contain opacity-80 md:h-24 rounded-full dark:block"
                    loading="lazy"
                    decoding="async"
                  />
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
