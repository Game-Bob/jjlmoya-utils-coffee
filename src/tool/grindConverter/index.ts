import type { CoffeeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import GrindConverterComponent from './component.astro';
import GrindConverterSEO from './seo.astro';
import GrindConverterBibliography from './bibliography.astro';

import type { GrindConverterUI } from './ui';

export type { GrindConverterUI };
export type GrindConverterLocaleContent = ToolLocaleContent<GrindConverterUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const grindConverter: CoffeeToolEntry<GrindConverterUI> = {
  id: 'conversor-molienda-cafe',
  icons: {
    bg: 'mdi:rotate-right',
    fg: 'mdi:coffee',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { GrindConverterComponent, GrindConverterSEO, GrindConverterBibliography };

export const GRIND_CONVERTER_TOOL: ToolDefinition = {
  entry: grindConverter,
  Component: GrindConverterComponent,
  SEOComponent: GrindConverterSEO,
  BibliographyComponent: GrindConverterBibliography,
};
