"use client";

import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animate";
import { Calendar, MapPin, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingEvents = [
  {
    titleKey: "events_1_title",
    dateKey: "events_1_date",
    timeKey: "events_1_time",
    locationKey: "events_1_location",
    descKey: "events_1_desc",
    typeKey: "events_1_type",
    image: "/images/workshop.jpg",
    typeColor: "bg-primary text-primary-foreground",
  },
  {
    titleKey: "events_2_title",
    dateKey: "events_2_date",
    timeKey: "events_2_time",
    locationKey: "events_2_location",
    descKey: "events_2_desc",
    typeKey: "events_2_type",
    image: "/images/forum.jpg",
    typeColor: "bg-teal text-teal-foreground",
  },
  {
    titleKey: "events_3_title",
    dateKey: "events_3_date",
    timeKey: "events_3_time",
    locationKey: "events_3_location",
    descKey: "events_3_desc",
    typeKey: "events_3_type",
    image: "/images/community-event.jpg",
    typeColor: "bg-warm text-warm-foreground",
  },
];

const pastEvents = [
  {
    titleKey: "events_past_1_title",
    dateKey: "events_past_1_date",
    locationKey: "events_past_1_location",
    descKey: "events_past_1_desc",
    image: "/images/forum.jpg",
  },
];

export default function EventsPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHeader
        title={t("events_page_title")}
        description={t("events_page_desc")}
        image="/images/community-event.jpg"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Upcoming events */}
        <FadeIn>
          <h2 className="mb-8 text-2xl font-bold text-foreground">
            {t("events_upcoming")}
          </h2>
        </FadeIn>
        <div className="flex flex-col gap-8">
          {upcomingEvents.map((event, i) => (
            <FadeIn key={event.titleKey} delay={i * 150} direction="up">
              <article className="group overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
                <div className="grid lg:grid-cols-3">
                  <div className="relative h-56 overflow-hidden lg:h-auto">
                    <img
                      src={event.image || "/placeholder.svg"}
                      alt=""
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-foreground/10" />
                    <span className={`absolute left-4 top-4 rounded-full px-3 py-1 text-xs font-semibold ${event.typeColor}`}>
                      {t(event.typeKey)}
                    </span>
                  </div>
                  <div className="flex flex-col justify-center gap-4 p-8 lg:col-span-2">
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1.5 font-medium text-primary">
                        <Calendar className="h-4 w-4" aria-hidden="true" />
                        {t(event.dateKey)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-4 w-4" aria-hidden="true" />
                        {t(event.timeKey)}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <MapPin className="h-4 w-4" aria-hidden="true" />
                        {t(event.locationKey)}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-card-foreground lg:text-2xl">
                      {t(event.titleKey)}
                    </h3>
                    <p className="leading-relaxed text-muted-foreground">
                      {t(event.descKey)}
                    </p>
                    <div className="flex gap-3 pt-2">
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-[1.02]"
                      >
                        {t("events_register")}
                        <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Past events */}
        <FadeIn>
          <h2 className="mb-8 mt-16 text-2xl font-bold text-foreground">
            {t("events_past")}
          </h2>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-2">
          {pastEvents.map((event, i) => (
            <FadeIn key={event.titleKey} delay={i * 100} direction="up">
              <article className="flex gap-4 rounded-2xl border bg-card p-6 transition-all hover:shadow-md">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-xl">
                  <img
                    src={event.image || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-foreground/20" />
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" aria-hidden="true" />
                      {t(event.dateKey)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {t(event.locationKey)}
                    </span>
                  </div>
                  <h3 className="text-base font-semibold text-card-foreground">
                    {t(event.titleKey)}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {t(event.descKey)}
                  </p>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </>
  );
}
