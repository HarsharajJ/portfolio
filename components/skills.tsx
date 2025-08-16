import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code, Database, Wrench, Brain, Users } from "lucide-react"

export function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: ["Python", "Java", "HTML", "JavaScript"],
    },
    {
      title: "Databases",
      icon: Database,
      skills: ["MySQL"],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        "MS Office",
        "PowerBI",
        "React",
        "IBM Cloud",
        "AWS Cloud",
        "LangChain",
        "LangGraph",
        "FastAPI",
        "FAISS",
        "Groq Qwen 2.5 LLM",
        "Cohere Embeddings",
        "scikit-learn",
        "PyTorch",
        "MobileNetV3",
        "yfinance",
      ],
    },
    {
      title: "Concepts",
      icon: Brain,
      skills: [
        "Artificial Intelligence",
        "Machine Learning",
        "Deep Learning",
        "Image Analysis",
        "Data Analytics",
        "Cloud Computing",
        "Generative AI",
        "Semantic Search",
        "Document Retrieval",
        "Multi-turn Conversation Handling",
        "Tool Fallback Logic",
        "Real-time Streaming",
        "Auto AI",
      ],
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: ["Project Management", "Teamwork", "Creative Problem-Solving", "Continuous Learning"],
    },
  ]

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground glow-text">Skills</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              /* Added card hover animations and red theme */
              <Card key={index} className="card-hover hover-glow bg-card border-primary/30">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <category.icon className="w-6 h-6 text-primary" />
                    <h3 className="text-lg font-semibold text-card-foreground">{category.title}</h3>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      /* Updated badge colors to match red theme */
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs bg-primary/20 text-primary border-primary/30"
                      >
                        {skill}
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
