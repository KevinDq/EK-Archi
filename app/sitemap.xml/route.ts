import { NextResponse } from "next/server";
import { projets } from "@/app/data";

export async function GET() {
  const baseUrl = "https://ek-archi.vercel.app";

  const staticPages = [
    "",
    "/portfolio",
    "/about",
    "/contact",
    // Ajoute ici tous les autres chemins statiques de ton site
  ];

  const dynamicPages = projets.map((p) => `/portfolio/${p.slug}`);

  const allPages = [...staticPages, ...dynamicPages];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allPages
  .map((path) => {
    return `<url><loc>${baseUrl}${path}</loc></url>`;
  })
  .join("\n")}
</urlset>`;

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  });
}
