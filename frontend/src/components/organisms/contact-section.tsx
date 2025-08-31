"use client"

import { ContactForm } from "@/components/molecules/contact-form"

export function ContactSection() {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contacto</h2>
          <p className="text-lg text-muted-foreground">
            ¿Tienes un proyecto en mente? Me encantaría escucharte y ayudarte a hacerlo realidad.
          </p>
        </div>

        <ContactForm />
      </div>
    </section>
  )
}
