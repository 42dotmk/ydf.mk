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
  Download,
  ExternalLink,
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

  const yearlyReports = [
    {
      year: "2023",
      file: "/yearly_reports/Наративен и финансиски извештај за 2023.pdf",
    },
    {
      year: "2024",
      file: "/yearly_reports/Наративен и финансиски извештај за 2024.pdf",
    },
    {
      year: "2025",
      file: "/yearly_reports/Наративен и финансиски извештај за 2025.pdf",
    },
  ];

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
                  email: "ellena.bozhinovska@gmail.com",
                },
                {
                  nameKey: "team_bojana_name",
                  roleKey: "team_bojana_role",
                  image: "/images/team/bojana.jpg",
                  email: "bojana.ydf@gmail.com",
                },
                {
                  nameKey: "team_mence_name",
                  roleKey: "team_mence_role",
                  image: "/images/team/mence.jpg",
                  email: "mence.ydf@outlook.com",
                },
                {
                  nameKey: "team_teodora_name",
                  roleKey: "team_teodora_role",
                  image: "/images/team/teodora.jpg",
                  email: "teodoraydf@gmail.com",
                },
                {
                  nameKey: "team_stanisa_name",
                  roleKey: "team_stanisa_role",
                  image: "/images/team/stanisha.jpg",
                  email: "stanisa.ydf@gmail.com",
                },
                {
                  nameKey: "team_liljana_name",
                  roleKey: "team_liljana_role",
                  image: "/images/team/lili.jpg",
                  email: "liljanaydf@gmail.com",
                },
                {
                  nameKey: "team_klimentina_name",
                  roleKey: "team_klimentina_role",
                  image: "/images/team/klimentina.jpg",
                  email: "klimentina.ydf@gmail.com",
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
                      <a
                        href={`mailto:${member.email}`}
                        className="text-xs font-medium text-primary transition-colors hover:text-primary/80"
                      >
                        {member.email}
                      </a>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* Yearly reports */}
        <section className="mt-16">
          <FadeIn>
            <div className="max-w-3xl">
              <h2 className="text-2xl font-bold text-foreground">
                {t("about_reports_title")}
              </h2>
              <p className="mt-3 text-muted-foreground">
                {t("about_reports_desc")}
              </p>
            </div>
          </FadeIn>
          <div className="mt-8 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {yearlyReports.map((report, i) => {
              const reportUrl = encodeURI(report.file);

              return (
                <FadeIn key={report.year} delay={i * 100} direction="up">
                  <article className="flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-md">
                    <div className="border-b bg-muted/30 p-5">
                      <p className="text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">
                        {report.year}
                      </p>
                      <h3 className="mt-2 text-xl font-bold text-card-foreground">
                        {t("about_report_title")}
                      </h3>
                    </div>
                    <div className="border-b bg-background p-4">
                      <div className="aspect-[3/4] overflow-hidden rounded-xl border bg-muted/20">
                        <object
                          data={reportUrl}
                          type="application/pdf"
                          className="h-full w-full"
                        >
                          <div className="flex h-full flex-col items-center justify-center gap-3 p-6 text-center">
                            <p className="text-sm text-muted-foreground">
                              {t("about_report_preview_fallback")}
                            </p>
                            <a
                              href={reportUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                            >
                              {t("about_report_open")}
                              <ExternalLink
                                className="h-4 w-4"
                                aria-hidden="true"
                              />
                            </a>
                          </div>
                        </object>
                      </div>
                    </div>
                    <div className="mt-auto flex flex-wrap gap-3 p-5">
                      <a
                        href={reportUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 text-sm font-semibold text-primary transition-colors hover:bg-primary/10"
                      >
                        {t("about_report_open")}
                        <ExternalLink className="h-4 w-4" aria-hidden="true" />
                      </a>
                      <a
                        href={reportUrl}
                        download
                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                      >
                        {t("about_report_download")}
                        <Download className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </article>
                </FadeIn>
              );
            })}
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
