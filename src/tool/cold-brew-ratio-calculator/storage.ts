import type { ColdBrewState } from './logic';

const STORAGE_KEY = 'jjlmoya_cold_brew_ratio_calculator';

export function saveColdBrewState(state: ColdBrewState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function loadColdBrewState(): ColdBrewState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as ColdBrewState : null;
  } catch {
    return null;
  }
}
