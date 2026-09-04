const experiences = [
  {
    role: "Full Stack Engineer Intern",
    organisation: "Myed.it",
    period: "Nov 2025 – Feb 2026",
    location: "Sydney",
    summary:
      "Worked across frontend and backend systems on a web platform.",
    achievements: [
      "Worked with Next.js, React and REST API features across the stack.",
      "Debugged frontend and backend issues and refactored code for maintainability.",
      "Contributed to sprint work through testing, issue tracking and CI/CD workflows.",
    ],
    stack: ["Next.js", "React", "REST APIs", "JavaScript", "Jira", "CI/CD"],
  },
  {
    role: "Full Stack Engineer (Work Integrated Learning)",
    organisation: "UNSW · AI Financial Assistant",
    period: "Feb 2025 – May 2025",
    location: "Sydney",
    summary:
      "Built an AI financial assistant within a 4-member agile team.",
    achievements: [
      "Implemented React, Node.js and MongoDB features for chatbot and financial-data workflows.",
      "Integrated OpenAI and financial APIs and contributed Dockerised backend services.",
      "Contributed automated workflows with GitHub Actions and tested delivery practices.",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Docker", "GitHub Actions"],
  },
  {
    role: "Student Consultant (Technology)",
    organisation: "Practera",
    period: "Nov 2025 – Dec 2025",
    location: "Sydney",
    summary:
      "Worked on a technology consulting project with a team.",
    achievements: [
      "Researched a technical problem, shaped recommendations and communicated findings.",
      "Worked through feedback and shared progress with project stakeholders.",
    ],
    stack: ["Research", "Consulting", "Communication"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-reveal py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <span className="section-kicker">Experience</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-ink">
            Building, debugging and working with technical teams.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-ink/70">
            My experience combines full-stack internship work, Work Integrated
            Learning and technology consulting.
          </p>
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

              <p className="mt-5 text-sm leading-relaxed text-ink/70">
                {experience.summary}
              </p>

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
