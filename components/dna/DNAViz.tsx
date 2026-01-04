"use client";

import { DNASVG } from "./DNASVG";

export function DNAViz() {
  return (
    <div className="absolute inset-0 flex items-center pointer-events-none">
      <div className="w-full h-[260px]">
        <DNASVG />
      </div>
    </div>
  );
}
