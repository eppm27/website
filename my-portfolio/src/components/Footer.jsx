import { useTheme } from "../context/ThemeContext.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const contactShortcuts = [
  {
    href: "mailto:eppmon27@gmail.com",
    label: "Email",
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path d="M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z" />
        <path d="m4 7 8 6 8-6" />
      </svg>
    ),
  },
  {
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
    label: "LinkedIn",
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 .02 5 2.5 2.5 0 0 1-.02-5Zm.02 6.5H3V21h2V10Zm4 0H7v11h2v-5.6c0-1.94 2.5-2.1 2.5 0V21h2v-6.32c0-3.47-3.73-3.34-4.5-1.64V10Z" />
      </svg>
    ),
  },
  {
    href: "https://github.com/eppm27",
    label: "GitHub",
    icon: (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.11.79-.25.79-.56v-2.1c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.78 2.73 1.26 3.4.96.1-.75.41-1.26.75-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.07 0 0 .97-.31 3.18 1.19a10.9 10.9 0 0 1 5.8 0c2.2-1.5 3.18-1.19 3.18-1.19.63 1.6.23 2.78.11 3.07.74.81 1.19 1.85 1.19 3.11 0 4.41-2.7 5.39-5.27 5.67.42.36.8 1.07.8 2.16v3.2c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
      </svg>
    ),
  },
];

const Footer = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const year = new Date().getFullYear();

  return (
    <footer className={`${isDark ? "bg-[#0b1020]" : "bg-slate-100"} text-slate-300`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="grid gap-10 text-center sm:text-left lg:grid-cols-[1.15fr_0.95fr_0.9fr]">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-r from-[#2563eb] to-[#3b82f6] font-semibold text-white">
                EM
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.32em] text-[#60a5ff]">Ei Phyu Phyu Mon</p>
                <p className="text-sm text-slate-400">Full-stack engineer in training</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-slate-400">
              Sydney-based, building performant full-stack experiences with React, Next.js, Node/FastAPI, and PostgreSQL. Open to software engineering internships.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {contactShortcuts.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="icon-link focus-ring"
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {icon}
                  <span className="text-sm font-medium">{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#60a5ff]">Navigate</h3>
            <nav className="mt-4 grid gap-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-[#2563eb]">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col items-center sm:items-start">
            <h3 className="text-sm font-semibold uppercase tracking-[0.32em] text-[#60a5ff]">Currently</h3>
            <p className="mt-4 text-sm text-slate-400">Sydney, Australia · Available for internships</p>
            <p className="mt-2 text-sm text-slate-500">Timezone: AEST · Remote-friendly</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span className="text-center sm:text-left">© {year} Ei Phyu Phyu Mon. Crafted with care and curiosity.</span>
          <span className="text-slate-500">Built with React · Vite · Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
