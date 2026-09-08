import { motion, useReducedMotion } from "motion/react";
import { Link as ScrollLink } from "react-scroll";
import { Doodle, Sticker } from "./ScrapbookBits";

const MotionDiv = motion.div;

const Home = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="home" className="scrap-hero">
      <div className="paper-noise" aria-hidden="true"></div>

      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 sm:py-16 lg:grid-cols-[0.9fr_0.74fr] lg:items-center">
        <MotionDiv
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="hero-note"
        >
          <Sticker tone="mint" rotate="-2deg">open to SWE roles ↗</Sticker>
          <Doodle className="left-[78%] top-4 hidden sm:block">✦</Doodle>
          <Doodle className="left-[88%] top-[36%] hidden lg:block">⋆</Doodle>

          <p className="hero-name">Ei Phyu Phyu Mon</p>
          <h1>Software Engineer</h1>
          <p className="hero-line">
            I build full-stack products, backend APIs and AI-powered tools.
          </p>

          <div className="hero-actions">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-90}
              className="btn-primary focus-ring cursor-pointer"
            >
              see work
              <span aria-hidden="true">→</span>
            </ScrollLink>
            <a
              href="/Ei-Phyu-Phyu-Mon-CV.pdf"
              className="btn-secondary focus-ring"
              download
            >
              resume
            </a>
          </div>

          <div className="hero-small-links">
            <a href="https://github.com/eppm27" target="_blank" rel="noopener noreferrer">
              github ↗
            </a>
            <a
              href="https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin ↗
            </a>
          </div>
        </MotionDiv>

        <MotionDiv
          initial={shouldReduceMotion ? false : { opacity: 0, rotate: 1, y: 14 }}
          animate={{ opacity: 1, rotate: -1.2, y: 0 }}
          transition={{ duration: 0.48, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="hero-scrap"
          aria-label="Short technical notes"
        >
          <Sticker tone="honey" rotate="3deg" className="absolute -right-2 -top-4">
            SYD ✦
          </Sticker>
          <div className="mini-window">
            <div className="window-dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
            <pre>{`<build>
  React
  Python
  APIs
</build>`}</pre>
          </div>
          <div className="scrap-labels">
            <Sticker rotate="-3deg">full stack</Sticker>
            <Sticker tone="sky" rotate="2deg">debugging...</Sticker>
            <Sticker tone="peach" rotate="-1deg">AI tools</Sticker>
          </div>
          <p className="tiny-note">currently somewhere between coding and debugging ◡̈</p>
        </MotionDiv>
      </div>
    </section>
  );
};

export default Home;
