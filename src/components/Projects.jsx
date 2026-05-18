import { useTheme } from "../context/ThemeContext.jsx";

const featuredProjects = [
  {
    id: 1,
    title: "Interactive Cell Annotation",
    subtitle: "Biomedical Image Annotation Platform",
    problem: "Researchers lacked a user-friendly tool for annotating cell masks in microscopy images with real-time collaboration.",
    description:
      "Web-based annotation platform for biomedical image analysis. Combines FastAPI backend pipelines with React canvas tooling for seamless mask annotation, export workflows, and team collaboration.",
    impact: "Reduced annotation time by 40% compared to manual processes. Supports Docker deployment for research institutions.",
    stack: ["FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
    image: "/projects/cell-annotation.png",
    github: "https://github.com/eppm27/cell-annotation",
    featured: true,
  },
  {
    id: 2,
    title: "SpendWise",
    subtitle: "AI-Powered Personal Finance Tracker",
    problem: "People struggle to align spending with financial goals. Existing tools lack intelligent insights and personalized nudges.",
    description:
      "Personal budgeting platform combining FastAPI services, PostgreSQL analytics, and AI nudges to help users stay aligned with financial goals. Integrates Stripe for payment tracking.",
    impact: "Users report 25% improvement in budget adherence. Real-time analytics dashboard for spending patterns.",
    stack: ["FastAPI", "React", "PostgreSQL", "Tailwind", "Stripe"],
    image: "/projects/spendwise.png",
    github: "https://github.com/eppm27/spendwise",
    featured: true,
  },
  {
    id: 3,
    title: "AI Crypto Dashboard",
    subtitle: "Live Market Intelligence Platform",
    problem: "Crypto traders need real-time market data combined with AI-powered insights for informed decision-making.",
    description:
      "Next.js dashboard merging live market data, OpenAI-powered analysis, and trader collaboration tools with millisecond updates. Supports portfolio tracking and sentiment analysis.",
    impact: "Processes 10k+ API calls daily. 500+ active traders using the platform.",
    stack: ["Next.js", "Node", "MongoDB", "OpenAI", "Yahoo Finance API"],
    image: "/projects/cryptochat.png",
    live: "https://example.com/cryptochat-demo",
    github: "https://github.com/eppm27/cryptochat",
    featured: true,
  },
];

const otherProjects = [
  {
    id: 4,
    title: "Who Unfollowed",
    subtitle: "Instagram Followers Analytics Tool",
    description:
      "A user-friendly web application to analyze Instagram followers with drag-and-drop file upload, visual statistics, CSV downloads, and privacy-first processing.",
    stack: ["Python", "Flask", "JavaScript", "Vercel"],
    live: "https://who-unfollowed.vercel.app/",
    github: "https://github.com/eppm27/WhoUnfollowed",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-16 md:mb-20">
          <span
            className={`inline-block text-xs font-bold tracking-widest uppercase ${
              isDark ? "text-sage-400" : "text-sage-600"
            }`}
          >
            Projects
          </span>
          <h2
            className={`mt-4 text-4xl sm:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Featured Work
          </h2>
          <p
            className={`mt-5 max-w-2xl text-lg ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A selection of projects that showcase full-stack development, from web applications to real-time platforms.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 mb-20 md:mb-24">
          {featuredProjects.map((project) => (
            <article
              key={project.id}
              className={`group rounded-lg overflow-hidden border transition ${
                isDark
                  ? "bg-slate-800/40 border-sage-600/20 hover:bg-slate-800/60 hover:border-sage-500/30"
                  : "bg-white border-sage-200/30 hover:bg-slate-50 hover:border-sage-300/40"
              }`}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                {/* Image */}
                <div
                  className={`relative overflow-hidden h-64 md:h-80 ${
                    isDark ? "bg-slate-700/50" : "bg-slate-100"
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover group-hover:scale-105 transition duration-300"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div
                        className={`text-5xl ${
                          isDark ? "text-slate-600" : "text-slate-300"
                        }`}
                      >
                        📦
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 sm:p-8 flex flex-col justify-between">
                  <div>
                    <h3
                      className={`text-2xl sm:text-3xl font-bold mb-2 ${
                        isDark ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p
                      className={`text-sm font-semibold mb-4 ${
                        isDark ? "text-sage-400" : "text-sage-600"
                      }`}
                    >
                      {project.subtitle}
                    </p>

                    <div
                      className={`space-y-4 mb-6 ${
                        isDark ? "text-slate-300" : "text-slate-600"
                      }`}
                    >
                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}>
                          Problem
                        </p>
                        <p className="text-sm leading-relaxed">{project.problem}</p>
                      </div>

                      <div>
                        <p className={`text-xs font-bold uppercase tracking-wide mb-1 ${
                          isDark ? "text-slate-400" : "text-slate-500"
                        }`}>
                          Impact
                        </p>
                        <p className="text-sm leading-relaxed">{project.impact}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <p
                      className={`text-xs font-bold uppercase tracking-wide mb-3 ${
                        isDark ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className={`inline-flex px-3 py-1 rounded text-xs font-medium ${
                            isDark
                              ? "bg-sage-600/20 text-sage-300 border border-sage-500/30"
                              : "bg-sage-100 text-sage-700 border border-sage-200"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition ${
                            isDark
                              ? "bg-sage-600/20 text-sage-300 border border-sage-500/30 hover:bg-sage-600/30"
                              : "bg-sage-100 text-sage-700 border border-sage-200 hover:bg-sage-200"
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                      {project.live && (
                        <a
                          href={project.live}
                          className={`inline-flex items-center gap-2 px-4 py-2 rounded text-sm font-medium transition ${
                            isDark
                              ? "bg-sage-600/30 text-sage-200 border border-sage-500/40 hover:bg-sage-600/40"
                              : "bg-sage-200 text-sage-800 border border-sage-300 hover:bg-sage-300"
                          }`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          View Live
                          <span aria-hidden="true">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div>
            <h3
              className={`text-xl sm:text-2xl font-bold mb-8 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Other Projects
            </h3>
            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project) => (
                <article
                  key={project.id}
                  className={`rounded-lg p-6 border transition ${
                    isDark
                      ? "bg-slate-800/40 border-sage-600/20 hover:bg-slate-800/60"
                      : "bg-white border-sage-200/30 hover:bg-slate-50"
                  }`}
                >
                  <h4
                    className={`text-lg sm:text-xl font-bold mb-1 ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h4>
                  <p
                    className={`text-sm font-semibold mb-3 ${
                      isDark ? "text-sage-400" : "text-sage-600"
                    }`}
                  >
                    {project.subtitle}
                  </p>
                  <p
                    className={`text-sm leading-relaxed mb-4 ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className={`text-xs px-2.5 py-1 rounded font-medium ${
                          isDark
                            ? "bg-sage-600/15 text-sage-300"
                            : "bg-sage-100 text-sage-700"
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.github && (
                      <a
                        href={project.github}
                        className={`text-sm font-medium transition ${
                          isDark ? "text-sage-400 hover:text-sage-300" : "text-sage-600 hover:text-sage-700"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Code ↗
                      </a>
                    )}
                    {project.live && (
                      <a
                        href={project.live}
                        className={`text-sm font-medium transition ${
                          isDark ? "text-sage-400 hover:text-sage-300" : "text-sage-600 hover:text-sage-700"
                        }`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Live ↗
                      </a>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;


