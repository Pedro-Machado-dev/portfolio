// Ambient PCB-trace illustration used as the hero's signature visual.
// Pure inline SVG + SMIL animation — no extra dependencies, no canvas loop.
function CircuitBackground() {
  const traceColor = '#9ca3af'

  const traces = [
    { d: 'M320 80 H520 V200 H760', vias: ['520,80', '520,200'] },
    { d: 'M360 260 H600 V140 H860', vias: ['600,260', '600,140'] },
    {
      d: 'M300 380 H480 V480 H700 V380 H880',
      vias: ['480,380', '480,480', '700,480', '700,380'],
    },
    { d: 'M340 560 H540 V620 H820', vias: ['540,560', '540,620'] },
    { d: 'M620 60 V160 H840', vias: ['620,160'] },
  ]

  const pulses = [
    { path: traces[0].d, duration: '7s', begin: '0s' },
    { path: traces[2].d, duration: '9s', begin: '1.4s' },
    { path: traces[4].d, duration: '6s', begin: '2.8s' },
  ]

  return (
    <svg
      className="circuit-bg"
      viewBox="0 0 900 700"
      preserveAspectRatio="xMaxYMid slice"
      aria-hidden="true"
    >
      {traces.map((trace, index) => (
        <path
          key={`trace-${index}`}
          d={trace.d}
          fill="none"
          stroke={traceColor}
          strokeWidth={1.5}
          strokeOpacity={0.32}
          strokeLinecap="round"
        />
      ))}

      {traces.flatMap((trace, traceIndex) =>
        trace.vias.map((point, viaIndex) => {
          const [cx, cy] = point.split(',').map(Number)
          return (
            <circle
              key={`via-${traceIndex}-${viaIndex}`}
              cx={cx}
              cy={cy}
              r={4}
              fill={traceColor}
              fillOpacity={0.4}
            >
              <animate
                attributeName="fill-opacity"
                values="0.25;0.65;0.25"
                dur="4s"
                begin={`${(traceIndex + viaIndex) * 0.6}s`}
                repeatCount="indefinite"
              />
            </circle>
          )
        }),
      )}

      {pulses.map((pulse, index) => (
        <circle key={`pulse-${index}`} r={3.5} fill={traceColor} fillOpacity={0.9}>
          <animateMotion
            path={pulse.path}
            dur={pulse.duration}
            begin={pulse.begin}
            repeatCount="indefinite"
          />
        </circle>
      ))}
    </svg>
  )
}

export default CircuitBackground
