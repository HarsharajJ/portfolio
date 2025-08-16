"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { VideoIntro } from "@/components/video-intro"
import { ParticleBackground } from "@/components/particle-background"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showIntro, setShowIntro] = useState(false)
  const [introComplete, setIntroComplete] = useState(false)
  const [isInitialized, setIsInitialized] = useState(false)

  useEffect(() => {
    if (!isInitialized) {
      const navigationEntries = performance.getEntriesByType("navigation") as PerformanceNavigationTiming[]
      const isRefresh =
        navigationEntries.length > 0 &&
        (navigationEntries[0].type === "reload" || navigationEntries[0].type === "navigate")

      const hasSeenIntroThisSession = sessionStorage.getItem("intro-seen-this-session")

      if (isRefresh || !hasSeenIntroThisSession) {
        console.log("[v0] Showing intro - refresh or first visit")
        setShowIntro(true)
        setIntroComplete(false)
        if (isRefresh) {
          sessionStorage.removeItem("intro-seen-this-session")
        }
      } else {
        console.log("[v0] Skipping intro - navigation within session")
        setShowIntro(false)
        setIntroComplete(true)
      }
      setIsInitialized(true)
    }
  }, [isInitialized])

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro-seen-this-session", "true")
    setShowIntro(false)
    setIntroComplete(true)
  }

  if (!isInitialized) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center">
        <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    )
  }

  return (
    <>
      {showIntro && <VideoIntro onComplete={handleIntroComplete} />}

      <div className={`transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}>
        <ParticleBackground />
        {children}
      </div>
    </>
  )
}
