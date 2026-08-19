export type ColdBrewMode = 'ready' | 'concentrate';
export type ColdBrewPresetId = 'classic' | 'smooth' | 'concentrate' | 'custom';
export type UnitSystem = 'metric' | 'imperial';

export interface ColdBrewState {
  mode: ColdBrewMode;
  presetId: ColdBrewPresetId;
  unitSystem: UnitSystem;
  brewWaterMl: number;
  ratio: number;
  dilutionRatio: number;
  steepHours: number;
}

export interface ColdBrewPreset {
  id: ColdBrewPresetId;
  mode: ColdBrewMode;
  ratio: number;
  dilutionRatio: number;
  steepHours: number;
}

export interface ColdBrewResult {
  brewWaterMl: number;
  coffeeG: number;
  retainedMl: number;
  brewYieldMl: number;
  dilutionWaterMl: number;
  servedYieldMl: number;
  ratio: number;
  dilutionRatio: number;
  steepHours: number;
}

export const COLD_BREW_PRESETS: ColdBrewPreset[] = [
  { id: 'classic', mode: 'ready', ratio: 8, dilutionRatio: 0, steepHours: 14 },
  { id: 'smooth', mode: 'ready', ratio: 10, dilutionRatio: 0, steepHours: 16 },
  { id: 'concentrate', mode: 'concentrate', ratio: 5, dilutionRatio: 1, steepHours: 16 },
];

export const DEFAULT_COLD_BREW_STATE: ColdBrewState = {
  mode: 'ready',
  presetId: 'classic',
  unitSystem: 'metric',
  brewWaterMl: 1000,
  ratio: 8,
  dilutionRatio: 0,
  steepHours: 14,
};

export const GROUND_RETENTION_ML_PER_G = 2;
export const ML_PER_FL_OZ = 29.5735;
export const G_PER_OZ = 28.3495;

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

export function getPreset(id: ColdBrewPresetId): ColdBrewPreset | undefined {
  return COLD_BREW_PRESETS.find((preset) => preset.id === id);
}

function safeNumber(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

function normalizedState(state: ColdBrewState): ColdBrewState {
  return {
    ...state,
    brewWaterMl: clamp(safeNumber(state.brewWaterMl, DEFAULT_COLD_BREW_STATE.brewWaterMl), 250, 4000),
    ratio: clamp(safeNumber(state.ratio, DEFAULT_COLD_BREW_STATE.ratio), 4, 12),
    dilutionRatio: clamp(safeNumber(state.dilutionRatio, DEFAULT_COLD_BREW_STATE.dilutionRatio), 0, 2),
    steepHours: clamp(safeNumber(state.steepHours, DEFAULT_COLD_BREW_STATE.steepHours), 8, 24),
  };
}

export function calculateColdBrew(state: ColdBrewState): ColdBrewResult {
  const normalized = normalizedState(state);
  const dilutionRatio = normalized.mode === 'concentrate' ? normalized.dilutionRatio : 0;
  const coffeeG = normalized.brewWaterMl / normalized.ratio;
  const retainedMl = coffeeG * GROUND_RETENTION_ML_PER_G;
  const brewYieldMl = Math.max(0, normalized.brewWaterMl - retainedMl);
  const dilutionWaterMl = brewYieldMl * dilutionRatio;

  return {
    brewWaterMl: normalized.brewWaterMl,
    coffeeG,
    retainedMl,
    brewYieldMl,
    dilutionWaterMl,
    servedYieldMl: brewYieldMl + dilutionWaterMl,
    ratio: normalized.ratio,
    dilutionRatio,
    steepHours: normalized.steepHours,
  };
}

export function formatRatio(value: number): string {
  return Number.isInteger(value) ? String(value) : value.toFixed(1);
}

export function formatWeight(value: number, unitSystem: UnitSystem): string {
  const displayValue = unitSystem === 'imperial' ? value / G_PER_OZ : value;
  return displayValue < 10 ? displayValue.toFixed(1) : String(Math.round(displayValue));
}

export function formatVolume(value: number, unitSystem: UnitSystem): string {
  const displayValue = unitSystem === 'imperial' ? value / ML_PER_FL_OZ : value;
  if (unitSystem === 'imperial') return displayValue % 1 === 0 ? String(displayValue) : displayValue.toFixed(1);
  return displayValue < 10 ? displayValue.toFixed(1) : String(Math.round(displayValue));
}

export function parseVolume(value: number, unitSystem: UnitSystem): number {
  return unitSystem === 'imperial' ? value * ML_PER_FL_OZ : value;
}
