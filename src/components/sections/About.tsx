const features = [
  "Equipamiento de última generación",
  "Abierto 24 horas, 7 días",
  "Vestuarios con duchas y taquillas",
  "Zona de stretching y recuperación",
  "WiFi gratuito en todas las instalaciones",
  "Parking gratuito para miembros",
];

export default function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagen placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="aspect-square w-full max-w-md bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-3xl overflow-hidden border border-[#1f1f1f]">
              {/* Placeholder visual - reemplazar con imagen real */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-full flex items-center justify-center mb-4">
                    <svg
                      className="w-12 h-12 text-[#0a0a0a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <p className="text-[#5a5a5a] text-xs">Imagen del gimnasio</p>
                  <p className="text-[#3a3a3a] text-[10px] mt-1">(Placeholder)</p>
                </div>
              </div>
            </div>
            {/* Badge flotante */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-3xl font-black">10+</p>
              <p className="text-xs font-medium">Años de experiencia</p>
            </div>
          </div>

          {/* Contenido */}
          <div className="text-center lg:text-left">
            <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
              MÁS QUE UN
              <span className="block text-[#8a8a8a]">GIMNASIO</span>
            </h2>
            <p className="text-[#a0a0a0] text-base mb-5 leading-relaxed">
              En YinTao creemos que el fitness es un estilo de vida. Desde 2014 
              hemos ayudado a miles de personas a transformar sus cuerpos y sus 
              vidas a través del entrenamiento de calidad.
            </p>
            <p className="text-[#a0a0a0] text-base mb-6 leading-relaxed">
              Nuestras instalaciones de 2000m² cuentan con el mejor equipamiento 
              del mercado y un equipo de profesionales comprometidos con tu éxito.
            </p>

            {/* Features list */}
            <ul className="space-y-3">
              {features.map((feature, index) => (
                <li key={index} className="flex items-center gap-3 justify-center lg:justify-start">
                  <div className="w-5 h-5 bg-[#F1F65B]/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#F1F65B]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#a0a0a0] text-sm">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
