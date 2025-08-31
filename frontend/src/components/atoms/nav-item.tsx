"use client"

import { SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

export interface NavItemProps {
  title: string
  icon: LucideIcon
  href: string
  onClick: (href: string) => void
  isActive?: boolean
}

export function NavItem({ title, icon: Icon, href, onClick, isActive = false }: NavItemProps) {
  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        onClick={() => onClick(href)}
        className={cn(
          "w-full justify-start transition-all duration-300 relative group overflow-hidden",
          isActive 
            ? "bg-accent/20 text-accent font-medium" 
            : "hover:bg-sidebar-accent/10 hover:text-sidebar-accent-foreground"
        )}
      >
        <Icon className={cn("w-5 h-5 mr-2", isActive ? "text-accent" : "group-hover:text-accent")} />
        <span>{title}</span>
        
        {/* Animación de barra lateral cuando está activo */}
        {isActive && (
          <span className="absolute left-0 top-0 bottom-0 w-1 bg-accent" />
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
