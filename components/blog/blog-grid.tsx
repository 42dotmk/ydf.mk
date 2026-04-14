import type { BlogPost } from "@/lib/blog/types";
import { FadeIn } from "@/components/animate";
import { BlogCard } from "@/components/blog/blog-card";

interface BlogGridProps {
  posts: BlogPost[];
}

export function BlogGrid({ posts }: BlogGridProps) {
  if (posts.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed bg-muted/30 px-6 py-12 text-center">
        <h2 className="text-xl font-semibold">No blog posts found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Try another search term to discover more content.
        </p>
      </div>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post, index) => (
        <FadeIn key={post.slug} delay={index * 80} direction="up">
          <BlogCard post={post} />
        </FadeIn>
      ))}
    </div>
  );
}
