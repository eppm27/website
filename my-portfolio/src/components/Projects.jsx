import { useState } from "react";

const projects = [
  {
    id: 1,
    title: "CryptoChat",
    subtitle: "AI-powered financial assistant",
    period: "Feb 2025 – May 2025",
    summary:
      "Designed and built a responsive web client for real-time crypto insights, integrating OpenAI with financial data sources.",
    impact: [
      "<500ms response time for 50+ concurrent traders",
      "Automated CI/CD with Cypress + Vitest coverage",
      "Dockerised services powering a modular architecture",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI API", "Docker", "GitHub Actions"],
    highlight: "Improved analysis turnaround by 40% for pilot users.",
  },
  {
    id: 2,
    title: "StudySpark",
    subtitle: "Peer learning mobile app",
    period: "Mar 2025",
    summary:
      "Built an intuitive matching experience helping students find study partners, complete with real-time chat and retention analytics.",
    impact: [
      "Cross-platform React Native experience with Firebase Auth",
      "Swipe-based discovery flow tested with 100+ students",
      "Chat service supporting 50+ concurrent conversations",
    ],
    stack: ["React Native", "Firebase", "Realtime Database", "Authentication"],
    highlight: "Increased study engagement time by 40% during pilot runs.",
  },
  {
    id: 3,
    title: "Presto",
    subtitle: "Interactive presentation platform",
    period: "Nov 2024",
    summary:
      "Crafted an accessible web app for live Q&A sessions and multimedia slide creation, enabling presenters to respond in real time.",
    impact: [
      "Reusable design system and theming for future modules",
      "Automated E2E coverage reducing manual QA by 35%",
      "Audience participation metrics surfaced for presenters",
    ],
    stack: ["React", "REST APIs", "Cypress", "Vitest", "Design Systems"],
    highlight: "Boosted engagement scores by 60% across demo sessions.",
  },
  {
    id: 4,
    title: "Dungeon Mania",
    subtitle: "Game engine refactor",
    period: "Aug 2024",
    summary:
      "Refactored a Java game engine with modern design patterns, removing code smells and unlocking new gameplay mechanics.",
    impact: [
      "Introduced command, observer, and builder patterns",
      "95% JUnit coverage across new combat and puzzle systems",
      "Runtime performance improved 3x through profiling",
    ],
    stack: ["Java", "JUnit", "Design Patterns", "Game Architecture"],
    highlight: "Set the groundwork for future content updates without rewrites.",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="bg-slate-50 py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow">Projects</span>
          <h2 className="section-title mt-4 text-4xl text-slate-900 sm:text-5xl">
            High-impact work across fintech, education, and productivity.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            These projects highlight how I connect user insight, technical depth, and execution discipline to
            deliver meaningful outcomes.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <button
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex h-full flex-col rounded-3xl bg-white p-6 text-left shadow-xl ring-1 ring-slate-100 transition hover:-translate-y-1 hover:shadow-2xl sm:p-8"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs uppercase tracking-[0.3em] text-blue-600">{project.period}</span>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">{project.title}</h3>
                  <p className="text-sm text-slate-500">{project.subtitle}</p>
                </div>
                <span className="hidden rounded-full bg-blue-50 px-4 py-2 text-xs font-semibold text-blue-600 opacity-0 transition group-hover:opacity-100 sm:inline-flex">
                  View details
                </span>
              </div>

              <p className="mt-6 grow text-sm text-slate-600">{project.summary}</p>

              <div className="mt-6 space-y-2 text-sm text-slate-600">
                {project.impact.slice(0, 2).map((item) => (
                  <div key={item} className="flex gap-3">
                    <span className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-500"></span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.stack.slice(0, 5).map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </button>
          ))}
        </div>

        {selectedProject && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/60 px-4 py-10 sm:py-12"
            onClick={() => setSelectedProject(null)}
          >
            <div
              className="relative w-full max-w-3xl rounded-3xl bg-white shadow-2xl"
              onClick={(event) => event.stopPropagation()}
            >
              <button
                className="absolute right-4 top-4 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 text-slate-600 transition hover:border-blue-200 hover:text-blue-600"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={1.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="rounded-t-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 text-white sm:p-8">
                <span className="text-xs uppercase tracking-[0.3em] text-blue-100">
                  {selectedProject.period}
                </span>
                <h3 className="mt-3 text-3xl font-semibold">{selectedProject.title}</h3>
                <p className="text-sm text-blue-100/80">{selectedProject.subtitle}</p>
              </div>
              <div className="space-y-8 p-6 text-sm text-slate-600 sm:p-8">
                <p className="text-base text-slate-700">{selectedProject.summary}</p>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Impact
                  </h4>
                  <ul className="mt-3 space-y-2">
                    {selectedProject.impact.map((item) => (
                      <li key={item} className="flex gap-3">
                        <span className="mt-1 h-2 w-2 flex-none rounded-full bg-blue-500"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-semibold uppercase tracking-[0.2em] text-slate-500">
                    Stack & Responsibilities
                  </h4>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedProject.stack.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="rounded-2xl border border-blue-100 bg-blue-50/40 p-4 text-blue-700">
                  {selectedProject.highlight}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
