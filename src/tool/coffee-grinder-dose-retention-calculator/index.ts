import type { ToolDefinition } from '../../types';
import { coffeeGrinderDoseRetentionCalculator } from './entry';

export * from './entry';

export const COFFEE_GRINDER_DOSE_RETENTION_CALCULATOR_TOOL: ToolDefinition = {
  entry: coffeeGrinderDoseRetentionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
