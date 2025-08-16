import { Education } from "@/components/education"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function EducationPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Education />
        </div>
      </main>
    </PageTransition>
  )
}
