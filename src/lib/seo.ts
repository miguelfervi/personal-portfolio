import { asText, type Locale, type Text } from "./i18n";
import { site } from "./site";
import { absoluteUrl, localeNeutralPath, pageHref } from "./url";

export function pageTitle(
  title: string | undefined,
  options: { name?: string; role?: string; locale?: Locale } = {},
): string {
  const name = options.name ?? site.name;
  const role = options.role ?? site.role[options.locale ?? "en"];
  return title ? `${title} — ${name}` : `${name} — ${role}`;
}

export function descriptionOf(value: string | Text | undefined, fallback: Text): Text {
  return asText(value ?? fallback);
}

export function personJsonLd(url: string | undefined, locale: Locale = "en") {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role[locale],
    email: site.email,
    url: url || site.url,
    sameAs: [site.github, site.linkedin].filter(Boolean),
  };
}

export function pageSeo(input: {
  title?: string;
  description?: string | Text;
  locale: Locale;
  pathname: string;
  origin: string | URL;
  base: string;
  siteUrl?: string | URL;
}) {
  const path = localeNeutralPath(input.pathname, input.base);
  const desc = descriptionOf(input.description, site.tagline);

  return {
    documentTitle: pageTitle(input.title, { locale: input.locale }),
    description: desc[input.locale],
    canonical: new URL(input.pathname, input.origin).href,
    ogImage: absoluteUrl("/og.svg", input.origin, input.base),
    jsonLd: personJsonLd(input.siteUrl ? new URL(input.base, input.siteUrl).href : undefined, input.locale),
    enUrl: new URL(pageHref(path, "en", input.base), input.origin).href,
    esUrl: new URL(pageHref(path, "es", input.base), input.origin).href,
    ogLocale: input.locale === "es" ? "es_ES" : "en_US",
    ogLocaleAlternate: input.locale === "es" ? "en_US" : "es_ES",
  };
}
