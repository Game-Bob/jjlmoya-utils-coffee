import type { PresetId, ShotStyle, TimePace, YieldBand } from './logic';
import type { EspressoExtractionUI } from './ui';

export const PRESET_ORDER: Exclude<PresetId, 'custom'>[] = [
  'classic',
  'ristretto',
  'lungo',
  'single',
  'turbo',
];

export function presetLabel(id: PresetId, ui: EspressoExtractionUI): string {
  if (id === 'ristretto') return ui.presetRistretto;
  if (id === 'lungo') return ui.presetLungo;
  if (id === 'single') return ui.presetSingle;
  if (id === 'turbo') return ui.presetTurbo;
  return ui.presetClassic;
}

export function shotStyleLabel(style: ShotStyle, ui: EspressoExtractionUI): string {
  if (style === 'ristretto') return ui.styleRistretto;
  if (style === 'lungo') return ui.styleLungo;
  return ui.styleNormale;
}

export function timePaceLabel(pace: TimePace, ui: EspressoExtractionUI): string {
  if (pace === 'fast') return ui.paceFast;
  if (pace === 'slow') return ui.paceSlow;
  return ui.paceTypical;
}

export function yieldBandLabel(band: YieldBand, ui: EspressoExtractionUI): string {
  if (band === 'low') return ui.bandLow;
  if (band === 'target') return ui.bandTarget;
  if (band === 'high') return ui.bandHigh;
  return ui.bandUnmeasured;
}

export function statusLabel(inClassicWindow: boolean, ui: EspressoExtractionUI): string {
  if (inClassicWindow) return ui.statusClassic;
  return ui.statusOutside;
}

export function classicDeltaLabel(delta: number, ui: EspressoExtractionUI): string {
  if (Math.abs(delta) < 0.6) return ui.deltaOnLine;
  if (delta > 0) return ui.deltaPast.replace('{n}', `${delta}`);
  return ui.deltaShort.replace('{n}', `${Math.abs(delta)}`);
}

export const PREINFUSION_CHIPS = [0, 4, 8] as const;
