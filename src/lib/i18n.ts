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
  contact: { en: "Contact", es: "Contacto" },
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
  contactKicker: { en: "Contact", es: "Contacto" },
  contactTitle: { en: "Let’s talk", es: "Hablemos" },
  contactIntro: {
    en: "A role, a product, or a technical question. I reply within 48 hours.",
    es: "Un rol, un producto o una duda técnica. Respondo en menos de 48 horas.",
  },
  name: { en: "Name", es: "Nombre" },
  email: { en: "Email", es: "Email" },
  message: { en: "Message", es: "Mensaje" },
  namePlaceholder: { en: "Your name", es: "Tu nombre" },
  emailPlaceholder: { en: "you@email.com", es: "tu@email.com" },
  messagePlaceholder: { en: "Tell me what you have in mind…", es: "Cuéntame en qué estás pensando…" },
  send: { en: "Send message", es: "Enviar mensaje" },
  sending: { en: "Sending…", es: "Enviando…" },
  formHint: {
    en: "Demo form: it does not send real emails yet.",
    es: "Formulario de demostración: aún no envía correos reales.",
  },
  formSuccess: {
    en: "Message sent. Thanks for writing — I will reply within 48 hours.",
    es: "Mensaje enviado. Gracias por escribir, responderé en menos de 48 horas.",
  },
  elsewhere: { en: "Elsewhere", es: "En otros sitios" },
  footerBlurb: {
    en: "Senior Product Engineer in Granada.",
    es: "Senior Product Engineer en Granada.",
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
