export interface TimerConfig {
  waterTotal: number;
  bloomWater: number;
  bloomSeconds: number;
  totalSeconds: number;
}

export const DEFAULT_CONFIG: TimerConfig = {
  waterTotal: 300,
  bloomWater: 60,
  bloomSeconds: 30,
  totalSeconds: 180,
};

export const BEEP_WARN_SECONDS = 3;

export type TimerPhase = 'bloom' | 'pour' | 'drain';

export interface PhaseResult {
  phase: TimerPhase;
  progress: number;
}

export function formatTime(elapsed: number): string {
  const minutes = Math.floor(elapsed / 60);
  const seconds = Math.floor(elapsed % 60);
  return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

export function computePhase(elapsed: number, cfg: TimerConfig): PhaseResult {
  if (elapsed <= cfg.bloomSeconds) {
    return { phase: 'bloom', progress: (elapsed / cfg.bloomSeconds) * 100 };
  }
  const pourEnd = cfg.totalSeconds * 0.7;
  if (elapsed <= pourEnd) {
    const pourElapsed = elapsed - cfg.bloomSeconds;
    const pourDuration = pourEnd - cfg.bloomSeconds;
    return { phase: 'pour', progress: (pourElapsed / pourDuration) * 100 };
  }
  const drainElapsed = elapsed - cfg.totalSeconds * 0.7;
  const drainDuration = cfg.totalSeconds - cfg.totalSeconds * 0.7;
  return { phase: 'drain', progress: (drainElapsed / drainDuration) * 100 };
}

export function fillTemplate(template: string, vars: Record<string, string | number>): string {
  return template.replace(/\{(\w+)\}/g, (_, key) => String(vars[key] ?? ''));
}
