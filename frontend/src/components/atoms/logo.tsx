import { Camera } from "lucide-react"

interface LogoProps {
  size?: "sm" | "md" | "lg"
  showText?: boolean
}

export function Logo({ size = "md", showText = true }: LogoProps) {
  const sizeClasses = {
    sm: "w-8 h-8",
    md: "w-16 h-16",
    lg: "w-20 h-20",
  }

  const iconSizes = {
    sm: "w-4 h-4",
    md: "w-8 h-8",
    lg: "w-10 h-10",
  }

  return (
    <div className="flex flex-col items-center text-center">
      <div className={`${sizeClasses[size]} bg-accent rounded-full flex items-center justify-center mb-3`}>
        <Camera className={`${iconSizes[size]} text-accent-foreground`} />
      </div>
      {showText && (
        <>
          <h2 className="text-lg font-bold text-sidebar-foreground">[DAOC]</h2>
          <p className="text-sm text-sidebar-foreground/70">Artista Audiovisual</p>
        </>
      )}
    </div>
  )
}
