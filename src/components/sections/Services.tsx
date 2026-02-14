const services = [
  {
    icon: "M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4",
    title: "Musculación",
    description: "Equipamiento de última generación para desarrollar fuerza y masa muscular con técnicas avanzadas.",
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Cardio",
    description: "Zona cardio equipada con cintas, bicicletas y elípticas para mejorar tu resistencia.",
  },
  {
    icon: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z",
    title: "Clases Grupales",
    description: "Spinning, CrossFit, Yoga, Pilates y más. Entrena en comunidad con energía contagiosa.",
  },
  {
    icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z",
    title: "Entrenamiento Personal",
    description: "Programas personalizados con seguimiento profesional para alcanzar tus metas específicas.",
  },
  {
    icon: "M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z",
    title: "Nutrición",
    description: "Asesoramiento nutricional profesional para complementar tu entrenamiento y maximizar resultados.",
  },
  {
    icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z",
    title: "Recuperación",
    description: "Zona de stretching, sauna y masajes para una recuperación óptima post-entrenamiento.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-24 bg-[#0a0a0a]/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            TODO LO QUE NECESITAS
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Ofrecemos una experiencia completa de entrenamiento con instalaciones 
            de primer nivel y servicios diseñados para tu éxito.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-2xl border border-[#1f1f1f] hover:border-[#F1F65B]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F1F65B]/10"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                <svg
                  className="w-7 h-7 text-[#0a0a0a]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d={service.icon}
                  />
                </svg>
              </div>

              {/* Content */}
              <h3 className="text-lg font-bold text-white mb-2">
                {service.title}
              </h3>
              <p className="text-[#a0a0a0] leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-5 flex items-center gap-2 text-[#F1F65B] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-xs font-semibold">Saber más</span>
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
