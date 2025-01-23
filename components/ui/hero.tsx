import Image from "next/image"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative min-h-[800px] overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/fondoTR.png"
          alt="Background Texture"
          fill
          className="object-cover"
          priority
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, #003B7E 30%, rgba(0, 59, 126, 0.95) 45%, rgba(0, 59, 126, 0.8) 55%, rgba(0, 59, 126, 0) 100%)",
          }}
        />
      </div>
      <div className="relative z-10 container mx-auto min-h-[600px] grid grid-cols-1 items-center gap-12 py-24 lg:grid-cols-2 pt-40">
        {/* Left Column: Description */}
        <div className="space-y-8">
          <p className="text-[#00BFB3]">EMPRESA AMBIENTALMENTE RESPONSABLE</p>
          <h1 className="text-5xl font-bold text-white">
            Pisando fuerte a un futuro sustentable
          </h1>
          <p className="text-lg text-white/90">
            Somos pioneros en la formulación de polímeros, dedicándonos a la venta de TR para la
            industria del calzado. Además somos fabricantes de suela y ofrecemos servicios integrales
            para la reincorporación de plásticos a la industria.
          </p>
          <div className="flex gap-4">
            <a
              href="tel:+524776701328"
              className="rounded-full bg-[#00BFB3] px-8 py-3 font-medium text-white transition-colors hover:bg-[#00BFB3]/90"
            >
              Llamada rápida
            </a>
            <Link
              href="#servicios"
              className="rounded-full border border-white px-8 py-3 font-medium text-white transition-colors hover:bg-white hover:text-[#003B7E]"
            >
              Saber más
            </Link>
          </div>
        </div>
        {/* Right Column: Logo Image */}
        <div className="hidden md:flex justify-center md:justify-end">
          <Image
            src="/images/logo.svg" // Replace with your logo image path
            alt="Logo"
            width={500} // Adjust the width as needed
            height={500} // Adjust the height as needed
            className="object-contain"
          />
        </div>
      </div>
    </section>
  )
}