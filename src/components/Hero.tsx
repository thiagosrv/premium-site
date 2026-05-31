"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CTAPrimary from "./CTAPrimary";

gsap.registerPlugin(ScrollTrigger);

// Headline em 2 linhas — impacto máximo, menos fragmentação
const headline1 = ["Segurança", "e", "Facilities"];

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const shineRef = useRef<HTMLDivElement>(null);
  const eyebrowRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);
  const h2Ref = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Video parallax
      if (videoRef.current) {
        gsap.to(videoRef.current, {
          yPercent: 22,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // Shine ray loop
      if (shineRef.current) {
        gsap.set(shineRef.current, { x: "-30vw" });
        gsap.to(shineRef.current, {
          x: "130vw",
          duration: 9,
          ease: "power2.inOut",
          repeat: -1,
          repeatDelay: 6,
        });
      }

      // Accent line grow
      if (lineRef.current) {
        gsap.from(lineRef.current, {
          scaleX: 0,
          transformOrigin: "left center",
          duration: 1,
          ease: "expo.out",
          delay: 0.1,
        });
      }

      // Eyebrow fade
      if (eyebrowRef.current) {
        gsap.from(eyebrowRef.current, {
          y: 20, opacity: 0, duration: 0.9,
          ease: "power3.out", delay: 0.2,
        });
      }

      // Word-by-word H1 entrance
      const words = document.querySelectorAll(".hero-word");
      gsap.from(words, {
        y: 80,
        opacity: 0,
        rotateX: -40,
        duration: 0.9,
        stagger: 0.06,
        ease: "expo.out",
        delay: 0.4,
        transformOrigin: "0% 50% -50px",
      });

      // Accent word pop
      const accentWord = document.querySelector(".hero-accent-word");
      if (accentWord) {
        gsap.from(accentWord, {
          scale: 0.6,
          opacity: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 1.0,
        });
      }

      // H2 slide up
      if (h2Ref.current) {
        gsap.from(h2Ref.current, {
          y: 30, opacity: 0, duration: 1,
          ease: "power3.out", delay: 1.1,
        });
      }

      // CTAs
      if (ctaRef.current) {
        const btns = ctaRef.current.querySelectorAll("a");
        gsap.from(btns, {
          y: 24, opacity: 0, duration: 0.8,
          stagger: 0.12, ease: "power3.out", delay: 1.2,
        });
      }

      // Scroll indicator
      gsap.from(".scroll-indicator", {
        opacity: 0, y: 12, duration: 1, delay: 1.8, ease: "power2.out",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative overflow-hidden bg-[#000B38]"
      style={{ height: "100svh", perspective: "1200px" }}
    >
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-[115%] object-cover"
        src="/video.mp4"
        autoPlay muted loop playsInline preload="metadata"
        style={{ top: "-7.5%" }}
      />

      {/* Overlays */}
      <div className="absolute inset-0" style={{
        background: "linear-gradient(180deg, rgba(0,8,32,0.80) 0%, rgba(0,0,0,0.05) 40%, rgba(0,8,32,0.97) 100%)",
      }} />
      <div className="absolute inset-0" style={{
        background: "linear-gradient(90deg, rgba(0,8,32,0.65) 0%, transparent 30%, transparent 70%, rgba(0,8,32,0.65) 100%)",
      }} />

      {/* Shine ray */}
      <div ref={shineRef} className="absolute inset-y-0 pointer-events-none" style={{
        width: "180px",
        background: "linear-gradient(108deg, transparent 0%, rgba(254,190,0,0.055) 45%, rgba(254,190,0,0.08) 50%, rgba(254,190,0,0.055) 55%, transparent 100%)",
        transform: "skewX(-12deg)", filter: "blur(8px)",
      }} />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end pb-20 px-8 md:px-20 lg:px-32 z-10">
        <div className="max-w-5xl">
          {/* Eyebrow */}
          <div ref={eyebrowRef} className="flex items-center gap-3 mb-6">
            <div ref={lineRef} className="h-px w-10" style={{ background: "#FEBE00" }} />
            <span
              className="text-[#FEBE00] tracking-[0.35em] uppercase text-xs font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              27 Anos de Experiência · Americana-SP
            </span>
          </div>

          {/* H1 — 2 linhas limpas */}
          <h1
            className="text-white mb-6 tracking-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              lineHeight: 1.05,
            }}
          >
            {/* Linha principal — grande e bold */}
            <span
              className="block"
              style={{ fontSize: "clamp(2.4rem, 5.2vw, 6rem)", fontWeight: 800 }}
            >
              {headline1.map((word, i) => (
                <span
                  key={i}
                  className="hero-word inline-block mr-[0.22em]"
                  style={{ display: "inline-block" }}
                >
                  {word}
                </span>
              ))}
            </span>
            {/* Linha de acento — menor, itálica, amarela */}
            <span
              className="block"
              style={{ fontSize: "clamp(1.5rem, 3.2vw, 3.6rem)", fontWeight: 300 }}
            >
              <em
                className="hero-accent-word not-italic"
                style={{ color: "#FEBE00", fontStyle: "italic", opacity: 0.9 }}
              >
                com Padrão Técnico
              </em>
            </span>
          </h1>

          {/* H2 */}
          <h2
            ref={h2Ref}
            className="text-white/60 mb-10 leading-relaxed max-w-xl"
            style={{
              fontFamily: "var(--font-inter)",
              fontSize: "clamp(0.88rem, 1.2vw, 1rem)",
              fontWeight: 400,
              letterSpacing: "0.01em",
            }}
          >
            Portaria, vigilância, limpeza e zeladoria para condomínios e empresas
            — equipes certificadas e atendimento 24h em mais de 100 cidades.
          </h2>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-wrap gap-4">
            <CTAPrimary
              href="https://wa.me/5519978210246"
              target="_blank" rel="noopener noreferrer"
              className="px-8 py-4 font-semibold inline-block"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.12em", textTransform: "uppercase" }}
            >
              Solicitar Diagnóstico Gratuito
            </CTAPrimary>
            <a
              href="#servicos"
              className="px-8 py-4 text-white font-medium transition-all duration-300 hover:bg-white/10 inline-block"
              style={{
                border: "1px solid rgba(254,190,0,0.6)",
                background: "rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
                fontFamily: "var(--font-inter)",
                fontSize: "0.78rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                borderRadius: "5px",
              }}
            >
              Conheça os Serviços ↓
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="scroll-indicator absolute bottom-8 right-8 md:right-20 lg:right-32 flex flex-col items-center gap-2">
          <div className="w-px h-12" style={{
            background: "linear-gradient(180deg, transparent, rgba(254,190,0,0.6))",
          }} />
          <span
            className="text-white/30 text-[10px] tracking-[0.2em] uppercase rotate-90 origin-center mt-2"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            scroll
          </span>
        </div>
      </div>
    </section>
  );
}
