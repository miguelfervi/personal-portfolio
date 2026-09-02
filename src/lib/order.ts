export function sortByOrder<T extends { order: number }>(items: T[]): T[] {
  return [...items].sort((a, b) => a.order - b.order);
}

export function featuredOf<T extends { featured: boolean }>(items: T[], limit = 3): T[] {
  return items.filter((item) => item.featured).slice(0, limit);
}
