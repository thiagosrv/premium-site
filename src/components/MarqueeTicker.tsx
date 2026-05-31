"use client";
import { useRef, useEffect } from "react";
import { gsap } from "gsap";
import Link from "next/link";

const ITEMS = [
  { label: "Portaria & Controle de Acesso", href: "/solucoes/portaria-controle-acesso" },
  { label: "Segurança Patrimonial",          href: "/solucoes/seguranca-vigia"           },
  { label: "Rondas Motorizadas",             href: "/solucoes/rondas-motorizadas"        },
  { label: "Limpeza & Conservação",          href: "/solucoes/limpeza-conservacao"       },
  { label: "27 Anos de Experiência",         href: "/quem-somos"                         },
  { label: "+3.000 Colaboradores",           href: "/quem-somos"                         },
  { label: "Zelador & Manutenção",           href: "/solucoes/zelador-manutencao"        },
  { label: "Recepcionista",                  href: "/solucoes/recepcionista"             },
  { label: "Auxiliar Administrativo",        href: "/solucoes/auxiliar-administrativo"   },
  { label: "Americana — SP",                 href: "/contato"                            },
];

/* Dot separator */
const Dot = () => (
  <span
    className="shrink-0 w-1 h-1 rounded-full"
    style={{ background: "rgba(0,11,56,0.35)", margin: "0 20px" }}
    aria-hidden="true"
  />
);

/* One set of items */
function ItemSet() {
  return (
    <>
      {ITEMS.map(({ label, href }, i) => (
        <span key={i} className="inline-flex items-center shrink-0">
          <Link
            href={href}
            className="transition-colors duration-200 hover:opacity-60 shrink-0"
            style={{
              fontFamily: "var(--font-cormorant)",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#000B38",
              letterSpacing: "0.02em",
              whiteSpace: "nowrap",
            }}
            tabIndex={-1}
          >
            {label}
          </Link>
          <Dot />
        </span>
      ))}
    </>
  );
}

export default function MarqueeTicker() {
  const trackRef   = useRef<HTMLDivElement>(null);
  const tlRef      = useRef<gsap.core.Tween | null>(null);
  const timerRef   = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    /* Base scroll animation — xPercent -50 = exactly one set width (content duplicated) */
    const tl = gsap.to(track, {
      xPercent: -50,
      ease: "none",
      repeat: -1,
      duration: 28,
    });
    tlRef.current = tl;

    /* React to Lenis velocity — speed up on fast scroll, ease back to 1× */
    const onScroll = (e: Event) => {
      const { velocity } = (e as CustomEvent<{ velocity: number }>).detail;
      const targetScale = 1 + Math.min(Math.abs(velocity) * 0.45, 5);
      gsap.to(tl, { timeScale: targetScale, duration: 0.25, ease: "power2.out", overwrite: true });

      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        gsap.to(tl, { timeScale: 1, duration: 1.4, ease: "power2.out", overwrite: true });
      }, 220);
    };

    window.addEventListener("lenis-scroll", onScroll);
    return () => {
      tl.kill();
      window.removeEventListener("lenis-scroll", onScroll);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <div
      className="w-full overflow-hidden py-4"
      data-texture="diagonal"
      style={{ background: "#FEBE00", borderTop: "1px solid rgba(0,11,56,0.08)", borderBottom: "1px solid rgba(0,11,56,0.08)" }}
      aria-hidden="true"
    >
      <div
        ref={trackRef}
        className="flex items-center"
        style={{ width: "max-content" }}
      >
        {/* Two identical sets — GSAP loops at -50% = exactly one set */}
        <span className="inline-flex items-center"><ItemSet /></span>
        <span className="inline-flex items-center"><ItemSet /></span>
      </div>
    </div>
  );
}
