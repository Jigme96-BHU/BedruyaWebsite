"use client";

import { useState } from "react";
import { Phone, Mail, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production, wire this to a form endpoint (e.g. Formspree, Resend, or a Next.js API route)
    setSubmitted(true);
  };

  return (
    <>
      {/* Header */}
      <section
        style={{
          background: "linear-gradient(135deg, #1E4D7B 0%, #1a3d5c 100%)",
          padding: "140px 24px 80px",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div aria-hidden style={{ position: "absolute", top: "-80px", right: "-80px", width: "320px", height: "320px", borderRadius: "50%", background: "rgba(245,158,11,0.1)", pointerEvents: "none" }} />
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", position: "relative" }}>
          <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "13px", fontWeight: 700, color: "#F59E0B", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "16px" }}>
            We&apos;re Here for You
          </p>
          <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,5vw,60px)", fontWeight: 700, color: "#fff", marginBottom: "20px", lineHeight: 1.1 }}>
            Get in Touch
          </h1>
          <p style={{ color: "#CBD5E1", fontSize: "18px", lineHeight: 1.75 }}>
            Whether you&apos;re a participant, family member, or referring health professional—we&apos;re happy to answer your questions and walk you through our services.
          </p>
        </div>
      </section>

      {/* Contact content */}
      <section className="contact-section" style={{ background: "#FFFDF8", padding: "96px 24px" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "64px", alignItems: "start" }} className="contact-grid">

          {/* Contact Details */}
          <div>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "32px", fontWeight: 700, color: "#1C1917", marginBottom: "32px" }}>
              Contact Information
            </h2>

            <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "40px" }}>
              {[
                { icon: <Phone size={20} />, label: "Phone", value: "+61 (04) 0575 2984", href: "tel:+61405752984" },
                { icon: <Mail size={20} />, label: "Email", value: "info@bedurya.com.au", href: "mailto:info@bedurya.com.au" },
                { icon: <MapPin size={20} />, label: "Address", value: "6 Gem Street, Strathnairn ACT 2615", href: null },
                { icon: <Clock size={20} />, label: "Hours", value: "Monday–Saturday, 9:00 AM – 6:00 PM", href: null },
              ].map((item, i) => (
                <div key={i} style={{ display: "flex", gap: "16px", alignItems: "flex-start" }}>
                  <div
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
                </div>
              ))}
            </div>

            {/* NDIS / DVA badges */}
            <div
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
            </div>
          </div>

          {/* Form */}
          <div
            className="contact-form-card"
            style={{
              background: "#fff",
              borderRadius: "20px",
              padding: "48px",
              boxShadow: "0 4px 32px rgba(28,25,23,0.08)",
              border: "1px solid rgba(180,83,9,0.08)",
            }}
          >
            {submitted ? (
              <div style={{ textAlign: "center", padding: "40px 0" }}>
                <CheckCircle size={56} color="#4A7C59" style={{ margin: "0 auto 20px" }} />
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "30px", fontWeight: 700, color: "#1C1917", marginBottom: "12px" }}>
                  Message Received
                </h3>
                <p style={{ color: "#78716C", fontSize: "16px", lineHeight: 1.7 }}>
                  Thank you for getting in touch. A member of our team will respond within one business day.
                </p>
              </div>
            ) : (
              <>
                <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "28px", fontWeight: 700, color: "#1C1917", marginBottom: "32px" }}>
                  Send Us a Message
                </h2>
                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "16px" }} className="form-row">
                    <div>
                      <label htmlFor="name" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#44403C", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Full Name *
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1.5px solid #E5E0D8",
                          fontSize: "15px",
                          outline: "none",
                          fontFamily: "'Nunito', sans-serif",
                          transition: "border-color 200ms",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#B45309")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#44403C", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        value={form.phone}
                        onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        style={{
                          width: "100%",
                          padding: "12px 16px",
                          borderRadius: "10px",
                          border: "1.5px solid #E5E0D8",
                          fontSize: "15px",
                          outline: "none",
                          fontFamily: "'Nunito', sans-serif",
                          transition: "border-color 200ms",
                          boxSizing: "border-box",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "#B45309")}
                        onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                        placeholder="0400 000 000"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="email" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#44403C", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1.5px solid #E5E0D8",
                        fontSize: "15px",
                        outline: "none",
                        fontFamily: "'Nunito', sans-serif",
                        transition: "border-color 200ms",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#B45309")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#44403C", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Subject
                    </label>
                    <select
                      id="subject"
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1.5px solid #E5E0D8",
                        fontSize: "15px",
                        outline: "none",
                        fontFamily: "'Nunito', sans-serif",
                        background: "#fff",
                        cursor: "pointer",
                        boxSizing: "border-box",
                      }}
                    >
                      <option value="">Select a topic...</option>
                      <option value="ndis">NDIS Support Enquiry</option>
                      <option value="dva">DVA Services Enquiry</option>
                      <option value="nursing">Nursing & Clinical Care</option>
                      <option value="sil">Supported Independent Living</option>
                      <option value="referral">Professional Referral</option>
                      <option value="employment">Employment Enquiry</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" style={{ display: "block", fontSize: "13px", fontWeight: 700, color: "#44403C", marginBottom: "6px", textTransform: "uppercase", letterSpacing: "0.05em" }}>
                      Message *
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      style={{
                        width: "100%",
                        padding: "12px 16px",
                        borderRadius: "10px",
                        border: "1.5px solid #E5E0D8",
                        fontSize: "15px",
                        outline: "none",
                        fontFamily: "'Nunito', sans-serif",
                        resize: "vertical",
                        transition: "border-color 200ms",
                        boxSizing: "border-box",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "#B45309")}
                      onBlur={(e) => (e.target.style.borderColor = "#E5E0D8")}
                      placeholder="Tell us how we can help you..."
                    />
                  </div>

                  <button
                    type="submit"
                    style={{
                      fontFamily: "'Nunito', sans-serif",
                      fontWeight: 700,
                      fontSize: "16px",
                      background: "#B45309",
                      color: "#fff",
                      padding: "16px 32px",
                      borderRadius: "12px",
                      border: "none",
                      cursor: "pointer",
                      transition: "background 200ms",
                      width: "100%",
                    }}
                    onMouseEnter={(e) => ((e.target as HTMLElement).style.background = "#92400E")}
                    onMouseLeave={(e) => ((e.target as HTMLElement).style.background = "#B45309")}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        <style>{`
          @media (max-width: 1100px) { .contact-grid { gap: 40px !important; } }
          @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr 1.3fr !important; } }
          @media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; } }
          @media (max-width: 480px) {
            .form-row { grid-template-columns: 1fr !important; }
            .contact-form-card { padding: 24px !important; }
          }
          @media (max-width: 767px) { .contact-section { padding: 60px 16px !important; } }
        `}</style>
      </section>
    </>
  );
}
