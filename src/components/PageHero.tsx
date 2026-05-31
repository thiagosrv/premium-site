"use client";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface Crumb { label: string; href?: string }

interface PageHeroProps {
  eyebrow: string;
  title: string;
  description?: string;
  breadcrumbs?: Crumb[];
}

export default function PageHero({ eyebrow, title, description, breadcrumbs }: PageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".ph-breadcrumb", { y: -12, opacity: 0, duration: 0.6, ease: "power3.out", delay: 0.1 });
      gsap.from(".ph-eyebrow", { x: -30, opacity: 0, duration: 0.7, ease: "power3.out", delay: 0.25 });
      gsap.from(".ph-title", { y: 40, opacity: 0, duration: 1, ease: "expo.out", delay: 0.35 });
      if (description) gsap.from(".ph-desc", { y: 20, opacity: 0, duration: 0.8, ease: "power3.out", delay: 0.55 });
    }, ref);
    return () => ctx.revert();
  }, [description]);

  return (
    <div
      ref={ref}
      className="relative pt-36 pb-20 px-8 md:px-20 lg:px-32 overflow-hidden"
      style={{ background: "linear-gradient(145deg, #000214 0%, #000B38 55%, #040E30 100%)" }}
    >
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 100%, rgba(254,190,0,0.06) 0%, transparent 55%)" }} />
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 90% 20%, rgba(15,35,110,0.4) 0%, transparent 45%)" }} />
      {/* Bottom border */}
      <div className="absolute bottom-0 left-0 right-0 h-px" style={{
        background: "linear-gradient(90deg, transparent, rgba(254,190,0,0.2), transparent)",
      }} />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Breadcrumbs */}
        {breadcrumbs && (
          <nav className="ph-breadcrumb flex items-center gap-1.5 mb-8" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="flex items-center gap-1.5">
                {i > 0 && <ChevronRight size={11} color="rgba(255,255,255,0.25)" />}
                {crumb.href ? (
                  <Link
                    href={crumb.href}
                    className="text-white/50 hover:text-[#FEBE00] transition-colors duration-200 text-[11px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {crumb.label}
                  </Link>
                ) : (
                  <span
                    className="text-[#FEBE00]/70 text-[11px] uppercase tracking-[0.2em]"
                    style={{ fontFamily: "var(--font-inter)" }}
                  >
                    {crumb.label}
                  </span>
                )}
              </span>
            ))}
          </nav>
        )}

        {/* Eyebrow */}
        <span
          className="ph-eyebrow block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {eyebrow}
        </span>

        {/* Title */}
        <h1
          className="ph-title text-white leading-tight max-w-3xl"
          style={{
            fontFamily: "var(--font-cormorant)",
            fontSize: "clamp(2.2rem, 4.5vw, 4rem)",
            fontWeight: 700,
          }}
        >
          {title}
        </h1>

        {/* Description */}
        {description && (
          <p
            className="ph-desc text-white/50 mt-6 max-w-xl leading-relaxed"
            style={{ fontFamily: "var(--font-inter)", fontSize: "0.975rem" }}
          >
            {description}
          </p>
        )}
      </div>
    </div>
  );
}
