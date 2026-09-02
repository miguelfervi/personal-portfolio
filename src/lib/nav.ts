import { ui, type Text } from "./i18n";

export type NavItem = {
  href: string;
  label: Text;
};

export const navItems: NavItem[] = [
  { href: "/", label: ui.home },
  { href: "/projects", label: ui.projects },
  { href: "/cv", label: ui.cv },
  { href: "/contact", label: ui.contact },
];

export function isActivePath(pathname: string, href: string): boolean {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}
