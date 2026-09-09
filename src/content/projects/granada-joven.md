---
title:
  en: Granada Joven
  es: Granada Joven
excerpt:
  en: "Public site for an athletics club in Granada: news, rankings, calendar, and a staff CMS."
  es: "Web pública de un club de atletismo en Granada: noticias, ránkings, calendario y CMS para el staff."
description:
  en: Astro club website with Keystatic. Coaches and secretariat publish without GitHub. Spanish public pages, English source.
  es: Web del club en Astro con Keystatic. Entrenadores y secretaría publican sin GitHub. Páginas públicas en español, código en inglés.
tags:
  - Astro
  - TypeScript
  - Tailwind CSS
  - Keystatic
  - Vitest
image: /projects/granada-joven.jpg
year: "2026"
kind: personal
featured: true
order: 2
body:
  en: |
    The public website for Club de Atletismo Granada Joven. Spanish routes cover the club, calendar, athletes, coaches, outdoor rankings, news, galleries, contact, and join. Rankings, news, and staff bios are collections the club can edit — not hardcoded pages.

    An intranet sits in front of Keystatic. Secretaría and coaches sign in with their own accounts; editors publish content, admins also manage users. A save on the live site commits the change and Vercel rebuilds the public pages, so staff never touch GitHub. Sessions are HMAC cookies. Photos can go through Vercel Blob. Intranet routes stay out of the sitemap; search engines get robots.txt, Open Graph, and JSON-LD.

    Stack is Astro 7, TypeScript, Tailwind CSS 4, Keystatic, Markdoc for news, and React only where the CMS needs it. Tests are Vitest plus `astro check`, a production build, and an HTML smoke on `dist/`. Analytics are Vercel Analytics and Speed Insights. The repo stays private until the club launches.
  es: |
    La web pública del Club de Atletismo Granada Joven. Las rutas en español cubren el club, calendario, atletas, entrenadores, ránkings al aire libre, noticias, galerías, contacto e inscripción. Ránkings, noticias y fichas del staff son colecciones que el club edita — no páginas a fuego.

    Delante de Keystatic hay una intranet. Secretaría y entrenadores entran con su usuario; los editores publican, los admins también gestionan cuentas. Guardar en el sitio en vivo hace commit y Vercel regenera las páginas públicas, así que el staff no toca GitHub. Las sesiones van en cookies HMAC. Las fotos pueden ir por Vercel Blob. Las rutas de intranet no salen en el sitemap; los buscadores tienen robots.txt, Open Graph y JSON-LD.

    El stack es Astro 7, TypeScript, Tailwind CSS 4, Keystatic, Markdoc para noticias y React solo donde el CMS lo pide. Los tests son Vitest más `astro check`, un build de producción y un smoke HTML sobre `dist/`. Analytics son Vercel Analytics y Speed Insights. El repo se queda privado hasta que el club lo lance.
---
