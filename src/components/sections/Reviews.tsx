"use client";

import { useState, useEffect, useCallback } from "react";

interface Review {
  name: string;
  text: string;
  rating: number;
}

const reviews: Review[] = [
  {
    name: "Sofía",
    text: "La mejor escuela de artes marciales y gimnasio. Dirigida por gente profesional y de una calidad humana increíble. No la cambio por nada.",
    rating: 5,
  },
  {
    name: "Mauricio Barrios",
    text: "Escuela de artes marciales muy completa !!",
    rating: 5,
  },
  {
    name: "Ariel Kasiel",
    text: "Excelente lugar para practicar artes marciales tradicionales. Un gym equipado con lo que hace falta para hacer pesas y un muy buen profesor encargado de la academia.",
    rating: 5,
  },
  {
    name: "Gustavo C.",
    text: "Muy amables. Excelente lugar para entrenar y pasarla bien. Muy motivadores todos. Una gran familia.",
    rating: 5,
  },
  {
    name: "Maria Victoria Alvarez",
    text: "Arranqué el gym aquí... muy buen clima... te acompañan en la rutina... te motivan. Muy buen precio.",
    rating: 5,
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-[#F1F65B]" : "text-[#3a3a3a]"
          }`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Reviews() {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning || index === current) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 300);
    },
    [isTransitioning, current]
  );

  const next = useCallback(() => {
    goTo((current + 1) % reviews.length);
  }, [current, goTo]);

  const prev = useCallback(() => {
    goTo((current - 1 + reviews.length) % reviews.length);
  }, [current, goTo]);

  // Auto-play
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="resenas" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#F1F65B]/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 flex flex-col items-center">
          <span className="text-[#F1F65B] font-semibold uppercase tracking-wide text-xs">
            Testimonios
          </span>
          <h2 className="text-3xl md:text-4xl font-black text-white mt-4 mb-6">
            LO QUE DICEN
            <span className="block text-[#8a8a8a]">NUESTROS ALUMNOS</span>
          </h2>
          <p className="text-[#a0a0a0] max-w-2xl mx-auto text-base">
            Reseñas reales de Google de personas que ya son parte de la familia
            Yin Tao.
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-3xl mx-auto relative">
          {/* Google icon */}
          <div className="flex justify-center mb-8">
            <div className="flex items-center gap-2 bg-[#1a1a1a] border border-[#1f1f1f] rounded-full px-4 py-2">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              <span className="text-[#a0a0a0] text-xs font-medium">
                Reseñas de Google
              </span>
            </div>
          </div>

          {/* Review Card */}
          <div className="relative min-h-[240px] flex items-center justify-center">
            <div
              className={`w-full transition-all duration-300 ease-in-out ${
                isTransitioning
                  ? "opacity-0 scale-95 translate-y-2"
                  : "opacity-100 scale-100 translate-y-0"
              }`}
            >
              <div className="bg-gradient-to-br from-[#0f0f0f] to-[#1a1a1a] border border-[#1f1f1f] rounded-2xl p-8 md:p-10 text-center relative">
                {/* Quote icon */}
                <div className="absolute top-5 left-6 text-[#F1F65B]/10 text-6xl font-serif leading-none select-none">
                  &ldquo;
                </div>

                {/* Review text */}
                <p className="text-[#d0d0d0] text-base md:text-lg leading-relaxed mb-8 relative z-10 italic">
                  &ldquo;{reviews[current].text}&rdquo;
                </p>

                {/* Divider */}
                <div className="w-12 h-0.5 bg-gradient-to-r from-transparent via-[#F1F65B]/40 to-transparent mx-auto mb-5" />

                {/* Stars */}
                <div className="flex justify-center mb-3">
                  <StarRating rating={reviews[current].rating} />
                </div>

                {/* Name */}
                <p className="text-white font-bold text-sm tracking-wide">
                  {reviews[current].name}
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Prev button */}
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[#1f1f1f] bg-[#0f0f0f] flex items-center justify-center text-[#8a8a8a] hover:border-[#F1F65B]/50 hover:text-[#F1F65B] transition-all duration-300"
              aria-label="Reseña anterior"
            >
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
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goTo(index)}
                  className={`transition-all duration-300 rounded-full ${
                    index === current
                      ? "w-8 h-2.5 bg-[#F1F65B]"
                      : "w-2.5 h-2.5 bg-[#3a3a3a] hover:bg-[#5a5a5a]"
                  }`}
                  aria-label={`Ir a reseña ${index + 1}`}
                />
              ))}
            </div>

            {/* Next button */}
            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[#1f1f1f] bg-[#0f0f0f] flex items-center justify-center text-[#8a8a8a] hover:border-[#F1F65B]/50 hover:text-[#F1F65B] transition-all duration-300"
              aria-label="Siguiente reseña"
            >
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
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
