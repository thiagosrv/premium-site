import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import PageHero from "@/components/PageHero";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "Contato | PS Proteção — Americana SP",
  description:
    "Entre em contato com a PS Proteção. Central disponível 24h. Solicite um diagnóstico gratuito para sua empresa ou condomínio em Americana e região de Campinas.",
  keywords: "contato ps proteção americana, telefone segurança americana sp, whatsapp portaria americana, orçamento segurança privada campinas",
  openGraph: {
    title: "Contato | PS Proteção — Americana SP",
    description: "Central 24h. Diagnóstico gratuito para empresas e condomínios na Região Metropolitana de Campinas.",
    url: "https://psprotecao.com.br/contato",
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://psprotecao.com.br/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <main>
        <Navbar />
        <PageHero
          eyebrow="Contato"
          title="Fale com um especialista agora"
          description="Nossa central funciona ininterruptamente. Ligue, mande uma mensagem ou preencha o formulário — respondemos em até 24h úteis."
          breadcrumbs={[
            { label: "Início", href: "/" },
            { label: "Contato" },
          ]}
        />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
