import { getAllBlogPosts, getFeaturedBlogPosts } from "@/lib/blog/repository";
import { PageHeader } from "@/components/page-header";
import { BlogPageContent } from "@/components/blog/blog-page-content";

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const [allPosts, featuredPosts] = await Promise.all([
    getAllBlogPosts(),
    getFeaturedBlogPosts(4),
  ]);

  return (
    <>
      <PageHeader
        title="Blog"
        description="Stories, insights, and practical knowledge from our work with youth from diverse families."
        image="/images/hero-community.jpg"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "Blog" }]}
      />
      <BlogPageContent allPosts={allPosts} featuredPosts={featuredPosts} />
    </>
  );
}
