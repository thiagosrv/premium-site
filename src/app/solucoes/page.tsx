import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { SERVICES } from "@/lib/services";
import Link from "next/link";
import {
  UserCheck, Sparkles, Shield, Car, Coffee,
  Briefcase, Monitor, Wrench, ArrowRight, MessageCircle,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções de Segurança e Facilities | PS Proteção — Americana SP",
  description:
    "Portaria, vigilância patrimonial, controle de acesso, rondas motorizadas, limpeza, copeira, recepcionista, zelador e auxiliar administrativo. Diagnóstico gratuito em Americana e Região de Campinas.",
  keywords:
    "portaria condomínio americana sp, vigilância patrimonial campinas, controle de acesso empresas, rondas motorizadas americana, limpeza conservação campinas, facilities terceirização americana",
  openGraph: {
    title: "Soluções de Segurança e Facilities | PS Proteção",
    description: "8 soluções de segurança e facilities para condomínios e empresas. Diagnóstico gratuito.",
    url: "https://psprotecao.com.br/solucoes",
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://psprotecao.com.br/solucoes" },
};

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; color?: string }>> = {
  "user-check": UserCheck, sparkles: Sparkles, shield: Shield, car: Car,
  coffee: Coffee, briefcase: Briefcase, monitor: Monitor, wrench: Wrench,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Soluções de Segurança — PS Proteção",
  "itemListElement": SERVICES.map((s, i) => ({
    "@type": "ListItem",
    "position": i + 1,
    "name": s.eyebrow,
    "url": `https://psprotecao.com.br/solucoes/${s.slug}`,
  })),
};

export default function Solucoes() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main>
        <Navbar />
        <PageHero
          eyebrow="Soluções"
          title="Terceirização integrada para condomínios e empresas"
          description="Do porteiro ao zelador, da recepcionista ao vigia — entregamos cada solução com processo definido, supervisão ativa e relatório mensal."
          breadcrumbs={[{ label: "Início", href: "/" }, { label: "Soluções" }]}
        />

        {/* ── Services grid ───────────────────────────────────────── */}
        <section id="servicos" className="py-24 px-8 md:px-20 lg:px-32" style={{ background: "linear-gradient(135deg, #010412 0%, #040926 45%, #0A1540 100%)" }}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
              {SERVICES.map(({ slug, icon, eyebrow, subtitle }) => {
                const Icon = ICON_MAP[icon] ?? Shield;
                return (
                  <Link
                    key={slug}
                    href={`/solucoes/${slug}`}
                    className="group relative flex flex-col p-7 transition-all duration-500 hover:-translate-y-2 overflow-hidden"
                    style={{
                      background: "linear-gradient(145deg, rgba(255,255,255,0.045) 0%, rgba(255,255,255,0.015) 100%)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      boxShadow: "0 8px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    {/* Hover glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{ background: "radial-gradient(circle at 30% 0%, rgba(254,190,0,0.08) 0%, transparent 65%)" }} />
                    {/* Hover top line */}
                    <div className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "linear-gradient(90deg, transparent, #FEBE00, transparent)" }} />

                    <div className="w-12 h-12 flex items-center justify-center mb-5 shrink-0 relative z-10 transition-transform duration-300 group-hover:scale-110" style={{ background: "rgba(254,190,0,0.07)", border: "1px solid rgba(254,190,0,0.18)" }}>
                      <Icon size={20} color="#FEBE00" />
                    </div>

                    <p className="text-[#FEBE00]/60 text-[9px] uppercase tracking-[0.2em] mb-1.5 relative z-10" style={{ fontFamily: "var(--font-inter)" }}>
                      {eyebrow}
                    </p>
                    <p className="text-white/70 group-hover:text-white transition-colors duration-300 leading-snug mb-4 relative z-10 flex-1" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                      {subtitle.split(".")[0]}.
                    </p>

                    <div className="flex items-center gap-1.5 text-[#FEBE00]/50 group-hover:text-[#FEBE00] transition-colors duration-300 relative z-10" style={{ fontFamily: "var(--font-inter)", fontSize: "0.7rem", letterSpacing: "0.1em", textTransform: "uppercase" }}>
                      Ver serviço <ArrowRight size={12} className="transition-transform duration-300 group-hover:translate-x-1" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why PS strip ────────────────────────────────────────── */}
        <section className="py-20 px-8 md:px-20 lg:px-32" style={{ background: "linear-gradient(158deg, #000B38 0%, #040D32 50%, #000214 100%)", borderTop: "1px solid rgba(255,255,255,0.04)" }}>
          <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">
            {[
              { label: "Diagnóstico gratuito",  desc: "Avaliamos seu perfil de risco sem custo e entregamos um plano sob medida." },
              { label: "Cobertura total",        desc: "Folgas, férias e afastamentos nunca ficam descobertos. Substituição imediata." },
              { label: "Relatório mensal",       desc: "Transparência total: ocorrências, indicadores e melhorias todo mês." },
            ].map(({ label, desc }) => (
              <div key={label} className="flex gap-4">
                <div className="w-1 h-12 shrink-0 mt-1" style={{ background: "#FEBE00" }} />
                <div>
                  <p className="text-white font-semibold mb-2" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}>{label}</p>
                  <p className="text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────────── */}
        <section className="py-24 px-8 md:px-20 lg:px-32 text-center relative overflow-hidden" style={{ background: "linear-gradient(145deg, #07102A 0%, #030A20 55%, #000412 100%)" }}>
          <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 50%, rgba(254,190,0,0.05) 0%, transparent 70%)" }} />
          <div className="max-w-xl mx-auto relative z-10">
            <h2 className="text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}>
              Quer uma proposta personalizada?
            </h2>
            <p className="text-white/45 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
              Fale com um especialista agora. Diagnóstico gratuito e resposta em até 24 h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento%20de%20servi%C3%A7os."
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
      </main>
      <FloatingWhatsApp />
    </>
  );
}
