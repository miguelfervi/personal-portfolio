import { site } from "./site";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function contactEndpoint(email = site.email): string {
  return `https://formsubmit.co/ajax/${encodeURIComponent(email)}`;
}

export function contactFallbackAction(email = site.email): string {
  return `https://formsubmit.co/${encodeURIComponent(email)}`;
}

export function isValidContact(input: {
  name: string;
  email: string;
  message: string;
  honey?: string;
}): boolean {
  if (input.honey?.trim()) return false;
  return input.name.trim().length > 1 && emailPattern.test(input.email.trim()) && input.message.trim().length > 10;
}

export function contactPayload(input: { name: string; email: string; message: string }) {
  return {
    name: input.name.trim(),
    email: input.email.trim(),
    message: input.message.trim(),
    _subject: `Portfolio — ${input.name.trim()}`,
    _template: "table",
    _captcha: "false",
  };
}
