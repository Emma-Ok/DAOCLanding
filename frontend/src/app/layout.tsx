import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk, DM_Sans } from "next/font/google"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-heading",
})

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
})

export const metadata: Metadata = {
  title: "Audiovisual Artist & Graphic Designer | Creative Portfolio",
  description:
    "Professional audiovisual content creation, graphic design, and visual storytelling. Specializing in album covers, music videos, reels, and social media content.",
  keywords: "audiovisual artist, graphic designer, album covers, music videos, reels, social media content",
  openGraph: {
    title: "Audiovisual Artist & Graphic Designer",
    description: "Creative visual content that connects and inspires",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" className={`dark ${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="antialiased bg-black text-foreground">{children}</body>
    </html>
  )
}
