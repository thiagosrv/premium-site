"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Shield, Car, Camera, Lock, UserCheck, AlertTriangle, ArrowRight } from "lucide-react";
import CTAPrimary from "./CTAPrimary";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: Shield,
    title: "Segurança Privada",
    description:
      "Soluções completas de segurança para empresas e condomínios. Diagnóstico gratuito e plano personalizado com supervisão ativa 24h.",
    tag: "Mais Solicitado",
    featured: true,
  },
  {
    icon: UserCheck,
    title: "Portaria",
    description:
      "Terceirização de portaria para condomínios e empresas. Porteiros treinados, POPs definidos e cobertura garantida de folgas e férias.",
    tag: null,
    featured: false,
  },
  {
    icon: Lock,
    title: "Controle de Acesso",
    description:
      "Controle rigoroso de entrada e saída de pessoas e veículos. Registro auditável, integração com cancelas e câmeras.",
    tag: null,
    featured: false,
  },
  {
    icon: Car,
    title: "Rondas de Segurança",
    description:
      "Rondas programadas e aleatórias com relatório fotográfico. Identificação de vulnerabilidades e ação imediata.",
    tag: null,
    featured: false,
  },
  {
    icon: Camera,
    title: "Vigia",
    description:
      "Vigilância presencial contínua com profissionais treinados. Dissuasão de invasões e controle básico de acesso.",
    tag: null,
    featured: false,
  },
  {
    icon: AlertTriangle,
    title: "Limpeza & Zeladoria",
    description:
      "Limpeza predial, comercial e industrial com equipes certificadas. Zeladoria com manutenção preventiva e gestão de prestadores.",
    tag: "Facilities",
    featured: false,
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".services-eyebrow", {
        x: -50, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
      gsap.from(".services-h2", {
        y: 50, opacity: 0, duration: 1, ease: "expo.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card");
        gsap.set(cards, { transformPerspective: 900 });
        gsap.from(cards, {
          y: 70, opacity: 0, rotateX: 8, scale: 0.97,
          duration: 0.9, stagger: { each: 0.1, from: "start" },
          ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: "top 88%", once: true },
        });

        const icons = gridRef.current.querySelectorAll(".service-icon-wrap");
        gsap.from(icons, {
          scale: 0, opacity: 0, duration: 0.5, stagger: 0.1,
          ease: "back.out(2)", immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: "top 84%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden"
      style={{ background: "linear-gradient(135deg, #010412 0%, #040926 45%, #0A1540 100%)" }}
    >
      {/* ── SEÇÃO TEXTURA ── grid quadriculado animado */}
      <div className="section-grid" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 20% 50%, rgba(254,190,0,0.06) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 85% 15%, rgba(20,40,120,0.35) 0%, transparent 45%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 md:gap-6">
          <div className="max-w-2xl">
            <span
              className="services-eyebrow block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              O que fazemos
            </span>
            <h2
              className="services-h2 text-white leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              Terceirização integrada com processo, supervisão e relatório
            </h2>
          </div>
          <CTAPrimary
            href="https://wa.me/5519978210246"
            target="_blank" rel="noopener noreferrer"
            className="shrink-0 inline-flex items-center gap-2 px-6 py-3 font-semibold"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
          >
            Solicitar Diagnóstico <ArrowRight size={14} />
          </CTAPrimary>
        </div>

        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map(({ icon: Icon, title, description, tag, featured }) => (
            <div
              key={title}
              className="service-card group relative flex flex-col p-5 md:p-8 overflow-hidden transition-all duration-500 hover:-translate-y-2 cursor-default"
              style={{
                background: featured
                  ? "linear-gradient(145deg, rgba(254,190,0,0.09) 0%, rgba(254,190,0,0.03) 100%)"
                  : "linear-gradient(145deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)",
                border: featured
                  ? "1px solid rgba(254,190,0,0.30)"
                  : "1px solid rgba(255,255,255,0.07)",
                boxShadow: featured
                  ? "0 16px 60px rgba(254,190,0,0.10), 0 4px 20px rgba(0,0,0,0.5), inset 0 1px 0 rgba(254,190,0,0.12)"
                  : "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
                backdropFilter: "blur(10px)",
                borderRadius: "5px",
              }}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{
                background: "radial-gradient(circle at 30% 0%, rgba(254,190,0,0.08) 0%, transparent 65%)",
              }} />
              <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{
                background: "linear-gradient(90deg, transparent, #FEBE00, transparent)",
              }} />
              {featured && (
                <div className="absolute top-0 left-0 right-0 h-px" style={{
                  background: "linear-gradient(90deg, transparent, rgba(254,190,0,0.7), transparent)",
                }} />
              )}

              {tag && (
                <div
                  className="absolute top-5 right-5 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-[0.15em]"
                  style={{
                    background: featured ? "rgba(254,190,0,0.18)" : "rgba(255,255,255,0.06)",
                    border: featured ? "1px solid rgba(254,190,0,0.4)" : "1px solid rgba(255,255,255,0.1)",
                    color: featured ? "#FEBE00" : "rgba(255,255,255,0.5)",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  {tag}
                </div>
              )}

              <div
                className="service-icon-wrap w-14 h-14 flex items-center justify-center mb-7 relative z-10 transition-transform duration-300 group-hover:scale-110"
                style={{
                  background: featured ? "rgba(254,190,0,0.14)" : "rgba(254,190,0,0.06)",
                  border: featured ? "1px solid rgba(254,190,0,0.3)" : "1px solid rgba(254,190,0,0.15)",
                  boxShadow: featured ? "0 0 24px rgba(254,190,0,0.2)" : "none",
                }}
              >
                <Icon size={24} color="#FEBE00" />
              </div>

              <h3 className="text-white mb-3 relative z-10" style={{
                fontFamily: "var(--font-cormorant)", fontSize: "1.4rem", fontWeight: 700,
              }}>
                {title}
              </h3>
              <p className="text-white/65 leading-relaxed relative z-10 flex-1" style={{
                fontFamily: "var(--font-inter)", fontSize: "0.875rem", lineHeight: "1.7",
              }}>
                {description}
              </p>

              <div className="relative z-10 mt-6 pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <a
                  href="https://wa.me/5519978210246"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-[#FEBE00]/60 hover:text-[#FEBE00] transition-colors duration-300"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  Saiba mais
                  <ArrowRight size={13} className="transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
