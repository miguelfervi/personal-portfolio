export function withBase(path: string, base = "/"): string {
  if (/^(https?:)?\/\//.test(path) || /^(mailto:|#)/.test(path)) {
    return path;
  }

  const prefix = base.endsWith("/") ? base : `${base}/`;
  const suffix = path.startsWith("/") ? path.slice(1) : path;
  return suffix ? `${prefix}${suffix}` : prefix;
}

export function stripBase(pathname: string, base = "/"): string {
  const prefix = base.endsWith("/") ? base.slice(0, -1) : base;
  if (!prefix) return pathname || "/";
  if (pathname === prefix || pathname === `${prefix}/`) return "/";
  if (pathname.startsWith(`${prefix}/`)) return pathname.slice(prefix.length) || "/";
  return pathname || "/";
}

export function absoluteUrl(path: string, site: string | URL, base = "/"): string {
  return new URL(withBase(path, base), site).href;
}
