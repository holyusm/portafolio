import type { MetadataRoute } from "next";
import { site } from "@/content/i18n";
import { projects } from "@/content/projects";
import { locales } from "@/content/types";

export default function sitemap(): MetadataRoute.Sitemap {
  return locales.flatMap((lang) => [
    { url: `${site.url}/${lang}` },
    ...projects.map((p) => ({ url: `${site.url}/${lang}/projects/${p.slug}` })),
  ]);
}
