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
          backgroundColor: "rgba(0,11,56,0.92)",
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
    { label: "Soluções", href: "/solucoes" },
    { label: "Diferenciais", href: "/#diferenciais" },
    { label: "Contato", href: "/contato" },
  ];

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50 border-b border-white/5"
      style={{ backdropFilter: "blur(0px)", willChange: "background-color" }}
    >
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backdropFilter: scrolled ? "blur(20px)" : "blur(0px)",
          transition: "backdrop-filter 0.4s ease",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-8 md:px-16 flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.png" alt="PS Proteção" style={{ height: "48px", width: "auto" }} />
          <span
            className="text-white uppercase tracking-[0.22em] text-base hidden sm:block"
            style={{ fontFamily: "var(--font-cormorant)", fontWeight: 700 }}
          >
            PS<span style={{ color: "#FEBE00" }}>.</span>PROTEÇÃO
          </span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-10">
          {links.map(({ label, href }) => (
            <li key={label}>
              <Link
                href={href}
                className="text-white/60 hover:text-[#FEBE00] transition-colors duration-300 text-xs uppercase tracking-[0.2em]"
                style={{ fontFamily: "var(--font-inter)" }}
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <CTAPrimary
              href="https://wa.me/5519978210246"
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2.5 text-xs uppercase tracking-[0.15em] font-semibold inline-block"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Diagnóstico Gratuito
            </CTAPrimary>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white p-1"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden border-t border-white/5 px-8 py-6 flex flex-col gap-5"
          style={{ background: "rgba(0,11,56,0.97)", backdropFilter: "blur(20px)" }}
        >
          {links.map(({ label, href }) => (
            <Link
              key={label}
              href={href}
              className="text-white/60 hover:text-[#FEBE00] uppercase tracking-[0.2em] text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </Link>
          ))}
          <CTAPrimary
            href="https://wa.me/5519978210246"
            target="_blank" rel="noopener noreferrer"
            className="px-6 py-3 text-center text-xs uppercase tracking-[0.15em] font-semibold mt-2 inline-block"
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
