import { describe, expect, it } from "vitest";
import {
  documentLang,
  hasExternalDemo,
  hasHeading,
  langToggleHref,
  redirectTarget,
} from "./siteSmoke";

describe("siteSmoke parsers", () => {
  it("reads html lang and the language toggle href", () => {
    const html = `<html lang="en"><a href="/es" data-lang-toggle>ES</a><h1>Miguel Fernández</h1></html>`;
    expect(documentLang(html)).toBe("en");
    expect(langToggleHref(html)).toBe("/es");
    expect(hasHeading(html, "Miguel")).toBe(true);
  });

  it("finds an external Demo link", () => {
    expect(hasExternalDemo(`<a href="https://example.com"><span>Demo</span></a>`)).toBe(true);
    expect(hasExternalDemo(`<a href="/projects/x">Read</a>`)).toBe(false);
  });

  it("reads Astro redirect targets", () => {
    const html = `<meta http-equiv="refresh" content="0;url=/cv"><script>window.location.href = "/cv"</script>`;
    expect(redirectTarget(html)).toBe("/cv");
  });
});
