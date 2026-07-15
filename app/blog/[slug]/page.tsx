import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getPostBySlug, posts } from '@/lib/blog/posts';
import { headingFont } from '@/lib/vaporizacion/fonts';

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  return (
    <main id="main-content" className="mx-auto max-w-3xl px-4 py-16 sm:py-24">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
      >
        ← Todos los artículos
      </Link>

      <article className="mt-6">
        <p className="text-xs uppercase tracking-widest text-muted-foreground">{post.date}</p>
        <h1
          className={`${headingFont.className} mt-2 text-4xl font-bold tracking-tight text-primary sm:text-5xl`}
        >
          {post.title}
        </h1>
        <div className="mt-8 space-y-4 text-sm text-muted-foreground">
          {post.content.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
      </article>
    </main>
  );
}
