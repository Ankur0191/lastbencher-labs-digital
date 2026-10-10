import type { Metadata } from "next";
import { ArrowDownRight, ArrowRight, Check, Compass, MessagesSquare, Route, ShieldCheck } from "lucide-react";
import { Button, SectionHeading } from "@tlb/ui";
import { CapabilityCard } from "../../components/CapabilityCard";
import { Reveal } from "../../components/Reveal";
import { capabilities } from "../../lib/capabilities";

export const metadata: Metadata = {
  title: "Capabilities",
  description: "Recruitment, software engineering, project and programme management, contracts operations, and market research — tailored around the outcome.",
};

const deliverySteps = [
  { icon: MessagesSquare, title: "Listen & frame", text: "Understand the business context, constraints, people involved and what a useful outcome looks like." },
  { icon: Compass, title: "Shape the approach", text: "Set the scope, team, delivery plan and decision points before work gets underway." },
  { icon: Route, title: "Deliver in the open", text: "Keep work visible, communicate early and adjust thoughtfully when the brief evolves." },
  { icon: ShieldCheck, title: "Close the loop", text: "Hand over clearly, capture what changed and make the next step easier." },
];

export default function ServicesPage() {
  return (
    <>
      <section className="page-hero section-pad">
        <div className="container page-hero__grid"><div><span className="eyebrow"><span className="eyebrow__dot" />CAPABILITIES, CONNECTED</span><h1>One brief.<br /><em>Many ways to move it forward.</em></h1></div><div className="page-hero__side"><p>Specialist execution across people, technology, operations and intelligence. Bring us a defined scope or a complex question you’re still working through.</p><Button href="/contact" arrow>Discuss a brief</Button><div className="page-hero__index"><span>01 — 05</span><span>CAPABILITY AREAS</span><ArrowDownRight size={18} /></div></div></div>
      </section>

      <section className="services-catalog section-pad-sm"><div className="container"><div className="catalog-topline"><span>01 / OUR CAPABILITIES</span><span>MODULAR BY DESIGN · OUTCOME LED</span></div><div className="capability-detail-grid">{capabilities.map((item, index) => <Reveal key={item.id} delay={index * 45}><div id={item.id} className="capability-detail-anchor"><CapabilityCard item={item} /></div></Reveal>)}</div></div></section>

      <section className="service-flex section-pad"><div className="container service-flex__layout"><div><SectionHeading eyebrow="COMBINED ENGAGEMENTS" title="The answer may be" accent="a combination." description="A product launch may need engineers, a delivery lead and market intelligence. A new site may need hiring, vendor coordination and contract workflows. We can connect the moving parts around the goal." /><Button href="/contact" variant="secondary" arrow>Tell us what you’re solving</Button></div><div className="service-flex__visual"><div className="service-flex__center"><span className="mini-mark mini-mark--large">LB</span><strong>Your business<br />challenge</strong><small>One connected brief</small></div><div className="service-flex__node service-flex__node--one"><span><Route size={17} /></span><strong>Delivery</strong><small>Keep it moving</small></div><div className="service-flex__node service-flex__node--two"><span><Check size={17} /></span><strong>Capability</strong><small>Get it done</small></div><div className="service-flex__node service-flex__node--three"><span><ArrowRight size={17} /></span><strong>Outcome</strong><small>Move forward</small></div><div className="service-flex__connector service-flex__connector--one" /><div className="service-flex__connector service-flex__connector--two" /><div className="service-flex__connector service-flex__connector--three" /></div></div></section>

      <section className="delivery-process section-pad"><div className="container"><SectionHeading eyebrow="A PRACTICAL DELIVERY MODEL" title="Clear thinking. Visible work." accent="Reliable follow-through." description="The details change by engagement, but a good working relationship should feel consistent." /><div className="delivery-steps">{deliverySteps.map((step, index) => { const Icon = step.icon; return <Reveal key={step.title} delay={index * 60}><article className="delivery-step"><span className="delivery-step__num">0{index + 1}</span><span className="delivery-step__icon"><Icon size={21} /></span><h3>{step.title}</h3><p>{step.text}</p></article></Reveal>; })}</div></div></section>

      <section className="simple-cta section-pad-sm"><div className="container simple-cta__inner"><div><span className="eyebrow">HAVE A SPECIFIC NEED?</span><h2>Let’s give it a shape.</h2></div><p>You don’t need a perfect brief to start. A business objective, a blocker or an opportunity is enough.</p><Button href="/contact" size="lg" arrow>Start a conversation</Button></div></section>
    </>
  );
}
