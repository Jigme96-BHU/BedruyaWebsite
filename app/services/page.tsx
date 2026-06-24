"use client";

import Image from "next/image";
import { CheckCircle } from "lucide-react";
import {
  HeroOrb,
  HoverImageWrap,
  PageButton,
  PageHeroContent,
  PageHeroItem,
  Reveal,
  StaggerGroup,
  StaggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/page-motion";

const services = [
  {
    title: "Daily Living & Home Support",
    tagline: "Comfortable, confident, and in control of your routine.",
    desc: "We provide practical, respectful support with everyday activities, helping you feel comfortable, confident, and in control of your routine.",
    items: [
      "Personal care and hygiene support",
      "Domestic assistance and household tasks",
      "Cleaning, laundry, and meal preparation",
      "Shopping and errands assistance",
    ],
    image: "/images/activity1.jpg",
  },
  {
    title: "Community & Social Support",
    tagline: "Staying connected is essential for wellbeing.",
    desc: "We support participants to attend social outings, community activities, and medical appointments, including safe and reliable transport services.",
    items: [
      "Social outings and community activities",
      "Medical and therapy appointments",
      "Safe and reliable transport",
      "Building and maintaining social connections",
    ],
    image: "/images/activity2.jpg",
  },
  {
    title: "Health & Wellbeing Support",
    tagline: "Maintaining your health and independence.",
    desc: "Our team offers medication assistance and prompts, along with therapeutic support to help you maintain your health and independence.",
    items: [
      "Medication assistance and prompts",
      "Therapeutic support and monitoring",
      "Health goal planning and tracking",
      "Coordination with healthcare providers",
    ],
    image: "/images/activity3.jpg",
  },
  {
    title: "Supported Independent Living (SIL)",
    tagline: "Live as independently as possible.",
    desc: "We empower individuals to live as independently as possible, providing tailored support within a safe and supportive home environment.",
    items: [
      "Tailored in-home support packages",
      "24/7 availability options",
      "Support with daily routines and decisions",
      "Safe and supportive home environments",
    ],
    image: "/images/activity4.jpg",
  },
  {
    title: "Nursing & Clinical Care",
    tagline: "Professional healthcare support at home.",
    desc: "Led by experienced Registered Nurses, our clinical services ensure professional, high-quality healthcare support at home.",
    items: [
      "Wound care and management",
      "Catheter care and support",
      "Stoma care and management",
      "Tracheostomy care",
      "Chronic condition monitoring (diabetes, etc.)",
      "Ongoing clinical monitoring",
      "Medication management and assistance",
    ],
    image: "/images/activity5.jpg",
  },
];

export default function ServicesPage() {
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
        <HeroOrb className="page-hero-orb" style={{ position: "absolute", top: "-80px", left: "-80px", width: "300px", height: "300px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <PageHeroContent>
            <PageHeroItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Bringing Light into Your Life&apos;s Journey
              </p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
                Our Services
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p style={{ color: "#CBD5E1", fontSize: "18px", lineHeight: 1.75, maxWidth: "560px", margin: "0 auto" }}>
                A wide range of personalised support services designed to meet the unique needs of each individual—whether living with a disability or simply needing extra assistance in daily life.
              </p>
            </PageHeroItem>
          </PageHeroContent>
        </div>
      </section>

      {/* Services */}
      <section className="services-section" style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {services.map((s, i) => (
            <Reveal
              key={s.title}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: "64px",
                alignItems: "center",
              }}
              className="service-row"
            >
              {/* Text — alternate sides */}
              <div style={{ order: i % 2 === 0 ? 0 : 1 }}>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,38px)", fontWeight: 700, color: "#1C1917", marginBottom: "8px", lineHeight: 1.1 }}>
                  {s.title}
                </h2>
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "20px", fontStyle: "italic", color: "#B45309", marginBottom: "16px" }}>
                  {s.tagline}
                </p>
                <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "24px" }}>{s.desc}</p>
                <StaggerGroup as="ul" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.items.map((item) => (
                    <StaggerItem as="li" key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckCircle size={18} color="#4A7C59" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#44403C", fontSize: "15px" }}>{item}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
              </div>

              {/* Image */}
              <HoverImageWrap
                className="service-image premium-image-frame"
                style={{
                  order: i % 2 === 0 ? 1 : 0,
                  position: "relative",
                  height: "380px",
                  borderRadius: "20px",
                  overflow: "hidden",
                  boxShadow: "0 16px 48px rgba(28,25,23,0.12)",
                }}
              >
                <Image src={s.image} alt={s.title} fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: i % 2 === 0
                      ? "linear-gradient(to right, transparent 60%, rgba(30,77,123,0.15))"
                      : "linear-gradient(to left, transparent 60%, rgba(180,83,9,0.12))",
                    pointerEvents: "none",
                  }}
                />
              </HoverImageWrap>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 1100px) { .service-row { gap: 40px !important; } }
          @media (max-width: 768px) {
            .service-row { grid-template-columns: 1fr !important; gap: 24px !important; }
            .service-row > div { order: unset !important; }
            .service-image { height: 260px !important; }
          }
          @media (max-width: 767px) { .services-section { padding: 60px 16px !important; } }
        `}</style>
      </section>

      {/* Closing promise */}
      <section className="premium-cta-section" style={{ background: "#FEF3C7", padding: "80px 24px", textAlign: "center" }}>
        <Reveal style={{ maxWidth: "700px", margin: "0 auto" }}>
          <p
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(22px,3vw,34px)",
              fontWeight: 700,
              fontStyle: "italic",
              color: "#1C1917",
              lineHeight: 1.4,
              marginBottom: "40px",
            }}
          >
            &ldquo;At Bedurya Community Care, every service is delivered with compassion, professionalism, and a genuine commitment to helping you live life your way.&rdquo;
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <PageButton href="tel:+61405752984" variant="primary" external>
              Call Us Today
            </PageButton>
            <PageButton href="/contact" variant="blue">
              Make an Enquiry
            </PageButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
