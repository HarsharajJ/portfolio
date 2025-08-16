import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, Calendar } from "lucide-react"

export function Internships() {
  return (
    <section id="internships" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12 text-foreground slide-in-up">Internships</h2>

          <div className="space-y-8">
            <Card className="hover:shadow-lg transition-shadow card-hover bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      AI Company Specific Chatbot for Manipal Technologies Limited
                    </h3>
                    <p className="text-muted-foreground font-normal">Manipal Technologies Limited</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      Feb 2025
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">Completed</Badge>

                <div className="space-y-3">
                  <p className="text-card-foreground">
                    Developed a company-specific AI chatbot using FastAPI, LangChain, and LangGraph, powered by Groq
                    Qwen 2.5 LLM and Cohere embeddings.
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Key Achievements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-card-foreground ml-4">
                      <li>Implemented semantic search and document retrieval via FAISS from PDFs and web data</li>
                      <li>
                        Built secure, role-based APIs for admin features like PDF upload, URL upload, and chat
                        management
                      </li>
                      <li>
                        Integrated multi-turn conversation handling, tool fallback logic, and real-time streaming with
                        LangGraph
                      </li>
                      <li>
                        Deployed backend on Render and frontend (Next.js, TypeScript, Tailwind CSS) on Vercel for
                        scalable performance
                      </li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "FastAPI",
                        "LangChain",
                        "LangGraph",
                        "Groq Qwen 2.5 LLM",
                        "Cohere Embeddings",
                        "FAISS",
                        "Next.js",
                        "TypeScript",
                        "Tailwind CSS",
                        "Render",
                        "Vercel",
                      ].map((tech, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground hover:bg-muted"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow card-hover bg-card border-border">
              <CardHeader>
                <CardTitle className="flex items-start gap-3">
                  <Briefcase className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="text-xl font-semibold text-card-foreground">
                      IBM SkillsBuild 4-Weeks Internship on AI & Cloud Technologies
                    </h3>
                    <p className="text-muted-foreground font-normal">Edunet Foundation under IBM SkillsBuild Program</p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                      <Calendar className="w-4 h-4" />
                      July 2025 - August 2025 (Upcoming)
                    </div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Badge className="bg-primary/20 text-primary border-primary/30">Selected</Badge>

                <div className="space-y-3">
                  <p className="text-card-foreground">
                    Selected for a 4-week internship focusing on Emerging Technologies (AI & Cloud).
                  </p>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Key Highlights:</h4>
                    <ul className="list-disc list-inside space-y-1 text-card-foreground ml-4">
                      <li>Access to IBM SkillsBuild e-Learning Platform with industry-relevant curated courses</li>
                      <li>
                        Project-based, collaborative learning environments with masterclasses by Subject Matter Experts
                      </li>
                      <li>Real-world challenge solving and project development under mentorship</li>
                      <li>Certification from IBM SkillsBuild program and Edunet Foundation</li>
                    </ul>
                  </div>

                  <div className="space-y-2">
                    <h4 className="font-semibold text-card-foreground">Topics Covered:</h4>
                    <div className="flex flex-wrap gap-2">
                      {[
                        "Cloud Computing",
                        "Artificial Intelligence",
                        "Data Analytics",
                        "Chatbot AI",
                        "ML Problem Statements",
                        "Auto AI Experiment",
                        "IBM Cloud",
                        "Final Project Evaluation",
                      ].map((topic, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-xs border-border text-muted-foreground hover:bg-muted"
                        >
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
