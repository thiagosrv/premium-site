"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import CTAPrimary from "./CTAPrimary";
gsap.registerPlugin();

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      if (y > 80 && !scrolled) {
        setScrolled(true);
        gsap.to(navRef.current, {
          backgroundColor: "rgba(0,11,56,0.94)",
          duration: 0.4,
          ease: "power2.out",
        });
      } else if (y <= 80 && scrolled) {
        setScrolled(false);
        gsap.to(navRef.current, {
          backgroundColor: "rgba(0,0,0,0)",
          duration: 0.4,
          ease: "power2.out",
        });
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrolled]);

  const links = [
    { label: "Quem Somos", href: "/quem-somos" },
    { label: "Soluções",   href: "/solucoes"    },
    { label: "Diferenciais", href: "/#diferenciais" },
    { label: "Contato",    href: "/contato"     },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
      style={{ willChange: "background-color" }}
    >
      {/* Backdrop blur layer */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: scrolled ? "blur(22px)" : "blur(0px)",
          transition: "backdrop-filter 0.4s ease",
        }}
      />

      {/* Gold bottom border — surge ao scrollar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none transition-opacity duration-500"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(254,190,0,0.28), transparent)",
          opacity: scrolled ? 1 : 0,
        }}
      />

      {/* Main bar */}
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between h-20">

        {/* ── Identidade visual ───────────────────────────────────── */}
        <Link href="/" className="flex items-center gap-3.5 group">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo.png"
            alt="PS Proteção"
            style={{ height: "44px", width: "auto" }}
          />
          <div className="hidden sm:flex flex-col gap-1">
            {/* Nome — sem ponto */}
            <span
              className="text-white uppercase leading-none tracking-[0.28em] text-[13px]"
              style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}
            >
              PS PROTEÇÃO
            </span>
            {/* Slogan */}
            <span
              className="leading-none italic"
              style={{
                fontFamily: "var(--font-inter)",
                fontSize: "9.5px",
                letterSpacing: "0.05em",
                color: "rgba(255,255,255,0.38)",
                fontStyle: "italic",
              }}
            >
              Sua segurança nosso compromisso.
            </span>
          </div>
        </Link>

        {/* ── Links desktop ───────────────────────────────────────── */}
        <ul className="hidden md:flex items-center gap-9">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="relative py-1 text-white/55 hover:text-white transition-colors duration-300 text-xs uppercase tracking-[0.18em] group"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
                {/* Underline dourada que desliza da esquerda */}
                <span
                  className="absolute bottom-0 left-0 right-0 h-px origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                  style={{ background: "#FEBE00" }}
                />
              </Link>
            </li>
          ))}
          <li>
            <CTAPrimary
              href="https://wa.me/5519978210246"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Diagnóstico Gratuito
            </CTAPrimary>
          </li>
        </ul>

        {/* ── Mobile toggle ───────────────────────────────────────── */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Menu mobile ─────────────────────────────────────────────── */}
      {menuOpen && (
        <div
          className="md:hidden px-8 py-8 flex flex-col gap-6"
          style={{
            background: "rgba(0,2,20,0.97)",
            backdropFilter: "blur(24px)",
            borderTop: "1px solid rgba(254,190,0,0.12)",
          }}
        >
          {/* Slogan no mobile */}
          <p
            className="italic mb-2"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "10px",
              color: "rgba(255,255,255,0.3)",
              letterSpacing: "0.05em",
            }}
          >
            Sua segurança nosso compromisso.
          </p>

          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/60 hover:text-[#FEBE00] uppercase tracking-[0.2em] text-xs transition-colors duration-200"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}

          <CTAPrimary
            href="https://wa.me/5519978210246"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3.5 text-center text-xs uppercase tracking-[0.15em] font-semibold mt-2"
            style={{ fontFamily: "var(--font-inter)" }}
            onClick={() => setMenuOpen(false)}
          >
            Diagnóstico Gratuito
          </CTAPrimary>
        </div>
      )}
    </nav>
  );
}
