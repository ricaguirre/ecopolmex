import RootLayout from "@/app/layout";
import { Contact } from "@/components/ui/contact";
import { Footer } from "@/components/ui/footer";
import { Header } from "@/components/ui/header";

export default function ReciclajePage() {
    return (
    <>
    <RootLayout title="Servicios de Reciclaje - Ecopolmex" description="Nuestros servicios de reciclaje">
      <main>
        <Header />
        <section className="pt-24 pb-12 bg-white">
          <div className="container mx-auto pt-40">
            <h1 className="text-4xl font-bold text-[#003B7E] mb-6">Servicios de Reciclaje Integral</h1>
            <p className="text-lg text-gray-600 mb-8">
              Nuestros servicios de reciclaje integral ayudan a reducir el impacto ambiental de la industria del calzado,
              reincorporando materiales a la cadena de producción.
            </p>
            {/* Add more content specific to Servicios de Reciclaje here */}
          </div>
        </section>
        <Contact />
        <Footer />
      </main>
      </RootLayout>
    </>
    )
  }
  
  