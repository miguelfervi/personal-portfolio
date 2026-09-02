import { describe, expect, it } from "vitest";
import { asText, isLocale, paragraphs, t } from "./i18n";

describe("i18n", () => {
  it("accepts only known locales", () => {
    expect(isLocale("en")).toBe(true);
    expect(isLocale("es")).toBe(true);
    expect(isLocale("fr")).toBe(false);
    expect(isLocale(null)).toBe(false);
  });

  it("picks the string for the active locale", () => {
    const text = { en: "Work", es: "Trabajo" };
    expect(t(text, "en")).toBe("Work");
    expect(t(text, "es")).toBe("Trabajo");
  });

  it("normalizes a plain string into both locales", () => {
    expect(asText("CV")).toEqual({ en: "CV", es: "CV" });
  });

  it("splits article bodies on blank lines", () => {
    expect(paragraphs("One.\n\nTwo.\n\n")).toEqual(["One.", "Two."]);
  });
});
