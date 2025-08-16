import { Projects } from "@/components/projects"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function ProjectsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Projects />
        </div>
      </main>
    </PageTransition>
  )
}
