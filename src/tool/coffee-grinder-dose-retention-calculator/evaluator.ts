import type { GrinderRetentionResult } from './logic';

export type RetentionStatus = 'low' | 'moderate' | 'high';

export interface RetentionEvaluation {
  status: RetentionStatus;
  hasMismatch: boolean;
}

export function evaluateRetention(result: GrinderRetentionResult): RetentionEvaluation {
  let status: RetentionStatus = 'high';
  if (result.retentionPercent <= 1) status = 'low';
  else if (result.retentionPercent <= 2.5) status = 'moderate';
  return { status, hasMismatch: result.outputMismatch };
}
