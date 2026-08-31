import type { GrinderRetentionState } from './logic';

const STORAGE_KEY = 'jjlmoya-coffee-grinder-retention';

export function loadRetentionState(): Partial<GrinderRetentionState> | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) as Partial<GrinderRetentionState> : null;
  } catch {
    return null;
  }
}

export function saveRetentionState(state: GrinderRetentionState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {}
}
