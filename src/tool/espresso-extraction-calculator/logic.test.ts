import { describe, expect, it } from 'vitest';
import {
  PRESETS,
  calculateEspresso,
  classifyShotStyle,
  classifyTimePace,
  classifyYieldBand,
  clamp,
  computeBrewRatio,
  computeContactTime,
  computeCremaPercent,
  computeExtractionYield,
  computeClassicDelta,
  computeFillPercent,
  computeFlowRate,
  computeTargetYield,
  nearestRatioTarget,
  ratioMarkY,
  yieldToGlassY,
  formatBrewRatio,
  getPreset,
  gramsToOz,
  isClassicWindow,
  ozToGrams,
  sanitizeInputs,
} from './logic';

describe('espresso extraction math', () => {
  it('clamps values into safe ranges', () => {
    expect(clamp(3, 7, 25)).toBe(7);
    expect(clamp(40, 7, 25)).toBe(25);
    expect(clamp(18, 7, 25)).toBe(18);
  });

  it('converts grams and ounces', () => {
    expect(gramsToOz(28.35)).toBe(1);
    expect(ozToGrams(1)).toBe(28.3);
  });

  it('computes brew ratio from beverage mass and dose', () => {
    expect(computeBrewRatio(18, 36)).toBe(2);
    expect(formatBrewRatio(2)).toBe('1:2.00');
  });

  it('classifies ristretto normale and lungo styles', () => {
    expect(classifyShotStyle(1.1)).toBe('ristretto');
    expect(classifyShotStyle(2)).toBe('normale');
    expect(classifyShotStyle(3)).toBe('lungo');
  });

  it('subtracts preinfusion from total shot time', () => {
    expect(computeContactTime(28, 6)).toBe(22);
    expect(computeContactTime(10, 12)).toBe(0);
  });

  it('computes flow rate in grams per second', () => {
    expect(computeFlowRate(36, 28)).toBe(1.29);
    expect(computeFlowRate(36, 0)).toBe(0);
  });

  it('computes extraction yield only when TDS is provided', () => {
    expect(computeExtractionYield({
      doseGrams: 18,
      yieldGrams: 36,
      timeSeconds: 28,
      preinfusionSeconds: 0,
      tdsPercent: 0,
    })).toBeNull();
    expect(computeExtractionYield({
      doseGrams: 18,
      yieldGrams: 36,
      timeSeconds: 28,
      preinfusionSeconds: 0,
      tdsPercent: 10,
    })).toBe(20);
  });

  it('classifies extraction yield bands', () => {
    expect(classifyYieldBand(null)).toBe('unmeasured');
    expect(classifyYieldBand(16)).toBe('low');
    expect(classifyYieldBand(20)).toBe('target');
    expect(classifyYieldBand(24)).toBe('high');
  });

  it('classifies shot pace from contact time', () => {
    expect(classifyTimePace(15)).toBe('fast');
    expect(classifyTimePace(28)).toBe('typical');
    expect(classifyTimePace(40)).toBe('slow');
  });

  it('maps fill crema and extraction coordinates', () => {
    expect(computeFillPercent(36)).toBe(60);
    expect(computeCremaPercent(2)).toBe(18);
  });

  it('places ratio marks higher as the beverage mass grows', () => {
    const one = ratioMarkY(18, 1);
    const two = ratioMarkY(18, 2);
    const three = ratioMarkY(18, 3);
    expect(one).toBeGreaterThan(two);
    expect(two).toBeGreaterThan(three);
    expect(yieldToGlassY(36, 18)).toBe(two);
  });

  it('measures grams off the 1:2 line and snaps ratio chips', () => {
    expect(computeClassicDelta(18, 36)).toBe(0);
    expect(computeClassicDelta(18, 20)).toBe(-16);
    expect(nearestRatioTarget(2)).toBe('2');
    expect(nearestRatioTarget(2.8)).toBe('3');
    expect(nearestRatioTarget(1.7)).toBe('');
  });

  it('marks a classic 1:2 shot in the planning window', () => {
    expect(isClassicWindow(2, 28)).toBe(true);
    expect(isClassicWindow(1.2, 15)).toBe(false);
  });

  it('computes a target beverage mass from dose and ratio', () => {
    expect(computeTargetYield(18, 2)).toBe(36);
    expect(computeTargetYield(18, 8)).toBe(70);
  });

  it('returns named presets and ignores custom', () => {
    expect(getPreset('classic')).toEqual(PRESETS.classic);
    expect(getPreset('custom')).toBeNull();
  });

  it('sanitizes empty numbers to minimum bounds', () => {
    const clean = sanitizeInputs({
      doseGrams: 0,
      yieldGrams: 0,
      timeSeconds: 0,
      preinfusionSeconds: -2,
      tdsPercent: 40,
    });
    expect(clean.doseGrams).toBe(7);
    expect(clean.yieldGrams).toBe(8);
    expect(clean.timeSeconds).toBe(8);
    expect(clean.preinfusionSeconds).toBe(0);
    expect(clean.tdsPercent).toBe(16);
  });

  it('calculates a complete classic double shot', () => {
    const result = calculateEspresso(PRESETS.classic);
    expect(result.ratioText).toBe('1:2.00');
    expect(result.shotStyle).toBe('normale');
    expect(result.timePace).toBe('typical');
    expect(result.inClassicWindow).toBe(true);
    expect(result.yieldBand).toBe('unmeasured');
    expect(result.flowRateGramsPerSec).toBe(1.29);
  });

  it('calculates extraction yield for a measured shot', () => {
    const result = calculateEspresso({ ...PRESETS.classic, tdsPercent: 9.5 });
    expect(result.extractionYieldPercent).toBe(19);
    expect(result.yieldBand).toBe('target');
  });
});
