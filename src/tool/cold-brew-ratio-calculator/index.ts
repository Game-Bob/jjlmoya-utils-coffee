import type { ToolDefinition } from '../../types';
import { coldBrewRatioCalculator } from './entry';

export * from './entry';

export const COLD_BREW_RATIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: coldBrewRatioCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
