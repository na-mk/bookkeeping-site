import { notFound } from "next/navigation";
import { getBlogPostBySlug, getBlogSlugs } from "@/lib/queries";

export const dynamicParams = false;

export async function generateStaticParams() {
  const slugs = await getBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);
  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: `${post.title} | Bookkeeping Site`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getBlogPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="bg-slate-50 text-slate-950">
      <section className="mx-auto max-w-5xl px-6 py-20 lg:px-8">
        <div className="rounded-[2rem] border border-emerald-100 bg-white p-10 shadow-sm">
          <div className="mb-4 text-sm uppercase tracking-[0.24em] text-emerald-600">Article</div>
          <h1 className="text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-col gap-2 text-sm text-slate-500 sm:flex-row sm:items-center sm:gap-4">
            <span>By {post.author?.name ?? "Bookkeeping Site"}</span>
            <span>
              {new Date(post.publishedAt).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
          </div>
          <p className="mt-8 text-lg leading-8 text-slate-700">{post.excerpt}</p>
          <div className="mt-10 max-w-none text-slate-800">
            <p className="text-base leading-8 text-slate-700">
              This post is managed through Sanity CMS and can be expanded with richer sections,
              lists, and media whenever you are ready to publish full editorial content.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
