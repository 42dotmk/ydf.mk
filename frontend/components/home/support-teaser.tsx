"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Heart, Handshake, Share2, ArrowRight } from "lucide-react";
import { FadeIn } from "@/components/animate";

export function SupportTeaser() {
  const { t } = useLocale();

  const items = [
    { icon: Heart, labelKey: "support_donation", color: "bg-primary/20 text-primary" },
    { icon: Handshake, labelKey: "support_partnership", color: "bg-teal/20 text-teal" },
    { icon: Share2, labelKey: "support_share_work", color: "bg-warm/20 text-warm" },
  ];

  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-foreground lg:text-4xl">
                {t("support_title")}
              </h2>
              <p className="mb-8 max-w-lg leading-relaxed text-muted-foreground">
                {t("support_teaser")}
              </p>
              <ul className="mb-8 flex flex-col gap-3">
                {items.map((item) => (
                  <li key={item.labelKey} className="flex items-center gap-3">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-lg ${item.color}`}>
                      <item.icon
                        className="h-5 w-5"
                        aria-hidden="true"
                      />
                    </div>
                    <span className="text-sm font-medium text-foreground">{t(item.labelKey)}</span>
                  </li>
                ))}
              </ul>
              <Link
                href="/support-us"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
              >
                {t("support_cta")}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={200}>
            <div className="relative overflow-hidden rounded-2xl" aria-hidden="true">
              <img
                src="/images/volunteer.jpg"
                alt=""
                className="h-80 w-full object-cover"
              />
              <div className="absolute inset-0 bg-primary/10" />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
