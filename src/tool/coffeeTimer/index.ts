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
import { content as de } from './i18n/de';
import { content as it } from './i18n/it';
import { content as pt } from './i18n/pt';
import { content as nl } from './i18n/nl';
import { content as sv } from './i18n/sv';
import { content as tr } from './i18n/tr';
import { content as id } from './i18n/id';
import { content as pl } from './i18n/pl';
import { content as ru } from './i18n/ru';
import { content as zh } from './i18n/zh';
import { content as ja } from './i18n/ja';
import { content as ko } from './i18n/ko';

export const coffeeTimer: CoffeeToolEntry<CoffeeTimerUI> = {
  id: 'temporizador-preparacion-cafe',
  icons: {
    bg: 'mdi:timer-outline',
    fg: 'mdi:coffee-outline',
  },
  i18n: {
    es: async () => es,
    en: async () => en,
    fr: async () => fr,
    de: async () => de,
    it: async () => it,
    pt: async () => pt,
    nl: async () => nl,
    sv: async () => sv,
    tr: async () => tr,
    id: async () => id,
    pl: async () => pl,
    ru: async () => ru,
    zh: async () => zh,
    ja: async () => ja,
    ko: async () => ko,
  },
};

export { CoffeeTimerComponent, CoffeeTimerSEO, CoffeeTimerBibliography };

export const COFFEE_TIMER_TOOL: ToolDefinition = {
  entry: coffeeTimer,
  Component: CoffeeTimerComponent,
  SEOComponent: CoffeeTimerSEO,
  BibliographyComponent: CoffeeTimerBibliography,
};
