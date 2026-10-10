export type ContactPayload = {
  name?: unknown;
  email?: unknown;
  company?: unknown;
  service?: unknown;
  timeline?: unknown;
  message?: unknown;
  website?: unknown;
};

export type ContactErrors = Partial<Record<"name" | "email" | "message", string>>;

export function validateContactPayload(input: ContactPayload): { valid: boolean; errors: ContactErrors; data?: { name: string; email: string; company: string; service: string; timeline: string; message: string }; spam: boolean } {
  // A populated honeypot is treated as spam and deliberately receives no useful feedback.
  if (typeof input.website === "string" && input.website.trim().length > 0) {
    return { valid: true, errors: {}, spam: true };
  }

  const name = typeof input.name === "string" ? input.name.trim() : "";
  const email = typeof input.email === "string" ? input.email.trim().toLowerCase() : "";
  const company = typeof input.company === "string" ? input.company.trim() : "";
  const service = typeof input.service === "string" ? input.service.trim() : "";
  const timeline = typeof input.timeline === "string" ? input.timeline.trim() : "";
  const message = typeof input.message === "string" ? input.message.trim() : "";
  const errors: ContactErrors = {};

  if (name.length < 2 || name.length > 120) errors.name = "Enter a name between 2 and 120 characters.";
  if (email.length > 254 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errors.email = "Enter a valid work email address.";
  if (message.length < 10 || message.length > 6000) errors.message = "Tell us a little more (10–6,000 characters).";

  return Object.keys(errors).length
    ? { valid: false, errors, spam: false }
    : { valid: true, errors: {}, spam: false, data: { name, email, company: company.slice(0, 200), service: service.slice(0, 160), timeline: timeline.slice(0, 120), message } };
}
