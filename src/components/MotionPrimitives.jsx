import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerChildren = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

export const Reveal = ({ as = "section", className = "", children, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.section;

  return (
    <Component
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
      variants={fadeUp}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </Component>
  );
};

export const Stagger = ({ className = "", children, ...props }) => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={shouldReduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.04 }}
      variants={staggerChildren}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export const MotionItem = ({ className = "", children, ...props }) => (
  <motion.div
    variants={fadeUp}
    transition={{ duration: 0.42, ease: [0.22, 1, 0.36, 1] }}
    className={className}
    {...props}
  >
    {children}
  </motion.div>
);

export const ScrollProgress = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 28,
    mass: 0.25,
  });

  return (
    <motion.div
      className="scroll-progress"
      style={{ scaleX }}
      aria-hidden="true"
    />
  );
};

export const SpotlightCard = ({ as = "article", className = "", children, ...props }) => {
  const shouldReduceMotion = useReducedMotion();
  const Component = motion[as] || motion.article;

  const handlePointerMove = (event) => {
    if (shouldReduceMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--spotlight-x", `${event.clientX - rect.left}px`);
    event.currentTarget.style.setProperty("--spotlight-y", `${event.clientY - rect.top}px`);
  };

  return (
    <Component
      className={`spotlight-card ${className}`}
      onPointerMove={handlePointerMove}
      whileHover={shouldReduceMotion ? undefined : { y: -4 }}
      transition={{ duration: 0.22, ease: "easeOut" }}
      {...props}
    >
      {children}
    </Component>
  );
};
