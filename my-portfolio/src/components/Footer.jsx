const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "Email",
      url: "mailto:eppmon27@gmail.com",
      icon: "M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/your-profile",
      icon: "M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z M4 2a2 2 0 11-4 0 2 2 0 014 0z",
    },
    {
      name: "GitHub",
      url: "https://github.com/your-username",
      icon: "M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22",
    },
  ];

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-base-300 text-base-content">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-primary mb-4">
              Elphyil Phylmon
            </h3>
            <p className="text-base-content/80 mb-4 leading-relaxed">
              Full-Stack Developer & Software Engineer passionate about creating
              innovative solutions with modern technologies. Currently pursuing
              Master of Professional Engineering at USYD.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  className="btn btn-ghost btn-sm btn-circle hover:btn-primary transition-all duration-300"
                  title={link.name}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d={link.icon}
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-base-content/70 hover:text-primary transition-colors duration-300 capitalize"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <span className="text-primary">📧</span>
                <a
                  href="mailto:eppmon27@gmail.com"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  eppmon27@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">📱</span>
                <a
                  href="tel:0422095774"
                  className="text-base-content/70 hover:text-primary transition-colors"
                >
                  0422095774
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">🎓</span>
                <span className="text-base-content/70">
                  University of Sydney
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-primary">💼</span>
                <span className="text-base-content/70">
                  Available for opportunities
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="divider my-8"></div>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-base-content/60">
            <p>&copy; {currentYear} Elphyil Phylmon. All rights reserved.</p>
          </div>
          <div className="flex gap-6 text-sm text-base-content/60">
            <span>Built with React + Vite + daisyUI</span>
            <span className="hidden md:inline">•</span>
            <span>Designed & Developed with ❤️</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
