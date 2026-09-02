import { describe, expect, it } from "vitest";
import { featuredOf, sortByOrder } from "./order";

describe("content helpers", () => {
  it("sorts stable editorial order", () => {
    const items = [
      { order: 3, name: "c" },
      { order: 1, name: "a" },
      { order: 2, name: "b" },
    ];
    expect(sortByOrder(items).map((item) => item.name)).toEqual(["a", "b", "c"]);
  });

  it("keeps featured work to a short home list", () => {
    const items = [
      { featured: true, id: "1" },
      { featured: false, id: "2" },
      { featured: true, id: "3" },
      { featured: true, id: "4" },
      { featured: true, id: "5" },
    ];
    expect(featuredOf(items, 3).map((item) => item.id)).toEqual(["1", "3", "4"]);
  });
});
