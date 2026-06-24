"use client";

import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer
      className="site-footer"
      style={{
        color: "#E2EDF8",
        paddingTop: "64px",
        paddingBottom: "32px",
      }}
    >
      <div className="footer-wrap" style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "48px",
            marginBottom: "48px",
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
              <Image src="/logo.png" alt="Bedurya" width={48} height={48} style={{ borderRadius: "10px" }} />
              <div>
                <div
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontWeight: 700,
                    fontSize: "20px",
                    color: "#fff",
                    lineHeight: 1.1,
                  }}
                >
                  Bedurya
                </div>
                <div style={{ fontSize: "12px", color: "#F59E0B", fontFamily: "'Nunito', sans-serif" }}>
                  Community Care
                </div>
              </div>
            </div>
            <p style={{ fontSize: "14px", lineHeight: 1.7, color: "#CBD5E1", marginBottom: "16px" }}>
              Bringing Light into Your Life&apos;s Journey. Registered NDIS &amp; DVA Provider serving the ACT and Queanbeyan.
            </p>
            <div style={{ display: "flex", gap: "8px", flexWrap: "wrap" }}>
              <span
                className="footer-badge"
                style={{
                  color: "#FDE68A",
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
              >
                NDIS Registered
              </span>
              <span
                className="footer-badge"
                style={{
                  background: "rgba(74,124,89,0.25)",
                  border: "1px solid rgba(74,124,89,0.45)",
                  color: "#86EFAC",
                  fontSize: "12px",
                  padding: "4px 10px",
                  borderRadius: "20px",
                  fontFamily: "'Nunito', sans-serif",
                  fontWeight: 600,
                }}
              >
                DVA Provider
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="footer-heading">
              Quick Links
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/services", label: "Our Services" },
                { href: "/team", label: "Meet Our Team" },
                { href: "/contact", label: "Contact Us" },
              ].map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="footer-link">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="footer-heading">
              Our Services
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                "Daily Living & Home Support",
                "Community & Social Support",
                "Health & Wellbeing Support",
                "Supported Independent Living",
                "Nursing & Clinical Care",
              ].map((s) => (
                <li key={s} style={{ color: "#CBD5E1", fontSize: "14px" }}>
                  {s}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="footer-heading">
              Contact Us
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                { icon: <Phone size={16} />, text: "+61 (04) 0575 2984", href: "tel:+61405752984" },
                { icon: <Mail size={16} />, text: "info@bedurya.com.au", href: "mailto:info@bedurya.com.au" },
                { icon: <MapPin size={16} />, text: "6 Gem Street, Strathnairn ACT 2615", href: null },
                { icon: <Clock size={16} />, text: "Mon–Sat, 9:00 AM – 6:00 PM", href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                  <span style={{ color: "#F59E0B", marginTop: "2px", flexShrink: 0 }}>{item.icon}</span>
                  {item.href ? (
                    <a href={item.href} style={{ color: "#CBD5E1", fontSize: "14px", textDecoration: "none" }}>
                      {item.text}
                    </a>
                  ) : (
                    <span style={{ color: "#CBD5E1", fontSize: "14px" }}>{item.text}</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div
          style={{
            borderTop: "1px solid rgba(255,255,255,0.12)",
            paddingTop: "28px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <p style={{ color: "#64748B", fontSize: "13px" }}>
            We acknowledge the Traditional Custodians of the lands on which we operate and pay our respects to Elders past, present and emerging.
          </p>
          <p style={{ color: "#64748B", fontSize: "13px" }}>
            © {new Date().getFullYear()} Bedurya Community Care. All rights reserved. ABN: Available on request.
          </p>
        </div>
      </div>
      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr 1fr !important; gap: 32px !important; }
          .footer-wrap { padding: 0 16px !important; }
        }
        @media (max-width: 480px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}} />
    </footer>
  );
}
