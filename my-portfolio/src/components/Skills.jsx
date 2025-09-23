import { useState } from "react";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("languages");
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skillCategories = {
    languages: {
      title: "Programming Languages 🚀",
      icon: "💻",
      color: "from-blue-400 to-purple-600",
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
        {
          name: "C",
          level: 75,
          icon: "🔧",
          fun: "The OG programming language!",
        },
        { name: "SQL", level: 85, icon: "🗃️", fun: "Database whisperer!" },
      ],
    },
    tools: {
      title: "Tools & Platforms 🛠️",
      icon: "🔨",
      color: "from-green-400 to-blue-500",
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
          name: "Google Cloud",
          level: 78,
          icon: "☁️",
          fun: "Cloud computing wizard!",
        },
      ],
    },
    frameworks: {
      title: "Frameworks & Libraries 📚",
      icon: "🏗️",
      color: "from-pink-400 to-red-500",
      skills: [
        {
          name: "React Native",
          level: 85,
          icon: "📱",
          fun: "Mobile app magician!",
        },
        {
          name: "Express.js",
          level: 88,
          icon: "🚂",
          fun: "Fast backend express!",
        },
        {
          name: "Flask",
          level: 82,
          icon: "🌶️",
          fun: "Lightweight Python power!",
        },
        {
          name: "Django",
          level: 75,
          icon: "🎵",
          fun: "Python web framework rockstar!",
        },
        {
          name: "Tailwind CSS",
          level: 90,
          icon: "🌊",
          fun: "Utility-first styling pro!",
        },
        { name: "Jest", level: 80, icon: "🃏", fun: "Testing is no joke!" },
        {
          name: "Cypress",
          level: 78,
          icon: "🌲",
          fun: "E2E testing forest ranger!",
        },
        {
          name: "Vitest",
          level: 85,
          icon: "⚡",
          fun: "Lightning fast testing!",
        },
      ],
    },
    practices: {
      title: "Development Practices 🎯",
      icon: "📈",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Agile/Scrum", level: 88, icon: "🏃‍♂️", fun: "Sprint master!" },
        {
          name: "CI/CD",
          level: 85,
          icon: "🔄",
          fun: "Deployment pipeline architect!",
        },
        {
          name: "TDD",
          level: 80,
          icon: "🧪",
          fun: "Test-driven development guru!",
        },
        {
          name: "REST APIs",
          level: 90,
          icon: "🔗",
          fun: "API design specialist!",
        },
        {
          name: "Microservices",
          level: 75,
          icon: "🧩",
          fun: "Breaking down monoliths!",
        },
        { name: "DevOps", level: 78, icon: "⚙️", fun: "Bridging dev and ops!" },
        {
          name: "Code Review",
          level: 85,
          icon: "👀",
          fun: "Bug hunting detective!",
        },
        {
          name: "Documentation",
          level: 82,
          icon: "📝",
          fun: "Making code readable!",
        },
      ],
    },
  };

  const getSkillColor = (level) => {
    if (level >= 90) return "text-green-400";
    if (level >= 80) return "text-blue-400";
    if (level >= 70) return "text-yellow-400";
    return "text-red-400";
  };

  const getProgressColor = (level) => {
    if (level >= 90) return "progress-success";
    if (level >= 80) return "progress-info";
    if (level >= 70) return "progress-warning";
    return "progress-error";
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Fun Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4 animate-pulse">
            My Skill Arsenal 🎮
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Level up your projects with these power-ups!
          </p>

          {/* Category Selector */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setSelectedCategory(key)}
                className={`btn btn-lg transition-all duration-300 hover:scale-110 ${
                  selectedCategory === key
                    ? "btn-primary shadow-2xl"
                    : "btn-outline btn-primary hover:btn-primary"
                }`}
              >
                <span className="text-2xl mr-2">{category.icon}</span>
                <span className="hidden md:inline">
                  {category.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Selected Category Display */}
        <div className="mb-8">
          <div
            className={`bg-gradient-to-r ${skillCategories[selectedCategory].color} rounded-2xl p-8 shadow-2xl`}
          >
            <h3 className="text-3xl font-bold text-white text-center mb-8">
              {skillCategories[selectedCategory].title}
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {skillCategories[selectedCategory].skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  onMouseEnter={() => setHoveredSkill(skill)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-center">
                    <div className="text-4xl mb-3 group-hover:animate-bounce">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-bold text-lg mb-3">
                      {skill.name}
                    </h4>

                    {/* Skill Level Progress */}
                    <div className="mb-3">
                      <div className="flex justify-between text-sm text-white/80 mb-1">
                        <span>Level</span>
                        <span className={getSkillColor(skill.level)}>
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

                    {/* Fun Fact */}
                    <div className="text-xs text-white/70 italic">
                      {skill.fun}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Hovered Skill Detail */}
        {hoveredSkill && (
          <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-lg rounded-xl p-4 text-white shadow-2xl animate-fadeIn z-50">
            <div className="flex items-center gap-3">
              <span className="text-2xl">{hoveredSkill.icon}</span>
              <div>
                <div className="font-bold">{hoveredSkill.name}</div>
                <div className="text-sm text-white/70">{hoveredSkill.fun}</div>
              </div>
            </div>
          </div>
        )}

        {/* Fun Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🏆</div>
            <div className="text-2xl font-bold text-white">30+</div>
            <div className="text-white/70">Technologies Mastered</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">⚡</div>
            <div className="text-2xl font-bold text-white">2+</div>
            <div className="text-white/70">Years Experience</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🚀</div>
            <div className="text-2xl font-bold text-white">5+</div>
            <div className="text-white/70">Projects Launched</div>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center hover:scale-105 transition-all duration-300">
            <div className="text-4xl mb-2">🎯</div>
            <div className="text-2xl font-bold text-white">85%+</div>
            <div className="text-white/70">Code Coverage</div>
          </div>
        </div>

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.3s ease-out;
          }
        `}</style>
      </div>
    </section>
  );
};

export default Skills;
