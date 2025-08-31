"use client"

import { MediaGrid } from "@/components/molecules/media-grid"

export function PortfolioSection() {
  return (
    <section id="portfolio" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Fotografía y <span className="text-accent">Videos</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Una selección de trabajos audiovisuales que capturan momentos únicos y cuentan historias visuales
          </p>
        </div>

        <MediaGrid />
      </div>
    </section>
  )
}
