"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Star, Quote, ExternalLink } from "lucide-react";
import { NAP } from "./Contact";

gsap.registerPlugin(ScrollTrigger);

const reviews = [
  {
    name: "Paulo Henrique",
    role: "Cliente — Google Reviews",
    text: "Empresa referência na região. Portaria e segurança de altíssimo nível. Equipe treinada, comprometida e muito profissional.",
    stars: 5,
  },
  {
    name: "Fernanda Carvalho",
    role: "Cliente — Google Reviews",
    text: "Contratamos limpeza e zeladoria há mais de 3 anos. Resultado sempre impecável. Profissionalismo da equipe e atendimento comercial excelente.",
    stars: 5,
  },
  {
    name: "Ricardo Andrade",
    role: "Cliente — Google Reviews",
    text: "27 anos de mercado com toda razão. Seriedade, pontualidade e qualidade que já não se encontra em muitas empresas.",
    stars: 5,
  },
  {
    name: "Google Reviews",
    role: "4.8 de 5 — 59 avaliações",
    text: "A PS Proteção mantém nota 4.8 no Google com dezenas de avaliações verificadas de clientes reais de toda a região de Campinas.",
    stars: 5,
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      gsap.from(".reviews-eyebrow", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });
      gsap.from(".reviews-h2", {
        clipPath: "inset(0 0 100% 0)", y: 8,
        duration: 1.1, ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.from(".reviews-badge", {
        x: 40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });
      gsap.from(".gmb-cta", {
        y: 20, opacity: 0, duration: 0.8, ease: "back.out(1.4)", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".review-card");
        gsap.from(cards, {
          y: 60, opacity: 0, rotate: 1.5, scale: 0.95,
          duration: 0.85, stagger: 0.12, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: "top 88%", once: true },
        });

        const quotes = cardsRef.current.querySelectorAll(".review-quote");
        gsap.from(quotes, {
          scale: 0, opacity: 0, duration: 0.5, stagger: 0.12,
          ease: "back.out(2)", immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: "top 84%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="py-32 px-8 md:px-20 lg:px-32"
      style={{ background: "#040926" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <span
              className="reviews-eyebrow block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Avaliações
            </span>
            <h2
              className="reviews-h2 text-white leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.9rem, 3.6vw, 3.2rem)",
                fontWeight: 700,
              }}
            >
              O que nossos clientes dizem
            </h2>
          </div>

          <div
            className="reviews-badge flex items-center gap-3 px-5 py-4 border border-white/8 shrink-0"
            style={{ background: "rgba(255,255,255,0.03)", backdropFilter: "blur(8px)", borderRadius: "5px" }}
          >
            <svg viewBox="0 0 24 24" className="w-5 h-5 shrink-0" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
            <div>
              <div className="flex gap-0.5 mb-0.5">
                {[...Array(5)].map((_, i) => <Star key={i} size={11} color="#FEBE00" fill="#FEBE00" />)}
              </div>
              <p className="text-white/40 text-[10px] uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
                4.8 · Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* GMB CTA */}
        <a
          href={NAP.gmb}
          target="_blank" rel="noopener noreferrer"
          className="gmb-cta group flex items-center gap-3 mb-12 px-5 py-3.5 border border-[#FEBE00]/20 hover:border-[#FEBE00]/50 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto inline-flex"
          style={{ background: "rgba(254,190,0,0.05)", backdropFilter: "blur(8px)", borderRadius: "5px" }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} color="#FEBE00" fill="#FEBE00" />)}
          </div>
          <span className="text-white/70 group-hover:text-white transition-colors text-xs uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)" }}>
            Avalie a PS Proteção no Google
          </span>
          <ExternalLink size={13} color="rgba(254,190,0,0.6)" className="ml-auto transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {reviews.map(({ name, role, text, stars }) => (
            <div
              key={name}
              className="review-card group flex flex-col p-7 border border-white/7 transition-all duration-500 hover:-translate-y-1 hover:border-[#FEBE00]/20"
              style={{ background: "rgba(255,255,255,0.025)", backdropFilter: "blur(8px)", borderRadius: "5px" }}
            >
              <div className="review-quote mb-4">
                <Quote size={22} color="#FEBE00" style={{ opacity: 0.4 }} />
              </div>
              <div className="flex gap-1 mb-4">
                {[...Array(stars)].map((_, i) => <Star key={i} size={13} color="#FEBE00" fill="#FEBE00" />)}
              </div>
              <p className="text-white/55 leading-relaxed flex-1 mb-6" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                &ldquo;{text}&rdquo;
              </p>
              <div className="pt-5" style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
                <p className="text-white" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.05rem", fontWeight: 600 }}>
                  {name}
                </p>
                <p className="text-[#FEBE00]/60 text-[10px] uppercase tracking-[0.15em] mt-0.5" style={{ fontFamily: "var(--font-inter)" }}>
                  {role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
