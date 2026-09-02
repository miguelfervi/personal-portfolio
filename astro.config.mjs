// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

const vercelHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const site = vercelHost ? `https://${vercelHost}` : "https://miguelfervi.dev";

export default defineConfig({
  site,
  prefetch: true,
  compressHTML: true,
  integrations: [sitemap()],
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/about": "/cv",
    "/sobre-mi": "/es/cv",
    "/proyectos": "/es/projects",
  },
});
