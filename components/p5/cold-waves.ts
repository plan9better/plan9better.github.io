import { createResponsiveSketch } from "@/components/p5/sketch-utils"

export const init = () =>
  createResponsiveSketch({
    containerId: "p5-render-4",
    timeStep: 0.02,
    draw: (p, { width, height }, t) => {
      p.background(6, 8, 16)
      p.noFill()

      const lines = 6
      for (let l = 0; l < lines; l += 1) {
        const offset = l * 16 + p.sin(t + l) * 6
        p.beginShape()
        const alpha = 120 + l * 20
        p.stroke(59, 130, 246, alpha)
        p.strokeWeight(1.5)
        for (let x = 0; x <= width; x += 12) {
          const y =
            height * 0.5 +
            p.sin(x * 0.04 + t + l) * (12 + l * 4) +
            p.sin(x * 0.12 - t * 0.8) * 6 +
            offset
          p.vertex(x, y)
        }
        p.endShape()
      }

      p.stroke(35)
      for (let x = 0; x <= width; x += 28) {
        p.line(x, 0, x, height)
      }
    },
  })
