import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

const MotionNav = motion.nav;

const navLinks = [
  { href: "about", label: "01 about" },
  { href: "projects", label: "02 work" },
  { href: "experience", label: "03 experience" },
];

const socialLinks = [
  {
    href: "https://github.com/eppm27",
    label: "GitHub",
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
    label: "LinkedIn",
    icon: (
      <svg
        aria-hidden="true"
        width="17"
        height="17"
        viewBox="0 0 382 382"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [isMenuOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <MotionNav
        animate={{
          backgroundColor: isScrolled ? "rgba(255, 255, 255, 0.88)" : "rgba(255, 255, 255, 0.72)",
          boxShadow: isScrolled
            ? "0 18px 50px rgba(16, 24, 40, 0.12)"
            : "0 10px 34px rgba(16, 24, 40, 0.07)",
        }}
        transition={{ duration: 0.22 }}
        className="mx-auto grid max-w-6xl grid-cols-[auto_auto] items-center gap-4 rounded-3xl border border-ink/10 px-4 py-3 backdrop-blur-xl lg:grid-cols-[1fr_auto_1fr] lg:px-5"
      >
        <Link
          to="home"
          smooth
          duration={500}
          offset={-88}
          className="focus-ring flex min-w-0 cursor-pointer items-center gap-3 rounded-2xl"
        >
          <span className="brand-mark">EM</span>
          <span className="hidden min-w-0 sm:block">
            <span className="block whitespace-nowrap text-xs font-black uppercase tracking-[0.26em] text-ink/44">
              Ei Phyu Phyu Mon
            </span>
            <span className="block whitespace-nowrap text-sm font-bold text-ink">
              Software Engineer
            </span>
          </span>
        </Link>

        <div className="hidden items-center justify-center gap-9 lg:flex">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              smooth
              duration={500}
              offset={-88}
              spy
              activeClass="active-link"
              className="focus-ring nav-underline relative cursor-pointer whitespace-nowrap rounded-full px-1 py-2 text-sm font-bold text-ink/58 transition-colors hover:text-ink"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-2 lg:flex">
          <a
            href="/Ei-Phyu-Phyu-Mon-CV.pdf"
            className="nav-resume focus-ring"
            download
          >
            resume ↗
          </a>
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              aria-label={link.label}
              className="icon-button focus-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              {link.icon}
            </a>
          ))}
        </div>

        <div className="flex items-center justify-end lg:hidden">
          <button
            type="button"
            className="icon-button focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8" fill="none">
              {isMenuOpen ? (
                <path d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </MotionNav>

      {isMenuOpen && (
        <div className="mx-auto mt-2 max-w-6xl rounded-3xl border border-ink/10 bg-white/92 p-4 shadow-[0_18px_50px_rgba(16,24,40,0.12)] backdrop-blur-xl lg:hidden">
          <div className="grid gap-2">
            {[...navLinks, { href: "contact", label: "04 contact" }].map(({ href, label }) => (
              <Link
                key={href}
                to={href}
                smooth
                duration={500}
                offset={-88}
                onClick={() => setIsMenuOpen(false)}
                className="focus-ring cursor-pointer rounded-2xl px-3 py-2 text-sm font-bold text-ink/68 transition hover:bg-mint/18 hover:text-ink"
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <a
              href="/Ei-Phyu-Phyu-Mon-CV.pdf"
              className="nav-resume focus-ring justify-center"
              download
              onClick={() => setIsMenuOpen(false)}
            >
              resume ↗
            </a>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="icon-button focus-ring"
                aria-label={link.label}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
