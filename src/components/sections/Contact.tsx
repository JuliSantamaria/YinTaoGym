"use client";

import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí irá la lógica de envío del formulario
    console.log("Form submitted:", formData);
    alert("¡Gracias por tu mensaje! Te contactaremos pronto.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contacto" className="py-24 bg-[#0a0a0a]/50">
      <div className="container mx-auto px  -4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Info */}
          <div className="text-center lg:text-left">
            <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
              Contacto
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
              ¿LISTO PARA
              <span className="block text-[#8a8a8a]">EMPEZAR?</span>
            </h2>
            <p className="text-[#a0a0a0] text-base mb-6 leading-relaxed">
              Contáctanos y te ayudaremos a elegir el plan perfecto para ti. 
              ¡Tu primera visita es gratuita!
            </p>

            {/* Contact info */}
            <div className="space-y-5">
              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0a0a0a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Dirección</h3>
                  <p className="text-[#a0a0a0] text-sm">
                    Calle Ejemplo 123, 28001 Madrid
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0a0a0a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Teléfono</h3>
                  <p className="text-[#a0a0a0] text-sm">+34 912 345 678</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0a0a0a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Email</h3>
                  <p className="text-[#a0a0a0] text-sm">info@yintao.com</p>
                </div>
              </div>

              <div className="flex items-start gap-3 justify-center lg:justify-start">
                <div className="w-10 h-10 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-lg flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-5 h-5 text-[#0a0a0a]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-white font-semibold text-sm mb-1">Horario</h3>
                  <p className="text-[#a0a0a0] text-sm">24/7 - Abierto todos los días</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-2xl border border-[#1f1f1f]">
            <h3 className="text-xl font-bold text-white mb-5">
              Envíanos un mensaje
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-[#a0a0a0] text-xs mb-2"
                >
                  Nombre completo
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#5a5a5a] focus:outline-none focus:border-[#F1F65B] transition-colors duration-300"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-[#a0a0a0] text-xs mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#5a5a5a] focus:outline-none focus:border-[#F1F65B] transition-colors duration-300"
                    placeholder="tu@email.com"
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-[#a0a0a0] text-xs mb-2"
                  >
                    Teléfono
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#5a5a5a] focus:outline-none focus:border-[#F1F65B] transition-colors duration-300"
                    placeholder="+34 600 000 000"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-[#a0a0a0] text-xs mb-2"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full bg-[#0a0a0a] border border-[#1f1f1f] rounded-lg px-4 py-2.5 text-sm text-white placeholder-[#5a5a5a] focus:outline-none focus:border-[#F1F65B] transition-colors duration-300 resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] py-3 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-xl hover:shadow-[#F1F65B]/30 transition-all duration-300 hover:scale-[1.02]"
              >
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
