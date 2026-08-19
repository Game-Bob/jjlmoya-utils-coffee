import type { ColdBrewState } from './logic';

export type SteepStatus = 'short' | 'balanced' | 'long';

export interface BrewEvaluation {
  steepStatus: SteepStatus;
  ratioStatus: 'ready' | 'concentrate';
}

export function evaluateBrew(state: ColdBrewState): BrewEvaluation {
  return {
    steepStatus: evaluateSteepTime(state.steepHours),
    ratioStatus: state.mode,
  };
}

export function evaluateSteepTime(hours: number): SteepStatus {
  if (hours < 10) return 'short';
  if (hours > 18) return 'long';
  return 'balanced';
}
