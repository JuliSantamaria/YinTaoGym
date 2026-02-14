import Link from "next/link";

const plans = [
  {
    name: "Básico",
    price: "29",
    period: "/mes",
    description: "Perfecto para empezar tu viaje fitness",
    features: [
      "Acceso a zona de musculación",
      "Acceso a zona cardio",
      "Horario: 6:00 - 22:00",
      "Duchas y vestuarios",
    ],
    notIncluded: [
      "Clases grupales",
      "Entrenador personal",
      "Acceso 24/7",
    ],
    highlighted: false,
  },
  {
    name: "Premium",
    price: "49",
    period: "/mes",
    description: "El más popular entre nuestros miembros",
    features: [
      "Acceso completo al gimnasio",
      "Todas las clases grupales",
      "Acceso 24/7",
      "Duchas y vestuarios",
      "1 sesión de PT al mes",
      "App de seguimiento",
    ],
    notIncluded: [],
    highlighted: true,
  },
  {
    name: "Elite",
    price: "79",
    period: "/mes",
    description: "Para los que buscan resultados extraordinarios",
    features: [
      "Todo lo del plan Premium",
      "4 sesiones de PT al mes",
      "Plan nutricional personalizado",
      "Acceso a zona spa y sauna",
      "Parking reservado",
      "Invitados gratis (2/mes)",
    ],
    notIncluded: [],
    highlighted: false,
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
            PLANES PARA TODOS
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Elige el plan que mejor se adapte a tus objetivos. Sin permanencia, 
            cancela cuando quieras.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto items-start">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-6 ${
                plan.highlighted
                  ? "bg-gradient-to-br from-[#F1F65B] to-[#D4D94F] md:scale-105 shadow-2xl shadow-[#F1F65B]/20"
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
                <span className={`text-4xl font-black ${plan.highlighted ? "text-[#0a0a0a]" : "text-white"}`}>{plan.price}€</span>
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
                className={`block w-full text-center py-3 rounded-full font-bold text-sm uppercase tracking-wide transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-[#0a0a0a] text-[#F1F65B] hover:bg-[#1a1a1a]"
                    : "bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] hover:shadow-lg hover:shadow-[#F1F65B]/25"
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
