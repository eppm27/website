import { Link as ScrollLink } from "react-scroll";
import { useTheme } from "../context/ThemeContext.jsx";
import { useState, useEffect } from "react";

const Home = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-20 pb-24 sm:pt-32 md:pt-40 md:pb-32"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -right-32 w-96 h-96 rounded-full bg-gradient-to-r from-electric-500/20 to-neon-purple/20 blur-3xl opacity-30 animate-float"></div>
        <div
          className="absolute -bottom-20 -left-40 w-80 h-80 rounded-full bg-gradient-to-r from-electric-600/15 to-neon-cyan/15 blur-3xl opacity-25 animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start lg:gap-16">
          {/* Left column: Main hero content */}
          <div>
            <div
              className={`inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border ${isVisible ? "animate-slide-up" : "opacity-0"} ${isDark ? "bg-electric-600/10 border-electric-500/30" : "bg-electric-400/10 border-electric-400/30"}`}
            >
              <span className="w-2 h-2 rounded-full bg-electric-500 animate-pulse"></span>
              <span className="text-xs font-semibold text-electric-400 tracking-wide">
                Available for internships & grad roles
              </span>
            </div>

            <h1
              className={`mt-8 text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight tracking-tight ${isVisible ? "animate-slide-up delay-100" : "opacity-0"}`}
              style={{
                background: isDark
                  ? "linear-gradient(135deg, #00d9ff 0%, #00bfff 50%, #b837f0 100%)"
                  : "linear-gradient(135deg, #0099ff 0%, #00bfff 50%, #9d4edd 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Building creative code, shipping products.
            </h1>

            <p
              className={`mt-8 max-w-2xl text-lg leading-relaxed ${isVisible ? "animate-slide-up delay-200" : "opacity-0"} ${isDark ? "text-slate-300" : "text-slate-700"}`}
            >
              I'm a Sydney-based Master's student and full-stack engineer
              obsessed with elegant design, clean code, and creating experiences
              that feel intuitive and alive. I love blending AI, real-time
              collaboration, and thoughtful UX.
            </p>

            <div
              className={`mt-10 flex flex-wrap items-center gap-4 ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}
            >
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="btn-primary focus-ring cursor-pointer"
              >
                View My Work
                <span aria-hidden="true">→</span>
              </ScrollLink>
              <a href="#contact" className="btn-secondary focus-ring">
                Let's Chat
              </a>
            </div>

            {/* Scroll indicator */}
            <div
              className={`mt-16 flex items-center gap-2 text-xs font-medium text-slate-400 ${isVisible ? "animate-slide-up delay-400" : "opacity-0"}`}
            >
              <span>Scroll to explore</span>
              <svg
                className="w-4 h-4 animate-bounce"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </div>
          </div>

          {/* Right column: Interactive tech stack */}
          <div
            className={`mt-8 lg:mt-0 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
          >
            <div
              className={`rounded-2xl p-8 backdrop-blur-md border transition-all duration-300 hover:shadow-lg ${
                isDark
                  ? "bg-gradient-to-br from-slate-800/60 to-slate-900/40 border-electric-500/20"
                  : "bg-gradient-to-br from-white/80 to-slate-50/40 border-electric-400/20"
              }`}
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-2 h-2 rounded-full bg-electric-500 animate-pulse"></div>
                <span
                  className={`text-xs font-bold uppercase tracking-widest ${
                    isDark ? "text-electric-400" : "text-electric-600"
                  }`}
                >
                  Tech Stack
                </span>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  {
                    label: "Frontend",
                    items: ["React", "Next.js", "Tailwind", "Figma"],
                  },
                  {
                    label: "Backend",
                    items: ["Node.js", "FastAPI", "PostgreSQL", "MongoDB"],
                  },
                  {
                    label: "AI & Data",
                    items: ["OpenAI API", "LLMs", "Data Analysis"],
                  },
                  {
                    label: "DevOps",
                    items: ["Docker", "CI/CD", "AWS", "Vercel"],
                  },
                ].map((group, idx) => (
                  <div
                    key={group.label}
                    className={`p-4 rounded-lg border transition-all duration-300 hover:border-electric-500/50 hover:bg-electric-500/5 cursor-pointer ${
                      isDark
                        ? "bg-slate-800/30 border-electric-500/10"
                        : "bg-white/40 border-electric-400/10"
                    }`}
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span
                        className={
                          isDark ? "text-electric-400" : "text-electric-600"
                        }
                      >
                        {group.label}
                      </span>
                    </p>
                    <ul
                      className={`space-y-1 text-xs font-medium ${isDark ? "text-slate-400" : "text-slate-600"}`}
                    >
                      {group.items.map((item) => (
                        <li key={item} className="flex items-center gap-2">
                          <span
                            className={`w-1 h-1 rounded-full ${isDark ? "bg-electric-500/50" : "bg-electric-500/40"}`}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
