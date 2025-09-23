import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../context/ThemeContext.jsx";

const quickLinks = [
  {
    label: "Featured work",
    target: "projects",
    description: "AI dashboard, finance tracker, biomedical annotation.",
  },
  {
    label: "Background",
    target: "about",
    description:
      "Master’s student blending product strategy and full-stack craft.",
  },
  {
    label: "Partner up",
    target: "contact",
    description: "Let’s schedule an intro call to scope your roadmap.",
  },
];

const codeSample = [
  `const roadmap = [`,
  `  "Discovery",`,
  `  "Prototype",`,
  `  "Ship",`,
  `];`,
  `deploy(roadmap);`,
];

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-24 sm:pt-32 md:pt-36 md:pb-28"
    >
      <div className="hero-blob hero-blob--blue" aria-hidden="true"></div>
      <div className="hero-blob hero-blob--violet" aria-hidden="true"></div>

      <div className="relative mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <span className="section-eyebrow">
            Full-stack engineer in training
          </span>
          <h1
            className={`section-title mt-6 text-4xl sm:text-5xl lg:text-6xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            Ei Phyu Phyu Mon — Full-Stack Engineer in Training
          </h1>
          <p
            className={`mt-6 max-w-2xl text-lg md:text-xl ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I build scalable, user-friendly web apps with React, Next.js,
            Node/FastAPI, and PostgreSQL. I enjoy pairing clean architecture
            with delightful UX to ship features that earn trust.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <ScrollLink
              to="projects"
              smooth
              duration={500}
              offset={-80}
              className="btn-primary focus-ring"
            >
              View Projects
              <span aria-hidden="true">↗</span>
            </ScrollLink>
            <a
              href="/Ei-Phyu-Phyu-Mon-CV.pdf"
              className="btn-secondary focus-ring"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download CV
            </a>
          </div>

          <div className="mt-12 grid gap-4 sm:grid-cols-3"></div>
        </div>

        <div>
          <div
            className={`gradient-border ${
              isDark ? "bg-transparent" : "bg-white/20"
            }`}
          >
            <div
              className={`card-base ${
                isDark ? "card-layer-dark" : "card-layer-light"
              } p-6 sm:p-7`}
            >
              <div className="flex items-center justify-between">
                <span
                  className={`text-sm font-medium ${
                    isDark ? "text-slate-200" : "text-slate-600"
                  }`}
                >
                  Project snapshot
                </span>
                <span className="rounded-full bg-[#2563eb]/10 px-3 py-1 text-xs font-semibold text-[#2563eb]">
                  Sprint-ready
                </span>
              </div>
              <div
                className={`mt-6 rounded-2xl border ${
                  isDark
                    ? "border-slate-700/60 bg-slate-900/60"
                    : "border-slate-200 bg-slate-50"
                } p-5 font-mono text-[13px] leading-relaxed text-[#60a5ff]`}
                aria-hidden="true"
              >
                {codeSample.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </div>
              <p
                className={`mt-6 text-sm ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                Currently exploring AI-assisted product workflows,
                production-grade CI/CD, and accessible design systems that scale
                with teams.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "TypeScript",
                  "Next.js",
                  "Node.js",
                  "PostgreSQL",
                  "Docker",
                ].map((skill) => (
                  <span key={skill} className="badge-pill focus-ring">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative mx-auto mt-16 w-full max-w-5xl px-4 sm:px-6">
        <div className="grid gap-4 sm:grid-cols-3">
          {quickLinks.map((item) => (
            <ScrollLink
              key={item.label}
              to={item.target}
              smooth
              duration={500}
              offset={-80}
              className={`card-base ${
                isDark ? "card-layer-dark" : "card-layer-light"
              } focus-ring cursor-pointer p-5 text-left transition`}
            >
              <p className="text-xs uppercase tracking-[0.32em] text-[#2563eb]">
                {item.label}
              </p>
              <p
                className={`mt-3 text-sm leading-relaxed ${
                  isDark ? "text-slate-300" : "text-slate-600"
                }`}
              >
                {item.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[#2563eb]">
                Explore
                <span aria-hidden="true">→</span>
              </span>
            </ScrollLink>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
