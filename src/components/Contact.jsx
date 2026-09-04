const actions = [
  {
    title: "Email",
    value: "eppmon27@gmail.com",
    href: "mailto:eppmon27@gmail.com",
    note: "Best first step for internships, graduate roles and technical conversations.",
  },
  {
    title: "LinkedIn",
    value: "Connect on LinkedIn",
    href: "https://www.linkedin.com/in/ei-phyu-phyu-mon-8517181ba/",
    note: "Useful for recruiter outreach and role updates.",
  },
  {
    title: "GitHub",
    value: "github.com/eppm27",
    href: "https://github.com/eppm27",
    note: "Browse public projects, implementation details and recent code.",
  },
  {
    title: "Resume",
    value: "Download PDF",
    href: "/Ei-Phyu-Phyu-Mon-CV.pdf",
    note: "One-page summary of education, experience, projects and skills.",
    download: true,
  },
];

const Contact = () => {
  return (
    <section id="contact" className="section-reveal py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <div>
            <span className="section-kicker">Contact</span>
            <h2 className="mt-4 text-4xl font-bold leading-tight text-ink sm:text-5xl">
              Open to software engineering internships and graduate roles.
            </h2>
            <p className="mt-6 text-base leading-8 text-ink/70">
              I am based in Sydney and interested in teams that value ownership,
              clear communication, debugging, product thinking and reliable
              delivery.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {actions.map((action) => (
              <a
                key={action.title}
                href={action.href}
                target={action.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  action.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                download={action.download}
                className="notebook-card focus-ring group block p-5 transition duration-300 hover:-translate-y-1 hover:shadow-[0_18px_40px_rgba(16,24,40,0.1)]"
              >
                <span className="text-xs font-bold uppercase tracking-[0.22em] text-ink/45">
                  {action.title}
                </span>
                <span className="mt-3 block text-lg font-bold text-ink">
                  {action.value}
                </span>
                <span className="mt-2 block text-sm leading-6 text-ink/60">
                  {action.note}
                </span>
                <span className="mt-5 inline-flex text-sm font-bold text-sky transition group-hover:translate-x-1">
                  Open <span aria-hidden="true">→</span>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
