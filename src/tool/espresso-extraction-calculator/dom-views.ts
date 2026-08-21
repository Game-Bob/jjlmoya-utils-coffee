import type { EspressoOutputs, EspressoState } from './logic';
import { GLASS_BOTTOM, nearestRatioTarget } from './logic';
import {
  classicDeltaLabel,
  shotStyleLabel,
  statusLabel,
  timePaceLabel,
  yieldBandLabel,
} from './evaluator';
import type { EspressoExtractionUI } from './ui';

function setText(root: HTMLElement, key: string, value: string): void {
  root.querySelectorAll(`[data-ref="${key}"]`).forEach((el) => {
    el.textContent = value;
  });
}

function yieldText(outputs: EspressoOutputs, ui: EspressoExtractionUI): string {
  if (outputs.extractionYieldPercent === null) return ui.yieldEmpty;
  return `${outputs.extractionYieldPercent}${ui.unitPercent}`;
}

function setMark(root: HTMLElement, key: string, y: number): void {
  const line = root.querySelector<SVGLineElement>(`[data-mark-line="${key}"]`);
  const label = root.querySelector<SVGTextElement>(`[data-mark-label="${key}"]`);
  if (line) {
    line.setAttribute('y1', `${y}`);
    line.setAttribute('y2', `${y}`);
  }
  if (label) label.setAttribute('y', `${y + 4}`);
}

export function updateGlass(root: HTMLElement, outputs: EspressoOutputs): void {
  const liquid = root.querySelector<SVGRectElement>('.eec-liquid');
  const crema = root.querySelector<SVGEllipseElement>('.eec-crema');
  const foam = root.querySelector<SVGGElement>('.eec-foam');
  const y = outputs.liquidY;
  const height = Math.max(14, GLASS_BOTTOM - y);
  if (liquid) {
    liquid.setAttribute('y', `${y}`);
    liquid.setAttribute('height', `${height}`);
  }
  if (crema) crema.setAttribute('cy', `${y + 6}`);
  if (foam) foam.setAttribute('transform', `translate(0, ${y - 148})`);
  setMark(root, '1', outputs.mark1Y);
  setMark(root, '2', outputs.mark2Y);
  setMark(root, '3', outputs.mark3Y);
  updateMeniscus(root, y);
  updateDrip(root, outputs.flowRateGramsPerSec);
}

function updateMeniscus(root: HTMLElement, y: number): void {
  const pin = root.querySelector<SVGLineElement>('.eec-pin');
  const badge = root.querySelector<SVGGElement>('.eec-ratio-badge');
  if (pin) {
    pin.setAttribute('y1', `${y + 6}`);
    pin.setAttribute('y2', `${y + 6}`);
  }
  if (badge) badge.setAttribute('transform', `translate(318, ${y - 10})`);
}

function updateDrip(root: HTMLElement, flow: number): void {
  const drip = root.querySelector<SVGGElement>('.eec-drip-group');
  if (drip) drip.style.opacity = `${Math.min(1, 0.25 + flow / 2.4)}`;
}

export function updateReadouts(
  root: HTMLElement,
  outputs: EspressoOutputs,
  state: EspressoState,
  ui: EspressoExtractionUI,
): void {
  setText(root, 'ratio', outputs.ratioText);
  setText(root, 'style', shotStyleLabel(outputs.shotStyle, ui));
  setText(root, 'time', `${outputs.contactTimeSeconds}${ui.unitSeconds}`);
  setText(root, 'pace', timePaceLabel(outputs.timePace, ui));
  setText(root, 'flow', `${outputs.flowRateGramsPerSec} ${ui.unitFlow}`);
  setText(root, 'yield', yieldText(outputs, ui));
  setText(root, 'band', yieldBandLabel(outputs.yieldBand, ui));
  setText(root, 'status', statusLabel(outputs.inClassicWindow, ui));
  setText(root, 'delta', classicDeltaLabel(outputs.deltaFromClassic, ui));
  const massUnit = state.unitSystem === 'imperial' ? ui.unitOz : ui.unitGrams;
  root.querySelectorAll('[data-mass-unit]').forEach((el) => {
    el.textContent = massUnit;
  });
}

export function updateTdsPanel(root: HTMLElement, state: EspressoState): void {
  root.classList.toggle('is-tds-on', state.tdsEnabled);
  const toggle = root.querySelector<HTMLButtonElement>('[data-action="tds"]');
  if (toggle) toggle.setAttribute('aria-pressed', state.tdsEnabled ? 'true' : 'false');
}

export function updateActiveChips(root: HTMLElement, state: EspressoState, ratio: number): void {
  const target = nearestRatioTarget(ratio);
  root.querySelectorAll<HTMLElement>('[data-preset]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.preset === state.presetId);
  });
  root.querySelectorAll<HTMLElement>('[data-unit-system]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.unitSystem === state.unitSystem);
  });
  root.querySelectorAll<HTMLElement>('[data-ratio-target]').forEach((btn) => {
    btn.classList.toggle('is-active', btn.dataset.ratioTarget === target);
  });
  root.querySelectorAll<HTMLElement>('[data-pre]').forEach((btn) => {
    btn.classList.toggle('is-active', Number(btn.dataset.pre) === state.preinfusionSeconds);
  });
}

export function renderEspresso(
  root: HTMLElement,
  outputs: EspressoOutputs,
  state: EspressoState,
  ui: EspressoExtractionUI,
): void {
  updateGlass(root, outputs);
  updateReadouts(root, outputs, state, ui);
  updateTdsPanel(root, state);
  updateActiveChips(root, state, outputs.brewRatio);
  root.classList.toggle('is-classic', outputs.inClassicWindow);
}
