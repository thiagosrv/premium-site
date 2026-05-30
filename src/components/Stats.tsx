"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock, Users, Building2, MapPin } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  {
    value: 27,
    suffix: " anos",
    label: "No Mercado",
    description: "Desde 1997 entregando segurança e confiança para condomínios e empresas.",
    icon: Clock,
    highlight: true,
  },
  {
    value: 3000,
    suffix: "+",
    label: "Colaboradores Treinados",
    description: "Equipes certificadas, com treinamento contínuo e supervisão ativa.",
    icon: Users,
    highlight: false,
  },
  {
    value: 1000,
    suffix: "+",
    label: "Clientes Atendidos",
    description: "Condomínios, indústrias e empresas que confiam na PS Proteção.",
    icon: Building2,
    highlight: false,
  },
  {
    value: 100,
    suffix: "+",
    label: "Cidades Atendidas",
    description: "Cobertura na Região Metropolitana de Campinas e interior paulista.",
    icon: MapPin,
    highlight: false,
  },
];

export default function Stats() {
  const sectionRef = useRef<HTMLElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section header
      const st = { immediateRender: false };

      gsap.from(".stats-eyebrow", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
      gsap.from(".stats-heading", {
        y: 40, opacity: 0, duration: 1, ease: "expo.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      const cards = document.querySelectorAll(".stat-card");
      cards.forEach((card, i) => {
        const xDir = i % 2 === 0 ? -40 : 40;
        gsap.from(card, {
          x: xDir, y: 50, opacity: 0, scale: 0.95,
          duration: 0.9, ease: "power3.out",
          delay: i * 0.1, immediateRender: false,
          scrollTrigger: { trigger: sectionRef.current, start: "top 82%", once: true },
        });
      });

      gsap.from(".stat-icon-wrap", {
        scale: 0, opacity: 0, duration: 0.6, stagger: 0.1,
        ease: "back.out(2)", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
      });

      gsap.from(".stat-accent-line", {
        scaleX: 0, transformOrigin: "left center",
        duration: 1.2, stagger: 0.1, ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true },
      });

      // Counters
      counterRefs.current.forEach((el, i) => {
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stats[i].value,
          duration: 2.5, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%", once: true },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="diferenciais"
      ref={sectionRef}
      className="py-32 px-8 md:px-20 lg:px-32 relative overflow-hidden"
      style={{ background: "#000B38" }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none" style={{
        background: "radial-gradient(ellipse at 50% 0%, rgba(254,190,0,0.04) 0%, transparent 65%)",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section header */}
        <div className="mb-16 text-center">
          <span
            className="stats-eyebrow inline-block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Números que Comprovam
          </span>
          <h2
            className="stats-heading text-white leading-tight"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
            }}
          >
            Solidez e escala que poucos alcançam
          </h2>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map(({ value: _v, suffix, label, description, icon: Icon, highlight }, i) => (
            <div
              key={label}
              className="stat-card group relative flex flex-col p-7 overflow-hidden transition-all duration-500 hover:-translate-y-2"
              style={{
                background: highlight
                  ? "linear-gradient(145deg, rgba(254,190,0,0.10) 0%, rgba(254,190,0,0.04) 100%)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.02) 100%)",
                border: highlight
                  ? "1px solid rgba(254,190,0,0.35)"
                  : "1px solid rgba(255,255,255,0.08)",
                boxShadow: highlight
                  ? "0 8px 40px rgba(254,190,0,0.12), inset 0 1px 0 rgba(254,190,0,0.15)"
                  : "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(12px)",
              }}
            >
              {/* Hover glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "radial-gradient(circle at 50% 0%, rgba(254,190,0,0.08) 0%, transparent 70%)",
              }} />

              {/* Icon */}
              <div
                className="stat-icon-wrap w-12 h-12 flex items-center justify-center mb-6 relative z-10"
                style={{
                  background: highlight ? "rgba(254,190,0,0.15)" : "rgba(254,190,0,0.07)",
                  border: "1px solid rgba(254,190,0,0.2)",
                }}
              >
                <Icon size={20} color="#FEBE00" />
              </div>

              {/* Number */}
              <div
                className="relative z-10 mb-1 leading-none"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "clamp(2.8rem, 4.5vw, 4rem)",
                  fontWeight: 800,
                  color: highlight ? "#FEBE00" : "#fff",
                  textShadow: highlight ? "0 0 40px rgba(254,190,0,0.4)" : "none",
                }}
              >
                <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
                <span>{suffix}</span>
              </div>

              {/* Accent line */}
              <div
                className="stat-accent-line relative z-10 h-px w-12 mb-4"
                style={{ background: highlight ? "#FEBE00" : "rgba(254,190,0,0.4)" }}
              />

              {/* Label */}
              <p
                className="relative z-10 text-white font-semibold mb-2"
                style={{
                  fontFamily: "var(--font-cormorant)",
                  fontSize: "1.05rem",
                  fontWeight: 600,
                }}
              >
                {label}
              </p>

              {/* Description */}
              <p
                className="relative z-10 text-white/45 leading-relaxed mt-auto"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem" }}
              >
                {description}
              </p>

              {/* Bottom glow bar */}
              <div
                className="absolute bottom-0 left-0 right-0 h-px opacity-60"
                style={{
                  background: highlight
                    ? "linear-gradient(90deg, transparent, #FEBE00, transparent)"
                    : "linear-gradient(90deg, transparent, rgba(254,190,0,0.3), transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
