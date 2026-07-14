import type { ReactNode } from 'react';
import { CategoryNav } from '@/components/vaporizacion/category-nav';

export default function VaporizacionLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <CategoryNav />
      {children}
    </>
  );
}
