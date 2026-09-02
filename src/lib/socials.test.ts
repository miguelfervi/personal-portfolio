import { describe, expect, it } from "vitest";
import { isExternalHref, socialLinks } from "./socials";

describe("socials", () => {
  it("always includes GitHub and email", () => {
    const labels = socialLinks().map((item) => item.label);
    expect(labels).toContain("GitHub");
    expect(labels).toContain("Email");
  });

  it("marks http(s) links as external", () => {
    expect(isExternalHref("https://github.com/miguelfervi")).toBe(true);
    expect(isExternalHref("mailto:miguelfervi@gmail.com")).toBe(false);
  });
});
