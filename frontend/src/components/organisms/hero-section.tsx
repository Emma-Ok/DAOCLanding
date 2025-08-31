"use client"

import Image from "next/image"
import { HeroContent } from "@/components/molecules/hero-content"
import { ScrollIndicator } from "@/components/atoms/scroll-indicator"

export function HeroSection() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/media/zarriabg.jpg"
          alt="Creative background"
          fill
          sizes="100vw"
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
      </div>

      <HeroContent />
      <ScrollIndicator />
    </section>
  )
}
