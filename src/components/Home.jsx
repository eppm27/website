import { Link as ScrollLink } from "react-scroll";
import { useState, useEffect } from "react";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-8 pb-14 sm:pt-20 md:pt-24 md:pb-20"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="notebook-grid"></div>
        <div className="absolute top-14 -right-20 h-64 w-64 rounded-full bg-sky/25 blur-3xl animate-float"></div>
        <div
          className="absolute bottom-6 -left-24 h-56 w-56 rounded-full bg-peach/25 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6 relative z-10">
        <div className="grid min-h-[calc(100vh-6rem)] gap-10 lg:min-h-[620px] lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-14">
          <div>
            <div
              className={`inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white/70 px-4 py-2 shadow-sm ${isVisible ? "animate-slide-up" : "opacity-0"}`}
            >
              <span className="h-2 w-2 rounded-full bg-mint animate-pulse"></span>
              <span className="text-xs font-semibold text-ink/70 tracking-wide">
                Sydney · Open to internships and early-career roles
              </span>
            </div>

            <h1
              className={`mt-6 max-w-4xl text-4xl font-bold leading-[1.04] text-ink sm:text-6xl lg:text-7xl ${isVisible ? "animate-slide-up delay-100" : "opacity-0"}`}
            >
              Software engineer building thoughtful full-stack products.
            </h1>

            <p
              className={`mt-5 max-w-2xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
            >
              I am completing a Master of Professional Engineering (Software)
              at the University of Sydney. I build full-stack applications,
              REST APIs, AI-enabled systems and containerised services.
            </p>

            <div
              className={`mt-7 flex flex-wrap items-center gap-3 sm:mt-10 sm:gap-4 ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}
            >
              <ScrollLink
                to="projects"
                smooth
                duration={500}
                offset={-80}
                className="btn-primary focus-ring cursor-pointer"
              >
                View case studies
                <span aria-hidden="true">→</span>
              </ScrollLink>
              <a
                href="/Ei-Phyu-Phyu-Mon-CV.pdf"
                className="btn-secondary focus-ring"
                download
              >
                Download résumé
              </a>
              <a href="mailto:eppmon27@gmail.com" className="btn-quiet focus-ring">
                Email me
              </a>
            </div>

            <div
              className={`mt-10 flex flex-wrap gap-3 text-sm text-ink/60 ${isVisible ? "animate-slide-up delay-400" : "opacity-0"}`}
            >
              <span className="mini-chip">React</span>
              <span className="mini-chip">FastAPI</span>
              <span className="mini-chip">Spring Boot</span>
              <span className="mini-chip">Docker</span>
              <span className="mini-chip">CI/CD</span>
            </div>
          </div>

          <div
            className={`mt-8 lg:mt-0 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
          >
            <div className="notebook-card rotate-card p-6 sm:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="h-3 w-3 rounded-full bg-peach"></div>
                <div className="h-3 w-3 rounded-full bg-honey"></div>
                <div className="h-3 w-3 rounded-full bg-mint"></div>
                <span className="ml-2 text-xs font-bold uppercase tracking-widest text-ink/50">
                  Recruiter snapshot
                </span>
              </div>

              <div className="grid gap-4">
                {[
                  {
                    label: "Builds",
                    items: ["Full-stack apps", "REST APIs", "AI features"],
                  },
                  {
                    label: "Solves",
                    items: ["Debugging", "Data integration", "Testing"],
                  },
                  {
                    label: "Ships with",
                    items: ["React", "Next.js", "Python", "Java", "Docker"],
                  },
                ].map((group, idx) => (
                  <div
                    key={group.label}
                    className="rounded-2xl border border-ink/10 bg-white/70 p-4 transition duration-300 hover:-translate-y-1 hover:border-sky/50 hover:shadow-[0_12px_30px_rgba(110,168,254,0.18)]"
                    style={{ animationDelay: `${idx * 0.1}s` }}
                  >
                    <p className="text-xs font-bold uppercase tracking-wide mb-3 flex items-center gap-2">
                      <span className="text-ink">{group.label}</span>
                    </p>
                    <ul className="flex flex-wrap gap-2 text-xs font-medium text-ink/60">
                      {group.items.map((item) => (
                        <li key={item} className="rounded-full bg-mint/20 px-3 py-1">
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
