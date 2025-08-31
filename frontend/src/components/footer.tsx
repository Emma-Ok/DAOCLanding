"use client"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Camera, Mail, Phone, MapPin, Instagram, Twitter, Youtube, Linkedin, ArrowUp } from "lucide-react"

const quickLinks = [
  { title: "Inicio", href: "#hero" },
  { title: "Servicios", href: "#services" },
  { title: "Portfolio", href: "#portfolio" },
  { title: "Sobre Mí", href: "#about" },
  { title: "Proceso", href: "#process" },
  { title: "Contacto", href: "#contact" },
]

const services = [
  "Portadas de Álbum",
  "Videos Musicales",
  "Reels & Contenido Vertical",
  "Contenido para Redes",
  "Identidad Visual",
  "Dirección Creativa",
]

const socialLinks = [
  { icon: Instagram, href: "https://instagram.com/nombreartista", label: "Instagram" },
  { icon: Twitter, href: "https://twitter.com/nombreartista", label: "Twitter" },
  { icon: Youtube, href: "https://youtube.com/nombreartista", label: "YouTube" },
  { icon: Linkedin, href: "https://linkedin.com/in/nombreartista", label: "LinkedIn" },
]

export function Footer() {
  const handleNavClick = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <Camera className="w-6 h-6 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">[NOMBRE_ARTISTA]</h3>
                <p className="text-primary-foreground/70 text-sm">Audiovisual Artist</p>
              </div>
            </div>
            <p className="text-primary-foreground/80 leading-relaxed mb-6">
              Creando experiencias visuales únicas que conectan, inspiran y trascienden lo ordinario.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-primary-foreground/10 hover:bg-accent rounded-lg flex items-center justify-center transition-all group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-primary-foreground/70 group-hover:text-accent-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegación</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-primary-foreground/70 hover:text-accent transition-colors text-left"
                  >
                    {link.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Servicios</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <span className="text-primary-foreground/70">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contacto</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent" />
                <a
                  href="mailto:hola@nombreartista.com"
                  className="text-primary-foreground/70 hover:text-accent transition-colors"
                >
                  hola@nombreartista.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent" />
                <a href="tel:+15551234567" className="text-primary-foreground/70 hover:text-accent transition-colors">
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-accent" />
                <span className="text-primary-foreground/70">Ciudad, País</span>
              </div>
            </div>

            <Button
              onClick={() => handleNavClick("#contact")}
              className="mt-6 bg-accent hover:bg-accent/90 text-accent-foreground"
            >
              Iniciar Proyecto
            </Button>
          </div>
        </div>

        <Separator className="my-12 bg-primary-foreground/20" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="text-primary-foreground/70 text-sm">
              © 2024 [DAOC]. Todos los derechos reservados.
            </p>
            <p className="text-primary-foreground/50 text-xs mt-1">
              Diseñado y desarrollado con pasión por la creatividad.
            </p>
          </div>

          <div className="flex items-center gap-6">
            <div className="flex gap-4 text-sm">
              <button className="text-primary-foreground/70 hover:text-accent transition-colors">
                Política de Privacidad
              </button>
              <button className="text-primary-foreground/70 hover:text-accent transition-colors">
                Términos de Servicio
              </button>
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={scrollToTop}
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent"
            >
              <ArrowUp className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  )
}
