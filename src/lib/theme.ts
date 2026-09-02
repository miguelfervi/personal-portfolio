export function isDarkTheme(stored: string | null, prefersDark: boolean): boolean {
  if (stored === "dark") return true;
  if (stored === "light") return false;
  return prefersDark;
}

export function applyDocumentTheme(
  classList: { toggle: (token: string, force: boolean) => unknown },
  stored: string | null,
  prefersDark: boolean,
): boolean {
  const dark = isDarkTheme(stored, prefersDark);
  classList.toggle("dark", dark);
  return dark;
}
