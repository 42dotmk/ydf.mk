"use client";

import { useLocale } from "@/lib/locale-context";
import { Search, GraduationCap, Users } from "lucide-react";
import { FadeIn } from "@/components/animate";

const pillars = [
  {
    titleKey: "pillar_1_title",
    descKey: "pillar_1_desc",
    icon: Search,
    color: "bg-primary/10 text-primary",
    image: "/images/workshop.jpg",
  },
  {
    titleKey: "pillar_2_title",
    descKey: "pillar_2_desc",
    icon: GraduationCap,
    color: "bg-teal/10 text-teal",
    image: "/images/education.jpg",
  },
  {
    titleKey: "pillar_3_title",
    descKey: "pillar_3_desc",
    icon: Users,
    color: "bg-warm/10 text-warm",
    image: "/images/community-event.jpg",
  },
];

export function PillarsSection() {
  const { t } = useLocale();

  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <FadeIn>
          <h2 className="mb-4 text-center text-3xl font-bold text-foreground lg:text-4xl">
            {t("what_we_do_title")}
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <FadeIn key={pillar.titleKey} delay={i * 150} direction="up">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={pillar.image || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/20" />
                  <div className={`absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl ${pillar.color} backdrop-blur-sm bg-background/90`}>
                    <pillar.icon className="h-5 w-5" aria-hidden="true" />
                  </div>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {t(pillar.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(pillar.descKey)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
