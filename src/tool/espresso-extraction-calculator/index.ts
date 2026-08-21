import type { ToolDefinition } from '../../types';
import { espressoExtractionCalculator } from './entry';

export * from './entry';

export const ESPRESSO_EXTRACTION_CALCULATOR_TOOL: ToolDefinition = {
  entry: espressoExtractionCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
