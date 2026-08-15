import { aeropressRatioCalculator } from './entry';
import type { ToolDefinition } from '../../types';

export * from './entry';

export const AEROPRESS_RATIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: aeropressRatioCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
