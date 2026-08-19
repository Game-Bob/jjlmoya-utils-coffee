import type { ColdBrewRatioCalculatorUI } from './ui';
import {
  DEFAULT_COLD_BREW_STATE,
  type ColdBrewPresetId,
  type ColdBrewState,
  type UnitSystem,
  calculateColdBrew,
  clamp,
  getPreset,
  formatVolume,
  formatWeight,
  parseVolume,
} from './logic';
import { renderColdBrew } from './dom-views';
import { loadColdBrewState, saveColdBrewState } from './storage';

type NumericKey = 'brewWaterMl' | 'ratio' | 'dilutionRatio' | 'steepHours';

export class ColdBrewRatioController {
  private readonly root: HTMLElement;
  private readonly ui: ColdBrewRatioCalculatorUI;
  private state: ColdBrewState;

  constructor(root: HTMLElement, ui: ColdBrewRatioCalculatorUI) {
    this.root = root;
    this.ui = ui;
    this.state = { ...DEFAULT_COLD_BREW_STATE, ...(loadColdBrewState() ?? this.readInitialState()) };
    this.bindEvents();
    this.syncControls();
    this.render();
  }

  private readInitialState(): ColdBrewState {
    try {
      return { ...DEFAULT_COLD_BREW_STATE, ...JSON.parse(this.root.dataset.initialState ?? '{}') };
    } catch {
      return DEFAULT_COLD_BREW_STATE;
    }
  }

  private bindEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((button) => {
      button.addEventListener('click', () => this.setMode(button.dataset.mode as 'ready' | 'concentrate'));
    });
    this.root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((button) => {
      button.addEventListener('click', () => this.setUnitSystem(button.dataset.unitSystem as UnitSystem));
    });
    this.root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => {
      button.addEventListener('click', () => this.applyPreset(button.dataset.preset as ColdBrewPresetId));
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-number-key]').forEach((input) => {
      input.addEventListener('input', () => this.updateNumber(input.dataset.numberKey as NumericKey, input.value, false));
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-range-key]').forEach((input) => {
      input.addEventListener('input', () => this.updateNumber(input.dataset.rangeKey as NumericKey, input.value, true));
    });
    this.root.querySelector<HTMLButtonElement>('[data-action="copy"]')?.addEventListener('click', () => this.copyRecipe());
    this.root.querySelector<HTMLButtonElement>('[data-action="reset"]')?.addEventListener('click', () => this.reset());
  }

  private setMode(mode: 'ready' | 'concentrate'): void {
    const dilutionRatio = mode === 'ready' ? 0 : this.state.dilutionRatio || 1;
    this.state = { ...this.state, mode, presetId: 'custom', dilutionRatio };
    this.persistRender();
  }

  private setUnitSystem(unitSystem: UnitSystem): void {
    this.state = { ...this.state, unitSystem };
    this.persistRender();
  }

  private applyPreset(id: ColdBrewPresetId): void {
    if (id === 'custom') {
      this.state = { ...this.state, presetId: id };
      this.persistRender();
      return;
    }
    const preset = getPreset(id);
    if (!preset) return;
    this.state = { ...this.state, presetId: id, mode: preset.mode, ratio: preset.ratio, dilutionRatio: preset.dilutionRatio, steepHours: preset.steepHours };
    this.persistRender();
  }

  private updateNumber(key: NumericKey, rawValue: string, fromRange: boolean): void {
    const enteredValue = Number(rawValue);
    const value = key === 'brewWaterMl' && !fromRange ? parseVolume(enteredValue, this.state.unitSystem) : enteredValue;
    if (!Number.isFinite(value)) return;
    const ranges: Record<NumericKey, [number, number]> = {
      brewWaterMl: [250, 4000],
      ratio: [4, 12],
      dilutionRatio: [0, 2],
      steepHours: [8, 24],
    };
    const [min, max] = ranges[key];
    this.state = { ...this.state, [key]: clamp(value, min, max), presetId: 'custom' };
    if (key === 'dilutionRatio' && this.state.mode === 'ready') this.state.dilutionRatio = 0;
    this.persistRender();
  }

  private persistRender(): void {
    saveColdBrewState(this.state);
    this.syncControls();
    this.render();
  }

  private syncControls(): void {
    this.root.querySelectorAll<HTMLElement>('[data-mode]').forEach((button) => {
      const active = button.dataset.mode === this.state.mode;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((button) => {
      const active = button.dataset.unitSystem === this.state.unitSystem;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => {
      const active = button.dataset.preset === this.state.presetId;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-number-key]').forEach((input) => {
      const key = input.dataset.numberKey as NumericKey;
      input.value = key === 'brewWaterMl' ? formatVolume(this.state.brewWaterMl, this.state.unitSystem) : String(this.state[key]);
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-range-key]').forEach((input) => {
      const key = input.dataset.rangeKey as NumericKey;
      input.value = String(this.state[key]);
    });
    this.root.classList.toggle('is-concentrate', this.state.mode === 'concentrate');
  }

  private render(): void {
    renderColdBrew({ root: this.root, state: this.state, result: calculateColdBrew(this.state), ui: this.ui });
  }

  private async copyRecipe(): Promise<void> {
    const result = calculateColdBrew(this.state);
    const waterUnit = this.state.unitSystem === 'imperial' ? this.ui.unitWaterImperial : this.ui.unitWaterMetric;
    const weightUnit = this.state.unitSystem === 'imperial' ? this.ui.unitWeightImperial : this.ui.unitWeightMetric;
    const recipe = this.ui.copyTemplate
      .replace('{coffee}', formatWeight(result.coffeeG, this.state.unitSystem))
      .replace('{coffeeUnit}', weightUnit)
      .replace('{brewWater}', formatVolume(result.brewWaterMl, this.state.unitSystem))
      .replace('{waterUnit}', waterUnit)
      .replace('{ratio}', String(result.ratio))
      .replace('{hours}', String(result.steepHours))
      .replace('{dilutionWater}', formatVolume(result.dilutionWaterMl, this.state.unitSystem))
      .replace('{servedYield}', formatVolume(result.servedYieldMl, this.state.unitSystem));
    try {
      await navigator.clipboard.writeText(recipe);
      const button = this.root.querySelector<HTMLElement>('[data-action="copy"]');
      if (button) button.textContent = this.ui.copiedText;
      window.setTimeout(() => {
        if (button) button.textContent = this.ui.copyRecipe;
      }, 1600);
    } catch {
      return;
    }
  }

  private reset(): void {
    this.state = DEFAULT_COLD_BREW_STATE;
    saveColdBrewState(this.state);
    this.syncControls();
    this.render();
  }
}
