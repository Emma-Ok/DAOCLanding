"use client"

import { useEffect, useRef } from "react"
import { AlbumSlide } from "@/components/atoms/album-slide"

const albumCovers = [
  {
    image: "/albumcovers/portada1.jpg",
    title: "En el tube",
    artist: "Sammzy",
  },
  {
    image: "/albumcovers/portada2.jpg",
    title: "Exportaciones",
    artist: "Trip n3a",
  },
  {
    image: "/albumcovers/portada3.jpg",
    title: "Al cielo",
    artist: "Sammzy",
  },
  {
    image: "/albumcovers/portada4.jpg",
    title: "No me aguantan",
    artist: "Breiking",
  },
  {
    image: "/albumcovers/portada5.jpg",
    title: "Mañosa",
    artist: "Jotap3 X FLAME",
  },
  {
    image: "/albumcovers/portada6.jpg",
    title: "Ele R",
    artist: "Sammzy x BTM ON VIBES",
  },
  {
    image: "/albumcovers/portada7.webp",
    title: "Hockey",
    artist: "Danny999",
  },
  {
    image: "/albumcovers/portada8.jpg",
    title: "Piraña",
    artist: "Guxxisoho x Trip N3A",
  },
]

export function AlbumCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    const scrollWidth = scrollContainer.scrollWidth
    const clientWidth = scrollContainer.clientWidth
    let scrollPosition = 0

    const scroll = () => {
      scrollPosition += 1
      if (scrollPosition >= scrollWidth - clientWidth) {
        scrollPosition = 0
      }
      scrollContainer.scrollLeft = scrollPosition
    }

    const interval = setInterval(scroll, 30)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative overflow-hidden">
      <div ref={scrollRef} className="flex overflow-x-hidden scrollbar-hide py-8" style={{ scrollBehavior: "auto" }}>
        {/* Duplicate albums for seamless loop */}
        {[...albumCovers, ...albumCovers].map((album, index) => (
          <AlbumSlide key={`${album.title}-${index}`} image={album.image} title={album.title} artist={album.artist} />
        ))}
      </div>
    </div>
  )
}
