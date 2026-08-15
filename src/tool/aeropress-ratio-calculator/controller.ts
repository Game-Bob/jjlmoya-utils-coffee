import { calculateAeropress, CHAMBER_CAPACITIES, gramsToOz, ozToGrams, type AeropressInputs } from './logic';
import { RECIPE_PRESETS, getStrengthLabel } from './evaluator';
import { updateChamberVisual, updateStatCards, updateBypassAlert, updateStrengthBadge } from './dom-views';
import { saveState, loadState } from './storage';
import { AeropressTimerManager } from './timer';
import type { AeropressRatioCalculatorUI, PresetRecipe } from './ui';

export class AeropressCalculatorController {
  private root: HTMLElement;
  private ui: AeropressRatioCalculatorUI;
  private currentPreset: PresetRecipe | null = null;
  private selectedModel = 'original';
  private selectedMethod = 'standard';
  private unitSystem: 'metric' | 'imperial' = 'metric';
  private currentDoseGrams = 11;
  private currentRatio = 18.2;

  constructor(root: HTMLElement) {
    this.root = root;
    this.ui = JSON.parse(root.dataset.i18n || '{}') as AeropressRatioCalculatorUI;
    this.restoreState();
    this.bindUnitToggle();
    this.bindTactileInputs();
    this.bindCustomSelects();
    this.bindPresets();
    new AeropressTimerManager(this.root, this.ui);
    this.recalculate();
  }

  private restoreState(): void {
    const saved = loadState();
    if (!saved) return;
    this.unitSystem = saved.unitSystem || 'metric';
    this.currentDoseGrams = saved.doseGrams || 11;
    this.currentRatio = saved.ratio || 18.2;
    this.selectedModel = saved.model || 'original';
    this.selectedMethod = saved.method || 'standard';
    this.updateUnitUI();
    this.syncInputsToState();
    this.setCustomSelectValue('model', this.selectedModel);
    this.setCustomSelectValue('method', this.selectedMethod);
  }

  private bindUnitToggle(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const target = btn.getAttribute('data-unit') as 'metric' | 'imperial';
        if (target && target !== this.unitSystem) {
          this.unitSystem = target;
          this.updateUnitUI();
          this.syncInputsToState();
          this.recalculate();
          this.persist();
        }
      });
    });
  }

  private updateUnitUI(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-unit]').forEach((b) => {
      b.classList.toggle('aeropress-ratio-calculator-unit-active', b.getAttribute('data-unit') === this.unitSystem);
    });
    const doseUnitPill = this.root.querySelector('.aeropress-ratio-calculator-dose-unit-pill');
    if (doseUnitPill) {
      doseUnitPill.textContent = this.unitSystem === 'imperial' ? this.ui.doseUnitImperial : this.ui.doseUnitMetric;
    }
  }

  private syncInputsToState(): void {
    const isImperial = this.unitSystem === 'imperial';
    const displayDose = isImperial ? gramsToOz(this.currentDoseGrams) : this.currentDoseGrams;
    const doseInputs = this.root.querySelectorAll<HTMLInputElement>('[data-key="dose"]');
    doseInputs.forEach((el) => {
      el.min = isImperial ? '0.20' : '5';
      el.max = isImperial ? '1.60' : '45';
      el.step = isImperial ? '0.02' : '0.5';
      el.value = `${displayDose}`;
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-key="ratio"]').forEach((r) => {
      r.value = `${this.currentRatio}`;
    });
  }

  private setCustomSelectValue(selectKey: string, val: string): void {
    const wrap = this.root.querySelector<HTMLElement>(`[data-custom-select="${selectKey}"]`);
    if (!wrap) return;
    const option = wrap.querySelector<HTMLElement>(`[data-val="${val}"]`);
    const valText = wrap.querySelector<HTMLElement>('.aeropress-ratio-calculator-select-val');
    if (valText && option?.textContent) valText.textContent = option.textContent;
    wrap.querySelectorAll('.aeropress-ratio-calculator-select-option').forEach((opt) => {
      opt.classList.toggle('aeropress-ratio-calculator-option-selected', opt.getAttribute('data-val') === val);
    });
    if (selectKey === 'model') this.selectedModel = val;
    if (selectKey === 'method') this.selectedMethod = val;
  }

  private bindTactileInputs(): void {
    this.root.querySelectorAll<HTMLInputElement>('[data-key="dose"]').forEach((input) => {
      input.addEventListener('input', () => {
        const rawVal = parseFloat(input.value.replace(',', '.')) || 0;
        this.currentDoseGrams = this.unitSystem === 'imperial' ? ozToGrams(rawVal) : rawVal;
        this.clearPresetAndSync();
      });
    });
    this.root.querySelectorAll<HTMLInputElement>('[data-key="ratio"]').forEach((input) => {
      input.addEventListener('input', () => {
        this.currentRatio = parseFloat(input.value.replace(',', '.')) || 16;
        this.clearPresetAndSync();
      });
    });
  }

  private clearPresetAndSync(): void {
    this.currentPreset = null;
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset-id]').forEach((b) => b.classList.remove('aeropress-ratio-calculator-preset-active'));
    this.syncInputsToState();
    this.recalculate();
    this.persist();
  }

  private bindCustomSelects(): void {
    this.root.querySelectorAll<HTMLElement>('[data-custom-select]').forEach((wrap) => {
      const trigger = wrap.querySelector<HTMLButtonElement>('.aeropress-ratio-calculator-select-trigger');
      const dropdown = wrap.querySelector<HTMLElement>('.aeropress-ratio-calculator-select-dropdown');
      const selectKey = wrap.getAttribute('data-custom-select') || '';
      if (trigger && dropdown) {
        trigger.addEventListener('click', (e) => {
          e.stopPropagation();
          this.root.querySelectorAll<HTMLElement>('.aeropress-ratio-calculator-select-open').forEach((sel) => {
            if (sel !== wrap) sel.classList.remove('aeropress-ratio-calculator-select-open');
          });
          wrap.classList.toggle('aeropress-ratio-calculator-select-open');
        });
        dropdown.querySelectorAll<HTMLElement>('.aeropress-ratio-calculator-select-option').forEach((opt) => {
          opt.addEventListener('click', (e) => {
            e.stopPropagation();
            this.setCustomSelectValue(selectKey, opt.getAttribute('data-val') || '');
            wrap.classList.remove('aeropress-ratio-calculator-select-open');
            this.recalculate();
            this.persist();
          });
        });
      }
    });
    document.addEventListener('click', () => {
      this.root.querySelectorAll<HTMLElement>('.aeropress-ratio-calculator-select-open').forEach((s) => s.classList.remove('aeropress-ratio-calculator-select-open'));
    });
  }

  private bindPresets(): void {
    this.root.querySelectorAll<HTMLButtonElement>('[data-preset-id]').forEach((btn) => {
      btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-preset-id');
        const preset = RECIPE_PRESETS.find((p) => p.id === id);
        if (!preset) return;
        this.currentPreset = preset;
        this.currentDoseGrams = preset.doseGrams;
        this.currentRatio = preset.ratio;
        this.setCustomSelectValue('method', preset.method);
        this.root.querySelectorAll<HTMLButtonElement>('[data-preset-id]').forEach((b) => {
          b.classList.toggle('aeropress-ratio-calculator-preset-active', b.getAttribute('data-preset-id') === preset.id);
        });
        this.syncInputsToState();
        this.recalculate();
        this.persist();
      });
    });
  }

  private recalculate(): void {
    const modelKey = this.selectedModel as keyof typeof CHAMBER_CAPACITIES;
    const chamberCapacityMl = CHAMBER_CAPACITIES[modelKey] || 230;
    const inputs: AeropressInputs = {
      doseGrams: this.currentDoseGrams,
      ratio: this.currentRatio,
      chamberCapacityMl,
      method: this.selectedMethod as 'standard' | 'inverted',
    };
    const outputs = calculateAeropress(inputs);
    const isImperial = this.unitSystem === 'imperial';

    updateChamberVisual(this.root, outputs, isImperial);
    updateStatCards(this.root, outputs, this.ui, isImperial);
    const alertEl = this.root.querySelector<HTMLElement>('.aeropress-ratio-calculator-bypass-alert');
    if (alertEl) updateBypassAlert(alertEl, outputs, this.ui, isImperial);
    const badgeEl = this.root.querySelector<HTMLElement>('.aeropress-ratio-calculator-strength-badge');
    if (badgeEl) updateStrengthBadge(badgeEl, getStrengthLabel(outputs, this.ui));
    const grindEl = this.root.querySelector<HTMLElement>('.aeropress-ratio-calculator-val-grind');
    if (grindEl) grindEl.textContent = this.getGrindRecommendation();
  }

  private getGrindRecommendation(): string {
    if (this.currentPreset) {
      if (this.currentPreset.grindKey === 'fine') return this.ui.grindFine;
      if (this.currentPreset.grindKey === 'mediumFine') return this.ui.grindMediumFine;
      if (this.currentPreset.grindKey === 'coarse') return this.ui.grindCoarse;
      return this.ui.grindMedium;
    }
    if (this.currentRatio < 10) return this.ui.grindFine;
    if (this.currentRatio < 15) return this.ui.grindMediumFine;
    return this.ui.grindMedium;
  }

  private persist(): void {
    saveState({
      doseGrams: this.currentDoseGrams,
      ratio: this.currentRatio,
      model: this.selectedModel as 'original' | 'xl' | 'go',
      method: this.selectedMethod as 'standard' | 'inverted',
      tempC: 93,
      presetId: this.currentPreset ? this.currentPreset.id : 'custom',
      unitSystem: this.unitSystem,
    });
  }
}
