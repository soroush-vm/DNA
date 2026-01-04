"use client";

import { useEffect, useRef, useState } from "react";
import { DNAViz } from "@/components/dna/DNAViz";

export function Hero() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const height = rect.height;

      const scrolled = Math.min(Math.max(-rect.top, 0), height);
      setProgress(scrolled / height);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-[200vh] bg-black overflow-hidden"
    >
      {/* DNA */}
      <DNAViz progress={progress} />

      {/* Content */}
      <div className="sticky top-0 h-screen flex flex-col items-center justify-center text-white text-center px-6 z-10">
        <h1 className="text-5xl md:text-6xl font-bold tracking-tight">
          TRANSMUTE YOUR MARKETING DNA
        </h1>

        <p className="mt-4 text-lg text-gray-300 max-w-xl">
          Evolve from intuition to scientific precision.
        </p>

        <button className="mt-8 px-6 py-3 rounded-full border border-blue-400 text-blue-300 hover:bg-blue-500 hover:text-white transition">
          DISCOVER THE SCIENCE
        </button>
      </div>
    </section>
  );
}
