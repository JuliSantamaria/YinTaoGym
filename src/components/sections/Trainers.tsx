const trainers = [
  {
    name: "Carlos Mendoza",
    role: "Especialista en Musculación",
    experience: "12 años de experiencia",
    description: "Experto en hipertrofia y fuerza. Campeón regional de powerlifting.",
  },
  {
    name: "Laura Sánchez",
    role: "Entrenadora de CrossFit",
    experience: "8 años de experiencia",
    description: "Certificada CrossFit Level 3. Especialista en entrenamiento funcional.",
  },
  {
    name: "Miguel Torres",
    role: "Nutricionista Deportivo",
    experience: "10 años de experiencia",
    description: "Máster en nutrición deportiva. Planes personalizados para cada meta.",
  },
  {
    name: "Ana García",
    role: "Instructora de Yoga y Pilates",
    experience: "7 años de experiencia",
    description: "Certificada en Hatha y Vinyasa Yoga. Especialista en flexibilidad.",
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
            Profesionales certificados y apasionados por ayudarte a alcanzar 
            tus metas fitness.
          </p>
        </div>

        {/* Trainers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="group bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] rounded-xl overflow-hidden border border-[#1f1f1f] hover:border-[#F1F65B]/50 transition-all duration-300"
            >
              {/* Avatar placeholder */}
              <div className="aspect-square bg-gradient-to-br from-[#1f1f1f] to-[#0f0f0f] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-full flex items-center justify-center">
                    <svg
                      className="w-10 h-10 text-[#0a0a0a]"
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

              {/* Content */}
              <div className="p-5">
                <h3 className="text-base font-bold text-white mb-1">
                  {trainer.name}
                </h3>
                <p className="text-[#F1F65B] text-xs font-medium mb-1">
                  {trainer.role}
                </p>
                <p className="text-[#5a5a5a] text-[10px] mb-2">
                  {trainer.experience}
                </p>
                <p className="text-[#a0a0a0] text-xs leading-relaxed">
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
