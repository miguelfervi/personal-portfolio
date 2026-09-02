import { describe, expect, it } from "vitest";
import { absoluteUrl, stripBase, withBase } from "./url";

describe("url", () => {
  it("prefixes internal paths with the configured base", () => {
    expect(withBase("/projects")).toBe("/projects");
    expect(withBase("/projects", "/")).toBe("/projects");
    expect(withBase("/projects", "/personal-portfolio/")).toBe("/personal-portfolio/projects");
    expect(withBase("/", "/personal-portfolio/")).toBe("/personal-portfolio/");
  });

  it("leaves external and in-page targets alone", () => {
    expect(withBase("https://github.com/miguelfervi")).toBe("https://github.com/miguelfervi");
    expect(withBase("mailto:miguelfervi@gmail.com")).toBe("mailto:miguelfervi@gmail.com");
    expect(withBase("#content")).toBe("#content");
  });

  it("strips the base from a pathname for active-nav checks", () => {
    expect(stripBase("/projects")).toBe("/projects");
    expect(stripBase("/personal-portfolio/projects", "/personal-portfolio/")).toBe("/projects");
    expect(stripBase("/personal-portfolio/", "/personal-portfolio/")).toBe("/");
  });

  it("builds an absolute URL from site + base + path", () => {
    expect(absoluteUrl("/og.svg", "https://miguelfervi.vercel.app")).toBe("https://miguelfervi.vercel.app/og.svg");
    expect(absoluteUrl("/og.svg", "https://miguelfervi.vercel.app", "/personal-portfolio/")).toBe(
      "https://miguelfervi.vercel.app/personal-portfolio/og.svg",
    );
  });
});
