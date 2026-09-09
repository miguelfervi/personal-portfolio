import type { Text } from "./i18n";

export const site = {
  name: "Miguel Fernández Villegas",
  handle: "miguelfervi",
  role: {
    en: "Senior Frontend Engineer & Product Engineer",
    es: "Senior Frontend Engineer y Product Engineer",
  } satisfies Text,
  location: { en: "Granada, Spain", es: "Granada, España" } satisfies Text,
  tagline: {
    en: "Ten years shipping SaaS and marketplace products. Front-end architecture, conversion-critical UI, and AI-assisted delivery.",
    es: "Diez años lanzando productos SaaS y marketplaces. Arquitectura front-end, UI crítica para conversión y entrega asistida por IA.",
  } satisfies Text,
  email: "miguelfervi@gmail.com",
  github: "https://github.com/miguelfervi",
  githubHandle: "miguelfervi",
  url: "https://miguelfervi.dev",
  linkedin: "https://www.linkedin.com/in/miguelfervi",
  linkedinHandle: "linkedin.com/in/miguelfervi",
  twitter: "",
  twitterHandle: "",
  portrait: "/miguel.jpg",
  portraitAlt: {
    en: "Portrait of Miguel Fernández Villegas",
    es: "Retrato de Miguel Fernández Villegas",
  } satisfies Text,
};

export const skills: { group: Text; items: string[] }[] = [
  {
    group: { en: "Front-end", es: "Front-end" },
    items: ["JavaScript", "TypeScript", "Vue", "React", "React Native", "Next.js", "Gatsby", "Astro", "Tailwind CSS"],
  },
  {
    group: { en: "Backend", es: "Backend" },
    items: ["Node.js", "NestJS", "PHP", "PostgreSQL", "GraphQL"],
  },
  {
    group: { en: "Delivery", es: "Entrega" },
    items: ["Core Web Vitals", "Monorepos", "Testing"],
  },
  {
    group: { en: "AI", es: "IA" },
    items: ["MCP", "RAG"],
  },
];

export const spokenLanguages = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "Professional", es: "Profesional" } },
];
