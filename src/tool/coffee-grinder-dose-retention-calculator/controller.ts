import type { GrinderRetentionCalculatorUI } from './ui';
import { DEFAULT_STATE, type CurrencyId, type GrinderRetentionState, type PresetId, type UnitSystem, calculateRetention, clamp, convertCurrencyAmount, formatCurrency, formatInputWeight, formatWeight, getCostRange, getCurrencyDefinition, getDefaultCurrencyForLocale, getPreset, isCurrencyId, parseWeight } from './logic';
import { renderRetention } from './dom-views';
import { loadRetentionState, saveRetentionState } from './storage';

type NumericKey = 'targetDoseG' | 'trialInputG' | 'trialOutputG' | 'purgeG' | 'sessionsPerDay' | 'costPerKg';
const RANGES: Record<NumericKey, [number, number]> = { targetDoseG: [5, 60], trialInputG: [5, 100], trialOutputG: [0, 100], purgeG: [0, 20], sessionsPerDay: [1, 80], costPerKg: [0, 200] };

export class GrinderRetentionController {
  private readonly root: HTMLElement;
  private readonly ui: GrinderRetentionCalculatorUI;
  private readonly locale: string;
  private state: GrinderRetentionState;

  constructor(root: HTMLElement, ui: GrinderRetentionCalculatorUI) {
    this.root = root;
    this.ui = ui;
    this.locale = root.dataset.locale ?? 'en';
    this.state = this.initializeState();
    this.bindEvents();
    this.syncControls();
    this.render();
  }

  private readInitialState(): GrinderRetentionState {
    try { return { ...DEFAULT_STATE, ...JSON.parse(this.root.dataset.initialState ?? '{}') }; } catch { return DEFAULT_STATE; }
  }

  private initializeState(): GrinderRetentionState {
    const initial = this.readInitialState();
    const stored = loadRetentionState();
    const storedCurrency = isCurrencyId(stored?.currency) ? stored.currency : null;
    const initialCurrency = isCurrencyId(initial.currency) ? initial.currency : getDefaultCurrencyForLocale(this.locale);
    return { ...DEFAULT_STATE, ...(storedCurrency ? stored : initial), currency: storedCurrency ?? initialCurrency };
  }

  private getRange(key: NumericKey): [number, number] { return key === 'costPerKg' ? getCostRange(this.state.currency) : RANGES[key]; }

  private getNumberStep(key: NumericKey): string { if (key === 'costPerKg') return '0.01'; return this.state.unitSystem === 'imperial' ? '0.01' : '0.1'; }

  private bindEvents(): void {
    this.root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((button) => button.addEventListener('click', () => this.setUnit(button.dataset.unitSystem as UnitSystem)));
    this.root.querySelector<HTMLSelectElement>('[data-currency-select]')?.addEventListener('change', (event) => this.setCurrency((event.currentTarget as HTMLSelectElement).value as CurrencyId));
    this.root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => button.addEventListener('click', () => this.applyPreset(button.dataset.preset as PresetId)));
    this.root.querySelectorAll<HTMLInputElement>('[data-number-key]').forEach((input) => input.addEventListener('input', () => this.update(input.dataset.numberKey as NumericKey, input.value, false)));
    this.root.querySelectorAll<HTMLInputElement>('[data-range-key]').forEach((input) => input.addEventListener('input', () => this.update(input.dataset.rangeKey as NumericKey, input.value, true)));
    this.root.querySelector<HTMLButtonElement>('[data-action="copy"]')?.addEventListener('click', () => this.copyResult());
    this.root.querySelector<HTMLButtonElement>('[data-action="reset"]')?.addEventListener('click', () => this.reset());
  }

  private setUnit(unitSystem: UnitSystem): void { this.state = { ...this.state, unitSystem }; this.persistRender(); }

  private setCurrency(currency: CurrencyId): void {
    if (!isCurrencyId(currency)) return;
    this.state = { ...this.state, currency, costPerKg: convertCurrencyAmount(this.state.costPerKg, this.state.currency, currency), presetId: 'custom' };
    this.persistRender();
  }

  private applyPreset(id: PresetId): void {
    const preset = getPreset(id);
    this.state = preset ? { ...this.state, ...preset, costPerKg: preset.costPerKg * getCurrencyDefinition(this.state.currency).eurRate, presetId: id } : { ...this.state, presetId: id };
    this.persistRender();
  }

  private update(key: NumericKey, raw: string, fromRange: boolean): void {
    const input = Number(raw);
    const value = !fromRange && key !== 'sessionsPerDay' && key !== 'costPerKg' ? parseWeight(input, this.state.unitSystem) : input;
    if (!Number.isFinite(value)) return;
    const [min, max] = this.getRange(key);
    this.state = { ...this.state, [key]: clamp(value, min, max), presetId: 'custom' };
    this.persistRender();
  }

  private syncButtons(): void {
    this.root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((button) => { const active = button.dataset.unitSystem === this.state.unitSystem; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
    this.root.querySelectorAll<HTMLElement>('[data-preset]').forEach((button) => { const active = button.dataset.preset === this.state.presetId; button.classList.toggle('is-active', active); button.setAttribute('aria-pressed', String(active)); });
  }

  private syncCurrency(): void {
    const select = this.root.querySelector<HTMLSelectElement>('[data-currency-select]');
    if (select) select.value = this.state.currency;
    const definition = getCurrencyDefinition(this.state.currency);
    const note = this.ui.currencyRateNote.replace('{rate}', definition.eurRate.toLocaleString(this.locale, { maximumFractionDigits: 4 })).replace('{currency}', this.state.currency);
    this.root.querySelectorAll<HTMLElement>('[data-ref="currency-symbol"]').forEach((element) => { element.textContent = definition.symbol; });
    this.root.querySelectorAll<HTMLElement>('[data-ref="currency-rate-note"]').forEach((element) => { element.textContent = `${this.ui.currencyHint} · ${note}`; });
  }

  private syncNumbers(): void {
    this.root.querySelectorAll<HTMLInputElement>('[data-number-key]').forEach((input) => {
      const key = input.dataset.numberKey as NumericKey;
      if (key === 'sessionsPerDay') { input.value = String(this.state[key]); return; }
      const [min, max] = this.getRange(key);
      input.min = formatInputWeight(min, this.state.unitSystem);
      input.max = formatInputWeight(max, this.state.unitSystem);
      input.step = this.getNumberStep(key);
      input.value = key === 'costPerKg' ? this.state.costPerKg.toFixed(2) : formatInputWeight(this.state[key], this.state.unitSystem);
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-range-key]').forEach((input) => { const key = input.dataset.rangeKey as NumericKey; const [, max] = this.getRange(key); input.max = String(max); input.value = String(this.state[key]); });
  }

  private syncUnits(): void {
    const unit = this.state.unitSystem === 'imperial' ? this.ui.unitWeightImperial : this.ui.unitWeightMetric;
    this.root.querySelectorAll<HTMLElement>('[data-ref="weight-unit"]').forEach((element) => { element.textContent = unit; });
  }

  private syncControls(): void { this.syncButtons(); this.syncCurrency(); this.syncNumbers(); this.syncUnits(); }

  private persistRender(): void { saveRetentionState(this.state); this.syncControls(); this.render(); }

  private render(): void { renderRetention({ root: this.root, state: this.state, result: calculateRetention(this.state), ui: this.ui }); }

  private buildCopyText(): string {
    const result = calculateRetention(this.state);
    const unit = this.state.unitSystem === 'imperial' ? this.ui.unitWeightImperial : this.ui.unitWeightMetric;
    return this.ui.copyTemplate.replace('{retention}', formatWeight(result.retainedG, this.state.unitSystem)).replace('{unit}', unit).replace('{charge}', formatWeight(result.chargeDoseG, this.state.unitSystem)).replace('{waste}', formatWeight(result.wastePerSessionG, this.state.unitSystem)).replace('{cost}', formatCurrency(result.costPerSession, this.state.currency, this.locale));
  }

  private async copyResult(): Promise<void> {
    try {
      await navigator.clipboard.writeText(this.buildCopyText());
      const button = this.root.querySelector<HTMLElement>('[data-action="copy"]');
      if (button) button.textContent = this.ui.copiedText;
      window.setTimeout(() => { if (button) button.textContent = this.ui.copyResult; }, 1600);
    } catch {}
  }

  private reset(): void {
    const currency = getDefaultCurrencyForLocale(this.locale);
    this.state = { ...DEFAULT_STATE, ...this.readInitialState(), currency, costPerKg: 28 * getCurrencyDefinition(currency).eurRate };
    saveRetentionState(this.state);
    this.syncControls();
    this.render();
  }
}
