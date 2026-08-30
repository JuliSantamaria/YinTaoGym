import Link from "next/link";

const secondaryServices = [
  {
    icon: "M4 9v6 M7 6.5v11 M17 6.5v11 M20 9v6 M7 12h10",
    title: "Gimnasio",
    description:
      "Sala de musculación completa con pesas libres, máquinas y zona de cardio. Todo lo que necesitás para entrenar a tu ritmo, con el ambiente cálido del barrio.",
    highlights: ["Pesas libres", "Máquinas", "Zona de cardio"],
  },
  {
    icon: "M13 10V3L4 14h7v7l9-11h-7z",
    title: "Funcional",
    description:
      "Clases grupales de entrenamiento funcional para mejorar tu condición física, fuerza y resistencia. Dinámica, divertida y para todos los niveles.",
    highlights: ["Clases en grupo", "Todos los niveles", "Fuerza y resistencia"],
  },
];

const yintaoFeatures = [
  "Niños, jóvenes y adultos",
  "Defensa personal",
  "Disciplina y valores",
  "Competencias oficiales",
];

export default function Services() {
  return (
    <section id="servicios" className="relative py-24 bg-[#0a0a0a]/50 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-[#F1F65B]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4 relative">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            Nuestros Servicios
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            TODO LO QUE NECESITÁS
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Tres propuestas para cada objetivo: tu cuerpo, tu condición y tu
            disciplina mental. En Yin Tao encontrás todo en un solo lugar.
          </p>
        </div>

        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          {/* ── YIN TAO — Featured Hero Card ── */}
          <div className="group relative bg-gradient-to-br from-[#111111] via-[#141414] to-[#1a1a1a] rounded-2xl border border-[#F1F65B]/30 hover:border-[#F1F65B]/60 transition-all duration-500 overflow-hidden hover:shadow-2xl hover:shadow-[#F1F65B]/10">
            {/* Corner glow */}
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-[#F1F65B]/[0.06] rounded-full blur-3xl pointer-events-none group-hover:bg-[#F1F65B]/[0.10] transition-all duration-500" />
            <div className="absolute -bottom-16 -left-16 w-40 h-40 bg-[#F1F65B]/[0.04] rounded-full blur-3xl pointer-events-none" />

            <div className="relative p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
              {/* Left: Icon + Badge */}
              <div className="flex flex-col items-center gap-4 flex-shrink-0">
                <div className="w-20 h-20 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-2xl flex items-center justify-center shadow-lg shadow-[#F1F65B]/20 group-hover:scale-110 transition-transform duration-500">
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
                      d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                    />
                  </svg>
                </div>
                <span className="bg-[#F1F65B]/10 text-[#F1F65B] text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border border-[#F1F65B]/20">
                  Disciplina Principal
                </span>
              </div>

              {/* Right: Content */}
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-3">
                  Arte Marcial{" "}
                  <span className="text-[#F1F65B]">Yin Tao</span>
                </h3>
                <p className="text-[#b0b0b0] leading-relaxed text-sm md:text-base mb-6 max-w-xl">
                  El arte marcial que da nombre a nuestra academia. Un camino de
                  superación personal que combina técnicas de defensa, disciplina
                  física y valores humanos. Para todas las edades y niveles.
                </p>

                {/* Feature pills */}
                <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                  {yintaoFeatures.map((feat) => (
                    <span
                      key={feat}
                      className="bg-[#1f1f1f] text-[#a0a0a0] text-xs font-medium px-3 py-1.5 rounded-lg border border-[#2a2a2a]"
                    >
                      {feat}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <Link
                  href="#contacto"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-black px-6 py-2.5 rounded-full font-black text-xs uppercase tracking-wide hover:shadow-lg hover:shadow-[#F1F65B]/25 transition-all duration-300"
                >
                  Quiero empezar
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
                </Link>
              </div>
            </div>
          </div>

          {/* ── Secondary Services ── */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {secondaryServices.map((service, index) => (
              <div
                key={index}
                className="group relative flex flex-col overflow-hidden bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] p-6 rounded-2xl border border-[#1f1f1f] hover:border-[#F1F65B]/50 transition-all duration-300 hover:shadow-xl hover:shadow-[#F1F65B]/10"
              >
                {/* Corner glow */}
                <div className="absolute -top-16 -right-16 w-40 h-40 bg-[#F1F65B]/[0.04] rounded-full blur-3xl pointer-events-none group-hover:bg-[#F1F65B]/[0.09] transition-all duration-500" />

                {/* Icon */}
                <div className="relative w-12 h-12 bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
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
                <h3 className="relative text-lg font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="relative text-[#a0a0a0] leading-relaxed text-sm mb-5">
                  {service.description}
                </p>

                {/* Highlights */}
                <div className="relative flex flex-wrap gap-2 mb-6">
                  {service.highlights.map((h) => (
                    <span
                      key={h}
                      className="bg-[#1f1f1f] text-[#a0a0a0] text-xs font-medium px-3 py-1.5 rounded-lg border border-[#2a2a2a]"
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Footer: incluido en el plan */}
                <div className="relative mt-auto pt-4 border-t border-[#1f1f1f] flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-[#F1F65B] flex-shrink-0"
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
                  <span className="text-xs text-[#8a8a8a]">
                    Incluido en tu plan
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
