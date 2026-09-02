export function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export function featuredWork<T extends { featured: boolean; kind: "company" | "personal" }>(
  items: T[],
  limit = 3,
): T[] {
  const company = items.filter((item) => item.featured && item.kind === "company").slice(0, 1);
  const personal = items.filter((item) => item.featured && item.kind === "personal");
  return [...company, ...personal].slice(0, limit);
}

export function personalFirst<T extends { kind: "company" | "personal" }>(items: T[]): T[] {
  return [...items.filter((item) => item.kind === "personal"), ...items.filter((item) => item.kind === "company")];
}
