import { blogPosts } from "@/lib/blog/mock-posts";
import type { BlogPost } from "@/lib/blog/types";

function sortByNewest(posts: BlogPost[]): BlogPost[] {
  return [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}

export function getAllBlogPosts(): BlogPost[] {
  return sortByNewest(blogPosts);
}

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getFeaturedBlogPosts(limit = 3): BlogPost[] {
  const featured = sortByNewest(blogPosts.filter((post) => post.featured));
  if (featured.length > 0) {
    return featured.slice(0, limit);
  }

  return getAllBlogPosts().slice(0, limit);
}

export function getBlogStaticSlugs(): { slug: string }[] {
  return blogPosts.map((post) => ({ slug: post.slug }));
}
