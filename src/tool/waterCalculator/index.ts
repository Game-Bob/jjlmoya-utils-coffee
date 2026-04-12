import type { CoffeeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import WaterCalculatorComponent from './component.astro';
import WaterCalculatorSEO from './seo.astro';
import WaterCalculatorBibliography from './bibliography.astro';

import type { WaterCalculatorUI } from './ui';

export type { WaterCalculatorUI };
export type WaterCalculatorLocaleContent = ToolLocaleContent<WaterCalculatorUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const waterCalculator: CoffeeToolEntry<WaterCalculatorUI> = {
  id: 'calculadora-agua-cafe-sca',
  icons: {
    bg: 'mdi:water-outline',
    fg: 'mdi:coffee',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { WaterCalculatorComponent, WaterCalculatorSEO, WaterCalculatorBibliography };

export const WATER_CALCULATOR_TOOL: ToolDefinition = {
  entry: waterCalculator,
  Component: WaterCalculatorComponent,
  SEOComponent: WaterCalculatorSEO,
  BibliographyComponent: WaterCalculatorBibliography,
};
