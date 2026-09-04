const featuredProjects = [
  {
    id: 1,
    title: "Interactive Cell Annotation Platform",
    subtitle: "Biomedical Image Annotation Platform",
    problem:
      "Microscopy workflows need precise cell-mask annotation without forcing researchers through clunky manual tooling.",
    built:
      "A web platform with React annotation views, FastAPI image-processing endpoints, mask workflows and export-ready data handling.",
    contribution:
      "Contributed across the full stack, connecting frontend annotation interactions with backend image and data pipelines.",
    challenge:
      "The core challenge was keeping image annotation interactions usable while preserving accurate mask data and a clean backend workflow.",
    result:
      "A complete technical case study covering product workflow, API design, image processing and containerised delivery.",
    stack: ["FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
    image: "/projects/cell-annotation.png",
    primary: true,
  },
  {
    id: 2,
    title: "Spend Wise",
    subtitle: "Personal Finance Tracker",
    problem:
      "Budgeting tools need to make spending patterns clear without overwhelming people with financial noise.",
    built:
      "A personal finance application with transaction tracking, budgeting views and data-backed spending insights.",
    contribution:
      "Developed full-stack features across the interface, backend services and PostgreSQL-backed data flows.",
    challenge:
      "The main product decision was turning raw transaction data into simple category, budget and trend views.",
    result:
      "A finance project that demonstrates API, database and product workflow implementation.",
    stack: ["FastAPI", "React", "PostgreSQL", "Tailwind"],
    image: "/projects/spendwise.png",
  },
  {
    id: 3,
    title: "AI Financial Assistant",
    subtitle: "UNSW Work Integrated Learning",
    problem:
      "Crypto research is fragmented across market dashboards, search and chat tools.",
    built:
      "An AI-powered financial chatbot using React, Node.js, MongoDB, OpenAI APIs and financial-data integrations.",
    contribution:
      "Worked within a 4-member agile team and contributed to chatbot functionality, API integration, backend services and automated workflows.",
    challenge:
      "The team had to coordinate live financial data with AI responses while keeping the service testable and deployable.",
    result:
      "A Work Integrated Learning project with OpenAI integration, Dockerised backend work, GitHub Actions and tested delivery practices.",
    stack: ["Next.js", "Node", "MongoDB", "OpenAI", "Yahoo Finance API"],
    image: "/projects/cryptochat.png",
    github: "https://github.com/eppm27/cryptochat",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="section-reveal py-16 md:py-24">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="mb-10 md:mb-14">
          <span className="section-kicker">Projects</span>
          <h2 className="mt-4 text-4xl sm:text-5xl font-bold leading-tight text-ink">
            Selected projects
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-ink/70">
            Three examples of full-stack engineering, API and database
            integration, AI-enabled systems, testing and delivery.
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
                        Primary case study
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

                    <div className="mt-6 grid gap-4 text-sm leading-7 text-ink/70">
                      {[
                        ["Problem", project.problem],
                        ["Built", project.built],
                        ["Contribution", project.contribution],
                        ["Challenge", project.challenge],
                        ["Result", project.result],
                      ].map(([label, value]) => (
                        <div key={label} className="case-row">
                          <p className="case-label">{label}</p>
                          <p>{value}</p>
                        </div>
                      ))}
                    </div>
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
