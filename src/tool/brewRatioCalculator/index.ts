import type { CoffeeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import BrewRatioCalculatorComponent from './component.astro';
import BrewRatioCalculatorSEO from './seo.astro';
import BrewRatioCalculatorBibliography from './bibliography.astro';

import type { BrewRatioCalculatorUI } from './ui';

export type { BrewRatioCalculatorUI };
export type BrewRatioCalculatorLocaleContent = ToolLocaleContent<BrewRatioCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const brewRatioCalculator: CoffeeToolEntry<BrewRatioCalculatorUI> = {
  id: 'calculadora-ratio-cafe',
  icons: {
    bg: 'mdi:coffee',
    fg: 'mdi:water-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { BrewRatioCalculatorComponent, BrewRatioCalculatorSEO, BrewRatioCalculatorBibliography };

export const BREW_RATIO_CALCULATOR_TOOL: ToolDefinition = {
  entry: brewRatioCalculator,
  Component: BrewRatioCalculatorComponent,
  SEOComponent: BrewRatioCalculatorSEO,
  BibliographyComponent: BrewRatioCalculatorBibliography,
};
