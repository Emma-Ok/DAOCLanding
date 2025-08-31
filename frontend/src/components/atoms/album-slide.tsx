import Image from "next/image"

interface AlbumSlideProps {
  image: string
  title: string
  artist?: string
}

export function AlbumSlide({ image, title, artist }: AlbumSlideProps) {
  return (
    <div className="flex-shrink-0 w-80 mx-4">
      <div className="relative group cursor-pointer">
        <div className="aspect-square overflow-hidden rounded-lg bg-card relative">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
        <div className="absolute bottom-4 left-4 right-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <h3 className="font-bold text-lg mb-1">{title}</h3>
          {artist && <p className="text-sm text-white/80">{artist}</p>}
        </div>
      </div>
    </div>
  )
}
