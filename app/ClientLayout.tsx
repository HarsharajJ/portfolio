"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { VideoIntro } from "@/components/video-intro"

interface ClientLayoutProps {
  children: React.ReactNode
}

export default function ClientLayout({ children }: ClientLayoutProps) {
  const [showIntro, setShowIntro] = useState(true)
  const [introComplete, setIntroComplete] = useState(false)

  useEffect(() => {
    // Check if intro has been shown in this session
    const hasSeenIntro = sessionStorage.getItem("intro-seen")
    if (hasSeenIntro) {
      setShowIntro(false)
      setIntroComplete(true)
    }
  }, [])

  const handleIntroComplete = () => {
    sessionStorage.setItem("intro-seen", "true")
    setShowIntro(false)
    setIntroComplete(true)
  }

  return (
    <>
      {/* <CHANGE> Added video intro that shows before main content */}
      {showIntro && <VideoIntro onComplete={handleIntroComplete} />}

      {/* <CHANGE> Only show main content after intro is complete */}
      <div className={`transition-opacity duration-500 ${introComplete ? "opacity-100" : "opacity-0"}`}>{children}</div>
    </>
  )
}
