/** Hand-drawn SVG motifs: systems, tokens, and model behaviour. */

export function SystemsGlyph({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 240" fill="none" className={className} aria-hidden="true">
      <circle cx="120" cy="120" r="86" stroke="currentColor" strokeOpacity="0.18" />
      <circle cx="120" cy="120" r="56" stroke="currentColor" strokeOpacity="0.28" />
      <circle cx="120" cy="120" r="26" stroke="currentColor" strokeOpacity="0.4" />
      {[0, 60, 120, 180, 240, 300].map((deg) => {
        const r = (deg * Math.PI) / 180;
        const at = (rad: number) => (120 + rad).toFixed(2);
        return (
          <g key={deg}>
            <line
              x1={at(Math.cos(r) * 26)}
              y1={at(Math.sin(r) * 26)}
              x2={at(Math.cos(r) * 86)}
              y2={at(Math.sin(r) * 86)}
              stroke="currentColor"
              strokeOpacity="0.25"
            />
            <circle
              cx={at(Math.cos(r) * 86)}
              cy={at(Math.sin(r) * 86)}
              r="5"
              fill="currentColor"
              fillOpacity="0.75"
            />
          </g>
        );
      })}

      <circle cx="120" cy="120" r="7" fill="currentColor" />
    </svg>
  );
}

export function TokenStack({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 240 160" fill="none" className={className} aria-hidden="true">
      {[0, 1, 2, 3].map((i) => (
        <g key={i} transform={`translate(${i * 14} ${i * 26})`}>
          <rect
            x="20"
            y="14"
            width="150"
            height="46"
            rx="10"
            stroke="currentColor"
            strokeOpacity={0.45 - i * 0.08}
          />
          <circle cx="42" cy="37" r="8" fill="currentColor" fillOpacity={0.7 - i * 0.14} />
          <rect
            x="60"
            y="31"
            width={80 - i * 12}
            height="6"
            rx="3"
            fill="currentColor"
            fillOpacity={0.3 - i * 0.05}
          />
        </g>
      ))}
    </svg>
  );
}

export function ModelFlow({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 260 160" fill="none" className={className} aria-hidden="true">
      {[30, 70, 110].map((y) => (
        <circle key={y} cx="28" cy={y} r="6" fill="currentColor" fillOpacity="0.6" />
      ))}
      {[50, 90].map((y) => (
        <circle key={y} cx="130" cy={y} r="9" stroke="currentColor" strokeOpacity="0.5" />
      ))}
      <circle cx="230" cy="70" r="12" stroke="currentColor" strokeOpacity="0.7" />
      {[30, 70, 110].map((y) =>
        [50, 90].map((y2) => (
          <path
            key={`${y}-${y2}`}
            d={`M34 ${y} C 80 ${y}, 84 ${y2}, 121 ${y2}`}
            stroke="currentColor"
            strokeOpacity="0.22"
          />
        )),
      )}
      {[50, 90].map((y) => (
        <path
          key={y}
          d={`M139 ${y} C 180 ${y}, 190 70, 218 70`}
          stroke="currentColor"
          strokeOpacity="0.35"
        />
      ))}
      <circle cx="230" cy="70" r="4" fill="currentColor" />
    </svg>
  );
}

export function WaveField({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 600 200" fill="none" className={className} aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <path
          key={i}
          d={`M0 ${40 + i * 12} C 150 ${10 + i * 14}, 320 ${170 - i * 8}, 600 ${60 + i * 10}`}
          stroke="currentColor"
          strokeOpacity={0.06 + i * 0.02}
        />
      ))}
    </svg>
  );
}
