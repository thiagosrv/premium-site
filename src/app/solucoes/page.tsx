import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Services from "@/components/Services";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Link from "next/link";
import { ArrowRight, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Soluções de Segurança | PS Proteção — Americana SP",
  description:
    "Portaria, vigilância patrimonial, controle de acesso, rondas de segurança, vigia e facilities. Soluções completas para condomínios e empresas na Região Metropolitana de Campinas.",
  keywords: "portaria condomínio americana, vigilância patrimonial campinas, controle de acesso empresas, rondas segurança sp, facilities terceirização",
  openGraph: {
    title: "Soluções de Segurança | PS Proteção",
    description: "Portaria, vigilância, controle de acesso e facilities. Diagnóstico gratuito para sua empresa.",
    url: "https://psprotecao.com.br/solucoes",
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://psprotecao.com.br/solucoes" },
};

export default function Solucoes() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Soluções de Segurança — PS Proteção",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Segurança Privada", "url": "https://psprotecao.com.br/solucoes#seguranca-privada" },
      { "@type": "ListItem", "position": 2, "name": "Portaria", "url": "https://psprotecao.com.br/solucoes#portaria" },
      { "@type": "ListItem", "position": 3, "name": "Controle de Acesso", "url": "https://psprotecao.com.br/solucoes#controle-acesso" },
      { "@type": "ListItem", "position": 4, "name": "Rondas de Segurança", "url": "https://psprotecao.com.br/solucoes#rondas" },
      { "@type": "ListItem", "position": 5, "name": "Vigia", "url": "https://psprotecao.com.br/solucoes#vigia" },
      { "@type": "ListItem", "position": 6, "name": "Limpeza & Zeladoria", "url": "https://psprotecao.com.br/solucoes#facilities" },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <PageHero
          eyebrow="Soluções"
          title="Terceirização integrada com processo, supervisão e relatório"
          description="Da portaria à zeladoria — cada serviço entregue com SLA definido, supervisão ativa 24h e relatório fotográfico para que você tenha controle total."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Soluções" },
          ]}
        />
        <Services />

        {/* Differentials strip */}
        <section
          className="py-20 px-8 md:px-20 lg:px-32"
          style={{ background: "#000B38", borderTop: "1px solid rgba(255,255,255,0.04)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  label: "Diagnóstico gratuito",
                  description: "Avaliamos seu perfil de risco sem custo e apresentamos um plano sob medida.",
                },
                {
                  label: "Cobertura garantida",
                  description: "Folgas, férias e ausências nunca ficam descobertas. Substituição imediata.",
                },
                {
                  label: "Relatório mensal",
                  description: "Transparência total: ocorrências, rondas e indicadores entregues todo mês.",
                },
              ].map(({ label, description }) => (
                <div key={label} className="flex gap-4 items-start">
                  <div className="w-1 h-12 shrink-0 mt-1" style={{ background: "#FEBE00" }} />
                  <div>
                    <p className="text-white font-semibold mb-1.5" style={{ fontFamily: "var(--font-cormorant)", fontSize: "1.15rem" }}>
                      {label}
                    </p>
                    <p className="text-white/45 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.875rem" }}>
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section
          className="py-24 px-8 md:px-20 lg:px-32 text-center relative overflow-hidden"
          style={{ background: "#07102A" }}
        >
          <div className="absolute inset-0 pointer-events-none" style={{
            background: "radial-gradient(ellipse at 50% 50%, rgba(254,190,0,0.05) 0%, transparent 70%)",
          }} />
          <div className="max-w-xl mx-auto relative z-10">
            <h2
              className="text-white mb-6 leading-tight"
              style={{ fontFamily: "var(--font-cormorant)", fontSize: "clamp(1.8rem, 3vw, 2.8rem)", fontWeight: 700 }}
            >
              Quer uma proposta personalizada?
            </h2>
            <p className="text-white/45 mb-10 leading-relaxed" style={{ fontFamily: "var(--font-inter)", fontSize: "0.95rem" }}>
              Fale com um especialista agora. Diagnóstico gratuito e resposta em até 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5519978210246?text=Ol%C3%A1!%20Gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                target="_blank" rel="noopener noreferrer"
                className="cta-primary inline-flex items-center justify-center gap-2 px-8 py-4 font-semibold"
                style={{ fontFamily: "var(--font-inter)", fontSize: "0.8rem", letterSpacing: "0.1em", textTransform: "uppercase" }}
              >
                <MessageCircle size={16} /> Chamar no WhatsApp
              </a>
              <Link
                href="/contato"
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
