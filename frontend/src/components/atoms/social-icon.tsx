import { useState } from "react"
import type { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"

interface SocialIconProps {
  icon: LucideIcon
  href: string
  label: string
}

export function SocialIcon({ icon: Icon, href, label }: SocialIconProps) {
  const [isHovered, setIsHovered] = useState(false)
  
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 group relative overflow-hidden",
        "bg-black/30 backdrop-blur-sm border border-accent/20 hover:border-accent/60"
      )}
      aria-label={label}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Icon className={cn(
        "w-5 h-5 transition-all duration-300",
        isHovered ? "text-accent-foreground scale-110" : "text-accent"
      )} />
      
      {/* Efecto de brillo en hover */}
      <div className={cn(
        "absolute inset-0 bg-gradient-to-tr from-accent/0 via-accent/30 to-accent/0 opacity-0 transition-opacity duration-300",
        isHovered ? "opacity-100" : "opacity-0"
      )} />
    </a>
  )
}
