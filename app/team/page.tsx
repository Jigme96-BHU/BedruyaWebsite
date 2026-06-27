"use client";

import { CircularTestimonials } from "@/components/ui/circular-testimonials";
import TeamAvatar from "@/components/TeamAvatar";
import { teamMembers, teamTestimonials } from "@/lib/team-members";
import {
  HeroOrb,
  PageButton,
  PageHeroContent,
  PageHeroItem,
  Reveal,
  StaggerGroup,
  StaggerItem,
  fadeInLeft,
  fadeInRight,
} from "@/components/ui/page-motion";

export default function TeamPage() {
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
        <HeroOrb className="page-hero-orb" style={{ position: "absolute", bottom: "-60px", right: "-60px", width: "280px", height: "280px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <PageHeroContent>
            <PageHeroItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
                The People Behind the Care
              </p>
            </PageHeroItem>
            <PageHeroItem>
              <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
                Meet Our Team
              </h1>
            </PageHeroItem>
            <PageHeroItem>
              <p style={{ color: "#CBD5E1", fontSize: "18px", lineHeight: 1.75 }}>
                Led by experienced Registered Nurses, our dedicated team brings professionalism, expertise, and genuine care to every interaction.
              </p>
            </PageHeroItem>
          </PageHeroContent>
        </div>
      </section>

      {/* Team Members */}
      <section className="team-section" style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "80px" }}>
          {teamMembers.map((member, i) => (
            <Reveal
              key={member.name}
              variants={i % 2 === 0 ? fadeInLeft : fadeInRight}
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(240px, 340px) 1fr",
                gap: "64px",
                alignItems: "start",
              }}
              className="member-row"
            >
              {/* Photo + name */}
              <div style={{ textAlign: "center", order: i % 2 === 0 ? 0 : 1 }}>
                <div style={{ marginBottom: "24px" }}>
                  <TeamAvatar
                    src={member.img}
                    alt={member.name}
                    size={280}
                    borderColor={member.color}
                    hover
                    className="team-avatar--profile"
                  />
                </div>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "36px", fontWeight: 700, color: "#1C1917", marginBottom: "6px" }}>
                  {member.name}
                </h2>
                <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "15px", fontWeight: 700, color: member.color, marginBottom: "20px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                  {member.role}
                </p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", justifyContent: "center" }}>
                  {member.expertise.map((e) => (
                    <span
                      key={e}
                      className="page-tag"
                      style={{
                        background: `${member.color}12`,
                        border: `1px solid ${member.color}30`,
                        color: member.color,
                        fontSize: "12px",
                        fontWeight: 700,
                        padding: "4px 12px",
                        borderRadius: "20px",
                        fontFamily: "'Nunito', sans-serif",
                      }}
                    >
                      {e}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bio */}
              <div style={{ order: i % 2 === 0 ? 1 : 0, paddingTop: "16px" }}>
                <div style={{ borderLeft: `4px solid ${member.color}`, paddingLeft: "24px", marginBottom: "32px" }}>
                  <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "22px", fontStyle: "italic", color: "#1C1917", lineHeight: 1.45 }}>
                    &ldquo;{member.tagline}&rdquo;
                  </p>
                </div>
                {member.bio.map((para, j) => (
                  <p key={j} style={{ color: "#44403C", fontSize: "16px", lineHeight: 1.8, marginBottom: "16px" }}>
                    {para}
                  </p>
                ))}
              </div>
            </Reveal>
          ))}
        </div>
        <style>{`
          @media (max-width: 1100px) {
            .member-row { grid-template-columns: minmax(200px, 280px) 1fr !important; gap: 40px !important; }
          }
          @media (max-width: 768px) {
            .member-row { grid-template-columns: 1fr !important; gap: 32px !important; }
            .member-row > div { order: unset !important; }
          }
          @media (max-width: 767px) { .team-section { padding: 60px 16px !important; } }
        `}</style>
      </section>

      {/* ── Team Showcase ── */}
      <section className="premium-blue-section" style={{ background: "#F0F7FF", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <StaggerGroup style={{ textAlign: "center", marginBottom: "64px" }}>
            <StaggerItem>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#B45309", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "12px" }}>
                In Their Own Words
              </p>
            </StaggerItem>
            <StaggerItem>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(30px,3.5vw,46px)", fontWeight: 700, color: "#1C1917" }}>
                Voices of Our Team
              </h2>
            </StaggerItem>
          </StaggerGroup>
          <Reveal style={{ display: "flex", justifyContent: "center", overflowX: "hidden", width: "100%" }}>
            <CircularTestimonials
              autoplay={true}
              colors={{
                name: "#1E4D7B",
                designation: "#B45309",
                testimony: "#44403C",
                arrowBackground: "#1E4D7B",
                arrowForeground: "#ffffff",
                arrowHoverBackground: "#B45309",
              }}
              fontSizes={{ name: "26px", designation: "15px", quote: "17px" }}
              testimonials={teamTestimonials.map((t) => ({ ...t }))}
            />
          </Reveal>
        </div>
      </section>

      {/* Join the team */}
      <section
        style={{
          background: "linear-gradient(135deg, #FEF3C7 0%, #FFFDF8 100%)",
          padding: "80px 24px",
          textAlign: "center",
          borderTop: "1px solid rgba(180,83,9,0.1)",
        }}
      >
        <Reveal style={{ maxWidth: "600px", margin: "0 auto" }}>
          <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3.5vw,44px)", fontWeight: 700, color: "#1C1917", marginBottom: "16px" }}>
            Want to Work with Us?
          </h2>
          <p style={{ color: "#78716C", fontSize: "17px", lineHeight: 1.75, marginBottom: "36px" }}>
            We&apos;re always looking for compassionate, skilled professionals to join our team. Get in touch to learn about opportunities with Bedurya.
          </p>
          <PageButton href="/contact" variant="primary">
            Get in Touch
          </PageButton>
        </Reveal>
      </section>
    </>
  );
}
