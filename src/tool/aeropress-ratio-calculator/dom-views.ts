import { type AeropressOutputs, mlToFlOz } from './logic';
import type { AeropressRatioCalculatorUI } from './ui';

function updatePlungerAndLiquid(
  container: HTMLElement,
  outputs: AeropressOutputs,
): void {
  const waterFill = container.querySelector<SVGElement>('.aeropress-ratio-calculator-water-level');
  const coffeeBed = container.querySelector<SVGElement>('.aeropress-ratio-calculator-coffee-bed');
  const plungerPiston = container.querySelector<SVGElement>('.aeropress-ratio-calculator-plunger-piston');
  const plungerRod = container.querySelector<SVGElement>('.aeropress-ratio-calculator-plunger-rod');

  const bedHeight = Math.min(30, Math.max(10, outputs.coffeeBedDisplacementMl * 0.6));
  const waterHeight = Math.min(115, Math.max(10, (outputs.chamberWaterGrams / 250) * 105));
  const bedY = 190 - bedHeight;
  const waterY = bedY - waterHeight;
  const plungerY = Math.max(16, waterY - 14);

  if (coffeeBed) {
    coffeeBed.setAttribute('height', `${bedHeight}`);
    coffeeBed.setAttribute('y', `${bedY}`);
  }
  if (waterFill) {
    waterFill.setAttribute('height', `${waterHeight}`);
    waterFill.setAttribute('y', `${waterY}`);
  }
  if (plungerPiston) plungerPiston.setAttribute('y', `${plungerY}`);
  if (plungerRod) plungerRod.setAttribute('height', `${Math.max(20, plungerY + 4)}`);
}

export function updateChamberVisual(container: HTMLElement, outputs: AeropressOutputs, isImperial: boolean): void {
  updatePlungerAndLiquid(container, outputs);

  const bypassBeaker = container.querySelector<HTMLElement>('.aeropress-ratio-calculator-bypass-beaker');
  const chamberText = container.querySelector<HTMLElement>('.aeropress-ratio-calculator-chamber-dynamic-text');

  if (chamberText) {
    const unit = isImperial ? 'fl oz' : 'g';
    const val = isImperial ? mlToFlOz(outputs.chamberWaterGrams) : outputs.chamberWaterGrams;
    chamberText.textContent = `${val} ${unit}`;
  }

  if (bypassBeaker) bypassBeaker.style.display = outputs.hasBypass ? 'flex' : 'none';
}

function formatWaterVal(amountGrams: number, unit: string, isImperial: boolean): string {
  const val = isImperial ? mlToFlOz(amountGrams) : amountGrams;
  return `${val} ${unit}`;
}

export function updateStatCards(
  container: HTMLElement,
  outputs: AeropressOutputs,
  ui: AeropressRatioCalculatorUI,
  isImperial: boolean,
): void {
  const waterUnit = isImperial ? ui.unitFlOz : ui.unitGrams;
  const elTotal = container.querySelector('.aeropress-ratio-calculator-val-total');
  const elBypass = container.querySelector('.aeropress-ratio-calculator-val-bypass');
  const elYield = container.querySelector('.aeropress-ratio-calculator-val-yield');
  const elTds = container.querySelector('.aeropress-ratio-calculator-val-tds');
  const beakerVal = container.querySelector('.aeropress-ratio-calculator-bypass-val');

  if (elTotal) elTotal.textContent = formatWaterVal(outputs.totalWaterGrams, waterUnit, isImperial);
  if (elBypass) elBypass.textContent = formatWaterVal(outputs.bypassWaterGrams, waterUnit, isImperial);
  if (elYield) elYield.textContent = formatWaterVal(outputs.finalYieldGrams, waterUnit, isImperial);
  if (elTds) elTds.textContent = `${outputs.estimatedTdsPercent}${ui.unitPercent}`;
  if (beakerVal) beakerVal.textContent = formatWaterVal(outputs.bypassWaterGrams, waterUnit, isImperial);
}

export function updateBypassAlert(
  alertEl: HTMLElement,
  outputs: AeropressOutputs,
  ui: AeropressRatioCalculatorUI,
  isImperial: boolean,
): void {
  alertEl.style.display = outputs.hasBypass ? 'flex' : 'none';
  const descEl = alertEl.querySelector('.aeropress-ratio-calculator-bypass-desc');
  if (descEl && outputs.hasBypass) {
    const chamberStr = formatWaterVal(outputs.chamberWaterGrams, isImperial ? ui.unitFlOz : ui.unitGrams, isImperial);
    const bypassStr = formatWaterVal(outputs.bypassWaterGrams, isImperial ? ui.unitFlOz : ui.unitGrams, isImperial);
    descEl.textContent = ui.bypassAlertText
      .replace('{chamber}', chamberStr)
      .replace('{bypass}', bypassStr);
  }
}

export function updateTimerDisplay(timerEl: HTMLElement, phaseText: string, timeSec: number): void {
  const phaseLabel = timerEl.querySelector('.aeropress-ratio-calculator-timer-phase');
  const clockText = timerEl.querySelector('.aeropress-ratio-calculator-timer-clock');
  const mins = Math.floor(timeSec / 60);
  const secs = timeSec % 60;
  const formatted = `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;

  if (phaseLabel) phaseLabel.textContent = phaseText;
  if (clockText) clockText.textContent = formatted;
}

export function updateStrengthBadge(badgeEl: HTMLElement, label: string): void {
  badgeEl.textContent = label;
}
