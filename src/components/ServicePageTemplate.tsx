"use client";
import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import {
  MessageCircle, ArrowRight, Plus, Minus, ImageIcon,
  UserCheck, Sparkles, Shield, Car, Coffee, Briefcase,
  Monitor, Wrench, Clock, Users, FileText, Camera, Award,
  Eye, Phone, MapPin, Zap, Settings, Star, Smile, Clipboard,
} from "lucide-react";
import Navbar from "./Navbar";
import FloatingWhatsApp from "./FloatingWhatsApp";
import PageHero from "./PageHero";
import CTAPrimary from "./CTAPrimary";
import type { ServiceData } from "@/lib/services";
import { getRelatedServices } from "@/lib/services";

gsap.registerPlugin(ScrollTrigger);

/* ── Icon registry ─────────────────────────────────────────────────────── */
const ICONS: Record<string, React.ComponentType<{ size?: number; color?: string; className?: string }>> = {
  "user-check": UserCheck, sparkles: Sparkles, shield: Shield, car: Car,
  coffee: Coffee, briefcase: Briefcase, monitor: Monitor, wrench: Wrench,
  clock: Clock, users: Users, "file-text": FileText, camera: Camera,
  award: Award, eye: Eye, phone: Phone, "map-pin": MapPin,
  zap: Zap, settings: Settings, star: Star, smile: Smile, clipboard: Clipboard,
};
function Icon({ name, size = 20, color = "#FEBE00" }: { name: string; size?: number; color?: string }) {
  const C = ICONS[name] ?? Shield;
  return <C size={size} color={color} />;
}

/* ── Palette ────────────────────────────────────────────────────────────── */
const YELLOW    = "#FEBE00";
const NAVY      = "#000B38";           // used for cards (solid)
const NAVY_BG   = "linear-gradient(148deg, #000214 0%, #000B38 50%, #030E40 100%)"; // section background
const NAVY_BG2  = "linear-gradient(135deg, #010412 0%, #040926 45%, #0A1540 100%)"; // cta-band
const NAVY_BG3  = "linear-gradient(155deg, #07102A 0%, #030A20 55%, #000412 100%)"; // related section
const WHITE     = "#F9F8F5";

/* ── Template ───────────────────────────────────────────────────────────── */
export default function ServicePageTemplate({ service }: { service: ServiceData }) {
  const pageRef    = useRef<HTMLDivElement>(null);
  const [openFaq, setOpenFaq]   = useState<number | null>(null);
  const [imgError, setImgError] = useState(false);
  const answerRefs = useRef<(HTMLDivElement | null)[]>([]);
  const related    = getRelatedServices(service);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".hl-stat",      { y: 28, opacity: 0, duration: 0.7, stagger: 0.12, ease: "power3.out", ...st, scrollTrigger: { trigger: ".hl-band",       start: "top 88%", once: true } });
      gsap.from(".intro-col",    { x: -50, opacity: 0, duration: 1,  ease: "expo.out",  ...st, scrollTrigger: { trigger: ".intro-section",  start: "top 86%", once: true } });
      gsap.from(".photo-frame",  { x:  50, opacity: 0, duration: 1,  ease: "expo.out",  ...st, scrollTrigger: { trigger: ".intro-section",  start: "top 86%", once: true } });
      gsap.from(".ben-card",     { y: 44, opacity: 0, scale: 0.97, duration: 0.75, stagger: 0.09, ease: "power3.out", ...st, scrollTrigger: { trigger: ".ben-grid", start: "top 87%", once: true } });
      gsap.from(".proc-step",    { y: 40, opacity: 0, duration: 0.8, stagger: 0.14, ease: "power3.out", ...st, scrollTrigger: { trigger: ".proc-section",  start: "top 86%", once: true } });
      gsap.from(".cta-inner",    { scale: 0.95, opacity: 0, duration: 0.8, ease: "back.out(1.4)", ...st, scrollTrigger: { trigger: ".cta-band",       start: "top 88%", once: true } });
      gsap.from(".faq-row",      { y: 20, opacity: 0, duration: 0.55, stagger: 0.07, ease: "power3.out", ...st, scrollTrigger: { trigger: ".faq-section",  start: "top 88%", once: true } });
      gsap.from(".rel-card",     { y: 28, opacity: 0, duration: 0.65, stagger: 0.1,  ease: "power3.out", ...st, scrollTrigger: { trigger: ".rel-section",  start: "top 88%", once: true } });
    }, pageRef);
    return () => ctx.revert();
  }, []);

  return (
    <>
      <div ref={pageRef}>
        <main>
          <Navbar />
          <PageHero
            eyebrow={service.eyebrow}
            title={service.title}
            description={service.subtitle}
            breadcrumbs={[
              { label: "Início",   href: "/"         },
              { label: "Soluções", href: "/solucoes" },
              { label: service.eyebrow              },
            ]}
          />

          {/* ══ 1. HIGHLIGHTS — fundo amarelo ══════════════════════════ */}
          <div className="hl-band py-14 px-8 md:px-20 lg:px-32" data-texture="diagonal" style={{ background: YELLOW }}>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4 md:gap-10">
              {service.highlights.map(({ label, value }) => (
                <div key={label} className="hl-stat flex flex-col items-center text-center gap-1.5">
                  <span
                    style={{
                      fontFamily: "var(--font-cormorant)",
                      fontSize: "clamp(2rem, 4vw, 3.4rem)",
                      fontWeight: 800,
                      color: NAVY,
                      lineHeight: 1,
                    }}
                  >
                    {value}
                  </span>
                  <span
                    className="uppercase"
                    style={{ fontFamily: "var(--font-inter)", fontSize: "0.65rem", letterSpacing: "0.22em", color: "rgba(0,11,56,0.6)" }}
                  >
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ══ 2. INTRO + FOTO — fundo branco ═════════════════════════ */}
          <section className="intro-section py-24 px-8 md:px-20 lg:px-32" style={{ background: WHITE }}>
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

              {/* Text */}
              <div className="intro-col">
                <span
                  className="block mb-4 uppercase tracking-[0.28em] text-xs"
                  style={{ fontFamily: "var(--font-inter)", color: YELLOW, background: NAVY, display: "inline-block", padding: "4px 12px" }}
                >
                  {service.eyebrow}
                </span>
                <h2
                  className="mb-6 leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700, color: NAVY }}
                >
                  {service.title}
                </h2>
                <p
                  className="mb-8 leading-relaxed"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem", color: "rgba(0,11,56,0.65)", lineHeight: 1.8 }}
                >
                  {service.description}
                </p>
                {/* Highlight bullets */}
                <ul className="flex flex-col gap-3 mb-10">
                  {service.highlights.map(({ label, value }) => (
                    <li key={label} className="flex items-center gap-3">
                      <div className="w-1.5 h-1.5 shrink-0" style={{ background: YELLOW }} />
                      <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(0,11,56,0.7)" }}>
                        <strong style={{ color: NAVY }}>{value}</strong> — {label}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href={`https://wa.me/5519978210246?text=Ol%C3%A1!%20Tenho%20interesse%20em%20${encodeURIComponent(service.eyebrow)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-7 py-3.5 font-semibold"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.78rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  <MessageCircle size={15} /> Solicitar Proposta
                </a>
              </div>

              {/* Photo 16:9 */}
              <div
                className="photo-frame relative w-full overflow-hidden"
                style={{
                  aspectRatio: "16/9",
                  border: `3px solid ${NAVY}`,
                  boxShadow: "8px 8px 0px #FEBE00",
                }}
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
                  <div className="w-full h-full flex flex-col items-center justify-center gap-4" style={{ background: "rgba(0,11,56,0.04)" }}>
                    <ImageIcon size={36} color="rgba(0,11,56,0.2)" />
                    <p className="text-xs text-center px-8" style={{ fontFamily: "var(--font-inter)", color: "rgba(0,11,56,0.35)" }}>
                      Adicione a foto em{" "}
                      <code style={{ color: NAVY, fontWeight: 600 }}>public/{service.photo}</code>
                    </p>
                  </div>
                )}
                {/* Gold corner tag */}
                <div
                  className="absolute top-4 right-4 px-3 py-1.5"
                  style={{ background: YELLOW }}
                >
                  <span style={{ fontFamily: "var(--font-inter)", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: NAVY, fontWeight: 700 }}>
                    {service.eyebrow}
                  </span>
                </div>
              </div>
            </div>
          </section>

          {/* ══ 3. BENEFÍCIOS — fundo navy escuro ══════════════════════ */}
          <section className="py-24 px-8 md:px-20 lg:px-32 relative overflow-hidden" style={{ background: NAVY_BG }}>
            {/* ── SEÇÃO TEXTURA ── grid na seção de benefícios */}
            <div className="section-grid" aria-hidden="true" />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 60% 0%, rgba(254,190,0,0.07) 0%, transparent 55%)" }} />
            <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 5% 90%, rgba(15,35,110,0.35) 0%, transparent 45%)" }} />
            <div className="max-w-7xl mx-auto relative z-10">
              <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
                <div>
                  <span className="block mb-3 uppercase tracking-[0.28em] text-xs" style={{ fontFamily: "var(--font-inter)", color: YELLOW }}>Diferenciais</span>
                  <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3.2vw, 3rem)", fontWeight: 700 }}>
                    Por que escolher a PS Proteção
                  </h2>
                </div>
                <p className="text-white/40 max-w-xs" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                  27 anos de experiência se traduzem em processos confiáveis e resultados consistentes.
                </p>
              </div>

              <div className="ben-grid grid md:grid-cols-2 lg:grid-cols-3 gap-px" style={{ background: "rgba(255,255,255,0.06)" }}>
                {service.benefits.map(({ icon, title, desc }, i) => (
                  <div
                    key={title}
                    className="ben-card group flex flex-col p-8 transition-all duration-400 hover:z-10 relative"
                    style={{
                      background: NAVY,
                      borderTop: i < 3 ? "none" : undefined,
                      borderRadius: "5px",
                    }}
                  >
                    {/* Hover yellow top bar */}
                    <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: YELLOW }} />

                    <div
                      className="w-11 h-11 flex items-center justify-center mb-5 shrink-0"
                      style={{ background: "rgba(254,190,0,0.12)", border: `1px solid rgba(254,190,0,0.25)` }}
                    >
                      <Icon name={icon} size={18} />
                    </div>
                    <h3
                      className="mb-3 leading-snug"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 700, color: "#fff" }}
                    >
                      {title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(255,255,255,0.45)", lineHeight: 1.75 }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 4. PROCESSO — fundo amarelo ════════════════════════════ */}
          <section className="proc-section py-24 px-8 md:px-20 lg:px-32" data-texture="diagonal" style={{ background: YELLOW }}>
            <div className="max-w-7xl mx-auto">
              <div className="mb-14">
                <span
                  className="uppercase tracking-[0.28em] text-xs"
                  style={{ fontFamily: "var(--font-inter)", color: "rgba(0,11,56,0.55)", display: "inline-block", borderBottom: `2px solid ${NAVY}`, paddingBottom: "6px", marginBottom: "1rem" }}
                >
                  Como funciona
                </span>
                <h2
                  className="leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)", fontWeight: 700, color: NAVY }}
                >
                  Do diagnóstico à operação
                </h2>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-0 relative">
                {service.process.map(({ number, title, desc }, i) => (
                  <div
                    key={number}
                    className="proc-step relative p-8 lg:p-10"
                    style={{ borderLeft: i === 0 ? "none" : "1px solid rgba(0,11,56,0.15)" }}
                  >
                    <div
                      className="mb-4 leading-none select-none"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "5rem", fontWeight: 900, color: "rgba(0,11,56,0.12)", lineHeight: 1 }}
                    >
                      {number}
                    </div>
                    <h3
                      className="mb-3"
                      style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.25rem", fontWeight: 700, color: NAVY }}
                    >
                      {title}
                    </h3>
                    <p
                      className="leading-relaxed"
                      style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(0,11,56,0.6)", lineHeight: 1.75 }}
                    >
                      {desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* ══ 5. CTA — fundo navy ════════════════════════════════════ */}
          <section className="cta-band py-20 px-8 md:px-20 lg:px-32" style={{ background: NAVY_BG2 }}>
            <div className="cta-inner max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
              <div className="max-w-xl">
                <span className="block mb-3 uppercase tracking-[0.28em] text-xs" style={{ fontFamily: "var(--font-inter)", color: YELLOW }}>Pronto para começar?</span>
                <h2
                  className="text-white leading-tight mb-3"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.7rem, 3vw, 2.6rem)", fontWeight: 700 }}
                >
                  {service.cta.headline}
                </h2>
                <p className="leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.925rem", color: "rgba(255,255,255,0.45)" }}>
                  {service.cta.sub}
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <CTAPrimary
                  href={`https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito%20para%20${encodeURIComponent(service.eyebrow)}.`}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  <MessageCircle size={16} /> Chamar no WhatsApp
                </CTAPrimary>
                <Link
                  href="/contato"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold whitespace-nowrap transition-all duration-300 hover:border-[#FEBE00]/50 hover:text-white"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase", border: "1px solid rgba(255,255,255,0.15)", color: "rgba(255,255,255,0.55)" }}
                >
                  Enviar Mensagem <ArrowRight size={15} />
                </Link>
              </div>
            </div>
          </section>

          {/* ══ 6. FAQ — fundo branco ══════════════════════════════════ */}
          <section className="faq-section py-24 px-8 md:px-20 lg:px-32" style={{ background: WHITE }}>
            <div className="max-w-3xl mx-auto">
              <div className="mb-12">
                <span
                  className="uppercase tracking-[0.28em] text-xs"
                  style={{ fontFamily: "var(--font-inter)", color: YELLOW, background: NAVY, display: "inline-block", padding: "4px 12px", marginBottom: "1rem" }}
                >
                  FAQ
                </span>
                <h2
                  className="leading-tight"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.9rem, 3.5vw, 3.2rem)", fontWeight: 700, color: NAVY }}
                >
                  Perguntas frequentes sobre<br />{service.eyebrow}
                </h2>
              </div>

              <div className="flex flex-col">
                {service.faq.map(({ q, a }, i) => (
                  <div
                    key={i}
                    className="faq-row"
                    style={{ borderBottom: `1px solid rgba(0,11,56,0.1)` }}
                  >
                    <button
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="w-full flex items-start justify-between gap-6 py-5 text-left group"
                    >
                      <span
                        className="font-medium leading-snug"
                        style={{ fontFamily: "var(--font-inter)", fontSize: "0.925rem", color: NAVY }}
                      >
                        {q}
                      </span>
                      <span
                        className="shrink-0 w-6 h-6 flex items-center justify-center mt-0.5 transition-colors duration-300"
                        style={{ background: openFaq === i ? YELLOW : "transparent", border: `1.5px solid ${openFaq === i ? YELLOW : "rgba(0,11,56,0.2)"}`, color: NAVY }}
                      >
                        {openFaq === i
                          ? <Minus size={13} color={NAVY} />
                          : <Plus  size={13} color={NAVY} />
                        }
                      </span>
                    </button>
                    <div
                      style={{
                        maxHeight: openFaq === i ? `${answerRefs.current[i]?.scrollHeight ?? 600}px` : "0px",
                        opacity:   openFaq === i ? 1 : 0,
                        overflow:  "hidden",
                        transition: "max-height 0.38s ease, opacity 0.28s ease",
                      }}
                    >
                      <div ref={(el) => { answerRefs.current[i] = el; }} className="pb-6">
                        <p
                          className="leading-relaxed"
                          style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(0,11,56,0.6)", lineHeight: 1.8, borderLeft: `3px solid ${YELLOW}`, paddingLeft: "1rem" }}
                        >
                          {a}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom CTA dentro do FAQ */}
              <div className="mt-12 p-8 flex flex-col sm:flex-row items-center justify-between gap-6" style={{ background: NAVY }}>
                <p className="text-white/70 text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  Não encontrou sua dúvida? Fale com um especialista.
                </p>
                <CTAPrimary
                  href="https://wa.me/5519978210246"
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 font-semibold shrink-0 whitespace-nowrap"
                  style={{ fontFamily: "var(--font-inter)", fontSize: "0.75rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
                >
                  <MessageCircle size={14} /> Perguntar no WhatsApp
                </CTAPrimary>
              </div>
            </div>
          </section>

          {/* ══ 7. SERVIÇOS RELACIONADOS — navy ════════════════════════ */}
          {related.length > 0 && (
            <section className="rel-section py-20 px-8 md:px-20 lg:px-32" style={{ background: NAVY_BG3 }}>
              <div className="max-w-7xl mx-auto">
                <div className="flex items-end justify-between mb-10 gap-6">
                  <div>
                    <span className="block mb-2 uppercase tracking-[0.28em] text-xs" style={{ fontFamily: "var(--font-inter)", color: YELLOW }}>Continue explorando</span>
                    <h2 className="text-white leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.5rem, 2.5vw, 2.2rem)", fontWeight: 700 }}>
                      Outros serviços PS Proteção
                    </h2>
                  </div>
                  <Link href="/solucoes" className="hidden md:inline-flex items-center gap-2 shrink-0 transition-colors duration-300 hover:text-[#FEBE00] text-white/40" style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Ver todos <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="grid md:grid-cols-3 gap-5">
                  {related.map((rel) => {
                    const RelIcon = ICONS[rel.icon] ?? Shield;
                    return (
                      <Link
                        key={rel.slug}
                        href={`/solucoes/${rel.slug}`}
                        className="rel-card group flex flex-col p-7 transition-all duration-400 hover:-translate-y-1 overflow-hidden relative"
                        style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "5px" }}
                      >
                        {/* Yellow top line on hover */}
                        <div className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: YELLOW }} />
                        <div className="w-11 h-11 flex items-center justify-center mb-5" style={{ background: "rgba(254,190,0,0.08)", border: "1px solid rgba(254,190,0,0.18)" }}>
                          <RelIcon size={18} color={YELLOW} />
                        </div>
                        <p className="text-[#FEBE00]/50 text-[9px] uppercase tracking-[0.2em] mb-1.5" style={{ fontFamily: "var(--font-inter)" }}>{rel.eyebrow}</p>
                        <p className="text-white/70 group-hover:text-white transition-colors text-sm font-medium mb-4 flex-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", fontWeight: 600, lineHeight: 1.4 }}>
                          {rel.subtitle.split(".")[0]}.
                        </p>
                        <div className="flex items-center gap-1.5 text-[#FEBE00]/40 group-hover:text-[#FEBE00] transition-colors" style={{ fontFamily: "var(--font-inter)", fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase" }}>
                          Ver serviço <ArrowRight size={11} className="transition-transform duration-300 group-hover:translate-x-1" />
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-6 flex md:hidden justify-center">
                  <Link href="/solucoes" className="inline-flex items-center gap-2 text-white/40 hover:text-[#FEBE00] transition-colors" style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.15em", textTransform: "uppercase" }}>
                    Ver todos os serviços <ArrowRight size={12} />
                  </Link>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>
      <FloatingWhatsApp />
    </>
  );
}
