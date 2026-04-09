"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animate";
import {
  Target,
  Eye,
  Heart,
  Users,
  Shield,
  Megaphone,
  ArrowRight,
} from "lucide-react";

const valueIcons = [Heart, Users, Shield, Eye, Megaphone];
const valueColors = [
  "bg-primary/10 text-primary",
  "bg-teal/10 text-teal",
  "bg-warm/10 text-warm",
  "bg-info/10 text-info",
  "bg-primary/10 text-primary",
];

export default function AboutPage() {
  const { t } = useLocale();

  const values = [
    t("about_value_1"),
    t("about_value_2"),
    t("about_value_3"),
    t("about_value_4"),
    t("about_value_5"),
  ];

  return (
    <>
      <PageHeader
        title={t("about_title")}
        description={t("about_desc")}
        image="/images/hero-community.jpg"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Mission & Vision */}
        <div className="grid gap-8 lg:grid-cols-2">
          <FadeIn direction="left">
            <section className="flex h-full flex-col gap-4 rounded-2xl border bg-card p-8 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                <Target className="h-6 w-6 text-primary" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">
                {t("about_mission_title")}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t("about_mission")}
              </p>
            </section>
          </FadeIn>
          <FadeIn direction="right">
            <section className="flex h-full flex-col gap-4 rounded-2xl border bg-card p-8 transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal/10">
                <Eye className="h-6 w-6 text-teal" aria-hidden="true" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">
                {t("about_vision_title")}
              </h2>
              <p className="leading-relaxed text-muted-foreground">
                {t("about_vision")}
              </p>
            </section>
          </FadeIn>
        </div>

        {/* Image banner */}
        <FadeIn>
          <div className="mt-16 overflow-hidden rounded-2xl">
            <img
              src="/images/community-event.jpg"
              alt=""
              className="h-64 w-full object-cover lg:h-80"
            />
          </div>
        </FadeIn>

        {/* Values */}
        <section className="mt-16">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              {t("about_values_title")}
            </h2>
          </FadeIn>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {values.map((value, i) => {
              const Icon = valueIcons[i];
              return (
                <FadeIn key={value} delay={i * 100} direction="up">
                  <div className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 text-center transition-all hover:shadow-md hover:-translate-y-1">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg ${valueColors[i]}`}
                    >
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-sm font-semibold text-card-foreground">
                      {value}
                    </span>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </section>

        {/* Team */}
        <section className="mt-16">
          <FadeIn>
            <h2 className="mb-8 text-2xl font-bold text-foreground">
              {t("about_team_title")}
            </h2>
          </FadeIn>
          <div className="flex justify-center">
            <div className="grid gap-6 w-fit auto-cols-max sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  nameKey: "team_elena_name",
                  roleKey: "team_elena_role",
                  image: "/images/team/elena.jpg",
                },
                {
                  nameKey: "team_bojana_name",
                  roleKey: "team_bojana_role",
                  image: "/images/team/bojana.jpg",
                },
                {
                  nameKey: "team_mence_name",
                  roleKey: "team_mence_role",
                  image: "/images/team/mence.jpg",
                },
                {
                  nameKey: "team_teodora_name",
                  roleKey: "team_teodora_role",
                  image: "/images/team/teodora.jpg",
                },
                {
                  nameKey: "team_stanisa_name",
                  roleKey: "team_stanisa_role",
                  image: "/images/team/stanisha.jpg",
                },
                {
                  nameKey: "team_liljana_name",
                  roleKey: "team_liljana_role",
                  image: "/images/team/lili.jpg",
                },
                {
                  nameKey: "team_klimentina_name",
                  roleKey: "team_klimentina_role",
                  image: "/images/team/klimentina.jpg",
                },
              ].map((member, i) => {
                const name = t(member.nameKey);
                return (
                  <FadeIn key={member.nameKey} delay={i * 100} direction="up">
                    <div className="flex flex-col items-center gap-3 rounded-2xl border bg-card p-6 transition-all hover:shadow-md">
                      <img
                        src={member.image}
                        alt={name}
                        className="h-20 w-20 rounded-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src =
                            `https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`;
                        }}
                      />
                      <span className="text-sm font-semibold text-card-foreground">
                        {name}
                      </span>
                      <span className="text-xs text-muted-foreground text-center">
                        {t(member.roleKey)}
                      </span>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA */}
        <FadeIn>
          <section className="mt-16 rounded-2xl bg-primary/5 p-8 text-center lg:p-12">
            <p className="mb-6 text-lg font-medium text-foreground">
              {t("about_cta")}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
            >
              {t("nav_contact")}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </section>
        </FadeIn>
      </div>
    </>
  );
}
