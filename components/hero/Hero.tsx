"use client";

import { DNAViz } from "@/components/dna/DNAViz";

export function Hero() {
  return (
    <section
      className="
        relative
        h-screen
        bg-slate-950
        overflow-hidden
      "
    >
      <DNAViz />
    </section>
  );
}
