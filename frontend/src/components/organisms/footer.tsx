"use client"

import { SocialLinks } from "@/components/molecules/social-links"

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-black relative">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-accent/30 to-transparent"></div>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8">
          <SocialLinks />
        </div>
        <p className="text-sm text-muted-foreground">© 2024 [DAOC]. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}
