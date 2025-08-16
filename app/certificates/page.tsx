import { Certificates } from "@/components/certificates"
import { Navigation } from "@/components/navigation"
import { PageTransition } from "@/components/page-transition"

export default function CertificatesPage() {
  return (
    <PageTransition>
      <main className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <Certificates />
        </div>
      </main>
    </PageTransition>
  )
}
