import { describe, expect, it } from "vitest";
import { descriptionOf, pageSeo, pageTitle, personJsonLd } from "./seo";

describe("seo", () => {
  it("builds a document title from the page name", () => {
    expect(pageTitle("CV", { name: "Miguel", role: "Engineer" })).toBe("CV — Miguel");
  });

  it("falls back to the localized role on the home page", () => {
    expect(pageTitle(undefined, { name: "Miguel", locale: "es" })).toBe(
      "Miguel — Senior Frontend Engineer y Product Engineer",
    );
  });

  it("keeps bilingual descriptions intact", () => {
    const text = { en: "Hello", es: "Hola" };
    expect(descriptionOf(text, { en: "x", es: "y" })).toEqual(text);
  });

  it("omits a public address from person structured data", () => {
    expect(personJsonLd("https://miguelfervi.dev", "es")).not.toHaveProperty("address");
    expect(personJsonLd("https://miguelfervi.dev", "es").jobTitle).toBe(
      "Senior Frontend Engineer y Product Engineer",
    );
  });

  it("builds locale-aware canonical and hreflang URLs", () => {
    const seo = pageSeo({
      title: "CV",
      locale: "es",
      pathname: "/es/cv",
      origin: "https://miguelfervi.dev",
      base: "/",
      siteUrl: "https://miguelfervi.dev",
    });

    expect(seo.documentTitle).toContain("CV");
    expect(seo.canonical).toBe("https://miguelfervi.dev/es/cv");
    expect(seo.enUrl).toBe("https://miguelfervi.dev/cv");
    expect(seo.esUrl).toBe("https://miguelfervi.dev/es/cv");
    expect(seo.ogLocale).toBe("es_ES");
    expect(seo.jsonLd.jobTitle).toBe("Senior Frontend Engineer y Product Engineer");
  });
});
