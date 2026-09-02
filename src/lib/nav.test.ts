import { describe, expect, it } from "vitest";
import { isActivePath, navItems } from "./nav";

describe("isActivePath", () => {
  it("treats home as exact match only", () => {
    expect(isActivePath("/", "/")).toBe(true);
    expect(isActivePath("/projects", "/")).toBe(false);
  });

  it("treats nested project routes as active", () => {
    expect(isActivePath("/projects/clinic-saas", "/projects")).toBe(true);
    expect(isActivePath("/cv", "/projects")).toBe(false);
  });
});

describe("navItems", () => {
  it("keeps primary routes without a contact page", () => {
    expect(navItems.map((item) => item.href)).toEqual(["/", "/projects", "/cv"]);
  });
});
