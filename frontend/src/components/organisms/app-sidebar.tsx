"use client"

import { useState, useEffect } from "react"
import { Sidebar, SidebarContent, SidebarHeader, SidebarFooter } from "@/components/ui/sidebar"
import { Logo } from "@/components/atoms/logo"
import { NavigationMenu } from "@/components/molecules/navigation-menu"
import { SocialLinks } from "@/components/molecules/social-links"

export function AppSidebar() {
  const [activeSection, setActiveSection] = useState("hero")
  
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["hero", "portfolio", "about", "contact"]
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }
    
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  
  return (
    <Sidebar className="sidebar-enhanced">
      <SidebarHeader className="p-6">
        <div className="animate-pulse-subtle">
          <Logo />
        </div>
      </SidebarHeader>

      <SidebarContent>
        <NavigationMenu activeSection={activeSection} />
      </SidebarContent>

      <SidebarFooter className="p-6">
        <SocialLinks />
        <div className="text-center mt-4">
          <p className="text-xs text-sidebar-foreground/50">© 2025 [DAOC]</p>
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
