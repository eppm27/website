const actions = [
  {
    label: "Email me",
    href: "mailto:eppmon27@gmail.com",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
  },
  {
    label: "GitHub",
    href: "https://github.com/eppm27",
  },
  {
    label: "Download résumé",
    href: "/Ei-Phyu-Phyu-Mon-CV.pdf",
    download: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-reveal py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="notebook-card relative overflow-hidden p-6 sm:p-8 lg:p-10">
          <div
            className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-peach/30 blur-2xl"
            aria-hidden="true"
          ></div>
          <div
            className="pointer-events-none absolute -bottom-20 left-8 h-36 w-36 rounded-full bg-mint/30 blur-2xl"
            aria-hidden="true"
          ></div>

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
            <div>
              <span className="section-kicker">Contact</span>
              <h2 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
                Let&apos;s connect
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg">
                I&apos;m currently open to software engineering internships and
                early-career opportunities. Feel free to reach out by email or
                LinkedIn.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:justify-end">
              {actions.map((action) => (
                <a
                  key={action.label}
                  href={action.href}
                  target={action.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    action.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  download={action.download}
                  className="focus-ring inline-flex min-h-12 items-center justify-center rounded-full border border-ink/10 bg-white/80 px-5 py-3 text-sm font-bold text-ink shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-sky/40 hover:bg-white hover:shadow-[0_12px_24px_rgba(16,24,40,0.08)]"
                >
                  {action.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
