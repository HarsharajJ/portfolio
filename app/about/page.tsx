import { About } from "@/components/about"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function AboutPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <About />
        </div>
      </main>
    </PageTransition>
  )
}
