export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  content: string[];
};

/**
 * Artículos de noticias y tendencias sobre terapia de vaporización.
 * Se agregan manualmente a medida que se publican; no hay contenido de relleno.
 */
export const posts: BlogPost[] = [];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}

export function getSortedPosts(): BlogPost[] {
  return [...posts].sort((a, b) => (a.date < b.date ? 1 : -1));
}
