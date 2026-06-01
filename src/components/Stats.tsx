"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Building2, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    display: "27 anos",
    label: "No Mercado",
    description: "Desde 1997 entregando segurança e confiança para condomínios e empresas.",
    icon: Clock,
    highlight: true,
  },
  {
    display: "3.000+",
    label: "Colaboradores Treinados",
    description: "Equipes certificadas, com treinamento contínuo e supervisão ativa.",
    icon: Users,
    highlight: false,
  },
  {
    display: "1.000+",
    label: "Clientes Atendidos",
    description: "Condomínios, indústrias e empresas que confiam na PS Proteção.",
    icon: Building2,
    highlight: false,
  },
  {
    display: "100+",
    label: "Cidades Atendidas",
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
      gsap.from(".stats-heading", {
        clipPath: "inset(0 0 100% 0)", y: 8,
        duration: 1.1, ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.from(".stat-card", {
        y: 48, opacity: 0, duration: 0.75,
        stagger: 0.12, ease: "power3.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
      });
      gsap.from(".stat-number", {
        opacity: 0, y: 12, duration: 0.6,
        stagger: 0.12, ease: "power2.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });
      gsap.from(".stat-accent-line", {
        scaleX: 0, transformOrigin: "left center",
        duration: 0.9, stagger: 0.12, ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 76%", once: true },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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

        {/* Section header */}
        <div className="mb-12 md:mb-16">
          <div className="stats-eyebrow flex items-center gap-3 mb-4">
            <div className="w-8 h-0.5 shrink-0" style={{ background: "#000B38" }} />
            <span
              className="tracking-[0.3em] uppercase text-xs font-medium"
              style={{ fontFamily: "var(--font-inter)", color: "#000B38" }}
            >
              Números que Comprovam
            </span>
          </div>
          <h2
            className="stats-heading leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
              color: "#000B38",
            }}
          >
            Solidez e escala que poucos alcançam
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map(({ display, label, description, icon: Icon, highlight }) => (
            <div
              key={label}
              className="stat-card group relative flex flex-col p-6 md:p-7 overflow-hidden transition-all duration-400 hover:-translate-y-1"
              style={{
                background: highlight ? "#000B38" : "#FFFFFF",
                border: highlight ? "none" : "1.5px solid rgba(0,11,56,0.12)",
                boxShadow: highlight
                  ? "0 8px 32px rgba(0,11,56,0.3)"
                  : "0 2px 16px rgba(0,11,56,0.08)",
                borderRadius: "5px",
              }}
            >
              {/* Hover accent top */}
              {!highlight && (
                <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "#000B38" }} />
              )}

              {/* Icon */}
              <div
                className="w-11 h-11 flex items-center justify-center mb-5 shrink-0"
                style={{
                  background: highlight ? "rgba(254,190,0,0.12)" : "rgba(0,11,56,0.06)",
                  border: highlight ? "1px solid rgba(254,190,0,0.3)" : "1px solid rgba(0,11,56,0.1)",
                  borderRadius: "5px",
                }}
              >
                <Icon size={19} color={highlight ? "#FEBE00" : "#000B38"} />
              </div>

              {/* Number */}
              <div
                className="stat-number leading-none mb-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.4rem, 4vw, 3.4rem)",
                  fontWeight: 800,
                  color: highlight ? "#FEBE00" : "#000B38",
                }}
              >
                {display}
              </div>

              {/* Accent line */}
              <div
                className="stat-accent-line h-px w-10 mb-3"
                style={{ background: highlight ? "rgba(254,190,0,0.5)" : "rgba(0,11,56,0.2)" }}
              />

              {/* Label */}
              <p
                className="mb-2 font-semibold"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.05rem",
                  color: highlight ? "#FFFFFF" : "#000B38",
                }}
              >
                {label}
              </p>

              {/* Description */}
              <p
                className="leading-relaxed mt-auto text-sm"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  color: highlight ? "rgba(255,255,255,0.65)" : "rgba(0,11,56,0.55)",
                }}
              >
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
