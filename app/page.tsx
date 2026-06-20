"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, Home, Activity } from "lucide-react";
import { motion, type Variants } from "framer-motion";
import HeroSection from "@/components/HeroSection";
import InteractiveSelector from "@/components/ui/interactive-selector";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.65, ease: "easeOut" } },
};

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const values = [
  { title: "Respect", desc: "We honour every individual's dignity, choices, and voice." },
  { title: "Excellence", desc: "The highest standard of person-centred care, thoughtfully tailored." },
  { title: "Compassion", desc: "Care that comes from the heart in every interaction." },
  { title: "Integrity", desc: "Honesty, transparency, and accountability in everything we do." },
  { title: "Inclusion", desc: "Celebrating diverse backgrounds and creating spaces where everyone belongs." },
  { title: "Leadership", desc: "Guiding with purpose, inspiring confidence within the community." },
];

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <HeroSection />

      {/* ── ABOUT ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 24px", overflow: "hidden" }}>
        <div
          style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "72px", alignItems: "center" }}
          className="about-grid"
        >
          {/* Text */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.p variants={fadeUp} style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
              Our Story
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 700, color: "#1C1917", marginBottom: "24px", lineHeight: 1.1 }}>
              Supporting Your Journey to Independence
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
              The name <em style={{ color: "#B45309", fontStyle: "italic" }}>"Bedurya"</em> is inspired by Menla, the Medicine Buddha in Tibetan tradition—symbolising healing, wellbeing, and compassion. These values are at the heart of everything we do.
            </motion.p>
            <motion.p variants={fadeUp} style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "32px" }}>
              Proudly serving participants across the ACT and Queanbeyan, our services are guided by three experienced Registered Nurses and a dedicated team of skilled coordinators and disability support workers.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Link
                href="/about"
                style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "15px", color: "#1E4D7B", textDecoration: "none", borderBottom: "2px solid rgba(30,77,123,0.35)", paddingBottom: "2px" }}
              >
                Read our full story →
              </Link>
            </motion.div>
          </motion.div>

          {/* Image with decorative amber block */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            style={{ position: "relative", height: "460px" }}
          >
            {/* Amber offset frame */}
            <div className="about-deco-frame" style={{
              position: "absolute",
              top: "20px",
              right: "-20px",
              width: "calc(100% - 20px)",
              height: "calc(100% - 20px)",
              borderRadius: "20px",
              background: "#B45309",
              opacity: 0.15,
              zIndex: 0,
            }} />
            {/* Amber border accent */}
            <div className="about-deco-frame" style={{
              position: "absolute",
              top: "12px",
              right: "-12px",
              width: "calc(100% - 12px)",
              height: "calc(100% - 12px)",
              borderRadius: "20px",
              border: "2px solid #B45309",
              opacity: 0.35,
              zIndex: 1,
            }} />
            {/* Photo */}
            <div style={{ position: "absolute", inset: 0, borderRadius: "20px", overflow: "hidden", boxShadow: "0 20px 60px rgba(28,25,23,0.14)", zIndex: 2 }}>
              <Image src="/images/activity2.jpg" alt="Bedurya team supporting community" fill sizes="(max-width: 768px) 100vw, 50vw" style={{ objectFit: "cover" }} />
            </div>
          </motion.div>
        </div>
        <style>{`
          @media (max-width: 768px) {
            .about-grid { grid-template-columns: 1fr !important; }
            .about-deco-frame { display: none !important; }
          }
        `}</style>
      </section>

      {/* ── SERVICES ── */}
      <InteractiveSelector
        backgroundColor="#1E4D7B"
        heading="Our Services"
        subheading="A wide range of personalised support services designed to meet the unique needs of each individual."
        options={[
          { title: "Daily Living & Home Support", description: "Personal care, domestic assistance & household tasks", image: "/images/activity1.jpg", icon: <Home size={20} /> },
          { title: "Community & Social Support", description: "Outings, appointments & reliable transport", image: "/images/activity2.jpg", icon: <Users size={20} /> },
          { title: "Health & Wellbeing", description: "Medication assistance & therapeutic support", image: "/images/activity3.jpg", icon: <Heart size={20} /> },
          { title: "Supported Independent Living", description: "Tailored support in a safe home environment", image: "/images/activity4.jpg", icon: <Shield size={20} /> },
          { title: "Nursing & Clinical Care", description: "Wound care, chronic conditions & medication management", image: "/images/activity5.jpg", icon: <Activity size={20} /> },
        ]}
      />

      {/* ── VALUES ── */}
      <section style={{ background: "#F7F5F2", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{ textAlign: "center", marginBottom: "72px" }}
          >
            <motion.p variants={fadeUp} style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
              The Heart of Bedurya
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#1C1917" }}>
              Our Values
            </motion.h2>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "24px" }}
          >
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                variants={fadeUp}
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  padding: "36px 32px 32px",
                  boxShadow: "0 2px 16px rgba(28,25,23,0.06)",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                {/* Ghost number */}
                <span style={{
                  position: "absolute",
                  top: "-10px",
                  right: "16px",
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "96px",
                  fontWeight: 700,
                  color: "#B45309",
                  opacity: 0.07,
                  lineHeight: 1,
                  userSelect: "none",
                  pointerEvents: "none",
                }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {/* Amber top rule */}
                <div style={{ width: "40px", height: "3px", background: "#B45309", borderRadius: "2px", marginBottom: "20px" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "26px", fontWeight: 700, color: "#1C1917", marginBottom: "10px" }}>
                  {v.title}
                </h3>
                <p style={{ color: "#44403C", fontSize: "15px", lineHeight: 1.7 }}>{v.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── TEAM PREVIEW ── */}
      <section style={{ background: "#FFFFFF", padding: "100px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", textAlign: "center" }}>
          <motion.div variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true, amount: 0.2 }}>
            <motion.p variants={fadeUp} style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
              The People Behind the Care
            </motion.p>
            <motion.h2 variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#1C1917", marginBottom: "16px" }}>
              Meet Our Team
            </motion.h2>
            <motion.p variants={fadeUp} style={{ color: "#44403C", fontSize: "17px", maxWidth: "560px", margin: "0 auto 56px", lineHeight: 1.7 }}>
              Guided by Registered Nurses with a passion for making a real difference.
            </motion.p>
          </motion.div>

          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "32px", marginBottom: "48px" }}
          >
            {[
              { name: "Dema", role: "Managing Director", img: "/team/dema.jpg" },
              { name: "Karma", role: "Compliance & Quality Manager", img: "/team/karma.jpg" },
              { name: "Sonam", role: "Business Development Manager", img: "/team/sonam.jpg" },
            ].map((m) => (
              <motion.div key={m.name} variants={fadeUp} style={{ textAlign: "center" }}>
                <div style={{ position: "relative", width: "160px", height: "160px", margin: "0 auto 16px" }}>
                  {/* Decorative ring */}
                  <div style={{ position: "absolute", inset: "-6px", borderRadius: "50%", border: "2px solid #B45309", opacity: 0.25 }} />
                  <div style={{ width: "160px", height: "160px", borderRadius: "50%", overflow: "hidden", boxShadow: "0 8px 32px rgba(28,25,23,0.1)", position: "relative" }}>
                    <Image src={m.img} alt={m.name} fill sizes="160px" style={{ objectFit: "cover" }} />
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "24px", fontWeight: 700, color: "#1C1917", marginBottom: "4px" }}>
                  {m.name}
                </h3>
                <p style={{ color: "#B45309", fontSize: "14px", fontWeight: 600, fontFamily: "'Nunito', sans-serif" }}>
                  {m.role}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <Link href="/team" style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "16px", background: "#1E4D7B", color: "#FFFFFF", padding: "16px 36px", borderRadius: "12px", textDecoration: "none", display: "inline-block", cursor: "pointer" }}>
              Meet the Full Team
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background: "#1E4D7B", padding: "100px 24px", position: "relative", overflow: "hidden" }}>
        {/* Decorative circles */}
        <div style={{ position: "absolute", top: "-80px", left: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(180,83,9,0.12)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "240px", height: "240px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", top: "50%", right: "15%", transform: "translateY(-50%)", width: "120px", height: "120px", borderRadius: "50%", border: "2px solid rgba(245,158,11,0.2)", pointerEvents: "none" }} />

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}
        >
          <motion.h2 variants={fadeUp} style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,52px)", fontWeight: 700, color: "#FFFFFF", marginBottom: "20px", lineHeight: 1.1 }}>
            Ready to Start Your Journey?
          </motion.h2>
          <motion.p variants={fadeUp} style={{ color: "rgba(255,255,255,0.7)", fontSize: "18px", lineHeight: 1.75, marginBottom: "40px" }}>
            Let us walk alongside you. Call us today or send a message and one of our team will be in touch.
          </motion.p>
          <motion.div variants={fadeUp} style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="tel:+61405752984"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "16px", background: "#B45309", color: "#FFFFFF", padding: "16px 32px", borderRadius: "12px", textDecoration: "none", display: "inline-block", cursor: "pointer" }}
            >
              Call +61 (04) 0575 2984
            </a>
            <Link
              href="/contact"
              style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "16px", background: "transparent", color: "#FFFFFF", padding: "16px 32px", borderRadius: "12px", textDecoration: "none", display: "inline-block", border: "2px solid rgba(255,255,255,0.4)", cursor: "pointer" }}
            >
              Send a Message
            </Link>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
