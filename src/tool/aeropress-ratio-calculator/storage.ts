export interface SavedAeropressState {
  doseGrams: number;
  ratio: number;
  model: 'original' | 'xl' | 'go';
  method: 'standard' | 'inverted';
  tempC: number;
  presetId: string;
  unitSystem: 'metric' | 'imperial';
}

const STORAGE_KEY = 'jjlmoya_aeropress_ratio_calculator';

export function saveState(state: SavedAeropressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    return;
  }
}

export function loadState(): SavedAeropressState | null {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as SavedAeropressState;
  } catch {
    return null;
  }
}
