"use client";

import { Phone, Mail, MapPin, Clock } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import {
  HeroOrb,
  HoverLift,
  PageHeroContent,
  PageHeroItem,
  Reveal,
  StaggerGroup,
  StaggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/page-motion";

const contactItems = [
  { icon: <Phone size={20} />, label: "Phone", value: "+61 (04) 0575 2984", href: "tel:+61405752984" },
  { icon: <Mail size={20} />, label: "Email", value: "info@bedurya.com.au", href: "mailto:info@bedurya.com.au" },
  { icon: <MapPin size={20} />, label: "Address", value: "6 Gem Street, Strathnairn ACT 2615", href: null },
  { icon: <Clock size={20} />, label: "Hours", value: "Monday–Saturday, 9:00 AM – 6:00 PM", href: null },
];

export default function ContactPage() {
  return (
    <>
      {/* Header */}
      <section
        className="page-hero-banner"
        style={{
          background: "linear-gradient(135deg, #1E4D7B 0%, #1a3d5c 100%)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HeroOrb className="page-hero-orb" style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <PageHeroContent>
            <PageHeroItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                We&apos;re Here for You
              </p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
                Get in Touch
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p style={{ color: "#CBD5E1", fontSize: "18px", lineHeight: 1.75 }}>
                Whether you&apos;re a participant, family member, or referring health professional—we&apos;re happy to answer your questions and walk you through our services.
              </p>
            </PageHeroItem>
          </PageHeroContent>
        </div>
      </section>

      {/* Contact content */}
      <section className="contact-section" style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }} className="contact-grid">

          {/* Contact Details */}
          <Reveal variants={fadeInLeft}>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 700, color: "#1C1917", marginBottom: "32px" }}>
              Contact Information
            </h2>

            <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
              {contactItems.map((item) => (
                <StaggerItem key={item.label} className="page-contact-item" style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
                    className="page-icon-box"
                    style={{
                      width: "44px",
                      height: "44px",
                      background: "#FEF3C7",
                      borderRadius: "12px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: "#B45309",
                      flexShrink: 0,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: "12px", fontWeight: 700, color: "#78716C", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "4px" }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ color: "#1C1917", fontSize: "16px", textDecoration: "none", fontWeight: 600 }}>
                        {item.value}
                      </a>
                    ) : (
                      <span style={{ color: "#1C1917", fontSize: "16px", fontWeight: 600 }}>{item.value}</span>
                    )}
                  </div>
                </StaggerItem>
              ))}
            </StaggerGroup>

            <HoverLift
              style={{
                background: "#F0F7FF",
                borderRadius: "16px",
                padding: "24px",
                border: "1px solid rgba(30,77,123,0.12)",
              }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontWeight: 700, color: "#1E4D7B", marginBottom: "12px" }}>
                Registered Provider
              </p>
              <p style={{ color: "#44403C", fontSize: "14px", lineHeight: 1.7 }}>
                Bedurya Community Care is a registered NDIS provider and DVA provider serving the ACT and Queanbeyan region. We welcome referrals from support coordinators, GPs, and allied health professionals.
              </p>
            </HoverLift>
          </Reveal>

          {/* Form */}
          <Reveal variants={fadeInRight}>
            <ContactForm />
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 1100px) { .contact-grid { gap: 40px !important; } }
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr 1.3fr !important; } }
          @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 767px) { .contact-section { padding: 60px 16px !important; } }
        `}</style>
      </section>
    </>
  );
}
