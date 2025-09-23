import { useMemo, useState } from "react";
import { useTheme } from "../context/ThemeContext.jsx";
import TechBadge from "./TechBadge.jsx";

const buildCategories = () => ({
  foundations: {
    title: "Engineering core",
    description: "Languages and frameworks I use to architect resilient, accessible experiences.",
    skills: [
      { name: "TypeScript & JavaScript", level: 95 },
      { name: "React & Next.js", level: 92 },
      { name: "Node.js & Express", level: 88 },
      { name: "Python (FastAPI)", level: 90 },
      { name: "PostgreSQL & MongoDB", level: 86 },
    ],
  },
  tooling: {
    title: "Delivery toolkit",
    description: "Platforms that keep experiments measurable and releases reliable.",
    skills: [
      { name: "Docker & containerisation", level: 86 },
      { name: "GitHub Actions & CI", level: 88 },
      { name: "AWS & Firebase", level: 80 },
      { name: "Testing (Jest, Playwright)", level: 82 },
      { name: "Analytics & observability", level: 78 },
    ],
  },
  collaboration: {
    title: "Product craft",
    description: "Ways I partner with teams to turn discovery insights into launch-ready features.",
    skills: [
      { name: "UX research synthesis", level: 82 },
      { name: "Agile facilitation", level: 84 },
      { name: "Technical documentation", level: 88 },
      { name: "Accessibility & performance audits", level: 80 },
      { name: "Stakeholder storytelling", level: 86 },
    ],
  },
});

const recentHighlights = [
  "Shipping a CI pipeline that cut regression time by 35%",
  "Prototyping AI-assisted onboarding flows with OpenAI",
  "Designing end-to-end data models for analytics features",
];

const Skills = () => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const categoryConfig = useMemo(buildCategories, []);
  const [selectedCategory, setSelectedCategory] = useState("foundations");

  return (
    <section id="skills" className="py-20 md:py-28">
      <div className="mx-auto w-full max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="section-eyebrow">Skills</span>
          <h2 className={`section-title mt-4 text-3xl sm:text-4xl ${isDark ? "text-white" : "text-slate-900"}`}>
            A toolkit tuned for thoughtful, fast delivery
          </h2>
          <p className={`mx-auto mt-6 max-w-3xl text-lg ${isDark ? "text-slate-300" : "text-slate-600"}`}>
            From foundational engineering to product strategy, I keep teams aligned on outcomes while maintaining a
            clean technical core.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-2 sm:gap-3">
          {Object.entries(categoryConfig).map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setSelectedCategory(key)}
              className={`focus-ring rounded-full px-4 py-2 text-sm font-semibold transition ${
                selectedCategory === key
                  ? "bg-[#2563eb] text-white shadow-lg shadow-[#2563eb]/30"
                  : isDark
                  ? "bg-slate-900/60 text-slate-300 border border-slate-700/60"
                  : "bg-white text-slate-600 border border-slate-200"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_0.9fr]">
          <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
            <h3 className={`text-xl font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
              {categoryConfig[selectedCategory].title}
            </h3>
            <p className={`mt-3 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
              {categoryConfig[selectedCategory].description}
            </p>

            <div className="mt-8 space-y-5">
              {categoryConfig[selectedCategory].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm">
                    <span className={isDark ? "text-white" : "text-slate-800"}>{skill.name}</span>
                    <span className={isDark ? "text-slate-400" : "text-slate-500"}>{skill.level}%</span>
                  </div>
                  <div className={`mt-2 h-2.5 w-full overflow-hidden rounded-full ${isDark ? "bg-slate-800" : "bg-slate-200"}`}>
                    <div
                      className="h-full rounded-full bg-gradient-to-r from-[#2563eb] via-[#3b82f6] to-[#6366f1]"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Collaboration highlights
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {["Design systems", "API architecture", "Inclusive teamwork", "Continuous learning"].map((item) => (
                  <TechBadge key={item} label={item} />
                ))}
              </div>
            </div>

            <div className={`card-base ${isDark ? "card-layer-dark" : "card-layer-light"} p-6 sm:p-8`}>
              <h3 className={`text-lg font-semibold ${isDark ? "text-white" : "text-slate-900"}`}>
                Recent focus
              </h3>
              <ul className={`mt-4 space-y-3 text-sm ${isDark ? "text-slate-300" : "text-slate-600"}`}>
                {recentHighlights.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[#2563eb]"></span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
