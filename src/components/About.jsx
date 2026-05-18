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
      <div className="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1fr_1fr] lg:gap-16">
        <div>
          <span
            className={`inline-block text-xs font-bold tracking-widest uppercase ${
              isDark ? "text-sage-400" : "text-sage-600"
            }`}
          >
            About
          </span>
          <h2
            className={`mt-4 text-4xl sm:text-5xl font-bold leading-tight ${
              isDark ? "text-white" : "text-slate-900"
            }`}
          >
            From Sydney to scalable web products
          </h2>
          <p
            className={`mt-8 text-lg leading-relaxed ${
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
            className={`rounded-lg p-6 sm:p-7 border transition ${
              isDark
                ? "bg-slate-800/40 border-sage-600/20 hover:bg-slate-800/60"
                : "bg-white border-sage-200/30 hover:bg-slate-50"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Key Skills
            </h3>
            <ul
              className={`space-y-3 text-sm ${
                isDark ? "text-slate-300" : "text-slate-700"
              }`}
            >
              {keySkills.map((skill) => (
                <li key={skill} className="flex items-start gap-3">
                  <span className={`mt-1.5 inline-block h-1.5 w-1.5 rounded-full flex-shrink-0 ${
                    isDark ? "bg-sage-400" : "bg-sage-600"
                  }`}></span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={`rounded-lg p-6 sm:p-7 border transition ${
              isDark
                ? "bg-slate-800/40 border-sage-600/20 hover:bg-slate-800/60"
                : "bg-white border-sage-200/30 hover:bg-slate-50"
            }`}
          >
            <h3
              className={`text-lg font-bold mb-4 ${
                isDark ? "text-white" : "text-slate-900"
              }`}
            >
              Collaboration Style
            </h3>
            <p
              className={`text-sm leading-relaxed ${
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
