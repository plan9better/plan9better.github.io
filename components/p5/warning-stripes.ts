import { createResponsiveSketch } from "@/components/p5/sketch-utils"

export const init = () =>
  createResponsiveSketch({
    containerId: "p5-render-2",
    timeStep: 0.02,
    draw: (p, { width, height }, t) => {
      p.background(12, 12, 12)
      p.push()
      p.translate(width * 0.5, height * 0.5)
      p.rotate(-0.35)

      const stripeWidth = 26
      const stripeHeight = height * 2.4
      const offset = (t * 40) % (stripeWidth * 2)

      for (let x = -width * 2; x < width * 2; x += stripeWidth * 2) {
        const xPos = x + offset
        p.noStroke()
        p.fill(250, 204, 21)
        p.rect(xPos, -stripeHeight / 2, stripeWidth, stripeHeight)
      }

      p.pop()

      p.stroke(70)
      for (let y = 0; y <= height; y += 18) {
        p.line(0, y, width, y)
      }
    },
  })
