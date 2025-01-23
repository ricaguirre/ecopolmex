'use client'

import { ArrowDownCircle, Atom, Award, Ban, Factory, Leaf } from 'lucide-react'

const services = [
  {
    icon: Atom,
    title: "Abrasión menor a 260 mm3",
    description: ""
  },
  {
    icon: ArrowDownCircle,
    title: "Resultado menor a 200% en flexión",
    description: ""
  },
  {
    icon: Award,
    title: "Calidad asegurada",
    description: "Calidad comprobada con resultados de laboratorio."
  },
  {
    icon: Leaf,
    title: "TR biodegradable",
    description: "Reduce el impacto ambiental fabricando tus productos con nuestro material biodegradable."
  },
  {
    icon: Factory,
    title: "Maquila de peletizado",
    description: "Cotiza con nosotros para reincorporar materiales a la industria."
  },
  {
    icon: Ban,
    title: "Sin carga adicional",
    description: "Creemos en el comercio justo, vendemos TR, no carbonato."
  }
]

export function Services() {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <h3 className="text-lg font-medium text-[#00BFB3]">Nuestros servicios</h3>
          <h2 className="mt-3 text-4xl font-bold text-[#003B7E]">Cómo podemos ayudarte</h2>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-gray-600">
            Te ofrecemos diversos servicios de alta calidad. En Ecopolmex, estamos comprometidos 
            con productos sostenibles, innovando para un futuro más verde.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md"
              >
                <Icon className="h-12 w-12 text-[#003B7E]" />
                <h3 className="mt-4 text-xl font-bold text-[#003B7E]">{service.title}</h3>
                {service.description && (
                  <p className="mt-2 text-gray-600">{service.description}</p>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

