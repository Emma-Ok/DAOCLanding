"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { X, ExternalLink, Download, Calendar, User } from "lucide-react"
import type { PortfolioItem } from "./sections/portfolio-section"

interface PortfolioModalProps {
  item: PortfolioItem | null
  isOpen: boolean
  onClose: () => void
}

export function PortfolioModal({ item, isOpen, onClose }: PortfolioModalProps) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0">
        <div className="relative">
          {/* Close Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="absolute top-4 right-4 z-10 bg-background/80 hover:bg-background"
          >
            <X className="w-4 h-4" />
          </Button>

          {/* Media */}
          <div className="relative aspect-video bg-muted">
            {item.type === "video" ? (
              <video src={item.media} controls className="w-full h-full object-cover" poster={item.thumbnail}>
                Tu navegador no soporta el elemento de video.
              </video>
            ) : (
              <div className="relative w-full h-full">
                <Image 
                  src={item.media || "/placeholder.svg"} 
                  alt={item.title} 
                  fill 
                  sizes="(max-width: 768px) 100vw, 800px"
                  className="object-cover" 
                />
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-8">
            <DialogHeader className="mb-6">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <DialogTitle className="text-3xl font-bold text-foreground mb-2">{item.title}</DialogTitle>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    {item.client && (
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{item.client}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{item.year}</span>
                    </div>
                  </div>
                </div>

                {item.downloadLink && (
                  <Button variant="outline" asChild>
                    <a href={item.downloadLink} target="_blank" rel="noopener noreferrer">
                      <Download className="w-4 h-4 mr-2" />
                      Descargar
                    </a>
                  </Button>
                )}
              </div>
            </DialogHeader>

            {/* Description */}
            <div className="mb-6">
              <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
            </div>

            {/* Tags */}
            <div className="mb-8">
              <h4 className="text-sm font-semibold text-foreground mb-3">Etiquetas</h4>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  onClose()
                  const element = document.querySelector("#contact")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="bg-accent hover:bg-accent/90 text-accent-foreground flex-1"
              >
                <ExternalLink className="w-4 h-4 mr-2" />
                Solicitar proyecto similar
              </Button>

              <Button
                variant="outline"
                onClick={() => {
                  onClose()
                  const element = document.querySelector("#portfolio")
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" })
                  }
                }}
                className="flex-1"
              >
                Ver más trabajos
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
