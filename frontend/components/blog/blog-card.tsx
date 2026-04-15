import Link from "next/link";
import { ArrowRight, CalendarDays } from "lucide-react";
import type { BlogPost } from "@/lib/blog/types";

interface BlogCardProps {
  post: BlogPost;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export function BlogCard({ post }: BlogCardProps) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-md">
      <Link
        href={`/blog/${post.slug}`}
        className="relative block h-52 overflow-hidden"
      >
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <span className="inline-flex items-center gap-1 text-xs text-muted-foreground">
          <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
          {formatDate(post.date)}
        </span>

        <h3 className="text-xl font-semibold leading-snug text-card-foreground">
          <Link
            href={`/blog/${post.slug}`}
            className="transition-colors hover:text-primary"
          >
            {post.title}
          </Link>
        </h3>

        <p className="text-sm leading-relaxed text-muted-foreground">
          {post.description}
        </p>

        <Link
          href={`/blog/${post.slug}`}
          className="mt-auto inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
        >
          Read More
          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
        </Link>
      </div>
    </article>
  );
}
