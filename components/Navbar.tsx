"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Our Services" },
  { href: "/team", label: "Our Team" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      style={{
        position: "fixed",
        top: "0px",
        left: "0px",
        right: "0px",
        zIndex: 50,
        borderRadius: "0px",
        background: "rgba(245,244,242,0.92)",
        backdropFilter: "blur(16px)",
        boxShadow: "0 4px 24px rgba(0,0,0,0.1)",
        border: "1px solid rgba(0,0,0,0.06)",
      }}
    >
      <nav
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 24px",
          maxWidth: "1600px",
          margin: "0 auto",
        }}
      >
        <Link href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", minWidth: 0 }}>
          <Image src="/logo.png" alt="Bedurya Community Care" width={40} height={40} style={{ borderRadius: "8px", flexShrink: 0 }} />
          <span
            className="nav-brand"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontWeight: 700,
              fontSize: "18px",
              color: "#1E4D7B",
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            Bedurya{" "}
            <span style={{ color: "#B45309" }}>Community Care</span>
          </span>
        </Link>

        {/* Desktop nav + CTA grouped on the right */}
        <div className="hidden md:flex" style={{ display: "flex", alignItems: "center", gap: "4px" }}>
          <ul style={{ display: "flex", gap: "4px", listStyle: "none", margin: 0, padding: 0 }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    fontSize: "15px",
                    color: "#1C1917",
                    textDecoration: "none",
                    padding: "8px 12px",
                    borderRadius: "8px",
                    transition: "background 200ms, color 200ms",
                    display: "block",
                  }}
                  onMouseEnter={(e) => {
                    (e.target as HTMLElement).style.background = "rgba(180,83,9,0.08)";
                    (e.target as HTMLElement).style.color = "#B45309";
                  }}
                  onMouseLeave={(e) => {
                    (e.target as HTMLElement).style.background = "transparent";
                    (e.target as HTMLElement).style.color = "#1C1917";
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ width: "1px", height: "24px", background: "rgba(28,25,23,0.12)", margin: "0 8px" }} />

          <Link
            href="/contact"
            style={{
              fontFamily: "'Nunito', sans-serif",
              fontWeight: 700,
              fontSize: "15px",
              background: "#B45309",
              color: "#fff",
              padding: "10px 22px",
              borderRadius: "10px",
              textDecoration: "none",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#92400E")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#B45309")}
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          style={{
            background: "none",
            border: "none",
            cursor: "pointer",
            color: "#1C1917",
            padding: "4px",
          }}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div
          className="md:hidden"
          style={{
            borderTop: "1px solid rgba(180,83,9,0.1)",
            padding: "16px 24px 20px",
          }}
        >
          <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "4px" }}>
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  style={{
                    fontFamily: "'Nunito', sans-serif",
                    fontWeight: 600,
                    fontSize: "16px",
                    color: "#1C1917",
                    textDecoration: "none",
                    display: "block",
                    padding: "10px 12px",
                    borderRadius: "8px",
                  }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li style={{ marginTop: "8px" }}>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 700,
                  fontSize: "16px",
                  background: "#B45309",
                  color: "#fff",
                  padding: "12px 20px",
                  borderRadius: "10px",
                  textDecoration: "none",
                  display: "block",
                  textAlign: "center",
                }}
              >
                Get in Touch
              </Link>
            </li>
          </ul>
        </div>
      )}
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 360px) {
          .nav-brand { font-size: 15px !important; }
        }
      `}} />
    </header>
  );
}
