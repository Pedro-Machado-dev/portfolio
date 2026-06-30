function CircuitBackground() {
  const traces = [
    { d: 'M560 70 H860', points: ['560,70', '860,70'] },
    { d: 'M520 120 V250 H800', points: ['520,120', '520,250', '800,250'] },
    { d: 'M360 210 H620 V110 H870', points: ['360,210', '620,210', '620,110', '870,110'] },
    { d: 'M650 320 H900', points: ['650,320', '900,320'] },
    { d: 'M470 430 V610 H760', points: ['470,430', '470,610', '760,610'] },
    { d: 'M700 390 V560 H950', points: ['700,390', '700,560', '950,560'] },
    { d: 'M300 520 H520 V680 H820', points: ['300,520', '520,520', '520,680', '820,680'] },
    { d: 'M180 90 H430 V260', points: ['180,90', '430,90', '430,260'] },
    { d: 'M120 690 H440', points: ['120,690', '440,690'] },
    { d: 'M760 150 H1020', points: ['760,150', '1020,150'] },
    { d: 'M840 80 V180', points: ['840,80', '840,180'] },
  ]

  const pulsePaths = [
    { path: 'M560 70 H860', dur: '7s', begin: '0s' },
    { path: 'M360 210 H620 V110 H870', dur: '9s', begin: '1.2s' },
    { path: 'M470 430 V610 H760', dur: '8s', begin: '2.1s' },
    { path: 'M300 520 H520 V680 H820', dur: '10s', begin: '0.8s' },
  ]

  return (
    <svg
      className="circuit-bg"
      viewBox="0 0 1100 760"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="circuitGlow" cx="72%" cy="28%" r="48%">
          <stop offset="0%" stopColor="rgba(139,92,246,0.30)" />
          <stop offset="45%" stopColor="rgba(91,33,182,0.16)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        <radialGradient id="circuitGlow2" cx="38%" cy="88%" r="36%">
          <stop offset="0%" stopColor="rgba(124,58,237,0.14)" />
          <stop offset="100%" stopColor="rgba(0,0,0,0)" />
        </radialGradient>

        <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feMerge>
            <feMergeNode in="blur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>

        <pattern id="pcbGrid" width="44" height="44" patternUnits="userSpaceOnUse">
          <path
            d="M44 0 H0 V44"
            fill="none"
            stroke="rgba(255,255,255,0.035)"
            strokeWidth="1"
          />
        </pattern>
      </defs>

      {/* atmosfera */}
      <rect width="1100" height="760" fill="url(#pcbGrid)" opacity="0.28" />
      <rect width="1100" height="760" fill="url(#circuitGlow)" />
      <rect width="1100" height="760" fill="url(#circuitGlow2)" />

      {/* trilhas mais fracas */}
      <g className="circuit-layer circuit-layer-base">
        {traces.map((trace, index) => (
          <path
            key={`base-${index}`}
            d={trace.d}
            fill="none"
            stroke="rgba(203, 213, 225, 0.14)"
            strokeWidth={index % 3 === 0 ? 1.5 : 1.1}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* glow */}
      <g className="circuit-layer circuit-layer-glow" filter="url(#softGlow)">
        {traces.slice(0, 7).map((trace, index) => (
          <path
            key={`glow-${index}`}
            d={trace.d}
            fill="none"
            stroke="rgba(167, 139, 250, 0.15)"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
      </g>

      {/* vias / pads */}
      <g className="circuit-vias">
        {traces.flatMap((trace, traceIndex) =>
          trace.points.map((point, pointIndex) => {
            const [cx, cy] = point.split(',').map(Number)
            const large = (traceIndex + pointIndex) % 4 === 0

            return (
              <circle
                key={`via-${traceIndex}-${pointIndex}`}
                cx={cx}
                cy={cy}
                r={large ? 5.5 : 4}
                fill={large ? 'rgba(203,213,225,0.22)' : 'rgba(203,213,225,0.16)'}
                stroke="rgba(255,255,255,0.04)"
                strokeWidth="1"
              >
                <animate
                  attributeName="opacity"
                  values="0.55;0.95;0.55"
                  dur={`${4 + ((traceIndex + pointIndex) % 3)}s`}
                  begin={`${(traceIndex + pointIndex) * 0.35}s`}
                  repeatCount="indefinite"
                />
              </circle>
            )
          }),
        )}
      </g>

      {/* pulsos */}
      <g className="circuit-pulses" filter="url(#softGlow)">
        {pulsePaths.map((pulse, index) => (
          <circle
            key={`pulse-${index}`}
            r="4"
            fill="rgba(216, 180, 254, 0.95)"
          >
            <animateMotion
              path={pulse.path}
              dur={pulse.dur}
              begin={pulse.begin}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </g>
    </svg>
  )
}

export default CircuitBackground