const experiences = [
  {
    role: "Full Stack Engineer Intern",
    organisation: "Myed.it",
    period: "Nov 2025 – Feb 2026",
    location: "Sydney",
    achievements: [
      "Debugged production frontend and backend issues across Next.js, React and REST APIs.",
      "Refactored code for maintainability and clearer API behaviour.",
      "Contributed to Jira sprint work, testing and CI/CD workflows.",
    ],
    stack: ["Next.js", "React", "REST APIs", "Jira", "CI/CD"],
  },
  {
    role: "Full Stack Engineer (Work Integrated Learning)",
    organisation: "UNSW · AI Financial Assistant",
    period: "Feb 2025 – May 2025",
    location: "Sydney",
    achievements: [
      "Built React, Node.js and MongoDB features in a four-person agile team.",
      "Integrated OpenAI and financial APIs with Docker and GitHub Actions workflows.",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Docker", "GitHub Actions"],
  },
  {
    role: "Student Consultant (Technology)",
    organisation: "Practera",
    period: "Nov 2025 – Dec 2025",
    location: "Sydney",
    achievements: [
      "Translated client requirements into technical recommendations with a student consulting team.",
    ],
    stack: ["Research", "Consulting"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-reveal py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <span className="section-kicker">Experience</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-ink">
            Experience
          </h2>
        </div>

        <div className="mt-14 timeline">
          {experiences.map((experience) => (
            <article
              key={experience.role}
              className="timeline-item notebook-card p-6 sm:p-8 lg:p-9"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div>
                  <span className="text-xs uppercase tracking-widest font-bold text-sky">
                    {experience.period}
                  </span>
                  <h3 className="mt-3 text-2xl font-semibold text-ink">
                    {experience.role}
                  </h3>
                  <p className="text-base font-medium text-ink/70">
                    {experience.organisation}
                  </p>
                  <p className="text-sm text-ink/45">
                    {experience.location}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-2 self-start">
                  {experience.stack.map((item) => (
                    <span key={item} className="badge-pill">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <ul className="mt-6 space-y-3 text-sm text-ink/70">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="mt-1.5 inline-block h-2 w-2 flex-none rounded-full bg-peach"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
