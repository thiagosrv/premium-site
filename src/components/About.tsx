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

      // Image — curtain reveal + zoom from inside
      if (imgRef.current) {
        gsap.from(imgRef.current, {
          clipPath: "inset(0 0 100% 0)",
          duration: 1.5, ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", once: true },
        });
        gsap.from(imgRef.current.querySelector(".img-inner"), {
          scale: 1.14, duration: 2, ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: imgRef.current, start: "top 88%", once: true },
        });
        // Slow parallax on scroll
        gsap.to(imgRef.current, {
          yPercent: -5, ease: "none",
          scrollTrigger: { trigger: imgRef.current, start: "top bottom", end: "bottom top", scrub: true },
        });
      }

      if (textRef.current) {
        // Eyebrow slide
        gsap.from(textRef.current.querySelector(".about-eyebrow"), {
          x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
          scrollTrigger: { trigger: textRef.current, start: "top 88%", once: true },
        });

        // H2 word-by-word curtain reveal
        gsap.from(textRef.current.querySelectorAll(".about-h2-word"), {
          y: "110%", duration: 1.05, stagger: 0.07,
          ease: "expo.out", immediateRender: false,
          scrollTrigger: { trigger: textRef.current, start: "top 85%", once: true },
        });

        // Paragraphs cascade
        const paras = textRef.current.querySelectorAll(".about-para");
        gsap.from(paras, {
          y: 38, opacity: 0, duration: 0.95, stagger: 0.15,
          ease: "power3.out", ...st,
          scrollTrigger: { trigger: textRef.current, start: "top 82%", once: true },
        });

        // Badges pop with rotation
        const badges = textRef.current.querySelectorAll(".about-badge");
        gsap.from(badges, {
          scale: 0.6, opacity: 0, rotation: -5, duration: 0.65, stagger: 0.1,
          ease: "back.out(2)", ...st,
          scrollTrigger: { trigger: textRef.current, start: "top 78%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h2Words   = ["anos"];
  const h2Accent  = ["27"];
  const h2Part2   = ["protegendo", "o", "que", "importa"];

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
      {/* Subtle decorative blobs */}
      <div
        className="absolute top-0 right-0 w-72 h-72 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 0%, rgba(0,11,56,0.04) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-60 h-60 pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 100%, rgba(254,190,0,0.06) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-24 items-center relative z-10">

        {/* ── Image ── */}
        <div
          ref={imgRef}
          className="relative aspect-[3/2] lg:aspect-[4/5] overflow-hidden order-2 lg:order-1"
          style={{
            clipPath: "inset(0 0 0% 0)",
            border: "3px solid #000B38",
            boxShadow: "8px 8px 0 #FEBE00",
            borderRadius: "10px",
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/foto.webp"
            alt="Equipe PS Proteção — segurança privada Americana SP"
            className="img-inner w-full h-full object-cover"
          />

          {/* Decorative shield watermark */}
          <div className="absolute top-6 right-6 opacity-[0.06]">
            <Shield size={80} color="#000B38" />
          </div>

          {/* Info bar */}
          <div
            className="absolute bottom-0 left-0 right-0 px-5 py-4"
            style={{
              background: "rgba(0,11,56,0.93)",
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

          {/* H2 — "27" in gold + split-word */}
          <h2
            className="about-h2 leading-tight mb-6"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 4.6vw, 4.6rem)",
              fontWeight: 700,
              color: "#000B38",
            }}
          >
            {/* "27" destacado */}
            <span style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}>
              <em className="about-h2-word" style={{ display: "inline-block", color: "#FEBE00", fontStyle: "italic" }}>27</em>
            </span>
            {h2Words.map((word, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}>
                <span className="about-h2-word" style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
            <br className="hidden sm:block" />
            {h2Part2.map((word, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}>
                <span className="about-h2-word" style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
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
                className="about-badge flex items-center gap-2 px-3 py-2 md:px-4 md:py-2.5 transition-transform duration-300 hover:-translate-y-0.5"
                style={{
                  background: `rgba(255,255,255,0.8) padding-box,
                               linear-gradient(135deg, rgba(254,190,0,0.55) 0%, rgba(0,11,56,0.18) 50%, rgba(254,190,0,0.28) 100%) border-box`,
                  border: "1.5px solid transparent",
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "rgba(0,11,56,0.65)",
                  borderRadius: "10px",
                  boxShadow: "0 2px 8px rgba(0,11,56,0.07)",
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
