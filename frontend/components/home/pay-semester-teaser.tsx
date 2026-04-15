"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { GraduationCap, ArrowRight } from "lucide-react";
import { FadeIn, CountUp } from "@/components/animate";

export function PaySemesterTeaser() {
  const { t } = useLocale();

  return (
    <section className="relative overflow-hidden bg-primary py-16 text-primary-foreground lg:py-24">
      <div className="absolute inset-0 z-0">
        <img
          src="/images/education.jpg"
          alt=""
          className="h-full w-full object-cover opacity-10"
        />
      </div>
      <div className="relative z-10 mx-auto max-w-7xl px-4 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <FadeIn direction="left">
            <div className="flex flex-col gap-6">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-foreground/15">
                <GraduationCap
                  className="h-7 w-7 text-primary-foreground"
                  aria-hidden="true"
                />
              </div>
              <h2 className="text-3xl font-bold lg:text-4xl">
                {t("pay_semester_title")}
              </h2>
              <p className="max-w-lg leading-relaxed opacity-80">
                {t("pay_semester_teaser")}
              </p>
              <div className="flex flex-wrap gap-3">
                <Link
                  href="/pay-a-semester"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary-foreground px-6 py-3 text-sm font-semibold text-primary transition-all hover:bg-primary-foreground/90 hover:scale-[1.02] active:scale-[0.98]"
                >
                  {t("pay_semester_cta")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/40 px-6 py-3 text-sm font-semibold transition-all hover:bg-primary-foreground/10"
                >
                  {t("pay_semester_apply")}
                </Link>
              </div>
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={200}>
            <div className="flex justify-center" aria-hidden="true">
              <div className="flex h-64 w-64 flex-col items-center justify-center rounded-full border-4 border-primary-foreground/30 bg-primary-foreground/10 backdrop-blur-sm">
                <CountUp
                  end={111}
                  suffix="+"
                  className="text-5xl font-bold text-primary-foreground"
                />
                <p className="mt-2 text-sm font-medium text-primary-foreground/80">
                  {t("hero_stat_programs")}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
