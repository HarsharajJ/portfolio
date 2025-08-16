import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { GraduationCap } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "B.E. in Artificial Intelligence and Data Science",
      institution: "Shri Madhwa Vadiraja Institute of Technology and Management",
      period: "2021 - 2025",
      grade: "CGPA: 8.43",
    },
    {
      degree: "PCME - 12th Grade",
      institution: "Poornaprajna PU College",
      period: "July 2021",
      grade: "Percentage: 79.83%",
    },
    {
      degree: "SSLC - 10th Grade",
      institution: "Milagres English Medium High School",
      period: "April 2019",
      grade: "Percentage: 81.12%",
    },
  ]

  return (
    <section id="education" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Education</h2>

          <div className="space-y-6">
            {education.map((edu, index) => (
              /* Added card hover animations and red theme */
              <Card key={index} className="card-hover hover-glow bg-card border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <GraduationCap className="w-6 h-6 text-primary" />
                    <div>
                      <h3 className="text-xl font-semibold text-card-foreground">{edu.degree}</h3>
                      <p className="text-muted-foreground font-normal">{edu.institution}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-muted-foreground">{edu.period}</span>
                    <span className="font-semibold text-primary">{edu.grade}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
