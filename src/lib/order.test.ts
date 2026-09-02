import { describe, expect, it } from "vitest";
import { featuredWork, personalFirst, sortByOrder } from "./order";

describe("content helpers", () => {
  it("sorts stable editorial order", () => {
    const items = [
      { order: 3, name: "c" },
      { order: 1, name: "a" },
      { order: 2, name: "b" },
    ];
    expect(sortByOrder(items).map((item) => item.name)).toEqual(["a", "b", "c"]);
  });

  it("puts one company project first, then featured personal work", () => {
    const items = [
      { featured: true, kind: "company" as const, id: "market" },
      { featured: true, kind: "company" as const, id: "clinic" },
      { featured: false, kind: "personal" as const, id: "hidden" },
      { featured: true, kind: "personal" as const, id: "finanzas" },
      { featured: true, kind: "personal" as const, id: "pace" },
    ];
    expect(featuredWork(items).map((item) => item.id)).toEqual(["market", "finanzas", "pace"]);
  });

  it("lists personal work before company work", () => {
    const items = [
      { kind: "company" as const, id: "a" },
      { kind: "personal" as const, id: "b" },
      { kind: "company" as const, id: "c" },
    ];
    expect(personalFirst(items).map((item) => item.id)).toEqual(["b", "a", "c"]);
  });
});
