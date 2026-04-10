import Link from "next/link";
import type { BlogPost } from "@/lib/types";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <article className="group rounded-[2rem] border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl">
      <div className="space-y-4">
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-emerald-600">Article</p>
          <h3 className="mt-3 text-2xl font-semibold text-slate-900">{post.title}</h3>
        </div>
        <p className="text-sm leading-7 text-slate-600">{post.excerpt}</p>
      </div>
      <div className="mt-6 flex items-center justify-between text-sm text-slate-500">
        <span>
          {new Date(post.publishedAt).toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          })}
        </span>
        <Link
          href={`/blog/${post.slug.current}`}
          className="font-semibold text-emerald-700 transition group-hover:text-emerald-800"
        >
          Read article →
        </Link>
      </div>
    </article>
  );
}
