import { ui, type Locale } from "./i18n";
import { applyDocumentTheme } from "./theme";
import { isLocaleSwitch } from "./url";

function restoreTheme(root: HTMLElement = document.documentElement) {
  applyDocumentTheme(
    root.classList,
    localStorage.getItem("theme"),
    window.matchMedia("(prefers-color-scheme: dark)").matches,
  );
}

function isSwapEvent(event: Event): event is Event & { newDocument: Document } {
  return "newDocument" in event && event.newDocument instanceof Document;
}

function isLocaleNavEvent(event: Event): event is Event & { from: URL; to: URL } {
  return (
    "from" in event &&
    "to" in event &&
    event.from instanceof URL &&
    event.to instanceof URL
  );
}

function currentLang(): Locale {
  return document.documentElement.lang === "es" ? "es" : "en";
}

function syncThemeButtons() {
  const dark = document.documentElement.classList.contains("dark");
  const lang = currentLang();
  document.querySelectorAll<HTMLButtonElement>("[data-theme-toggle]").forEach((button) => {
    button.setAttribute("aria-label", dark ? ui.lightMode[lang] : ui.darkMode[lang]);
  });
}

function onDocumentClick(event: Event) {
  const target = event.target;
  if (!(target instanceof Element)) {
    return;
  }

  if (target.closest("[data-theme-toggle]")) {
    const next = !document.documentElement.classList.contains("dark");
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    syncThemeButtons();
    return;
  }

  const toggle = target.closest("#menu-toggle");
  if (!(toggle instanceof HTMLElement)) {
    return;
  }

  const nav = document.getElementById("mobile-nav");
  const openIcon = toggle.querySelector('[data-menu-icon="open"]');
  const closeIcon = toggle.querySelector('[data-menu-icon="close"]');
  if (!nav) {
    return;
  }

  const open = nav.hasAttribute("hidden");
  const lang = currentLang();
  nav.toggleAttribute("hidden", !open);
  toggle.setAttribute("aria-expanded", String(open));
  toggle.setAttribute("aria-label", open ? ui.closeMenu[lang] : ui.openMenu[lang]);
  openIcon?.classList.toggle("hidden", open);
  closeIcon?.classList.toggle("hidden", !open);
}

let bound = false;

export function initPreferences() {
  restoreTheme();
  syncThemeButtons();

  if (bound) {
    return;
  }

  bound = true;
  document.addEventListener("click", onDocumentClick);

  document.addEventListener("astro:before-swap", (event) => {
    if (isSwapEvent(event)) {
      restoreTheme(event.newDocument.documentElement);
    }
  });

  document.addEventListener("astro:after-swap", () => {
    restoreTheme();
    syncThemeButtons();
  });

  document.addEventListener("astro:page-load", () => {
    syncThemeButtons();
    const y = sessionStorage.getItem("locale-scroll");
    if (y) {
      window.scrollTo(0, Number(y));
      sessionStorage.removeItem("locale-scroll");
    }
  });

  document.addEventListener("astro:before-preparation", (event) => {
    if (isLocaleNavEvent(event) && isLocaleSwitch(event.from.pathname, event.to.pathname)) {
      sessionStorage.setItem("locale-scroll", String(window.scrollY));
    }
  });
}
