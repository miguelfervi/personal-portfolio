// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  prefetch: true,
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  redirects: {
    "/about": "/cv",
    "/sobre-mi": "/cv",
    "/proyectos": "/projects",
    "/contacto": "/contact",
  },
});
