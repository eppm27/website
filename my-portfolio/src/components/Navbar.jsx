import { Link } from "react-scroll";
import { useState, useEffect } from "react";

const sections = [
  { name: "home", label: "Home" },
  { name: "about", label: "About" },
  { name: "skills", label: "Skills" },
  { name: "experience", label: "Experience" },
  { name: "projects", label: "Projects" },
  { name: "contact", label: "Contact" },
];

const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (!isMenuOpen) return;
    const closeOnResize = () => setIsMenuOpen(false);
    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, [isMenuOpen]);

  const navLinkClasses = (name) =>
    `relative px-3 py-2 text-sm font-medium transition-colors duration-200 hover:text-blue-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-200 ${
      activeSection === name ? "text-blue-600" : "text-slate-600"
    }`;

  return (
    <div
      className={`fixed top-0 inset-x-0 z-[1000] transition-all duration-300 ${
        isScrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 sm:py-4">
        <Link
          to="home"
          smooth
          duration={600}
          offset={-80}
          className="flex items-center gap-2 cursor-pointer select-none"
        >
          <div className="h-9 w-9 rounded-full bg-blue-600/10 text-blue-600 flex items-center justify-center font-display font-semibold">
            EM
          </div>
          <div className="hidden sm:flex flex-col">
            <span className="text-sm uppercase tracking-[0.3em] text-slate-500">
              Software Engineer
            </span>
            <span className="font-display text-lg text-slate-800">
              Ei Phyu Phyu Mon
            </span>
          </div>
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {sections.map((section) => (
            <Link
              key={section.name}
              to={section.name}
              smooth
              duration={600}
              offset={-80}
              spy
              activeClass="active-link"
              onSetActive={() => setActiveSection(section.name)}
              className={navLinkClasses(section.name)}
            >
              {section.label}
              {activeSection === section.name && (
                <span className="absolute left-3 right-3 -bottom-1 h-0.5 rounded-full bg-blue-500"></span>
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Link
            to="contact"
            smooth
            duration={600}
            offset={-80}
            className="hidden rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-500 md:inline-flex"
          >
            Let's talk
          </Link>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-600 shadow-sm transition hover:border-blue-200 hover:text-blue-600 md:hidden"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            aria-label="Toggle navigation menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-2xl bg-white/95 p-4 shadow-lg ring-1 ring-slate-200">
            <div className="flex flex-col gap-2">
              {sections.map((section) => (
                <Link
                  key={section.name}
                  to={section.name}
                  smooth
                  duration={600}
                  offset={-80}
                  spy
                  activeClass="active-link"
                  onSetActive={() => setActiveSection(section.name)}
                  onClick={() => setIsMenuOpen(false)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                    activeSection === section.name
                      ? "bg-blue-50 text-blue-600"
                      : "text-slate-600 hover:bg-slate-100"
                  }`}
                >
                  {section.label}
                </Link>
              ))}
              <Link
                to="contact"
                smooth
                duration={600}
                offset={-80}
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-blue-600 px-4 py-2 text-sm font-semibold text-white"
              >
                Let's talk
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
