import { useState } from "react";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [viewMode, setViewMode] = useState("cards");

  const projects = [
    {
      id: 1,
      title: "StudySpark",
      subtitle: "React Native + Firebase",
      period: "March 2025",
      emoji: "📚",
      color: "from-blue-400 to-purple-600",
      description:
        "A swipe-based study buddy app that connects students for collaborative learning!",
      longDescription:
        "Built study-buddy app with in-app swipe-based UX and Firebase Auth for secure login. This app revolutionizes how students connect and study together!",
      features: [
        "🔥 Real-time chat with 50+ concurrent users",
        "👆 Intuitive swipe-based matching system",
        "🔐 Secure Firebase authentication",
        "📱 Cross-platform mobile experience",
      ],
      tech: ["React Native", "Firebase", "Authentication", "Real-time Chat"],
      stats: { users: "50+", rating: "4.8/5", downloads: "1K+" },
      funFact: "Students increased their study time by 40% using this app!",
    },
    {
      id: 2,
      title: "Presto",
      subtitle: "React + REST API + Cypress",
      period: "November 2024",
      emoji: "🎤",
      color: "from-green-400 to-blue-500",
      description:
        "Interactive Q&A presentation platform with live slide creation magic!",
      longDescription:
        "Built MVP frontend for an interactive Q&A app with live slide creation and multimedia support. Making presentations fun again!",
      features: [
        "🎨 Live slide creation with multimedia support",
        "❓ Interactive Q&A system for audiences",
        "🧪 Automated testing with Cypress & Vitest",
        "⚡ 35% reduction in manual QA effort",
      ],
      tech: ["React", "REST API", "Cypress", "Vitest", "UI Testing"],
      stats: { efficiency: "35%", coverage: "85%", demos: "20+" },
      funFact: "Presenters reported 60% more audience engagement!",
    },
    {
      id: 3,
      title: "Dungeon Mania",
      subtitle: "Java + JUnit",
      period: "August 2024",
      emoji: "🏰",
      color: "from-purple-400 to-pink-500",
      description:
        "Epic game engine refactoring adventure with design patterns!",
      longDescription:
        "Refactored and extended a Java-based game engine using design patterns, removing code smells and implementing new features. Boss level coding achieved!",
      features: [
        "🔧 Refactored using advanced design patterns",
        "🐛 Eliminated 20+ code smells",
        "⚔️ Added epic time battles & logic circuits",
        "✅ Achieved 95% JUnit test coverage",
      ],
      tech: ["Java", "JUnit", "Design Patterns", "Game Development"],
      stats: { coverage: "95%", smells: "20+", features: "5+" },
      funFact: "The game engine now runs 3x faster than before!",
    },
    {
      id: 4,
      title: "CryptoChat",
      subtitle: "Full-Stack Application",
      period: "Feb 2025 - May 2025",
      emoji: "💰",
      color: "from-yellow-400 to-red-500",
      description: "AI-powered crypto chatbot with lightning-fast responses!",
      longDescription:
        "Built full-powered crypto chatbot with React/Node.js/MongoDB, improving query latency to <500ms for 50+ users. The future of financial conversations!",
      features: [
        "🤖 Integrated OpenAI + financial APIs",
        "🐳 Dockerized backend architecture",
        "⚡ <500ms query response time",
        "🚀 GitHub Actions automation",
      ],
      tech: [
        "React",
        "Node.js",
        "MongoDB",
        "OpenAI API",
        "Docker",
        "GitHub Actions",
      ],
      stats: { latency: "<500ms", users: "50+", uptime: "99.9%" },
      funFact: "Users get crypto insights faster than market changes!",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-gradient-to-br from-cyan-900 via-blue-900 to-purple-900 py-20 px-4"
    >
      <div className="max-w-7xl mx-auto">
        {/* Fun Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            My Digital Playground 🎮
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Welcome to my collection of awesome projects! Click to explore 🚀
          </p>

          {/* View Mode Toggle */}
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={() => setViewMode("cards")}
              className={`btn ${
                viewMode === "cards" ? "btn-primary" : "btn-outline btn-primary"
              }`}
            >
              🃏 Card View
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`btn ${
                viewMode === "list"
                  ? "btn-secondary"
                  : "btn-outline btn-secondary"
              }`}
            >
              📋 List View
            </button>
          </div>
        </div>

        {/* Projects Display */}
        {viewMode === "cards" ? (
          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`relative overflow-hidden rounded-2xl shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer group`}
                onClick={() => setSelectedProject(project)}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Gradient Background */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-90`}
                ></div>

                {/* Content */}
                <div className="relative p-8 text-white">
                  <div className="flex items-start justify-between mb-6">
                    <div>
                      <div className="text-6xl mb-4 group-hover:animate-bounce">
                        {project.emoji}
                      </div>
                      <h3 className="text-3xl font-bold mb-2">
                        {project.title}
                      </h3>
                      <p className="text-white/80 text-lg">
                        {project.subtitle}
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="badge badge-neutral badge-lg">
                        {project.period}
                      </div>
                    </div>
                  </div>

                  <p className="text-lg mb-6 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Quick Stats */}
                  <div className="grid grid-cols-3 gap-4 mb-6">
                    {Object.entries(project.stats).map(([key, value]) => (
                      <div
                        key={key}
                        className="text-center bg-white/10 rounded-lg p-3"
                      >
                        <div className="text-xl font-bold">{value}</div>
                        <div className="text-xs capitalize opacity-80">
                          {key}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.slice(0, 4).map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="badge badge-ghost text-white/90"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="badge badge-ghost text-white/90">
                        +{project.tech.length - 4} more
                      </span>
                    )}
                  </div>

                  {/* Hover Indicator */}
                  <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="text-2xl animate-pulse">👆 Click me!</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="space-y-6">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/20 transition-all duration-300 cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-center gap-6">
                  <div className="text-4xl">{project.emoji}</div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white">
                      {project.title}
                    </h3>
                    <p className="text-white/70">{project.description}</p>
                  </div>
                  <div className="text-white/60">{project.period}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <div className="bg-white rounded-2xl max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-fadeIn">
              <div
                className={`bg-gradient-to-r ${selectedProject.color} p-8 text-white`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <div className="text-6xl mb-4">{selectedProject.emoji}</div>
                    <h3 className="text-4xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-xl opacity-90">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="btn btn-circle btn-ghost text-white hover:bg-white/20"
                  >
                    ✕
                  </button>
                </div>
              </div>

              <div className="p-8">
                <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                  {selectedProject.longDescription}
                </p>

                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">
                      🎯 Key Features
                    </h4>
                    <ul className="space-y-2">
                      {selectedProject.features.map((feature, index) => (
                        <li key={index} className="text-gray-600">
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-bold mb-4 text-gray-800">
                      🛠️ Tech Stack
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tech.map((tech, index) => (
                        <span key={index} className="badge badge-outline">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-yellow-50 rounded-lg p-4 border-l-4 border-yellow-400">
                  <p className="text-gray-700">
                    <span className="font-bold">💡 Fun Fact:</span>{" "}
                    {selectedProject.funFact}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        <style jsx>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: scale(0.9);
            }
            to {
              opacity: 1;
              transform: scale(1);
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

export default Projects;
