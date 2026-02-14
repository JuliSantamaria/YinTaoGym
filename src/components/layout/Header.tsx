"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#nosotros", label: "Nosotros" },
  { href: "#precios", label: "Precios" },
  { href: "#entrenadores", label: "Entrenadores" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-md border-b border-[#1f1f1f]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden flex items-center justify-center bg-white">
              <Image
                src="/logo.png"
                alt="Yin Tao Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-white leading-tight tracking-wide">
                YIN<span className="text-[#F1F65B]">TAO</span>
              </span>
              <span className="text-[9px] text-[#F1F65B]/70 uppercase tracking-[0.2em] font-medium">
                Sede Central
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#b0b0b0] hover:text-white transition-colors duration-300 text-xs font-medium uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="#contacto"
              className="bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] px-5 py-2 rounded-full font-bold text-xs uppercase tracking-wide hover:shadow-lg hover:shadow-[#F1F65B]/25 transition-all duration-300"
            >
              Únete Ahora
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-[#1f1f1f]">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-3 text-[#a0a0a0] hover:text-white transition-colors duration-300 text-sm font-medium uppercase tracking-wider"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#contacto"
              className="block mt-4 bg-gradient-to-r from-[#F1F65B] to-[#D4D94F] text-[#0a0a0a] px-6 py-3 rounded-full font-bold text-sm uppercase tracking-wider text-center"
              onClick={() => setIsMenuOpen(false)}
            >
              Únete Ahora
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
