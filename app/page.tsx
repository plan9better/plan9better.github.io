import { Navigation } from "@/components/navigation"
// import { BlogsSection } from "@/components/blogs-section"
// import { ReadingSection } from "@/components/reading-section"
// import { CommandsSection } from "@/components/commands-section"
import { Header } from "@/components/header"
import { P5Section } from "@/components/p5-section"

export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-mono">
      <div className="mx-auto max-w-6xl px-4 py-8">
        <Header />
        <Navigation />

        <main className="space-y-16">
          {/* <BlogsSection /> */}
          {/* <ReadingSection /> */}
          {/* <CommandsSection /> */}
          <P5Section />
        </main>

        <footer className="mt-16 border-t border-dashed border-zinc-300 pt-8 text-center text-sm text-zinc-600">
          <p>© 2024 — Built with precision and purpose</p>
        </footer>
      </div>
    </div>
  )
}
