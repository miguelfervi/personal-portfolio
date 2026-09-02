import { describe, expect, it } from "vitest";
import { isActivePath } from "./nav";

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
