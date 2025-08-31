"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroContent() {
  const handleScrollToPortfolio = () => {
    const element = document.querySelector("#portfolio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
      <h1 className="text-5xl md:text-7xl font-bold text-primary-foreground mb-6 leading-tight">
        Diseño audiovisual que <span className="text-accent">conecta</span>
      </h1>

      <p className="text-xl md:text-2xl text-primary-foreground/90 mb-4 font-light">Portadas • Videos • Reels</p>

      <p className="text-lg text-primary-foreground/80 mb-12 max-w-2xl mx-auto leading-relaxed">
        Transformo ideas en experiencias visuales impactantes que cuentan historias y conectan con tu audiencia.
      </p>

      <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
        <Button
          size="lg"
          onClick={handleScrollToPortfolio}
          className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg font-semibold group"
        >
          Ver Portfolio
          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </Button>

        <Button
          size="lg"
          variant="outline"
          onClick={handleScrollToContact}
          className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-8 py-4 text-lg font-semibold bg-transparent"
        >
          Contactar
        </Button>
      </div>
    </div>
  )
}
