import { useTheme } from "../context/ThemeContext.jsx";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
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
    <footer className={`${isDark ? "bg-[#0b1020] text-slate-300" : "bg-slate-50 text-slate-700"} border-t ${isDark ? "border-white/8" : "border-slate-200"}`}>
      <div className="mx-auto w-full max-w-6xl px-4 py-12 sm:px-6 sm:py-14">
        <div className="grid gap-8 md:grid-cols-[1.2fr_0.8fr] md:gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sage-600 font-semibold text-white">EM</div>
              <div>
                <p className={`text-xs uppercase tracking-[0.35em] ${isDark ? "text-sage-400" : "text-sage-600"}`}>Ei Phyu Phyu Mon</p>
                <p className={`mt-1 text-sm ${isDark ? "text-slate-400" : "text-slate-500"}`}>Full-stack engineer in training</p>
              </div>
            </div>
            <p className={`mt-5 max-w-lg text-sm leading-6 ${isDark ? "text-slate-400" : "text-slate-600"}`}>
              Sydney-based and focused on building thoughtful full-stack products with React, FastAPI, Node.js, and PostgreSQL. Open to internships and collaborative projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {contactShortcuts.map(({ href, label, icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className={`focus-ring inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition ${isDark ? "border-white/8 bg-white/5 text-slate-300 hover:border-sage-500/30 hover:bg-sage-500/10" : "border-slate-200 bg-white text-slate-600 hover:border-sage-300 hover:bg-sage-50"}`}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  {icon}
                  <span>{label}</span>
                </a>
              ))}
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-sage-400" : "text-sage-600"}`}>Navigate</h3>
              <nav className={`mt-4 grid gap-2 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>
                {navLinks.map((link) => (
                  <a key={link.href} href={link.href} className="transition hover:text-sage-600">
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h3 className={`text-xs font-bold uppercase tracking-[0.35em] ${isDark ? "text-sage-400" : "text-sage-600"}`}>Location</h3>
              <p className={`mt-4 text-sm ${isDark ? "text-slate-400" : "text-slate-600"}`}>Sydney, Australia</p>
              <p className="mt-2 text-sm text-slate-500">Available for internships and graduate roles</p>
            </div>
          </div>
        </div>

        <div className={`mt-10 flex flex-col gap-3 border-t pt-5 text-xs sm:flex-row sm:items-center sm:justify-between ${isDark ? "border-white/8 text-slate-500" : "border-slate-200 text-slate-500"}`}>
          <span>© {year} Ei Phyu Phyu Mon. Crafted with care and curiosity.</span>
          <span>Built with React · Vite · Tailwind</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
