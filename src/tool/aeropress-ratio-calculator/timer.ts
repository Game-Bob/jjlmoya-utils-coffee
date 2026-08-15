import { updateTimerDisplay } from './dom-views';
import type { AeropressRatioCalculatorUI } from './ui';

export class AeropressTimerManager {
  private timerEl: HTMLElement | null;
  private ui: AeropressRatioCalculatorUI;
  private timerInterval: ReturnType<typeof setInterval> | null = null;
  private timerElapsedSec = 0;
  private timerActive = false;

  constructor(root: HTMLElement, ui: AeropressRatioCalculatorUI) {
    this.timerEl = root.querySelector<HTMLElement>('.aeropress-ratio-calculator-timer-box');
    this.ui = ui;
    this.bindButtons(root);
  }

  private bindButtons(root: HTMLElement): void {
    const startBtn = root.querySelector<HTMLButtonElement>('.aeropress-ratio-calculator-btn-timer-start');
    const resetBtn = root.querySelector<HTMLButtonElement>('.aeropress-ratio-calculator-btn-timer-reset');

    if (startBtn) {
      startBtn.addEventListener('click', () => this.toggle(startBtn));
    }
    if (resetBtn) {
      resetBtn.addEventListener('click', () => this.reset(startBtn));
    }
  }

  public toggle(startBtn: HTMLButtonElement | null): void {
    if (this.timerActive) {
      this.pause(startBtn);
    } else {
      this.start(startBtn);
    }
  }

  public start(startBtn: HTMLButtonElement | null): void {
    this.timerActive = true;
    if (startBtn) startBtn.textContent = this.ui.timerPause;
    this.timerInterval = setInterval(() => {
      this.timerElapsedSec += 1;
      this.tick();
    }, 1000);
  }

  public pause(startBtn: HTMLButtonElement | null): void {
    this.timerActive = false;
    if (startBtn) startBtn.textContent = this.ui.timerStart;
    if (this.timerInterval) clearInterval(this.timerInterval);
  }

  public reset(startBtn: HTMLButtonElement | null): void {
    this.pause(startBtn);
    this.timerElapsedSec = 0;
    if (this.timerEl) updateTimerDisplay(this.timerEl, this.ui.phaseBloom, 0);
  }

  private tick(): void {
    if (!this.timerEl) return;
    const phase = this.getPhase(this.timerElapsedSec);
    updateTimerDisplay(this.timerEl, phase, this.timerElapsedSec);
  }

  private getPhase(sec: number): string {
    if (sec < 30) return this.ui.phaseBloom;
    if (sec < 60) return this.ui.phasePour;
    if (sec < 120) return this.ui.phaseSteep;
    if (sec < 150) return this.ui.phasePress;
    return this.ui.phaseComplete;
  }
}
