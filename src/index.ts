export { coffeeCategory } from './category';
export { default as coffeeCategorySEO } from './category/seo.astro';

export type {
  KnownLocale,
  FAQItem,
  BibliographyEntry,
  HowToStep,
  ToolLocaleContent,
  CategoryLocaleContent,
  LocaleLoader,
  LocaleMap,
  CoffeeToolEntry,
  CoffeeCategoryEntry,
  ToolDefinition,
} from './types';

export { ALL_TOOLS } from './tools';

export {
  brewRatioCalculator,
  BREW_RATIO_CALCULATOR_TOOL,
  BrewRatioCalculatorComponent,
  BrewRatioCalculatorSEO,
  BrewRatioCalculatorBibliography,
} from './tool/brewRatioCalculator';
export type { BrewRatioCalculatorUI, BrewRatioCalculatorLocaleContent } from './tool/brewRatioCalculator';

export {
  coffeeTimer,
  COFFEE_TIMER_TOOL,
  CoffeeTimerComponent,
  CoffeeTimerSEO,
  CoffeeTimerBibliography,
} from './tool/coffeeTimer';
export type { CoffeeTimerUI, CoffeeTimerLocaleContent } from './tool/coffeeTimer';

export {
  waterCalculator,
  WATER_CALCULATOR_TOOL,
  WaterCalculatorComponent,
  WaterCalculatorSEO,
  WaterCalculatorBibliography,
} from './tool/waterCalculator';
export type { WaterCalculatorUI, WaterCalculatorLocaleContent } from './tool/waterCalculator';

export {
  grindConverter,
  GRIND_CONVERTER_TOOL,
  GrindConverterComponent,
  GrindConverterSEO,
  GrindConverterBibliography,
} from './tool/grindConverter';
export type { GrindConverterUI, GrindConverterLocaleContent } from './tool/grindConverter';

