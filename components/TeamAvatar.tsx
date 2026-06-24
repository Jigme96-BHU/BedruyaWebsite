"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

type TeamAvatarProps = {
  src: string;
  alt: string;
  size?: number;
  borderColor?: string;
  hover?: boolean;
  className?: string;
};

export default function TeamAvatar({
  src,
  alt,
  size = 160,
  borderColor = "#B45309",
  hover = false,
  className = "",
}: TeamAvatarProps) {
  const reduce = useReducedMotion();
  const ringInset = Math.max(4, Math.round(size * 0.04));

  const avatar = (
    <div
      className={`team-avatar ${className}`.trim()}
      style={{
        position: "relative",
        width: size,
        height: size,
        margin: "0 auto",
        flexShrink: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: "absolute",
          inset: -ringInset,
          borderRadius: "50%",
          border: `2px solid ${borderColor}`,
          opacity: 0.22,
        }}
      />
      <div
        className="team-avatar-frame"
        style={{
          position: "relative",
          width: "100%",
          height: "100%",
          borderRadius: "50%",
          overflow: "hidden",
          border: `4px solid ${borderColor}22`,
          boxShadow: `0 12px 40px ${borderColor}22`,
          background: "#F7F5F2",
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={`${size}px`}
          className="team-avatar-image"
          style={{
            objectFit: "cover",
            objectPosition: "center 18%",
          }}
        />
      </div>
    </div>
  );

  if (!hover || reduce) {
    return avatar;
  }

  return (
    <motion.div
      whileHover={{ scale: 1.03, transition: { duration: 0.35 } }}
      style={{ width: size, margin: "0 auto" }}
    >
      {avatar}
    </motion.div>
  );
}
