export function Portfolio() {
    return (
      <section id="portafolio" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-center text-[#00BFB3] mb-6">EMPRESA AMBIENTALMENTE RESPONSABLE</p>
            <h2 className="text-3xl font-extrabold text-[#003B7E] mb-6">Un poco de nuestro trabajo</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Te presentamos un poco de nuestro trabajo, nuestros materiales y la seriedad con la que damos el mejor servicio.
            </p>
          </div>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[...Array(9)].map((_, i) => (
              <div key={i} className="aspect-square relative overflow-hidden rounded-lg bg-[#f9fafb]">
                <img
                  src={`/images/${i + 2}.png`}
                  alt={`Portfolio item ${i + 1}`}
                  className="absolute inset-0 w-full h-full object-contain p-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
  }
  
  