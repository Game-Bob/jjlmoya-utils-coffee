import type { GrinderRetentionCalculatorUI } from "./ui";
import type { GrinderRetentionResult, GrinderRetentionState } from "./logic";
import { formatCurrency, formatPercent, formatWeight } from "./logic";
import { evaluateRetention } from "./evaluator";

interface RenderArgs {
  root: HTMLElement;
  state: GrinderRetentionState;
  result: GrinderRetentionResult;
  ui: GrinderRetentionCalculatorUI;
}

function setText(root: HTMLElement, ref: string, value: string): void {
  root
    .querySelectorAll<HTMLElement>(`[data-ref="${ref}"]`)
    .forEach((element) => {
      element.textContent = value;
    });
}

function setWidth(root: HTMLElement, ref: string, value: number): void {
  const element = root.querySelector<HTMLElement>(`[data-ref="${ref}"]`);
  if (element) element.style.width = `${Math.max(0, Math.min(100, value))}%`;
}

function getUnit(
  state: GrinderRetentionState,
  ui: GrinderRetentionCalculatorUI,
): string {
  return state.unitSystem === "imperial"
    ? ui.unitWeightImperial
    : ui.unitWeightMetric;
}

function renderFlow(args: RenderArgs): void {
  const { root, result, state, ui } = args;
  const unit = getUnit(state, ui);
  const total = Math.max(result.chargeDoseG + result.purgeG, 1);
  setWidth(root, "flow-delivered", (result.deliveredDoseG / total) * 100);
  setWidth(root, "flow-retained", (result.retainedG / total) * 100);
  setWidth(root, "flow-purge", (result.purgeG / total) * 100);
  setText(
    root,
    "flow-loaded-label",
    `${formatWeight(result.chargeDoseG + result.purgeG, state.unitSystem)} ${unit}`,
  );
  setText(
    root,
    "flow-delivered-label",
    `${formatWeight(result.deliveredDoseG, state.unitSystem)} ${unit}`,
  );
  setText(
    root,
    "flow-retained-label",
    `${formatWeight(result.retainedG, state.unitSystem)} ${unit}`,
  );
  setText(
    root,
    "flow-purge-label",
    `${formatWeight(result.purgeG, state.unitSystem)} ${unit}`,
  );
}

function renderSteps(args: RenderArgs): void {
  const { root, result, state, ui } = args;
  const unit = getUnit(state, ui);
  const steps = [
    ui.stepMeasure
      .replace("{input}", formatWeight(result.trialInputG, state.unitSystem))
      .replace("{unit}", unit),
    ui.stepCompare
      .replace("{output}", formatWeight(result.trialOutputG, state.unitSystem))
      .replace("{unit}", unit),
    ui.stepLoad
      .replace("{charge}", formatWeight(result.chargeDoseG, state.unitSystem))
      .replace("{unit}", unit),
    ui.stepPurge
      .replace("{purge}", formatWeight(result.purgeG, state.unitSystem))
      .replace("{unit}", unit),
    ui.stepLog
      .replace(
        "{waste}",
        formatWeight(result.wastePerSessionG, state.unitSystem),
      )
      .replace("{unit}", unit),
  ];
  const list = root.querySelector<HTMLElement>('[data-ref="steps"]');
  if (list)
    list.innerHTML = steps
      .map((step, index) => `<li><span>${index + 1}</span><p>${step}</p></li>`)
      .join("");
}

function renderStatus(args: RenderArgs): void {
  const { root, result, ui } = args;
  const evaluation = evaluateRetention(result);
  const badge = root.querySelector<HTMLElement>('[data-ref="status"]');
  const labels = {
    low: ui.statusLow,
    moderate: ui.statusModerate,
    high: ui.statusHigh,
  };
  if (badge) {
    badge.className = `retention-status retention-status-${evaluation.status}`;
    badge.textContent = labels[evaluation.status];
  }
  root.classList.toggle("has-mismatch", evaluation.hasMismatch);
  setText(
    root,
    "mismatch-warning",
    evaluation.hasMismatch ? ui.mismatchWarning : "",
  );
}

function renderStats(args: RenderArgs): void {
  const { root, state, result, ui } = args;
  const unit = getUnit(state, ui);
  setText(root, "retention", `${formatPercent(result.retentionPercent)}%`);
  setText(root, "charge-dose", `${formatWeight(result.chargeDoseG, state.unitSystem)} ${unit}`);
  setText(root, "delivered-dose", `${formatWeight(result.deliveredDoseG, state.unitSystem)} ${unit}`);
  setText(root, "waste", `${formatWeight(result.wastePerSessionG, state.unitSystem)} ${unit}`);
  setText(root, "daily-waste", `${formatWeight(result.dailyWasteG, state.unitSystem)} ${unit}`);
  setText(root, "cost-session", formatCurrency(result.costPerSession, state.currency, root.dataset.locale ?? "en"));
  setText(root, "daily-cost", formatCurrency(result.dailyCost, state.currency, root.dataset.locale ?? "en"));
  setText(root, "sessions", String(result.sessionsPerDay));
}

export function renderRetention(args: RenderArgs): void {
  renderStats(args);
  renderFlow(args);
  renderSteps(args);
  renderStatus(args);
}
