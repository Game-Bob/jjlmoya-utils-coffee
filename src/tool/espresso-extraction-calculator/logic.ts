export type ShotStyle = 'ristretto' | 'normale' | 'lungo';
export type TimePace = 'fast' | 'typical' | 'slow';
export type YieldBand = 'unmeasured' | 'low' | 'target' | 'high';
export type PresetId = 'classic' | 'ristretto' | 'lungo' | 'single' | 'turbo' | 'custom';
export type UnitSystem = 'metric' | 'imperial';

export interface EspressoInputs {
  doseGrams: number;
  yieldGrams: number;
  timeSeconds: number;
  preinfusionSeconds: number;
  tdsPercent: number;
}

export interface EspressoState extends EspressoInputs {
  presetId: PresetId;
  unitSystem: UnitSystem;
  tdsEnabled: boolean;
}

export interface EspressoOutputs {
  brewRatio: number;
  ratioText: string;
  shotStyle: ShotStyle;
  contactTimeSeconds: number;
  flowRateGramsPerSec: number;
  extractionYieldPercent: number | null;
  yieldBand: YieldBand;
  timePace: TimePace;
  fillPercent: number;
  cremaPercent: number;
  liquidY: number;
  mark1Y: number;
  mark2Y: number;
  mark3Y: number;
  deltaFromClassic: number;
  inClassicWindow: boolean;
}

export const DOSE_MIN = 7;
export const DOSE_MAX = 25;
export const YIELD_MIN = 8;
export const YIELD_MAX = 70;
export const TIME_MIN = 8;
export const TIME_MAX = 50;
export const PREINFUSION_MAX = 15;
export const TDS_MAX = 16;
export const RATIO_RISTRETTO_MAX = 1.5;
export const RATIO_NORMALE_MAX = 2.5;
export const TIME_FAST_MAX = 20;
export const TIME_TYPICAL_MAX = 32;
export const EY_TARGET_MIN = 18;
export const EY_TARGET_MAX = 22;
export const GLASS_CAPACITY_G = 60;
export const GLASS_BOTTOM = 328;
export const GLASS_SPAN = 176;
export const GLASS_RATIO_SCALE = 3.2;
export const GRAMS_PER_OUNCE = 28.3495;

export const PRESETS: Record<Exclude<PresetId, 'custom'>, EspressoInputs> = {
  classic: { doseGrams: 18, yieldGrams: 36, timeSeconds: 28, preinfusionSeconds: 0, tdsPercent: 0 },
  ristretto: { doseGrams: 18, yieldGrams: 20, timeSeconds: 25, preinfusionSeconds: 0, tdsPercent: 0 },
  lungo: { doseGrams: 18, yieldGrams: 54, timeSeconds: 32, preinfusionSeconds: 0, tdsPercent: 0 },
  single: { doseGrams: 9, yieldGrams: 18, timeSeconds: 25, preinfusionSeconds: 0, tdsPercent: 0 },
  turbo: { doseGrams: 18, yieldGrams: 40, timeSeconds: 15, preinfusionSeconds: 0, tdsPercent: 0 },
};

export const DEFAULT_STATE: EspressoState = {
  ...PRESETS.classic,
  presetId: 'classic',
  unitSystem: 'metric',
  tdsEnabled: false,
};

export function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}

export function gramsToOz(grams: number): number {
  return Number((grams / GRAMS_PER_OUNCE).toFixed(2));
}

export function ozToGrams(oz: number): number {
  return Number((oz * GRAMS_PER_OUNCE).toFixed(1));
}

export function sanitizeInputs(raw: EspressoInputs): EspressoInputs {
  return {
    doseGrams: clamp(raw.doseGrams || DOSE_MIN, DOSE_MIN, DOSE_MAX),
    yieldGrams: clamp(raw.yieldGrams || YIELD_MIN, YIELD_MIN, YIELD_MAX),
    timeSeconds: clamp(raw.timeSeconds || TIME_MIN, TIME_MIN, TIME_MAX),
    preinfusionSeconds: clamp(raw.preinfusionSeconds || 0, 0, PREINFUSION_MAX),
    tdsPercent: clamp(raw.tdsPercent || 0, 0, TDS_MAX),
  };
}

export function computeBrewRatio(doseGrams: number, yieldGrams: number): number {
  return Number((yieldGrams / doseGrams).toFixed(2));
}

export function formatBrewRatio(ratio: number): string {
  return `1:${ratio.toFixed(2)}`;
}

export function classifyShotStyle(ratio: number): ShotStyle {
  if (ratio < RATIO_RISTRETTO_MAX) return 'ristretto';
  if (ratio <= RATIO_NORMALE_MAX) return 'normale';
  return 'lungo';
}

export function computeContactTime(timeSeconds: number, preinfusionSeconds: number): number {
  return Math.max(0, Number((timeSeconds - preinfusionSeconds).toFixed(1)));
}

export function computeFlowRate(yieldGrams: number, contactTimeSeconds: number): number {
  if (contactTimeSeconds <= 0) return 0;
  return Number((yieldGrams / contactTimeSeconds).toFixed(2));
}

export function computeExtractionYield(inputs: EspressoInputs): number | null {
  if (inputs.tdsPercent <= 0) return null;
  return Number(((inputs.tdsPercent * inputs.yieldGrams) / inputs.doseGrams).toFixed(1));
}

export function classifyYieldBand(extractionYieldPercent: number | null): YieldBand {
  if (extractionYieldPercent === null) return 'unmeasured';
  if (extractionYieldPercent < EY_TARGET_MIN) return 'low';
  if (extractionYieldPercent <= EY_TARGET_MAX) return 'target';
  return 'high';
}

export function classifyTimePace(contactTimeSeconds: number): TimePace {
  if (contactTimeSeconds < TIME_FAST_MAX) return 'fast';
  if (contactTimeSeconds <= TIME_TYPICAL_MAX) return 'typical';
  return 'slow';
}

export function computeFillPercent(yieldGrams: number): number {
  return clamp(Math.round((yieldGrams / GLASS_CAPACITY_G) * 100), 8, 100);
}

export function computeCremaPercent(ratio: number): number {
  return clamp(Math.round(30 - ratio * 6), 8, 26);
}

export function yieldToGlassY(yieldGrams: number, doseGrams: number): number {
  const maxYield = Math.max(doseGrams * GLASS_RATIO_SCALE, YIELD_MIN);
  const t = clamp(yieldGrams / maxYield, 0.06, 1);
  return Number((GLASS_BOTTOM - t * GLASS_SPAN).toFixed(1));
}

export function ratioMarkY(doseGrams: number, ratio: number): number {
  return yieldToGlassY(doseGrams * ratio, doseGrams);
}

export function computeClassicDelta(doseGrams: number, yieldGrams: number): number {
  return Number((yieldGrams - doseGrams * 2).toFixed(1));
}

export function nearestRatioTarget(ratio: number): '1' | '2' | '3' | '' {
  if (Math.abs(ratio - 1) <= 0.12) return '1';
  if (Math.abs(ratio - 2) <= 0.12) return '2';
  if (Math.abs(ratio - 3) <= 0.22) return '3';
  return '';
}

export function isClassicWindow(ratio: number, contactTimeSeconds: number): boolean {
  const style = classifyShotStyle(ratio);
  const pace = classifyTimePace(contactTimeSeconds);
  return style === 'normale' && pace === 'typical';
}

export function computeTargetYield(doseGrams: number, ratio: number): number {
  return clamp(Number((doseGrams * ratio).toFixed(1)), YIELD_MIN, YIELD_MAX);
}

export function getPreset(id: PresetId): EspressoInputs | null {
  if (id === 'custom') return null;
  return PRESETS[id];
}

export function calculateEspresso(raw: EspressoInputs): EspressoOutputs {
  const inputs = sanitizeInputs(raw);
  const brewRatio = computeBrewRatio(inputs.doseGrams, inputs.yieldGrams);
  const contactTimeSeconds = computeContactTime(inputs.timeSeconds, inputs.preinfusionSeconds);
  const extractionYieldPercent = computeExtractionYield(inputs);
  return buildOutputs(inputs, brewRatio, contactTimeSeconds, extractionYieldPercent);
}

function buildOutputs(
  inputs: EspressoInputs,
  brewRatio: number,
  contactTimeSeconds: number,
  extractionYieldPercent: number | null,
): EspressoOutputs {
  return {
    brewRatio,
    ratioText: formatBrewRatio(brewRatio),
    shotStyle: classifyShotStyle(brewRatio),
    contactTimeSeconds,
    flowRateGramsPerSec: computeFlowRate(inputs.yieldGrams, contactTimeSeconds),
    extractionYieldPercent,
    yieldBand: classifyYieldBand(extractionYieldPercent),
    timePace: classifyTimePace(contactTimeSeconds),
    fillPercent: computeFillPercent(inputs.yieldGrams),
    cremaPercent: computeCremaPercent(brewRatio),
    liquidY: yieldToGlassY(inputs.yieldGrams, inputs.doseGrams),
    mark1Y: ratioMarkY(inputs.doseGrams, 1),
    mark2Y: ratioMarkY(inputs.doseGrams, 2),
    mark3Y: ratioMarkY(inputs.doseGrams, 3),
    deltaFromClassic: computeClassicDelta(inputs.doseGrams, inputs.yieldGrams),
    inClassicWindow: isClassicWindow(brewRatio, contactTimeSeconds),
  };
}
