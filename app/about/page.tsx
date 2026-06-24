"use client";

import Image from "next/image";
import {
  HeroOrb,
  HoverImageWrap,
  HoverLift,
  PageButton,
  PageHeroContent,
  PageHeroItem,
  Reveal,
  StaggerGroup,
  StaggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/page-motion";

const values = [
  {
    title: "Respect",
    desc: "We honour every individual's dignity, choices, and voice. Everyone is valued equally, and we create an environment where people feel heard, respected, and empowered.",
  },
  {
    title: "Excellence",
    desc: "We are committed to delivering the highest standard of person-centred care. Every service we provide is thoughtfully tailored to meet the unique needs, goals, and aspirations of each participant.",
  },
  {
    title: "Empathy, Compassion & Care",
    desc: "Care is more than a service—it's how we connect. We approach every interaction with genuine empathy, kindness, and compassion, ensuring our support comes from the heart.",
  },
  {
    title: "Integrity & Accountability",
    desc: "Trust is the foundation of our relationships. We act with honesty, transparency, and professionalism, taking full responsibility for the quality and consistency of our services.",
  },
  {
    title: "Diversity & Inclusion",
    desc: "We celebrate individuality. By embracing diverse backgrounds, cultures, and perspectives, we create inclusive spaces where everyone feels safe, valued, and supported.",
  },
  {
    title: "Leadership",
    desc: "We lead with purpose and example. Our team is driven by a shared commitment to excellence, inspiring confidence and building a positive, trusted presence within the community.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section
        className="page-hero-banner"
        style={{
          background: "linear-gradient(135deg, #1E4D7B 0%, #1a3d5c 100%)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <HeroOrb className="page-hero-orb" style={{ position: "absolute", top: "-80px", right: "-80px", width: "350px", height: "350px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "800px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <PageHeroContent>
            <PageHeroItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                Our Story
              </p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
                About Bedurya Community Care
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p style={{ color: "#CBD5E1", fontSize: "18px", lineHeight: 1.75 }}>
                Supporting your journey to independence with compassion, professionalism, and genuine care.
              </p>
            </PageHeroItem>
          </PageHeroContent>
        </div>
      </section>

      {/* Vision Section */}
      <section style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }} className="split-grid">
          <Reveal variants={fadeInLeft}>
            <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Our Vision
            </p>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 700, color: "#1C1917", marginBottom: "28px", lineHeight: 1.1 }}>
              Bringing Light into<br />
              <em style={{ color: "#B45309" }}>Your Life&apos;s Journey</em>
            </h2>
            <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              At Bedurya Community Care, our vision is to empower individuals to live with independence, dignity, and purpose. We strive to create a community where every person is supported to achieve a fulfilling life—rich in opportunity, connection, and wellbeing.
            </p>
            <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              We are committed to enhancing quality of life by promoting health, happiness, and personal growth. Through compassionate, person-centred support, we walk alongside each participant, helping turn their goals, dreams, and aspirations into reality.
            </p>
            <p style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8 }}>
              Our vision is simple yet powerful: to build a future where everyone feels valued, supported, and empowered to live life on their own terms.
            </p>
          </Reveal>

          <Reveal variants={fadeInRight}>
            <HoverImageWrap className="split-image premium-image-frame" style={{ position: "relative", height: "480px", borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(28,25,23,0.12)" }}>
              <Image src="/images/activity2.jpg" alt="Bedurya Community Care vision" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(30,77,123,0.3) 0%, transparent 60%)", pointerEvents: "none" }} />
              <div
                style={{
                  position: "absolute",
                  bottom: "28px",
                  left: "28px",
                  right: "28px",
                  background: "rgba(255,253,248,0.95)",
                  borderRadius: "14px",
                  padding: "20px 24px",
                  backdropFilter: "blur(8px)",
                }}
              >
                <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "18px", fontStyle: "italic", color: "#1C1917", lineHeight: 1.4 }}>
                  &ldquo;You&apos;re not just receiving support—you&apos;re gaining a trusted partner in your journey.&rdquo;
                </p>
              </div>
            </HoverImageWrap>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .split-grid { gap: 40px !important; }
          }
          @media (max-width: 768px) {
            .split-grid { grid-template-columns: 1fr !important; gap: 32px !important; }
            .split-image { height: 280px !important; }
          }
        `}</style>
      </section>

      {/* Our Story */}
      <section style={{ background: "#F0F7FF", padding: "96px 24px" }} className="premium-blue-section">
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          <StaggerGroup style={{ textAlign: "center", marginBottom: "56px" }}>
            <StaggerItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#1E4D7B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                Who We Are
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 700, color: "#1C1917" }}>
                Bedurya Community Care
              </h2>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "40px", marginBottom: "48px" }} className="story-grid">
            {[
              { title: "The Meaning of Our Name", body: <>The name <strong style={{ color: "#B45309" }}>&ldquo;Bedurya&rdquo;</strong> is inspired by Menla, the Medicine Buddha in Tibetan tradition—symbolising healing, wellbeing, and compassion. These values are at the heart of everything we do.</> },
              { title: "Why We Started", body: "Founded in response to the growing need for reliable and empowering disability support, Bedurya Community Care focuses on helping individuals live confidently in their own homes while achieving their personal goals." },
              { title: "What Sets Us Apart", body: "Our services are guided by three experienced Registered Nurses, supported by dedicated care coordinators and disability support workers—bringing professionalism, expertise, and genuine care to every interaction." },
              { title: "Registered Providers", body: "Proudly serving participants across the ACT and Queanbeyan, we are a registered NDIS provider and DVA Provider, committed to delivering high-quality, person-centred support." },
            ].map((card) => (
              <StaggerItem key={card.title}>
                <HoverLift style={{ background: "#fff", borderRadius: "16px", padding: "32px", boxShadow: "0 2px 16px rgba(28,25,23,0.06)", height: "100%" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontWeight: 700, color: "#1E4D7B", marginBottom: "12px" }}>
                    {card.title}
                  </h3>
                  <p style={{ color: "#44403C", fontSize: "15px", lineHeight: 1.75 }}>{card.body}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerGroup>

          <Reveal>
            <div
              className="premium-quote-block"
              style={{
                background: "linear-gradient(135deg, #1E4D7B, #2E6FAD)",
                borderRadius: "20px",
                padding: "40px",
                textAlign: "center",
              }}
            >
              <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(20px,2.5vw,28px)", fontStyle: "italic", color: "#fff", lineHeight: 1.5 }}>
                &ldquo;At Bedurya, your safety, wellbeing, and individual needs always come first. We take the time to understand you—so we can deliver tailored support that truly makes a difference.&rdquo;
              </p>
            </div>
          </Reveal>
        </div>
        <style>{`
          @media (max-width: 640px) { .story-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 767px) { .about-section-pad { padding: 60px 16px !important; } }
        `}</style>
      </section>

      {/* Values */}
      <section style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <StaggerGroup style={{ textAlign: "center", marginBottom: "64px" }}>
            <StaggerItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                The Heart of Bedurya
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,3.5vw,48px)", fontWeight: 700, color: "#1C1917", marginBottom: "12px" }}>
                Our Values
              </h2>
            </StaggerItem>
            <StaggerItem>
              <p style={{ color: "#78716C", fontSize: "17px", maxWidth: "520px", margin: "0 auto" }}>
                At Bedurya, our values are not just words—they are the promise we deliver every day.
              </p>
            </StaggerItem>
          </StaggerGroup>

          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}>
            {values.map((v) => (
              <StaggerItem key={v.title}>
                <HoverLift
                  style={{
                    background: "#fff",
                    borderRadius: "16px",
                    padding: "32px",
                    borderTop: "4px solid #B45309",
                    boxShadow: "0 2px 16px rgba(28,25,23,0.05)",
                    height: "100%",
                  }}
                >
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "#1C1917", marginBottom: "12px" }}>
                    {v.title}
                  </h3>
                  <p style={{ color: "#78716C", fontSize: "15px", lineHeight: 1.75 }}>{v.desc}</p>
                </HoverLift>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* CTA */}
      <section className="premium-cta-section" style={{ background: "#FEF3C7", padding: "80px 24px", textAlign: "center" }}>
        <Reveal style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "#1C1917", marginBottom: "16px" }}>
            Want to Know More?
          </h2>
          <p style={{ color: "#78716C", fontSize: "17px", lineHeight: 1.7, marginBottom: "36px" }}>
            Meet our team or learn about our services. We&apos;re always happy to have a conversation.
          </p>
          <div style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <PageButton href="/team" variant="blue">
              Meet Our Team
            </PageButton>
            <PageButton href="/contact" variant="primary">
              Get in Touch
            </PageButton>
          </div>
        </Reveal>
      </section>
    </>
  );
}
