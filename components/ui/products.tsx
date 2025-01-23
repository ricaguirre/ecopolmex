"use client"

import Link from "next/link"
import { useState } from "react"
import { GiBootPrints, GiDropletSplash, GiReceiveMoney } from "react-icons/gi"
import { MdOutlineRecycling } from "react-icons/md"

type Product = {
  name: string
  icon: React.ElementType
  link: string
}

const products: Product[] = [
  { name: "TR compacto, expanso y biodegradable", icon: GiReceiveMoney, link: "/tr" },
  { name: "Inyección de suelas", icon: GiBootPrints, link: "/inyeccion-suelas" },
  { name: "Prototipos e Inyección 3D", icon: GiDropletSplash, link: "/prototipos" },
  { name: "Servicios de Reciclaje Integral", icon: MdOutlineRecycling, link: "/reciclaje" },
]

export function Products() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section id="servicios" className="bg-white py-24" style={{ backgroundColor: "#f0f7fc" }}>
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl font-bold text-black mb-4">¿Qué ofrecemos?</h2>
        <p className="text-center text-lg text-gray-600 mb-12">
          Además de crear suelas para calzado, contamos con otros servicios que pueden interesarte.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg bg-white p-6 transition-transform duration-300 ease-in-out transform hover:scale-105 hover:border-2 hover:border-[#00BFB3]"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="flex flex-col items-center justify-center min-h-[250px]">
                <product.icon className="text-5xl text-[#003B7E] mb-4" />
                <h3 className="text-xl font-semibold text-center mb-4">{product.name}</h3>
                <Link
                  href={product.link}
                  className={`
                    absolute bottom-6 left-1/2 -translate-x-1/2
                    rounded-full bg-[#003B7E] px-6 py-2 text-white font-medium
                    transition-all duration-200 ease-in-out
                    ${hoveredIndex === index ? "opacity-100 transform translate-y-0" : "opacity-0 transform translate-y-4"}
                  `}
                >
                  Ver más
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


