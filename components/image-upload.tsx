"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Upload, X, ImageIcon } from "lucide-react"

interface ImageUploadProps {
  onImageUpload?: (file: File) => void
  maxImages?: number
  acceptedTypes?: string[]
  className?: string
}

export function ImageUpload({
  onImageUpload,
  maxImages = 5,
  acceptedTypes = ["image/jpeg", "image/png", "image/webp"],
  className = "",
}: ImageUploadProps) {
  const [uploadedImages, setUploadedImages] = useState<File[]>([])
  const [dragActive, setDragActive] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFiles = (files: FileList | null) => {
    if (!files) return

    const validFiles = Array.from(files).filter(
      (file) => acceptedTypes.includes(file.type) && uploadedImages.length < maxImages,
    )

    validFiles.forEach((file) => {
      if (uploadedImages.length < maxImages) {
        setUploadedImages((prev) => [...prev, file])
        onImageUpload?.(file)
      }
    })
  }

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)
    handleFiles(e.dataTransfer.files)
  }

  const removeImage = (index: number) => {
    setUploadedImages((prev) => prev.filter((_, i) => i !== index))
  }

  return (
    <div className={`space-y-4 ${className}`}>
      <Card
        className={`border-2 border-dashed transition-all duration-300 ${
          dragActive ? "border-primary bg-primary/5" : "border-primary/30 hover:border-primary/50"
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        <CardContent className="p-8 text-center">
          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="w-8 h-8 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Upload Images</h3>
              <p className="text-muted-foreground mb-4">Drag and drop images here, or click to select files</p>
              <Button onClick={() => fileInputRef.current?.click()} className="bg-primary hover:bg-primary/90">
                <ImageIcon className="w-4 h-4 mr-2" />
                Choose Files
              </Button>
            </div>
          </div>
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept={acceptedTypes.join(",")}
            onChange={(e) => handleFiles(e.target.files)}
            className="hidden"
          />
        </CardContent>
      </Card>

      {uploadedImages.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {uploadedImages.map((file, index) => (
            <Card key={index} className="relative group overflow-hidden">
              <CardContent className="p-2">
                <div className="aspect-square relative bg-muted rounded-lg overflow-hidden">
                  <img
                    src={URL.createObjectURL(file) || "/placeholder.svg"}
                    alt={`Upload ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <Button
                    size="sm"
                    variant="destructive"
                    className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 w-6 h-6 p-0"
                    onClick={() => removeImage(index)}
                  >
                    <X className="w-3 h-3" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground mt-2 truncate">{file.name}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      <p className="text-sm text-muted-foreground">
        {uploadedImages.length}/{maxImages} images uploaded
      </p>
    </div>
  )
}
