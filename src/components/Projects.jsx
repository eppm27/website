import TechBadge from "./TechBadge.jsx";
import { useTheme } from "../context/ThemeContext.jsx";

// Projects - mix of your previous projects and additional placeholders
const placeholderProjects = [
  {
    id: 1,
    title: "CryptoChat",
    subtitle: "AI Crypto Dashboard",
    description:
      "React/Next.js dashboard that merges live market data, OpenAI-powered insights, and trader collaboration tools with millisecond updates.",
    stack: ["Next.js", "Node", "MongoDB", "OpenAI", "Yahoo Finance API"],
    image: "/projects/cryptochat.png",
    live: "https://example.com/cryptochat-demo",
    github: "https://github.com/eppm27/cryptochat",
  },
  {
    id: 2,
    title: "SpendWise",
    subtitle: "Personal Finance Tracker",
    description:
      "Personal budgeting platform with Django/FastAPI services, PostgreSQL analytics, and AI nudges that keep spending aligned with goals.",
    stack: ["FastAPI", "React", "PostgreSQL", "Tailwind", "Stripe"],
    image: "/projects/spendwise.png",
    live: "https://example.com/spendwise-demo",
    github: "https://github.com/eppm27/spendwise",
  },
  {
    id: 3,
    title: "Interactive Cell Annotation",
    subtitle: "Biomedical image annotation tool",
    description:
      "Web app for mask annotation of microscopy images with FastAPI pipelines, React canvas tooling, and export-ready workflows.",
    stack: ["FastAPI", "React", "OpenCV", "PostgreSQL", "Docker"],
    image: "/projects/cell-annotation.png",
    live: "https://example.com/cell-annotation-demo",
    github: "https://github.com/eppm27/cell-annotation",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    subtitle: "Full-Stack Shopping App",
    description:
      "Complete e-commerce solution with user authentication, payment processing, inventory management, and admin dashboard.",
    stack: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
    live: "https://example.com/ecommerce-demo",
    github: "https://github.com/eppm27/ecommerce-platform",
    isPlaceholder: true,
  },
  {
    id: 5,
    title: "Task Management System",
    subtitle: "Project Collaboration Tool",
    description:
      "Team productivity app with real-time collaboration, file sharing, task assignments, and progress tracking features.",
    stack: ["Vue.js", "Laravel", "MySQL", "Socket.io", "AWS"],
    live: "https://example.com/task-manager-demo",
    github: "https://github.com/eppm27/task-management",
    isPlaceholder: true,
  },
  {
    id: 6,
    title: "Weather Analytics Dashboard",
    subtitle: "Data Visualization App",
    description:
      "Interactive weather data visualization platform with historical trends, forecasting, and location-based insights.",
    stack: ["Python", "Django", "D3.js", "PostgreSQL", "Redis"],
    live: "https://example.com/weather-analytics-demo",
    github: "https://github.com/eppm27/weather-analytics",
    isPlaceholder: true,
  },
  {
    id: 7,
    title: "Social Media Scheduler",
    subtitle: "Content Management Tool",
    description:
      "Multi-platform social media scheduling and analytics tool with content calendar and engagement tracking.",
    stack: ["React", "FastAPI", "PostgreSQL", "Celery", "Twitter API"],
    live: "https://example.com/social-scheduler-demo",
    github: "https://github.com/eppm27/social-scheduler",
    isPlaceholder: true,
  },
  {
    id: 8,
    title: "Recipe Recommendation Engine",
    subtitle: "AI-Powered Food App",
    description:
      "Smart recipe app that suggests meals based on dietary preferences, available ingredients, and nutritional goals.",
    stack: ["React Native", "Python", "TensorFlow", "MongoDB", "OpenAI"],
    live: "https://example.com/recipe-engine-demo",
    github: "https://github.com/eppm27/recipe-engine",
    isPlaceholder: true,
  },
];

const Projects = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

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
            Featured Work & Projects
          </h2>
          <p
            className={`mx-auto mt-6 max-w-3xl text-lg ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            A collection of projects that showcase my skills in full-stack
            development, from web applications to data analysis tools.
          </p>
        </div>

        {/* Horizontal Scrolling Project Cards */}
        <div className="mt-12 overflow-hidden">
          <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory">
            {placeholderProjects.map((project) => (
              <article
                key={project.id}
                className={`card-base flex-shrink-0 w-80 flex flex-col snap-start ${
                  isDark ? "card-layer-dark" : "card-layer-light"
                }`}
              >
                {/* Project Image */}
                <div
                  className={`relative overflow-hidden rounded-[1.5rem] rounded-b-none h-48 ${
                    isDark ? "bg-slate-800" : "bg-slate-200"
                  }`}
                >
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full">
                      <div
                        className={`text-4xl ${
                          isDark ? "text-slate-600" : "text-slate-400"
                        }`}
                      >
                        📱
                      </div>
                    </div>
                  )}
                </div>

                <div className="flex flex-1 flex-col gap-4 p-6">
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

                  <div className="mt-auto flex gap-3">
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
        </div>

        <div className="mt-12 flex flex-col items-center gap-3 text-center">
          <p
            className={`text-sm ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            More projects coming soon!
          </p>
          <a href="#contact" className="btn-secondary focus-ring">
            Let's discuss a project
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
