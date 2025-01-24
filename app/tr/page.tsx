import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";
import Head from "next/head";

export default function TRPage() {
  return (
    <>
        <Head>
            <title>TR - Ecopolmex</title>
        </Head>
    <main>
      <Header />
      <section className="pt-24 pb-12 bg-white">
        <div className="container mx-auto pt-40">
          <h1 className="text-4xl font-bold text-[#003B7E] mb-6">TR Compacto, Expanso y Biodegradable</h1>
          <p className="text-lg text-gray-600 mb-8">
            Nuestro TR (Termoplástico Rubber) es una solución innovadora y sostenible para la industria del calzado.
            Ofrecemos variedades compactas, expansas y biodegradables para satisfacer todas sus necesidades.
          </p>
          {/* Add more content specific to TR here */}
        </div>
      </section>
      <Contact />
      <Footer />
    </main>
    </>
  )
}

