import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: "https://psprotecao.com.br/sitemap.xml",
    host: "https://psprotecao.com.br",
  };
}
