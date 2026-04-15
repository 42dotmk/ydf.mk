import { fetchAPI, strapiMediaUrl } from "@/lib/strapi";
import type { BlogContentBlock, BlogPost } from "@/lib/blog/types";

/* ── Strapi response shapes ─────────────────────────────── */

interface StrapiImage {
  url: string;
  formats?: Record<string, { url: string }>;
}

interface StrapiBlogPost {
  id: number;
  documentId: string;
  title: string;
  slug: string;
  description: string;
  content: string;
  coverImage: StrapiImage | null;
  author: { name: string } | null;
  featured: boolean;
  publishedDate: string;
  readingTime: number;
}

interface StrapiResponse<T> {
  data: T[];
  meta: { pagination: { total: number } };
}

/* ── Markdown → content blocks ───────────────────────────── */

const LIST_RE = /^(?:[-*]|\d+\.)\s+/;

function parseMarkdownToBlocks(markdown: string): BlogContentBlock[] {
  const blocks: BlogContentBlock[] = [];
  const lines = markdown.split("\n");
  let i = 0;

  while (i < lines.length) {
    const trimmed = lines[i].trim();

    if (!trimmed) {
      i++;
      continue;
    }

    if (trimmed.startsWith("#")) {
      blocks.push({ type: "heading", text: trimmed.replace(/^#+\s+/, "") });
      i++;
      continue;
    }

    if (trimmed.startsWith("> ")) {
      const parts: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        parts.push(lines[i].trim().replace(/^>\s*/, ""));
        i++;
      }
      blocks.push({ type: "quote", text: parts.join(" ") });
      continue;
    }

    if (LIST_RE.test(trimmed)) {
      const items: string[] = [];
      while (i < lines.length && LIST_RE.test(lines[i].trim())) {
        items.push(lines[i].trim().replace(LIST_RE, ""));
        i++;
      }
      blocks.push({ type: "list", items });
      continue;
    }

    const paraLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].trim().startsWith("#") &&
      !lines[i].trim().startsWith("> ") &&
      !LIST_RE.test(lines[i].trim())
    ) {
      paraLines.push(lines[i].trim());
      i++;
    }
    if (paraLines.length > 0) {
      blocks.push({ type: "paragraph", text: paraLines.join(" ") });
    }
  }

  return blocks;
}

/* ── Mapping ─────────────────────────────────────────────── */

function mapPost(post: StrapiBlogPost): BlogPost {
  return {
    slug: post.slug,
    title: post.title,
    description: post.description,
    content: parseMarkdownToBlocks(post.content ?? ""),
    image: post.coverImage
      ? strapiMediaUrl(post.coverImage.url)
      : "/placeholder.svg",
    author: post.author?.name ?? "YDF Team",
    date: post.publishedDate,
    readingTime: `${post.readingTime ?? 1} min read`,
    featured: post.featured ?? false,
  };
}

/* ── Public API ──────────────────────────────────────────── */

export async function getAllBlogPosts(): Promise<BlogPost[]> {
  const res = await fetchAPI<StrapiResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      "populate": "*",
      "sort": "publishedDate:desc",
      "pagination[pageSize]": "100",
    },
  );
  return res.data.map(mapPost);
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const res = await fetchAPI<StrapiResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      "filters[slug][$eq]": slug,
      "populate": "*",
    },
  );
  if (res.data.length === 0) return undefined;
  return mapPost(res.data[0]);
}

export async function getFeaturedBlogPosts(
  limit = 3,
): Promise<BlogPost[]> {
  const res = await fetchAPI<StrapiResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      "filters[featured][$eq]": "true",
      "populate": "*",
      "sort": "publishedDate:desc",
      "pagination[pageSize]": String(limit),
    },
  );

  if (res.data.length > 0) return res.data.map(mapPost);

  const fallback = await fetchAPI<StrapiResponse<StrapiBlogPost>>(
    "/api/blog-posts",
    {
      "populate": "*",
      "sort": "publishedDate:desc",
      "pagination[pageSize]": String(limit),
    },
  );
  return fallback.data.map(mapPost);
}
