export type Locale = "en" | "es";

export type Text = { en: string; es: string };

export const locales = ["en", "es"] as const;

export function isLocale(value: unknown): value is Locale {
  return value === "en" || value === "es";
}

export function t(text: Text, locale: Locale): string {
  return text[locale];
}

export function asText(value: string | Text): Text {
  return typeof value === "string" ? { en: value, es: value } : value;
}

export function paragraphs(value: string): string[] {
  return value
    .split(/\n\s*\n/)
    .map((part) => part.trim())
    .filter(Boolean);
}

export const ui = {
  skip: { en: "Skip to content", es: "Saltar al contenido" },
  navAria: { en: "Primary", es: "Principal" },
  mobileAria: { en: "Mobile", es: "Móvil" },
  openMenu: { en: "Open menu", es: "Abrir menú" },
  closeMenu: { en: "Close menu", es: "Cerrar menú" },
  switchToSpanish: { en: "Switch to Spanish", es: "Cambiar a español" },
  switchToEnglish: { en: "Switch to English", es: "Cambiar a inglés" },
  darkMode: { en: "Switch to dark mode", es: "Activar modo oscuro" },
  lightMode: { en: "Switch to light mode", es: "Activar modo claro" },
  home: { en: "Home", es: "Inicio" },
  projects: { en: "Projects", es: "Proyectos" },
  cv: { en: "CV", es: "CV" },
  navigation: { en: "Navigation", es: "Navegación" },
  social: { en: "Social", es: "Redes" },
  viewProjects: { en: "View projects", es: "Ver proyectos" },
  getInTouch: { en: "Get in touch", es: "Contactar" },
  stack: { en: "Tech stack", es: "Stack técnico" },
  featured: { en: "Selected work", es: "Trabajo seleccionado" },
  viewAll: { en: "View all", es: "Ver todos" },
  read: { en: "Read", es: "Leer" },
  projectsKicker: { en: "Work", es: "Trabajo" },
  projectsTitle: { en: "Things I have shipped", es: "Cosas que he lanzado" },
  projectsIntro: {
    en: "Company products first, then personal work. Each piece includes the stack and, when public, a demo or repo.",
    es: "Primero producto de empresa, luego trabajo personal. Cada pieza incluye el stack y, si es público, demo o repo.",
  },
  companyProject: { en: "Company", es: "Empresa" },
  personalProject: { en: "Personal", es: "Personal" },
  demo: { en: "Demo", es: "Demo" },
  code: { en: "Code", es: "Código" },
  backToProjects: { en: "← Work", es: "← Trabajo" },
  resume: { en: "Resume", es: "Currículum" },
  experience: { en: "Experience", es: "Experiencia" },
  education: { en: "Education", es: "Educación" },
  technicalSkills: { en: "Technical skills", es: "Habilidades técnicas" },
  spokenLanguages: { en: "Languages", es: "Idiomas" },
  footerBlurb: {
    en: "Senior Product Engineer.",
    es: "Senior Product Engineer.",
  },
  footerCredit: {
    en: "Set in type, not in a template.",
    es: "Compuesto con tipo, no con una plantilla.",
  },
  notFoundKicker: { en: "404", es: "404" },
  notFoundTitle: { en: "Page not found", es: "Página no encontrada" },
  notFoundBody: {
    en: "That route does not exist or has been moved.",
    es: "Esa ruta no existe o se ha movido.",
  },
  goHome: { en: "Back home", es: "Volver al inicio" },
} as const;
