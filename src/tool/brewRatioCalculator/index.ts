export * from './entry';
export const BREW_RATIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: brewRatioCalculator,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
