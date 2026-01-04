"use client";

import { useEffect, useRef } from "react";
import { DNASVG } from "./DNASVG";

type DNAVizProps = {
  progress: number; // 0 → 1
};

export function DNAViz({ progress }: DNAVizProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;

    const rotation = progress * 90;
    const scale = 1 + progress * 0.15;

    ref.current.style.transform = `
      translate(-50%, -50%)
      rotate(${rotation}deg)
      scale(${scale})
    `;
  }, [progress]);

  return (
    <div
      ref={ref}
      className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        origin-center
        will-change-transform
      "
    >
      <DNASVG />
    </div>
  );
}
