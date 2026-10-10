import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Clock3, MessageSquareText, ShieldCheck } from "lucide-react";
import { Button } from "@tlb/ui";
import { ContactForm } from "../../components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description: "Tell The Last Bencher Labs Digital about your business challenge, delivery priority, hiring need or software project.",
};

const expectations = [
  { icon: MessageSquareText, title: "A real conversation", copy: "We’ll ask a few focused questions and listen before making recommendations." },
  { icon: Clock3, title: "A clear next step", copy: "If there’s a fit, we’ll outline what scoping or a first working session could look like." },
  { icon: ShieldCheck, title: "No pressure pitch", copy: "If we’re not right for the job, we’ll be direct about it." },
];

export default function ContactPage() {
  return (
    <>
      <section className="contact-hero section-pad"><div className="container contact-hero__grid"><div><span className="eyebrow"><span className="eyebrow__dot" />LET’S START WITH THE CHALLENGE</span><h1>The first step is<br /><em>a conversation.</em></h1><p>Tell us what you’re trying to make happen. A tight brief is helpful; a half-formed problem is fine too.</p><div className="contact-hero__note"><span className="contact-hero__note-icon"><ArrowDownRight size={20} /></span><span>Share the context. We’ll help with the questions.</span></div></div><div className="contact-hero__art" aria-hidden="true"><div className="contact-art-card contact-art-card--main"><span className="contact-art-card__label">THE STARTING POINT</span><h2>What needs<br /><em>to change?</em></h2><div className="contact-art-lines"><i /><i /><i /></div><div className="contact-art-footer"><span className="status-dot" />READY WHEN YOU ARE</div></div><div className="contact-art-card contact-art-card--note"><span className="contact-art-card__mini"><MessageSquareText size={18} /></span><strong>One good<br />conversation.</strong><ArrowUpRight size={17} /></div><div className="contact-art-orbit" /></div></div></section>

      <section className="contact-main section-pad-sm" id="project-brief"><div className="container contact-main__grid"><div className="contact-main__sidebar"><span className="eyebrow">WHAT HAPPENS NEXT</span><h2>A thoughtful start.<br /><em>A useful next step.</em></h2><p>You don’t need to know which service to select. Tell us what is changing, what is stuck or what opportunity you’re exploring.</p><div className="contact-expectations">{expectations.map((item) => { const Icon = item.icon; return <div key={item.title} className="contact-expectation"><span><Icon size={18} /></span><div><h3>{item.title}</h3><p>{item.copy}</p></div></div>; })}</div><div className="contact-privacy"><ShieldCheck size={17} /><span>Your project details are used to respond to this enquiry and are not published on this site.</span></div></div><div className="contact-form-shell"><ContactForm /></div></div></section>

      <section className="contact-bottom section-pad-sm"><div className="container contact-bottom__inner"><div><span className="eyebrow">NOT SURE WHERE TO BEGIN?</span><h2>Start with what’s<br /><em>getting in the way.</em></h2></div><Button href="/services" variant="secondary" arrow>Explore our capabilities</Button></div></section>
    </>
  );
}
