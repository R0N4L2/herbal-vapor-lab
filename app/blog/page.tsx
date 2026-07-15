import Link from 'next/link';
import type { Metadata } from 'next';
import { getSortedPosts } from '@/lib/blog/posts';
import { headingFont } from '@/lib/vaporizacion/fonts';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Noticias y tendencias sobre terapia de vaporización.',
};

export default function BlogPage() {
  const sortedPosts = getSortedPosts();

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <section aria-labelledby="blog-heading" className="text-center">
        <h1
          id="blog-heading"
          className={`${headingFont.className} text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          Blog
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">
          Noticias y tendencias sobre terapia de vaporización.
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      {sortedPosts.length === 0 ? (
        <section className="mt-16 rounded-lg border border-border bg-muted/60 p-6 text-center text-sm text-muted-foreground">
          <p>Todavía no hay artículos publicados. Vuelve pronto.</p>
        </section>
      ) : (
        <section aria-label="Artículos" className="mt-16 space-y-8">
          {sortedPosts.map((post) => (
            <article key={post.slug} className="rounded-lg border border-border p-6">
              <p className="text-xs uppercase tracking-widest text-muted-foreground">{post.date}</p>
              <h2 className={`${headingFont.className} mt-2 text-2xl font-bold text-primary`}>
                <Link href={`/blog/${post.slug}`} className="hover:underline">
                  {post.title}
                </Link>
              </h2>
              <p className="mt-3 text-sm text-muted-foreground">{post.excerpt}</p>
              <Link
                href={`/blog/${post.slug}`}
                className="mt-4 inline-block text-sm font-medium text-primary underline underline-offset-2"
              >
                Leer más →
              </Link>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}
