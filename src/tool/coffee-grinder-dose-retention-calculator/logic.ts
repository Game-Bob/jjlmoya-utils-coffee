import type { KnownLocale } from "../../types";

export type UnitSystem = "metric" | "imperial";
export type CurrencyId = "AUD" | "BRL" | "CAD" | "CHF" | "CNY" | "DKK" | "EUR" | "GBP" | "IDR" | "INR" | "JPY" | "KRW" | "NOK" | "PLN" | "RUB" | "SEK" | "TRY" | "USD";
export type PresetId = "singleDose" | "espressoBar" | "zeroPurge" | "custom";

export interface CurrencyDefinition {
  id: CurrencyId;
  symbol: string;
  eurRate: number;
}

export const CURRENCY_OPTIONS: CurrencyDefinition[] = [
  { id: "EUR", symbol: "€", eurRate: 1 },
  { id: "USD", symbol: "$", eurRate: 1.1643 },
  { id: "GBP", symbol: "£", eurRate: 0.8572 },
  { id: "RUB", symbol: "₽", eurRate: 100.5714 },
  { id: "JPY", symbol: "¥", eurRate: 185.92 },
  { id: "CNY", symbol: "¥", eurRate: 7.8251 },
  { id: "PLN", symbol: "zł", eurRate: 4.3365 },
  { id: "SEK", symbol: "kr", eurRate: 11.0885 },
  { id: "NOK", symbol: "kr", eurRate: 10.8595 },
  { id: "DKK", symbol: "kr", eurRate: 7.4748 },
  { id: "CHF", symbol: "CHF", eurRate: 0.9364 },
  { id: "TRY", symbol: "₺", eurRate: 56.1718 },
  { id: "AUD", symbol: "A$", eurRate: 1.6183 },
  { id: "CAD", symbol: "CA$", eurRate: 1.613 },
  { id: "BRL", symbol: "R$", eurRate: 6.0126 },
  { id: "IDR", symbol: "Rp", eurRate: 20628.08 },
  { id: "INR", symbol: "₹", eurRate: 111.0585 },
  { id: "KRW", symbol: "₩", eurRate: 1600.39 },
];

const DEFAULT_CURRENCY_BY_LOCALE: Record<KnownLocale, CurrencyId> = { ar: "USD", da: "DKK", de: "EUR", en: "USD", es: "EUR", fi: "EUR", fr: "EUR", id: "IDR", it: "EUR", ja: "JPY", ko: "KRW", nb: "NOK", nl: "EUR", pl: "PLN", pt: "EUR", ru: "RUB", sv: "SEK", tr: "TRY", zh: "CNY" };

export interface GrinderRetentionState {
  presetId: PresetId;
  unitSystem: UnitSystem;
  currency: CurrencyId;
  targetDoseG: number;
  trialInputG: number;
  trialOutputG: number;
  purgeG: number;
  sessionsPerDay: number;
  costPerKg: number;
}

export interface GrinderRetentionResult {
  targetDoseG: number;
  trialInputG: number;
  trialOutputG: number;
  retainedG: number;
  retentionPercent: number;
  chargeDoseG: number;
  deliveredDoseG: number;
  purgeG: number;
  wastePerSessionG: number;
  sessionsPerDay: number;
  dailyChargedG: number;
  dailyWasteG: number;
  costPerSession: number;
  dailyCost: number;
  outputMismatch: boolean;
}

export interface GrinderRetentionPreset {
  id: PresetId;
  targetDoseG: number;
  trialInputG: number;
  trialOutputG: number;
  purgeG: number;
  sessionsPerDay: number;
  costPerKg: number;
}

export const DEFAULT_STATE: GrinderRetentionState = {
  presetId: "singleDose",
  unitSystem: "metric",
  currency: "EUR",
  targetDoseG: 18,
  trialInputG: 20,
  trialOutputG: 19.5,
  purgeG: 0,
  sessionsPerDay: 2,
  costPerKg: 28,
};

export const PRESETS: GrinderRetentionPreset[] = [
  {
    id: "singleDose",
    targetDoseG: 18,
    trialInputG: 20,
    trialOutputG: 19.5,
    purgeG: 0,
    sessionsPerDay: 2,
    costPerKg: 28,
  },
  {
    id: "espressoBar",
    targetDoseG: 18,
    trialInputG: 20,
    trialOutputG: 19,
    purgeG: 2,
    sessionsPerDay: 20,
    costPerKg: 32,
  },
  {
    id: "zeroPurge",
    targetDoseG: 15,
    trialInputG: 15,
    trialOutputG: 14.9,
    purgeG: 0,
    sessionsPerDay: 1,
    costPerKg: 24,
  },
];

export const G_PER_OZ = 28.3495;

export function getCurrencyDefinition(currency: CurrencyId): CurrencyDefinition { return CURRENCY_OPTIONS.find((option) => option.id === currency) ?? CURRENCY_OPTIONS[0]!; }

export function getDefaultCurrencyForLocale(locale: string): CurrencyId {
  return DEFAULT_CURRENCY_BY_LOCALE[locale as KnownLocale] ?? "EUR";
}

export function isCurrencyId(value: unknown): value is CurrencyId { return typeof value === "string" && CURRENCY_OPTIONS.some((option) => option.id === value); }

export function getCostRange(currency: CurrencyId): [number, number] {
  return [0, 200 * getCurrencyDefinition(currency).eurRate];
}

export function convertCurrencyAmount(value: number, from: CurrencyId, to: CurrencyId): number {
  return (value / getCurrencyDefinition(from).eurRate) * getCurrencyDefinition(to).eurRate;
}

export function formatCurrency(value: number, currency: CurrencyId, locale: string): string { return new Intl.NumberFormat(locale, { style: "currency", currency, currencyDisplay: "symbol", maximumFractionDigits: 2 }).format(value); }

export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

function finite(value: number, fallback: number): number {
  return Number.isFinite(value) ? value : fallback;
}

function normalizeState(state: GrinderRetentionState): GrinderRetentionState {
  const [, costMax] = getCostRange(state.currency);
  return {
    ...state,
    targetDoseG: clamp(finite(state.targetDoseG, DEFAULT_STATE.targetDoseG), 5, 60),
    trialInputG: clamp(finite(state.trialInputG, DEFAULT_STATE.trialInputG), 5, 100),
    trialOutputG: clamp(finite(state.trialOutputG, DEFAULT_STATE.trialOutputG), 0, 100),
    purgeG: clamp(finite(state.purgeG, DEFAULT_STATE.purgeG), 0, 20),
    sessionsPerDay: clamp(finite(state.sessionsPerDay, DEFAULT_STATE.sessionsPerDay), 1, 80),
    costPerKg: clamp(finite(state.costPerKg, DEFAULT_STATE.costPerKg), 0, costMax),
  };
}

export function getPreset(id: PresetId): GrinderRetentionPreset | undefined {
  return PRESETS.find((preset) => preset.id === id);
}

export function calculateRetention(state: GrinderRetentionState): GrinderRetentionResult {
  const normalized = normalizeState(state);
  const retainedG = Math.max(normalized.trialInputG - normalized.trialOutputG, 0);
  const retentionPercent = normalized.trialInputG > 0 ? (retainedG / normalized.trialInputG) * 100 : 0;
  const chargeDoseG = normalized.targetDoseG + retainedG;
  const deliveredDoseG = Math.max(chargeDoseG - retainedG, 0);
  const wastePerSessionG = retainedG + normalized.purgeG;
  const dailyChargedG = (chargeDoseG + normalized.purgeG) * normalized.sessionsPerDay;
  const dailyWasteG = wastePerSessionG * normalized.sessionsPerDay;
  const costPerGram = normalized.costPerKg / 1000;
  return {
    targetDoseG: normalized.targetDoseG,
    trialInputG: normalized.trialInputG,
    trialOutputG: normalized.trialOutputG,
    retainedG,
    retentionPercent,
    chargeDoseG,
    deliveredDoseG,
    purgeG: normalized.purgeG,
    wastePerSessionG,
    sessionsPerDay: normalized.sessionsPerDay,
    dailyChargedG,
    dailyWasteG,
    costPerSession: (chargeDoseG + normalized.purgeG) * costPerGram,
    dailyCost: dailyChargedG * costPerGram,
    outputMismatch: normalized.trialOutputG > normalized.trialInputG,
  };
}

export function formatWeight(value: number, unitSystem: UnitSystem): string {
  const display = unitSystem === "imperial" ? value / G_PER_OZ : value;
  return display < 10 ? display.toFixed(1) : String(Math.round(display));
}

export function formatInputWeight(value: number, unitSystem: UnitSystem): string {
  const display = unitSystem === "imperial" ? value / G_PER_OZ : value;
  return display.toFixed(unitSystem === "imperial" ? 2 : 1);
}

export function formatPercent(value: number): string {
  return value < 10 ? value.toFixed(1) : String(Math.round(value));
}

export function parseWeight(value: number, unitSystem: UnitSystem): number {
  return unitSystem === "imperial" ? value * G_PER_OZ : value;
}
