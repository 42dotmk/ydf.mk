import { notFound } from "next/navigation";
import { CalendarDays, Clock3, User } from "lucide-react";
import { FadeIn } from "@/components/animate";
import { BlogArticleContent } from "@/components/blog/blog-article-content";
import { BlogBreadcrumb } from "@/components/blog/blog-breadcrumb";
import { getBlogPostBySlug } from "@/lib/blog/repository";

export const dynamic = "force-dynamic";

interface BlogArticlePageProps {
  params: Promise<{
    slug: string;
  }>;
}

function formatDate(date: string): string {
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  }).format(new Date(date));
}

export default async function BlogArticlePage({
  params,
}: BlogArticlePageProps) {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <main id="main-content" className="bg-background">
      <section className="relative h-[44vh] min-h-[280px] w-full overflow-hidden sm:h-[52vh]">
        <img
          src={post.image || "/placeholder.svg"}
          alt={post.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/35" />
      </section>

      <div className="mx-auto max-w-4xl px-4 pb-16 pt-8 lg:px-8 lg:pb-24">
        <FadeIn>
          <div className="mb-6 text-sm text-muted-foreground">
            <BlogBreadcrumb articleTitle={post.title} />
          </div>

          <h1 className="text-balance text-3xl font-bold leading-tight text-foreground lg:text-5xl">
            {post.title}
          </h1>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <User className="h-4 w-4" aria-hidden="true" />
              {post.author}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              {formatDate(post.date)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock3 className="h-4 w-4" aria-hidden="true" />
              {post.readingTime}
            </span>
          </div>
        </FadeIn>

        <FadeIn delay={100}>
          <article className="mt-10 rounded-2xl border bg-card p-6 sm:p-8">
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {post.description}
            </p>
            <BlogArticleContent blocks={post.content} />
          </article>
        </FadeIn>
      </div>
    </main>
  );
}
