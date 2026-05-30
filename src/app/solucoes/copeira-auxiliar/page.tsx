import type { Metadata } from "next";
import { getService } from "@/lib/services";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import { notFound } from "next/navigation";

const SLUG = "copeira-auxiliar";
const service = getService(SLUG)!;

export const metadata: Metadata = {
  title: service.seo.title,
  description: service.seo.description,
  keywords: service.seo.keywords,
  openGraph: {
    title: service.seo.title,
    description: service.seo.description,
    url: `https://psprotecao.com.br/solucoes/${SLUG}`,
    siteName: "PS Proteção",
    locale: "pt_BR",
    type: "website",
  },
  alternates: { canonical: `https://psprotecao.com.br/solucoes/${SLUG}` },
};

export default function Page() {
  if (!service) notFound();
  return <ServicePageTemplate service={service} />;
}
