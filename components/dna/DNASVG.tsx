"use client";

type DNASVGProps = {
  width?: number;
  height?: number;
  segments?: number;
};

export function DNASVG({
  width = 1600,
  height = 260,
  segments = 56,
}: DNASVGProps) {
  const centerY = height / 2;
  const amplitude = 55;
  const step = width / segments;

  const points = Array.from({ length: segments }).map((_, i) => {
    const phase = i * 0.45;
    return {
      x: i * step,
      y1: centerY + Math.sin(phase) * amplitude,
      y2: centerY + Math.sin(phase + Math.PI) * amplitude,
      axisY: centerY, // محور ثابت
    };
  });

  return (
    <svg
      viewBox={`0 0 ${width} ${height}`}
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <defs>
        <linearGradient id="strandGradient" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="50%" stopColor="#7dd3fc" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>

        <filter id="glow">
          <feGaussianBlur stdDeviation="6" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
      </defs>

      {/* Central axis (invisible but structural) */}
      <path
        d={`M ${points.map(p => `${p.x},${p.axisY}`).join(" L ")}`}
        stroke="transparent"
        fill="none"
      />

      {/* Base connections + dots */}
      {points.map((p, i) => (
        <g key={i}>
          {/* Curved connectors */}
          <path
            d={`M ${p.x},${p.y1} Q ${p.x},${p.axisY} ${p.x},${p.y2}`}
            stroke="rgba(125,211,252,0.3)"
            strokeWidth={1}
            fill="none"
          />

          {/* Dots ON the axis */}
          <circle cx={p.x} cy={p.axisY} r={2.2} fill="#7dd3fc" filter="url(#glow)" />
          <circle cx={p.x - 6} cy={p.axisY} r={1.2} fill="#38bdf8" />
          <circle cx={p.x + 6} cy={p.axisY} r={1.2} fill="#38bdf8" />
        </g>
      ))}

      {/* Strand A */}
      <path
        d={`M ${points.map(p => `${p.x},${p.y1}`).join(" L ")}`}
        stroke="url(#strandGradient)"
        strokeWidth={2.4}
        fill="none"
        filter="url(#glow)"
      />

      {/* Strand B */}
      <path
        d={`M ${points.map(p => `${p.x},${p.y2}`).join(" L ")}`}
        stroke="url(#strandGradient)"
        strokeWidth={2.4}
        fill="none"
        filter="url(#glow)"
      />
    </svg>
  );
}
