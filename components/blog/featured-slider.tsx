"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface FeaturedSliderProps {
  posts: BlogPost[];
  title?: string;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function FeaturedSlider({
  posts,
  title = "Featured",
}: FeaturedSliderProps) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slides = useMemo(() => posts.slice(0, 4), [posts]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    onSelect();
    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api || slides.length <= 1 || isPaused) {
      return;
    }

    const timer = window.setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 5000);

    return () => {
      window.clearInterval(timer);
    };
  }, [api, slides.length, isPaused]);

  if (slides.length === 0) {
    return null;
  }

  return (
    <section
      aria-label="Featured blog posts"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
      className="mb-10"
    >
      <div className="mb-4 flex items-center justify-between">
        <h2 className="text-2xl font-bold lg:text-3xl">{title}</h2>
        <span className="text-xs uppercase tracking-wide text-muted-foreground">
          Auto sliding
        </span>
      </div>

      <Carousel
        setApi={setApi}
        opts={{ align: "start", loop: false }}
        className="mx-0"
      >
        <CarouselContent>
          {slides.map((post) => (
            <CarouselItem key={post.slug}>
              <article className="group overflow-hidden rounded-2xl border bg-card">
                <div className="grid md:grid-cols-2">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="relative block h-64 overflow-hidden md:h-full"
                  >
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                    />
                  </Link>

                  <div className="flex flex-col gap-4 p-6 lg:p-8">
                    <span className="inline-flex w-fit items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Featured Story
                    </span>

                    <h3 className="text-2xl font-bold leading-tight text-card-foreground">
                      <Link
                        href={`/blog/${post.slug}`}
                        className="hover:text-primary"
                      >
                        {post.title}
                      </Link>
                    </h3>

                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {post.description}
                    </p>

                    <div className="mt-auto flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <CalendarDays
                          className="h-3.5 w-3.5"
                          aria-hidden="true"
                        />
                        {formatDate(post.date)}
                      </span>
                      <span>{post.readingTime}</span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                    >
                      Read More
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            </CarouselItem>
          ))}
        </CarouselContent>

        <CarouselPrevious className="-left-3 top-1/2 border-primary/20 bg-background md:-left-4" />
        <CarouselNext className="-right-3 top-1/2 border-primary/20 bg-background md:-right-4" />
      </Carousel>

      <div
        className="mt-4 flex items-center justify-center gap-2"
        aria-label="Slider indicators"
      >
        {slides.map((slide, index) => (
          <button
            key={slide.slug}
            type="button"
            onClick={() => api?.scrollTo(index)}
            className={`h-2.5 rounded-full transition-all ${
              index === current ? "w-6 bg-primary" : "w-2.5 bg-primary/30"
            }`}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={index === current}
          />
        ))}
      </div>
    </section>
  );
}
