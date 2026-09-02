import { describe, expect, it } from "vitest";
import { toneFor, tones } from "./tone";

describe("toneFor", () => {
  it("picks a known tone from a slug", () => {
    expect(tones).toContain(toneFor("docplanner-marketplace"));
  });

  it("is stable for the same slug", () => {
    expect(toneFor("clinic-saas")).toBe(toneFor("clinic-saas"));
  });
});
