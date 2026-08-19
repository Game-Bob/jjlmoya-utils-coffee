import type { ColdBrewRatioCalculatorUI } from './ui';
import type { ColdBrewResult, ColdBrewState } from './logic';
import { formatRatio, formatVolume, formatWeight } from './logic';
import { evaluateBrew } from './evaluator';

interface RenderArgs {
  root: HTMLElement;
  state: ColdBrewState;
  result: ColdBrewResult;
  ui: ColdBrewRatioCalculatorUI;
}

function get<T extends Element>(root: HTMLElement, ref: string): T | null {
  return root.querySelector<T>(`[data-ref="${ref}"]`);
}

function setText(root: HTMLElement, ref: string, value: string): void {
  root.querySelectorAll<HTMLElement>(`[data-ref="${ref}"]`).forEach((element) => {
    element.textContent = value;
  });
}

function setWidth(root: HTMLElement, ref: string, value: number): void {
  const element = get<HTMLElement>(root, ref);
  if (element) element.style.width = `${Math.max(0, Math.min(100, value))}%`;
}

function getDisplayUnits(state: ColdBrewState, ui: ColdBrewRatioCalculatorUI): { water: string; weight: string } {
  if (state.unitSystem === 'imperial') return { water: ui.unitWaterImperial, weight: ui.unitWeightImperial };
  return { water: ui.unitWaterMetric, weight: ui.unitWeightMetric };
}

function renderFlowLabels(args: RenderArgs): void {
  const { root, result, state, ui } = args;
  const units = getDisplayUnits(state, ui);
  setText(root, 'flow-coffee-label', `${formatWeight(result.coffeeG, state.unitSystem)} ${units.weight}`);
  setText(root, 'flow-brew-water-label', `${formatVolume(result.brewWaterMl, state.unitSystem)} ${units.water}`);
  setText(root, 'flow-yield-label', `${formatVolume(result.brewYieldMl, state.unitSystem)} ${units.water}`);
  setText(root, 'flow-retained-label', `${formatVolume(result.retainedMl, state.unitSystem)} ${units.water}`);
  setText(root, 'flow-served-label', `${formatVolume(result.servedYieldMl, state.unitSystem)} ${units.water}`);
  setText(root, 'flow-dilution-label', `${formatVolume(result.dilutionWaterMl, state.unitSystem)} ${units.water}`);
}

function renderFlow(args: RenderArgs): void {
  const { root, result } = args;
  const brewTotal = result.ratio + 1;
  const servedTotal = Math.max(result.servedYieldMl, 1);
  const yieldShare = (result.brewYieldMl / result.brewWaterMl) * 100;
  setWidth(root, 'flow-coffee', 100 / brewTotal);
  setWidth(root, 'flow-brew-water', (result.ratio / brewTotal) * 100);
  setWidth(root, 'flow-yield', yieldShare);
  setWidth(root, 'flow-retained', (result.retainedMl / result.brewWaterMl) * 100);
  setWidth(root, 'flow-served', (result.brewYieldMl / servedTotal) * 100);
  setWidth(root, 'flow-dilution', (result.dilutionWaterMl / servedTotal) * 100);
  const dilutionSegment = get<HTMLElement>(root, 'flow-dilution');
  if (dilutionSegment) dilutionSegment.style.opacity = result.dilutionWaterMl > 0 ? '1' : '0';
  renderFlowLabels(args);
}

function renderSteps(args: RenderArgs): void {
  const { root, result, state, ui } = args;
  const weightUnit = state.unitSystem === 'imperial' ? ui.unitWeightImperial : ui.unitWeightMetric;
  const waterUnit = state.unitSystem === 'imperial' ? ui.unitWaterImperial : ui.unitWaterMetric;
  const steps = [
    ui.stepCoffee.replace('{coffee}', formatWeight(result.coffeeG, state.unitSystem)).replace('{coffeeUnit}', weightUnit),
    ui.stepWater.replace('{water}', formatVolume(result.brewWaterMl, state.unitSystem)).replace('{waterUnit}', waterUnit),
    ui.stepSteep.replace('{hours}', String(state.steepHours)),
  ];
  if (result.dilutionWaterMl > 0) steps.push(ui.stepDilute.replace('{water}', formatVolume(result.dilutionWaterMl, state.unitSystem)).replace('{waterUnit}', waterUnit));
  steps.push(ui.stepServe.replace('{yield}', formatVolume(result.servedYieldMl, state.unitSystem)).replace('{waterUnit}', waterUnit));
  const list = get<HTMLElement>(root, 'steps');
  if (list) list.innerHTML = steps.map((step, index) => `<li><span>${index + 1}</span><p>${step}</p></li>`).join('');
}

function renderEvaluation(args: RenderArgs): void {
  const { root, state, ui } = args;
  const evaluation = evaluateBrew(state);
  const status = get<HTMLElement>(root, 'steep-status');
  if (!status) return;
  status.className = `cold-brew-status cold-brew-status-${evaluation.steepStatus}`;
  const labels = { short: ui.steepStatusShort, balanced: ui.steepStatusBalanced, long: ui.steepStatusLong };
  status.textContent = labels[evaluation.steepStatus];
}

function renderUnits(args: RenderArgs): void {
  const { root, state, ui } = args;
  const waterUnit = state.unitSystem === 'imperial' ? ui.unitWaterImperial : ui.unitWaterMetric;
  setText(root, 'input-water-unit', waterUnit);
}

export function renderColdBrew(args: RenderArgs): void {
  const { root, result, state, ui } = args;
  const waterUnit = state.unitSystem === 'imperial' ? ui.unitWaterImperial : ui.unitWaterMetric;
  const weightUnit = state.unitSystem === 'imperial' ? ui.unitWeightImperial : ui.unitWeightMetric;
  setText(root, 'result-badge', state.mode === 'concentrate' ? ui.resultBadgeConcentrate : ui.resultBadgeReady);
  setText(root, 'coffee', `${formatWeight(result.coffeeG, state.unitSystem)} ${weightUnit}`);
  setText(root, 'brew-water', `${formatVolume(result.brewWaterMl, state.unitSystem)} ${waterUnit}`);
  setText(root, 'retained', `${formatVolume(result.retainedMl, state.unitSystem)} ${waterUnit}`);
  setText(root, 'dilution-water', `${formatVolume(result.dilutionWaterMl, state.unitSystem)} ${waterUnit}`);
  setText(root, 'served-yield', `${formatVolume(result.servedYieldMl, state.unitSystem)} ${waterUnit}`);
  setText(root, 'ratio-meta', `1:${formatRatio(result.ratio)}`);
  setText(root, 'dilution-meta', `1:${formatRatio(result.dilutionRatio)}`);
  setText(root, 'steep-meta', `${result.steepHours} ${ui.hoursUnit}`);
  setText(root, 'stage-caption', state.mode === 'concentrate' ? ui.stageCaptionConcentrate : ui.stageCaption);
  renderUnits(args);
  renderFlow(args);
  renderSteps(args);
  renderEvaluation(args);
}
