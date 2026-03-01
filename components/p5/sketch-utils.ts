type P5 = any

type SketchConfig = {
  containerId: string
  minHeight?: number
  aspectRatio?: number
  frameRate?: number
  timeStep?: number
  setup?: (p: P5, size: { width: number; height: number }) => void
  draw: (p: P5, size: { width: number; height: number }, t: number) => void
}

export const createResponsiveSketch = (config: SketchConfig) => {
  const container = document.getElementById(config.containerId)
  if (!container || container.dataset.p5Loaded === "true") return
  container.dataset.p5Loaded = "true"

  const getSize = () => {
    const width = container.clientWidth || 320
    const height = Math.max(
      config.minHeight ?? 180,
      Math.round(width * (config.aspectRatio ?? 0.55)),
    )
    return { width, height }
  }

  const P5Ctor = (window as unknown as { p5?: new (s: (p: P5) => void, node: string) => P5 }).p5
  if (!P5Ctor) return

  new P5Ctor((p: P5) => {
    let t = 0

    const resizeIfNeeded = () => {
      const { width, height } = getSize()
      if (p.width !== width || p.height !== height) {
        p.resizeCanvas(width, height)
      }
      return { width, height }
    }

    p.setup = () => {
      const size = getSize()
      p.createCanvas(size.width, size.height)
      p.frameRate(config.frameRate ?? 30)
      if (config.setup) config.setup(p, size)
    }

    p.draw = () => {
      const size = resizeIfNeeded()
      config.draw(p, size, t)
      t += config.timeStep ?? 0.02
    }

    p.windowResized = () => {
      const size = getSize()
      p.resizeCanvas(size.width, size.height)
    }
  }, config.containerId)
}
