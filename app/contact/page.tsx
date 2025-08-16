import { Contact } from "@/components/contact"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function ContactPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Contact />
        </div>
      </main>
    </PageTransition>
  )
}
