import Image from "next/image";
import Link from "next/link";

// const getAssetPath = (path: string): string => {
//   const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '/ecopolmex';
//   return `${basePath}${path}`;
// };

export function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto grid gap-12 px-4 md:grid-cols-2 md:items-center">
        <div className="space-y-8">
          <p className="text-[#00BFB3]">Sobre nosotros</p>
          <h2 className="text-4xl font-extrabold text-[#3a4f66]">Innovación, Calidad Y Durabilidad En Cada Paso</h2>
          <p className="text-lg justify-center text-[#3a4f66]">
            En Ecopolmex, nos dedicamos a la innovación sostenible en la industria del calzado. 
            Nuestra experiencia en la formulación de polímeros y fabricación de suelas nos permite 
            ofrecer soluciones que combinan calidad superior con responsabilidad ambiental. 
            Trabajamos incansablemente para desarrollar materiales que no solo cumplan con los 
            más altos estándares de calidad, sino que también contribuyan a un futuro más sostenible.
          </p>
          <Link
            href="#servicios"
            className="inline-flex rounded-full bg-[#00BFB3] px-8 py-3 font-medium text-white transition-colors hover:bg-[#00BFB3]/90"
          >
            Conoce más
          </Link>
        </div>
        <div className="flex justify-center items-center">
          <div className="relative w-full aspect-square max-w-[500px]">
            <Image
              src={'/images/1.png'} // src={getAssetPath('/images/1.png')}
              alt="1"
              fill
              className="rounded-lg object-cover"
              style={{ width: '100%', height: '100%' }}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

