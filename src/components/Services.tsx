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
  const gridRef    = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // ── Scroll-triggered animations ────────────────────────────────────
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".services-eyebrow", {
        x: -50, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });

      gsap.from(".services-h2-word", {
        y: "110%", duration: 1.05, stagger: 0.065,
        ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      if (gridRef.current) {
        const cards = gridRef.current.querySelectorAll(".service-card");
        gsap.set(cards, { transformPerspective: 900 });
        gsap.from(cards, {
          y: 90, opacity: 0, rotateX: 14, scale: 0.94,
          duration: 1.05, stagger: { each: 0.1, from: "start" },
          ease: "power3.out", immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: "top 88%", once: true },
        });
        const icons = gridRef.current.querySelectorAll(".service-icon-wrap");
        gsap.from(icons, {
          scale: 0, opacity: 0, rotation: -20, duration: 0.65, stagger: 0.1,
          ease: "back.out(2.8)", immediateRender: false,
          scrollTrigger: { trigger: gridRef.current, start: "top 84%", once: true },
        });
      }
    }, sectionRef);

    // ── 3D Tilt hover ──────────────────────────────────────────────────
    const tiltCards = gridRef.current
      ? Array.from(gridRef.current.querySelectorAll<HTMLElement>(".service-card"))
      : [];

    type TH = { move: (e: MouseEvent) => void; leave: () => void };
    const handlers: TH[] = [];

    tiltCards.forEach((card) => {
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x =  ((e.clientX - r.left) / r.width  - 0.5) * 16;
        const y = -((e.clientY - r.top)  / r.height - 0.5) * 12;
        gsap.to(card, {
          rotateY: x, rotateX: y, translateY: -10,
          transformPerspective: 900,
          duration: 0.35, ease: "power2.out", overwrite: "auto",
        });
      };
      const leave = () => {
        gsap.to(card, {
          rotateX: 0, rotateY: 0, translateY: 0,
          duration: 0.75, ease: "elastic.out(1, 0.5)", overwrite: "auto",
        });
      };
      handlers.push({ move, leave });
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
    });

    return () => {
      ctx.revert();
      tiltCards.forEach((card, i) => {
        card.removeEventListener("mousemove", handlers[i].move);
        card.removeEventListener("mouseleave", handlers[i].leave);
      });
    };
  }, []);

  return (
    <section
      id="servicos"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden"
      style={{ background: "linear-gradient(160deg, #020715 0%, #050C24 50%, #0B1540 100%)" }}
    >
      <div className="section-grid" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 15% 50%, rgba(254,190,0,0.055) 0%, transparent 50%)" }} />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="mb-10 md:mb-16 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <span
              className="services-eyebrow block mb-5 text-[#FEBE00] tracking-[0.35em] uppercase text-xs font-semibold"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              O que fazemos
            </span>
            <h2
              className="text-white leading-[1.0]"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(2.8rem, 5.5vw, 5.5rem)",
                fontWeight: 800,
              }}
            >
              {["Terceirização", "integrada"].map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.2em" }}>
                  <span className="services-h2-word" style={{ display: "inline-block" }}>{w}</span>
                </span>
              ))}
              <br />
              <em style={{ fontStyle: "italic", color: "#FEBE00" }}>
                {["com", "processo"].map((w, i) => (
                  <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.2em" }}>
                    <span className="services-h2-word" style={{ display: "inline-block" }}>{w}</span>
                  </span>
                ))}
              </em>
              {" "}
              {["e", "supervisão"].map((w, i) => (
                <span key={i} style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.2em" }}>
                  <span className="services-h2-word" style={{ display: "inline-block" }}>{w}</span>
                </span>
              ))}
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

        {/* ── Cards ── */}
        <div ref={gridRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {services.map(({ icon: Icon, title, description, tag, featured }) => (
            <div
              key={title}
              className="service-card group relative flex flex-col overflow-hidden cursor-default"
              style={{
                background: featured ? "#FEBE00" : "rgba(7,13,36,0.96)",
                border: featured ? "3px solid #000B38" : "1px solid rgba(255,255,255,0.07)",
                boxShadow: featured
                  ? "6px 6px 0 #000B38"
                  : "0 8px 40px rgba(0,0,0,0.6)",
                borderRadius: "10px",
                transformStyle: "preserve-3d",
              }}
            >
              {/* Inner padding container */}
              <div className="flex flex-col flex-1 p-6 md:p-8">

                {/* Top row: icon + tag */}
                <div className="flex items-start justify-between mb-8">
                  <div
                    className="service-icon-wrap w-13 h-13 flex items-center justify-center"
                    style={{
                      width: "52px",
                      height: "52px",
                      background: featured ? "rgba(0,11,56,0.14)" : "rgba(254,190,0,0.08)",
                      border: featured ? "1.5px solid rgba(0,11,56,0.28)" : "1.5px solid rgba(254,190,0,0.22)",
                      borderRadius: "12px",
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color={featured ? "#000B38" : "#FEBE00"} />
                  </div>

                  {tag && (
                    <div
                      className="px-2.5 py-1 text-[11px] font-bold uppercase tracking-[0.18em] shrink-0"
                      style={{
                        background: featured ? "#000B38" : "rgba(254,190,0,0.1)",
                        border: featured ? "none" : "1px solid rgba(254,190,0,0.3)",
                        color: featured ? "#FEBE00" : "#FEBE00",
                        fontFamily: "var(--font-inter)",
                        borderRadius: "6px",
                      }}
                    >
                      {tag}
                    </div>
                  )}
                </div>

                {/* Title */}
                <h3
                  className="mb-3 leading-tight"
                  style={{
                    fontFamily: "var(--font-cormorant)",
                    fontSize: "clamp(1.55rem, 2.5vw, 2rem)",
                    fontWeight: 800,
                    color: featured ? "#000B38" : "#FFFFFF",
                  }}
                >
                  {title}
                </h3>

                {/* Description */}
                <p
                  className="leading-relaxed flex-1"
                  style={{
                    fontFamily: "var(--font-inter)",
                    fontSize: "0.875rem",
                    lineHeight: "1.75",
                    color: featured ? "rgba(0,11,56,0.72)" : "rgba(255,255,255,0.58)",
                  }}
                >
                  {description}
                </p>

                {/* Footer link */}
                <div
                  className="mt-6 pt-5"
                  style={{ borderTop: featured ? "1px solid rgba(0,11,56,0.14)" : "1px solid rgba(255,255,255,0.07)" }}
                >
                  <a
                    href="https://wa.me/5519978210246"
                    target="_blank" rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-all duration-300 group/link"
                    style={{
                      fontFamily: "var(--font-inter)",
                      fontSize: "0.75rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      fontWeight: 600,
                      color: featured ? "rgba(0,11,56,0.65)" : "rgba(254,190,0,0.6)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = featured ? "#000B38" : "#FEBE00";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = featured ? "rgba(0,11,56,0.65)" : "rgba(254,190,0,0.6)";
                    }}
                  >
                    Saiba mais
                    <ArrowRight size={13} className="transition-transform duration-300 group-hover/link:translate-x-1.5" />
                  </a>
                </div>
              </div>

              {/* Featured: ambient glow bottom-right */}
              {featured && (
                <div
                  className="absolute bottom-0 right-0 w-48 h-48 pointer-events-none opacity-[0.08]"
                  style={{ background: "radial-gradient(circle at 100% 100%, #000B38 0%, transparent 70%)" }}
                />
              )}
              {/* Dark cards: hover top shimmer */}
              {!featured && (
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(254,190,0,0.5), transparent)" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
