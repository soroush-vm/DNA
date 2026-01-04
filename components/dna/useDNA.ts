"use client";

import { useMemo, useEffect } from "react";
import { MeaningController } from "./MeaningController";
import { DNAStateMachine } from "./stateMachine/fsm";
import { DNAController } from "./DNAController";

export function useDNA() {
  const meaning = useMemo(() => new MeaningController(), []);
  const fsm = useMemo(() => new DNAStateMachine(), []);
  const controller = useMemo(() => new DNAController(meaning), [meaning]);

  useEffect(() => {
    const off = fsm.onEnter(s => controller.onStateChange(s));
    return off;
  }, [fsm, controller]);

  return { meaning, fsm };
}
