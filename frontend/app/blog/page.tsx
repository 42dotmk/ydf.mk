"use client";

import { useMemo, useState } from "react";
import { FadeIn } from "@/components/animate";
import { PageHeader } from "@/components/page-header";
import { BlogGrid } from "@/components/blog/blog-grid";
import { BlogPagination } from "@/components/blog/blog-pagination";
import { FeaturedSlider } from "@/components/blog/featured-slider";
import { SearchBar } from "@/components/blog/search-bar";
import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blog/repository";

const POSTS_PER_PAGE = 6;

function normalizeText(value: string): string {
  return value.toLowerCase();
}

function flattenContentText(
  postContent: { type: string; text?: string; items?: string[] }[],
): string {
  return postContent
    .flatMap((block) => {
      if (block.type === "list") {
        return block.items ?? [];
      }
      return block.text ? [block.text] : [];
    })
    .join(" ");
}

export default function BlogPage() {
  const [query, setQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const allPosts = useMemo(() => getAllBlogPosts(), []);
  const featuredPosts = useMemo(() => getFeaturedBlogPosts(4), []);

  const filteredPosts = useMemo(() => {
    if (!query.trim()) {
      return allPosts;
    }

    const normalizedQuery = normalizeText(query.trim());

    return allPosts.filter((post) => {
      const searchable = [
        post.title,
        post.description,
        flattenContentText(post.content),
      ]
        .join(" ")
        .toLowerCase();

      return searchable.includes(normalizedQuery);
    });
  }, [allPosts, query]);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredPosts.length / POSTS_PER_PAGE),
  );
  const safePage = Math.min(currentPage, totalPages);

  const pagedPosts = useMemo(() => {
    const start = (safePage - 1) * POSTS_PER_PAGE;
    return filteredPosts.slice(start, start + POSTS_PER_PAGE);
  }, [filteredPosts, safePage]);

  function handleQueryChange(value: string) {
    setQuery(value);
    setCurrentPage(1);
  }

  function handlePageChange(page: number) {
    setCurrentPage(page);
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 480, behavior: "smooth" });
    }
  }

  return (
    <>
      <PageHeader
        title="Blog"
        description="Stories, insights, and practical knowledge from our work with youth from diverse families."
        image="/images/hero-community.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />

      <main
        id="main-content"
        className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16"
      >
        <FadeIn>
          <FeaturedSlider
            posts={featuredPosts}
            title={
              featuredPosts.some((post) => post.featured)
                ? "Featured"
                : "Latest"
            }
          />
        </FadeIn>

        <FadeIn delay={100}>
          <section className="mb-8 rounded-2xl border bg-card p-4 sm:p-5">
            <SearchBar query={query} onChange={handleQueryChange} />
            <p className="mt-3 text-sm text-muted-foreground">
              Showing {filteredPosts.length} post
              {filteredPosts.length === 1 ? "" : "s"}
              {query.trim() ? ` for "${query.trim()}"` : ""}
            </p>
          </section>
        </FadeIn>

        <BlogGrid posts={pagedPosts} />
        <BlogPagination
          currentPage={safePage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </main>
    </>
  );
}
