"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSlideshow() {
  const [slides, setSlides] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/slides")
      .then((r) => r.json())
      .then((data: string[]) => setSlides(data))
      .catch(() => setSlides(["/slides/activity1.jpg"]));
  }, []);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % slides.length);
    }, 4500);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prev = () => setCurrent((i) => (i - 1 + slides.length) % slides.length);
  const next = () => setCurrent((i) => (i + 1) % slides.length);

  return (
    <section style={{ position: "relative", minHeight: "calc(100vh - 70px)", marginTop: "70px", display: "flex", alignItems: "center", overflow: "hidden" }}>

      {slides.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1.2s ease",
          }}
        >
          <Image src={src} alt="" fill priority={i === 0} className="hero-img" style={{ objectFit: "cover", objectPosition: "80% center" }} sizes="100vw" />
        </div>
      ))}

      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to right, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.45) 55%, rgba(0,0,0,0.05) 100%)",
      }} />

      <div style={{
        position: "absolute",
        inset: "0 0 auto 0",
        height: "160px",
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, transparent 100%)",
      }} />

      <div className="hero-content" style={{
        position: "relative",
        width: "100%",
        maxWidth: "1600px",
        margin: "0 auto",
        padding: "80px 5% 80px 40px",
        display: "flex",
        justifyContent: "flex-start",
      }}>
        <div style={{ maxWidth: "600px", width: "100%" }}>

          <div className="hero-badge" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(255,255,255,0.12)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "100px",
            padding: "6px 16px",
            marginBottom: "28px",
          }}>
            <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.1em" }}>
              NDIS Registered Provider · ACT & Queanbeyan
            </span>
          </div>

          <h1 style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 700,
            color: "#fff",
            lineHeight: 1.0,
            marginBottom: "20px",
          }}>
            <span className="hero-heading-main" style={{ fontSize: "clamp(56px, 6vw, 108px)", display: "block" }}>
              Bringing Light
            </span>
            <span className="hero-heading-sub" style={{ fontSize: "clamp(36px, 4vw, 48px)", color: "#F59E0B", display: "block", marginTop: "4px" }}>
              into Your Journey
            </span>
          </h1>

          <p style={{
            fontFamily: "'Nunito', sans-serif",
            fontSize: "17px",
            color: "rgba(255,255,255,0.78)",
            lineHeight: 1.75,
            marginBottom: "36px",
            maxWidth: "480px",
          }}>
            Bedurya — named for the Medicine Buddha — brings compassionate, nurse-led NDIS support to participants across the ACT and Queanbeyan.
          </p>

          <div className="hero-buttons" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginBottom: "40px" }}>
            <Link
              href="/services"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                background: "#fff",
                color: "#1E4D7B",
                padding: "14px 28px",
                borderRadius: "100px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
              }}
            >
              Explore Services <ArrowRight size={15} />
            </Link>
            <Link
              href="/contact"
              style={{
                fontFamily: "'Nunito', sans-serif",
                fontWeight: 700,
                fontSize: "15px",
                background: "transparent",
                color: "#fff",
                padding: "14px 28px",
                borderRadius: "100px",
                textDecoration: "none",
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                border: "2px solid rgba(255,255,255,0.45)",
                backdropFilter: "blur(4px)",
              }}
            >
              Get in Touch
            </Link>
          </div>

          <div className="hero-trust-badge" style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "rgba(255,255,255,0.1)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255,255,255,0.2)",
            borderRadius: "16px",
            padding: "12px 20px",
          }}>
            <CheckCircle size={18} color="#F59E0B" style={{ flexShrink: 0 }} />
            <div>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontWeight: 700, fontSize: "13px", color: "#fff" }}>NDIS Registered Provider</p>
              <p style={{ fontFamily: "'Nunito', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.6)" }}>Proudly serving ACT & Queanbeyan</p>
            </div>
          </div>

        </div>
      </div>

      <div className="hero-controls" style={{ position: "absolute", bottom: "32px", right: "32px", display: "flex", alignItems: "center", gap: "12px", zIndex: 10 }}>
        <button onClick={prev} aria-label="Previous" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)" }}>
          <ChevronLeft size={16} />
        </button>
        <div style={{ display: "flex", gap: "6px", alignItems: "center" }}>
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              style={{
                height: "6px",
                width: i === current ? "24px" : "6px",
                borderRadius: "100px",
                background: i === current ? "#fff" : "rgba(255,255,255,0.35)",
                border: "none",
                cursor: "pointer",
                transition: "width 0.3s ease, background 0.3s ease",
                padding: 0,
              }}
            />
          ))}
        </div>
        <button onClick={next} aria-label="Next" style={{ width: "36px", height: "36px", borderRadius: "50%", background: "rgba(255,255,255,0.18)", border: "1px solid rgba(255,255,255,0.3)", color: "#fff", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", backdropFilter: "blur(4px)" }}>
          <ChevronRight size={16} />
        </button>
      </div>

      <div className="hero-counter" style={{ position: "absolute", bottom: "36px", left: "32px", fontFamily: "monospace", fontSize: "12px", color: "rgba(255,255,255,0.45)" }}>
        {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
      </div>

      <div className="hero-scroll-cue" style={{ position: "absolute", bottom: "28px", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "6px", zIndex: 10 }}>
        <span style={{ fontFamily: "'Nunito', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(255,255,255,0.45)", textTransform: "uppercase", letterSpacing: "0.12em" }}>Scroll</span>
        <div style={{ width: "1px", height: "36px", background: "linear-gradient(to bottom, rgba(255,255,255,0.45), rgba(255,255,255,0))" }} />
      </div>

      <style dangerouslySetInnerHTML={{ __html: `
        @media (max-width: 1280px) {
          .hero-content { padding: 60px 5% 60px 32px !important; }
        }
        @media (max-width: 768px) {
          .hero-img { object-position: 65% center !important; }
          .hero-content { padding: 40px 20px 90px !important; }
          .hero-heading-main { font-size: clamp(56px, 13vw, 80px) !important; }
          .hero-heading-sub  { font-size: clamp(34px, 8vw,  48px) !important; }
        }
        @media (max-width: 480px) {
          .hero-img { object-position: 60% center !important; }
          .hero-heading-main { font-size: clamp(48px, 13vw, 68px) !important; }
          .hero-heading-sub  { font-size: clamp(28px, 8vw,  40px) !important; }
          .hero-content { padding: 32px 16px 80px !important; }
          .hero-controls { bottom: 16px !important; right: 16px !important; }
          .hero-counter { display: none !important; }
          .hero-scroll-cue { display: none !important; }
        }
      `}} />

    </section>
  );
}
