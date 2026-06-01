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

      // Eyebrow slide in
      gsap.from(".stats-eyebrow", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });

      // H2 word-by-word curtain reveal
      gsap.from(".stats-h2-word", {
        y: "110%", duration: 1.1, stagger: 0.07,
        ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      // Cards — scale + rotateX entrance
      gsap.from(".stat-card", {
        y: 65, opacity: 0, scale: 0.9, rotateX: 8,
        duration: 0.9, stagger: 0.13, ease: "power3.out",
        immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
      });

      // Numbers — big pop entrance
      gsap.from(".stat-number", {
        scale: 0.4, opacity: 0, y: 18,
        duration: 0.85, stagger: 0.13,
        ease: "back.out(2.2)", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 77%", once: true },
      });

      // Accent lines grow from left
      gsap.from(".stat-accent-line", {
        scaleX: 0, transformOrigin: "left center",
        duration: 0.9, stagger: 0.12, ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 74%", once: true },
      });

      // Icons pop in with rotation
      gsap.from(".stat-icon", {
        scale: 0, opacity: 0, rotation: -20,
        duration: 0.65, stagger: 0.13,
        ease: "back.out(2.5)", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      // Featured icon: continuous gentle float
      gsap.to(".stat-icon-featured", {
        y: -7, duration: 2.8, ease: "sine.inOut",
        repeat: -1, yoyo: true, delay: 0.8,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h2Line1 = ["Solidez", "e", "escala", "que"];
  const h2Line2 = ["poucos", "alcançam"];

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

        {/* ── Section header ── */}
        <div className="mb-12 md:mb-16">
          <div className="stats-eyebrow flex items-center gap-3 mb-5">
            <div className="w-8 h-0.5 shrink-0" style={{ background: "#000B38" }} />
            <span
              className="tracking-[0.3em] uppercase text-xs font-medium"
              style={{ fontFamily: "var(--font-inter)", color: "#000B38" }}
            >
              Números que Comprovam
            </span>
          </div>

          {/* Split-word H2 */}
          <h2
            className="leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(2.4rem, 4.6vw, 4.6rem)",
              fontWeight: 700,
              color: "#000B38",
            }}
          >
            {h2Line1.map((word, i) => (
              <span
                key={i}
                style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
              >
                <span className="stats-h2-word" style={{ display: "inline-block" }}>{word}</span>
              </span>
            ))}
            <br className="hidden sm:block" />
            <em style={{ fontStyle: "italic", fontWeight: 700 }}>
              {h2Line2.map((word, i) => (
                <span
                  key={i}
                  style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
                >
                  <span className="stats-h2-word" style={{ display: "inline-block" }}>{word}</span>
                </span>
              ))}
            </em>
          </h2>
        </div>

        {/* ── Cards grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {stats.map(({ display, label, description, icon: Icon, highlight }) => (
            <div
              key={label}
              className="stat-card group relative flex flex-col p-6 md:p-7 overflow-hidden transition-transform duration-300 hover:-translate-y-2"
              style={{
                /* Gradient border trick */
                background: highlight
                  ? `#000B38 padding-box,
                     linear-gradient(135deg, #FEBE00 0%, rgba(254,190,0,0.45) 50%, #FEBE00 100%) border-box`
                  : `#FFFFFF padding-box,
                     linear-gradient(135deg, rgba(254,190,0,0.70) 0%, rgba(0,11,56,0.18) 55%, rgba(254,190,0,0.38) 100%) border-box`,
                border: highlight ? "2px solid transparent" : "1.5px solid transparent",
                boxShadow: highlight
                  ? "0 16px 48px rgba(0,11,56,0.32), 0 0 0 6px rgba(254,190,0,0.07)"
                  : "0 4px 24px rgba(0,11,56,0.12)",
                borderRadius: "10px",
              }}
            >
              {/* Hover top accent line */}
              {!highlight && (
                <div
                  className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(0,11,56,0.35), transparent)", borderRadius: "10px 10px 0 0" }}
                />
              )}

              {/* Icon */}
              <div
                className={`w-11 h-11 flex items-center justify-center mb-5 shrink-0 stat-icon ${highlight ? "stat-icon-featured" : ""}`}
                style={{
                  background: highlight ? "rgba(254,190,0,0.14)" : "rgba(0,11,56,0.07)",
                  border: highlight ? "1px solid rgba(254,190,0,0.38)" : "1px solid rgba(0,11,56,0.14)",
                  borderRadius: "10px",
                }}
              >
                <Icon size={19} color={highlight ? "#FEBE00" : "#000B38"} />
              </div>

              {/* Number */}
              <div
                className="stat-number leading-none mb-1"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.6rem, 4.2vw, 3.8rem)",
                  fontWeight: 800,
                  color: highlight ? "#FEBE00" : "#000B38",
                }}
              >
                {display}
              </div>

              {/* Accent line */}
              <div
                className="stat-accent-line h-px w-10 mb-3"
                style={{ background: highlight ? "rgba(254,190,0,0.55)" : "rgba(0,11,56,0.28)" }}
              />

              {/* Label */}
              <p
                className="mb-2 font-semibold"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.12rem",
                  color: highlight ? "#FFFFFF" : "#000B38",
                }}
              >
                {label}
              </p>

              {/* Description */}
              <p
                className="leading-relaxed mt-auto"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  color: highlight ? "rgba(255,255,255,0.65)" : "rgba(0,11,56,0.55)",
                  lineHeight: "1.7",
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
