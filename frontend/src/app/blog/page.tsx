import Link from "next/link";
import { blogPosts } from "@/data/blog";

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">Blog</p>
      <h1 className="mt-3 font-serif text-6xl">Wedding Planning Journal</h1>
      <div className="mt-10 grid gap-5 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="rounded-2xl border border-champagne/35 bg-white p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-night/50">{post.publishedAt}</p>
            <h2 className="mt-3 font-serif text-3xl">{post.title}</h2>
            <p className="mt-3 text-sm text-night/75">{post.excerpt}</p>
            <Link href={`/blog/${post.slug}`} className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-champagne">
              Read Article
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
