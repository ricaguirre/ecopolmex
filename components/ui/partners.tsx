'use client'

import useEmblaCarousel from 'embla-carousel-react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { useCallback } from 'react'

const partners = [
  {
    name: "Grupo Karsten",
    activity: "Zapatería",
    description: "Es una empresa dedicada a la elaboración de zapatos cómodos, a la moda y duraderos con materiales de alta calidad. Con más de 30 años de experiencia, se han convertido en especialistas en la creación de zapatos para niños. Actualmente, trabajan con temáticas de plaza sésamo, Dragon Ball y productos de la empresa Distroller.",
    logo: "/images/grupo-karsten.jpg"
  },
  {
    name: "Andrea",
    activity: "Moda",
    description: "Andrea es una empresa en la industria del calzado reconocida por su amplia variedad de zapatos de moda y alta calidad. Ecopolmex cuenta con una relación con Andrea, siendo sus maquiladores de material y suela de alta calidad, garantizando la durabilidad y el confort de sus productos finales.",
    logo: "/images/andrea.png"
  },
  {
    name: "Suelas Love",
    activity: "Fabricantes de suelas",
    description: "Suelas Love es una empresa ubicada en León, Guanajuato y se especializan en la creación de suelas y otros productos de plástico de uso industrial sin reforzamiento. Ecopolmex, se enorgullece de ser el proveedor de material personalizado de alta calidad para esta empresa.",
    logo: "images/suelas-love.jpg"
  },
  {
    name: "Industrias Innoplas",
    activity: "Transformación de LDPE y EVA",
    description: "Empresa dedicada a la transformación de polietileno de baja densidad y EVA para la industria automotriz; contamos con una relación de negocios de mas de 5 años, brindando el mejor servicio de manejo de residuos para que Industrias Innoplas pueda reincorporar sus residuos y cumpla con las regulaciones de sus clientes.",
    logo: "/images/innoplas.jpg"
  },
  {
    name: "Arabescato",
    activity: "Fabricación de calzado de piel",
    description: "Es una empresa especializada en la fabricación de calzado de piel, mantiene una relación sólida con Ecopolmex, quien le provee suelas de alta calidad. Esta colaboración asegura que Arabescato pueda ofrecer zapatos de piel con la calidad que sus clientes esperan.",
    logo: "/images/arabe.jpg"
  },
  {
    name: "Triturados Regionales",
    activity: "Triturado de diversos plásticos de ingeniería",
    description: "Ecopolmex sostiene una relación fructífera con Triturados Regionales, enfocada en la gestión y acomodo de diversos materiales de oportunidad. Juntos, Ecopolmex y Triturados Regionales están estableciendo estándares en la industria, demostrando que la colaboración y la estratégica son clave para la sustentabilidad.",
    logo: "/images/trit.jpg"
  },
  {
    name: "Biosuelas",
    activity: "Fabricantes de suelas",
    description: "Se dedican a la fabricación de suelas, vendiendo productos que reducen el impacto ambiental. Nuestra colaboración con Biosuelas hace posible que puedan ofrecer productos sustentables y de calidad.",
    logo: "/images/bio.jpg"
  },
  {
    name: "Metro E",
    activity: "Venta de calzado",
    description: "Ecopolmex se enorgullece de ser el proveedor confiable de suelas para Calzado Metro E, estableciendo una relación basada en la calidad del producto, la confiabilidad y el compromiso de excelencia y entrega puntual.",
    logo: "/images/metro-e.jpg"
  }
]

export function Partners() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: 'start',
    slidesToScroll: 1,
    dragFree: true,
    loop: true
  })

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  return (
    <section id="clientes" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <p className="text-center text-[#00BFB3] mb-4">Compradores de Ecopolmex</p>
        <h2 className="text-3xl font-bold text-center text-[#003B7E] mb-6">Nuestros clientes</h2>
        <p className="text-lg text-gray-600 max-w-4xl mx-auto mb-8">
        Nuestros clientes avalan la calidad de nuestros productos y servicios, así como una excelente relación con nuestra empresa.
            </p>
        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex gap-5">
              {partners.map((partner, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 sm:flex-[0_0_50%] md:flex-[0_0_33.333%]"
                >
                    <div className="rounded-lg bg-white p-6 shadow-sm h-full">
                        <p className="text-gray-600 mb-4">{partner.description}</p>
                        <div className="flex">
                            <div className="w-1/3 flex items-center justify-center">
                            <img
                                src={partner.logo || "/placeholder.svg"}
                                alt={`${partner.name} logo`}
                                className="w-24 h-24 rounded-full object-cover mx-auto text-center mb-4"
                            />
                            </div>
                            <div className="w-2/3 flex flex-col justify-center">
                            <h3 className="text-xl font-semibold text-left mb-2 ml-4">{partner.name}</h3>
                            <p className="text-gray-600 text-left ml-4">{partner.activity}</p>
                            </div>
                        </div>
                    </div>
                </div>
              ))}
            </div>
          </div>
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2 shadow-md hover:bg-gray-50"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </div>
      </div>
    </section>
  )
}

