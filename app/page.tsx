import { Hero } from "@/components/hero"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function Home() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-black relative overflow-hidden">
        <Navigation />
        <div className="absolute inset-0 bg-gradient-to-br from-black via-red-950/10 to-black pointer-events-none" />
        <Hero />
      </main>
    </PageTransition>
  )
}
