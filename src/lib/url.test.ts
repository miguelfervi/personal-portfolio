import { describe, expect, it } from "vitest";
import {
  absoluteUrl,
  isLocaleSwitch,
  localeNeutralPath,
  localePath,
  pageHref,
  stripBase,
  stripLocale,
  withBase,
} from "./url";

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
    expect(absoluteUrl("/og.svg", "https://miguelfervi.dev")).toBe("https://miguelfervi.dev/og.svg");
    expect(absoluteUrl("/og.svg", "https://miguelfervi.dev", "/personal-portfolio/")).toBe(
      "https://miguelfervi.dev/personal-portfolio/og.svg",
    );
  });

  it("prefixes Spanish routes and strips them for nav", () => {
    expect(localePath("/", "es")).toBe("/es");
    expect(localePath("/cv", "es")).toBe("/es/cv");
    expect(localePath("/projects", "en")).toBe("/projects");
    expect(stripLocale("/es/cv")).toBe("/cv");
    expect(stripLocale("/es/")).toBe("/");
    expect(pageHref("/projects", "es")).toBe("/es/projects");
    expect(isLocaleSwitch("/", "/es")).toBe(true);
    expect(isLocaleSwitch("/cv", "/es/cv")).toBe(true);
    expect(isLocaleSwitch("/projects", "/cv")).toBe(false);
    expect(localeNeutralPath("/es/cv")).toBe("/cv");
    expect(localeNeutralPath("/personal-portfolio/es/projects", "/personal-portfolio/")).toBe("/projects");
  });
});
