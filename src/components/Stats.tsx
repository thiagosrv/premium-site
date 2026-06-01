"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Building2, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    display: "27",
    unit: "anos",
    label: "No Mercado",
    description: "Desde 1997 entregando segurança e confiança para condomínios e empresas.",
    icon: Clock,
    highlight: true,
  },
  {
    display: "3.000",
    unit: "+",
    label: "Colaboradores",
    description: "Equipes certificadas, com treinamento contínuo e supervisão ativa.",
    icon: Users,
    highlight: false,
  },
  {
    display: "1.000",
    unit: "+",
    label: "Clientes Ativos",
    description: "Condomínios, indústrias e empresas que confiam na PS Proteção.",
    icon: Building2,
    highlight: false,
  },
  {
    display: "100",
    unit: "+",
    label: "Cidades",
    description: "Cobertura na Região Metropolitana de Campinas e interior paulista.",
    icon: MapPin,
    highlight: false,
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".stats-eyebrow", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });

      // H2 word-by-word
      gsap.from(".stats-h2-word", {
        y: "110%", duration: 1.1, stagger: 0.07,
        ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      // Featured card dramatic entrance
      gsap.from(".stat-featured", {
        x: -60, opacity: 0, scale: 0.93,
        duration: 1, ease: "power3.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
      });

      // Regular cards stagger up
      gsap.from(".stat-regular", {
        y: 55, opacity: 0, scale: 0.94,
        duration: 0.85, stagger: 0.12, ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      // Numbers mega pop
      gsap.from(".stat-number-display", {
        scale: 0.3, opacity: 0, y: 24,
        duration: 0.9, stagger: 0.12,
        ease: "back.out(2.5)", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true },
      });

      // Icon entrance with rotation
      gsap.from(".stat-icon", {
        scale: 0, opacity: 0, rotation: -25,
        duration: 0.6, stagger: 0.12,
        ease: "back.out(2.8)", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });

      // Featured icon: gentle float
      gsap.to(".stat-icon-featured", {
        y: -8, duration: 3, ease: "sine.inOut",
        repeat: -1, yoyo: true, delay: 1,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h2Line1 = ["Solidez", "e", "escala"];
  const h2Line2 = ["que", "poucos", "alcançam"];

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden"
      data-texture="diagonal"
      style={{
        background: "#FEBE00",
        borderTop: "3px solid #000B38",
        borderBottom: "3px solid #000B38",
      }}
    >
      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="mb-12 md:mb-16">
          <div className="stats-eyebrow flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 shrink-0" style={{ background: "#000B38" }} />
            <span
              className="tracking-[0.3em] uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-inter)", color: "#000B38" }}
            >
              Números que Comprovam
            </span>
          </div>
          <h2
            className="leading-[1.0]"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
              fontWeight: 800,
              color: "#000B38",
            }}
          >
            {h2Line1.map((w, i) => (
              <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.2em" }}>
                <span className="stats-h2-word" style={{ display: "inline-block" }}>{w}</span>
              </span>
            ))}
            <br />
            <em style={{ fontStyle: "italic" }}>
              {h2Line2.map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.2em" }}>
                  <span className="stats-h2-word" style={{ display: "inline-block" }}>{w}</span>
                </span>
              ))}
            </em>
          </h2>
        </div>

        {/* ── Bento grid: featured left + 3 cards right ── */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-5">

          {/* Featured — navy, gold number, tall */}
          <div
            className="stat-featured relative flex flex-col justify-between p-7 md:p-8 overflow-hidden md:w-72 lg:w-80 shrink-0"
            style={{
              background: "#000B38",
              border: "3px solid #000B38",
              boxShadow: "6px 6px 0 #000B38",
              borderRadius: "10px",
              minHeight: "260px",
            }}
          >
            {/* Icon */}
            <div
              className="stat-icon stat-icon-featured w-12 h-12 flex items-center justify-center mb-auto"
              style={{
                background: "rgba(254,190,0,0.12)",
                border: "1.5px solid rgba(254,190,0,0.3)",
                borderRadius: "10px",
              }}
            >
              <Clock size={20} color="#FEBE00" />
            </div>

            {/* Big number */}
            <div className="mt-8">
              <div
                className="stat-number-display leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(4.5rem, 8vw, 7.5rem)",
                  fontWeight: 900,
                  color: "#FEBE00",
                  lineHeight: 0.85,
                }}
              >
                {stats[0].display}
              </div>
              <div
                className="mt-1 mb-3 font-semibold tracking-wide"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.9rem",
                  color: "rgba(254,190,0,0.55)",
                  textTransform: "uppercase",
                  letterSpacing: "0.18em",
                }}
              >
                {stats[0].unit}
              </div>
              <p
                className="font-bold"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.3rem",
                  color: "#FFFFFF",
                }}
              >
                {stats[0].label}
              </p>
              <p
                className="mt-1.5 leading-relaxed"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.78rem",
                  color: "rgba(255,255,255,0.5)",
                  lineHeight: 1.65,
                }}
              >
                {stats[0].description}
              </p>
            </div>

            {/* Decorative corner */}
            <div
              className="absolute top-0 right-0 w-24 h-24 pointer-events-none opacity-[0.07]"
              style={{ background: "radial-gradient(circle at 100% 0%, #FEBE00 0%, transparent 70%)" }}
            />
          </div>

          {/* Right grid — 3 white cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
            {stats.slice(1).map(({ display, unit, label, description, icon: Icon }) => (
              <div
                key={label}
                className="stat-regular group relative flex flex-col p-6 md:p-7 overflow-hidden transition-transform duration-300 hover:-translate-y-1.5"
                style={{
                  background: "#FFFFFF",
                  border: "2.5px solid #000B38",
                  boxShadow: "4px 4px 0 #000B38",
                  borderRadius: "10px",
                }}
              >
                {/* Icon */}
                <div
                  className="stat-icon w-10 h-10 flex items-center justify-center mb-5"
                  style={{
                    background: "rgba(0,11,56,0.06)",
                    border: "1.5px solid rgba(0,11,56,0.14)",
                    borderRadius: "10px",
                  }}
                >
                  <Icon size={17} color="#000B38" />
                </div>

                {/* Number */}
                <div
                  className="stat-number-display leading-none"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(3rem, 5vw, 4.8rem)",
                    fontWeight: 900,
                    color: "#000B38",
                    lineHeight: 0.9,
                  }}
                >
                  {display}
                  <span style={{ fontSize: "0.45em", fontWeight: 700, verticalAlign: "super", color: "#FEBE00" }}>{unit}</span>
                </div>

                {/* Label */}
                <p
                  className="mt-3 mb-1.5 font-bold"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "1.15rem",
                    color: "#000B38",
                  }}
                >
                  {label}
                </p>

                {/* Description */}
                <p
                  className="mt-auto leading-relaxed"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.78rem",
                    color: "rgba(0,11,56,0.52)",
                    lineHeight: 1.65,
                  }}
                >
                  {description}
                </p>

                {/* Hover: gold bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#FEBE00", borderRadius: "0 0 10px 10px" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
