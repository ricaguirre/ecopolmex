export function VideoSection() {
    return (
      <section id="procesos" className="py-24 bg-[#f0f7fc] w-full">
        <div className="w-full max-w-[2000px] mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-[#003B7E] mb-12">Nuestros procedimientos</h2>
          <div className="aspect-video max-w-4xl mx-auto rounded-lg overflow-hidden shadow-lg">
          <p className="text-center text-lg text-gray-600 mb-12">
          Revise algunos de nuestros procedimientos para asegurar la calidad de nuestros productos.
          </p>
          <video
            className="w-full h-full"
            controls
            preload="metadata"
          >
            <source src="/videos/video-ECOPOLMEX.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
            {/* <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/your-video-id"
              title="Ecopolmex Video"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe> */}
          </div>
        </div>
      </section>
    )
  }
  
  