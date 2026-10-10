import { describe, expect, it } from "vitest";
import { validateContactPayload } from "../lib/contact-validation";

const validPayload = {
  name: "Ankur Mishra",
  email: "ankur@example.com",
  company: "Example Industries",
  service: "Software development",
  timeline: "Within 30 days",
  message: "We need help scoping a new internal platform.",
  website: "",
};

describe("validateContactPayload", () => {
  it("accepts a valid enquiry and normalises the email", () => {
    const result = validateContactPayload({ ...validPayload, email: "ANKUR@Example.com " });
    expect(result.valid).toBe(true);
    expect(result.spam).toBe(false);
    expect(result.data?.email).toBe("ankur@example.com");
  });

  it("rejects a missing or too-short name", () => {
    const result = validateContactPayload({ ...validPayload, name: "A" });
    expect(result.valid).toBe(false);
    expect(result.errors.name).toBeDefined();
  });

  it("rejects invalid email addresses", () => {
    const result = validateContactPayload({ ...validPayload, email: "not-an-email" });
    expect(result.valid).toBe(false);
    expect(result.errors.email).toBeDefined();
  });

  it("requires enough message detail", () => {
    const result = validateContactPayload({ ...validPayload, message: "Help" });
    expect(result.valid).toBe(false);
    expect(result.errors.message).toBeDefined();
  });

  it("silently recognises a populated honeypot", () => {
    const result = validateContactPayload({ ...validPayload, website: "spam link" });
    expect(result.valid).toBe(true);
    expect(result.spam).toBe(true);
    expect(result.data).toBeUndefined();
  });

  it("caps optional field lengths without losing the core request", () => {
    const result = validateContactPayload({ ...validPayload, company: "c".repeat(300) });
    expect(result.valid).toBe(true);
    expect(result.data?.company).toHaveLength(200);
  });
});
