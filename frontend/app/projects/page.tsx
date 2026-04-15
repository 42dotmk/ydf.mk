"use client";

import Link from "next/link";
import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animate";
import {
  GraduationCap,
  Heart,
  Users,
  FileText,
  Calendar,
  TrendingUp,
  ArrowRight,
} from "lucide-react";

const projects = [
  {
    titleKey: "projects_1_title",
    descKey: "projects_1_desc",
    statusKey: "projects_1_status",
    periodKey: "projects_1_period",
    impactKey: "projects_1_impact",
    icon: GraduationCap,
    color: "bg-primary",
    image: "/images/education.jpg",
    active: true,
  },
  {
    titleKey: "projects_2_title",
    descKey: "projects_2_desc",
    statusKey: "projects_2_status",
    periodKey: "projects_2_period",
    impactKey: "projects_2_impact",
    icon: Heart,
    color: "bg-teal",
    image: "/images/workshop.jpg",
    active: true,
  },
  {
    titleKey: "projects_3_title",
    descKey: "projects_3_desc",
    statusKey: "projects_3_status",
    periodKey: "projects_3_period",
    impactKey: "projects_3_impact",
    icon: Users,
    color: "bg-warm",
    image: "/images/community-event.jpg",
    active: true,
  },
  {
    titleKey: "projects_4_title",
    descKey: "projects_4_desc",
    statusKey: "projects_4_status",
    periodKey: "projects_4_period",
    impactKey: "projects_4_impact",
    icon: FileText,
    color: "bg-muted-foreground",
    image: "/images/forum.jpg",
    active: false,
  },
];

export default function ProjectsPage() {
  const { t } = useLocale();

  const activeProjects = projects.filter((p) => p.active);
  const completedProjects = projects.filter((p) => !p.active);

  return (
    <>
      <PageHeader
        title={t("projects_page_title")}
        description={t("projects_page_desc")}
        image="/images/community-event.jpg"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Active Projects */}
        <FadeIn>
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            {t("projects_active")}
          </h2>
        </FadeIn>
        <div className="grid gap-8 lg:grid-cols-3">
          {activeProjects.map((project, i) => (
            <FadeIn key={project.titleKey} delay={i * 150} direction="up">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20" />
                  <div className={`absolute left-4 top-4 rounded-full ${project.color} px-3 py-1 text-xs font-semibold text-background`}>
                    {t(project.statusKey)}
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-4 p-6">
                  <div className="flex items-center gap-2">
                    <project.icon className="h-5 w-5 text-primary" aria-hidden="true" />
                    <h3 className="text-lg font-semibold text-card-foreground">
                      {t(project.titleKey)}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(project.descKey)}
                  </p>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t">
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                      <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                      {t(project.periodKey)}
                    </div>
                    <div className="flex items-center gap-1.5 text-xs font-medium text-primary">
                      <TrendingUp className="h-3.5 w-3.5" aria-hidden="true" />
                      {t(project.impactKey)}
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Completed Projects */}
        <FadeIn>
          <h2 className="mb-8 mt-16 text-2xl font-bold text-foreground">
            {t("projects_completed")}
          </h2>
        </FadeIn>
        <div className="grid gap-6 lg:grid-cols-2">
          {completedProjects.map((project, i) => (
            <FadeIn key={project.titleKey} delay={i * 150} direction="up">
              <article className="flex gap-4 rounded-2xl border bg-card p-6 transition-all hover:shadow-md">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground">
                      {t(project.statusKey)}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {t(project.periodKey)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground">
                    {t(project.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(project.descKey)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

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
