import { describe, it, expect } from 'vitest';
import {
  calculateTotalWater,
  calculateUsableChamber,
  calculateWaterDistribution,
  calculateBeverageYield,
  calculateEstimatedTds,
  getStrengthCategory,
  calculateAeropress,
  gramsToOz,
  ozToGrams,
  mlToFlOz,
  flOzToMl,
  CHAMBER_CAPACITIES,
} from './logic';

describe('AeroPress Calculator Logic', () => {
  it('calculates total water accurately', () => {
    expect(calculateTotalWater(15, 16)).toBe(240);
    expect(calculateTotalWater(11, 18.18)).toBe(200);
    expect(calculateTotalWater(30, 6)).toBe(180);
  });

  it('calculates usable chamber capacity subtracting bed displacement', () => {
    const usableOriginal = calculateUsableChamber(CHAMBER_CAPACITIES.original, 15);
    expect(usableOriginal).toBe(230 - 17);
    const usableXl = calculateUsableChamber(CHAMBER_CAPACITIES.xl, 30);
    expect(usableXl).toBe(500 - 35);
  });

  it('handles standard brew without bypass', () => {
    const distribution = calculateWaterDistribution(200, 215);
    expect(distribution.chamberWater).toBe(200);
    expect(distribution.bypassWater).toBe(0);
  });

  it('calculates bypass water when water exceeds usable chamber capacity', () => {
    const distribution = calculateWaterDistribution(350, 210);
    expect(distribution.chamberWater).toBe(210);
    expect(distribution.bypassWater).toBe(140);
  });

  it('calculates beverage yield subtracting coffee grounds retention', () => {
    const yieldGrams = calculateBeverageYield(240, 15);
    expect(yieldGrams).toBe(240 - 29);
  });

  it('calculates estimated TDS percentage', () => {
    const tds = calculateEstimatedTds(15, 211);
    expect(tds).toBeGreaterThan(1.2);
    expect(tds).toBeLessThan(1.6);
  });

  it('categorizes coffee strength properly', () => {
    expect(getStrengthCategory(6)).toBe('concentrate');
    expect(getStrengthCategory(12)).toBe('strong');
    expect(getStrengthCategory(15)).toBe('medium');
    expect(getStrengthCategory(18)).toBe('light');
  });

  it('converts between metric and imperial units', () => {
    expect(gramsToOz(15)).toBe(0.53);
    expect(ozToGrams(0.53)).toBeCloseTo(15, 0);
    expect(mlToFlOz(240)).toBe(8.1);
    expect(flOzToMl(8.1)).toBeCloseTo(240, 0);
  });

  it('computes complete aeropress state for standard Hoffmann style', () => {
    const result = calculateAeropress({
      doseGrams: 11,
      ratio: 18.18,
      chamberCapacityMl: CHAMBER_CAPACITIES.original,
      method: 'standard',
    });

    expect(result.totalWaterGrams).toBe(200);
    expect(result.bypassWaterGrams).toBe(0);
    expect(result.hasBypass).toBe(false);
    expect(result.finalYieldGrams).toBe(179);
    expect(result.strengthCategory).toBe('light');
  });
});
