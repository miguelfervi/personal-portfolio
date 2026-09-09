---
title:
  en: Finanzas
  es: Finanzas
excerpt:
  en: "Personal income and expense dashboard with Google sign-in, budgets, and charts."
  es: "Dashboard personal de ingresos y gastos con Google, presupuestos y gráficas."
description:
  en: Next.js finance app with Google auth, Neon Postgres, category budgets, and monthly or yearly charts.
  es: App Next.js de finanzas con Google, Neon Postgres, presupuestos por categoría y gráficas mensuales o anuales.
tags:
  - Next.js
  - React
  - TypeScript
  - Drizzle
  - Neon
  - Auth.js
  - Tailwind CSS
  - Recharts
image: /projects/finanzas.png
year: "2026"
kind: personal
demo: https://dashboard-alpha-nine-a6t942mcbg.vercel.app/login
featured: true
order: 4
body:
  en: |
    A personal finance dashboard for income and expenses. Sign-in is Google OAuth only (Auth.js with a database session). After login there are five views: dashboard, monthly, annual, categories, and accounts. You can CRUD expenses and incomes, attach a payment method and optional account, add categories with an emoji picker, set a monthly limit per category, and manage cards or accounts. The monthly list filters by text, category, and method. Charts cover month series, year-over-year, category split, income by account, and balance sparklines. Currency (EUR/USD/GBP), language (es/en), year, and a savings-goal cookie live in the shell.

    Data goes through Server Actions with Zod, not REST routes — except Auth.js. Neon Postgres plus Drizzle: Auth.js tables, payment accounts, categories, expenses, incomes, and a rate-limit table (20 mutations per minute per user). Rows for money are scoped by the session email; categories are shared. Aggregations mix SQL (sum, groupBy year) with a pure calculations module. CI runs lint, typecheck, and build; Vitest covers the money math and formatters; Playwright exists but needs a session cookie, so it is not in CI.

    Stack is Next.js 16 (App Router) and React 19, TypeScript, Tailwind CSS, Drizzle on Neon, Auth.js, next-intl, Radix/shadcn, Recharts, and Zod. CSP and auth middleware sit in front. The live demo opens on the login screen. The GitHub repo stays private.
  es: |
    Un dashboard de finanzas personales para ingresos y gastos. El acceso es solo Google OAuth (Auth.js con sesión en base de datos). Tras el login hay cinco vistas: dashboard, mensual, anual, categorías y cuentas. Puedes crear y editar gastos e ingresos, asignar método de pago y cuenta, añadir categorías con emoji, poner un límite mensual por categoría y gestionar tarjetas o cuentas. La lista mensual filtra por texto, categoría y método. Las gráficas cubren series del mes, año contra año, desglose por categoría, ingresos por cuenta y sparklines de balance. Moneda (EUR/USD/GBP), idioma (es/en), año y una cookie de meta de ahorro viven en el shell.

    Los datos van por Server Actions con Zod, no por rutas REST — salvo Auth.js. Neon Postgres más Drizzle: tablas de Auth.js, cuentas de pago, categorías, gastos, ingresos y un rate-limit (20 mutaciones por minuto y usuario). El dinero se filtra por el email de la sesión; las categorías son compartidas. Las agregaciones mezclan SQL (sum, groupBy año) con un módulo de cálculos puro. El CI corre lint, typecheck y build; Vitest cubre las cuentas y el formato; Playwright existe pero necesita cookie de sesión, así que no está en CI.

    El stack es Next.js 16 (App Router) y React 19, TypeScript, Tailwind CSS, Drizzle sobre Neon, Auth.js, next-intl, Radix/shadcn, Recharts y Zod. Delante van CSP y middleware de auth. La demo abre en el login. El repo de GitHub es privado.
---
