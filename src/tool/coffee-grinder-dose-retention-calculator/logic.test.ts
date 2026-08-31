import { describe, expect, it } from "vitest";
import {
  DEFAULT_STATE,
  calculateRetention,
  convertCurrencyAmount,
  formatCurrency,
  formatInputWeight,
  formatPercent,
  formatWeight,
  getCurrencyDefinition,
  getDefaultCurrencyForLocale,
  getPreset,
  parseWeight,
} from "./logic";

describe("coffee grinder dose retention logic", () => {
  it("calculates retained grounds, charge dose, waste, and cost", () => {
    const result = calculateRetention(DEFAULT_STATE);
    expect(result.retainedG).toBeCloseTo(0.5);
    expect(result.retentionPercent).toBeCloseTo(2.5);
    expect(result.chargeDoseG).toBeCloseTo(18.5);
    expect(result.deliveredDoseG).toBeCloseTo(18);
    expect(result.wastePerSessionG).toBeCloseTo(0.5);
    expect(result.dailyWasteG).toBeCloseTo(1);
    expect(result.costPerSession).toBeCloseTo(0.518);
    expect(result.dailyCost).toBeCloseTo(1.036);
  });

  it("flags impossible output readings without producing negative retention", () => {
    const result = calculateRetention({
      ...DEFAULT_STATE,
      trialInputG: 18,
      trialOutputG: 20,
    });
    expect(result.retainedG).toBe(0);
    expect(result.outputMismatch).toBe(true);
  });

  it("finds presets and formats display values", () => {
    expect(getPreset("espressoBar")?.purgeG).toBe(2);
    expect(formatWeight(28.3495, "imperial")).toBe("1.0");
    expect(formatInputWeight(60, "imperial")).toBe("2.12");
    expect(formatPercent(2.5)).toBe("2.5");
    expect(formatCurrency(1.036, "EUR", "es")).toBe("1,04 €");
    expect(parseWeight(1, "imperial")).toBeCloseTo(28.3495);
    expect(getDefaultCurrencyForLocale("ru")).toBe("RUB");
    expect(getCurrencyDefinition("RUB").eurRate).toBeGreaterThan(90);
    expect(convertCurrencyAmount(28, "EUR", "RUB")).toBeCloseTo(2815.9992);
    expect(convertCurrencyAmount(2815.9992, "RUB", "EUR")).toBeCloseTo(28);
  });
});
