'use client'
import Image from "next/image"
import { ToolsList } from "@/components/molecules/tools-list"

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Sobre el <span className="text-accent ">Artista</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="relative w-full max-w-sm mx-auto rounded-2xl shadow-lg aspect-[3/4]">
              <Image
                src="/media/enano.jpg"
                alt="Retrato profesional del artista"
                fill
                sizes="(max-width: 768px) 100vw, 400px"
                className="rounded-2xl object-cover"
              />
            </div>
          </div>

          <div>
            <div className="space-y-4 text-muted-foreground leading-relaxed mb-8">
              <p>
                Soy un diseñador audiovisual especializado en crear contenido visual impactante para la industria
                musical. Con más de 8 años de experiencia, trabajo con artistas independientes y sellos discográficos
                para desarrollar identidades visuales únicas.
              </p>
              <p>
                Mi pasión es combinar diseño gráfico, fotografía y video para contar historias que conecten con las
                audiencias y amplifiquen el mensaje de cada artista.
              </p>
            </div>
          </div>
        </div>

        <ToolsList />
      </div>
    </section>
  )
}
