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
    role: "Cliente · Google Reviews",
    text: "Empresa referência na região. Portaria e segurança de altíssimo nível. Equipe treinada, comprometida e muito profissional.",
    stars: 5,
  },
  {
    name: "Fernanda Carvalho",
    role: "Cliente · Google Reviews",
    text: "Contratamos limpeza e zeladoria há mais de 3 anos. Resultado sempre impecável. Profissionalismo da equipe e atendimento comercial excelente.",
    stars: 5,
  },
  {
    name: "Ricardo Andrade",
    role: "Cliente · Google Reviews",
    text: "27 anos de mercado com toda razão. Seriedade, pontualidade e qualidade que já não se encontra em muitas empresas.",
    stars: 5,
  },
  {
    name: "Google Reviews",
    role: "4.8 de 5 · 59 avaliações",
    text: "A PS Proteção mantém nota 4.8 no Google com dezenas de avaliações verificadas de clientes reais de toda a região de Campinas.",
    stars: 5,
  },
];

export default function Reviews() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const st = { immediateRender: false };

      // Eyebrow
      gsap.from(".reviews-eyebrow", {
        x: -40, opacity: 0, duration: 0.8, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 88%", once: true },
      });

      // H2 word-by-word
      gsap.from(".reviews-h2-word", {
        y: "110%", duration: 1.05, stagger: 0.065,
        ease: "expo.out", immediateRender: false,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      // Google badge from right
      gsap.from(".reviews-badge", {
        x: 50, opacity: 0, duration: 0.85, ease: "power3.out", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 85%", once: true },
      });

      // GMB CTA
      gsap.from(".gmb-cta", {
        y: 24, opacity: 0, duration: 0.8, ease: "back.out(1.5)", ...st,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%", once: true },
      });

      if (cardsRef.current) {
        const cards = cardsRef.current.querySelectorAll(".review-card");
        // Cards with alternating rotateY for 3D feel
        gsap.from(cards, {
          y: 70, opacity: 0, scale: 0.92, rotateY: (i) => (i % 2 === 0 ? 8 : -8),
          duration: 0.95, stagger: 0.13, ease: "power3.out",
          immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: "top 88%", once: true },
        });

        // Quote icons bounce in
        const quotes = cardsRef.current.querySelectorAll(".review-quote");
        gsap.from(quotes, {
          scale: 0, opacity: 0, rotation: -30, duration: 0.6, stagger: 0.13,
          ease: "back.out(2.8)", immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: "top 84%", once: true },
        });

        // Stars cascade
        const starRows = cardsRef.current.querySelectorAll(".review-stars");
        gsap.from(starRows, {
          scaleX: 0, transformOrigin: "left center", opacity: 0,
          duration: 0.5, stagger: 0.13, ease: "expo.out",
          immediateRender: false,
          scrollTrigger: { trigger: cardsRef.current, start: "top 82%", once: true },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const h2Part1 = ["O", "que", "nossos"];
  const h2Accent = ["clientes"];
  const h2Part2 = ["dizem"];

  return (
    <section
      id="avaliacoes"
      ref={sectionRef}
      className="py-16 md:py-24 lg:py-32 px-6 md:px-20 lg:px-32 relative overflow-hidden"
      style={{
        background: "#F9F8F5",
        borderTop: "3px solid #FEBE00",
        borderBottom: "3px solid #000B38",
      }}
    >
      {/* Decorative gradient blob */}
      <div
        className="absolute bottom-0 right-0 w-96 h-96 pointer-events-none"
        style={{ background: "radial-gradient(circle at 100% 100%, rgba(0,11,56,0.04) 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-0 left-0 w-80 h-80 pointer-events-none"
        style={{ background: "radial-gradient(circle at 0% 0%, rgba(254,190,0,0.05) 0%, transparent 65%)" }}
      />

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="reviews-eyebrow flex items-center gap-3 mb-5">
              <div className="w-8 h-0.5 shrink-0" style={{ background: "#FEBE00" }} />
              <span
                className="tracking-[0.3em] uppercase text-xs font-medium"
                style={{ fontFamily: "var(--font-inter)", color: "#000B38" }}
              >
                Avaliações
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
              {h2Part1.map((word, i) => (
                <span
                  key={i}
                  style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
                >
                  <span className="reviews-h2-word" style={{ display: "inline-block" }}>{word}</span>
                </span>
              ))}
              <em style={{ fontStyle: "italic", color: "#000B38" }}>
                {h2Accent.map((word, i) => (
                  <span
                    key={i}
                    style={{
                      display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em",
                      borderBottom: "3px solid #FEBE00",
                    }}
                  >
                    <span className="reviews-h2-word" style={{ display: "inline-block" }}>{word}</span>
                  </span>
                ))}
              </em>
              {h2Part2.map((word, i) => (
                <span
                  key={i}
                  style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom", marginRight: "0.22em" }}
                >
                  <span className="reviews-h2-word" style={{ display: "inline-block" }}>{word}</span>
                </span>
              ))}
            </h2>
          </div>

          {/* Google badge */}
          <div
            className="reviews-badge flex items-center gap-3 px-4 py-3 self-start md:self-auto shrink-0"
            style={{
              background: `#FFFFFF padding-box,
                           linear-gradient(135deg, rgba(254,190,0,0.55) 0%, rgba(0,11,56,0.15) 50%, rgba(254,190,0,0.28) 100%) border-box`,
              border: "1.5px solid transparent",
              boxShadow: "0 4px 16px rgba(0,11,56,0.08)",
              borderRadius: "10px",
            }}
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
              <p className="text-[11px] uppercase tracking-widest" style={{ fontFamily: "var(--font-inter)", color: "rgba(0,11,56,0.5)" }}>
                4.8 · Google Reviews
              </p>
            </div>
          </div>
        </div>

        {/* GMB CTA */}
        <a
          href={NAP.gmb}
          target="_blank" rel="noopener noreferrer"
          className="gmb-cta group flex items-center gap-3 mb-10 px-5 py-3.5 transition-all duration-300 hover:-translate-y-0.5 w-full md:w-auto"
          style={{
            background: `#FFFFFF padding-box,
                         linear-gradient(135deg, rgba(254,190,0,0.60) 0%, rgba(0,11,56,0.12) 50%, rgba(254,190,0,0.30) 100%) border-box`,
            border: "1.5px solid transparent",
            boxShadow: "0 2px 12px rgba(0,11,56,0.08)",
            borderRadius: "10px",
          }}
        >
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => <Star key={i} size={12} color="#FEBE00" fill="#FEBE00" />)}
          </div>
          <span
            className="text-xs uppercase tracking-widest transition-colors"
            style={{ fontFamily: "var(--font-inter)", color: "rgba(0,11,56,0.65)" }}
          >
            Avalie a PS Proteção no Google
          </span>
          <ExternalLink size={13} color="rgba(0,11,56,0.35)" className="ml-auto transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>

        {/* ── Review cards ── */}
        <div ref={cardsRef} className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {reviews.map(({ name, role, text, stars }) => (
            <div
              key={name}
              className="review-card group relative flex flex-col p-5 md:p-6 transition-transform duration-300 hover:-translate-y-2"
              style={{
                background: `#FFFFFF padding-box,
                             linear-gradient(135deg, rgba(254,190,0,0.62) 0%, rgba(0,11,56,0.12) 55%, rgba(254,190,0,0.32) 100%) border-box`,
                border: "1.5px solid transparent",
                boxShadow: "0 4px 24px rgba(0,11,56,0.08)",
                borderRadius: "10px",
              }}
            >
              {/* Hover: gold top flash */}
              <div
                className="absolute top-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ background: "linear-gradient(90deg, transparent, #FEBE00, transparent)", borderRadius: "10px 10px 0 0" }}
              />

              {/* Hover: inner glow */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-400 pointer-events-none"
                style={{ background: "radial-gradient(circle at 50% 0%, rgba(254,190,0,0.04) 0%, transparent 60%)", borderRadius: "10px" }}
              />

              <div className="review-quote mb-3 relative z-10">
                <Quote size={32} color="#FEBE00" style={{ opacity: 0.65 }} />
              </div>

              <div className="review-stars flex gap-0.5 mb-3 relative z-10">
                {[...Array(stars)].map((_, i) => <Star key={i} size={13} color="#FEBE00" fill="#FEBE00" />)}
              </div>

              <p
                className="leading-relaxed flex-1 mb-5 relative z-10"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem", color: "rgba(0,11,56,0.72)", lineHeight: "1.75" }}
              >
                &ldquo;{text}&rdquo;
              </p>

              <div className="pt-4 relative z-10" style={{ borderTop: "1px solid rgba(0,11,56,0.08)" }}>
                <p
                  className="font-semibold"
                  style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.1rem", color: "#000B38" }}
                >
                  {name}
                </p>
                <p
                  className="text-[11px] uppercase tracking-[0.12em] mt-0.5"
                  style={{ fontFamily: "var(--font-inter)", color: "#FEBE00" }}
                >
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
