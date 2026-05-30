"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import { Phone, Mail, MapPin, MessageCircle, ExternalLink } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

// ─── NAP — única fonte de verdade ─────────────────────────────────────────────
export const NAP = {
  name: "PS Proteção",
  street: "Rua São Gabriel, 1623 Vila Belvedere",
  city: "Americana",
  state: "SP",
  full: "Rua São Gabriel, 1623 Vila Belvedere — Americana-SP",
  phone1: "(19) 3478-7799",
  phone2: "(19) 97821-0246",
  email: "comercial@psprotecao.com.br",
  whatsapp: "https://wa.me/5519978210246",
  maps: "https://maps.app.goo.gl/QtABs1ubKBPghTsL8",
  gmb: "https://share.google/NNasndqbeh98CIbif",
};

type FormData = {
  name: string;
  phone: string;
  message: string;
};

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const { register, handleSubmit } = useForm<FormData>();

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".contact-info", {
        x: -60, opacity: 0, duration: 1.1, ease: "expo.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
      gsap.from(".contact-form", {
        x: 60, opacity: 0, duration: 1.1, ease: "expo.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
      gsap.from(".contact-info-item", {
        x: -30, opacity: 0, duration: 0.7, stagger: 0.1, ease: "power3.out", immediateRender: false,
        scrollTrigger: { trigger: ".contact-info", start: "top 82%", once: true },
      });
      gsap.from(".form-field", {
        y: 25, opacity: 0, duration: 0.6, stagger: 0.1, ease: "power3.out", immediateRender: false,
        scrollTrigger: { trigger: ".contact-form", start: "top 82%", once: true },
      });
      gsap.from(".contact-cta", {
        scale: 0.9, opacity: 0, duration: 0.7, ease: "back.out(1.5)", immediateRender: false,
        scrollTrigger: { trigger: ".contact-info", start: "top 75%", once: true },
      });
      gsap.from(".maps-embed", {
        y: 30, opacity: 0, duration: 0.8, ease: "power3.out", immediateRender: false,
        scrollTrigger: { trigger: ".maps-embed", start: "top 90%", once: true },
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const onSubmit = (data: FormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <section
      id="contato"
      ref={sectionRef}
      className="py-32 px-8 md:px-20 lg:px-32 relative overflow-hidden"
      style={{ background: "#07102A" }}
    >
      {/* Ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 pointer-events-none" style={{
        width: "700px", height: "350px",
        background: "radial-gradient(ellipse at 50% 0%, rgba(254,190,0,0.07) 0%, transparent 70%)",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">

          {/* ── Info column ────────────────────────────────────────────── */}
          <div className="contact-info">
            <span className="block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs" style={{ fontFamily: "var(--font-inter)" }}>
              Fale Conosco
            </span>
            <h2 className="text-white mb-6 leading-tight" style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
              fontWeight: 700,
            }}>
              Proteja seu negócio.<br />Fale com um especialista agora.
            </h2>
            <p className="text-white/45 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
              Nossa central funciona ininterruptamente. Entre em contato e receba
              um diagnóstico gratuito e proposta personalizada para sua empresa ou condomínio.
            </p>

            {/* NAP — contact info */}
            <address className="not-italic flex flex-col gap-4 mb-8">
              {[
                { icon: Phone, label: `${NAP.phone1}  ·  ${NAP.phone2}`, href: `tel:+551934787799` },
                { icon: Mail, label: NAP.email, href: `mailto:${NAP.email}` },
                { icon: MapPin, label: NAP.full, href: NAP.maps },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="contact-info-item flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 shrink-0 flex items-center justify-center border border-[#FEBE00]/15 transition-colors duration-300 group-hover:border-[#FEBE00]/40" style={{ background: "rgba(254,190,0,0.05)" }}>
                    <Icon size={16} color="#FEBE00" />
                  </div>
                  <span className="text-white/60 group-hover:text-white/80 transition-colors duration-300" style={{ fontFamily: "var(--font-inter)", fontSize: "0.9rem" }}>
                    {label}
                  </span>
                </a>
              ))}
            </address>

            {/* WhatsApp CTA */}
            <a
              href={NAP.whatsapp}
              target="_blank" rel="noopener noreferrer"
              className="contact-cta cta-primary inline-flex items-center gap-3 px-7 py-4 font-semibold mb-10"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
            >
              <MessageCircle size={17} />
              Chamar no WhatsApp
            </a>

            {/* Address badge */}
            <a
              href={NAP.maps}
              target="_blank" rel="noopener noreferrer"
              className="group flex items-center gap-3 px-4 py-3 border border-white/7 hover:border-[#FEBE00]/25 transition-all duration-300"
              style={{ background: "rgba(255,255,255,0.025)" }}
            >
              <MapPin size={14} color="#FEBE00" className="shrink-0" />
              <span className="text-white/45 text-xs flex-1" style={{ fontFamily: "var(--font-inter)" }}>
                {NAP.full}
              </span>
              <ExternalLink size={12} color="rgba(254,190,0,0.4)" className="shrink-0 group-hover:text-[#FEBE00] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* ── Form column ────────────────────────────────────────────── */}
          <div className="contact-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-5 p-8 border border-white/7"
              style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(16px)" }}
            >
              <h3 className="text-white mb-1" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.7rem", fontWeight: 700 }}>
                Solicitar Proposta
              </h3>
              <p className="text-white/35 text-xs mb-2" style={{ fontFamily: "var(--font-inter)" }}>
                Resposta em até 24h úteis
              </p>

              <div className="form-field flex flex-col gap-1.5">
                <label htmlFor="name" className="text-white/40 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>Nome completo</label>
                <input id="name" type="text" {...register("name")}
                  className="bg-transparent px-4 py-3 text-white text-sm outline-none transition-colors duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-inter)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(254,190,0,0.55)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <div className="form-field flex flex-col gap-1.5">
                <label htmlFor="phone" className="text-white/40 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>Telefone / WhatsApp</label>
                <input id="phone" type="tel" {...register("phone")}
                  className="bg-transparent px-4 py-3 text-white text-sm outline-none transition-colors duration-300"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-inter)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(254,190,0,0.55)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <div className="form-field flex flex-col gap-1.5">
                <label htmlFor="message" className="text-white/40 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>Mensagem</label>
                <textarea id="message" rows={4} {...register("message")}
                  className="bg-transparent px-4 py-3 text-white text-sm outline-none transition-colors duration-300 resize-none"
                  style={{ border: "1px solid rgba(255,255,255,0.1)", fontFamily: "var(--font-inter)" }}
                  onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(254,190,0,0.55)")}
                  onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
                />
              </div>

              <button type="submit" className="form-field cta-primary mt-1 py-4 font-semibold uppercase tracking-[0.12em] text-xs" style={{ fontFamily: "var(--font-inter)" }}>
                Enviar Mensagem
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* ── Google Maps embed ─────────────────────────────────────────── */}
      <div className="maps-embed mt-16 relative" style={{ border: "1px solid rgba(255,255,255,0.06)" }}>
        {/* Top accent line */}
        <div className="absolute top-0 left-0 right-0 h-px z-10" style={{
          background: "linear-gradient(90deg, transparent, rgba(254,190,0,0.35), transparent)",
        }} />
        {/* Label */}
        <div className="absolute top-4 left-6 z-10 flex items-center gap-2 px-3 py-1.5" style={{
          background: "rgba(0,11,56,0.9)",
          border: "1px solid rgba(254,190,0,0.2)",
          backdropFilter: "blur(8px)",
        }}>
          <MapPin size={11} color="#FEBE00" />
          <span className="text-white/60 text-[10px] uppercase tracking-[0.2em]" style={{ fontFamily: "var(--font-inter)" }}>
            {NAP.city} — {NAP.street}
          </span>
          <a
            href={NAP.maps}
            target="_blank" rel="noopener noreferrer"
            className="ml-1 text-[#FEBE00]/60 hover:text-[#FEBE00] transition-colors"
          >
            <ExternalLink size={10} />
          </a>
        </div>
        <iframe
          src={`https://maps.google.com/maps?q=${encodeURIComponent("Rua São Gabriel, 1623, Vila Belvedere, Americana, SP, Brasil")}&output=embed&hl=pt-BR&z=16`}
          width="100%"
          height="320"
          style={{ border: 0, display: "block", filter: "invert(90%) hue-rotate(180deg) saturate(0.7) brightness(0.85)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Localização PS Proteção — Rua São Gabriel, 1623, Americana SP"
        />
      </div>

      {/* ── Footer strip ─────────────────────────────────────────────────── */}
      <div className="mt-24 pt-8 flex flex-col md:flex-row items-center justify-between gap-4" style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
        {/* NAP compacto — reforço SEO */}
        <p className="text-white/20 text-xs text-center md:text-left" style={{ fontFamily: "var(--font-inter)" }}>
          © 2025 <strong className="text-white/30">PS Proteção</strong> · {NAP.street} · {NAP.city}/{NAP.state} · {NAP.phone1} · {NAP.phone2}
        </p>
        <p className="text-[#FEBE00]/30 text-xs uppercase tracking-widest shrink-0" style={{ fontFamily: "var(--font-inter)" }}>
          Segurança · Confiança · Excelência
        </p>
      </div>
    </section>
  );
}
