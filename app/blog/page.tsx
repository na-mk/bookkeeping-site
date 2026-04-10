import SectionHeading from "@/components/SectionHeading";
import BlogCard from "@/components/BlogCard";
import { getBlogPosts } from "@/lib/queries";
import { samplePosts } from "@/lib/sampleData";

export const metadata = {
  title: "Blog | Bookkeeping Site",
  description: "Articles and resources focused on spending visibility, cleanup work, and better bookkeeping habits.",
};

export default async function BlogPage() {
  const posts = await getBlogPosts();
  const displayedPosts = posts.length ? posts : samplePosts;

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <SectionHeading
          title="Blog"
          description="Advice for business owners who want cleaner books, healthier routines, and more control over spending."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          {displayedPosts.map((post) => (
            <BlogCard key={post.slug.current} post={post} />
          ))}
        </div>
      </section>
    </main>
  );
}
