import { Skills } from "@/components/skills"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function SkillsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Skills />
        </div>
      </main>
    </PageTransition>
  )
}
