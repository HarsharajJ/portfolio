"use client"

import { useState, useEffect, useRef } from "react"

interface VideoIntroProps {
  onComplete: () => void
}

export function VideoIntro({ onComplete }: VideoIntroProps) {
  const [isVisible, setIsVisible] = useState(true)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [autoplayFailed, setAutoplayFailed] = useState(false)
  const [videoSrc, setVideoSrc] = useState("/intro-video.mp4")
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

    let cancelled = false

    const findValidSourceAndPlay = async () => {
      // Try common case-insensitive variants (deployments are case-sensitive)
      const candidates = ["/intro-video.mp4", "/intro-video.MP4", "/intro-video.webm"]

      let found: string | null = null
      for (const candidate of candidates) {
        try {
          const res = await fetch(candidate, { method: "HEAD" })
          if (res.ok) {
            found = candidate
            break
          }
        } catch (e) {
          // ignore network errors for HEAD
        }
      }

      if (cancelled) return

      if (!found) {
        console.log("[v0] No video source found; skipping intro")
        handleVideoEnd()
        return
      }

      setVideoSrc(found)

      try {
        // Attempt muted autoplay (allowed by most browsers)
        video.muted = true
        video.volume = 0.8
        await video.play()
        console.log("[v0] Video playing (muted for autoplay)")
      } catch (error) {
        console.log("[v0] Autoplay blocked or other error; showing Play CTA")
        // Don't skip the intro; show a manual play CTA instead
        setAutoplayFailed(true)
      }
    }

    setTimeout(findValidSourceAndPlay, 100)

    return () => {
      cancelled = true
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

  const handleManualPlay = async (unmute = true) => {
    const video = videoRef.current
    if (!video) return
    try {
      if (unmute) video.muted = false
      await video.play()
      setAutoplayFailed(false)
      console.log("[v0] Manual play started")
    } catch (e) {
      console.log("[v0] Manual play failed", e)
    }
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
        style={{ display: videoLoaded || autoplayFailed ? "block" : "none" }}
      >
        <source src={videoSrc} />
        Your browser does not support the video tag.
      </video>

      {/* Manual Play CTA when autoplay is blocked (common on deployed sites) */}
      {autoplayFailed && (
        <div className="absolute inset-0 flex items-center justify-center z-20">
          <button
            onClick={() => handleManualPlay(true)}
            className="px-6 py-3 bg-red-600 text-white rounded-md text-lg shadow-lg"
          >
            Play Intro
          </button>
        </div>
      )}

      <button
        onClick={handleSkip}
        className="absolute top-6 right-6 text-white/80 hover:text-white text-sm px-6 py-3 rounded-full bg-red-600/20 hover:bg-red-600/40 border border-red-500/30 hover:border-red-500/60 transition-all duration-300 backdrop-blur-sm z-10"
      >
        Skip Intro
      </button>
    </div>
  )
}
