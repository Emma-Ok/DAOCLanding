"use client"

import { SidebarMenu } from "@/components/ui/sidebar"
import { NavItem } from "@/components/atoms/nav-item"
import { Camera, User, MessageCircle, Home } from "lucide-react"

const menuItems = [
  { title: "Inicio", icon: Home, href: "#hero", id: "hero" },
  { title: "Portfolio", icon: Camera, href: "#portfolio", id: "portfolio" },
  { title: "Sobre Mí", icon: User, href: "#about", id: "about" },
  { title: "Contacto", icon: MessageCircle, href: "#contact", id: "contact" },
]

interface NavigationMenuProps {
  activeSection?: string;
}

export function NavigationMenu({ activeSection = "" }: NavigationMenuProps) {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <SidebarMenu className="px-3">
      {menuItems.map((item) => (
        <NavItem 
          key={item.title} 
          title={item.title} 
          icon={item.icon} 
          href={item.href} 
          onClick={handleNavClick}
          isActive={activeSection === item.id} 
        />
      ))}
    </SidebarMenu>
  )
}
