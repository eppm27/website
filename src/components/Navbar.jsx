import { useEffect, useState } from "react";
import { Link } from "react-scroll";
import { useTheme } from "../context/ThemeContext.jsx";

const navLinks = [
  { href: "about", label: "About" },
  { href: "projects", label: "Projects" },
  { href: "skills", label: "Skills" },
  { href: "experience", label: "Experience" },
  { href: "contact", label: "Contact" },
];

const contactShortcuts = [
  {
    href: "mailto:eppmon27@gmail.com",
    label: "Email",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      >
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
    label: "LinkedIn",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 382 382"
        fill="#000000"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
        <g id="SVGRepo_iconCarrier">
          <path style={{ fill: "#ffffff" }} d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
        </g>
      </svg>
    ),
  },
  {
    href: "https://github.com/eppm27",
    label: "GitHub",
    icon: (
      <svg
        aria-hidden="true"
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

const Navbar = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
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

  const shellStyles = isDark
    ? "bg-slate-950/80 border border-white/8 shadow-[0_8px_30px_rgba(0,0,0,0.18)]"
    : "bg-white/85 border border-slate-200/80 shadow-[0_8px_24px_rgba(15,23,42,0.06)]";

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled ? "pt-3" : "pt-4"
      }`}
    >
      <nav
        className={`mx-auto flex w-full max-w-6xl items-center justify-between rounded-full px-4 py-3 backdrop-blur-md sm:px-6 ${shellStyles}`}
      >
        <Link
          to="home"
          smooth
          duration={500}
          offset={-80}
          className="focus-ring flex cursor-pointer select-none items-center gap-3 rounded-full px-2 py-1.5 transition-transform duration-200 hover:-translate-y-[1px]"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-sage-600 font-semibold text-white transition-transform duration-200 hover:scale-105">
            EM
          </div>
          <div className="hidden flex-col text-left sm:flex">
            <span
              className={`text-[10px] uppercase tracking-[0.35em] ${
                isDark ? "text-slate-400" : "text-slate-500"
              }`}
            >
              Ei Phyu Phyu Mon
            </span>
            <span
              className={`text-sm font-semibold tracking-tight ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Full-Stack Engineer in Training
            </span>
          </div>
        </Link>

        <div
          className={`hidden items-center gap-1 rounded-full px-2 py-1 md:flex ${shellStyles}`}
        >
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              to={href}
              smooth
              duration={500}
              offset={-80}
              spy
              activeClass="active-link"
              className="focus-ring relative rounded-full px-3 py-1.5 text-sm font-medium text-slate-500 transition-colors duration-200 hover:text-sage-600"
            >
              {label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          {contactShortcuts.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              className="icon-link focus-ring"
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              {icon}
              <span className="text-sm font-medium">{label}</span>
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            className="icon-button focus-ring"
            aria-label="Toggle navigation menu"
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
          >
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.8"
              fill="none"
            >
              {isMenuOpen ? (
                <path d="M6 18 18 6M6 6l12 12" />
              ) : (
                <path d="M3 6h18M3 12h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className={`mx-4 mb-4 rounded-2xl p-4 ${shellStyles}`}>
            <div className="flex flex-col gap-2">
              {navLinks.map(({ href, label }) => (
                <Link
                  key={href}
                  to={href}
                  smooth
                  duration={500}
                  offset={-80}
                  spy
                  activeClass="active-link"
                  onClick={() => setIsMenuOpen(false)}
                  className="focus-ring rounded-xl px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-sage-600/8 hover:text-sage-700"
                >
                  {label}
                </Link>
              ))}
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {contactShortcuts.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  className="icon-button focus-ring flex-1 justify-center"
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    href.startsWith("http") ? "noopener noreferrer" : undefined
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
