"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

const sketches = [
  // {
  //   id: "p5-render-1",
  //   title: "Pulse Grid",
  //   accent: "Red",
  //   description: "Voltage-like pulses stepping through a rigid grid.",
  // },
  // {
  //   id: "p5-render-2",
  //   title: "Warning Stripes",
  //   accent: "Yellow",
  //   description: "Hazard bands with oscillating contrast and drift.",
  // },
  // {
  //   id: "p5-render-3",
  //   title: "Signal Forest",
  //   accent: "Green",
  //   description: "Randomized bars flickering like a diagnostics wall.",
  // },
  // {
  //   id: "p5-render-4",
  //   title: "Cold Waves",
  //   accent: "Blue",
  //   description: "Interference waves in a cold, industrial spectrum.",
  // },
  {
    id: "p5-render-5",
    title: "Triangle fractal",
    accent: "White",
    description: "Sierpiński's Triangle",
  },
]

export function P5Section() {
  const [p5Ready, setP5Ready] = useState(false)

  useEffect(() => {
    if (!p5Ready) return
    let cancelled = false

    const loadSketches = async () => {
      const [triangle] = await Promise.all([import("@/components/p5/triangle")])

      if (cancelled) return
      triangle.init()
    }

    void loadSketches()
    return () => {
      cancelled = true
    }
  }, [p5Ready])

  return (
    <section id="renders" className="space-y-8">
      <div className="border-b border-dashed border-zinc-300 pb-4">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900">RENDERS</h2>
        <p className="text-sm text-zinc-600 mt-1">p5.js signal studies and mechanical noise</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {sketches.map((sketch) => (
          <div key={sketch.id} className="border border-zinc-300 bg-zinc-950 text-zinc-100 p-4">
            <div className="flex items-center justify-between text-xs text-zinc-400">
              <span className="font-semibold tracking-wide text-zinc-200">{sketch.title}</span>
              <span className="uppercase tracking-[0.2em] text-zinc-500">{sketch.accent}</span>
            </div>
            <div
              id={sketch.id}
              className="mt-3 min-h-[180px] border border-zinc-700 bg-black/70"
            />
            <p className="mt-3 text-xs text-zinc-400">{sketch.description}</p>
          </div>
        ))}
      </div>

      <Script
        src="https://cdn.jsdelivr.net/npm/p5@1.9.2/lib/p5.min.js"
        strategy="afterInteractive"
        onLoad={() => setP5Ready(true)}
      />
    </section>
  )
}
