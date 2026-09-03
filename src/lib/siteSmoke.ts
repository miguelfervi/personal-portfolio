import { existsSync, readFileSync } from "node:fs";
import { join } from "node:path";

export function documentLang(html: string): string | undefined {
  return html.match(/<html[^>]*\slang="([^"]+)"/)?.[1];
}

export function langToggleHref(html: string): string | undefined {
  const tag = html.match(/<a\b[^>]*data-lang-toggle[^>]*>/);
  return tag?.[0].match(/href="([^"]+)"/)?.[1];
}

export function hasHeading(html: string, text: string): boolean {
  return new RegExp(`<h1[^>]*>[^<]*${text}`, "i").test(html);
}

export function hasExternalDemo(html: string): boolean {
  return /href="https?:\/\//.test(html) && /Demo/.test(html);
}

export function redirectTarget(html: string): string | undefined {
  return (
    html.match(/http-equiv="refresh"[^>]*url=([^"'\s>]+)/i)?.[1]
    ?? html.match(/url=([^"'\s>]+)[^>]*http-equiv="refresh"/i)?.[1]
    ?? html.match(/location\.href\s*=\s*["']([^"']+)/)?.[1]
  );
}

export function checkDist(root: string): string[] {
  const errors: string[] = [];
  const read = (file: string) => readFileSync(join(root, file), "utf8");

  if (!existsSync(join(root, "index.html"))) {
    return [`missing ${join(root, "index.html")}`];
  }

  const en = read("index.html");
  if (documentLang(en) !== "en") errors.push("home lang is not en");
  if (!hasHeading(en, "Miguel")) errors.push("home is missing the name");
  if (langToggleHref(en) !== "/es") errors.push(`home lang toggle is ${langToggleHref(en) ?? "missing"}`);

  const es = read("es/index.html");
  if (documentLang(es) !== "es") errors.push("spanish home lang is not es");
  if (!hasHeading(es, "Miguel")) errors.push("spanish home is missing the name");
  if (langToggleHref(es) !== "/") errors.push(`spanish lang toggle is ${langToggleHref(es) ?? "missing"}`);

  const projects = read("projects/index.html");
  if (!hasExternalDemo(projects)) errors.push("projects listing has no Demo link");

  const about = redirectTarget(read("about/index.html"));
  if (about !== "/cv") errors.push(`about redirects to ${about ?? "nothing"}`);

  const clinic = redirectTarget(read("projects/clinic-saas/index.html"));
  if (clinic !== "/projects/docplanner") {
    errors.push(`clinic-saas redirects to ${clinic ?? "nothing"}`);
  }

  return errors;
}
