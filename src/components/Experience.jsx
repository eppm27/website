import { useTheme } from "../context/ThemeContext.jsx";

const experiences = [
  {
    role: "Full Stack Engineer Intern",
    organisation: "Myed.it",
    period: "Nov 2025 – Feb 2026",
    location: "Sydney",
    summary:
      "Worked across frontend and backend systems on a production web platform, resolving defects, improving reliability, and supporting Agile sprint delivery.",
    achievements: [
      "Resolved 15+ frontend and backend defects across Next.js and REST API systems, improving system reliability and user experience.",
      "Refactored components and backend services to improve maintainability, performance, and code clarity.",
      "Contributed to Jira-based sprint delivery through testing, debugging, issue tracking, and CI/CD workflows.",
    ],
    stack: [
      "Next.js",
      "React",
      "REST APIs",
      "JavaScript",
      "Jira",
      "CI/CD",
    ],
  },
  {
    role: "Student Consultant (Technology)",
    organisation: "Practera",
    period: "Nov 2025 – Dec 2025",
    location: "Sydney",
    summary:
      "Advised an industry client by analysing business requirements, evaluating digital technology solutions, and presenting practical recommendations.",
    achievements: [
      "Analysed client requirements and identified opportunities for digital transformation and operational improvement.",
      "Developed prototype solutions and data-driven presentations to support stakeholder decision-making.",
      "Communicated technical concepts clearly to non-technical stakeholders in a consulting-style environment.",
    ],
    stack: [
      "Technology consulting",
      "Business analysis",
      "Prototyping",
      "Data insights",
      "Stakeholder communication",
    ],
  },
  {
    role: "Full Stack Engineer (Work Integrated Learning)",
    organisation: "UNSW · CryptoChat Platform",
    period: "Feb 2025 – May 2025",
    location: "Sydney",
    summary:
      "Built an AI-powered financial chatbot platform that combined full-stack development, financial data integration, and conversational AI capabilities.",
    achievements: [
      "Developed an AI-powered chatbot platform using React, Node.js, and MongoDB.",
      "Integrated OpenAI APIs and financial data sources to support real-time user queries with sub-500ms response latency.",
      "Built containerised backend services using Docker and supported modular microservice-style development.",
    ],
    stack: [
      "React",
      "Node.js",
      "MongoDB",
      "OpenAI API",
      "Docker",
      "REST APIs",
    ],
  },
  {
    role: "PG Connect Advisor",
    organisation: "University of Sydney",
    period: "Nov 2025 – Present",
    location: "Sydney",
    summary:
      "Support postgraduate students with onboarding, university systems, and transition into postgraduate study through mentoring and Q&A support.",
    achievements: [
      "Provided guidance to postgraduate students navigating university systems, enrolment processes, and student support resources.",
      "Answered student questions clearly and empathetically to support a smoother onboarding experience.",
      "Strengthened communication, mentoring, and student-facing support skills in a university environment.",
    ],
    stack: [
      "Mentoring",
      "Student support",
      "Communication",
      "Onboarding",
      "University systems",
    ],
  },
];

const Experience = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="experience" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div>
          <span
            className={`inline-block text-xs font-bold tracking-widest uppercase ${
              isDark ? "text-sage-400" : "text-sage-600"
            }`}
          >
            Experience
          </span>
          <h2
            className={`mt-4 text-4xl sm:text-5xl font-bold leading-tight ${
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
                  <span className={`text-xs uppercase tracking-widest font-bold ${
                    isDark ? "text-sage-400" : "text-sage-600"
                  }`}>
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
