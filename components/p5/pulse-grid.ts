import { createResponsiveSketch } from "@/components/p5/sketch-utils"

export const init = () =>
  createResponsiveSketch({
    containerId: "p5-render-1",
    timeStep: 0.04,
    draw: (p, { width, height }, t) => {
      p.background(8, 8, 8)
      const cols = 10
      const rows = 6
      const cellW = width / cols
      const cellH = height / rows

      p.stroke(60)
      p.strokeWeight(1)
      for (let c = 0; c <= cols; c += 1) {
        p.line(c * cellW, 0, c * cellW, height)
      }
      for (let r = 0; r <= rows; r += 1) {
        p.line(0, r * cellH, width, r * cellH)
      }

      const pulseCol = Math.floor(((p.sin(t * 0.9) + 1) / 2) * (cols - 1))
      const pulseRow = Math.floor(((p.cos(t * 0.7) + 1) / 2) * (rows - 1))
      const glow = 120 + 100 * (p.sin(t * 1.4) * 0.5 + 0.5)

      p.noFill()
      p.stroke(239, 68, 68)
      p.strokeWeight(2)
      p.rect(pulseCol * cellW + 4, pulseRow * cellH + 4, cellW - 8, cellH - 8)

      p.stroke(239, 68, 68, glow)
      p.strokeWeight(3)
      p.rect(pulseCol * cellW + 8, pulseRow * cellH + 8, cellW - 16, cellH - 16)
    },
  })
