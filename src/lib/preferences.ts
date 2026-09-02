import { isLocale, ui, type Locale } from "./i18n";

export function resolveLocale(stored: string | null, fallback: Locale): Locale {
  return isLocale(stored) ? stored : fallback;
}

export function isDarkTheme(stored: string | null, prefersDark: boolean): boolean {
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return prefersDark;
}

function currentLang(): Locale {
  return document.documentElement.lang === "es" ? "es" : "en";
}

function applyPlaceholders(lang: Locale) {
  document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>("[data-ph-en]").forEach((el) => {
    const value = lang === "es" ? el.dataset.phEs : el.dataset.phEn;
    if (value) el.placeholder = value;
  });
}

function applyAria(lang: Locale) {
  document.querySelectorAll<HTMLElement>("[data-aria-en]").forEach((el) => {
    if (el.hasAttribute("data-theme-toggle")) return;
    const value = lang === "es" ? el.dataset.ariaEs : el.dataset.ariaEn;
    if (value) el.setAttribute("aria-label", value);
  });
}

function applyMeta(lang: Locale) {
  document.querySelectorAll<HTMLMetaElement>("[data-meta-en]").forEach((el) => {
    const value = lang === "es" ? el.dataset.metaEs : el.dataset.metaEn;
    if (value) el.setAttribute("content", value);
  });
}

function syncThemeButtons() {
  const dark = document.documentElement.classList.contains("dark");
  const lang = currentLang();
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-label", dark ? ui.lightMode[lang] : ui.darkMode[lang]);
  });
}

function setLang(lang: Locale) {
  document.documentElement.lang = lang;
  localStorage.setItem("lang", lang);
  applyPlaceholders(lang);
  applyAria(lang);
  applyMeta(lang);
  syncThemeButtons();
}

function initMenu() {
  const toggle = document.getElementById("menu-toggle");
  const nav = document.getElementById("mobile-nav");
  const openIcon = toggle?.querySelector('[data-menu-icon="open"]');
  const closeIcon = toggle?.querySelector('[data-menu-icon="close"]');
  if (!toggle || !nav) return;

  toggle.addEventListener("click", () => {
    const open = nav.hasAttribute("hidden");
    const lang = currentLang();
    nav.toggleAttribute("hidden", !open);
    toggle.setAttribute("aria-expanded", String(open));
    toggle.setAttribute("aria-label", open ? ui.closeMenu[lang] : ui.openMenu[lang]);
    toggle.dataset.ariaEn = open ? ui.closeMenu.en : ui.openMenu.en;
    toggle.dataset.ariaEs = open ? ui.closeMenu.es : ui.openMenu.es;
    openIcon?.classList.toggle("hidden", open);
    closeIcon?.classList.toggle("hidden", !open);
  });
}

export function initPreferences() {
  setLang(resolveLocale(localStorage.getItem("lang"), currentLang()));

  document.querySelectorAll<HTMLButtonElement>("[data-lang-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      setLang(currentLang() === "es" ? "en" : "es");
    });
  });

  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
      const next = !document.documentElement.classList.contains("dark");
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("theme", next ? "dark" : "light");
      syncThemeButtons();
    });
  });

  initMenu();
}
