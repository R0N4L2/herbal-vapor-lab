import Link from 'next/link';
import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { HerbShowcaseCard } from '@/components/herb-showcase-card';
import { CATEGORY_META, CATEGORY_ORDER, getHerbsByCategory } from '@/lib/vaporizacion/herbs-data';
import { CATEGORY_ICONS } from '@/lib/vaporizacion/category-icons';
import { headingFont } from '@/lib/vaporizacion/fonts';

type Props = {
  params: Promise<{ categoria: string }>;
};

export function generateStaticParams() {
  return CATEGORY_ORDER.map((categoria) => ({ categoria }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { categoria } = await params;
  const meta = CATEGORY_META[categoria as keyof typeof CATEGORY_META];
  if (!meta) return {};
  return {
    title: meta.label,
    description: meta.tagline,
  };
}

export default async function CategoriaPage({ params }: Props) {
  const { categoria } = await params;
  const meta = CATEGORY_META[categoria as keyof typeof CATEGORY_META];
  if (!meta) notFound();

  const herbsInCategory = getHerbsByCategory(meta.slug);
  const Icon = CATEGORY_ICONS[meta.slug];

  return (
    <main id="main-content" className="mx-auto max-w-5xl px-4 py-16 sm:py-24">
      <Link
        href="/"
        className="text-sm text-muted-foreground underline-offset-2 hover:text-primary hover:underline"
      >
        ← Todas las categorías
      </Link>

      <section aria-labelledby="categoria-heading" className="mt-6 text-center">
        <h1
          id="categoria-heading"
          className={`${headingFont.className} flex items-center justify-center gap-3 text-4xl font-bold tracking-tight text-primary sm:text-6xl`}
        >
          <Icon aria-hidden className="h-9 w-9 shrink-0 sm:h-12 sm:w-12" />
          {meta.label}
        </h1>
        <p className="mx-auto mt-6 max-w-2xl text-balance text-muted-foreground">{meta.tagline}</p>
        <p className="mt-4 text-xs uppercase tracking-widest text-muted-foreground">
          {herbsInCategory.length} {herbsInCategory.length === 1 ? 'hierba' : 'hierbas'}
        </p>
        <div className="mx-auto mt-8 h-px w-24 bg-primary/30" />
      </section>

      <section aria-label={`Hierbas de la categoría ${meta.label}`} className="mt-16 space-y-8">
        {herbsInCategory.map((herb) => (
          <HerbShowcaseCard key={herb.slug} herb={herb} />
        ))}
      </section>
    </main>
  );
}
