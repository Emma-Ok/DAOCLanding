"use client"
import { AlbumCarousel } from "@/components/molecules/album-carousel"

export function AlbumShowcase() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Portadas Diseñadas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada portada cuenta una historia única, capturando la esencia musical en diseños impactantes
          </p>
        </div>
        <AlbumCarousel />
      </div>
    </section>
  )
}
