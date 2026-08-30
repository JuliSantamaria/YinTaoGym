import MaestroCarousel from "@/components/ui/MaestroCarousel";

const maestro = {
  name: "Walter Anibal Cardozo",
  role: "Maestro de Arte Marcial Yin Tao",
  experience: "+ 40 años de trayectoria · 8° grado",
  description:
    "Lidera las clases del arte marcial Yin Tao: enseña disciplina, defensa personal y valores a niños, jóvenes y adultos. Su filosofía de entrenamiento fusiona cuerpo y mente para formar guerreros con corazón.",
};


export default function Trainers() {
  return (
    <section id="entrenadores" className="py-24">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            El Maestro
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            CONOCÉ A TU MAESTRO
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Al frente de cada clase está quien le da nombre y alma a la
            academia: cercano, exigente y siempre listo para acompañarte.
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
              {/* Carrusel de fotos del maestro */}
              <MaestroCarousel alt={maestro.name} />

              {/* Content area - centered */}
              <div className="w-full md:w-3/5 p-8 md:p-12 flex flex-col items-center text-center justify-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-[#F1F65B]/10 border border-[#F1F65B]/20 rounded-full px-4 py-1.5 mb-5">
                  <div className="w-2 h-2 bg-[#F1F65B] rounded-full animate-pulse" />
                  <span className="text-[#F1F65B] text-[11px] font-semibold uppercase tracking-widest">
                    Maestro Principal
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



      </div>
    </section>
  );
}
