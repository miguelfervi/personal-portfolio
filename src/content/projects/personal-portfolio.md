---
title:
  en: Personal portfolio
  es: Portfolio personal
excerpt:
  en: "This site: Astro, TypeScript, bilingual EN/ES, and an editorial reading layout."
  es: "Este sitio: Astro, TypeScript, bilingüe EN/ES y un layout de lectura editorial."
description:
  en: Personal site in Astro and TypeScript. Markdown collections, a bilingual resume, company cards, and CI on every push. Live at miguelfervi.dev.
  es: Sitio personal en Astro y TypeScript. Colecciones Markdown, resume bilingüe, una tarjeta por empresa y CI en cada push. En miguelfervi.dev.
tags:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Vitest
image: /projects/portfolio.png
year: "2026"
kind: personal
demo: https://miguelfervi.dev
repo: https://github.com/miguelfervi/personal-portfolio
featured: false
order: 6
body:
  en: |
    This site. Pages are Astro. Copy lives in three glob collections — projects, experience, education — with a Zod schema of bilingual `{ en, es }` fields. Projects carry a `kind` (personal or company) and an editorial `order`. Spanish is a mirrored tree under `src/pages/es/` that shares the same components; English has no URL prefix. A small URL layer keeps the logical route when you switch language, including old-path redirects in the Astro config. Identity and skills stay in a typed `site` module, not in Markdown. Live at miguelfervi.dev.

    Home has a portrait, selected work, and skills. Selected work is not a dump of featured flags: at most one company card first, then personal apps, capped at three. The projects index puts personal apps first, then one card per company with public brand images. The resume page composes the experience and education collections with that static skill list. The Read page body is frontmatter paragraphs, not a Markdown AST.

    Theme is applied in the head before paint (localStorage or system), then a preferences module re-applies it on Astro View Transitions, resyncs bilingual toggle labels, and restores scroll when you hop `/` ↔ `/es`. SEO is one `pageSeo()` helper: canonical, hreflang (x-default English), Open Graph, Twitter, and a localized Person JSON-LD. Sitemap comes from `@astrojs/sitemap`. Analytics are Vercel Analytics plus Speed Insights. CI is a single `verify` job: eight Vitest suites on the lib, `astro check`, a production build, then a smoke pass that parses the HTML in `dist/` for lang, language toggles, demo links, and redirects.
  es: |
    Este sitio. Las páginas son Astro. El copy vive en tres colecciones glob — projects, experience, education — con un esquema Zod de campos bilingües `{ en, es }`. Los proyectos llevan un `kind` (personal o empresa) y un `order` editorial. El español es un árbol espejo bajo `src/pages/es/` que comparte los mismos componentes; el inglés no lleva prefijo. Una capa pequeña de URLs mantiene la ruta lógica al cambiar de idioma, incluidos redirects de paths viejos en la config de Astro. Identidad y skills viven en un módulo tipado `site`, no en Markdown. Está en miguelfervi.dev.

    La home tiene retrato, trabajo seleccionado y skills. El trabajo seleccionado no es un dump de flags: como mucho una tarjeta de empresa primero, luego apps personales, tope de tres. El índice de proyectos pone primero lo personal y luego una tarjeta por empresa con marcas públicas. El resume compone las colecciones de experiencia y educación con esa lista estática de skills. El cuerpo de Read son párrafos del frontmatter, no un AST de Markdown.

    El tema se aplica en el head antes del paint (localStorage o sistema), y un módulo de preferencias lo reaplica en las View Transitions de Astro, resincroniza los labels bilingües del toggle y restaura el scroll al saltar `/` ↔ `/es`. El SEO es un helper `pageSeo()`: canonical, hreflang (x-default inglés), Open Graph, Twitter y un JSON-LD Person localizado. El sitemap sale de `@astrojs/sitemap`. Analytics son Vercel Analytics más Speed Insights. El CI es un solo job `verify`: ocho suites Vitest de la lib, `astro check`, un build de producción y un smoke que parsea el HTML de `dist/` (lang, toggles, demos y redirects).
---
