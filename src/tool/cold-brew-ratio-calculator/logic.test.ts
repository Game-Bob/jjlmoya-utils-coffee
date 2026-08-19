import { describe, expect, it } from 'vitest';
import {
  DEFAULT_COLD_BREW_STATE,
  GROUND_RETENTION_ML_PER_G,
  calculateColdBrew,
  formatRatio,
  formatVolume,
  formatWeight,
  parseVolume,
} from './logic';

describe('calculateColdBrew', () => {
  it('calculates a ready to drink batch from brew water', () => {
    const result = calculateColdBrew(DEFAULT_COLD_BREW_STATE);

    expect(result.coffeeG).toBe(125);
    expect(result.brewYieldMl).toBe(750);
    expect(result.dilutionWaterMl).toBe(0);
    expect(result.servedYieldMl).toBe(750);
  });

  it('calculates concentrate dilution separately from the brew ratio', () => {
    const result = calculateColdBrew({
      ...DEFAULT_COLD_BREW_STATE,
      mode: 'concentrate',
      ratio: 5,
      dilutionRatio: 1,
    });

    expect(result.coffeeG).toBe(200);
    expect(result.retainedMl).toBe(200 * GROUND_RETENTION_ML_PER_G);
    expect(result.brewYieldMl).toBe(600);
    expect(result.dilutionWaterMl).toBe(600);
    expect(result.servedYieldMl).toBe(1200);
  });

  it('ignores dilution in ready to drink mode', () => {
    const result = calculateColdBrew({ ...DEFAULT_COLD_BREW_STATE, dilutionRatio: 2 });

    expect(result.dilutionRatio).toBe(0);
    expect(result.dilutionWaterMl).toBe(0);
  });

  it('clamps invalid numeric inputs to safe ranges', () => {
    const result = calculateColdBrew({
      ...DEFAULT_COLD_BREW_STATE,
      brewWaterMl: Number.NaN,
      ratio: 99,
      dilutionRatio: -1,
      steepHours: 1,
    });

    expect(result.brewWaterMl).toBe(1000);
    expect(result.ratio).toBe(12);
    expect(result.dilutionRatio).toBe(0);
    expect(result.steepHours).toBe(8);
  });
});

describe('formatRatio', () => {
  it('keeps useful precision without trailing zeros', () => {
    expect(formatRatio(8)).toBe('8');
    expect(formatRatio(8.5)).toBe('8.5');
  });
});

describe('unit conversion', () => {
  it('converts display volume between metric and imperial units', () => {
    expect(formatVolume(1000, 'metric')).toBe('1000');
    expect(formatVolume(1000, 'imperial')).toBe('33.8');
    expect(parseVolume(33.8, 'imperial')).toBeCloseTo(1000, 0);
  });

  it('converts coffee mass to ounces for imperial recipes', () => {
    expect(formatWeight(125, 'metric')).toBe('125');
    expect(formatWeight(125, 'imperial')).toBe('4.4');
  });
});
