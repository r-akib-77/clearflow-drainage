import type { MetadataRoute } from "next";
import { business } from "@/config/business";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = business.baseUrl;
  const pages = [
    "/",
    "/services",
    "/services/blocked-drains",
    "/services/cctv-drain-surveys",
    "/services/drain-repairs",
    "/services/high-pressure-jetting",
    "/services/septic-tank-services",
    "/service-areas",
    "/service-areas/cork",
    "/about",
    "/contact",
    "/request-a-quote",
    "/privacy",
  ];
  return pages.map((p) => ({
    url: `${base}${p}`,
    lastModified: new Date(),
    changeFrequency: p === "/" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services") ? 0.8 : 0.6,
  }));
}
