import type { EspressoExtractionUI } from './ui';
import type { EspressoState, PresetId, UnitSystem } from './logic';
import {
  DEFAULT_STATE,
  DOSE_MAX,
  DOSE_MIN,
  PREINFUSION_MAX,
  TDS_MAX,
  TIME_MAX,
  TIME_MIN,
  YIELD_MAX,
  YIELD_MIN,
  calculateEspresso,
  computeTargetYield,
  getPreset,
  gramsToOz,
  ozToGrams,
} from './logic';
import { renderEspresso } from './dom-views';
import { loadState, saveState } from './storage';

type NumericKey = 'doseGrams' | 'yieldGrams' | 'timeSeconds' | 'preinfusionSeconds' | 'tdsPercent';

const MASS_KEYS: NumericKey[] = ['doseGrams', 'yieldGrams'];

export class EspressoExtractionController {
  private readonly root: HTMLElement;
  private readonly ui: EspressoExtractionUI;
  private state: EspressoState;

  constructor(root: HTMLElement, ui: EspressoExtractionUI) {
    this.root = root;
    this.ui = ui;
    this.state = { ...DEFAULT_STATE, ...(loadState() ?? this.readInitial()) };
    this.bind();
    this.syncControls();
    this.paint();
  }

  private readInitial(): EspressoState {
    try {
      return { ...DEFAULT_STATE, ...JSON.parse(this.root.dataset.initialState ?? '{}') };
    } catch {
      return DEFAULT_STATE;
    }
  }

  private bind(): void {
    this.bindClicks();
    this.bindInputs();
  }

  private bindClicks(): void {
    this.root.querySelectorAll<HTMLElement>('[data-preset]').forEach((btn) => {
      btn.addEventListener('click', () => this.applyPreset(btn.dataset.preset as PresetId));
    });
    this.root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((btn) => {
      btn.addEventListener('click', () => this.setUnit(btn.dataset.unitSystem as UnitSystem));
    });
    this.root.querySelectorAll<HTMLElement>('[data-ratio-target]').forEach((btn) => {
      btn.addEventListener('click', () => this.setRatio(Number(btn.dataset.ratioTarget)));
    });
    this.root.querySelectorAll<HTMLElement>('[data-pre]').forEach((btn) => {
      btn.addEventListener('click', () => this.setPre(Number(btn.dataset.pre)));
    });
    this.root.querySelector('[data-action="tds"]')?.addEventListener('click', () => this.toggleTds());
    this.root.querySelector('[data-action="reset"]')?.addEventListener('click', () => this.reset());
  }

  private bindInputs(): void {
    this.root.querySelectorAll<HTMLInputElement>('[data-range-key]').forEach((input) => {
      input.addEventListener('input', () => this.writeNumber(input.dataset.rangeKey as NumericKey, input.value, true));
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-number-key]').forEach((input) => {
      input.addEventListener('input', () => this.writeNumber(input.dataset.numberKey as NumericKey, input.value, false));
    });
  }

  private applyPreset(id: PresetId): void {
    const preset = getPreset(id);
    if (!preset) return;
    this.state = { ...this.state, ...preset, presetId: id, tdsPercent: this.state.tdsEnabled ? this.state.tdsPercent : 0 };
    this.syncAndPaint();
  }

  private setUnit(unitSystem: UnitSystem): void {
    this.state = { ...this.state, unitSystem };
    this.syncAndPaint();
  }

  private setRatio(ratio: number): void {
    const yieldGrams = computeTargetYield(this.state.doseGrams, ratio);
    this.state = { ...this.state, yieldGrams, presetId: 'custom' };
    this.syncAndPaint();
  }

  private setPre(preinfusionSeconds: number): void {
    this.state = { ...this.state, preinfusionSeconds, presetId: 'custom' };
    this.syncAndPaint();
  }

  private toggleTds(): void {
    const tdsEnabled = !this.state.tdsEnabled;
    const tdsPercent = tdsEnabled ? Math.max(this.state.tdsPercent, 8) : 0;
    this.state = { ...this.state, tdsEnabled, tdsPercent };
    this.syncAndPaint();
  }

  private reset(): void {
    this.state = { ...DEFAULT_STATE, unitSystem: this.state.unitSystem };
    this.syncAndPaint();
  }

  private writeNumber(key: NumericKey, raw: string, fromRange: boolean): void {
    const parsed = Number.parseFloat(raw.replace(',', '.'));
    if (Number.isNaN(parsed)) return;
    const grams = this.toStored(key, parsed);
    this.state = { ...this.state, [key]: grams, presetId: fromRange || key !== 'tdsPercent' ? 'custom' : this.state.presetId };
    this.syncAndPaint();
  }

  private toStored(key: NumericKey, parsed: number): number {
    if (MASS_KEYS.includes(key) && this.state.unitSystem === 'imperial') return ozToGrams(parsed);
    return parsed;
  }

  private displayMass(grams: number): string {
    if (this.state.unitSystem === 'imperial') return `${gramsToOz(grams)}`;
    return `${grams}`;
  }

  private syncControls(): void {
    this.syncMass('doseGrams', this.state.doseGrams, DOSE_MIN, DOSE_MAX);
    this.syncMass('yieldGrams', this.state.yieldGrams, YIELD_MIN, YIELD_MAX);
    this.syncPlain('timeSeconds', this.state.timeSeconds, TIME_MIN, TIME_MAX);
    this.syncPlain('preinfusionSeconds', this.state.preinfusionSeconds, 0, PREINFUSION_MAX);
    this.syncPlain('tdsPercent', this.state.tdsPercent, 0, TDS_MAX);
  }

  private syncMass(key: NumericKey, grams: number, minG: number, maxG: number): void {
    const imperial = this.state.unitSystem === 'imperial';
    const min = imperial ? gramsToOz(minG) : minG;
    const max = imperial ? gramsToOz(maxG) : maxG;
    const step = imperial ? 0.02 : 0.5;
    this.writeInputs({ key, value: this.displayMass(grams), min, max, step });
  }

  private syncPlain(key: NumericKey, value: number, min: number, max: number): void {
    this.writeInputs({ key, value: `${value}`, min, max, step: key === 'tdsPercent' ? 0.1 : 1 });
  }

  private writeInputs(opts: { key: NumericKey; value: string; min: number; max: number; step: number }): void {
    this.root.querySelectorAll<HTMLInputElement>(`[data-range-key="${opts.key}"], [data-number-key="${opts.key}"]`).forEach((input) => {
      input.min = `${opts.min}`;
      input.max = `${opts.max}`;
      input.step = `${opts.step}`;
      input.value = opts.value;
    });
  }

  private syncAndPaint(): void {
    this.syncControls();
    this.paint();
  }

  private paint(): void {
    const tdsPercent = this.state.tdsEnabled ? this.state.tdsPercent : 0;
    const outputs = calculateEspresso({ ...this.state, tdsPercent });
    renderEspresso(this.root, outputs, this.state, this.ui);
    saveState(this.state);
  }
}
