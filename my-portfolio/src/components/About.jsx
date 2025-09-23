import { useTheme } from "../context/ThemeContext.jsx";

const keySkills = [
  "React / Next.js",
  "Node.js / FastAPI",
  "PostgreSQL & MongoDB",
  "Docker & container orchestration",
  "GitHub Actions & CI/CD",
  "Testing & accessibility",
];

const About = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <section id="about" className="py-20 md:py-28">
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
        <div>
          <span className="section-eyebrow">About</span>
          <h2
            className={`section-title mt-4 text-3xl sm:text-4xl ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            From Sydney to scalable web products
          </h2>
          <p
            className={`mt-6 text-lg leading-relaxed ${
              isDark ? "text-slate-300" : "text-slate-600"
            }`}
          >
            I’m a Sydney-based Software Engineering master’s student (USYD) with
            a CS foundation (UNSW). I build end-to-end web apps with React,
            Next.js, Node.js/FastAPI, and PostgreSQL, focusing on clean
            architecture, performance, and great UX. Projects include an
            AI-assisted crypto dashboard, a personal finance tracker, and a
            biomedical image annotation tool. I enjoy owning features across the
            stack—APIs, databases, CI—and collaborating in agile teams. I’m
            seeking a Software Engineering Internship to ship value and learn
            from experienced engineers.
          </p>
        </div>

        <div className="space-y-6">
          <div
            className={`card-base ${
              isDark ? "card-layer-dark" : "card-layer-light"
            } p-6 sm:p-7`}
          >
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              What I bring
            </h3>
            <ul
              className={`mt-4 space-y-3 text-sm ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {keySkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2563eb]"></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`card-base ${
              isDark ? "card-layer-dark" : "card-layer-light"
            } p-6 sm:p-7`}
          >
            <h3
              className={`text-lg font-semibold ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Collaboration style
            </h3>
            <p
              className={`mt-4 text-sm ${
                isDark ? "text-slate-300" : "text-slate-600"
              }`}
            >
              I thrive in squads where strategy and delivery stay tightly
              aligned. Expect plenty of pairing, transparent async updates, and
              thoughtful documentation so teams can move fast without cutting
              corners.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
