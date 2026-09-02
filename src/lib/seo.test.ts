import { describe, expect, it } from "vitest";
import { descriptionOf, pageTitle } from "./seo";

describe("seo", () => {
  it("builds a document title from the page name", () => {
    expect(pageTitle("CV", "Miguel", "Engineer")).toBe("CV — Miguel");
  });

  it("falls back to name and role on the home page", () => {
    expect(pageTitle(undefined, "Miguel", "Engineer")).toBe("Miguel — Engineer");
  });

  it("keeps bilingual descriptions intact", () => {
    const text = { en: "Hello", es: "Hola" };
    expect(descriptionOf(text, { en: "x", es: "y" })).toEqual(text);
  });
});
