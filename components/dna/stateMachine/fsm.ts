import { DNAState } from "./types";

type Listener = (state: DNAState) => void;

export class DNAStateMachine {
  private listeners = new Set<Listener>();
  private current: DNAState = "IDLE";

  onEnter(fn: Listener) {
    this.listeners.add(fn);
    return () => this.listeners.delete(fn);
  }

  emit(state: DNAState) {
    this.current = state;
    this.listeners.forEach(l => l(state));
  }

  getState() {
    return this.current;
  }
}
