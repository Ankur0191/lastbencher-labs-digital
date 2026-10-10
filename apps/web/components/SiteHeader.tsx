"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { Brand, Button } from "@tlb/ui";

const links = [
  { href: "/services", label: "Capabilities" },
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About us" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => setMenuOpen(false), [pathname]);
  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => document.body.classList.remove("menu-open");
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="container site-header__inner">
        <Brand />
        <nav className={`main-nav${menuOpen ? " main-nav--open" : ""}`} aria-label="Main navigation">
          <Link className={`main-nav__link${pathname === "/" ? " is-active" : ""}`} href="/">Overview</Link>
          {links.map((link) => (
            <Link key={link.href} className={`main-nav__link${pathname.startsWith(link.href) ? " is-active" : ""}`} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div className="main-nav__mobile-cta"><Button href="/contact" arrow>Talk to our team</Button></div>
        </nav>
        <div className="site-header__actions">
          <Link className="header-contact" href="/contact">Let’s talk <ArrowUpRight size={15} strokeWidth={1.8} /></Link>
          <Button href="/contact" size="sm" arrow>Start a conversation</Button>
        </div>
        <button className="menu-toggle" type="button" aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>
    </header>
  );
}
