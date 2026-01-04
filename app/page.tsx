"use client";

import { useDNA } from "@/components/dna/useDNA";
import { useEffect, useState } from "react";

export default function Page() {
  const { fsm, meaning } = useDNA();
  const [phase, setPhase] = useState(meaning.getPhase());

  useEffect(() => meaning.onChange(setPhase), [meaning]);

  return (
    <main className="p-10 space-y-8">
      <h1 className="text-4xl font-bold">DNA Interactive Visualization</h1>

      <p className="text-gray-600 max-w-xl">
        این لندینگ پیج جایی است که اسکرول، حالت‌ها و انیمیشن‌های DNA را کنترل می‌کند.
      </p>

      <div className="p-4 border rounded">
        <strong>Current Phase:</strong> {phase}
      </div>

      <div className="space-x-2">
        <button onClick={() => fsm.emit("STRUCTURAL_EXPOSURE")}>Structure</button>
        <button onClick={() => fsm.emit("REPLICATION")}>Replication</button>
        <button onClick={() => fsm.emit("TRANSLATION")}>Translation</button>
        <button onClick={() => fsm.emit("COMPLETE")}>Complete</button>
      </div>

      <p className="text-sm text-gray-500">
        بعداً این دکمه‌ها با ScrollTrigger و انیمیشن همگام می‌شوند.
      </p>
    </main>
  );
}
