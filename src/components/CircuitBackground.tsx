import { useEffect, useRef } from 'react'

function CircuitBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Lê a cor de acento das variáveis CSS (fica em sincronia com a paleta)
    const styles = getComputedStyle(document.documentElement)
    const accent = styles.getPropertyValue('--accent').trim() || '#f0aa3c'

    // Converte o hex do acento em componentes RGB (pra usar com alpha)
    function hexToRgb(hex: string): [number, number, number] {
      const clean = hex.replace('#', '')
      const full =
        clean.length === 3
          ? clean.split('').map((c) => c + c).join('')
          : clean
      const num = parseInt(full, 16)
      return [(num >> 16) & 255, (num >> 8) & 255, num & 255]
    }
    const [ar, ag, ab] = hexToRgb(accent.startsWith('#') ? accent : '#f0aa3c')
    const accentRgb = `${ar}, ${ag}, ${ab}`

    const mouse = { x: -9999, y: -9999 }

    type Node = { x: number; y: number; r: number; base: number }
    type Trace = { x1: number; y1: number; x2: number; y2: number }
    type Pulse = { traceIndex: number; t: number; speed: number }

    let nodes: Node[] = []
    let traces: Trace[] = []
    let pulses: Pulse[] = []
    let drops: { x: number; y: number; speed: number; char: string }[] = []

    const chars = '01</>{}[]#01ラアイ'

    // Gera o circuito: uma malha em grade com trilhas em L e vias nos cantos
    function build() {
      nodes = []
      traces = []
      pulses = []
      drops = []

      const gap = 66
      const cols = Math.ceil(width / gap) + 1
      const rows = Math.ceil(height / gap) + 1

      // Cria trilhas: caminhos que andam na horizontal e depois viram na vertical
      const traceCount = Math.floor((cols * rows) / 6) + 8
      for (let i = 0; i < traceCount; i++) {
        const startCol = Math.floor(Math.random() * cols)
        const startRow = Math.floor(Math.random() * rows)
        const x1 = startCol * gap
        const y1 = startRow * gap

        const horiz = Math.random() > 0.5
        const len = (1 + Math.floor(Math.random() * 3)) * gap

        let x2 = x1
        let y2 = y1
        if (horiz) {
          x2 = Math.min(x1 + len, width)
        } else {
          y2 = Math.min(y1 + len, height)
        }

        traces.push({ x1, y1, x2, y2 })
        nodes.push({ x: x1, y: y1, r: 2.5, base: 2.5 })
        nodes.push({ x: x2, y: y2, r: 2.5, base: 2.5 })
      }

      // Alguns pulsos correndo por trilhas aleatórias
      const pulseCount = Math.max(5, Math.floor(traces.length / 4))
      for (let i = 0; i < pulseCount; i++) {
        pulses.push({
          traceIndex: Math.floor(Math.random() * traces.length),
          t: Math.random(),
          speed: 0.002 + Math.random() * 0.004,
        })
      }

      // Camada matrix: colunas de caracteres caindo bem devagar
      const dropCount = Math.floor(width / 42)
      for (let i = 0; i < dropCount; i++) {
        drops.push({
          x: Math.random() * width,
          y: Math.random() * height,
          speed: 0.2 + Math.random() * 0.5,
          char: chars[Math.floor(Math.random() * chars.length)],
        })
      }
    }

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      width = rect.width
      height = rect.height
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      canvas!.width = width * dpr
      canvas!.height = height * dpr
      ctx!.setTransform(dpr, 0, 0, dpr, 0, 0)
      build()
    }

    let frame = 0
    function draw() {
      ctx!.clearRect(0, 0, width, height)

      // 1) Camada matrix (fundo, bem sutil)
      ctx!.font = '12px monospace'
      for (const d of drops) {
        ctx!.fillStyle = `rgba(${accentRgb}, 0.06)`
        ctx!.fillText(d.char, d.x, d.y)
        d.y += d.speed
        if (d.y > height) {
          d.y = 0
          d.x = Math.random() * width
          d.char = chars[Math.floor(Math.random() * chars.length)]
        }
        if (frame % 30 === 0 && Math.random() > 0.9) {
          d.char = chars[Math.floor(Math.random() * chars.length)]
        }
      }

      // 2) Trilhas do circuito (linhas neutras/prata)
      ctx!.lineWidth = 1
      ctx!.strokeStyle = 'rgba(203, 213, 225, 0.12)'
      for (const tr of traces) {
        ctx!.beginPath()
        ctx!.moveTo(tr.x1, tr.y1)
        ctx!.lineTo(tr.x2, tr.y2)
        ctx!.stroke()
      }

      // 3) Vias / pads (acendem perto do mouse)
      for (const n of nodes) {
        const dx = n.x - mouse.x
        const dy = n.y - mouse.y
        const dist = Math.hypot(dx, dy)
        const near = dist < 120
        const glow = near ? 1 - dist / 120 : 0

        ctx!.beginPath()
        ctx!.arc(n.x, n.y, n.base + glow * 2.5, 0, Math.PI * 2)
        if (near) {
          ctx!.fillStyle = `rgba(${accentRgb}, ${0.3 + glow * 0.7})`
        } else {
          ctx!.fillStyle = 'rgba(203, 213, 225, 0.22)'
        }
        ctx!.fill()
      }

      // 4) Pulsos âmbar correndo pelas trilhas
      for (const p of pulses) {
        const tr = traces[p.traceIndex]
        if (!tr) continue
        p.t += p.speed
        if (p.t > 1) {
          p.t = 0
          p.traceIndex = Math.floor(Math.random() * traces.length)
        }
        const px = tr.x1 + (tr.x2 - tr.x1) * p.t
        const py = tr.y1 + (tr.y2 - tr.y1) * p.t

        const grad = ctx!.createRadialGradient(px, py, 0, px, py, 9)
        grad.addColorStop(0, `rgba(${accentRgb}, 0.9)`)
        grad.addColorStop(1, `rgba(${accentRgb}, 0)`)
        ctx!.fillStyle = grad
        ctx!.beginPath()
        ctx!.arc(px, py, 9, 0, Math.PI * 2)
        ctx!.fill()

        ctx!.fillStyle = `rgba(${accentRgb}, 1)`
        ctx!.beginPath()
        ctx!.arc(px, py, 2, 0, Math.PI * 2)
        ctx!.fill()
      }

      frame++
      animationId = requestAnimationFrame(draw)
    }

    let animationId = 0

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse.x = e.clientX - rect.left
      mouse.y = e.clientY - rect.top
    }
    function onMouseLeave() {
      mouse.x = -9999
      mouse.y = -9999
    }

    resize()
    draw()

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouseMove)
    canvas.addEventListener('mouseleave', onMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('mousemove', onMouseMove)
      canvas.removeEventListener('mouseleave', onMouseLeave)
    }
  }, [])

  return <canvas ref={canvasRef} className="circuit-bg" aria-hidden="true" />
}

export default CircuitBackground