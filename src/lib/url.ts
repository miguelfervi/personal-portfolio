import type { Locale } from "./i18n";

export function withBase(path: string, base = "/"): string {
  if (/^(https?:)?\/\//.test(path) || /^(mailto:|#)/.test(path)) {
    return path;
  }

  const prefix = base.endsWith("/") ? base : `${base}/`;
  const suffix = path.startsWith("/") ? path.slice(1) : path;
  return suffix ? `${prefix}${suffix}` : prefix;
}

export function stripBase(pathname: string, base = "/"): string {
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!prefix) return pathname || "/";
  if (pathname === prefix || pathname === `${prefix}/`) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || "/";
  return pathname || "/";
}

export function stripLocale(pathname: string): string {
  if (pathname === "/es" || pathname === "/es/") {
    return "/";
  }

  if (pathname.startsWith("/es/")) {
    return pathname.slice(3) || "/";
  }

  return pathname || "/";
}

export function localePath(path: string, locale: Locale): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  if (locale === "en") {
    return normalized;
  }

  return normalized === "/" ? "/es" : `/es${normalized}`;
}

export function localeNeutralPath(pathname: string, base = "/"): string {
  return stripLocale(stripBase(pathname, base));
}

export function pageHref(path: string, locale: Locale, base = "/"): string {
  return withBase(localePath(path, locale), base);
}

export function isLocaleSwitch(fromPath: string, toPath: string): boolean {
  return stripLocale(fromPath) === stripLocale(toPath) && fromPath !== toPath;
}

export function absoluteUrl(path: string, site: string | URL, base = "/"): string {
  return new URL(withBase(path, base), site).href;
}
