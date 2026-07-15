import { Brain, Citrus, Flower2, Wind, type LucideIcon } from 'lucide-react';
import type { HerbCategory } from '@/components/herb-showcase-card';

export const CATEGORY_ICONS: Record<HerbCategory, LucideIcon> = {
  concentracion: Brain,
  relajacion: Flower2,
  respiratorio: Wind,
  digestivo: Citrus,
};

/**
 * Mapea el `objetivo` de una combinación al mismo ícono de categoría usado en el nav.
 * "Sueño" no es una categoría propia: comparte el ícono de Relajación (su tagline
 * ya menciona el sueño explícitamente).
 */
export const OBJETIVO_ICONS: Record<string, LucideIcon> = {
  Concentración: Brain,
  Relajación: Flower2,
  Sueño: Flower2,
  Respiratorio: Wind,
  Digestivo: Citrus,
};
