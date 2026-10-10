import Link from "next/link";
import { ArrowUpRight, MoveUpRight } from "lucide-react";
import { Brand, Button } from "@tlb/ui";

const footerLinks = [
  { title: "Explore", items: [{ label: "Capabilities", href: "/services" }, { label: "Industries", href: "/industries" }, { label: "About us", href: "/about" }] },
  { title: "Start here", items: [{ label: "Talk to our team", href: "/contact" }, { label: "Share a brief", href: "/contact#project-brief" }] },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-cta">
          <div className="footer-cta__copy">
            <span className="eyebrow eyebrow--light"><span className="eyebrow__dot" />YOUR NEXT MOVE STARTS HERE</span>
            <h2>The difficult brief?<br /><em>That’s our kind of work.</em></h2>
          </div>
          <div className="footer-cta__action">
            <p>Tell us what needs to happen. We’ll help you map the way forward.</p>
            <Button href="/contact" variant="light" size="lg" arrow>Talk through a challenge</Button>
          </div>
          <span className="footer-cta__orb footer-cta__orb--one" aria-hidden="true" />
          <span className="footer-cta__orb footer-cta__orb--two" aria-hidden="true" />
        </div>

        <div className="footer-main">
          <div className="footer-brand-column">
            <Brand inverse />
            <p>A flexible digital partner for the work that moves business forward.</p>
            <Link className="social-link" href="/contact" aria-label="Contact The Last Bencher Labs Digital">Start a conversation <ArrowUpRight size={15} /></Link>
          </div>
          {footerLinks.map((group) => (
            <div className="footer-link-group" key={group.title}>
              <h3>{group.title}</h3>
              {group.items.map((item) => <Link key={item.label} href={item.href}>{item.label}<MoveUpRight size={12} /></Link>)}
            </div>
          ))}
          <div className="footer-link-group footer-link-group--note">
            <h3>Our approach</h3>
            <p>Practical thinking. Accountable delivery. No off-the-shelf answers to one-of-a-kind challenges.</p>
            <Link href="/about">What we stand for <ArrowUpRight size={12} /></Link>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} The Last Bencher Labs Digital.</span>
          <span>Built for the work ahead.</span>
          <span className="footer-bottom__status"><span />Independent by design</span>
        </div>
      </div>
    </footer>
  );
}
