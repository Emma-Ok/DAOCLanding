import { Badge } from "@/components/ui/badge"

interface ToolBadgeProps {
  name: string
}

export function ToolBadge({ name }: ToolBadgeProps) {
  return (
    <Badge
      variant="secondary"
      className="px-4 py-2 text-sm bg-accent/10 text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
    >
      {name}
    </Badge>
  )
}
