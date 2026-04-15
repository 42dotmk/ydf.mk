"use client";

import { useLocale } from "@/lib/locale-context";
import { FadeIn } from "@/components/animate";
import Image from "next/image";

const networks = [
  {
    name: "Anna Lindh Foundation",
    src: "/images/media/anna_lindh_foundation.png",
  },
  {
    name: "Coface Families Europe",
    src: "/images/media/coface-families-europe.png",
  },
  {
    name: "Macedonian Anti-Poverty Platform",
    src: "/images/media/MPPS.png",
  },
];

export function NetworksSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <h2 className="text-center text-2xl font-bold text-foreground lg:text-3xl">
            {t("networks_member_title")}
          </h2>
        </FadeIn>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {networks.map((network) => (
            <FadeIn key={network.name}>
              <div className="flex items-center justify-center rounded-lg bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                <img
                  src={network.src}
                  alt={network.name}
                  className="h-24 w-auto max-w-full object-contain opacity-80 transition-opacity hover:opacity-100 md:h-28"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
