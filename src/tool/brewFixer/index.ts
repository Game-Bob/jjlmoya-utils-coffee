import type { ToolDefinition } from '../../types';
import { brewFixer } from './entry';

export * from './entry';

export const BREW_FIXER_TOOL: ToolDefinition = {
  entry: brewFixer,
  Component: () => import('./component.astro'),
  SEOComponent: () => import('./seo.astro'),
  BibliographyComponent: () => import('./bibliography.astro'),
};
