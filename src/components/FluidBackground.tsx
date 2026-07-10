import { useEffect, useRef } from 'react'

function FluidBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = (canvas.getContext('webgl', {
      antialias: false,
      alpha: false,
      depth: false,
      stencil: false,
      powerPreference: 'low-power',
    }) || canvas.getContext('experimental-webgl')) as WebGLRenderingContext | null

    if (!gl) {
      console.warn('[FluidBackground] WebGL não disponível neste navegador.')
      return
    }

    const isMobile =
      window.matchMedia('(pointer: coarse)').matches || window.innerWidth < 768
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    // Ajustes por dispositivo. No mobile: um pouco mais de resolução e menos octaves.
    const octaves = isMobile ? 4 : 5
    const renderScale = isMobile ? 0.62 : 0.75
    // Com reduced-motion não congela: fica lento. Mobile anda um tico mais devagar.
    const timeScale = reduceMotion ? 0.15 : isMobile ? 0.7 : 1
    // Padrão de ruído maior no mobile => manchas maiores e mais legíveis em tela estreita.
    const noiseScale = isMobile ? 1.7 : 2.2
    // Intensidade do âmbar (mais presença no mobile).
    const amberBoost = isMobile ? 1.35 : 1.0

    const vsSource = 'attribute vec2 p;void main(){gl_Position=vec4(p,0.,1.);}'

    const fsSource = `
precision highp float;
uniform vec2 u_res;
uniform float u_time;
uniform vec2 u_mouse;
uniform float u_noiseScale;
uniform float u_amber;
float hash(vec2 p){p=fract(p*vec2(123.34,456.21));p+=dot(p,p+45.32);return fract(p.x*p.y);}
float noise(vec2 p){
  vec2 i=floor(p),f=fract(p);
  vec2 u=f*f*(3.-2.*f);
  float a=hash(i),b=hash(i+vec2(1,0)),c=hash(i+vec2(0,1)),d=hash(i+vec2(1,1));
  return mix(mix(a,b,u.x),mix(c,d,u.x),u.y);
}
float fbm(vec2 p){
  float v=0.,a=.5;
  for(int i=0;i<${octaves};i++){v+=a*noise(p);p*=2.02;a*=.5;}
  return v;
}
void main(){
  vec2 uv=gl_FragCoord.xy/u_res.xy;
  float asp=u_res.x/u_res.y;
  vec2 p=vec2(uv.x*asp,uv.y)*u_noiseScale;
  float t=u_time*.06;
  vec2 mo=u_mouse/u_res;
  float md=length(vec2((uv.x-mo.x)*asp,uv.y-mo.y));
  p+=0.35*exp(-md*3.5)*vec2(sin(u_time*.8),cos(u_time*.8));
  vec2 q=vec2(fbm(p+t),fbm(p+vec2(5.2,1.3)-t));
  vec2 r=vec2(fbm(p+2.2*q+vec2(1.7,9.2)+.12*t),fbm(p+2.2*q+vec2(8.3,2.8)-.1*t));
  float f=fbm(p+3.0*r);
  vec3 c1=vec3(0.016,0.016,0.019);
  vec3 c2=vec3(0.18,0.10,0.02);
  vec3 c3=vec3(0.941,0.667,0.235);
  vec3 col=mix(c1,c2,smoothstep(0.12,0.66,f)*u_amber);
  col=mix(col,c3,smoothstep(0.55,0.98,f)*smoothstep(0.32,0.9,r.x)*u_amber);
  col+=c3*0.12*u_amber*pow(max(f,0.),3.0);
  col+=(hash(gl_FragCoord.xy+u_time)-.5)*0.035;
  col*=1.-0.45*length(uv-0.5);
  gl_FragColor=vec4(col,1.);
}`

    function compile(type: number, src: string) {
      const s = gl!.createShader(type)!
      gl!.shaderSource(s, src)
      gl!.compileShader(s)
      if (!gl!.getShaderParameter(s, gl!.COMPILE_STATUS)) {
        console.warn('[FluidBackground] Erro de shader:', gl!.getShaderInfoLog(s))
      }
      return s
    }

    const program = gl.createProgram()!
    gl.attachShader(program, compile(gl.VERTEX_SHADER, vsSource))
    gl.attachShader(program, compile(gl.FRAGMENT_SHADER, fsSource))
    gl.linkProgram(program)

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.warn('[FluidBackground] Erro de link:', gl.getProgramInfoLog(program))
      return
    }

    gl.useProgram(program)

    const buffer = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const loc = gl.getAttribLocation(program, 'p')
    gl.enableVertexAttribArray(loc)
    gl.vertexAttribPointer(loc, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(program, 'u_res')
    const uTime = gl.getUniformLocation(program, 'u_time')
    const uMouse = gl.getUniformLocation(program, 'u_mouse')
    const uNoiseScale = gl.getUniformLocation(program, 'u_noiseScale')
    const uAmber = gl.getUniformLocation(program, 'u_amber')

    // Uniforms constantes: setados uma vez.
    gl.uniform1f(uNoiseScale, noiseScale)
    gl.uniform1f(uAmber, amberBoost)

    let mouse: [number, number] = [0, 0]

    function resize() {
      const rect = canvas!.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect.width * renderScale))
      const h = Math.max(1, Math.floor(rect.height * renderScale))
      canvas!.width = w
      canvas!.height = h
      gl!.viewport(0, 0, w, h)
      mouse = [w / 2, h / 2]
    }

    function onMouseMove(e: MouseEvent) {
      const rect = canvas!.getBoundingClientRect()
      mouse = [
        (e.clientX - rect.left) * renderScale,
        (rect.height - (e.clientY - rect.top)) * renderScale,
      ]
    }

    const start = performance.now()
    let rafId = 0
    let running = false

    function renderFrame() {
      const tm = ((performance.now() - start) / 1000) * timeScale
      gl!.uniform2f(uRes, canvas!.width, canvas!.height)
      gl!.uniform1f(uTime, tm)
      gl!.uniform2f(uMouse, mouse[0], mouse[1])
      gl!.drawArrays(gl!.TRIANGLES, 0, 3)
    }

    function loop() {
      renderFrame()
      rafId = requestAnimationFrame(loop)
    }

    function play() {
      if (running) return
      running = true
      loop()
    }

    function stop() {
      running = false
      cancelAnimationFrame(rafId)
    }

    resize()
    // Começa a animar IMEDIATAMENTE, sem depender do observer.
    play()

    // O observer só PAUSA quando sai da tela e RETOMA quando volta.
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) play()
        else stop()
      },
      { threshold: 0 },
    )
    io.observe(canvas)

    function onVisibility() {
      if (document.hidden) stop()
      else play()
    }

    function onContextLost(e: Event) {
      e.preventDefault()
      stop()
    }

    window.addEventListener('resize', resize)
    document.addEventListener('visibilitychange', onVisibility)
    canvas.addEventListener('webglcontextlost', onContextLost)
    if (!isMobile) canvas.addEventListener('mousemove', onMouseMove)

    return () => {
      stop()
      io.disconnect()
      window.removeEventListener('resize', resize)
      document.removeEventListener('visibilitychange', onVisibility)
      canvas.removeEventListener('webglcontextlost', onContextLost)
      if (!isMobile) canvas.removeEventListener('mousemove', onMouseMove)
    }
  }, [])

  return <canvas ref={canvasRef} className="circuit-bg" aria-hidden="true" />
}

export default FluidBackground
