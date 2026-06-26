"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

export default function AboutSlideshow() {
  const [images, setImages] = useState<string[]>([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    fetch("/api/about-images")
      .then((r) => r.json())
      .then((data: string[]) => setImages(data))
      .catch(() => setImages([]));
  }, []);

  useEffect(() => {
    if (images.length === 0) return;
    const timer = setInterval(() => {
      setCurrent((i) => (i + 1) % images.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [images.length]);

  if (images.length === 0) return null;

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {images.map((src, i) => (
        <div
          key={src}
          style={{
            position: "absolute",
            inset: 0,
            opacity: i === current ? 1 : 0,
            transition: "opacity 1s ease",
          }}
        >
          <Image
            src={src}
            alt="Bedurya Community Care"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: "cover" }}
            priority={i === 0}
          />
        </div>
      ))}

      {/* Dot indicators */}
      <div style={{
        position: "absolute",
        bottom: "12px",
        left: "50%",
        transform: "translateX(-50%)",
        display: "flex",
        gap: "6px",
        zIndex: 10,
      }}>
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Image ${i + 1}`}
            style={{
              width: i === current ? "20px" : "6px",
              height: "6px",
              borderRadius: "100px",
              background: i === current ? "#fff" : "rgba(255,255,255,0.45)",
              border: "none",
              cursor: "pointer",
              padding: 0,
              transition: "width 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
}
