import { useMemo, useState } from "react";

const Skills = () => {
  const skillCategories = useMemo(
    () => ({
      foundations: {
        title: "Core Stack",
        description:
          "Languages and frameworks I rely on day-to-day to architect reliable experiences.",
        skills: [
          { name: "JavaScript / TypeScript", level: 95 },
          { name: "React & React Native", level: 92 },
          { name: "Node.js & Express", level: 88 },
          { name: "Python", level: 90 },
          { name: "Java", level: 80 },
          { name: "SQL", level: 85 },
        ],
      },
      tooling: {
        title: "Tooling & Platforms",
        description:
          "Environments that help me ship, measure, and iterate with confidence.",
        skills: [
          { name: "Docker & CI/CD", level: 85 },
          { name: "AWS & Firebase", level: 82 },
          { name: "MongoDB", level: 80 },
          { name: "Git & GitHub Actions", level: 90 },
          { name: "Jira & Agile delivery", level: 84 },
          { name: "Figma & Design Systems", level: 78 },
        ],
      },
      experience: {
        title: "Product Craft",
        description:
          "Ways I partner with teams to uncover insights and deliver polished outcomes.",
        skills: [
          { name: "UX research synthesis", level: 82 },
          { name: "Design facilitation", level: 80 },
          { name: "Experimentation & analytics", level: 76 },
          { name: "System architecture", level: 88 },
          { name: "Mentoring & leadership", level: 84 },
          { name: "Stakeholder communication", level: 90 },
        ],
      },
    }),
    []
  );

  const [selectedCategory, setSelectedCategory] = useState("foundations");

  const badges = [
    "Full-stack delivery",
    "Design systems",
    "Inclusive teamwork",
    "Continuous learning",
  ];

  const getLevelGradient = (level) => {
    if (level >= 90) return "from-emerald-400 via-emerald-500 to-emerald-600";
    if (level >= 80) return "from-blue-400 via-blue-500 to-indigo-500";
    return "from-amber-400 via-amber-500 to-orange-500";
  };

  return (
    <section id="skills" className="bg-slate-50 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <span className="eyebrow">Expertise</span>
          <h2 className="section-title mt-4 text-4xl text-slate-900 sm:text-5xl">
            A toolkit shaped by building end-to-end digital products.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            From foundational engineering to thoughtful product discovery, I bring a cross-disciplinary
            skill set that keeps teams aligned and shipping with clarity.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-3">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`rounded-full border px-4 py-2 text-sm font-medium transition ${
                selectedCategory === key
                  ? "border-blue-200 bg-blue-600 text-white shadow-sm"
                  : "border-slate-200 bg-white text-slate-600 hover:border-blue-200 hover:text-blue-600"
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
            <h3 className="text-xl font-semibold text-slate-900">
              {skillCategories[selectedCategory].title}
            </h3>
            <p className="mt-3 text-sm text-slate-600">
              {skillCategories[selectedCategory].description}
            </p>

            <div className="mt-8 space-y-5">
              {skillCategories[selectedCategory].skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex items-center justify-between text-sm text-slate-500">
                    <span className="font-medium text-slate-700">{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-slate-100">
                    <div
                      className={`h-full bg-gradient-to-r ${getLevelGradient(skill.level)}`}
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-10">
            <div className="rounded-3xl bg-slate-900 px-8 py-10 text-slate-100 shadow-xl">
              <p className="text-sm uppercase tracking-[0.3em] text-blue-200">How I work</p>
              <p className="mt-4 text-lg text-slate-200">
                I lead with clarity, zooming between roadmaps, whiteboards, and code reviews to keep momentum
                high and feedback loops short. Every sprint balances discovery learnings with delivery work.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {badges.map((badge) => (
                  <span
                    key={badge}
                    className="rounded-full border border-blue-200/40 bg-white/5 px-4 py-2 text-xs font-semibold text-blue-100"
                  >
                    {badge}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-xl ring-1 ring-slate-100">
              <h3 className="text-xl font-semibold text-slate-900">Recent focus areas</h3>
              <ul className="mt-4 space-y-3 text-sm text-slate-600">
                <li>• Designing type-safe APIs with GraphQL and tRPC.</li>
                <li>• Improving CI pipelines to cut regression time by 35%.</li>
                <li>• Prototyping AI-assisted product flows with OpenAI tools.</li>
              </ul>
              <div className="mt-6 text-xs uppercase tracking-[0.2em] text-slate-400">
                Always learning: Next.js 14 · AWS Solutions Architect · Data storytelling
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
