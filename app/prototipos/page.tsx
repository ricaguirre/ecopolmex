import { Contact } from "@/components/ui/contact"
import { Footer } from "@/components/ui/footer"
import { Header } from "@/components/ui/header"
import Head from "next/head"



export default function PrototiposPage() {
    return (
      <>
          <Head>
            <title>Prototipos e Inyección - Ecopolmex</title>
        </Head>
      <main>
        <Header />
        <section className="pt-24 pb-12 bg-white">
          <div className="container mx-auto pt-40">
            <h1 className="text-4xl font-bold text-[#003B7E] mb-6">Prototipos e Inyección 3D</h1>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro servicio de prototipos e inyección 3D permite a nuestros clientes visualizar y probar sus diseños
              antes de la producción a gran escala.
            </p>
            {/* Add more content specific to Prototipos e Inyección 3D here */}
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </> 
    )
  }
  