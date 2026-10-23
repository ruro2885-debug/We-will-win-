/**
 * Tap Counter for Concealed Administrator Entry
 * Requirements:
 * - Responds to exactly 9 deliberate taps on the designated area
 * - Ignores accidental double-counting (touch + click duplicate events within 120ms)
 * - Resets on page reload or when navigated away
 * - Does NOT authenticate on its own, merely reveals the password entry boundary
 */

export interface TapCounterState {
  count: number;
  unlocked: boolean;
  lastTapTimestamp: number;
}

export class TapCounter {
  private targetTaps: number;
  private debounceMs: number;
  private state: TapCounterState;

  constructor(targetTaps: number = 9, debounceMs: number = 120) {
    this.targetTaps = targetTaps;
    this.debounceMs = debounceMs;
    this.state = {
      count: 0,
      unlocked: false,
      lastTapTimestamp: 0,
    };
  }

  public registerTap(now: number = Date.now()): { count: number; unlocked: boolean; didIncrement: boolean } {
    if (this.state.unlocked) {
      return { count: this.state.count, unlocked: true, didIncrement: false };
    }

    if (now - this.state.lastTapTimestamp < this.debounceMs) {
      // Ignored rapid duplicate event (e.g. touchstart followed immediately by mousedown/click)
      return { count: this.state.count, unlocked: false, didIncrement: false };
    }

    this.state.lastTapTimestamp = now;
    this.state.count += 1;

    if (this.state.count >= this.targetTaps) {
      this.state.unlocked = true;
    }

    return {
      count: this.state.count,
      unlocked: this.state.unlocked,
      didIncrement: true,
    };
  }

  public getCount(): number {
    return this.state.count;
  }

  public isUnlocked(): boolean {
    return this.state.unlocked;
  }

  public reset(): void {
    this.state = {
      count: 0,
      unlocked: false,
      lastTapTimestamp: 0,
    };
  }
}
