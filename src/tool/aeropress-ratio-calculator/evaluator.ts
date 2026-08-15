import type { AeropressOutputs } from './logic';
import type { AeropressRatioCalculatorUI, PresetRecipe } from './ui';

export const RECIPE_PRESETS: PresetRecipe[] = [
  {
    id: 'hoffmann',
    name: 'Hoffmann Ultimate',
    author: 'James Hoffmann',
    doseGrams: 11,
    ratio: 18.18,
    method: 'standard',
    tempC: 100,
    grindKey: 'mediumFine',
    bloomWaterGrams: 0,
    bloomTimeSec: 0,
    steepTimeSec: 120,
    pressTimeSec: 30,
    notes: '200g boiling water, swirl at 2:00, wait 30s, gentle press',
  },
  {
    id: 'wendelboe',
    name: 'Wendelboe Light Roast',
    author: 'Tim Wendelboe',
    doseGrams: 14,
    ratio: 14.28,
    method: 'standard',
    tempC: 96,
    grindKey: 'mediumFine',
    bloomWaterGrams: 0,
    bloomTimeSec: 0,
    steepTimeSec: 60,
    pressTimeSec: 30,
    notes: '200g water, 3 vigorous stirs, steep 1m, 3 gentle stirs, press',
  },
  {
    id: 'wac-champ',
    name: 'WAC Bypass Champion',
    author: 'WAC Winner',
    doseGrams: 30,
    ratio: 7.5,
    method: 'inverted',
    tempC: 84,
    grindKey: 'coarse',
    bloomWaterGrams: 100,
    bloomTimeSec: 30,
    steepTimeSec: 60,
    pressTimeSec: 30,
    notes: 'Brew 120g concentrate, dilute in mug with 105g bypass water',
  },
  {
    id: 'alan-adler',
    name: 'Alan Adler Original',
    author: 'Alan Adler (Inventor)',
    doseGrams: 17,
    ratio: 4.7,
    method: 'standard',
    tempC: 80,
    grindKey: 'fine',
    bloomWaterGrams: 0,
    bloomTimeSec: 0,
    steepTimeSec: 20,
    pressTimeSec: 20,
    notes: '80g water to #2 mark, stir 10s, press gently, dilute with hot water',
  },
  {
    id: 'iced-bypass',
    name: 'Flash Brew Iced AeroPress',
    author: 'Specialty Coffee',
    doseGrams: 18,
    ratio: 13.88,
    method: 'inverted',
    tempC: 93,
    grindKey: 'medium',
    bloomWaterGrams: 50,
    bloomTimeSec: 30,
    steepTimeSec: 90,
    pressTimeSec: 30,
    notes: 'Brew 150g hot into 100g ice cubes in carafe',
  },
];

export function getStrengthLabel(outputs: AeropressOutputs, ui: AeropressRatioCalculatorUI): string {
  switch (outputs.strengthCategory) {
    case 'concentrate':
      return ui.ratioStrengthConcentrate;
    case 'strong':
      return ui.ratioStrengthStrong;
    case 'medium':
      return ui.ratioStrengthMedium;
    case 'light':
    default:
      return ui.ratioStrengthLight;
  }
}
