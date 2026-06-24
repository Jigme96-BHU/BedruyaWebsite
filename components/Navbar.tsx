"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight } from "lucide-react";
import "./navbar.css";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header className={`site-header${scrolled ? " site-header--scrolled" : ""}`}>
        <div className="nav-shell">
          <nav className="nav-inner" aria-label="Main navigation">
            <Link href="/" className="nav-brand-link">
              <span className="nav-logo-wrap">
                <Image
                  src="/logo.png"
                  alt="Bedurya Community Care"
                  width={40}
                  height={40}
                  className="nav-logo"
                  priority
                />
              </span>
              <span className="nav-brand-text">
                Bedurya <span className="nav-brand-accent">Community Care</span>
              </span>
            </Link>

            <div className="nav-desktop">
              <ul className="nav-links-track">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className={`nav-link${isActive(pathname, l.href) ? " nav-link--active" : ""}`}
                      aria-current={isActive(pathname, l.href) ? "page" : undefined}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>

              <Link href="/contact" className="nav-cta">
                Get in Touch
                <ArrowUpRight size={15} strokeWidth={2.5} className="nav-cta-icon" aria-hidden />
              </Link>
            </div>

            <button
              type="button"
              className={`nav-menu-btn${open ? " nav-menu-btn--open" : ""}`}
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-nav"
            >
              {open ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`nav-mobile-overlay${open ? " nav-mobile-overlay--open" : ""}`}
        onClick={() => setOpen(false)}
        aria-hidden={!open}
      />

      <div
        id="mobile-nav"
        className={`nav-mobile-panel${open ? " nav-mobile-panel--open" : ""}`}
        aria-hidden={!open}
      >
        <ul className="nav-mobile-list">
          {links.map((l) => (
            <li key={l.href}>
              <Link
                href={l.href}
                className={`nav-mobile-link${isActive(pathname, l.href) ? " nav-mobile-link--active" : ""}`}
                onClick={() => setOpen(false)}
                aria-current={isActive(pathname, l.href) ? "page" : undefined}
              >
                {l.label}
                <ArrowUpRight size={16} strokeWidth={2} aria-hidden />
              </Link>
            </li>
          ))}
          <li className="nav-mobile-cta-wrap">
            <Link href="/contact" className="nav-cta nav-mobile-cta" onClick={() => setOpen(false)}>
              Get in Touch
              <ArrowUpRight size={16} strokeWidth={2.5} className="nav-cta-icon" aria-hidden />
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
}
