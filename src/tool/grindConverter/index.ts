import { grindConverter } from './entry';
export * from './entry';
export const GRIND_CONVERTER_TOOL: ToolDefinition = {
  entry: grindConverter,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
