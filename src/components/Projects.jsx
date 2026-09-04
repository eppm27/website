const featuredProjects = [
  {
    id: 1,
    title: "Interactive Cell Annotation Platform",
    subtitle: "Biomedical Image Annotation Platform",
    summary:
      "A web platform for uploading pathology images, viewing them with pan and zoom, annotating regions and exporting annotation data.",
    bullets: [
      "Built React/TypeScript annotation views with FastAPI image-processing endpoints.",
      "Connected upload, viewing, JWT/RBAC, import/export and persistent storage workflows.",
      "Worked through OpenSeadragon/OpenSlide constraints for large-image viewing.",
    ],
    stack: ["React", "TypeScript", "FastAPI", "OpenSeadragon", "JWT/RBAC", "Docker"],
    image: "/projects/cell-annotation.png",
    github: "https://github.com/eppm27/CellAnnotation",
    primary: true,
  },
  {
    id: 2,
    title: "Spend Wise",
    subtitle: "Personal Finance Tracker",
    summary:
      "A finance app for budgeting, transaction tracking and spending insights.",
    bullets: [
      "Built React, Spring Boot and PostgreSQL workflows for budgets and transactions.",
      "Integrated Gemini into the finance workflow.",
    ],
    stack: ["React", "Spring Boot", "PostgreSQL", "Gemini"],
    image: "/projects/spendwise.png",
  },
  {
    id: 3,
    title: "AI Financial Assistant",
    subtitle: "UNSW Work Integrated Learning",
    summary:
      "A four-person UNSW project for asking questions about crypto markets and portfolio data.",
    bullets: [
      "Contributed React, Node.js and MongoDB features for chat and financial-data flows.",
      "Integrated OpenAI and financial APIs with Docker and GitHub Actions workflows.",
    ],
    stack: ["React", "Node.js", "MongoDB", "OpenAI", "Docker", "GitHub Actions"],
    image: "/projects/cryptochat.png",
    github: "https://github.com/eppm27/cryptochat",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-reveal py-14 md:py-20">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-ink">
            Selected projects
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink/70">
            The strongest work first: biomedical annotation, personal finance
            and an AI financial assistant.
          </p>
        </div>

        <div className="grid gap-8">
          {featuredProjects.map((project, index) => (
            <article
              key={project.id}
              className={`group notebook-card overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_50px_rgba(16,24,40,0.12)] ${
                project.primary ? "md:p-2" : ""
              }`}
              style={{ animationDelay: `${index * 90}ms` }}
            >
              <div
                className={`grid grid-cols-1 gap-0 ${
                  project.primary
                    ? "lg:grid-cols-[1.1fr_0.9fr]"
                    : "md:grid-cols-[0.9fr_1.1fr]"
                }`}
              >
                <div
                  className={`relative overflow-hidden bg-sky/10 ${
                    project.primary ? "h-72 md:h-[27rem]" : "h-64 md:h-80"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading={project.primary ? "eager" : "lazy"}
                  />
                </div>

                <div className="flex flex-col justify-between p-6 sm:p-8">
                  <div>
                    {project.primary && (
                      <span className="mb-4 inline-flex rounded-full bg-honey/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-ink/70">
                        Strongest project
                      </span>
                    )}
                    <h3
                      className={`text-2xl font-bold text-ink sm:text-3xl ${
                        project.primary ? "lg:text-4xl" : ""
                      }`}
                    >
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-sky">
                      {project.subtitle}
                    </p>

                    <p className="mt-5 text-sm leading-7 text-ink/70 sm:text-base">
                      {project.summary}
                    </p>
                    <ul className="mt-5 grid gap-3 text-sm leading-6 text-ink/70">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-3">
                          <span className="mt-2 inline-block h-2 w-2 flex-none rounded-full bg-peach"></span>
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <p className="mb-3 text-xs font-bold uppercase tracking-wide text-ink/45">
                      Tech Stack
                    </p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech) => (
                        <span
                          key={tech}
                          className="inline-flex rounded-full border border-ink/10 bg-white/75 px-3 py-1 text-xs font-semibold text-ink/60"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {project.github && (
                        <a
                          href={project.github}
                          className="btn-small focus-ring"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Code
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
      </div>
    </section>
  );
};

export default Projects;
