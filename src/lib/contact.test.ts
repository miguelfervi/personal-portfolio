import { describe, expect, it } from "vitest";
import { contactEndpoint, contactFallbackAction, contactPayload, isValidContact } from "./contact";

describe("contact", () => {
  it("posts to FormSubmit for the public inbox", () => {
    expect(contactEndpoint("miguelfervi@gmail.com")).toBe(
      "https://formsubmit.co/ajax/miguelfervi%40gmail.com",
    );
    expect(contactFallbackAction("miguelfervi@gmail.com")).toBe(
      "https://formsubmit.co/miguelfervi%40gmail.com",
    );
  });

  it("rejects empty, invalid, or honeypot submissions", () => {
    expect(isValidContact({ name: "Ada", email: "ada@example.com", message: "Let's talk about a role." })).toBe(true);
    expect(isValidContact({ name: "A", email: "ada@example.com", message: "Let's talk about a role." })).toBe(false);
    expect(isValidContact({ name: "Ada", email: "nope", message: "Let's talk about a role." })).toBe(false);
    expect(isValidContact({ name: "Ada", email: "ada@example.com", message: "Hi" })).toBe(false);
    expect(
      isValidContact({ name: "Ada", email: "ada@example.com", message: "Let's talk about a role.", honey: "bot" }),
    ).toBe(false);
  });

  it("builds a FormSubmit payload with a subject line", () => {
    expect(contactPayload({ name: " Ada ", email: "ada@example.com", message: " Hello there, this is long enough. " })).toEqual({
      name: "Ada",
      email: "ada@example.com",
      message: "Hello there, this is long enough.",
      _subject: "Portfolio — Ada",
      _template: "table",
      _captcha: "false",
    });
  });
});
