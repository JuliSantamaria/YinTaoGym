"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

// EmailJS configuration - set these in your .env.local file
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "";
const EMAILJS_PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<FormStatus>("idle");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    setStatus("sending");

    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setFormData({ name: "", email: "", phone: "", message: "" });
      // Reset success message after 5 seconds
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
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
              ¿Querés conocer el gimnasio? ¡Vení a visitarnos, la primera clase
              es gratis! Te esperamos con los brazos abiertos.
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
                    Av. José María Moreno 1832 - CABA
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
                  <p className="text-[#a0a0a0] text-sm">+54 9...</p>
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
                  <p className="text-[#a0a0a0] text-sm">contacto@yintaogym.com</p>
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
                  <p className="text-[#a0a0a0] text-sm">Lunes a Viernes: 7:00 – 21:00 | Sábados: 8:00 – 13:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-2xl border border-[#1f1f1f]">
            <h3 className="text-xl font-bold text-white mb-5">
              Envíanos un mensaje
            </h3>
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
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
                disabled={status === "sending"}
                className={`w-full py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 flex items-center justify-center gap-2 ${
                  status === "success"
                    ? "bg-green-500 text-white"
                    : status === "error"
                      ? "bg-red-500 text-white"
                      : "bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] hover:shadow-xl hover:shadow-[#F1F65B]/30 hover:scale-[1.02]"
                } ${status === "sending" ? "opacity-70 cursor-not-allowed" : ""}`}
              >
                {status === "sending" && (
                  <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                )}
                {status === "success" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                {status === "error" && (
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
                {status === "idle" && "Enviar Mensaje"}
                {status === "sending" && "Enviando..."}
                {status === "success" && "¡Mensaje Enviado!"}
                {status === "error" && "Error al enviar. Intentá de nuevo."}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
