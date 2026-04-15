"use client";

import { useLocale } from "@/lib/locale-context";
import { PageHeader } from "@/components/page-header";
import { FadeIn } from "@/components/animate";
import { Calendar, ArrowRight, Tag } from "lucide-react";
import Link from "next/link";

const newsArticles = [
  {
    titleKey: "news_1_title",
    dateKey: "news_1_date",
    excerptKey: "news_1_excerpt",
    categoryKey: "news_1_category",
    image: "/images/workshop.jpg",
    categoryColor: "bg-primary/10 text-primary",
  },
  {
    titleKey: "news_2_title",
    dateKey: "news_2_date",
    excerptKey: "news_2_excerpt",
    categoryKey: "news_2_category",
    image: "/images/education.jpg",
    categoryColor: "bg-teal/10 text-teal",
  },
  {
    titleKey: "news_3_title",
    dateKey: "news_3_date",
    excerptKey: "news_3_excerpt",
    categoryKey: "news_3_category",
    image: "/images/forum.jpg",
    categoryColor: "bg-info/10 text-info",
  },
  {
    titleKey: "news_4_title",
    dateKey: "news_4_date",
    excerptKey: "news_4_excerpt",
    categoryKey: "news_4_category",
    image: "/images/community-event.jpg",
    categoryColor: "bg-warm/10 text-warm",
  },
];

export default function NewsPage() {
  const { t } = useLocale();

  return (
    <>
      <PageHeader
        title={t("news_page_title")}
        description={t("news_page_desc")}
        image="/images/hero-community.jpg"
      />
      <div className="mx-auto max-w-7xl px-4 py-16 lg:px-8 lg:py-24">
        {/* Featured article (first one) */}
        <FadeIn>
          <article className="group mb-12 overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg">
            <div className="grid lg:grid-cols-2">
              <div className="relative h-64 overflow-hidden lg:h-auto">
                <img
                  src={newsArticles[0].image || "/placeholder.svg"}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-foreground/10" />
              </div>
              <div className="flex flex-col justify-center gap-4 p-8">
                <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${newsArticles[0].categoryColor}`}>
                    <Tag className="h-3 w-3" aria-hidden="true" />
                    {t(newsArticles[0].categoryKey)}
                  </span>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {t(newsArticles[0].dateKey)}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-card-foreground lg:text-3xl">
                  {t(newsArticles[0].titleKey)}
                </h2>
                <p className="leading-relaxed text-muted-foreground">
                  {t(newsArticles[0].excerptKey)}
                </p>
                <button
                  type="button"
                  className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  {t("read_more")}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </div>
          </article>
        </FadeIn>

        {/* Other articles */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {newsArticles.slice(1).map((article, i) => (
            <FadeIn key={article.titleKey} delay={i * 150} direction="up">
              <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all hover:shadow-lg hover:-translate-y-1">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={article.image || "/placeholder.svg"}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/10" />
                  <span className={`absolute left-4 top-4 inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold ${article.categoryColor} bg-background/90 backdrop-blur-sm`}>
                    {t(article.categoryKey)}
                  </span>
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" aria-hidden="true" />
                    {t(article.dateKey)}
                  </span>
                  <h3 className="text-lg font-semibold text-card-foreground">
                    {t(article.titleKey)}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {t(article.excerptKey)}
                  </p>
                  <button
                    type="button"
                    className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                  >
                    {t("read_more")}
                    <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                  </button>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>

        {/* Newsletter CTA */}
        <FadeIn>
          <section className="mt-16 rounded-2xl bg-primary/5 p-8 text-center lg:p-12">
            <p className="mb-4 text-lg font-medium text-foreground">
              {t("newsletter_title")}
            </p>
            <p className="mb-6 text-sm text-muted-foreground">{t("newsletter_desc")}</p>
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
