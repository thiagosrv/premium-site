import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/services";

const BASE = "https://psprotecao.com.br";

export default function sitemap(): MetadataRoute.Sitemap {
  const servicePages: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${BASE}/solucoes/${s.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  return [
    { url: BASE,                    lastModified: new Date(), changeFrequency: "monthly", priority: 1.0  },
    { url: `${BASE}/quem-somos`,    lastModified: new Date(), changeFrequency: "monthly", priority: 0.8  },
    { url: `${BASE}/solucoes`,      lastModified: new Date(), changeFrequency: "monthly", priority: 0.9  },
    ...servicePages,
    { url: `${BASE}/contato`,       lastModified: new Date(), changeFrequency: "yearly",  priority: 0.7  },
  ];
}
