import { motion, useReducedMotion } from "motion/react";

const MotionSpan = motion.span;
const MotionDiv = motion.div;

export const Sticker = ({
  children,
  tone = "mint",
  rotate = "-2deg",
  className = "",
}) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <MotionSpan
      className={`sticker sticker-${tone} ${className}`}
      style={{ "--rotate": rotate }}
      whileHover={shouldReduceMotion ? undefined : { rotate: 0, y: -2 }}
      transition={{ duration: 0.18 }}
    >
      {children}
    </MotionSpan>
  );
};

export const SectionLabel = ({ number, children }) => (
  <div className="section-label">
    <span>{number}</span>
    <span>{children}</span>
  </div>
);

export const TechTag = ({ children }) => (
  <span className="tech-tag">{children}</span>
);

export const Annotation = ({ children, className = "" }) => (
  <MotionDiv
    className={`annotation ${className}`}
    whileHover={{ x: 3 }}
    transition={{ duration: 0.18 }}
  >
    {children}
  </MotionDiv>
);

export const Doodle = ({ children, className = "" }) => (
  <span className={`doodle ${className}`} aria-hidden="true">
    {children}
  </span>
);
