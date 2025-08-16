"use client"

import { useState, useEffect, useRef } from "react"

interface VideoIntroProps {
  onComplete: () => void
}

export function VideoIntro({ onComplete }: VideoIntroProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    const handleVideoEnd = () => {
      video.pause()
      video.currentTime = 0
      video.muted = true
      setIsVisible(false)
      setTimeout(onComplete, 500)
    }

    const handleVideoError = () => {
      console.log("[v0] Video failed to load, skipping intro")
      handleVideoEnd()
    }

    const handleVideoLoaded = () => {
      setVideoLoaded(true)
      console.log("[v0] Video loaded successfully")
    }

    video.addEventListener("ended", handleVideoEnd)
    video.addEventListener("error", handleVideoError)
    video.addEventListener("loadeddata", handleVideoLoaded)

    const checkVideoAndPlay = async () => {
      try {
        // Ensure muted autoplay (supported by browsers)
        video.muted = true
        video.volume = 0.8
        await video.play()
        console.log("[v0] Video playing (muted for autoplay)")
      } catch (error) {
        console.log("[v0] Autoplay failed or video not found, skipping intro")
        handleVideoEnd()
      }
    }

    setTimeout(checkVideoAndPlay, 100)

    return () => {
      if (video) {
        video.pause()
        video.currentTime = 0
        video.muted = true
      }
      video.removeEventListener("ended", handleVideoEnd)
      video.removeEventListener("error", handleVideoError)
      video.removeEventListener("loadeddata", handleVideoLoaded)
    }
  }, [onComplete])

  const handleSkip = () => {
    console.log("[v0] User skipped intro")
    const video = videoRef.current
    if (video) {
      video.pause()
      video.currentTime = 0
      video.muted = true
    }
    setIsVisible(false)
    setTimeout(onComplete, 500)
  }

  if (!isVisible) return null

  return (
    <div
      className={`fixed inset-0 z-50 bg-black flex items-center justify-center transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}
    >
      {!videoLoaded && (
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <div className="mb-8">
            <div className="w-16 h-16 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
          <div className="text-white text-lg font-semibold animate-pulse">Loading Experience...</div>
        </div>
      )}

      <video
        ref={videoRef}
        className="max-w-full max-h-full object-contain"
        autoPlay
        muted
        playsInline
        preload="auto"
        poster="/placeholder.jpg"
        style={{ display: videoLoaded ? "block" : "none" }}
      >
        <source src="/intro-video.MP4" type="video/mp4" />
        <source src="/intro-video.webm" type="video/webm" />
        Your browser does not support the video tag.
      </video>

      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-sm px-6 py-3 rounded-full bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm z-10"
      >
        Skip Intro
      </button>
    </div>
  )
}
