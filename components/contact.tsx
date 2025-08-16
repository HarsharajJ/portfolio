import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Get In Touch</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="card-hover hover-glow bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4 hover:text-primary transition-colors duration-300 cursor-pointer">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Email</p>
                    <a
                      href="mailto:harsharajs018@gmail.com"
                      className="text-primary hover:text-secondary transition-colors"
                    >
                      harsharajs018@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 hover:text-primary transition-colors duration-300 cursor-pointer">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Phone</p>
                    <a href="tel:+919071592745" className="text-primary hover:text-secondary transition-colors">
                      +91 9071592745
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <p className="font-medium text-card-foreground">Location</p>
                    <p className="text-muted-foreground">Shreyas Kemmannu, Udupi, Karnataka - 576115</p>
                  </div>
                </div>

                <div className="pt-4">
                  <h3 className="font-medium text-card-foreground mb-4">Connect with me</h3>
                  <div className="flex gap-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow bg-transparent"
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
                </div>
              </CardContent>
            </Card>

            <Card className="card-hover hover-glow bg-card border-primary/30">
              <CardHeader>
                <CardTitle className="text-xl text-card-foreground">Let's Work Together</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-card-foreground mb-6 leading-relaxed">
                  I'm always interested in new opportunities and collaborations. Whether you have a project in mind,
                  want to discuss AI and data science, or just want to connect, feel free to reach out!
                </p>

                <div className="space-y-4">
                  <Button asChild className="w-full bg-primary hover:bg-secondary hover-glow pulse-glow">
                    <a href="mailto:harsharajs018@gmail.com" className="flex items-center justify-center gap-2">
                      <Mail className="w-4 h-4" />
                      Send Email
                    </a>
                  </Button>

                  <Button
                    variant="outline"
                    asChild
                    className="w-full bg-transparent border-primary text-primary hover:bg-primary hover:text-primary-foreground hover-glow"
                  >
                    <a href="tel:+919071592745" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
