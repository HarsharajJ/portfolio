import { Button } from "@/components/ui/button"
import { Linkedin, Mail, Phone } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-secondary rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-1.5 h-1.5 bg-primary rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/4 left-1/2 w-1 h-1 bg-secondary rounded-full animate-ping"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-1.5 h-1.5 bg-secondary rounded-full animate-bounce"></div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6">HARSHARAJ</h1>
          <p className="text-xl md:text-2xl text-primary mb-8 slide-in-up">AI & Data Science Engineer</p>
          <p className="text-lg text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed slide-in-up">
            Highly motivated Computer Science enthusiast with B.E. in Artificial Intelligence and Data Science.
            Passionate about translating theoretical knowledge into practical solutions and contributing to impactful
            projects.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 slide-in-up">
            <Button asChild className="bg-primary hover:bg-secondary hover-lift">
              <Link href="/contact" className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Get In Touch
              </Link>
            </Button>
            <Button
              variant="outline"
              asChild
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-lift bg-transparent"
            >
              <a
                href="https://www.linkedin.com/in/harsharaj-5755b8311/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground slide-in-up">
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-pointer">
              <Phone className="w-4 h-4" />
              +91 9071592745
            </div>
            <div className="flex items-center gap-2 hover:text-primary transition-colors duration-300 cursor-pointer">
              <Mail className="w-4 h-4" />
              harsharajs018@gmail.com
            </div>
          </div>

          <div className="mt-16 flex flex-wrap justify-center gap-3">
            <Link href="/about">
              <Button variant="ghost" size="sm" className="hover-lift text-muted-foreground hover:text-primary">
                About
              </Button>
            </Link>
            <Link href="/projects">
              <Button variant="ghost" size="sm" className="hover-lift text-muted-foreground hover:text-primary">
                Projects
              </Button>
            </Link>
            <Link href="/skills">
              <Button variant="ghost" size="sm" className="hover-lift text-muted-foreground hover:text-primary">
                Skills
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
