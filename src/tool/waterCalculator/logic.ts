export interface WaterProfile {
  name: string;
  gh: number;
  kh: number;
  magnesiumRatio: number;
}

export const WATER_PROFILES: WaterProfile[] = [
  { name: 'SCA Ideal', gh: 68, kh: 40, magnesiumRatio: 1 },
  { name: 'Barista Hustle', gh: 80, kh: 40, magnesiumRatio: 1 },
  { name: 'Hendon (Hard)', gh: 150, kh: 40, magnesiumRatio: 0.5 },
  { name: 'Melbourne', gh: 25, kh: 15, magnesiumRatio: 0.7 },
  { name: 'Londres (Replica)', gh: 220, kh: 160, magnesiumRatio: 0.3 },
];

export const SALTS = {
  MAGNESIUM: { factor: 2.46, defaultConcentration: 2.46 },
  CALCIUM: { factor: 1.47, defaultConcentration: 1.47 },
  BUFFER: { factor: 1.68, defaultConcentration: 1.68 },
};

export function calculateConcentrateAmount(
  targetMgLCaCO3: number,
  targetLiters: number,
  stockConcentrationGPer100ml: number,
  saltFactor: number,
): number {
  if (stockConcentrationGPer100ml <= 0) return 0;
  const mgOfSaltNeeded = targetMgLCaCO3 * targetLiters * saltFactor;
  const mgPerMl = stockConcentrationGPer100ml * 10;
  return mgOfSaltNeeded / mgPerMl;
}

export function getCorrosionRisk(gh: number, kh: number): 'low' | 'medium' | 'high' {
  if (kh < 20 || gh < 20) return 'high';
  if (kh > 80 && gh > 150) return 'low';
  return 'medium';
}

export function getLimescaleRisk(gh: number, kh: number): 'low' | 'medium' | 'high' {
  if (gh > 120 || kh > 100) return 'high';
  if (gh > 70) return 'medium';
  return 'low';
}

export function fillTemplate(template: string, values: Record<string, string>): string {
  return template.replace(/\{(\w+)\}/g, (_, key: string) => values[key] ?? '');
}
