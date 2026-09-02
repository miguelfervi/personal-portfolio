import type { Text } from "./i18n";

export const site = {
  name: "Miguel Fernández Villegas",
  handle: "miguelfervi",
  role: { en: "Senior Product Engineer", es: "Senior Product Engineer" } satisfies Text,
  location: { en: "Granada, Spain", es: "Granada, España" } satisfies Text,
  tagline: {
    en: "Ten years shipping SaaS and marketplace products. Front-end architecture, conversion-critical UI, and AI-assisted delivery.",
    es: "Diez años lanzando productos SaaS y marketplaces. Arquitectura front-end, UI crítica para conversión y entrega asistida por IA.",
  } satisfies Text,
  email: "miguelfervi@gmail.com",
  github: "https://github.com/miguelfervi",
  githubHandle: "miguelfervi",
  linkedin: "https://www.linkedin.com/in/miguelfervi",
  linkedinHandle: "linkedin.com/in/miguelfervi",
  twitter: "",
  twitterHandle: "",
};

export const skills: { group: Text; items: string[] }[] = [
  {
    group: { en: "Front-end", es: "Front-end" },
    items: ["TypeScript", "Vue", "React", "React Native", "Nuxt", "Next.js"],
  },
  {
    group: { en: "Full stack", es: "Full stack" },
    items: ["Node.js", "NestJS", "GraphQL", "REST", "PHP", "Java"],
  },
  {
    group: { en: "AI & agents", es: "IA y agentes" },
    items: ["MCP", "RAG", "Prompt engineering", "Claude", "Codex", "Cursor"],
  },
  {
    group: { en: "Delivery", es: "Entrega" },
    items: ["Core Web Vitals", "Monorepos", "CI/CD", "Datadog", "Sentry", "Testing"],
  },
];

export const spokenLanguages = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "C1 · Professional", es: "C1 · Profesional" } },
];
