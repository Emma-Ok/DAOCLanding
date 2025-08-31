import { SidebarProvider } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/organisms/app-sidebar"
import { HeroSection } from "@/components/organisms/hero-section"
import { AlbumShowcase } from "@/components/organisms/album-showcase"
import { PortfolioSection } from "@/components/organisms/portfolio-section"
import { AboutSection } from "@/components/organisms/about-section"
import { ContactSection } from "@/components/organisms/contact-section"
import { Footer } from "@/components/organisms/footer"

export function LandingPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-black">
        <AppSidebar />
        <main className="flex-1 overflow-x-hidden">
          <HeroSection />
          <div className="gradient-divider" />
          <AlbumShowcase />
          <div className="gradient-divider" />
          <PortfolioSection />
          <div className="gradient-divider" />
          <AboutSection />
          <div className="gradient-divider" />
          <ContactSection />
          <Footer />
        </main>
      </div>
    </SidebarProvider>
  )
}
