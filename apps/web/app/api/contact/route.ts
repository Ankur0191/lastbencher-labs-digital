import { validateContactPayload } from "../../../lib/contact-validation";

export const runtime = "nodejs";

export async function POST(request: Request) {
  let body: unknown;
  try {
    const rawBody = await request.text();
    if (rawBody.length > 20_000) {
      return Response.json({ error: "This request is too large. Please shorten your message and try again." }, { status: 413 });
    }
    body = JSON.parse(rawBody);
  } catch {
    return Response.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  if (!body || typeof body !== "object" || Array.isArray(body)) {
    return Response.json({ error: "Please submit a valid form." }, { status: 400 });
  }

  const result = validateContactPayload(body as Record<string, unknown>);
  if (!result.valid) {
    return Response.json({ error: "Please check the required fields and try again.", fields: result.errors }, { status: 422 });
  }
  // Honeypot submissions are acknowledged without reaching the inbox.
  if (result.spam) return Response.json({ ok: true });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;
  if (!apiKey || !to || !from) {
    return Response.json({ error: "The contact form is not connected yet. Please configure the contact email service before launch." }, { status: 503 });
  }

  const message = result.data!;
  try {
    const mailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: message.email,
        subject: `Website enquiry — ${message.service || "General enquiry"}`,
        text: [
          `Name: ${message.name}`,
          `Email: ${message.email}`,
          `Company: ${message.company || "Not provided"}`,
          `Capability: ${message.service || "Not specified"}`,
          `Timeline: ${message.timeline || "Not specified"}`,
          "",
          "Message:",
          message.message,
        ].join("\n"),
      }),
    });

    if (!mailResponse.ok) {
      return Response.json({ error: "We couldn’t deliver your message just now. Please try again later." }, { status: 502 });
    }
    return Response.json({ ok: true });
  } catch {
    return Response.json({ error: "We couldn’t deliver your message just now. Please try again later." }, { status: 502 });
  }
}
