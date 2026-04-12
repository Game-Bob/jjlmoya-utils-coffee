export type BrewMode = 'coffee' | 'water';

export interface BrewState {
  mode: BrewMode;
  inputValue: number;
  ratio: number;
  iceMode: boolean;
}

export interface SavedRecipe {
  id: string;
  name: string;
  mode: BrewMode;
  inputValue: number;
  ratio: number;
  iceMode: boolean;
}

export const RETENTION_ML_PER_G = 2;
export const ICE_RATIO = 0.4;
export const BLOOM_RATIO = 2;
export const BLOOM_WAIT_SECONDS = 30;
export const STORAGE_KEY = 'brew-recipes-v1';

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));
}

export function loadRecipes(): SavedRecipe[] {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) ?? '[]');
  } catch {
    return [];
  }
}

export function saveRecipes(recipes: SavedRecipe[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(recipes));
}

export function computeBrewResult(s: BrewState) {
  let coffeeG: number;
  let totalWaterMl: number;

  if (s.mode === 'coffee') {
    coffeeG = s.inputValue;
    totalWaterMl = Math.round(coffeeG * s.ratio);
  } else {
    totalWaterMl = s.inputValue;
    coffeeG = Math.round((totalWaterMl / s.ratio) * 10) / 10;
  }

  const hotWaterMl = s.iceMode ? Math.round(totalWaterMl * (1 - ICE_RATIO)) : totalWaterMl;
  const iceMl = s.iceMode ? Math.round(totalWaterMl * ICE_RATIO) : 0;
  const retainedMl = Math.round(coffeeG * RETENTION_ML_PER_G);
  const inCupMl = s.iceMode
    ? Math.round(hotWaterMl - retainedMl + iceMl * 0.9)
    : hotWaterMl - retainedMl;
  const bloomMl = Math.round(coffeeG * BLOOM_RATIO);
  const remainMl = hotWaterMl - bloomMl;

  return { coffeeG, totalWaterMl, hotWaterMl, iceMl, inCupMl, bloomMl, remainMl };
}
