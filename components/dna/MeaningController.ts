export type MeaningPhase =
  | "idle"
  | "structural_exposure"
  | "replication"
  | "translation"
  | "complete";

type Listener = (phase: MeaningPhase) => void;

export class MeaningController {
  private phase: MeaningPhase = "idle";
  private listeners = new Set<Listener>();

  getPhase() {
    return this.phase;
  }

  setPhase(next: MeaningPhase) {
    if (this.phase === next) return;
    this.phase = next;
    this.listeners.forEach(fn => fn(next));
  }

  onChange(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }
}
