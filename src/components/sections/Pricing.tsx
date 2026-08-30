import Link from "next/link";

const plans = [

  {
    name: "Plan Completo",
    price: "55.000",
    period: "/mes",
    description: "Acceso total: cuerpo, fuerza y disciplina",
    features: [
      "Sala de musculación y cardio",
      "Clases grupales de Funcional",
      "Clases de Arte Marcial Yin Tao",
      "Para niños, jóvenes y adultos",
      "Seguimiento personalizado",
      "Descuentos para grupos familiares",
    ],
    notIncluded: [],
    highlighted: true,
  },
];

export default function Pricing() {
  return (
    <section id="precios" className="py-24 bg-[#0a0a0a]/50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            Precios
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            TODO INCLUIDO,<span className="block text-[#8a8a8a]">UN SOLO PRECIO</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Sin categorías ni sorpresas: acceso completo al gimnasio, funcional y
            arte marcial Yin Tao por un precio mensual fijo. Sin permanencia,
            cancelá cuando quieras.
          </p>
        </div>

        {/* Pricing Card */}
        <div className="flex justify-center max-w-sm mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 w-full ${plan.highlighted
                ? "bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] shadow-2xl shadow-[#F1F65B]/20"
                : "bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#1f1f1f]"
                }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#0a0a0a] text-[#F1F65B] px-3 py-1 rounded-full text-xs font-bold">
                  MÁS POPULAR
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-[#0a0a0a]" : "text-white"}`}>
                  {plan.name}
                </h3>
                <p className={`text-xs ${plan.highlighted ? "text-[#0a0a0a]/70" : "text-[#a0a0a0]"}`}>
                  {plan.description}
                </p>
              </div>

              <div className="text-center mb-6">
                <span className={`text-4xl font-black ${plan.highlighted ? "text-[#0a0a0a]" : "text-white"}`}>${plan.price}</span>
                <span className={`text-sm ${plan.highlighted ? "text-[#0a0a0a]/70" : "text-[#5a5a5a]"}`}>
                  {plan.period}
                </span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-6">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <svg
                      className={`w-4 h-4 flex-shrink-0 ${plan.highlighted ? "text-[#0a0a0a]" : "text-[#F1F65B]"}`}
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
                    <span className={`text-sm ${plan.highlighted ? "text-[#0a0a0a]" : "text-[#a0a0a0]"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
                {plan.notIncluded.map((feature, featureIndex) => (
                  <li key={`not-${featureIndex}`} className="flex items-center gap-2 opacity-50">
                    <svg
                      className="w-4 h-4 flex-shrink-0 text-[#5a5a5a]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                    <span className="text-[#5a5a5a] line-through text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <Link
                href="#contacto"
                className={`block w-full text-center py-3 rounded-full font-black text-sm uppercase tracking-wide transition-all duration-300 ${plan.highlighted
                  ? "bg-[#0a0a0a] text-[#F1F65B] hover:bg-[#1a1a1a]"
                  : "bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-black hover:shadow-lg hover:shadow-[#F1F65B]/25"
                  }`}
              >
                Elegir Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
