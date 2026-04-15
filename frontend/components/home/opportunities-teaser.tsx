"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { Users, Briefcase, HandHeart, Award } from "lucide-react";
import { FadeIn } from "@/components/animate";

const roles = [
  { icon: Users, labelKey: "member", color: "bg-primary/10 text-primary" },
  // { icon: Briefcase, labelKey: "participant", color: "bg-teal/10 text-teal" },
  { icon: HandHeart, labelKey: "volunteer", color: "bg-warm/10 text-warm" },
  { icon: Award, labelKey: "intern", color: "bg-info/10 text-info" },
];

export function OpportunitiesTeaser() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold text-foreground lg:text-4xl">
              {t("opportunities_title")}
            </h2>
            <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground">
              {t("opportunities_teaser")}
            </p>
          </div>
        </FadeIn>
        <div className="mx-auto grid max-w-3xl gap-4 justify-center sm:grid-cols-2 lg:grid-cols-3">
          {roles.map((role, i) => (
            <FadeIn key={role.labelKey} delay={i * 100} direction="up">
              <div className="group flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110 ${role.color}`}
                >
                  <role.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <span className="text-sm font-semibold text-card-foreground">
                  {t(role.labelKey)}
                </span>
              </div>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={500}>
          <div className="mt-10 text-center">
            <Link
              href="/opportunities"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98]"
            >
              {t("opportunities_cta")}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
