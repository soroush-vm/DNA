import { MeaningController } from "./MeaningController";
import { DNAState } from "./stateMachine/types";

export class DNAController {
  constructor(private meaning: MeaningController) {}

  onStateChange(state: DNAState) {
    this.meaning.setPhase(state.toLowerCase() as any);
  }
}
