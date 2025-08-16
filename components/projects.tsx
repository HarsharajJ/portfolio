"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Calendar, ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

export function Projects() {
  const projects = [
    {
      title: "Shri Mandarathi — Full-Stack E-commerce Platform",
      date: "2024",
      description:
        "Full-stack e-commerce application built with Next.js frontend and Node.js/Express TypeScript backend. Features product catalog with variants, user authentication (JWT), cart management, orders, addresses, and image uploads with Cloudinary integration. Includes role-based access control for admin and customer roles.",
      technologies: [
        "Next.js",
        "React 19",
        "TypeScript",
        "Node.js",
        "Express",
        "Prisma",
        "PostgreSQL",
        "JWT",
        "Cloudinary",
        "Tailwind CSS",
      ],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      image: "/projects/commerce-platform.png",
    },
    {
      title: "Interactive Portfolio Website",
      date: "2025",
      description:
        "Modern, responsive portfolio website built with Next.js featuring smooth page transitions, animated particle backgrounds, video intro system, and dynamic certificate management. Includes mobile-optimized navigation, red/black theme design, and interactive UI elements showcasing professional experience and projects.",
      technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      image: "/projects/portfolio-website.png",
    },
    {
  title: "Hireo – AI-powered Interview Preparation Assistant",
  date: "Aug 2025",
  description:
    "Created an AI-powered interview preparation assistant using IBM Watsonx Assistant. Hireo simulates interviews, provides common HR and technical questions, offers resume and soft skill guidance, and delivers a smooth, conversational experience. Focused on intent recognition, dialogue flow design, and NLU — all without external LLMs.",
  technologies: [
    "IBM Watsonx Assistant",
    "NLU",
    "Intent Recognition",
    "Dialogue Flow Design",
    "Chat UI",
  ],
  image: "/projects/hireo.png",
  link: "https://lnkd.in/gSwsD-A2"
    },

    {
      title: "AI Company Specific Chatbot for Manipal Technologies Limited",
      date: "Feb 2025",
      description:
        "Developed a company-specific AI chatbot using FastAPI, LangChain, and LangGraph, powered by Groq Qwen 2.5 LLM and Cohere embeddings. Implemented semantic search and document retrieval via FAISS from PDFs and web data. Built secure, role-based APIs for admin features like PDF upload, URL upload, and chat management.",
      technologies: [
        "FastAPI",
        "LangChain",
        "LangGraph",
        "Groq Qwen 2.5",
        "FAISS",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
      ],
      image: "/projects/ai-chatbot.png",
    },
    {
      title: "AI-Based Signature Forgery Detection System",
      date: "Jan 2025",
      description:
        "Developed an AI model to distinguish between genuine and forged signatures. Involved collecting and preprocessing signature data, extracting features using image processing techniques, and training a Convolutional Neural Network (CNN) on this data.",
      technologies: ["Python", "CNN", "Image Processing", "Machine Learning"],
      image: "/projects/signature-detection.jpeg",
    },
    {
      title: "Dried Coconut Classification Using Deep Learning Image Analysis",
      date: "Jun 2024",
      description:
        "Developed an image classification system using MobileNetV3 and PyTorch to classify images into three categories with 100% accuracy, validated through a confusion matrix. Integrated Grad-CAM to generate heatmaps for visualizing model focus areas, enhancing interpretability.",
      technologies: ["MobileNetV3", "PyTorch", "Grad-CAM", "Deep Learning"],
      image: "/projects/coconut-classification.png",
    },
    {
      title: "Image Classification using Machine Learning",
      date: "Jan 2024",
      description:
        "Implemented image recognition using machine learning techniques to classify and identify objects within images. Leveraged a dataset of labeled images to train a model that accurately predicts the content of new, unseen images.",
      technologies: ["Python", "Machine Learning", "Image Processing", "scikit-learn"],
      image: "/projects/image-classification.jpeg",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className={`card-hover hover-glow h-full bg-card border-primary/30 group ${project.featured ? "ring-2 ring-primary/50" : ""}`}
              >
                <CardHeader className="pb-3">
                  <div className="aspect-video bg-muted rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={`${project.title} project screenshot`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement
                        target.src = `/placeholder.svg?height=200&width=400&query=Project screenshot for ${project.title}`
                      }}
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-primary/10 transition-colors duration-300 flex items-center justify-center">
                      <Code className="w-8 h-8 text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </div>

                  <CardTitle className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight">{project.title}</h3>
                    </div>
                    {project.featured && (
                      <Badge className="bg-primary/20 text-primary border-primary/30 text-xs">Featured</Badge>
                    )}
                  </CardTitle>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-card-foreground leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/20 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  {project.featured && (
                    <div className="flex gap-3 pt-2">
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10 bg-transparent"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
