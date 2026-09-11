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
    en: "Ten years shipping SaaS and marketplace products (Vue, React, React Native, Node, PHP). Tech driver on Docplanner Monetization — patient marketplace and clinic SaaS: referral, onboarding, SSO, PLG — plus microfrontends and AI-assisted delivery.",
    es: "Diez años lanzando productos SaaS y marketplaces (Vue, React, React Native, Node, PHP). Tech driver en Docplanner Monetization — marketplace de pacientes y SaaS de clínicas: referidos, onboarding, SSO, PLG — más microfrontends y entrega asistida por IA.",
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
    items: ["JavaScript", "TypeScript", "Vue 2/3", "React", "Microfrontends", "React Native", "Next.js", "Gatsby", "Astro"],
  },
  {
    group: { en: "Backend", es: "Backend" },
    items: ["Node.js", "NestJS", "PHP", "GraphQL", "REST", "Java / Spring"],
  },
  {
    group: { en: "Growth & product", es: "Growth y producto" },
    items: [
      "PLG / self-serve",
      "Conversion funnels",
      "A/B testing",
      "Onboarding & activation",
      "Referral loops",
      "OAuth / SSO",
      "Analytics",
    ],
  },
  {
    group: { en: "Delivery", es: "Entrega" },
    items: ["Monorepos", "Testing", "CI/CD", "Code review", "Scrum / Kanban"],
  },
  {
    group: { en: "AI", es: "IA" },
    items: ["MCP", "RAG", "Multi-agent workflows", "Claude", "Codex", "Cursor"],
  },
];

export const spokenLanguages = [
  { name: { en: "Spanish", es: "Español" }, level: { en: "Native", es: "Nativo" } },
  { name: { en: "English", es: "Inglés" }, level: { en: "Professional", es: "Profesional" } },
];
