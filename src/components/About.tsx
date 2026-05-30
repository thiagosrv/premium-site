"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Eye, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      const st = { immediateRender: false };

      if (imgRef.current) {
        gsap.from(imgRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.4, ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", once: true },
        });
        gsap.from(imgRef.current.querySelector(".img-inner"), {
          scale: 1.15, duration: 1.8, ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", once: true },
        });
        gsap.to(imgRef.current, {
          yPercent: -6, ease: "none",
          scrollTrigger: {
            trigger: imgRef.current, start: "top bottom", end: "bottom top", scrub: true,
          },
        });
      }

      if (textRef.current) {
        gsap.from(textRef.current.querySelector(".about-eyebrow"), {
          x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
          scrollTrigger: { trigger: textRef.current, start: "top 88%", once: true },
        });
        gsap.from(textRef.current.querySelector(".about-h2"), {
          y: 60, opacity: 0, duration: 1.1, ease: "expo.out", ...st,
          scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
        });
        const paras = textRef.current.querySelectorAll(".about-para");
        gsap.from(paras, {
          y: 35, opacity: 0, duration: 0.9, stagger: 0.14,
          ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: textRef.current, start: "top 82%", once: true },
        });
        const badges = textRef.current.querySelectorAll(".about-badge");
        gsap.from(badges, {
          scale: 0.7, opacity: 0, duration: 0.6, stagger: 0.1,
          ease: "back.out(1.6)", immediateRender: false,
          scrollTrigger: { trigger: textRef.current, start: "top 78%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="sobre"
      ref={sectionRef}
      className="py-32 px-8 md:px-20 lg:px-32"
      style={{ background: "#000B38" }}
    >
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
        {/* Image side */}
        <div
          ref={imgRef}
          className="relative aspect-[4/5] overflow-hidden"
          style={{ clipPath: "inset(0 0 0% 0)" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foto.webp"
            alt="Equipe PS Proteção — segurança privada Americana SP"
            className="img-inner w-full h-full object-cover"
          />

          <div className="absolute bottom-0 left-0 w-20 h-1" style={{ background: "#FEBE00" }} />

          <div className="absolute top-8 right-8 opacity-10">
            <Shield size={80} color="#FEBE00" />
          </div>

          <div
            className="absolute bottom-8 left-8 right-8 p-6 border border-white/10"
            style={{ background: "rgba(255,255,255,0.04)", backdropFilter: "blur(16px)" }}
          >
            <p
              className="text-white/60 text-xs uppercase tracking-widest mb-1"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Empresa credenciada — Americana-SP
            </p>
            <p
              className="text-[#FEBE00]"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", fontWeight: 600 }}
            >
              Região Metropolitana de Campinas
            </p>
          </div>
        </div>

        {/* Text side */}
        <div ref={textRef}>
          <span
            className="about-eyebrow block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Quem Somos
          </span>

          <h2
            className="about-h2 text-white mb-8 leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            27 anos protegendo o que importa para você
          </h2>

          <p
            className="about-para text-white/55 mb-5 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}
          >
            Fundada em 1997, a PS Proteção é referência em segurança e facilities na
            Região Metropolitana de Campinas. Nossa missão é proteger pessoas,
            patrimônios e operações com responsabilidade, eficiência e respeito.
          </p>
          <p
            className="about-para text-white/55 mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}
          >
            Da portaria à zeladoria, entregamos terceirização integrada com processo,
            supervisão e relatório — para que você foque no que importa: o seu negócio.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-3">
            {[
              { icon: Shield, label: "Segurança Patrimonial" },
              { icon: Eye, label: "Monitoramento 24h" },
              { icon: Users, label: "Equipe Certificada" },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="about-badge flex items-center gap-2 px-4 py-2.5 border border-[#FEBE00]/15 text-white/60"
                style={{
                  background: "rgba(254,190,0,0.04)",
                  backdropFilter: "blur(8px)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.7rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                }}
              >
                <Icon size={13} color="#FEBE00" />
                {label}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
