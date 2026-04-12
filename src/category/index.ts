import type { CoffeeCategoryEntry } from '../types';
import { brewRatioCalculator } from '../tool/brewRatioCalculator';
import { coffeeTimer } from '../tool/coffeeTimer';
import { waterCalculator } from '../tool/waterCalculator';
import { grindConverter } from '../tool/grindConverter';

export const coffeeCategory: CoffeeCategoryEntry = {
  icon: 'mdi:coffee',
  tools: [brewRatioCalculator, coffeeTimer, waterCalculator, grindConverter],
  i18n: {
    es: () => import('./i18n/es').then((m) => m.content),
    en: () => import('./i18n/en').then((m) => m.content),
    fr: () => import('./i18n/fr').then((m) => m.content),
  },
};

