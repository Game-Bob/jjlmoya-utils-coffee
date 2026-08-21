import { DEFAULT_STATE, type EspressoState } from './logic';

const STORAGE_KEY = 'jjlmoya_espresso_extraction_calculator';

export function saveState(state: EspressoState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}

export function loadState(): EspressoState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return { ...DEFAULT_STATE, ...(JSON.parse(raw) as Partial<EspressoState>) };
  } catch {
    return null;
  }
}
