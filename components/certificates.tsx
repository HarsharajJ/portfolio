"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Award, Calendar, ExternalLink } from "lucide-react"
import Image from "next/image"

export function Certificates() {
  const certificates = [
    {
      title: "The AI Engineer Course",
      issuer: "Udemy",
      date: "2025",
      image: "/certificates/ai-engineer-course.jpg",
    },
    {
      title: "Lab: Retrieval Augmented Generation with LangChain",
      issuer: "IBM SkillsBuild",
      date: "July 18, 2025",
      image: "/certificates/rag-langchain.png",
    },
    {
      title: "Journey to Cloud: Envisioning Your Solution",
      issuer: "IBM SkillsBuild",
      date: "July 18, 2025",
      image: "/certificates/journey-to-cloud.png",
    },
    {
      title: "Getting Started with Artificial Intelligence",
      issuer: "IBM SkillsBuild",
      date: "July 16, 2025",
      image: "/certificates/getting-started-ai.png",
    },
    {
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS Training & Certification",
      date: "June 14, 2025",
      image: "/certificates/aws-cloud-practitioner.png",
    },
    {
      title: "Introduction to Generative AI with GPT",
      issuer: "LinkedIn Learning",
      date: "July 14, 2024",
      image: "/certificates/generative-ai-gpt.jpg",
    },
    {
      title: "HTML Essential Training (2020)",
      issuer: "LinkedIn Learning",
      date: "July 4, 2024",
      image: "/certificates/html-essential.png",
    },
    {
      title: "DevHost Hackathon Certificate of Participation",
      issuer: "SOSC, Niveus",
      date: "2024",
      image: "/certificates/hack.jpeg",
    },
    {
      title: "Data Science & Machine Learning Workshop",
      issuer: "Vrisharya Technologies Private Limited",
      date: "August 19-20, 2023",
      image: "/certificates/data-science-workshop.png",
    },
    {
      title: "Introduction to JavaScript",
      issuer: "Great Learning Academy",
      date: "March 2023",
      image: "/certificates/javascript-intro.png",
    },
    {
      title: "Web Development",
      issuer: "Teachnook, IIT Bhubaneshwar",
      date: "July 1, 2022 - August 31, 2022",
      image: "/certificates/web-development.png",
    },
  ]

  return (
    <section id="certificates" className="py-20 bg-muted">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Certificates</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              /* Added card hover animations and red theme */
              <Card key={index} className="card-hover hover-glow group bg-card border-primary/30">
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.title} certificate`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=200&width=300&query=Certificate for ${cert.title}`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                      <ExternalLink className="w-6 h-6 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>
                  <CardTitle className="flex items-start gap-3">
                    <Award className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight">{cert.title}</h3>
                      <p className="text-muted-foreground font-normal text-sm">{cert.issuer}</p>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {cert.date}
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
