const features = [
  "Sala de musculación con pesas libres y máquinas",
  "Clases grupales de Funcional",
  "Arte Marcial Yin Tao para todas las edades",
  "Ambiente familiar y comunitario",
  "Profesores con experiencia y dedicación",
  "Horarios flexibles de lunes a sábado",
];

export default function About() {
  return (
    <section id="nosotros" className="py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Imagen placeholder */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="aspect-square w-full max-w-xl bg-[#0f0f0f] rounded-3xl overflow-hidden border border-[#1f1f1f] relative">
              {/* Reemplaza la URL del src por la URL de tu imagen real del gimnasio */}
              <img
                src="imagen1.jpeg"
                alt="Gimnasio Yin Tao"
                className="w-full h-full object-cover"
              />
            </div>
            {/* Badge flotante */}
            <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] px-6 py-3 rounded-2xl shadow-xl">
              <p className="text-3xl font-black">30+</p>
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
              En Yin Tao creemos que el deporte transforma vidas. Somos un gimnasio
              de barrio donde cada persona encuentra su lugar, ya sea en la sala de
              musculación, en las clases funcionales o en el dojo de arte marcial.
            </p>
            <p className="text-[#a0a0a0] text-base mb-6 leading-relaxed">
              Nuestro equipo de profesores está comprometido con vos: te acompañamos
              en cada etapa, desde el primer día hasta que alcances tus metas.
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
