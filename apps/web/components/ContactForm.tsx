"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, CheckCircle2, LoaderCircle } from "lucide-react";

const initialState = { name: "", email: "", company: "", service: "", timeline: "", message: "", website: "" };

type FormStatus = { kind: "idle" | "loading" | "success" | "error"; message?: string };

export function ContactForm() {
  const [values, setValues] = useState(initialState);
  const [status, setStatus] = useState<FormStatus>({ kind: "idle" });
  const update = (field: keyof typeof initialState, value: string) => {
    setValues((current) => ({ ...current, [field]: value }));
    setStatus((current) => current.kind === "error" ? { kind: "idle" } : current);
  };

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus({ kind: "loading" });
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) throw new Error(result.error || "We couldn't send this message. Please try again.");
      setStatus({ kind: "success", message: "Your note is on its way. We’ll be in touch soon." });
      setValues(initialState);
    } catch (error) {
      setStatus({ kind: "error", message: error instanceof Error ? error.message : "Something went wrong. Please try again." });
    }
  }

  if (status.kind === "success") {
    return (
      <div className="form-success" role="status">
        <span className="form-success__icon"><CheckCircle2 size={28} /></span>
        <span className="eyebrow">MESSAGE RECEIVED</span>
        <h3>Good things start with a conversation.</h3>
        <p>{status.message}</p>
        <button type="button" className="text-button" onClick={() => setStatus({ kind: "idle" })}>Send another message <ArrowRight size={15} /></button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-heading"><span className="eyebrow">PROJECT BRIEF</span><p>Share what you’re working on. We’ll take it from there.</p></div>
      <div className="form-grid">
        <label className="field"><span>Your name <b>*</b></span><input name="name" autoComplete="name" value={values.name} onChange={(e) => update("name", e.target.value)} placeholder="Name you go by" required minLength={2} /></label>
        <label className="field"><span>Work email <b>*</b></span><input name="email" type="email" autoComplete="email" value={values.email} onChange={(e) => update("email", e.target.value)} placeholder="you@company.com" required /></label>
        <label className="field"><span>Company</span><input name="company" autoComplete="organization" value={values.company} onChange={(e) => update("company", e.target.value)} placeholder="Where you work" /></label>
        <label className="field"><span>What do you need help with?</span><select name="service" value={values.service} onChange={(e) => update("service", e.target.value)}><option value="">Select a capability</option><option>Recruitment & talent</option><option>Software development</option><option>Project & programme management</option><option>Contracts & commercial operations</option><option>Market & competitive research</option><option>Multi-disciplinary / not sure yet</option></select></label>
        <label className="field field--full"><span>What does success look like? <b>*</b></span><textarea name="message" value={values.message} onChange={(e) => update("message", e.target.value)} placeholder="The challenge, the opportunity, the deadline — whatever helps us understand." required minLength={10} rows={5} /></label>
        <label className="field"><span>Expected timeline</span><select name="timeline" value={values.timeline} onChange={(e) => update("timeline", e.target.value)}><option value="">Choose a timeframe</option><option>Immediately</option><option>Within 30 days</option><option>1–3 months</option><option>Exploring options</option></select></label>
        <label className="field field--trap" aria-hidden="true" tabIndex={-1}><span>Leave this field empty</span><input name="website" value={values.website} onChange={(e) => update("website", e.target.value)} tabIndex={-1} autoComplete="off" /></label>
      </div>
      {status.kind === "error" && <p className="form-message form-message--error" role="alert">{status.message}</p>}
      <div className="form-footer"><p>By submitting, you agree that our team may contact you about this enquiry.</p><button className="button button--primary button--lg form-submit" type="submit" disabled={status.kind === "loading"}>{status.kind === "loading" ? <>Sending <LoaderCircle size={16} className="spin" /></> : <>Send project brief <ArrowRight size={16} /></>}</button></div>
    </form>
  );
}
