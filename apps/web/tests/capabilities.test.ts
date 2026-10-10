import { describe, expect, it } from "vitest";
import { capabilities } from "../lib/capabilities";

describe("capabilities content", () => {
  it("covers the five advertised service areas", () => {
    expect(capabilities).toHaveLength(5);
    expect(capabilities.map((item) => item.id)).toEqual(["talent", "software", "delivery", "contracts", "research"]);
  });

  it("has a unique anchor and at least one outcome for every capability", () => {
    const ids = capabilities.map((item) => item.id);
    expect(new Set(ids).size).toBe(ids.length);
    for (const capability of capabilities) {
      expect(capability.title.length).toBeGreaterThan(4);
      expect(capability.summary.length).toBeGreaterThan(30);
      expect(capability.outcomes.length).toBeGreaterThan(0);
    }
  });
});
