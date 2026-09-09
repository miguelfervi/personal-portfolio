---
title:
  en: Pace calculator
  es: Calculadora de ritmo
excerpt:
  en: "Vue running calculator: two fields in, the third out, plus a one-tap history."
  es: "Calculadora Vue de running: dos campos, el tercero sale, y un historial a un toque."
description:
  en: Client-side running calculator. Metric and imperial units, a typed domain layer, and the last three calculations one tap away. Live on Vercel.
  es: Calculadora de running en el cliente. Unidades métricas e imperiales, dominio tipado, y los últimos tres cálculos a un toque. En Vercel.
tags:
  - Vue
  - TypeScript
  - Vite
  - Tailwind CSS
  - Zod
  - Vitest
image: /projects/pace-calculator.png
year: "2026"
kind: personal
demo: https://pace-calculator-opal.vercel.app/
repo: https://github.com/miguelfervi/pace-calculator
featured: true
order: 5
body:
  en: |
    A Vue 3 calculator for running pace, distance, and time. Fill any two fields and it solves the third. Distance is meters, kilometers, yards, or miles; pace is always stored per kilometer, then shown in the unit you picked.

    The math sits in a pure TypeScript domain — Zod schemas, typed outcomes, no Vue. The UI is Spanish and English, with a dark/light theme that survives reload. The last three distinct calculations live in their own card: tap one and it refills the two known inputs, leaving the unknown empty. That list is unique, capped at three, and kept in localStorage.

    Stack is Vue 3, TypeScript, Vite, Tailwind CSS, and Zod. Tests are Vitest in CI. Accessibility covers labeled fields and named unit selects; on a phone the layout uses the full width and a keyboard that can type 4:30. Canonical host is Vercel; GitHub Pages still redirects there.
  es: |
    Una calculadora Vue 3 de ritmo, distancia y tiempo de running. Rellenas dos campos y resuelve el tercero. La distancia va en metros, kilómetros, yardas o millas; el ritmo se guarda siempre por kilómetro y se muestra en la unidad que elijas.

    Las cuentas viven en un dominio TypeScript puro — esquemas Zod, resultados tipados, sin Vue. La UI está en español e inglés, con tema claro/oscuro que aguanta recargar. Los últimos tres cálculos distintos van en su propia tarjeta: al pulsar, rellena los dos inputs conocidos y deja vacío el desconocido. La lista es única, de tres como máximo, y se guarda en localStorage.

    El stack es Vue 3, TypeScript, Vite, Tailwind CSS y Zod. Los tests son Vitest en CI. La accesibilidad cubre campos con label y selects de unidad con nombre; en el móvil usa todo el ancho y un teclado con el que se puede escribir 4:30. El host canónico es Vercel; GitHub Pages sigue redirigiendo ahí.
---
