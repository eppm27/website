import { useState } from "react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    languages: {
      title: "Programming Languages 🚀",
      icon: "💻",
      skills: [
        {
          name: "JavaScript",
          level: 95,
          icon: "🟨",
          fun: "The language that runs the web!",
        },
        {
          name: "Python",
          level: 90,
          icon: "🐍",
          fun: "Snake charmer level expert!",
        },
        {
          name: "React",
          level: 92,
          icon: "⚛️",
          fun: "Making UIs reactive since forever!",
        },
        {
          name: "Node.js",
          level: 88,
          icon: "🟢",
          fun: "Server-side JavaScript wizard!",
        },
        {
          name: "TypeScript",
          level: 85,
          icon: "🔷",
          fun: "JavaScript's smarter sibling!",
        },
        {
          name: "Java",
          level: 80,
          icon: "☕",
          fun: "More addictive than coffee!",
        },
        { name: "C", level: 75, icon: "��", fun: "Low-level legend!" },
        { name: "SQL", level: 85, icon: "📊", fun: "Database query champion!" },
      ],
    },
    tools: {
      title: "Tools & Technologies 🔨",
      icon: "🔨",
      skills: [
        {
          name: "Docker",
          level: 85,
          icon: "🐳",
          fun: "Containerizing like a pro!",
        },
        { name: "Git", level: 90, icon: "🔀", fun: "Version control master!" },
        {
          name: "Firebase",
          level: 88,
          icon: "🔥",
          fun: "Backend as a Service hero!",
        },
        {
          name: "MongoDB",
          level: 82,
          icon: "🍃",
          fun: "NoSQL database ninja!",
        },
        {
          name: "Figma",
          level: 75,
          icon: "🎨",
          fun: "Design tool extraordinaire!",
        },
        {
          name: "Jira",
          level: 80,
          icon: "📋",
          fun: "Project management guru!",
        },
        {
          name: "Postman",
          level: 85,
          icon: "📮",
          fun: "API testing champion!",
        },
        {
          name: "VS Code",
          level: 95,
          icon: "📝",
          fun: "Code editor extraordinaire!",
        },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries 📚",
      icon: "📚",
      skills: [
        {
          name: "React Native",
          level: 88,
          icon: "📱",
          fun: "Mobile app wizard!",
        },
        {
          name: "Express.js",
          level: 85,
          icon: "🚀",
          fun: "Backend framework champion!",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: "🎨",
          fun: "Styling made simple!",
        },
        { name: "Jest", level: 80, icon: "🧪", fun: "Testing framework hero!" },
        { name: "Cypress", level: 85, icon: "🔍", fun: "E2E testing expert!" },
        {
          name: "Socket.io",
          level: 75,
          icon: "🔌",
          fun: "Real-time communication master!",
        },
        {
          name: "Redux",
          level: 78,
          icon: "🗂️",
          fun: "State management ninja!",
        },
        {
          name: "Material-UI",
          level: 82,
          icon: "🎪",
          fun: "Component library legend!",
        },
      ],
    },
  };

  const getProgressColor = (level) => {
    if (level >= 90) return "progress-success";
    if (level >= 80) return "progress-primary";
    if (level >= 70) return "progress-warning";
    return "progress-error";
  };

  const getSkillBadge = (level) => {
    if (level >= 90) return { text: "Expert", style: "badge-success" };
    if (level >= 80) return { text: "Advanced", style: "badge-primary" };
    if (level >= 70) return { text: "Intermediate", style: "badge-warning" };
    return { text: "Learning", style: "badge-error" };
  };

  return (
    <section id="skills" className="min-h-screen bg-base-100 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="mb-6">
            <span className="text-6xl">⚡</span>
          </div>
          <h2 className="text-5xl font-bold text-base-content mb-6">
            Skills & Technologies
          </h2>
          <p className="text-xl text-base-content/70 mb-8 max-w-3xl mx-auto">
            My technical arsenal built through years of coding, learning, and
            creating amazing projects! 💪
          </p>
          <div className="flex justify-center gap-4">
            <div className="badge badge-primary badge-lg">
              Full-Stack Developer
            </div>
            <div className="badge badge-secondary badge-lg">
              Always Learning
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center mb-12">
          <div className="tabs tabs-boxed bg-base-300">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`tab tab-lg ${
                  selectedCategory === key ? "tab-active" : ""
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title.split(" ")[0]} {category.title.split(" ")[1]}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="mb-16">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-base-content mb-4">
              {skillCategories[selectedCategory].title}
            </h3>
            <p className="text-base-content/70">
              Hover over any skill to see my fun take on it! 😄
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories[selectedCategory].skills.map((skill, index) => {
              const badge = getSkillBadge(skill.level);
              return (
                <div
                  key={index}
                  className="card bg-base-200 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="card-body text-center p-6">
                    <div className="text-4xl mb-3">{skill.icon}</div>
                    <h4 className="font-bold text-lg text-base-content mb-3">
                      {skill.name}
                    </h4>

                    {/* Progress Bar */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm text-base-content/70">
                          Proficiency
                        </span>
                        <span className="text-sm font-bold text-base-content">
                          {skill.level}%
                        </span>
                      </div>
                      <progress
                        className={`progress ${getProgressColor(
                          skill.level
                        )} w-full`}
                        value={skill.level}
                        max="100"
                      ></progress>
                    </div>

                    {/* Skill Badge */}
                    <div className={`badge ${badge.style} mb-3`}>
                      {badge.text}
                    </div>

                    {/* Fun Description */}
                    <div
                      className={`transition-all duration-300 ${
                        hoveredSkill === index
                          ? "opacity-100 max-h-20"
                          : "opacity-0 max-h-0"
                      } overflow-hidden`}
                    >
                      <p className="text-sm text-base-content/80 italic">
                        {skill.fun}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-base-content mb-4">
              Quick Stats
            </h3>
            <p className="text-base-content/70">
              A snapshot of my technical journey
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              {
                emoji: "🎯",
                value: "8+",
                label: "Languages",
                desc: "Mastered programming languages",
              },
              {
                emoji: "⚡",
                value: "15+",
                label: "Technologies",
                desc: "Tools & frameworks used",
              },
              {
                emoji: "🚀",
                value: "5+",
                label: "Major Projects",
                desc: "Complex applications built",
              },
              {
                emoji: "📈",
                value: "2+",
                label: "Years Experience",
                desc: "Continuous learning & building",
              },
            ].map((stat, index) => (
              <div
                key={index}
                className="card bg-gradient-to-br from-primary/20 to-secondary/20 shadow-xl"
              >
                <div className="card-body text-center p-6">
                  <div className="text-4xl mb-3">{stat.emoji}</div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="font-semibold text-base-content mb-1">
                    {stat.label}
                  </div>
                  <div className="text-sm text-base-content/60">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Learning Journey */}
        <div className="mt-20 text-center">
          <div className="card bg-gradient-to-r from-primary to-secondary text-primary-content shadow-xl">
            <div className="card-body py-12">
              <h3 className="card-title justify-center text-3xl mb-6">
                Always Learning, Always Growing 🌱
              </h3>
              <p className="text-primary-content/90 mb-8 max-w-2xl mx-auto text-lg">
                Technology evolves fast, and so do I! Currently exploring AI/ML,
                cloud architecture, and the latest web technologies. The
                learning never stops! 🚀
              </p>
              <div className="card-actions justify-center">
                <div className="flex gap-4">
                  <div className="badge badge-neutral badge-lg">Next.js 14</div>
                  <div className="badge badge-neutral badge-lg">AWS Cloud</div>
                  <div className="badge badge-neutral badge-lg">GraphQL</div>
                  <div className="badge badge-neutral badge-lg">AI/ML</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
