import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight, Factory, Building2, HeartPulse, Cpu, Truck, Landmark,
  Network, ShieldCheck, Workflow, LineChart, Lightbulb,
} from "lucide-react";
import { Button, SectionHeading } from "@tlb/ui";
import { Reveal } from "../../components/Reveal";

export const metadata: Metadata = {
  title: "Industries",
  description: "Practical digital, talent and delivery support for teams working across industrials, technology, financial services, healthcare, infrastructure and professional services.",
};

const sectors = [
  { number: "01", icon: Factory, title: "Manufacturing & industrials", summary: "Support complex operations with better delivery visibility, reliable specialist talent and fit-for-purpose digital workflows.", examples: ["Operational process improvement", "Engineering and digital hiring", "Vendor and programme coordination"], tone: "blue" },
  { number: "02", icon: Cpu, title: "Technology & SaaS", summary: "Move product ideas into working software, strengthen teams and create the operational foundations needed to scale.", examples: ["Product and platform engineering", "Technical recruitment", "Market and competitor intelligence"], tone: "white" },
  { number: "03", icon: Landmark, title: "Financial & professional services", summary: "Help service-led organisations simplify processes, make informed decisions and deliver business-critical initiatives.", examples: ["Workflow and portal development", "Project and change delivery", "Commercial process support"], tone: "white" },
  { number: "04", icon: HeartPulse, title: "Healthcare & life sciences", summary: "Coordinate carefully scoped digital and operational work with attention to documentation, stakeholder needs and process discipline.", examples: ["Internal tools and workflow automation", "Specialist talent support", "Sector and market research"], tone: "blue" },
  { number: "05", icon: Truck, title: "Logistics & infrastructure", summary: "Bring structure to multi-party programmes and build clearer information flows around delivery, vendors and decisions.", examples: ["Programme and PMO support", "Operational dashboards and integrations", "Contract and vendor tracking"], tone: "white" },
  { number: "06", icon: Building2, title: "Growing businesses & enterprise teams", summary: "Add capacity and specialist execution when teams need to move quickly without losing sight of quality and accountability.", examples: ["Cross-functional project teams", "Research-led market entry", "Targeted hiring and product builds"], tone: "white" },
];

const workingPrinciples = [
  { icon: Lightbulb, title: "Learn your context", text: "We ask thoughtful questions about how your business works before recommending how we should work." },
  { icon: Network, title: "Respect the operating reality", text: "We consider your systems, approvals, stakeholders and existing suppliers rather than designing in a vacuum." },
  { icon: ShieldCheck, title: "Make the scope explicit", text: "We agree on deliverables, assumptions, dependencies and success signals before committing to the work." },
];

export default function IndustriesPage() {
  return (
    <>
      <section className="page-hero page-hero--industries section-pad"><div className="container page-hero__grid"><div><span className="eyebrow"><span className="eyebrow__dot" />YOUR WORLD, UNDERSTOOD</span><h1>Good work starts<br />with <em>your context.</em></h1></div><div className="page-hero__side"><p>We work across teams and sectors where people, systems and execution need to line up. The approach is tailored to the realities of your industry — not forced into a template.</p><Button href="/contact" arrow>Talk about your sector</Button><div className="sector-orbit"><span>PEOPLE</span><i /><span>PROCESS</span><i /><span>TECHNOLOGY</span></div></div></div></section>

      <section className="sector-section section-pad-sm"><div className="container"><div className="catalog-topline"><span>01 / SECTORS WE SUPPORT</span><span>NO ONE-SIZE-FITS-ALL PLAYBOOK</span></div><div className="sector-grid">{sectors.map((sector, index) => { const Icon = sector.icon; return <Reveal key={sector.title} delay={index * 40}><article className={`sector-card sector-card--${sector.tone}`}><div className="sector-card__top"><span>{sector.number} / SECTOR</span><span className="sector-card__icon"><Icon size={21} /></span></div><h2>{sector.title}</h2><p>{sector.summary}</p><div className="sector-card__examples"><span>WHERE WE CAN HELP</span>{sector.examples.map((example) => <div key={example}><i />{example}</div>)}</div><Link href="/contact" className="card-arrow-link">Discuss your priorities <ArrowUpRight size={15} /></Link></article></Reveal>; })}</div></div></section>

      <section className="industry-approach section-pad"><div className="container industry-approach__grid"><div><SectionHeading eyebrow="BUILT AROUND YOUR OPERATING REALITY" title="Industry-aware." accent="Outcome-focused." description="We don’t assume we know your business on day one. We bring a structured way of learning what matters, then build an approach that fits." /><Button href="/about" variant="secondary" arrow>Get to know us</Button></div><div className="industry-principles">{workingPrinciples.map((principle, index) => { const Icon = principle.icon; return <article className="industry-principle" key={principle.title}><span className="industry-principle__icon"><Icon size={20} /></span><div><span>0{index + 1}</span><h3>{principle.title}</h3><p>{principle.text}</p></div></article>; })}</div></div></section>

      <section className="industry-bottom section-pad-sm"><div className="container industry-bottom__inner"><div><span className="eyebrow">YOUR SECTOR IS JUST THE START</span><h2>What needs to work<br /><em>better at your business?</em></h2></div><p>Whether the ask is clearly defined or still taking shape, let’s compare notes and find the right next step.</p><Button href="/contact" size="lg" arrow>Bring us the brief</Button></div></section>
    </>
  );
}
