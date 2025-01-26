'use client'

import { useState } from 'react'

export function Contact() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'submitted' | 'error'>('idle')

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    setFormStatus('submitting')

    // const formData = new FormData(event.currentTarget)
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000))
      setFormStatus('submitted')
      event.currentTarget.reset()
    } catch (error) {
      console.error(error)
      setFormStatus('error')
    }
  }

  return (
    <section id="contacto" className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h3 className="text-lg font-medium text-[#00BFB3]">¿Dónde nos ubicamos?</h3>
          <h2 className="mt-3 text-4xl font-bold text-[#003B7E]">Contáctanos</h2>
          <p className="mt-4 text-lg text-gray-600">
            Contacta a Ecopolmex para soluciones personalizadas en inyección de termoplásticos. 
            Estamos aquí para atender cada una de tus necesidades.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Contact Form */}
          <div className="rounded-lg bg-white p-8 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
                  Nombre
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#00BFB3] focus:outline-none focus:ring-1 focus:ring-[#00BFB3]"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Correo electrónico
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#00BFB3] focus:outline-none focus:ring-1 focus:ring-[#00BFB3]"
                />
              </div>

              <div>
                <label htmlFor="asunto" className="block text-sm font-medium text-gray-700">
                  Asunto
                </label>
                <input
                  type="text"
                  id="asunto"
                  name="asunto"
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#00BFB3] focus:outline-none focus:ring-1 focus:ring-[#00BFB3]"
                />
              </div>

              <div>
                <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700">
                  Mensaje
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  required
                  className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-[#00BFB3] focus:outline-none focus:ring-1 focus:ring-[#00BFB3]"
                />
              </div>

              <div>
                <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="inline-flex rounded-md bg-[#00BFB3] px-6 py-2 text-sm font-medium text-white transition-colors hover:bg-[#00BFB3]/90 disabled:opacity-50"
                >
                  {formStatus === 'submitting' ? 'Enviando...' : 'Enviar'}
                </button>

                {formStatus === 'submitted' && (
                  <p className="mt-2 text-green-600">¡Mensaje enviado con éxito!</p>
                )}
                {formStatus === 'error' && (
                  <p className="mt-2 text-red-600">Hubo un error al enviar el mensaje.</p>
                )}
              </div>
            </form>
          </div>

          {/* Google Maps */}
          <div className="h-[500px] overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.0594927539584!2d-101.68941941744384!3d21.113238199999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842bbf67c1de1e2f%3A0x9626fb386883e7bd!2sEcopolmex!5e0!3m2!1sen!2sus!4v1710799151824!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

