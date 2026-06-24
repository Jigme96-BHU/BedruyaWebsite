"use client";

import Link from "next/link";
import {
  motion,
  useReducedMotion,
  type Variants,
} from "framer-motion";
import {
  fadeIn,
  fadeInLeft,
  fadeInRight,
  fadeUp,
  noMotionVariants,
  scaleIn,
  staggerContainer,
  viewportOnce,
} from "@/lib/motion";

type MotionLayoutProps = {
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};

type RevealProps = MotionLayoutProps & {
  variants?: Variants;
  delay?: number;
};

export function Reveal({
  children,
  variants = fadeUp,
  delay = 0,
  className,
  style,
}: RevealProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      style={style}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}

type StaggerGroupProps = MotionLayoutProps & {
  as?: "div" | "ul" | "ol";
};

export function StaggerGroup({
  children,
  as = "div",
  className,
  style,
}: StaggerGroupProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag
      className={className}
      style={style}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={viewportOnce}
    >
      {children}
    </MotionTag>
  );
}

type StaggerItemProps = MotionLayoutProps & {
  variants?: Variants;
  as?: "div" | "li";
};

export function StaggerItem({
  children,
  variants = fadeUp,
  as = "div",
  className,
  style,
}: StaggerItemProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    const Tag = as;
    return <Tag className={className} style={style}>{children}</Tag>;
  }

  const MotionTag = motion[as] as typeof motion.div;

  return (
    <MotionTag className={className} style={style} variants={variants}>
      {children}
    </MotionTag>
  );
}

export function PageHeroContent({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <>{children}</>;
  }

  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      animate="show"
    >
      {children}
    </motion.div>
  );
}

export function PageHeroItem({
  children,
  className,
  style,
}: MotionLayoutProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={className} style={style}>{children}</div>;
  }

  return (
    <motion.div className={className} style={style} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

export function HeroOrb({ style, className }: { style: React.CSSProperties; className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div aria-hidden className={className} style={style} />;
  }

  return (
    <motion.div
      aria-hidden
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
    />
  );
}

export function HoverLift({
  children,
  className,
  style,
}: MotionLayoutProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className ? `page-hover-lift ${className}` : "page-hover-lift"} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className ? `page-hover-lift ${className}` : "page-hover-lift"}
      style={style}
      whileHover={{ y: -4, transition: { duration: 0.25 } }}
      whileTap={{ scale: 0.995 }}
    >
      {children}
    </motion.div>
  );
}

export function HoverImageWrap({
  children,
  className,
  style,
}: MotionLayoutProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      style={style}
      whileHover="hover"
      initial="rest"
      variants={{
        rest: {},
        hover: {},
      }}
    >
      <motion.div
        style={{ width: "100%", height: "100%" }}
        variants={{
          rest: { scale: 1 },
          hover: { scale: 1.03, transition: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } },
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

type PageButtonProps = {
  href: string;
  variant?: "primary" | "secondary" | "blue";
  children: React.ReactNode;
  external?: boolean;
};

const buttonClass = {
  primary: "page-btn page-btn-primary",
  secondary: "page-btn page-btn-secondary",
  blue: "page-btn page-btn-blue",
};

export function PageButton({
  href,
  variant = "primary",
  children,
  external,
}: PageButtonProps) {
  const reduce = useReducedMotion();
  const className = buttonClass[variant];

  const content = reduce ? (
    <span className={className}>{children}</span>
  ) : (
    <motion.span
      className={className}
      whileHover={{ y: -2, transition: { duration: 0.2 } }}
      whileTap={{ scale: 0.98 }}
    >
      {children}
    </motion.span>
  );

  if (external || href.startsWith("tel:") || href.startsWith("mailto:")) {
    return (
      <a href={href} className="page-btn-link">
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className="page-btn-link">
      {content}
    </Link>
  );
}

export { fadeUp, fadeIn, fadeInLeft, fadeInRight, scaleIn, noMotionVariants };
