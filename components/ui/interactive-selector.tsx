"use client";
import React, { useState, useEffect, ReactNode } from "react";

interface SelectorOption {
  title: string;
  description: string;
  image: string;
  icon: ReactNode;
}

interface InteractiveSelectorProps {
  options: SelectorOption[];
  heading?: string;
  subheading?: string;
  backgroundColor?: string;
}

const selectorStyles = `
  @keyframes fadeInFromTop {
    0% { opacity: 0; transform: translateY(-20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeInTop {
    opacity: 0;
    transform: translateY(-20px);
    animation: fadeInFromTop 0.8s ease-in-out forwards;
  }
  .delay-300 { animation-delay: 0.3s; }
  .delay-600 { animation-delay: 0.6s; }
  @media (max-width: 767px) {
    .selector-strip {
      flex-direction: column !important;
      height: auto !important;
      border-radius: 16px !important;
    }
    .selector-strip > div {
      flex: none !important;
      height: 80px !important;
      border-left: none !important;
      border-top: 2px solid rgba(255,255,255,0.08) !important;
      background-size: cover !important;
    }
    .selector-strip > div.selector-active {
      height: 220px !important;
    }
  }
`;

const InteractiveSelector = ({
  options,
  heading,
  subheading,
  backgroundColor = "#1E4D7B",
}: InteractiveSelectorProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animatedOptions, setAnimatedOptions] = useState<number[]>([]);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    options.forEach((_, i) => {
      const timer = setTimeout(() => {
        setAnimatedOptions((prev) => [...prev, i]);
      }, 180 * i);
      timers.push(timer);
    });
    return () => timers.forEach((t) => clearTimeout(t));
  }, [options]);

  return (
    <div
      style={{
        position: "relative",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px 24px",
        background: backgroundColor,
        fontFamily: "'Nunito', sans-serif",
        color: "#fff",
        width: "100%",
      }}
    >
      <style dangerouslySetInnerHTML={{ __html: selectorStyles }} />

      {(heading || subheading) && (
        <div style={{ width: "100%", maxWidth: "720px", marginBottom: "48px", textAlign: "center" }}>
          {heading && (
            <h2
              className="animate-fadeInTop delay-300"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(32px, 4vw, 52px)",
                fontWeight: 700,
                color: "#fff",
                marginBottom: "12px",
                lineHeight: 1.1,
              }}
            >
              {heading}
            </h2>
          )}
          {subheading && (
            <p
              className="animate-fadeInTop delay-600"
              style={{ fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7 }}
            >
              {subheading}
            </p>
          )}
        </div>
      )}

      {/* Selector strip */}
      <div
        className="selector-strip"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "1000px",
          height: "420px",
          overflow: "hidden",
          borderRadius: "20px",
          boxShadow: "0 24px 80px rgba(0,0,0,0.35)",
        }}
      >
        {options.map((option, index) => (
          <div
            key={index}
            onClick={() => setActiveIndex(index)}
            className={activeIndex === index ? "selector-active" : ""}
            style={{
              position: "relative",
              flex: activeIndex === index ? "7 1 0%" : "1 1 0%",
              backgroundImage: `url('${option.image}')`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderLeft: index === 0 ? "none" : `2px solid ${activeIndex === index ? "rgba(255,255,255,0.3)" : "rgba(255,255,255,0.08)"}`,
              cursor: "pointer",
              backgroundColor: "#1a1a2e",
              transition: "flex 0.7s cubic-bezier(.4,2,.3,1), background-size 0.7s ease",
              opacity: animatedOptions.includes(index) ? 1 : 0,
              transform: animatedOptions.includes(index) ? "translateX(0)" : "translateX(-60px)",
              overflow: "hidden",
              willChange: "flex",
            }}
          >
            {/* Gradient overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: activeIndex === index
                  ? "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.1) 60%)"
                  : "linear-gradient(to top, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 100%)",
                transition: "background 0.7s ease",
                pointerEvents: "none",
              }}
            />

            {/* Label */}
            <div
              style={{
                position: "absolute",
                left: 0,
                right: 0,
                bottom: "20px",
                display: "flex",
                alignItems: "center",
                gap: "12px",
                padding: "0 16px",
                zIndex: 2,
                pointerEvents: "none",
              }}
            >
              {/* Icon circle */}
              <div
                style={{
                  minWidth: "44px",
                  maxWidth: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  background: "rgba(20,20,20,0.85)",
                  backdropFilter: "blur(10px)",
                  border: "2px solid rgba(255,255,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#F59E0B",
                  flexShrink: 0,
                }}
              >
                {option.icon}
              </div>

              {/* Title + description — only visible when active */}
              <div style={{ overflow: "hidden" }}>
                <div
                  style={{
                    fontWeight: 700,
                    fontSize: "17px",
                    color: "#fff",
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? "translateX(0)" : "translateX(20px)",
                    transition: "opacity 0.5s ease 0.2s, transform 0.5s ease 0.2s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {option.title}
                </div>
                <div
                  style={{
                    fontSize: "14px",
                    color: "rgba(255,255,255,0.75)",
                    opacity: activeIndex === index ? 1 : 0,
                    transform: activeIndex === index ? "translateX(0)" : "translateX(20px)",
                    transition: "opacity 0.5s ease 0.3s, transform 0.5s ease 0.3s",
                    whiteSpace: "nowrap",
                  }}
                >
                  {option.description}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InteractiveSelector;
