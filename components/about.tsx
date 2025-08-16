import { Card, CardContent } from "@/components/ui/card"

export function About() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground slide-in-up">About Me</h2>

          <Card className="bg-card border-border shadow-lg card-hover hover-lift">
            <CardContent className="p-8">
              <p className="text-lg text-card-foreground leading-relaxed text-center">
                A highly motivated and passionate Computer Science enthusiast, recently completed B.E. in Artificial
                Intelligence and Data Science. Adept at translating theoretical knowledge into practical solutions, with
                a strong curiosity for emerging technologies. Committed to continuous learning, creative
                problem-solving, and excelling in collaborative, innovation-driven environments. Eager to contribute to
                impactful projects while pursuing ongoing technical and professional growth.
              </p>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <Card className="text-center card-hover hover-lift bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-primary">Location</h3>
                <p className="text-card-foreground">Shreyas Kemmannu, Udupi, Karnataka - 576115</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover hover-lift bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-primary">Languages</h3>
                <p className="text-card-foreground">English, Hindi, Kannada</p>
              </CardContent>
            </Card>

            <Card className="text-center card-hover hover-lift bg-card border-border">
              <CardContent className="p-6">
                <h3 className="font-semibold text-lg mb-2 text-primary">Hobbies</h3>
                <p className="text-card-foreground">Travelling, Photography, Cycling</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
