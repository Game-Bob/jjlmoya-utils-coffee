export interface AeropressInputs {
  doseGrams: number;
  ratio: number;
  chamberCapacityMl: number;
  method: 'standard' | 'inverted';
}

export interface AeropressOutputs {
  totalWaterGrams: number;
  coffeeBedDisplacementMl: number;
  usableChamberMl: number;
  chamberWaterGrams: number;
  bypassWaterGrams: number;
  groundsAbsorptionGrams: number;
  finalYieldGrams: number;
  estimatedTdsPercent: number;
  chamberFillPercent: number;
  hasBypass: boolean;
  strengthCategory: 'concentrate' | 'strong' | 'medium' | 'light';
}

export const CHAMBER_CAPACITIES = {
  original: 230,
  xl: 500,
  go: 200,
} as const;

export function calculateTotalWater(doseGrams: number, ratio: number): number {
  const safeDose = Math.max(1, doseGrams);
  const safeRatio = Math.max(1, ratio);
  return Math.round(safeDose * safeRatio);
}

export function calculateUsableChamber(chamberCapacityMl: number, doseGrams: number): number {
  const safeCapacity = Math.max(50, chamberCapacityMl);
  const bedDisplacement = Math.round(Math.max(1, doseGrams) * 1.15);
  return Math.max(0, safeCapacity - bedDisplacement);
}

export function calculateWaterDistribution(totalWaterGrams: number, usableChamberMl: number): { chamberWater: number; bypassWater: number } {
  const chamberWater = Math.min(totalWaterGrams, usableChamberMl);
  const bypassWater = Math.max(0, totalWaterGrams - chamberWater);
  return { chamberWater, bypassWater };
}

export function calculateBeverageYield(totalWaterGrams: number, doseGrams: number): number {
  const absorption = Math.round(Math.max(1, doseGrams) * 1.95);
  return Math.max(0, totalWaterGrams - absorption);
}

export function calculateEstimatedTds(doseGrams: number, finalYieldGrams: number): number {
  if (finalYieldGrams <= 0) return 0;
  const dissolvedSolids = Math.max(1, doseGrams) * 0.19;
  const tds = (dissolvedSolids / finalYieldGrams) * 100;
  return Number(Math.min(15, Math.max(0.1, tds)).toFixed(2));
}

export function getStrengthCategory(ratio: number): 'concentrate' | 'strong' | 'medium' | 'light' {
  if (ratio < 9) return 'concentrate';
  if (ratio < 14) return 'strong';
  if (ratio <= 16.5) return 'medium';
  return 'light';
}

export function gramsToOz(grams: number): number {
  return Number((grams * 0.035274).toFixed(2));
}

export function ozToGrams(oz: number): number {
  return Number((oz / 0.035274).toFixed(1));
}

export function mlToFlOz(ml: number): number {
  return Number((ml * 0.033814).toFixed(1));
}

export function flOzToMl(flOz: number): number {
  return Math.round(flOz / 0.033814);
}

export function calculateAeropress(inputs: AeropressInputs): AeropressOutputs {
  const totalWaterGrams = calculateTotalWater(inputs.doseGrams, inputs.ratio);
  const usableChamberMl = calculateUsableChamber(inputs.chamberCapacityMl, inputs.doseGrams);
  const coffeeBedDisplacementMl = Math.round(inputs.doseGrams * 1.15);
  const { chamberWater, bypassWater } = calculateWaterDistribution(totalWaterGrams, usableChamberMl);
  const finalYieldGrams = calculateBeverageYield(totalWaterGrams, inputs.doseGrams);
  const estimatedTdsPercent = calculateEstimatedTds(inputs.doseGrams, finalYieldGrams);
  const totalInChamber = chamberWater + coffeeBedDisplacementMl;
  const chamberFillPercent = Math.min(100, Math.round((totalInChamber / inputs.chamberCapacityMl) * 100));

  return {
    totalWaterGrams,
    coffeeBedDisplacementMl,
    usableChamberMl,
    chamberWaterGrams: chamberWater,
    bypassWaterGrams: bypassWater,
    groundsAbsorptionGrams: Math.round(inputs.doseGrams * 1.95),
    finalYieldGrams,
    estimatedTdsPercent,
    chamberFillPercent,
    hasBypass: bypassWater > 0,
    strengthCategory: getStrengthCategory(inputs.ratio),
  };
}
