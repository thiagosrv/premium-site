"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  MessageCircle, ArrowRight, Plus, Minus, ImageIcon,
  UserCheck, Sparkles, Shield, Car, Coffee, Briefcase,
  Monitor, Wrench, Clock, Users, FileText, Camera, Award,
  Eye, Phone, MapPin, Zap, Settings, Star, Smile,
  Clipboard,
} from "lucide-react";
import Navbar from "./Navbar";
import FloatingWhatsApp from "./FloatingWhatsApp";
import PageHero from "./PageHero";
import type { ServiceData } from "@/lib/services";
import { getRelatedServices, SERVICES } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

/* ── Icon lookup ────────────────────────────────────────────────────────── */
const ICONS: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  "user-check": UserCheck, sparkles: Sparkles, shield: Shield,
  car: Car, coffee: Coffee, briefcase: Briefcase, monitor: Monitor,
  wrench: Wrench, clock: Clock, users: Users, "file-text": FileText,
  camera: Camera, award: Award, eye: Eye, phone: Phone,
  "map-pin": MapPin, zap: Zap, settings: Settings, star: Star,
  smile: Smile, clipboard: Clipboard,
};

function Icon({ name, size = 20, color = "#FEBE00", className }: { name: string; size?: number; color?: string; className?: string }) {
  const C = ICONS[name] ?? Shield;
  return <C size={size} color={color} className={className} />;
}

/* ── Main template ──────────────────────────────────────────────────────── */
export default function ServicePageTemplate({ service }: { service: ServiceData }) {
  const pageRef   = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const related    = getRelatedServices(service);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      /* highlights */
      gsap.from(".hl-item", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", ...st,
        scrollTrigger: { trigger: ".hl-section", start: "top 88%", once: true },
      });

      /* intro text */
      gsap.from(".intro-text", {
        x: -40, opacity: 0, duration: 0.9, ease: "expo.out", ...st,
        scrollTrigger: { trigger: ".intro-section", start: "top 86%", once: true },
      });

      /* photo reveal */
      gsap.from(".photo-block", {
        clipPath: "inset(0 0 35% 0)", opacity: 0, duration: 1.3, ease: "expo.out", ...st,
        scrollTrigger: { trigger: ".photo-block", start: "top 88%", once: true },
      });

      /* benefit cards */
      gsap.from(".benefit-card", {
        y: 50, opacity: 0, scale: 0.97, duration: 0.75,
        stagger: 0.09, ease: "power3.out", ...st,
        scrollTrigger: { trigger: ".benefits-grid", start: "top 87%", once: true },
      });

      /* process steps */
      gsap.from(".process-step", {
        x: -40, opacity: 0, duration: 0.8, stagger: 0.15, ease: "power3.out", ...st,
        scrollTrigger: { trigger: ".process-section", start: "top 86%", once: true },
      });

      /* cta */
      gsap.from(".cta-block", {
        scale: 0.95, opacity: 0, duration: 0.8, ease: "back.out(1.4)", ...st,
        scrollTrigger: { trigger: ".cta-block", start: "top 88%", once: true },
      });

      /* faq items */
      gsap.from(".faq-item", {
        y: 22, opacity: 0, duration: 0.6, stagger: 0.07, ease: "power3.out", ...st,
        scrollTrigger: { trigger: ".faq-section", start: "top 88%", once: true },
      });

      /* related cards */
      gsap.from(".related-card", {
        y: 30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", ...st,
        scrollTrigger: { trigger: ".related-section", start: "top 88%", once: true },
      });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={pageRef}>
        <main>
          <Navbar />

          {/* ── Hero ────────────────────────────────────────────────── */}
          <PageHero
            eyebrow={service.eyebrow}
            title={service.title}
            description={service.subtitle}
            breadcrumbs={[
              { label: "Início",   href: "/"          },
              { label: "Soluções", href: "/solucoes"  },
              { label: service.eyebrow               },
            ]}
          />

          {/* ── Highlights strip ────────────────────────────────────── */}
          <div className="hl-section py-10 px-8 md:px-20 lg:px-32" style={{ background: "#040926", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 md:gap-8">
              {service.highlights.map(({ label, value }) => (
                <div key={label} className="hl-item flex flex-col items-center text-center gap-1">
                  <span
                    className="text-[#FEBE00] leading-none"
                    style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 3vw, 2.4rem)", fontWeight: 800 }}
                  >
                    {value}
                  </span>
                  <span className="text-white/40 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Intro + Description ──────────────────────────────────── */}
          <section className="intro-section py-20 px-8 md:px-20 lg:px-32" style={{ background: "#000B38" }}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
              <div className="intro-text">
                <span className="block mb-3 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  Sobre o serviço
                </span>
                <h2 className="text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.7rem, 3vw, 2.6rem)", fontWeight: 700 }}>
                  {service.title}
                </h2>
                <p className="text-white/50 leading-relaxed mb-8" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                  {service.description}
                </p>
                <a
                  href={`https://wa.me/5519978210246?text=Ol%C3%A1!%20Tenho%20interesse%20no%20servi%C3%A7o%20de%20${encodeURIComponent(service.eyebrow)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="cta-primary inline-flex items-center gap-2 px-7 py-3.5 font-semibold"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  <MessageCircle size={15} /> Solicitar Proposta
                </a>
              </div>

              {/* ── Photo 16:9 ────────────────────────────────────────── */}
              <div
                className="photo-block relative w-full overflow-hidden"
                style={{ aspectRatio: "16/9", clipPath: "inset(0 0 0% 0)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                {!imgError ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={`/${service.photo}`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                    onError={() => setImgError(true)}
                  />
                ) : (
                  <div
                    className="w-full h-full flex flex-col items-center justify-center gap-4"
                    style={{ background: "rgba(255,255,255,0.02)" }}
                  >
                    <ImageIcon size={36} color="rgba(254,190,0,0.25)" />
                    <p className="text-white/25 text-xs text-center px-8" style={{ fontFamily: "var(--font-inter)" }}>
                      Adicione a foto em{" "}
                      <code className="text-[#FEBE00]/40">public/{service.photo}</code>
                    </p>
                  </div>
                )}
                {/* Gold corner accent */}
                <div className="absolute bottom-0 left-0 w-16 h-0.5" style={{ background: "#FEBE00" }} />
                <div className="absolute bottom-0 left-0 w-0.5 h-16" style={{ background: "#FEBE00" }} />
              </div>
            </div>
          </section>

          {/* ── Benefits ─────────────────────────────────────────────── */}
          <section className="py-24 px-8 md:px-20 lg:px-32 relative overflow-hidden" style={{ background: "#07102A" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 0%, rgba(254,190,0,0.04) 0%, transparent 65%)" }} />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-14 text-center">
                <span className="block mb-3 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>Diferenciais</span>
                <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.2vw, 3rem)", fontWeight: 700 }}>
                  Por que escolher a PS Proteção
                </h2>
              </div>
              <div className="benefits-grid grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {service.benefits.map(({ icon, title, desc }) => (
                  <div
                    key={title}
                    className="benefit-card group flex flex-col p-7 transition-all duration-500 hover:-translate-y-1.5"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.015) 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-none" style={{ background: "radial-gradient(circle at 30% 0%, rgba(254,190,0,0.07) 0%, transparent 65%)" }} />
                    <div className="w-11 h-11 flex items-center justify-center mb-5 shrink-0" style={{ background: "rgba(254,190,0,0.07)", border: "1px solid rgba(254,190,0,0.18)" }}>
                      <Icon name={icon} size={18} />
                    </div>
                    <h3 className="text-white mb-2 font-semibold" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 700 }}>
                      {title}
                    </h3>
                    <p className="text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Process ──────────────────────────────────────────────── */}
          <section className="process-section py-24 px-8 md:px-20 lg:px-32" style={{ background: "#000B38" }}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <span className="block mb-3 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>Como funciona</span>
                <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.2vw, 3rem)", fontWeight: 700 }}>
                  Do diagnóstico à operação
                </h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {service.process.map(({ number, title, desc }, i) => (
                  <div key={number} className="process-step relative">
                    {/* Connecting line */}
                    {i < service.process.length - 1 && (
                      <div className="hidden lg:block absolute top-6 left-full w-full h-px z-0" style={{ background: "linear-gradient(90deg, rgba(254,190,0,0.3), transparent)" }} />
                    )}
                    <div
                      className="relative z-10 w-12 h-12 flex items-center justify-center mb-5 font-bold"
                      style={{
                        fontFamily: "var(--font-cormorant)", fontSize: "1rem",
                        background: "rgba(254,190,0,0.1)", border: "1px solid rgba(254,190,0,0.3)",
                        color: "#FEBE00",
                      }}
                    >
                      {number}
                    </div>
                    <h3 className="text-white mb-2 font-semibold" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem", fontWeight: 700 }}>
                      {title}
                    </h3>
                    <p className="text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── CTA Banner ───────────────────────────────────────────── */}
          <section className="py-20 px-8 md:px-20 lg:px-32 relative overflow-hidden" style={{ background: "#040926" }}>
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(254,190,0,0.06) 0%, transparent 65%)" }} />
            <div className="cta-block max-w-2xl mx-auto text-center relative z-10">
              <span className="block mb-3 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>Pronto para começar?</span>
              <h2 className="text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.7rem, 3vw, 2.8rem)", fontWeight: 700 }}>
                {service.cta.headline}
              </h2>
              <p className="text-white/45 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
                {service.cta.sub}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20diagn%C3%B3stico%20gratuito%20para%20${encodeURIComponent(service.eyebrow)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="cta-primary inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  <MessageCircle size={16} /> Chamar no WhatsApp
                </a>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:border-[#FEBE00]/50 hover:text-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.6)" }}
                >
                  Enviar Mensagem <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>

          {/* ── FAQ ──────────────────────────────────────────────────── */}
          <section className="faq-section py-24 px-8 md:px-20 lg:px-32" style={{ background: "#000B38" }}>
            <div className="max-w-3xl mx-auto">
              <div className="mb-12 text-center">
                <span className="block mb-3 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>Dúvidas frequentes</span>
                <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.2vw, 3rem)", fontWeight: 700 }}>
                  Perguntas sobre {service.eyebrow}
                </h2>
              </div>
              <div className="flex flex-col gap-2">
                {service.faq.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="faq-item overflow-hidden"
                    style={{ border: "1px solid rgba(255,255,255,0.07)", background: openFaq === i ? "rgba(254,190,0,0.04)" : "rgba(255,255,255,0.02)" }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="text-white/80 font-medium" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}>
                        {q}
                      </span>
                      <span className="shrink-0 w-6 h-6 flex items-center justify-center transition-transform duration-300" style={{ color: "#FEBE00" }}>
                        {openFaq === i ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: openFaq === i ? `${answerRefs.current[i]?.scrollHeight ?? 500}px` : "0px",
                        opacity:   openFaq === i ? 1 : 0,
                        overflow:  "hidden",
                        transition: "max-height 0.38s ease, opacity 0.28s ease",
                      }}
                    >
                      <div ref={(el) => { answerRefs.current[i] = el; }} className="px-6 pb-5">
                        <p className="text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                          {a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ── Related Services ─────────────────────────────────────── */}
          {related.length > 0 && (
            <section className="related-section py-20 px-8 md:px-20 lg:px-32" style={{ background: "#040926", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
              <div className="max-w-7xl mx-auto">
                <span className="block mb-8 text-[#FEBE00] tracking-[0.3em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                  Outros serviços
                </span>
                <div className="grid md:grid-cols-3 gap-5">
                  {related.map((rel) => {
                    const RelIcon = ICONS[rel.icon] ?? Shield;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/solucoes/${rel.slug}`}
                        className="related-card group flex items-center gap-5 p-6 transition-all duration-400 hover:border-[#FEBE00]/30 hover:-translate-y-1"
                        style={{ border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.025)", backdropFilter: "blur(8px)" }}
                      >
                        <div className="w-11 h-11 shrink-0 flex items-center justify-center transition-colors duration-300" style={{ background: "rgba(254,190,0,0.07)", border: "1px solid rgba(254,190,0,0.15)" }}>
                          <RelIcon size={18} color="#FEBE00" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-white/30 text-[9px] uppercase tracking-[0.2em] mb-0.5" style={{ fontFamily: "var(--font-inter)" }}>{rel.eyebrow}</p>
                          <p className="text-white/75 group-hover:text-white transition-colors duration-300 text-sm font-medium truncate" style={{ fontFamily: "var(--font-cormorant)", fontWeight: 600 }}>{rel.title.split(" ").slice(0, 5).join(" ")}…</p>
                        </div>
                        <ArrowRight size={15} color="rgba(254,190,0,0.4)" className="shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </section>
          )}

          {/* ── All services strip ───────────────────────────────────── */}
          <div className="py-8 px-8 md:px-20 lg:px-32 flex items-center justify-between gap-4" style={{ background: "#000B38", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
            <p className="text-white/25 text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>PS Proteção</p>
            <Link href="/solucoes" className="inline-flex items-center gap-2 text-[#FEBE00]/60 hover:text-[#FEBE00] transition-colors text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
              Ver todos os serviços <ArrowRight size={12} />
            </Link>
          </div>
        </main>
      </div>
      <FloatingWhatsApp />
    </>
  );
}
