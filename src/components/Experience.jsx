import { useTheme } from "../context/ThemeContext.jsx";

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
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "Docker",
      "GitHub Actions",
    ],
  },
  {
    role: "Technology Insights Program Participant",
    organisation: "KPMG Australia",
    period: "Apr 2024",
    location: "Sydney",
    summary:
      "Completed a rapid prototyping sprint exploring sustainability solutions with consultants across AI, cloud, and cybersecurity.",
    achievements: [
      "Facilitated design-thinking workshops and shipped a working prototype within 48 hours.",
      "Synthesised executive feedback into a clear product roadmap and success metrics.",
      "Communicated complex technical trade-offs to cross-functional stakeholders with clarity.",
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
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="section-eyebrow">Experience</span>
          <h2
            className={`section-title mt-4 text-3xl sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Learning by shipping with cross-functional teams
          </h2>
          <p
            className={`mx-auto mt-6 max-w-3xl text-lg ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Autonomy, clarity, and thoughtful collaboration keep features
            moving. These roles taught me to own the details while staying
            product-driven.
          </p>
        </div>

        <div className="mt-14 timeline">
          {experiences.map((experience, index) => (
            <article
              key={experience.role}
              className={`timeline-item card-base ${
                isDark ? "card-layer-dark" : "card-layer-light"
              } p-6 sm:p-8 lg:p-9`}
            >
              <div className="flex flex-col gap-6 lg:flex-row lg:justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">
                    {experience.period}
                  </span>
                  <h3
                    className={`mt-3 text-2xl font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {experience.role}
                  </h3>
                  <p
                    className={`text-base font-medium ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {experience.organisation}
                  </p>
                  <p
                    className={`text-sm ${
                      isDark ? "text-slate-500" : "text-slate-500"
                    }`}
                  >
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

              <p
                className={`mt-5 text-sm leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {experience.summary}
              </p>

              <ul
                className={`mt-6 space-y-3 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {experience.achievements.map((achievement) => (
                  <li key={achievement} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 flex-none rounded-full bg-[#2563eb]"></span>
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.32em] text-slate-500">
                <span>Role #{index + 1}</span>
                <span aria-hidden="true">•</span>
                <span>Leveling up craft</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
