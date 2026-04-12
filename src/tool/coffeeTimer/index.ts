import type { CoffeeToolEntry, ToolLocaleContent, ToolDefinition } from '../../types';
import CoffeeTimerComponent from './component.astro';
import CoffeeTimerSEO from './seo.astro';
import CoffeeTimerBibliography from './bibliography.astro';

import type { CoffeeTimerUI } from './ui';

export type { CoffeeTimerUI };
export type CoffeeTimerLocaleContent = ToolLocaleContent<CoffeeTimerUI>;

import { content as es } from './i18n/es';
import { content as en } from './i18n/en';
import { content as fr } from './i18n/fr';

export const coffeeTimer: CoffeeToolEntry<CoffeeTimerUI> = {
  id: 'cronometro-cafe',
  icons: {
    bg: 'mdi:timer-outline',
    fg: 'mdi:coffee',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
  },
};

export { CoffeeTimerComponent, CoffeeTimerSEO, CoffeeTimerBibliography };

export const COFFEE_TIMER_TOOL: ToolDefinition = {
  entry: coffeeTimer,
  Component: CoffeeTimerComponent,
  SEOComponent: CoffeeTimerSEO,
  BibliographyComponent: CoffeeTimerBibliography,
};
