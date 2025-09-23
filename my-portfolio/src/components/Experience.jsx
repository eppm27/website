const experiences = [
  {
    role: "Software Engineering Intern",
    organisation: "Capstone · CryptoChat Platform",
    period: "Feb 2025 – May 2025",
    location: "Sydney (Hybrid)",
    summary:
      "Co-led a four-person squad building an AI-powered crypto assistant. I owned the front-end architecture, API integration strategy, and release process.",
    achievements: [
      "Designed a modular React + Node.js system that served 50+ concurrent users with <500ms responses.",
      "Integrated OpenAI and financial data sources behind secure, testable service boundaries.",
      "Automated CI with GitHub Actions, lifting coverage beyond 85% and speeding up QA cycles.",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Docker", "GitHub Actions"],
  },
  {
    role: "Technology Insights Program Participant",
    organisation: "KPMG Australia",
    period: "Apr 2024",
    location: "Sydney",
    summary:
      "Completed a rapid prototyping sprint exploring sustainability solutions with consultants across AI, cloud, and cybersecurity.",
    achievements: [
      "Facilitated design-thinking workshops and delivered a working prototype within 48 hours.",
      "Synthesised executive feedback into a clear product roadmap and success metrics.",
      "Practised communicating complex technical trade-offs to cross-functional stakeholders.",
    ],
    stack: ["Design thinking", "Cloud architecture", "Cybersecurity", "AI/ML"],
  },
  {
    role: "Vice President",
    organisation: "UTS Maths Society",
    period: "Mar 2023 – Dec 2023",
    location: "Sydney",
    summary:
      "Led a 15-person executive team, delivering high-impact community events and partnerships across campus.",
    achievements: [
      "Delivered 6+ events averaging 100 attendees while doubling sponsorship revenue.",
      "Implemented mentoring frameworks that increased volunteer retention by 20%.",
      "Built operating rituals across marketing, finance, and partnerships to maintain momentum.",
    ],
    stack: ["Leadership", "Community building", "Event strategy", "Mentorship"],
  },
];

const Experience = () => {
  return (
    <section id="experience" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow">Experience</span>
          <h2 className="section-title mt-4 text-4xl text-slate-900 sm:text-5xl">
            Shipping with cross-functional teams and leading with empathy.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            I thrive in fast-moving environments where autonomy, clarity, and thoughtful collaboration
            matter most.
          </p>
        </div>

        <div className="mt-14 space-y-10 sm:space-y-12">
          {experiences.map((experience, index) => (
            <div
              key={experience.role}
              className="relative rounded-3xl bg-slate-50/60 p-6 shadow-sm ring-1 ring-slate-100 sm:p-8 lg:p-10"
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div>
                  <p className="text-sm uppercase tracking-[0.3em] text-blue-600">{experience.period}</p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {experience.role}
                  </h3>
                  <p className="text-lg text-slate-600">{experience.organisation}</p>
                  <p className="text-sm text-slate-400">{experience.location}</p>
                </div>
                <div className="flex flex-wrap items-center gap-2 self-start">
                  {experience.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-blue-200 bg-white px-3 py-1 text-xs font-medium text-blue-600"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <p className="mt-4 text-base text-slate-600 lg:mt-6">{experience.summary}</p>

              <ul className="mt-6 space-y-3 text-sm text-slate-600">
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-500"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="absolute left-4 top-4 hidden h-12 w-12 rotate-6 items-center justify-center rounded-2xl bg-blue-100/80 text-blue-600 font-semibold shadow-inner lg:flex">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
