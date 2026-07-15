import type { Metadata } from 'next';
import { ThemeProvider } from '@/components/theme-provider';
import { CategoryNav } from '@/components/vaporizacion/category-nav';
import { SiteFooter } from '@/components/site-footer';
import './globals.css';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? 'http://localhost:3000';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'VAPORA — Herbal Experience',
    template: '%s · Vapora',
  },
  description:
    'Explora plantas medicinales con evidencia, tradición y seguridad claramente diferenciadas.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className="min-h-screen antialiased">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-primary-foreground"
          >
            Saltar al contenido principal
          </a>
          <CategoryNav />
          {children}
          <SiteFooter />
        </ThemeProvider>
      </body>
    </html>
  );
}
