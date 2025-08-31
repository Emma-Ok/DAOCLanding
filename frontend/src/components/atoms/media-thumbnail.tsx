"use client"

import Image from "next/image"
import { Play, ImageIcon } from "lucide-react"

interface MediaThumbnailProps {
  src: string
  alt: string
  type: "image" | "video"
  onClick: () => void
}

export function MediaThumbnail({ src, alt, type, onClick }: MediaThumbnailProps) {
  return (
    <div className="relative aspect-square overflow-hidden rounded-lg bg-card cursor-pointer group" onClick={onClick}>
      <div className="relative w-full h-full">
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 300px"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
        <div className="text-center text-primary-foreground">
          {type === "video" ? (
            <Play className="w-12 h-12 mx-auto mb-2" />
          ) : (
            <ImageIcon className="w-12 h-12 mx-auto mb-2" />
          )}
          <p className="text-sm font-medium">Ver {type === "video" ? "video" : "imagen"}</p>
        </div>
      </div>

      {/* Type Indicator */}
      <div className="absolute top-3 right-3">
        {type === "video" ? (
          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
            <Play className="w-4 h-4 text-accent-foreground" />
          </div>
        ) : (
          <div className="w-8 h-8 bg-background/90 rounded-full flex items-center justify-center">
            <ImageIcon className="w-4 h-4 text-foreground" />
          </div>
        )}
      </div>
    </div>
  )
}
