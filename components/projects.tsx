import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Calendar } from "lucide-react"

export function Projects() {
  const projects = [
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
    },
    {
      title: "AI-Based Signature Forgery Detection System",
      date: "Jan 2025",
      description:
        "Developed an AI model to distinguish between genuine and forged signatures. Involved collecting and preprocessing signature data, extracting features using image processing techniques, and training a Convolutional Neural Network (CNN) on this data.",
      technologies: ["Python", "CNN", "Image Processing", "Machine Learning"],
    },
    {
      title: "Dried Coconut Classification Using Deep Learning Image Analysis",
      date: "Jun 2024",
      description:
        "Developed an image classification system using MobileNetV3 and PyTorch to classify images into three categories with 100% accuracy, validated through a confusion matrix. Integrated Grad-CAM to generate heatmaps for visualizing model focus areas, enhancing interpretability.",
      technologies: ["MobileNetV3", "PyTorch", "Grad-CAM", "Deep Learning"],
    },
    {
      title: "Image Classification using Machine Learning",
      date: "Jan 2024",
      description:
        "Implemented image recognition using machine learning techniques to classify and identify objects within images. Leveraged a dataset of labeled images to train a model that accurately predicts the content of new, unseen images.",
      technologies: ["Python", "Machine Learning", "Image Processing", "scikit-learn"],
    },
  ]

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Projects</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              /* Added card hover animations and red theme */
              <Card key={index} className="card-hover hover-glow h-full bg-card border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-3">
                      <Code className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                      <h3 className="text-lg font-semibold text-card-foreground leading-tight">{project.title}</h3>
                    </div>
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
                      /* Updated badge colors to match red theme */
                      <Badge
                        key={techIndex}
                        variant="secondary"
                        className="text-xs bg-primary/20 text-primary border-primary/30"
                      >
                        {tech}
                      </Badge>
                    ))}
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
