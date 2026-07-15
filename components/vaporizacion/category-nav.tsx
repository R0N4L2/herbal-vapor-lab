'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { CATEGORY_META, CATEGORY_ORDER, getHerbsByCategory } from '@/lib/vaporizacion/herbs-data';
import { headingFont } from '@/lib/vaporizacion/fonts';

export function CategoryNav() {
  const pathname = usePathname();
  const [openSlug, setOpenSlug] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  function open(slug: string) {
    clearTimeout(closeTimer.current);
    setOpenSlug(slug);
  }

  function scheduleClose() {
    closeTimer.current = setTimeout(() => setOpenSlug(null), 150);
  }

  useEffect(() => {
    function onClickOutside(event: MouseEvent) {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setOpenSlug(null);
      }
    }
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpenSlug(null);
    }
    document.addEventListener('click', onClickOutside);
    document.addEventListener('keydown', onKeyDown);
    return () => {
      document.removeEventListener('click', onClickOutside);
      document.removeEventListener('keydown', onKeyDown);
    };
  }, []);

  useEffect(() => {
    setOpenSlug(null);
  }, [pathname]);

  return (
    <nav
      ref={navRef}
      aria-label="Categorías terapéuticas"
      className="sticky top-0 z-30 bg-primary text-primary-foreground shadow-sm"
    >
      <div className="mx-auto flex max-w-5xl items-center gap-2 px-4 py-2 text-sm">
        <Link
          href="/"
          className={`${headingFont.className} hidden shrink-0 text-sm font-bold tracking-wide text-primary-foreground sm:block`}
        >
          VAPORA
        </Link>

        <div className="flex flex-1 flex-wrap items-center justify-center gap-1">
        {CATEGORY_ORDER.map((slug) => {
          const meta = CATEGORY_META[slug];
          const herbsInCategory = getHerbsByCategory(slug);
          const isOpen = openSlug === slug;
          const isActive = pathname === `/${slug}`;
          const previewNames = herbsInCategory.slice(0, 4).map((h) => h.commonName);

          return (
            <div
              key={slug}
              className="relative shrink-0"
              onMouseEnter={() => open(slug)}
              onMouseLeave={scheduleClose}
            >
              <Link
                href={`/${slug}`}
                aria-expanded={isOpen}
                onFocus={() => open(slug)}
                onBlur={scheduleClose}
                onClick={(event) => {
                  if (!isOpen && window.matchMedia('(hover: none)').matches) {
                    event.preventDefault();
                    open(slug);
                  }
                }}
                className={`inline-flex items-center rounded-md px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
                  isActive || isOpen ? 'bg-primary-foreground/15' : ''
                }`}
              >
                {meta.label}
              </Link>

              {isOpen && (
                <div
                  role="tooltip"
                  className="absolute left-1/2 top-full z-40 mt-1 w-64 max-w-[85vw] -translate-x-1/2 rounded-lg border border-border bg-background p-4 text-left shadow-lg"
                >
                  <p className={`${headingFont.className} font-semibold text-primary`}>{meta.label}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{meta.tagline}</p>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {herbsInCategory.length} {herbsInCategory.length === 1 ? 'hierba' : 'hierbas'}
                    {previewNames.length > 0 && <>: {previewNames.join(', ')}</>}
                    {herbsInCategory.length > previewNames.length ? '…' : ''}
                  </p>
                  <Link
                    href={`/${slug}`}
                    className="mt-3 inline-block text-xs font-medium text-primary underline underline-offset-2"
                  >
                    Ver categoría →
                  </Link>
                </div>
              )}
            </div>
          );
        })}

        <Link
          href="/aceites"
          className={`inline-flex shrink-0 items-center rounded-md px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
            pathname === '/aceites' ? 'bg-primary-foreground/15' : ''
          }`}
        >
          Aceites
        </Link>

        <div
          className="relative shrink-0"
          onMouseEnter={() => open('combinaciones')}
          onMouseLeave={scheduleClose}
        >
          <Link
            href="/combinaciones"
            aria-expanded={openSlug === 'combinaciones'}
            onFocus={() => open('combinaciones')}
            onBlur={scheduleClose}
            onClick={(event) => {
              if (openSlug !== 'combinaciones' && window.matchMedia('(hover: none)').matches) {
                event.preventDefault();
                open('combinaciones');
              }
            }}
            className={`inline-flex items-center rounded-md px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
              pathname === '/combinaciones' || openSlug === 'combinaciones'
                ? 'bg-primary-foreground/15'
                : ''
            }`}
          >
            Combinaciones
          </Link>

          {openSlug === 'combinaciones' && (
            <div
              role="tooltip"
              className="absolute left-1/2 top-full z-40 mt-1 w-64 max-w-[85vw] -translate-x-1/2 rounded-lg border border-border bg-background p-4 text-left shadow-lg"
            >
              <p className={`${headingFont.className} font-semibold text-primary`}>Combinaciones</p>
              <p className="mt-1 text-xs text-muted-foreground">
                Combinaciones de dos hierbas y su temperatura sugerida.
              </p>
              <Link
                href="/combinaciones"
                className="mt-3 inline-block text-xs font-medium text-primary underline underline-offset-2"
              >
                Ver combinaciones →
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/blog"
          className={`inline-flex shrink-0 items-center rounded-md px-3 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-foreground/10 ${
            pathname === '/blog' || pathname?.startsWith('/blog/') ? 'bg-primary-foreground/15' : ''
          }`}
        >
          Blog
        </Link>
        </div>

        <span
          aria-hidden
          className={`${headingFont.className} invisible hidden shrink-0 text-sm font-bold tracking-wide sm:block`}
        >
          VAPORA
        </span>
      </div>
    </nav>
  );
}
