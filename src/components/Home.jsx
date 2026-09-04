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
      className="relative overflow-hidden pt-8 pb-14 sm:pt-20 md:pt-24 md:pb-16"
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
        <div className="flex min-h-[calc(100vh-8rem)] max-w-4xl flex-col justify-center">
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
              className={`mt-5 max-w-3xl text-base leading-7 text-ink/70 sm:text-lg sm:leading-8 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
            >
              USYD software engineering master&apos;s student and UNSW computer
              science graduate with experience building and debugging
              full-stack applications, APIs and AI-enabled systems.
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
                View projects
                <span aria-hidden="true">→</span>
              </ScrollLink>
              <a
                href="/Ei-Phyu-Phyu-Mon-CV.pdf"
                className="btn-secondary focus-ring"
                download
              >
                Download résumé
              </a>
              <a href="mailto:eppmon27@gmail.com" className="focus-ring ml-1 text-sm font-bold text-ink/60 transition hover:text-ink">
                Email me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
