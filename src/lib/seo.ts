import { asText, type Text } from "./i18n";
import { site } from "./site";

export function pageTitle(title: string | undefined, name = site.name, role = site.role.en): string {
  return title ? `${title} — ${name}` : `${name} — ${role}`;
}

export function descriptionOf(value: string | Text | undefined, fallback: Text): Text {
  return asText(value ?? fallback);
}

export function personJsonLd(url: string | undefined) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: site.name,
    jobTitle: site.role.en,
    email: site.email,
    url: url || undefined,
    sameAs: [site.github, site.linkedin].filter(Boolean),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Granada",
      addressCountry: "ES",
    },
  };
}
