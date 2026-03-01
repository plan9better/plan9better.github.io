"use client"

import { useState } from "react"

export function Navigation() {
  const [activeSection, setActiveSection] = useState("blogs")

  const sections = [
    // {
    //   id: "blogs",
    //   label: "BLOGS",
    //   description: "Technical writing and documentation",
    //   activeClasses: "border-red-500 bg-red-600 text-zinc-50",
    // },
    // {
    //   id: "reading",
    //   label: "READING",
    //   description: "Research papers, books, and articles",
    //   activeClasses: "border-yellow-400 bg-yellow-400 text-zinc-950",
    // },
    {
      id: "commands",
      label: "COMMANDS",
      description: "System utilities and shell scripts",
      activeClasses: "border-green-500 bg-green-600 text-zinc-50",
    },
    {
      id: "renders",
      label: "RENDERS",
      description: "p5.js signal studies and mechanical noise",
      activeClasses: "border-blue-500 bg-blue-600 text-zinc-50",
    },
  ]

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="mb-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sections.map((section) => (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className={`p-4 text-left border transition-colors ${
              activeSection === section.id
                ? section.activeClasses
                : "border-zinc-300 bg-white hover:border-zinc-400"
            }`}
          >
            <div className="font-bold text-sm tracking-wide">{section.label}</div>
            <div className="text-xs mt-1 opacity-70">{section.description}</div>
          </button>
        ))}
      </div>
    </nav>
  )
}
