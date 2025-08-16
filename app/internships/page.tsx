import { Internships } from "@/components/internships"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function InternshipsPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Internships />
        </div>
      </main>
    </PageTransition>
  )
}
