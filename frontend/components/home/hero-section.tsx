"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { ArrowRight, Heart, GraduationCap } from "lucide-react";
import { FadeIn, CountUp } from "@/components/animate";

export function HeroSection() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-background text-foreground">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-community.jpg"
          alt=""
          className="h-full w-full object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-background/85" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 lg:px-8 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="flex flex-col gap-6">
            <FadeIn delay={0} direction="up">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground/10 px-4 py-1.5 text-sm font-semibold text-foreground">
                <Heart className="h-4 w-4" aria-hidden="true" />
                {t("site_name_short")}
              </div>
            </FadeIn>
            <FadeIn delay={100} direction="up">
              <h1 className="text-balance text-4xl font-bold leading-tight lg:text-5xl xl:text-6xl">
                {t("hero_title")}
              </h1>
            </FadeIn>
            <FadeIn delay={200} direction="up">
              <p className="text-lg font-semibold text-foreground">
                {t("hero_subtitle")}
              </p>
            </FadeIn>
            <FadeIn delay={300} direction="up">
              <p className="max-w-xl text-base leading-relaxed text-foreground/90">
                {t("hero_body")}
              </p>
            </FadeIn>
            <FadeIn delay={400} direction="up">
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("hero_cta_join")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/opportunities"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/30 bg-foreground/10 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/15 hover:border-foreground/40"
                >
                  {t("hero_cta_opportunities")}
                </Link>
                <Link
                  href="/pay-a-semester"
                  className="inline-flex items-center gap-2 rounded-lg border border-foreground/30 bg-foreground/10 px-6 py-3 text-sm font-semibold text-foreground transition-all hover:bg-foreground/15 hover:border-foreground/40"
                >
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  {t("hero_cta_pay_semester")}
                </Link>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={300} direction="right">
            <div
              className="flex justify-center lg:justify-end"
              aria-hidden="true"
            >
              <div className="relative">
                <img
                  src="/images/ydf-white.png"
                  alt=""
                  className="h-64 w-64 rounded-full object-cover lg:h-80 lg:w-80 drop-shadow-2xl"
                />
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Stats bar */}
        <FadeIn delay={600} direction="up">
          <div className="mt-16 grid grid-cols-3 gap-6 rounded-2xl bg-foreground/10 p-6 backdrop-blur-sm lg:mt-20 lg:p-8">
            <div className="text-center">
              <CountUp
                end={400}
                suffix="+"
                className="text-3xl font-bold text-primary lg:text-4xl"
              />
              <p className="mt-1 text-xs text-foreground/80 lg:text-sm">
                {t("hero_stat_youth")}
              </p>
            </div>
            <div className="text-center">
              <CountUp
                end={111}
                suffix="+"
                className="text-3xl font-bold text-primary lg:text-4xl"
              />
              <p className="mt-1 text-xs text-foreground/80 lg:text-sm">
                {t("hero_stat_programs")}
              </p>
            </div>
            <div className="text-center">
              <CountUp
                end={7}
                suffix="+"
                className="text-3xl font-bold text-primary lg:text-4xl"
              />
              <p className="mt-1 text-xs text-foreground/80 lg:text-sm">
                {t("hero_stat_years")}
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
