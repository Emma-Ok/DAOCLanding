import { ToolBadge } from "@/components/atoms/tool-badge"

const tools = [
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe After Effects",
  "Premiere Pro",
  "Final Cut Pro",
  "Cinema 4D",
  "Figma",
  "DaVinci Resolve",
]

export function ToolsList() {
  return (
    <div>
      <h3 className="text-xl font-bold text-foreground mb-6">Herramientas Principales</h3>
      <div className="flex flex-wrap gap-3">
        {tools.map((tool, index) => (
          <ToolBadge key={index} name={tool} />
        ))}
      </div>
    </div>
  )
}
