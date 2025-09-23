const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { label: "Email", href: "mailto:eppmon27@gmail.com" },
  { label: "LinkedIn", href: "https://linkedin.com/in/your-profile" },
  { label: "GitHub", href: "https://github.com/your-username" },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-blue-500/20 text-blue-300 flex items-center justify-center font-semibold">
                EM
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-blue-200">
                  Ei Phyu Phyu Mon
                </p>
                <p className="text-sm text-slate-400">Full-stack Engineer & Product Partner</p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm text-slate-400">
              I help teams shape thoughtful digital experiences — from early product discovery to polished
              interfaces ready for growth.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Navigation</h3>
            <nav className="mt-4 grid gap-2 text-sm text-slate-400">
              {navLinks.map((link) => (
                <a key={link.href} href={link.href} className="transition hover:text-blue-200">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-200">Stay connected</h3>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                  className="transition hover:text-blue-200"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <p className="mt-6 text-xs text-slate-500">
              Sydney, Australia · Available for full-time roles and collaborations
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start gap-4 border-t border-slate-800 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <span>© {year} Ei Phyu Phyu Mon. Crafted with curiosity and care.</span>
          <span>Built with React · Tailwind · Vite</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
