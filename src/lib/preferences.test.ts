import { describe, expect, it } from "vitest";
import { isDarkTheme, resolveLocale } from "./preferences";

describe("preferences", () => {
  it("keeps a stored locale and otherwise uses the fallback", () => {
    expect(resolveLocale("es", "en")).toBe("es");
    expect(resolveLocale("en", "es")).toBe("en");
    expect(resolveLocale(null, "es")).toBe("es");
    expect(resolveLocale("fr", "en")).toBe("en");
  });

  it("honors an explicit theme before the system preference", () => {
    expect(isDarkTheme("dark", false)).toBe(true);
    expect(isDarkTheme("light", true)).toBe(false);
    expect(isDarkTheme(null, true)).toBe(true);
    expect(isDarkTheme("auto", false)).toBe(false);
  });
});
