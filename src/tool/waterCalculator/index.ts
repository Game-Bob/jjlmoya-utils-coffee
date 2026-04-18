export * from './entry';
export const WATER_CALCULATOR_TOOL: ToolDefinition = {
  entry: waterCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
