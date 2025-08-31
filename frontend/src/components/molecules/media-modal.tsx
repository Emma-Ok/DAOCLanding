"use client"

import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"

interface MediaItem {
  id: string
  title: string
  type: "image" | "video"
  media: string
}

interface MediaModalProps {
  item: MediaItem | null
  isOpen: boolean
  onClose: () => void
}

export function MediaModal({ item, isOpen, onClose }: MediaModalProps) {
  if (!item) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl w-full p-0 bg-background border-border">
        <DialogHeader className="p-6 pb-0">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-xl font-bold text-foreground">{item.title}</DialogTitle>
            <Button variant="ghost" size="sm" onClick={onClose} className="h-8 w-8 p-0">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        <div className="p-6">
          <div className="relative aspect-video bg-muted rounded-lg overflow-hidden">
            {item.type === "video" ? (
              <video src={item.media} controls className="w-full h-full object-cover" autoPlay muted />
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
        </div>
      </DialogContent>
    </Dialog>
  )
}
