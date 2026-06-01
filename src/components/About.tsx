"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Eye, Users } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const imgRef     = useRef<HTMLDivElement>(null);
  const textRef    = useRef<HTMLDivElement>(null);

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
          scale: 1.12, duration: 1.8, ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", once: true },
        });
        gsap.to(imgRef.current, {
          yPercent: -5, ease: "none",
          scrollTrigger: { trigger: imgRef.current, start: "top bottom", end: "bottom top", scrub: true },
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
      className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden"
      style={{
        background: "#F9F8F5",
        borderTop: "3px solid #FEBE00",
      }}
    >
      {/* Decorative background dot */}
      <div className="absolute top-0 right-0 w-64 h-64 pointer-events-none opacity-5"
        style={{ background: "radial-gradient(circle, #000B38 0%, transparent 70%)" }} />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        {/* ── Image ── */}
        <div
          ref={imgRef}
          className="relative aspect-[3/2] lg:aspect-[4/5] overflow-hidden order-2 lg:order-1"
          style={{
            clipPath: "inset(0 0 0% 0)",
            border: "3px solid #000B38",
            boxShadow: "8px 8px 0 #FEBE00",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foto.webp"
            alt="Equipe PS Proteção — segurança privada Americana SP"
            className="img-inner w-full h-full object-cover"
          />

          {/* Decorative shield watermark */}
          <div className="absolute top-6 right-6 opacity-[0.07]">
            <Shield size={72} color="#000B38" />
          </div>

          {/* Info box */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4"
            style={{
              background: "rgba(0,11,56,0.92)",
              backdropFilter: "blur(12px)",
              borderTop: "2px solid #FEBE00",
            }}
          >
            <p
              className="text-[#FEBE00]/80 text-xs uppercase tracking-widest mb-0.5"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Empresa credenciada · Americana-SP
            </p>
            <p
              className="text-white"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", fontWeight: 600 }}
            >
              Região Metropolitana de Campinas
            </p>
          </div>
        </div>

        {/* ── Text ── */}
        <div ref={textRef} className="order-1 lg:order-2">

          {/* Eyebrow */}
          <div className="about-eyebrow flex items-center gap-3 mb-6">
            <div className="w-8 h-0.5 shrink-0" style={{ background: "#FEBE00" }} />
            <span
              className="text-[#000B38] tracking-[0.3em] uppercase text-xs font-medium"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Quem Somos
            </span>
          </div>

          <h2
            className="about-h2 leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
              color: "#000B38",
            }}
          >
            27 anos protegendo o que importa para você
          </h2>

          <p
            className="about-para mb-4 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem", color: "rgba(0,11,56,0.68)", lineHeight: 1.85 }}
          >
            Fundada em 1997, a PS Proteção é referência em segurança e facilities na
            Região Metropolitana de Campinas. Nossa missão é proteger pessoas,
            patrimônios e operações com responsabilidade, eficiência e respeito.
          </p>
          <p
            className="about-para mb-10 leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem", color: "rgba(0,11,56,0.68)", lineHeight: 1.85 }}
          >
            Da portaria à zeladoria, entregamos terceirização integrada com processo,
            supervisão e relatório — para que você foque no que importa: o seu negócio.
          </p>

          {/* Badges */}
          <div className="flex flex-wrap gap-2 md:gap-3">
            {[
              { icon: Shield, label: "Segurança Patrimonial" },
              { icon: Eye,    label: "Monitoramento 24h"    },
              { icon: Users,  label: "Equipe Certificada"   },
            ].map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="about-badge flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5"
                style={{
                  border: "1.5px solid rgba(0,11,56,0.15)",
                  background: "rgba(0,11,56,0.04)",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(0,11,56,0.65)",
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
