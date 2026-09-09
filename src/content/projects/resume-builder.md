---
title:
  en: Resume Builder
  es: Resume Builder
excerpt:
  en: "Live A4 resume editor with templates, multi-CV, and PDF download in the browser."
  es: "Editor de resume en A4 con plantillas, varios CVs y descarga PDF, en el navegador."
description:
  en: Next.js app to write, preview, and export resumes. Four templates, undo, localStorage, no account.
  es: App Next.js para escribir, previsualizar y exportar resumes. Cuatro plantillas, deshacer, localStorage, sin cuenta.
tags:
  - Next.js
  - React
  - TypeScript
  - Tailwind CSS
  - dnd-kit
  - react-pdf
  - Vitest
image: /projects/resume-builder.png
year: "2026"
kind: personal
demo: https://resume-builder-liard-three-68.vercel.app/
repo: https://github.com/miguelfervi/resume-builder
featured: true
order: 3
body:
  en: |
    A resume editor that stays in the browser. You write in a sidebar and watch an A4 preview update. There is no account: the full app state autosaves to localStorage, including several resume variants you can create, rename, duplicate, or delete. Each variant keeps its own template and data. You can also import and export the active CV as JSON.

    Four templates — Classic, Modern, Minimal, and ATS. ATS is a flat, single-column layout without a photo, not a scoring engine. Preview is HTML scaled to A4; download goes through a parallel @react-pdf/renderer document. Photo upload opens a circular crop (drag to position, zoom, JPEG in base64). Undo/redo snapshots the whole state (debounced, up to 50 steps) with keyboard shortcuts. Drag-and-drop reorders entries inside a section — jobs, education, skills — not the sections themselves.

    Stack is Next.js 16 (App Router) and React 19, TypeScript, Tailwind CSS 4, @dnd-kit, and @react-pdf/renderer. Tests are Vitest (unit) plus Playwright (editor, multi-CV, undo, persistence). Live on Vercel.
  es: |
    Un editor de resume que se queda en el navegador. Escribes en un sidebar y ves el A4 actualizarse. Sin cuenta: el estado entero se guarda solo en localStorage, incluidas varias variantes que puedes crear, renombrar, duplicar o borrar. Cada una guarda su plantilla y sus datos. También puedes importar y exportar el CV activo como JSON.

    Cuatro plantillas — Classic, Modern, Minimal y ATS. ATS es un layout plano de una columna sin foto, no un motor de scoring. El preview es HTML a escala A4; la descarga usa un documento paralelo de @react-pdf/renderer. La foto se sube y se recorta en círculo (arrastrar, zoom, JPEG en base64). Deshacer/rehacer guarda el estado entero (con debounce, hasta 50 pasos) y atajos de teclado. El drag-and-drop reordena entradas dentro de una sección — empleos, educación, skills — no las secciones.

    El stack es Next.js 16 (App Router) y React 19, TypeScript, Tailwind CSS 4, @dnd-kit y @react-pdf/renderer. Los tests son Vitest (unitarios) y Playwright (editor, multi-CV, deshacer, persistencia). En Vercel.
---
