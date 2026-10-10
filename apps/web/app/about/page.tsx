import type { Metadata } from "next";
import { ArrowDownRight, ArrowUpRight, Blocks, CircleDot, Handshake, MoveUpRight, Target } from "lucide-react";
import { Button, SectionHeading } from "@tlb/ui";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "About us",
  description: "The Last Bencher Labs Digital connects people, technology and disciplined execution to help businesses move difficult work forward.",
};

const values = [
  { icon: Target, number: "01", title: "Outcome before optics", text: "A polished presentation means little if the work doesn’t move. We define success in practical terms and keep the focus there." },
  { icon: Blocks, number: "02", title: "Flexible by design", text: "We assemble the right mix around the need. The solution can be focused or multidisciplinary, short-term or ongoing." },
  { icon: Handshake, number: "03", title: "Straight conversations", text: "We communicate clearly about scope, risks, assumptions and trade-offs. No mystery process, no inflated promises." },
  { icon: CircleDot, number: "04", title: "Care in the details", text: "Good delivery is built from the small things: reliable follow-through, sensible documentation and clear ownership." },
];

export default function AboutPage() {
  return (
    <>
      <section className="page-hero page-hero--about section-pad"><div className="container page-hero__grid"><div><span className="eyebrow"><span className="eyebrow__dot" />A DIFFERENT KIND OF PARTNER</span><h1>We’re here for<br />the work that <em>matters.</em></h1></div><div className="page-hero__side"><p>The Last Bencher Labs Digital exists for businesses that need more than a vendor for a single task — they need thoughtful people who can connect the dots and get the work moving.</p><Button href="/contact" arrow>Meet us through a brief</Button><div className="page-hero__index"><span>INDEPENDENT THINKING</span><span>ACCOUNTABLE DELIVERY</span><ArrowDownRight size={18} /></div></div></div></section>

      <section className="manifesto-section section-pad"><div className="container manifesto-layout"><div className="manifesto-mark"><span className="manifesto-mark__large">LB</span><span className="manifesto-mark__small">THE LAST BENCHER LABS<br />DIGITAL</span><span className="manifesto-mark__orbit" /></div><div className="manifesto-copy"><span className="eyebrow">OUR POINT OF VIEW</span><h2>The work rarely fits in one box. <em>Neither should the team behind it.</em></h2><p>Some challenges need a developer. Others need the right hire, a delivery lead, a clearer contract process or better market information. Often, it takes a few of those working together.</p><p>We bring those capabilities into one conversation — then shape an engagement that makes sense for the business, the people doing the work and the outcome that needs to land.</p><div className="manifesto-signoff"><span className="manifesto-signoff__line" /><span>Make the difficult, deliverable.</span></div></div></div></section>

      <section className="values-section section-pad"><div className="container"><div className="section-intro-row"><SectionHeading eyebrow="WHAT YOU CAN EXPECT" title="Small promises," accent="kept consistently." description="Our standards are simple to explain, and important to live up to." /></div><div className="values-grid">{values.map((value, index) => { const Icon = value.icon; return <Reveal key={value.title} delay={index * 60}><article className="value-card"><div className="value-card__top"><span>{value.number} / PRINCIPLE</span><Icon size={21} strokeWidth={1.6} /></div><h3>{value.title}</h3><p>{value.text}</p><span className="value-card__corner"><MoveUpRight size={15} /></span></article></Reveal>; })}</div></div></section>

      <section className="about-way section-pad"><div className="container about-way__layout"><div><SectionHeading eyebrow="HOW WE SHOW UP" title="Partner first." accent="Vendor when needed." description="We’ll be clear about where we can help, what we need from your team and when another specialist is the better fit. The goal is better work, not more complexity." /><Button href="/services" variant="secondary" arrow>Explore the capabilities</Button></div><div className="way-list"><div><span>01</span><p>Get close to the business question.</p><ArrowUpRight size={16} /></div><div><span>02</span><p>Agree the shape of the engagement.</p><ArrowUpRight size={16} /></div><div><span>03</span><p>Make progress visible to the people who need it.</p><ArrowUpRight size={16} /></div><div><span>04</span><p>Leave the work in a stronger place.</p><ArrowUpRight size={16} /></div></div></div></section>

      <section className="about-last section-pad-sm"><div className="container about-last__inner"><span className="eyebrow"><span className="eyebrow__dot" />LET'S DO SOMETHING USEFUL</span><h2>Tell us what others<br /><em>couldn’t quite solve.</em></h2><Button href="/contact" size="lg" arrow>Start a conversation</Button></div></section>
    </>
  );
}
