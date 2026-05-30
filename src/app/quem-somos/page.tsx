import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Quem Somos | PS Proteção — 27 Anos de Experiência",
  description:
    "Fundada em 1997, a PS Proteção é referência em segurança e facilities na Região Metropolitana de Campinas. Conheça nossa história, missão e diferenciais.",
  keywords: "PS Proteção história, empresa segurança americana sp, 27 anos segurança privada, quem somos ps proteção",
  openGraph: {
    title: "Quem Somos | PS Proteção",
    description: "27 anos protegendo empresas e condomínios com responsabilidade, eficiência e respeito.",
    url: "https://psprotecao.com.br/quem-somos",
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://psprotecao.com.br/quem-somos" },
};

export default function QuemSomos() {
  return (
    <>
      <main>
        <Navbar />
        <PageHero
          eyebrow="Quem Somos"
          title="27 anos construindo segurança com propósito"
          description="Fundada em 1997, a PS Proteção nasceu com uma missão clara: proteger pessoas, patrimônios e operações com rigor, responsabilidade e respeito. Hoje somos referência na Região Metropolitana de Campinas."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Quem Somos" },
          ]}
        />
        <About />
        <Stats />

        {/* CTA section */}
        <section
          className="py-24 px-8 md:px-20 lg:px-32 text-center"
          style={{ background: "#040926" }}
        >
          <div className="max-w-2xl mx-auto">
            <span
              className="block mb-4 text-[#FEBE00] tracking-[0.32em] uppercase text-xs"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Próximo Passo
            </span>
            <h2
              className="text-white mb-6 leading-tight"
              style={{
                fontFamily: "var(--font-cormorant)",
                fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
                fontWeight: 700,
              }}
            >
              Pronto para proteger o seu negócio?
            </h2>
            <p
              className="text-white/45 mb-10 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}
            >
              Solicite um diagnóstico gratuito e receba uma proposta personalizada
              para sua empresa ou condomínio em até 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20um%20diagn%C3%B3stico%20gratuito."
                target="_blank" rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                Solicitar Diagnóstico <ArrowRight size={15} />
              </a>
              <Link
                href="/solucoes"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold transition-all duration-300 hover:border-[#FEBE00]/50 hover:text-white"
                style={{
                  fontFamily: "var(--font-inter)",
                  fontSize: "0.8rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                Ver Soluções <ArrowRight size={15} />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FloatingWhatsApp />
    </>
  );
}
