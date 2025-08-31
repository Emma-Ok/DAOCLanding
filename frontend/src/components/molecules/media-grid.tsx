"use client"

import { useState } from "react"
import { MediaThumbnail } from "@/components/atoms/media-thumbnail"
import { MediaModal } from "@/components/molecules/media-modal"

interface MediaItem {
  id: string
  title: string
  type: "image" | "video"
  thumbnail: string
  media: string
}

const mediaItems: MediaItem[] = [
  {
    id: "1",
    title: "Sople azul - Contenido visual",
    type: "image",
    thumbnail: "/media/sopleazulimg.jpg",
    media: "/media/sopleazulimg.jpg",
  },
  {
    id: "2",
    title: "LA H3 - Video Musical",
    type: "video",
    thumbnail: "/media/lah3img.jpg",
    media: "/media/urban-beats-video.mp4",
  },
  {
    id: "3",
    title: "Acoustic Sessions - Reel",
    type: "video",
    thumbnail: "/portfolio-acoustic-reel-thumb.png",
    media: "/portfolio-acoustic-reel.mp4",
  },
  {
    id: "4",
    title: "Yung sarrias - Contenido visual",
    type: "image",
    thumbnail: "/media/zarriaimg.jpg",
    media: "/media/zarriaimg.jpg",
  },
  {
    id: "5",
    title: "Indie Folk - Portada",
    type: "image",
    thumbnail: "/portfolio-indie-folk-cover.png",
    media: "/portfolio-indie-folk-cover.png",
  },
  {
    id: "6",
    title: "Dance Floor - Contenido",
    type: "image",
    thumbnail: "/portfolio-dance-floor-promo.png",
    media: "/portfolio-dance-floor-promo.png",
  },
]

export function MediaGrid() {
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null)

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mediaItems.map((item) => (
          <MediaThumbnail
            key={item.id}
            src={item.thumbnail}
            alt={item.title}
            type={item.type}
            onClick={() => setSelectedItem(item)}
          />
        ))}
      </div>

      <MediaModal item={selectedItem} isOpen={!!selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  )
}
