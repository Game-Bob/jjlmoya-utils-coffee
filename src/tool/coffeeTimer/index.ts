import { coffeeTimer } from './entry';
export * from './entry';
export const COFFEE_TIMER_TOOL: ToolDefinition = {
  entry: coffeeTimer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
