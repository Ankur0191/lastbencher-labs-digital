import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowDownRight, ArrowRight, ArrowUpRight, Boxes, Check, ChevronRight,
  Code2, Compass, LineChart, Network, ShieldCheck, Sparkles, UsersRound, Workflow,
} from "lucide-react";
import { Button, SectionHeading } from "@tlb/ui";
import { CapabilityCard } from "../components/CapabilityCard";
import { Reveal } from "../components/Reveal";
import { TypewriterText } from "../components/TypewriterText";
import { capabilities } from "../lib/capabilities";

export const metadata: Metadata = {
  title: "Make the Difficult, Deliverable",
  description: "Recruitment, software engineering, project management, contracts operations and market research — connected around your business challenge.",
};

const principles = [
  { icon: Compass, title: "Start with the real problem", text: "We get clear on what needs to change before jumping to a pre-packaged solution." },
  { icon: Network, title: "Bring the right mix", text: "People, technology and delivery expertise come together around the brief — not a rigid service menu." },
  { icon: ShieldCheck, title: "Own the outcome", text: "Clear next steps, visible progress and accountable communication from kickoff to handover." },
];

export default function HomePage() {
  return (
    <>
      <section className="hero hero--home section-pad">
        <div className="container hero__grid">
          <div className="hero__copy">
            <div className="eyebrow"><span className="eyebrow__dot" />AN INDEPENDENT BUSINESS & DIGITAL PARTNER</div>
            <h1>If no one else can do it, <em>we’ll find a way.</em></h1>
            <div className="hero__typewriter" aria-label="Recruitment, software development, project delivery and market research">
              <span className="hero__typewriter-kicker">WE HELP YOU</span>
              <TypewriterText phrases={[
                "hire the right people.",
                "build better software.",
                "deliver complex projects.",
                "turn research into action.",
              ]} />
            </div>
            <p className="hero__lead">For the work that doesn’t come with a playbook. We connect talent, technology and execution to move complex business priorities forward.</p>
            <div className="hero__actions">
              <Button href="/contact" size="lg" arrow>Talk through your challenge</Button>
              <Button href="/services" variant="text" size="lg">Explore our capabilities <ArrowRight size={17} /></Button>
            </div>
            <div className="hero__principle"><span className="hero__principle-line" /><span>Strategy, people and delivery — in one conversation.</span></div>
          </div>
          <div className="hero__art" role="img" aria-label="Illustration of a connected business delivery workspace">
            <div className="hero-art__halo hero-art__halo--blue" />
            <div className="hero-art__halo hero-art__halo--soft" />
            <div className="hero-art__label hero-art__label--top"><span className="status-dot" />BUILT AROUND YOUR BRIEF</div>
            <div className="delivery-window">
              <div className="delivery-window__bar"><div className="window-dots"><i /><i /><i /></div><span>ENGAGEMENT WORKSPACE</span><span className="delivery-window__menu">•••</span></div>
              <div className="delivery-window__body">
                <aside className="delivery-sidebar"><div className="delivery-sidebar__brand"><span className="mini-mark">LB</span><span>DELIVERY<br />DESK</span></div><span className="delivery-sidebar__item is-selected"><span />Overview</span><span className="delivery-sidebar__item"><span />Workstreams</span><span className="delivery-sidebar__item"><span />People</span><span className="delivery-sidebar__item"><span />Research</span><span className="delivery-sidebar__item"><span />Documents</span><div className="delivery-sidebar__foot"><i /> All systems considered</div></aside>
                <div className="delivery-main">
                  <div className="delivery-main__greeting"><div><span className="tiny-label">ACTIVE ENGAGEMENT / 004</span><h3>Complex work, made clear.</h3><p>One brief. The right moving parts.</p></div><span className="avatar-stack"><i>TL</i><i>PM</i><i>+</i></span></div>
                  <div className="delivery-progress"><div className="delivery-progress__head"><span>Programme readiness</span><strong>72%</strong></div><div className="progress-track"><span /></div><div className="delivery-progress__foot"><span>Workstreams aligned</span><span>Updated today</span></div></div>
                  <div className="delivery-widgets">
                    <div className="delivery-widget delivery-widget--talent"><span className="widget-icon"><UsersRound size={16} /></span><span className="tiny-label">TALENT</span><strong>06 roles</strong><small>Pipeline mapped</small><span className="widget-trend">↗ on track</span></div>
                    <div className="delivery-widget delivery-widget--digital"><span className="widget-icon"><Code2 size={16} /></span><span className="tiny-label">DIGITAL</span><strong>03 sprints</strong><small>Build plan ready</small><span className="widget-trend">↗ in review</span></div>
                  </div>
                  <div className="delivery-next"><div className="delivery-next__icon"><Check size={15} /></div><div><span className="tiny-label">NEXT MILESTONE</span><strong>Decision-ready delivery plan</strong></div><ArrowUpRight size={16} /></div>
                </div>
              </div>
            </div>
            <div className="hero-float hero-float--talent"><span className="hero-float__icon"><UsersRound size={18} /></span><div><small>PEOPLE, FOUND</small><strong>The right expertise.</strong></div><ArrowUpRight size={15} /></div>
            <div className="hero-float hero-float--research"><span className="hero-float__icon hero-float__icon--lime"><LineChart size={18} /></span><div><small>INTELLIGENCE</small><strong>Clarity to act.</strong></div><ArrowUpRight size={15} /></div>
            <div className="hero-art__index"><span>01</span><span className="hero-art__index-line" /><span>MAKE IT HAPPEN</span></div>
          </div>
        </div>
        <div className="container hero__bottomline"><span>ONE PARTNER. MULTIPLE WAYS FORWARD.</span><div><span>Talent</span><i /><span>Technology</span><i /><span>Delivery</span><i /><span>Intelligence</span></div><ArrowDownRight size={19} /></div>
      </section>

      <section className="intro-strip section-pad-sm">
        <div className="container intro-strip__inner"><span className="eyebrow">THE WAY WE THINK</span><p>Business problems don’t arrive in neat categories. <em>Your partner shouldn’t work that way either.</em></p><div className="intro-strip__scribble" aria-hidden="true">↗</div></div>
      </section>

      <section className="capabilities-section section-pad" id="capabilities">
        <div className="container">
          <div className="section-intro-row"><SectionHeading eyebrow="WHAT WE BRING TO THE TABLE" title="Whatever the challenge," accent="let’s get it moving." description="A multidisciplinary set of capabilities for the moments that matter — from a specialist hire to a business-critical digital build." /><Button href="/services" variant="secondary" arrow>All capabilities</Button></div>
          <div className="capability-grid capability-grid--home">{capabilities.map((item, index) => <Reveal key={item.id} delay={index * 65}><CapabilityCard item={item} compact /></Reveal>)}</div>
          <div className="capabilities-note"><Sparkles size={18} /><p>Not sure which capability fits? <Link href="/contact">Start with the problem. <ArrowUpRight size={14} /></Link> We’ll help scope the right approach.</p></div>
        </div>
      </section>

      <section className="approach-section section-pad">
        <div className="container approach-layout">
          <div className="approach-copy"><SectionHeading eyebrow="BUILT FOR THE GREY AREAS" title="No hand-offs. No" accent="shrugging shoulders." description="When work crosses teams or disciplines, we help make the connections and keep the whole picture in view." /><Link className="underlined-link" href="/about">How we work <ArrowUpRight size={16} /></Link><div className="approach-motif" aria-hidden="true"><span /><span /><span /><span /></div></div>
          <div className="principle-list">{principles.map((principle, index) => { const Icon = principle.icon; return <Reveal key={principle.title} delay={index * 80}><article className="principle-row"><span className="principle-row__number">0{index + 1}</span><span className="principle-row__icon"><Icon size={21} strokeWidth={1.6} /></span><div><h3>{principle.title}</h3><p>{principle.text}</p></div><ArrowUpRight className="principle-row__arrow" size={17} /></article></Reveal>; })}</div>
        </div>
      </section>

      <section className="industries-preview section-pad">
        <div className="container">
          <div className="section-intro-row"><SectionHeading eyebrow="INDUSTRIES & TEAMS" title="Context matters." accent="We take the time to learn yours." description="Different sectors. Different stakes. We shape the work around your operating reality, risk profile and goals." /><Button href="/industries" variant="secondary" arrow>See industries</Button></div>
          <div className="industry-preview-grid">
            <Link className="industry-tile industry-tile--large" href="/industries"><span className="industry-tile__number">01 / OPERATIONS</span><span className="industry-tile__symbol"><Workflow size={25} /></span><h3>Industrial &<br />manufacturing</h3><p>Delivery, systems and specialist capability for work on the ground.</p><ArrowUpRight className="industry-tile__arrow" size={19} /></Link>
            <Link className="industry-tile" href="/industries"><span className="industry-tile__number">02 / TECHNOLOGY</span><span className="industry-tile__symbol"><Boxes size={23} /></span><h3>Technology &<br />SaaS</h3><p>Build, scale and improve the digital foundations behind growth.</p><ArrowUpRight className="industry-tile__arrow" size={19} /></Link>
            <Link className="industry-tile industry-tile--dark" href="/industries"><span className="industry-tile__number">03 / STRATEGY</span><span className="industry-tile__symbol"><LineChart size={23} /></span><h3>Professional &<br />financial services</h3><p>Sharper operations, better evidence and more reliable delivery.</p><ArrowUpRight className="industry-tile__arrow" size={19} /></Link>
          </div>
        </div>
      </section>

      <section className="closing-band section-pad-sm"><div className="container closing-band__inner"><div><span className="eyebrow"><span className="eyebrow__dot" />YOUR CHALLENGE IS A GOOD PLACE TO START</span><h2>Bring us the brief<br /><em>everyone else passed on.</em></h2></div><div className="closing-band__action"><p>Let’s turn the ambiguous, the urgent or the complicated into a clear plan of action.</p><Button href="/contact" size="lg" arrow>Let’s talk</Button><span>No pressure. Just a productive first conversation.</span></div><div className="closing-band__graphic" aria-hidden="true"><span>LB</span><i /><i /><i /></div></div></section>
    </>
  );
}
