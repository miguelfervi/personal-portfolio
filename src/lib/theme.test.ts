import { describe, expect, it } from "vitest";
import { applyDocumentTheme, isDarkTheme } from "./theme";

describe("theme", () => {
  it("honors an explicit theme before the system preference", () => {
    expect(isDarkTheme("dark", false)).toBe(true);
    expect(isDarkTheme("light", true)).toBe(false);
    expect(isDarkTheme(null, true)).toBe(true);
    expect(isDarkTheme("auto", false)).toBe(false);
  });

  it("restores the stored theme onto a document class list", () => {
    const classes = new Set<string>();
    const classList = {
      toggle(token: string, force: boolean) {
        if (force) {
          classes.add(token);
        } else {
          classes.delete(token);
        }
        return force;
      },
    };

    expect(applyDocumentTheme(classList, "dark", false)).toBe(true);
    expect(classes.has("dark")).toBe(true);
    expect(applyDocumentTheme(classList, "light", true)).toBe(false);
    expect(classes.has("dark")).toBe(false);
  });
});
