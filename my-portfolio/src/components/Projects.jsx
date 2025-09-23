import TechBadge from "./TechBadge.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

const projects = [
  {
    title: "CryptoChat",
    subtitle: "AI Crypto Dashboard",
    description:
      "React/Next.js dashboard that merges live market data, OpenAI-powered insights, and trader collaboration tools with millisecond updates.",
    stack: ["Next.js", "Node", "MongoDB", "OpenAI", "Yahoo Finance API"],
    image: "/projects/cryptochat.png",
    alt: "CryptoChat dashboard interface showing chat and price charts",
    live: "https://example.com/cryptochat",
    github: "https://github.com/eppm27/cryptochat",
    featured: true,
  },
  {
    title: "SpendWise",
    subtitle: "Personal Finance Tracker",
    description:
      "Personal budgeting platform with Django/FastAPI services, PostgreSQL analytics, and AI nudges that keep spending aligned with goals.",
    stack: ["FastAPI", "React", "PostgreSQL", "Tailwind", "Stripe"],
    image: "/projects/spendwise.png",
    alt: "SpendWise budgeting charts and savings goals",
    live: "https://example.com/spendwise",
    github: "https://github.com/eppm27/spendwise",
  },
  {
    title: "Interactive Cell Annotation",
    subtitle: "Biomedical image annotation tool",
    description:
      "Web app for mask annotation of microscopy images with FastAPI pipelines, React canvas tooling, and export-ready workflows.",
    stack: ["FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
    image: "/projects/cell-annotation.png",
    alt: "Cell annotation tool with brush and mask preview",
    live: "https://example.com/cell-annotation",
    github: "https://github.com/eppm27/cell-annotation",
  },
  {
    title: "Interactive Cell Annotation",
    subtitle: "Biomedical image annotation tool",
    description:
      "Web app for mask annotation of microscopy images with FastAPI pipelines, React canvas tooling, and export-ready workflows.",
    stack: ["FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
    image: "/projects/cell-annotation.png",
    alt: "Cell annotation tool with brush and mask preview",
    live: "https://example.com/cell-annotation",
    github: "https://github.com/eppm27/cell-annotation",
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [featuredProject, ...supportingProjects] = projects;

  return (
    <section id="projects" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="section-eyebrow">Projects</span>
          <h2
            className={`section-title mt-4 text-3xl sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Recent work that blends data, UX, and delivery
          </h2>
          <p
            className={`mx-auto mt-6 max-w-3xl text-lg ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Each build combines reliable back-end architecture with thoughtful
            product polish—designed to launch fast, scale safely, and delight
            users along the way.
          </p>
        </div>

        <article
          className={`mt-12 grid gap-8 rounded-[1.75rem] p-6 sm:p-8 lg:grid-cols-[1.1fr_0.9fr] ${
            isDark ? "card-layer-dark" : "card-layer-light"
          } card-base`}
        >
          <div className="relative overflow-hidden rounded-[1.5rem]">
            <img
              src={featuredProject.image}
              alt={featuredProject.alt}
              width={720}
              height={480}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div>
              <span className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">
                Featured project
              </span>
              <h3
                className={`mt-3 text-2xl font-semibold ${
                  isDark ? "text-white" : "text-slate-900"
                }`}
              >
                {featuredProject.title}
              </h3>
              <p
                className={`text-sm font-semibold uppercase tracking-[0.3em] ${
                  isDark ? "text-slate-400" : "text-slate-500"
                }`}
              >
                {featuredProject.subtitle}
              </p>
              <p
                className={`mt-4 text-base leading-relaxed ${
                  isDark ? "text-slate-200" : "text-slate-600"
                }`}
              >
                {featuredProject.description}
              </p>
            </div>
            <div className="flex flex-wrap gap-2">
              {featuredProject.stack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
            <div className="mt-auto flex flex-wrap gap-3">
              <a
                href={featuredProject.live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary focus-ring flex-1 justify-center md:flex-none"
              >
                View live demo
              </a>
              <a
                href={featuredProject.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary focus-ring flex-1 justify-center md:flex-none"
              >
                Code on GitHub
              </a>
            </div>
          </div>
        </article>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {supportingProjects.map((project) => (
            <article
              key={project.title}
              className={`card-base flex h-full flex-col ${
                isDark ? "card-layer-dark" : "card-layer-light"
              }`}
            >
              <div className="relative overflow-hidden rounded-[1.5rem] rounded-b-none">
                <img
                  src={project.image}
                  alt={project.alt}
                  width={480}
                  height={320}
                  loading="lazy"
                  className="h-48 w-full object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col gap-5 p-6">
                <div>
                  <p className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">
                    {project.subtitle}
                  </p>
                  <h3
                    className={`mt-3 text-xl font-semibold ${
                      isDark ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-3 text-sm leading-relaxed ${
                      isDark ? "text-slate-300" : "text-slate-600"
                    }`}
                  >
                    {project.description}
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <TechBadge key={tech} label={tech} />
                  ))}
                </div>

                <div className="mt-auto flex flex-wrap gap-3">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary focus-ring flex-1 justify-center"
                  >
                    Live
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary focus-ring flex-1 justify-center"
                  >
                    GitHub
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p
            className={`text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            Want a deeper walkthrough or code review of these builds?
          </p>
          <a href="#contact" className="btn-secondary focus-ring">
            Book a project deep-dive
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
