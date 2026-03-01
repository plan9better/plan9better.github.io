import { createResponsiveSketch } from "@/components/p5/sketch-utils"

export const init = () =>
  createResponsiveSketch({
    containerId: "p5-render-5",
    timeStep: 0.02,
    setup: (p) => {
      p.pixelDensity(1)
      p.background(0)
    },
    draw: (() => {
      let cx = 0
      let cy = 0
      let lastWidth = 0
      let lastHeight = 0

      return (p, { width, height }, t) => {
        const s = Math.sin(t)
        const color = s >= 0 ? 255 : 0

        const resized = width !== lastWidth || height !== lastHeight
        if (resized) {
          lastWidth = width
          lastHeight = height
          cx = width / 2
          cy = 0
        }


        const L = { x: width / 2, y: 0 }
        const R = { x: 0, y: height }
        const M = { x: width, y: height }

        p.loadPixels()

        for (let i = 0; i < (Math.abs(s) * 1000) * 5; i += 1) {
          const variant = Math.floor(p.random(0, 3))
          if (variant === 0) {
            cx = (cx + L.x) / 2
            cy = (cy + L.y) / 2
          } else if (variant === 1) {
            cx = (cx + R.x) / 2
            cy = (cy + R.y) / 2
          } else {
            cx = (cx + M.x) / 2
            cy = (cy + M.y) / 2
          }

          p.set(Math.floor(cx), Math.floor(cy), p.color(color))
        }
        const historyWidth = 100
        const futureWidth = 0
        const waveHeight = 100
        const totalWidth = historyWidth + futureWidth
        const midline = Math.round(waveHeight / 2)
        const step = 0.02
        for (let x = 0; x <= totalWidth; x += 1) {
          for (let y = 0; y <= waveHeight; y += 1) {
            p.set(x, y, 0)
          }
        }
        p.updatePixels()
        p.textSize(50)
        p.stroke(90)
        p.fill(90)
        p.textAlign(p.CENTER, p.CENTER)
        p.text(Math.round(s * 10) / 10, 0, 0, 100, 100)

        p.stroke(0, 255, 0)
        p.line(0, midline, totalWidth, midline)

        p.stroke(255, 0, 0)
        p.noFill();
        p.beginShape();
        for (let offset = -historyWidth; offset <= futureWidth; offset += 1) {
          const screenX = offset + historyWidth
          const y = -Math.round(Math.sin(t + offset * step) * 50) + midline
          p.vertex(screenX, y);
        }
        p.endShape();

      }
    })(),
  })
