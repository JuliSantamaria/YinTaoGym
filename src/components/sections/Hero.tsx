import Link from "next/link";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16"
    >
      {/* Background con overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0a] via-[#0f0f0f] to-[#1a1a1a]">
        {/* Patrón de líneas metálicas */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#F1F65B] to-transparent"></div>
          <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[#5a5a5a] to-transparent"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[#F1F65B] to-transparent"></div>
        </div>
        {/* Efecto de brillo dorado */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#F1F65B]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center flex flex-col items-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-[#1f1f1f]/50 border border-[#3a3a3a] rounded-full px-2 py-2 mb-8">
            <span className="w-1.5 h-1.5 bg-[#F1F65B] rounded-full animate-pulse"></span>
            <span className="text-[#a0a0a0] text-xs font-medium">
              Abierto 24/7 - Sin excusas
            </span>
          </div>

          {/* Título principal */}
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            FORJA TU
            <span className="block bg-gradient-to-r from-[#F1F65B] to-[#F5F87A] bg-clip-text text-transparent">
              MEJOR VERSIÓN
            </span>
          </h1>

          {/* Subtítulo */}
          <p className="text-xl md:text-2xl text-[#a0a0a0] mb-10 max-w-2xl mx-auto">
            Equipamiento de élite, entrenadores certificados y una comunidad que 
            te impulsa a superar tus límites cada día.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mt-4">
            <Link
              href="#precios"
              className="inline-flex items-center justify-center bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] px-8 py-3.5 rounded-full font-bold text-sm uppercase tracking-wide hover:shadow-xl hover:shadow-[#F1F65B]/30 transition-all duration-300 hover:scale-105"
            >
              Comenzar Ahora
            </Link>
            <Link
              href="#servicios"
              className="inline-flex items-center justify-center border-2 border-[#3a3a3a] text-white px-8 py-3.5 rounded-full font-semibold text-sm uppercase tracking-wide hover:bg-[#1f1f1f] hover:border-[#F1F65B]/50 transition-all duration-300"
            >
              Ver Servicios
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-[#1f1f1f] w-full">
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white">500+</p>
              <p className="text-[#5a5a5a] mt-2 text-sm">Miembros Activos</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white">15+</p>
              <p className="text-[#5a5a5a] mt-2 text-sm">Entrenadores</p>
            </div>
            <div className="text-center">
              <p className="text-4xl md:text-5xl font-black text-white">50+</p>
              <p className="text-[#5a5a5a] mt-2 text-sm">Clases Semanales</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-[#71797E]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
