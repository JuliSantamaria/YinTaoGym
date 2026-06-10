const maestro = {
  name: "Maestro de Yin Tao",
  role: "Instructor de Arte Marcial Yin Tao",
  experience: "Instructor certificado en Yin Tao",
  description:
    "Lidera las clases del arte marcial Yin Tao: enseña disciplina, defensa personal y valores a niños, jóvenes y adultos. Su filosofía de entrenamiento fusiona cuerpo y mente para formar guerreros con corazón.",
};

const trainers = [
  {
    name: "Prof. de Sala",
    role: "Entrenador de Musculación",
    experience: "Especialista en fuerza y musculación",
    description:
      "Te enseña la técnica correcta para cada ejercicio y arma tu rutina personalizada desde el primer día.",
  },
  {
    name: "Instructor Funcional",
    role: "Entrenador de Funcional",
    experience: "Clases grupales dinámicas y motivadoras",
    description:
      "Clases en circuito con ejercicios funcionales, para mejorar tu condición física, fuerza y coordinación en grupo.",
  },
  {
    name: "Prof. de Kickboxing",
    role: "Entrenador de Kickboxing",
    experience: "Competidor y formador de kickboxing",
    description:
      "Entrená golpes, patadas y combinaciones en un ambiente intenso. Mejorá tu resistencia, reflejos y confianza.",
  },
  {
    name: "Prof. de Stretching",
    role: "Instructora de Elongación",
    experience: "Especialista en flexibilidad y movilidad",
    description:
      "Sesiones de elongación guiadas para mejorar tu postura, prevenir lesiones y ganar flexibilidad progresivamente.",
  },
  {
    name: "Prof. de Boxeo",
    role: "Entrenador de Boxeo",
    experience: "Formador con experiencia en ring",
    description:
      "Técnica de puños, defensa y desplazamiento. Clases para todos los niveles, desde principiantes hasta avanzados.",
  },
];

export default function Trainers() {
  return (
    <section id="entrenadores" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            Nuestro Equipo
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            ENTRENADORES EXPERTOS
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Nuestros profesores son la esencia del gimnasio: comprometidos,
            cercanos y siempre listos para acompañarte.
          </p>
        </div>

        {/* Maestro Featured Card */}
        <div className="max-w-5xl mx-auto mb-8">
          <div
            className="group relative bg-gradient-to-br from-[#0f0f0f] via-[#141414] to-[#1a1a1a] rounded-2xl overflow-hidden border border-[#F1F65B]/20 hover:border-[#F1F65B]/60 transition-all duration-500"
            style={{
              boxShadow: "0 0 40px rgba(241, 246, 91, 0.05), 0 4px 60px rgba(0,0,0,0.4)",
            }}
          >
            {/* Decorative glow behind card */}
            <div className="absolute -inset-[1px] bg-gradient-to-br from-[#F1F65B]/10 via-transparent to-[#F1F65B]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

            <div className="relative flex flex-col md:flex-row items-center">
              {/* Avatar / Image area */}
              <div className="w-full md:w-2/5 aspect-square md:aspect-auto md:min-h-[380px] bg-gradient-to-br from-[#1a1a1a] via-[#111111] to-[#0a0a0a] relative flex items-center justify-center">
                {/* Subtle pattern overlay */}
                <div
                  className="absolute inset-0 opacity-[0.03]"
                  style={{
                    backgroundImage:
                      "radial-gradient(circle at 1px 1px, #F1F65B 1px, transparent 0)",
                    backgroundSize: "24px 24px",
                  }}
                />
                {/* Avatar circle */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <div className="w-28 h-28 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(241,246,91,0.25)]">
                    <svg
                      className="w-14 h-14 text-[#0a0a0a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                  <span className="text-[#F1F65B]/30 text-[10px] uppercase tracking-[0.3em] font-medium">
                    Foto próximamente
                  </span>
                </div>

                {/* Hover overlay with social links */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#F1F65B] hover:text-[#0a0a0a] transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-10 h-10 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#F1F65B] hover:text-[#0a0a0a] transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content area - centered */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col items-center text-center justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F1F65B]/10 border border-[#F1F65B]/20 rounded-full px-4 py-1.5 mb-5">
                  <div className="w-2 h-2 bg-[#F1F65B] rounded-full animate-pulse" />
                  <span className="text-[#F1F65B] text-[11px] font-semibold uppercase tracking-widest">
                    Líder del Gimnasio
                  </span>
                </div>

                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tight">
                  {maestro.name}
                </h3>
                <p className="text-[#F1F65B] text-sm font-semibold mb-1">
                  {maestro.role}
                </p>
                <p className="text-[#5a5a5a] text-xs mb-5">
                  {maestro.experience}
                </p>

                {/* Decorative divider */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-8 h-px bg-gradient-to-r from-transparent to-[#F1F65B]/40" />
                  <div className="w-1.5 h-1.5 bg-[#F1F65B] rounded-full" />
                  <div className="w-8 h-px bg-gradient-to-l from-transparent to-[#F1F65B]/40" />
                </div>

                <p className="text-[#a0a0a0] text-sm leading-relaxed max-w-md">
                  {maestro.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trainers Grid - 5 small cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5 max-w-5xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#1f1f1f] hover:border-[#F1F65B]/50 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="aspect-square bg-gradient-to-br from-[#1f1f1f] to-[#0f0f0f] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-full flex items-center justify-center">
                    <svg
                      className="w-8 h-8 text-[#0a0a0a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                      />
                    </svg>
                  </div>
                </div>
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                  <div className="flex gap-3">
                    <a
                      href="#"
                      className="w-8 h-8 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#F1F65B] hover:text-[#0a0a0a] transition-colors duration-300"
                      aria-label="Instagram"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                      </svg>
                    </a>
                    <a
                      href="#"
                      className="w-8 h-8 bg-[#1f1f1f] rounded-full flex items-center justify-center hover:bg-[#F1F65B] hover:text-[#0a0a0a] transition-colors duration-300"
                      aria-label="LinkedIn"
                    >
                      <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-sm font-bold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-[#F1F65B] text-[11px] font-medium mb-1">
                  {trainer.role}
                </p>
                <p className="text-[#5a5a5a] text-[10px] mb-2">
                  {trainer.experience}
                </p>
                <p className="text-[#a0a0a0] text-[11px] leading-relaxed">
                  {trainer.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
