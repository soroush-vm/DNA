"use client";

type DNASVGProps = {
  width?: number;
  height?: number;
  segments?: number;
};

export function DNASVG({
  width = 1200,
  height = 200,
  segments = 48,
}: DNASVGProps) {
  const centerY = height / 2;
  const amplitude = 40;
  const step = width / segments;

  const points = Array.from({ length: segments }).map((_, i) => {
    const phase = i * 0.45;
    return {
      x: i * step,
      y1: centerY + Math.sin(phase) * amplitude,
      y2: centerY + Math.sin(phase + Math.PI) * amplitude,
    };
  });

  return (
    <svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
    >
      <defs>
        <linearGradient id="strandGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#7dd3fc" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="4" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Base pairs */}
      {points.map((p, i) => (
        <line
          key={i}
          x1={p.x}
          y1={p.y1}
          x2={p.x}
          y2={p.y2}
          stroke="rgba(125,211,252,0.5)"
          strokeWidth={1}
        />
      ))}

      {/* Strand A */}
      <path
        d={`M ${points.map(p => `${p.x},${p.y1}`).join(" L ")}`}
        stroke="url(#strandGradient)"
        strokeWidth={2}
        filter="url(#glow)"
      />

      {/* Strand B */}
      <path
        d={`M ${points.map(p => `${p.x},${p.y2}`).join(" L ")}`}
        stroke="url(#strandGradient)"
        strokeWidth={2}
        filter="url(#glow)"
      />
    </svg>
  );
}
