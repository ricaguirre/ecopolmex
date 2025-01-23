'use client'

import { motion } from "framer-motion"
import { ArrowDownCircle, Atom, Award, Ban, Factory, Leaf } from 'lucide-react'
import { useInView } from "react-intersection-observer"

const features = [
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

export function FeatureGrid() {
  const [ref, inView] = useInView({
    // triggerOnce: true,
    threshold: 0.1
  })

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3 // Increased from 0.1
      }
    }
  }

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8// Increased from 0.5
      }
    }
  }

  return (
    <section className="py-24 bg-white" style={{ backgroundColor: '#fafbfc'}}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
        <p className="text-[#00BFB3] mb-4">Nuestros servicios</p>
          <h2 className="text-3xl font-extrabold mb-6">Cómo podemos ayudarte</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Te ofrecemos diversos servicios de alta calidad. En Ecopolmex, estamos comprometidos 
            con productos sostenibles, innovando para un futuro más verde.
          </p>
        </div>
        
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm text-center"
            >
              <div className="flex flex-col items-center">
                <feature.icon className="h-12 w-12 text-[#003B7E] mb-4" />
                <h3 className="text-xl font-bold text-[#003B7E] mb-2">{feature.title}</h3>
                {feature.description && (
                  <p className="text-gray-600">{feature.description}</p>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-24">
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#003B7E] mb-3">Dale vida a tus diseños</h3>
            <p className="text-gray-600">Transforme sus ideas en realidad con nuestros materiales y colores.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#003B7E] mb-3">Dureza a tu elección</h3>
            <p className="text-gray-600">Entregamos material de la dureza necesaria para tus proyectos.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#003B7E] mb-3">Gran gama de colores</h3>
            <p className="text-gray-600">Ofrecemos TR en una amplia gama de colores.</p>
          </div>
          <div className="text-center">
            <h3 className="text-xl font-bold text-[#003B7E] mb-3">Venta de pigmentos</h3>
            <p className="text-gray-600">Te ofrecemos igualación y venta de diferentes pigmentos en polvo.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

