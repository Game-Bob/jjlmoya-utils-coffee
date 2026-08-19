import type { CoffeeToolEntry, ToolLocaleContent } from '../../types';
import type { ColdBrewRatioCalculatorUI } from './ui';
import { content as en } from './i18n/en';

export type { ColdBrewRatioCalculatorUI };
export type ColdBrewRatioCalculatorLocaleContent = ToolLocaleContent<ColdBrewRatioCalculatorUI>;

export const coldBrewRatioCalculator: CoffeeToolEntry<ColdBrewRatioCalculatorUI> = {
  id: 'cold-brew-coffee-ratio-calculator',
  icons: {
    bg: 'mdi:coffee-outline',
    fg: 'mdi:flask-outline',
  },
  i18n: {
    de: () => import('./i18n/de').then((m) => m.content),
    en: async () => en,
    es: () => import('./i18n/es').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
    id: () => import('./i18n/id').then((m) => m.content),
    it: () => import('./i18n/it').then((m) => m.content),
    ja: () => import('./i18n/ja').then((m) => m.content),
    ko: () => import('./i18n/ko').then((m) => m.content),
    nl: () => import('./i18n/nl').then((m) => m.content),
    pl: () => import('./i18n/pl').then((m) => m.content),
    pt: () => import('./i18n/pt').then((m) => m.content),
    ru: () => import('./i18n/ru').then((m) => m.content),
    sv: () => import('./i18n/sv').then((m) => m.content),
    tr: () => import('./i18n/tr').then((m) => m.content),
    zh: () => import('./i18n/zh').then((m) => m.content),
  },
};
