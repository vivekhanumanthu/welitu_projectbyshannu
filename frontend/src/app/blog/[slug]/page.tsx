import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blog";

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);
  if (!post) return notFound();

  return (
    <article className="mx-auto max-w-3xl px-4 py-16 md:px-8">
      <p className="text-xs uppercase tracking-[0.2em] text-champagne">{post.publishedAt}</p>
      <h1 className="mt-3 font-serif text-6xl">{post.title}</h1>
      <p className="mt-8 text-base leading-relaxed text-night/80">{post.content}</p>
    </article>
  );
}
