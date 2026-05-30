import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import Reviews from "@/components/Reviews";
import Contact from "@/components/Contact";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export const metadata: Metadata = {
  title: "PS Proteção — Segurança Privada de Alto Padrão | Americana-SP",
  description:
    "Empresa de segurança privada com 27 anos de experiência. Portaria, vigilância, controle de acesso, rondas e facilities para condomínios e empresas na Região Metropolitana de Campinas.",
  keywords: "segurança privada americana sp, portaria condomínio campinas, controle de acesso, vigilância patrimonial, facilities terceirização",
  openGraph: {
    title: "PS Proteção — Segurança Privada de Alto Padrão",
    description: "27 anos protegendo empresas e condomínios na Região Metropolitana de Campinas.",
    url: "https://psprotecao.com.br",
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: "https://psprotecao.com.br" },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SecurityService",
    "name": "PS Proteção",
    "alternateName": "PS Proteção e Vigilância",
    "url": "https://psprotecao.com.br",
    "telephone": ["+551934787799", "+5519978210246"],
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Rua São Gabriel, 1623 Vila Belvedere",
      "addressLocality": "Americana",
      "addressRegion": "SP",
      "postalCode": "13478-000",
      "addressCountry": "BR"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "-22.7409",
      "longitude": "-47.3328"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    },
    "priceRange": "$$",
    "description": "Empresa de segurança privada com 27 anos de experiência. Portaria, vigilância, controle de acesso, rondas e limpeza para condomínios e empresas na Região Metropolitana de Campinas.",
    "foundingDate": "1997",
    "areaServed": "Região Metropolitana de Campinas, SP",
    "hasMap": "https://maps.app.goo.gl/QtABs1ubKBPghTsL8",
    "sameAs": [
      "https://share.google/NNasndqbeh98CIbif"
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Stats />
        <Reviews />
        <Contact />
      </main>
      <FloatingWhatsApp />
    </>
  );
}
