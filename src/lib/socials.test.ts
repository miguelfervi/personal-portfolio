import { describe, expect, it } from "vitest";
import { externalLinkAttrs, isExternalHref, socialLinks } from "./socials";

describe("socials", () => {
  it("always includes GitHub and email", () => {
    const labels = socialLinks().map((item) => item.label);
    expect(labels).toContain("GitHub");
    expect(labels).toContain("Email");
  });

  it("can return only selected networks", () => {
    expect(socialLinks(["github", "linkedin"]).map((item) => item.icon)).toEqual([
      "github",
      "linkedin",
    ]);
  });

  it("marks http(s) links as external", () => {
    expect(isExternalHref("https://github.com/miguelfervi")).toBe(true);
    expect(isExternalHref("mailto:miguelfervi@gmail.com")).toBe(false);
  });

  it("opens http(s) links in a new tab", () => {
    expect(externalLinkAttrs("https://github.com/miguelfervi")).toEqual({
      target: "_blank",
      rel: "noreferrer",
    });
    expect(externalLinkAttrs("mailto:miguelfervi@gmail.com")).toEqual({});
  });
});
