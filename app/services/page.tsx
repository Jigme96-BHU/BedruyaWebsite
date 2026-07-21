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
import { heroImages } from "@/lib/site-images";

const services = [
  {
    title: "Health & Wellbeing Support",
    tagline: "Maintaining your health, wellbeing, and independence.",
    desc: "We provide personalised health and wellbeing support to help NDIS participants manage their daily health needs, improve their quality of life, and maintain independence. Our experienced support team works closely with participants, families, and healthcare professionals to ensure consistent, person-centred care.",
    itemsIntro: "Our Health & Wellbeing services include:",
    items: [
      "Medication assistance & reminders",
      "Therapeutic support",
      "Health monitoring",
      "Health goal planning",
      "Coordination with healthcare professionals",
      "Healthy lifestyle support",
      "Appointment assistance",
      "Wellbeing & independence support",
    ],
    image: "/images/about1.jpg",
  },
  {
    title: "Supported Independent Living (SIL)",
    tagline: "Live independently with the right support.",
    desc: "We provide personalised Supported Independent Living (SIL) services to help NDIS participants build independence, develop daily living skills, and enjoy a safe, comfortable, and supportive home environment.",
    itemsIntro: "Our SIL servicesinclude:",
    items: [
      "Personalised in-home support",
      "Assistance with personal care and daily living activities",
      "Meal planning and preparation",
      "Household tasks and home maintenance",
      "Medication assistance and reminders",
      "Support with shopping and community access",
      "Skill development for independent living",
      "Overnight and 24/7 support options",
      "Assistance with budgeting and managing daily routines",
      "Social participation and building life skills",
      "Support with appointments and transport",
      "Safe, respectful, and supportive shared or individual living environments",
    ],
    image: "/images/about2.jpg",
  },
  {
    title: "Nursing & Clinical Care",
    tagline: "Professional healthcare support in the comfort of your home.",
    desc: "Our qualified Registered Nurses provide high-quality clinical care tailored to your individual health needs, helping you manage medical conditions safely while maintaining your independence.",
    itemsIntro: "Our Nursing & Clinical Care services include:",
    items: [
      "Comprehensive health assessments",
      "Medication management and administration",
      "Wound care and dressing changes",
      "Catheter care and continence support",
      "Stoma care and management",
      "Tracheostomy care",
      "Diabetes management and blood glucose monitoring",
      "Chronic disease management and clinical monitoring",
      "PEG feeding and enteral nutrition support",
      "Vital signs monitoring and health observations",
      "Post-hospital discharge nursing care",
      "Continence assessments and support",
      "Care plan development and clinical reviews",
      "Coordination with GPs, specialists, and allied health professionals",
      "Education and support for participants, families, and carers",
    ],
    image: "/images/nursing-clinical-care.png",
  },
  {
    title: "Daily Living & Home Support",
    tagline: "Comfortable, confident, and in control of your daily routine.",
    desc: "We provide personalised daily living support to help NDIS participants maintain their independence, wellbeing, and quality of life in the comfort of their own home.",
    itemsIntro: "Our Daily Living & Home Support services include:",
    items: [
      "Personal care and hygiene assistance",
      "Showering, dressing, and grooming support",
      "Meal planning and preparation",
      "Household cleaning and domestic assistance",
      "Laundry, ironing, and linen changes",
      "Grocery shopping and essential errands",
      "Medication reminders and daily routine support",
      "Mobility and transfer assistance",
      "Assistance with household organisation",
      "Support with attending appointments",
      "Community access and social participation",
      "Individualised support tailored to your goals",
    ],
    closing:
      "We deliver compassionate, respectful, and person-centred support that empowers you to live safely, comfortably, and as independently as possible.",
    image: heroImages.hero2,
  },
  {
    title: "Community & Social Support",
    tagline: "Staying connected is essential for wellbeing.",
    desc: "We support NDIS participants to build confidence, stay connected with their community, and participate in meaningful social and recreational activities that enhance independence and wellbeing.",
    itemsIntro: "Our Community & Social Support services include:",
    items: [
      "Community participation and social outings",
      "Support to attend medical and therapy appointments",
      "Safe and reliable transport assistance",
      "Shopping and personal errands",
      "Recreation and leisure activities",
      "Support to attend community events and programs",
      "Building social skills and meaningful relationships",
      "Assistance with education, volunteering, and employment activities",
      "Support to develop confidence and independence",
      "Individualised community access based on your goals",
      "Accompaniment to appointments and daily activities",
      "Encouragement to engage in hobbies and interests",
    ],
    closing:
      "We provide friendly, person-centred support that helps participants stay active, connected, and engaged in their community while achieving their NDIS goals.",
    image: "/images/community-social-support.png",
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
                {"itemsIntro" in s && s.itemsIntro && (
                  <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px", fontWeight: 600 }}>
                    {s.itemsIntro}
                  </p>
                )}
                <StaggerGroup as="ul" style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "10px" }}>
                  {s.items.map((item) => (
                    <StaggerItem as="li" key={item} style={{ display: "flex", gap: "10px", alignItems: "flex-start" }}>
                      <CheckCircle size={18} color="#4A7C59" style={{ flexShrink: 0, marginTop: "2px" }} />
                      <span style={{ color: "#44403C", fontSize: "15px" }}>{item}</span>
                    </StaggerItem>
                  ))}
                </StaggerGroup>
                {s.closing && (
                  <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginTop: "24px", marginBottom: 0 }}>
                    {s.closing}
                  </p>
                )}
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
            &ldquo;At Bedurya Community Care, we deliver professional, heartfelt support designed to empower you to live life exactly the way you CHOOSE.&rdquo;
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
