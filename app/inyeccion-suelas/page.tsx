import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import Head from "next/head";

export default function InyeccionSuelasPage() {
    return (
    <>
        <Head>
            <title>Inyección de Suelas - Ecopolmex</title>
            <meta name="description" content="Nuestro servicio de inyección de suelas utiliza tecnología de punta para producir suelas de alta calidad y precisión para todo tipo de calzado." />
        </Head>
      <main>
        <Header />
        <section className="pt-24 pb-12 bg-white">
          <div className="container mx-auto pt-40">
            <h1 className="text-4xl font-bold text-[#003B7E] mb-6">Inyección de Suelas</h1>
            <p className="text-lg text-gray-600 mb-8">
              Nuestro servicio de inyección de suelas utiliza tecnología de punta para producir suelas de alta calidad y
              precisión para todo tipo de calzado.
            </p>
            {/* Add more content specific to Inyección de Suelas here */}
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
    </>
    )
  }
  
  