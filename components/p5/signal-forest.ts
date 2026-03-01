import { createResponsiveSketch } from "@/components/p5/sketch-utils"

export const init = () =>
  createResponsiveSketch({
    containerId: "p5-render-3",
    timeStep: 0.015,
    draw: (p, { width, height }, t) => {
      p.background(6, 10, 6)
      const bars = 28
      const barW = width / bars

      for (let i = 0; i < bars; i += 1) {
        const n = p.noise(i * 0.25, t)
        const h = p.map(n, 0, 1, height * 0.2, height * 0.95)
        const glow = p.map(n, 0, 1, 120, 255)

        p.noStroke()
        p.fill(16, 185, 129, 80)
        p.rect(i * barW + barW * 0.2, height - h, barW * 0.6, h)

        p.stroke(34, 197, 94, glow)
        p.strokeWeight(2)
        p.line(i * barW + barW * 0.5, height - h, i * barW + barW * 0.5, height)
      }

      p.stroke(40)
      for (let y = 0; y <= height; y += 20) {
        p.line(0, y, width, y)
      }
    },
  })
